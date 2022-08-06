import { wrapStore } from 'webext-redux';
import 'regenerator-runtime/runtime.js';
import debounce from 'lodash.debounce';

import { store } from '../../redux/store';
import { BANNED_URLS_PREFIX } from '../../utils/consts';

import Tabs from './Tabs';
import ApiClient from './ApiClient';

wrapStore(store);

chrome.runtime.onInstalled.addListener(() => {
  console.log('onInstalled');

  // Welcome page
  // chrome.tabs.create({
  //   url: chrome.runtime.getURL('/newtab.html'),
  // });
});

const apiClient = new ApiClient({ token: process.env.TEMPORARY_TOKEN });
export const instance = new Tabs();

const createHistory = async (tab) => {
  const identifier = `${tab.id}::${tab.url}`;

  const entity = await apiClient.createHistory({
    href: tab.url,
    title: tab.title,
  });

  console.log('create history', `${tab.id}::${tab.url}`);
  instance.setUrlId(identifier, entity);
};

const onCreatedCb = (tab) => {
  console.log(tab, 'onCreated');
};

const initInterval = debounce(async (tabId) => {
  if (instance.intervalMap[tabId]) {
    console.log('duplicated interval');
    return;
  }

  const curTab = instance.getTab(tabId);
  if (BANNED_URLS_PREFIX.some((v) => curTab.url.startsWith(v))) {
    console.log('Banned URL', curTab.url);
    return;
  }

  const identifier = `${curTab.id}::${curTab.url}`;
  let entity;
  if (!instance.urlIdMap[identifier]) {
    entity = await createHistory(curTab);
  }

  const interval = setInterval(() => {
    console.log('PING API', curTab, curTab.url);

    if (entity) {
      apiClient.increaseDuration({
        id: entity.id,
        seconds: 10,
      });
    }
  }, 10000);

  if (curTab) {
    console.log('init interval', tabId);
    instance.setInterval(tabId, interval);
  }
}, 500);

const onActivatedCb = async ({ tabId }) => {
  console.log(tabId, 'onActivated');

  const interval = instance.getInterval(instance.activeTabId);
  if (interval) {
    console.log('clearInterval', interval, instance.activeTabId);
    clearInterval(interval);
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
      console.log('clearInterval', interval, instance.activeTabId);
      clearInterval(interval);
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
    clearInterval(interval);
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
  chrome.tabs.onCreated.addListener(onCreatedCb);
  chrome.tabs.onActivated.addListener(onActivatedCb);
  chrome.tabs.onUpdated.addListener(onUpdatedCb);
  chrome.tabs.onRemoved.addListener(onRemovedCb);

  // windows events
  chrome.windows.onFocusChanged.addListener(onFocusChangedCb);
});
