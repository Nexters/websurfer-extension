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
}

const instance = new Background();

const onCreatedCb = (tab) => {
  console.log(tab, 'onCreated');
};
chrome.tabs.onCreated.addListener(onCreatedCb);

const onRemovedCb = (tabId, removeInfo) => {
  console.log(tabId, removeInfo, 'onRemoved');

  // call API
  console.log('UPDATE HISTORY');

  instance.deleteTab(tabId);
};
chrome.tabs.onRemoved.addListener(onRemovedCb);

const onUpdatedCb = (tabId, changeInfo, tab) => {
  console.log(tabId, changeInfo, tab, 'onUpdated');
  const { status = '' } = changeInfo;

  if (status === 'complete') {
    instance.setTab(tabId, tab);
  }
};
chrome.tabs.onUpdated.addListener(onUpdatedCb);

const onActivatedCb = ({ tabId }) => {
  console.log(tabId, 'onActivated');

  instance.setActiveTabId(tabId);
};

chrome.tabs.onActivated.addListener(onActivatedCb);
