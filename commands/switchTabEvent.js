/**Created by Dylan*/
exports.switchTab = function (tabNumber) {
    return browser.pause(3000).getTabIds().then(function (tabIds) {
        console.log(`tabs opened: ${JSON.stringify(tabIds)}`);
        const tabId = tabNumber ? tabNumber - 1 : tabIds.length - 1;
        if (tabId < 0 || parseInt(tabId) < 0) {
            return null;
        }
        if (tabIds && tabIds.length > 0) {
            console.log(`switch to tab ${tabId} : ${tabIds[tabId]}`);
            return browser.switchTab(tabIds[tabId]);
        }
    });
};