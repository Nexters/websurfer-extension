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
    const deleted = (() => {
      const cloned = { ...this.tabsMap };
      delete cloned[tabId];

      return cloned;
    })();

    this.tabsMap = deleted;
  }

  setActiveTabId(activeTabId) {
    this.activeTabId = activeTabId;
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
