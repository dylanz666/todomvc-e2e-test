/**Created by Dylan*/
exports.selectByAttribute = function (selector, attribute, value) {
    return browser.waitForVisible(selector, 30000).selectByAttribute(selector, attribute, value);
};