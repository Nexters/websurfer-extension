import { wrapStore } from 'webext-redux';

import { store } from '../../redux/store';

import Tabs from './Tabs';

wrapStore(store);

console.log('This is the background page.');
console.log('Put the background scripts here.');

chrome.runtime.onInstalled.addListener(() => {
  console.log('onInstalled');

  // Welcome page
  // chrome.tabs.create({
  //   url: chrome.runtime.getURL('/newtab.html'),
  // });
});

export const instance = new Tabs();

const onCreatedCb = (tab) => {
  console.log(tab, 'onCreated');
};

const initInterval = (tabId) => {
  console.log('init interval', tabId);

  const interval = setInterval(() => {
    const curTab = instance.getTab(tabId);

    console.log('PING API', curTab, curTab.url);
  }, 10000);

  instance.setInterval(tabId, interval);
};

const onActivatedCb = ({ tabId }) => {
  console.log(tabId, 'onActivated');

  const interval = instance.getInterval(instance.activeTabId);
  if (interval) {
    console.log('clearInterval', interval, instance.activeTabId);
    clearInterval(interval);
  }

  instance.setActiveTabId(tabId);

  const tab = instance.getTab(tabId);

  if (tab.url && !tab?.url?.startsWith('chrome://')) {
    initInterval(tabId);
  }
};

const onUpdatedCb = (tabId, changeInfo, tab) => {
  console.log(tabId, changeInfo, tab, 'onUpdated');
  const { status = '' } = changeInfo;

  if (status === 'complete') {
    const interval = instance.getInterval(tabId);
    if (interval) {
      console.log('clearInterval', interval, instance.activeTabId);
      clearInterval(interval);

      // call API
      console.log('UPDATE HISTORY', tab);
    }

    instance.setTab(tabId, tab);

    if (
      instance.activeTabId === tabId &&
      tab?.url &&
      !tab?.url?.startsWith('chrome://')
    ) {
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
    const allClearedIntervalMap = Object.entries(instance.intervalMap)
      .map(([key, value]) => [key, clearInterval(value)])
      .reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {});

    instance.setIntervalMap(allClearedIntervalMap);
  } else {
    const currentTabs = await chrome.tabs.query({ active: true });

    const curTabwithWindowId = currentTabs.find(
      (activeTab) => activeTab.windowId === windowId
    );

    if (curTabwithWindowId) {
      initInterval(curTabwithWindowId.id);
      console.log(
        curTabwithWindowId,
        'activate window at window focus changed'
      );
    }

    console.log('nothing happen at window focus changed');
  }
};

chrome.tabs.query({}, (tabs) => {
  console.log(tabs, 'tabs query');

  const tabsMap = tabs.reduce((acc, val) => {
    const { id } = val;
    acc[id] = val;
    return acc;
  }, {});

  instance.setTabsMap(tabsMap);

  // tabs events
  chrome.tabs.onCreated.addListener(onCreatedCb);
  chrome.tabs.onActivated.addListener(onActivatedCb);
  chrome.tabs.onUpdated.addListener(onUpdatedCb);
  chrome.tabs.onRemoved.addListener(onRemovedCb);

  // windows events
  chrome.windows.onFocusChanged.addListener(onFocusChangedCb);
});
