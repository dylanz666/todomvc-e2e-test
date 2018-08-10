/**Created by Dylan*/
exports.getTagName = function (selector) {
    return browser.waitForVisible(selector, 30000).getTagName(selector);
};