/**Created by Dylan*/
exports.selectByVisibleText = function (selector, text) {
    return browser.waitForVisible(selector, 30000).selectByVisibleText(selector, text);
};