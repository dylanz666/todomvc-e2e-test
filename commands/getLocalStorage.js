/**Created by Dylan*/
exports.getLocalStorage = function (key) {
    if (key) {
        return browser.localStorage('GET', key);
    } else {
        return browser.localStorage();
    }
};