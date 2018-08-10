/**Created by Dylan*/
module.exports = async function (currentTest, fileName) {
    if (currentTest.state !== "passed") {
        await logger.error(`Take ScreenShot When Failure.`);
        await I.saveScreenShot(currentTest.state, fileName);
        await logReport.setScreenshot(currentTest, fileName);
    }
};