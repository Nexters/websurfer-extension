import * as R from 'ramda';

export default class Tabs {
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
