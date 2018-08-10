/**Created by Dylan*/
exports.refresh = function (refreshWhenText) {
    return browser.getSource().then(function (source) {
        if (refreshWhenText && source.indexOf(refreshWhenText) > -1) {
            return browser.refresh();
        } else if (refreshWhenText && source.indexOf(refreshWhenText) < 0) {
            return null;
        } else {
            return browser.refresh();
        }
    });
};