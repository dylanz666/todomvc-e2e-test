/**Created by Dylan*/
exports.waitForEnabled = function (selector, milliseconds) {
    let ms = milliseconds ? milliseconds : 500;
    return browser.waitForEnabled(selector, ms);
};