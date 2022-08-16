import 'regenerator-runtime/runtime.js';
import debounce from 'lodash.debounce';

import apiClient from '@redux/history/service';

import { BANNED_URLS_PREFIX } from '@utils/consts';
import Axios from '@utils/axios';

import Tabs from './Tabs';

chrome.runtime.onInstalled.addListener(() => {
  console.log('onInstalled');

  // Welcome page
  // chrome.tabs.create({
  //   url: chrome.runtime.getURL('/newtab.html'),
  // });
});

const instance = new Tabs();

const rand = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const wait = (timeToDelay) =>
  new Promise((resolve) => setTimeout(resolve, timeToDelay));

const createHistory = async (tab) => {
  const identifier = `${tab.id}::${tab.url}`;
  const existingEntity = instance.urlIdMap[identifier];

  if (existingEntity) {
    console.log('has existing entity', existingEntity);
    return existingEntity;
  } else {
    await wait(1500);
    const entity = await apiClient.createHistory({
      href: tab.url,
      title: tab.title,
    });

    console.log('CREATE API', `${tab.id}::${tab.url}`);
    instance.setUrlId(identifier, entity);
    return entity;
  }
};

const initInterval = debounce(async (tabId) => {
  clearInterval(instance.intervalId);

  const curTab = instance.getTab(tabId);
  if (BANNED_URLS_PREFIX.some((v) => curTab.url.startsWith(v))) {
    console.log('Banned URL', curTab.url);
    return;
  }

  if (curTab) {
    console.log('init interval', tabId);
    const entity = await createHistory(curTab);
    const interval = setInterval(() => {
      if (entity) {
        apiClient.increaseDuration({
          id: entity.id,
          seconds: rand(7, 12),
        });

        console.log('UPDATE API', curTab, curTab.url);
      }
    }, 10000);

    instance.setInterval(interval);
  }
}, 2000);

const onActivatedCb = async ({ tabId }) => {
  console.log(tabId, 'onActivated');

  clearInterval(instance.intervalId);

  instance.setActiveTabId(tabId);

  const tab = instance.getTab(tabId);
  if (tab.url) {
    initInterval(tabId);
  }
};

const onUpdatedCb = async (tabId, changeInfo, tab) => {
  console.log(tabId, changeInfo, tab, 'onUpdated');
  const { status = '' } = changeInfo;

  if (status === 'complete') {
    clearInterval(instance.intervalId);

    instance.setTab(tabId, tab);

    if (instance.activeTabId === tabId && tab?.url) {
      initInterval(tabId);
    }
  }
};

const onRemovedCb = (tabId, removeInfo) => {
  console.log(tabId, removeInfo, 'onRemoved');

  clearInterval(instance.intervalId);

  instance.deleteTab(tabId);
};

const onFocusChangedCb = async (windowId) => {
  console.log(windowId, 'onFocusedWindow');

  if (windowId < 0) {
    //clear all interval
    clearInterval(instance.intervalId);
    return;
  }

  const currentTabs = await chrome.tabs.query({ active: true });
  const curTabwithWindowId = currentTabs.find(
    (activeTab) => activeTab.windowId === windowId
  );

  if (curTabwithWindowId) {
    initInterval(curTabwithWindowId.id);
    console.log(curTabwithWindowId, 'activate window at window focus changed');
  }
};

const initExistingTabs = (tabs) => {
  const tabsMap = tabs.reduce((acc, val) => {
    const { id } = val;
    acc[id] = val;
    return acc;
  }, {});

  instance.setTabsMap(tabsMap);
};

const initRecording = (token) => {
  Axios.defaults.headers.common.Authorization = 'Bearer ' + token;
  chrome.tabs.query({}, (tabs) => {
    console.log(tabs, 'tabs query');

    if (tabs.length) {
      initExistingTabs(tabs);
    }

    // tabs events
    chrome.tabs.onActivated.addListener(onActivatedCb);
    chrome.tabs.onUpdated.addListener(onUpdatedCb);
    chrome.tabs.onRemoved.addListener(onRemovedCb);

    // windows events
    chrome.windows.onFocusChanged.addListener(onFocusChangedCb);
  });
};

const stopRecording = () => {
  // clear all interval
  clearInterval(instance.intervalId);

  instance.reset();

  Axios.defaults.headers.common.Authorization = '';
  // tabs events
  chrome.tabs.onActivated.removeListener(onActivatedCb);
  chrome.tabs.onUpdated.removeListener(onUpdatedCb);
  chrome.tabs.onRemoved.removeListener(onRemovedCb);

  // windows events
  chrome.windows.onFocusChanged.removeListener(onFocusChangedCb);
};

chrome.storage.local.get(['websurferToken'], (result) => {
  console.log({ result }, 'token');
  if (result?.websurferToken) {
    initRecording(result.websurferToken);
  }
});

// chrome.runtime.onMessage.addListener(console.log);
chrome.runtime.onConnect.addListener((portFrom) => {
  if (portFrom.name === 'websurfer-background-content') {
    portFrom.onMessage.addListener((message) => {
      console.log('message', message);
      const { type, payload } = message;
      switch (type) {
        case 'REQUEST_SIGNING': {
          chrome.storage.local.remove(['websurferToken'], () => {
            chrome.storage.local.set({ websurferToken: payload.token });
            stopRecording();
            initRecording(payload.token);
          });
          break;
        }
        case 'REQUEST_TOKEN': {
          const tabId = portFrom.sender.tab.id;
          chrome.storage.local.get(['websurferToken'], (result) => {
            chrome.tabs.sendMessage(tabId, {
              type: 'RESPONSE_TOKEN',
              payload: { token: result.websurferToken },
            });
          });
          break;
        }
        case 'DELETE_TOKEN': {
          chrome.storage.local.remove(['websurferToken'], () => {
            stopRecording();
          });
          break;
        }
        default: {
          return;
        }
      }
    });
  }
});
