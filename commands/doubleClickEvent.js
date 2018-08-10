/**Created by Dylan*/
exports.doubleClick = function (selector) {
    return browser.waitForVisible(selector, 30000).doubleClick(selector);
};