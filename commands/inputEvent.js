/**Created by Dylan*/
exports.input = function (selector, values) {
    return browser.waitForVisible(selector, 30000).setValue(selector, values);
};