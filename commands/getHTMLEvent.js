/**Created by Dylan*/
exports.getHTML = function (selector) {
    return browser.waitForVisible(selector, 30000).getHTML(selector);
};