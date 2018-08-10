/**Created by Dylan*/
exports.getText = function (selector) {
    return browser.waitForVisible(selector, 30000).getText(selector);
};