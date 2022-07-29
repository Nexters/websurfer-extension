export default class Tabs {
  tabsMap = {};
  activeTabId = 0;
  intervalMap = {};

  setTab(tabId, tab) {
    this.tabsMap = { ...this.tabsMap, [tabId]: tab };
  }

  setTabsMap(tabsMap) {
    this.tabsMap = tabsMap;
  }

  deleteTab(tabId) {
    const cloned = { ...this.tabsMap };
    delete cloned[tabId];
    this.tabsMap = cloned;
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
    this.intervalMap = {
      ...this.intervalMap,
      [tabId]: interval,
    };
  }

  setIntervalMap(intervalMap) {
    this.intervalMap = intervalMap;
  }

  getInterval(tabId) {
    return this.intervalMap[tabId];
  }
}
