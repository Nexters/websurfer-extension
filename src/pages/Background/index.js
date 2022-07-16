import * as R from 'ramda';

console.log('This is the background page.');
console.log('Put the background scripts here.');

chrome.runtime.onInstalled.addListener(() => {
  console.log('onInstalled');

  // Welcome page
  // chrome.tabs.create({
  //   url: chrome.runtime.getURL('/newtab.html'),
  // });
});

class Background {
  tabsMap = {};
  activeTabId = 0;
  intervalMap = {};

  setTab(tabId, tab) {
    this.tabsMap = R.assoc(tabId, tab, this.tabsMap);
  }

  setTabsMap(tabsMap) {
    this.tabsMap = tabsMap;
  }

  deleteTab(tabId) {
    this.tabsMap = R.dissoc(tabId, this.tabsMap);
  }

  setActiveTabId(activeTabId) {
    this.activeTabId = activeTabId;
  }

  getTabs() {
    return this.tabsMap;
  }

  getTab(tabId) {
    return this.tabsMap?.[tabId] ?? {};
  }

  setInterval(tabId, interval) {
    this.intervalMap = R.assoc(tabId, interval, this.interval);
  }

  setIntervalMap(intervalMap) {
    this.intervalMap = intervalMap;
  }

  getInterval(tabId) {
    return this.intervalMap[tabId];
  }
}

const instance = new Background();

const onCreatedCb = (tab) => {
  console.log(tab, 'onCreated');
};

const initInterval = (tabId) => {
  console.log('init interval', tabId);

  const interval = setInterval(() => {
    const curTab = instance.getTab(tabId);
    instance.setTab(
      tabId,
      R.assoc('duration', (curTab.duration || 0) + 1, curTab)
    );

    console.log(instance.getTab(tabId).duration, tabId);
  }, 1000);

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
    instance.setTab(tabId, tab);

    const interval = instance.getInterval(tabId);
    if (interval) {
      console.log('clearInterval', interval, instance.activeTabId);
      clearInterval(interval);
    }

    if (
      instance.activeTabId === tabId &&
      tab.url &&
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

  // call API
  console.log('UPDATE HISTORY');

  instance.deleteTab(tabId);
};

const onFocusChangedCb = (windowId) => {
  console.log(windowId, 'onFocused');

  if (windowId < 0) {
    const allClearedIntervalMap = R.map(clearInterval, instance.intervalMap);

    instance.setIntervalMap(allClearedIntervalMap);
  }
};

chrome.tabs.query({}, (tabs) => {
  console.log(tabs, 'tabs query');

  const tabsMap = R.indexBy(R.prop('id'), tabs);

  instance.setTabsMap(tabsMap);

  // tabs events
  chrome.tabs.onCreated.addListener(onCreatedCb);
  chrome.tabs.onActivated.addListener(onActivatedCb);
  chrome.tabs.onUpdated.addListener(onUpdatedCb);
  chrome.tabs.onRemoved.addListener(onRemovedCb);

  // windows events
  chrome.windows.onFocusChanged.addListener(onFocusChangedCb);
});
