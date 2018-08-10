/**Created by Dylan*/
exports.scrollDown = function (px, elem) {
    px = !px || isNaN(px) ? 200 : parseInt(px);
    return elem ? browser.scroll(elem, 0, px) : browser.scroll(null, 0, px);
};