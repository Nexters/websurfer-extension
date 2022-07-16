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
  interval;

  setTab(tabId, tab) {
    this.tabs = R.assoc(tabId, tab, this.tabs);
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

  setInterval(interval) {
    this.interval = interval;
  }
}

const instance = new Background();

const onCreatedCb = (tab) => {
  console.log(tab, 'onCreated');
};

const initInterval = (tabId) => {
  instance.setInterval(
    setInterval(() => {
      const curTab = instance.getTab(tabId);
      instance.setTab(
        tabId,
        R.assoc('duration', (curTab.duration || 0) + 1, curTab)
      );

      console.log(instance.getTab(tabId).duration);
    }, 1000)
  );
};

const onActivatedCb = ({ tabId }) => {
  console.log(tabId, 'onActivated');

  instance.setActiveTabId(tabId);

  if (instance.interval) {
    clearInterval(instance.interval);
  }

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

  if (instance.interval) {
    clearInterval(instance.interval);
  }

  // call API
  console.log('UPDATE HISTORY');

  instance.deleteTab(tabId);
};

chrome.tabs.onCreated.addListener(onCreatedCb);
chrome.tabs.onActivated.addListener(onActivatedCb);
chrome.tabs.onUpdated.addListener(onUpdatedCb);
chrome.tabs.onRemoved.addListener(onRemovedCb);
