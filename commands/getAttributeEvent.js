/**Created by Dylan*/
exports.getAttribute = function (selector, attributeName) {
    return browser.waitForExist(selector, 30000).getAttribute(selector, attributeName);
};