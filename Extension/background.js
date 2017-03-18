chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    console.log(tab.url);
});

chrome.tabs.onCreated.addListener(function(tab) {         
    console.log(tab.url + " created");
});
