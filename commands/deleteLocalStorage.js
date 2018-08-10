/**Created by Dylan*/
exports.deleteLocalStorage = function (key, value) {
    if (key) {
        return browser.localStorage('DELETE', {key: key, value: value});
    } else {
        return browser.localStorage('DELETE');
    }
};