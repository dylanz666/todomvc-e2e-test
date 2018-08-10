/**Created by Dylan*/
exports.setLocalStorage = function (key, value) {
    return browser.localStorage('POST', {key: key, value: value});
};