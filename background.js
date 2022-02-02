'use strict';

chrome.tabs.onUpdated.addListener(
	function(tabId, changeInfo, tabInfo) {
		if (tabInfo.url && changeInfo.status === 'complete') {
			if (tabInfo.url.indexOf('zoom.us/wc/') !== -1) {
				setTimeout(CloseTab, 10 * 1000, tabId);
			}
		}
	}
);

function CloseTab(tabId) {
	chrome.tabs.remove(tabId);
}
