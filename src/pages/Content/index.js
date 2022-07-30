console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');

chrome.tabs.onActivated.addListener(console.log);
chrome.tabs.onUpdated.addListener(console.log);
