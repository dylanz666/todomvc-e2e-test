/**Created by Dylan*/
exports.switchToFrame = function (frame_id) {
    let selector = `//iframe[@id='${frame_id}']`;
    if (frame_id) {
        return browser.waitForVisible(selector, 30000).frame(frame_id);
    }
    return browser.frame(frame_id);
};