/**Created by Dylan*/
exports.getValue = function (selector) {
    return browser.waitForVisible(selector, 30000).getValue(selector);
};