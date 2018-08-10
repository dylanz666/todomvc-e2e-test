/**Created by Dylan*/
exports.chooseFile = function (selector, filePath) {
    return browser.waitForVisible(selector, 30000).chooseFile(selector, filePath);
};