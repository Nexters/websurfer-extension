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
  tabs = {};
  activeTabId = 0;
  interval = {};

  setTab(tabId, tab) {
    this.tabs = R.assoc(tabId, tab, this.tabs);
  }

  setTabs(tabs) {
    this.tabs = tabs;
  }

  deleteTab(tabId) {
    this.tabs = R.dissoc(tabId, this.tabs);
  }

  setActiveTabId(activeTabId) {
    this.activeTabId = activeTabId;
  }

  getTabs() {
    return this.tabs;
  }

  getTab(tabId) {
    return this.tabs?.[tabId] ?? {};
  }

  setInterval(tabId, interval) {
    this.interval = R.assoc(tabId, interval, this.interval);
  }

  getInterval(tabId) {
    return this.interval[tabId];
  }
}

const instance = new Background();

const onCreatedCb = (tab) => {
  console.log(tab, 'onCreated');
};

const initInterval = (tabId) => {
  console.log('init interval', tabId);
  instance.setInterval(
    tabId,
    setInterval(() => {
      const curTab = instance.getTab(tabId);
      instance.setTab(
        tabId,
        R.assoc('duration', (curTab.duration || 0) + 1, curTab)
      );

      console.log(instance.getTab(tabId).duration, tabId);
    }, 1000)
  );
};

const onActivatedCb = ({ tabId }) => {
  console.log(tabId, 'onActivated');

  const interval = instance.getInterval(instance.activeTabId);
  if (interval) {
    console.log('clearInterval', instance.activeTabId);
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
    console.log('clearInterval', tabId);
    clearInterval(interval);
  }

  // call API
  console.log('UPDATE HISTORY');

  instance.deleteTab(tabId);
};

chrome.tabs.query({}, (tabs) => {
  instance.setTabs(tabs);

  chrome.tabs.onCreated.addListener(onCreatedCb);
  chrome.tabs.onActivated.addListener(onActivatedCb);
  chrome.tabs.onUpdated.addListener(onUpdatedCb);
  chrome.tabs.onRemoved.addListener(onRemovedCb);
});
