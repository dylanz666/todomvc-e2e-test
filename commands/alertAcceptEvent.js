/**Created by Dylan*/
exports.alertAccept = function () {
    if (browser.alertText()) {
        return browser.alertAccept();
    }
};