/**Created by Dylan*/
exports.clear = function (selector) {
    return browser.waitForVisible(selector,30000).clearElement(selector);
};