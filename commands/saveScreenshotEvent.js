/**Created by Dylan*/
exports.saveScreenShot = function (currentTestState, imageFileName) {
    if (currentTestState || imageFileName) {
        return browser.saveScreenshot().then(function (screenShot) {
            fs.writeFileSync(`${process.cwd()}/mochawesome-reports/screenshots/${imageFileName}`, screenShot, function (err) {
                if (err) throw err;
            });
        })
    } else {
        return browser.saveScreenshot().then(function (screenShot) {
            return screenShot;
        })
    }
};