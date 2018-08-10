/**Created by Dylan*/
exports.selectByValue = function (selector, value) {
    return browser.waitForVisible(selector, 30000).selectByValue(selector, value);
};