/**Created by Dylan*/
exports.selectByIndex = function (selector, index) {
    return browser.waitForVisible(selector, 30000).selectByIndex(selector, index);
};