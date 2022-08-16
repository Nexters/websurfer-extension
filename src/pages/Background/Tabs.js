export default class Tabs {
  tabsMap = {};
  activeTabId = 0;
  intervalId = 0;
  urlIdMap = {};

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

  setInterval(interval) {
    clearInterval(this.intervalId);
    this.intervalId = interval;
  }

  setUrlId(comb, entity) {
    this.urlIdMap = { ...this.urlIdMap, [comb]: entity };
  }

  reset() {
    this.tabsMap = {};
    this.activeTabId = 0;
    this.intervalId = 0;
    this.urlIdMap = {};
  }
}
