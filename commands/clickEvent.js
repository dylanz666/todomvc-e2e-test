/**Created by Dylan*/
exports.click = function (selector) {
    return browser.waitForVisible(selector,30000).click(selector);
};