/**Created by Dylan*/
exports.waitForVisible = function (selector, milliseconds) {
    let ms = milliseconds ? milliseconds : 30000;
    return browser.waitForVisible(selector, ms);
};