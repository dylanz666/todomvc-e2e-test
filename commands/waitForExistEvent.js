/**Created by Dylan*/
exports.waitForExist = function (selector, milliseconds) {
    let ms = milliseconds ? milliseconds : 500;
    return browser.waitForExist(selector, ms);
};