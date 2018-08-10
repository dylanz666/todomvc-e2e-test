/**Created by Dylan*/
exports.alertDismiss = function () {
    if (browser.alertText()) {
        return browser.alertDismiss();
    }
};