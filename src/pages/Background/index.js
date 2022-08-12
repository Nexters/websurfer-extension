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

Axios.defaults.headers.common.Authorization =
  'Bearer ' + process.env.TEMPORARY_TOKEN;

const instance = new Tabs();

const createHistory = async (tab) => {
  const identifier = `${tab.id}::${tab.url}`;
  const existingEntity = instance.urlIdMap[identifier];

  if (existingEntity) {
    console.log('has existing entity', existingEntity);
    return existingEntity;
  }

  const entity = await apiClient.createHistory({
    href: tab.url,
    title: tab.title,
  });

  console.log('CREATE API', `${tab.id}::${tab.url}`);
  instance.setUrlId(identifier, entity);

  return entity;
};

const initInterval = debounce(async (tabId) => {
  if (instance.intervalMap[tabId]) {
    console.log('duplicated interval', tabId, instance.intervalMap[tabId]);
    return;
  }

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
          seconds: 10,
        });

        console.log('UPDATE API', curTab, curTab.url);
      }
    }, 10000);

    instance.setInterval(tabId, interval);
  }
}, 500);

const clearIntervalWithTab = ({ tabId, interval }) => {
  const cleared = clearInterval(interval);

  instance.setInterval(tabId, cleared);
};

const onActivatedCb = async ({ tabId }) => {
  console.log(tabId, 'onActivated');

  const interval = instance.getInterval(instance.activeTabId);
  if (interval) {
    console.log('clearInterval', interval, instance.activeTabId);
    clearIntervalWithTab({ tabId, interval });
  }

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
    const interval = instance.getInterval(tabId);
    if (interval) {
      console.log('clearInterval', interval, tabId);
      clearIntervalWithTab({ tabId, interval });
    }

    instance.setTab(tabId, tab);

    if (instance.activeTabId === tabId && tab?.url) {
      initInterval(tabId);
    }
  }
};

const onRemovedCb = (tabId, removeInfo) => {
  console.log(tabId, removeInfo, 'onRemoved');

  const interval = instance.getInterval(tabId);
  if (interval) {
    console.log('clearInterval', interval, tabId);
    clearIntervalWithTab({ tabId, interval });
  }

  instance.deleteTab(tabId);
};

const onFocusChangedCb = async (windowId) => {
  console.log(windowId, 'onFocusedWindow');

  if (windowId < 0) {
    const allClearedIntervalMap = Object.entries(instance.intervalMap).reduce(
      (acc, [key, value]) => {
        acc[key] = clearInterval(value);
        return acc;
      },
      {}
    );

    instance.setIntervalMap(allClearedIntervalMap);
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

chrome.tabs.query({}, (tabs) => {
  console.log(tabs, 'tabs query');

  if (tabs.length) {
    initExistingTabs(tabs);
  }

  // tabs events
  // chrome.tabs.onActivated.addListener(onActivatedCb);
  // chrome.tabs.onUpdated.addListener(onUpdatedCb);
  // chrome.tabs.onRemoved.addListener(onRemovedCb);

  // windows events
  // chrome.windows.onFocusChanged.addListener(onFocusChangedCb);
});
