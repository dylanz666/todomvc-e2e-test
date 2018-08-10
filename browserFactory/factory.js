/**Created by Dylan*/
let chrome = require("./chrome");
let firefox = require("./firefox");

class browserFactory {
    static getBrowser(browserName) {
        if (browserName === null) {
            return null;
        }
        if (browserName.toUpperCase() === "CHROME") {
            return new chrome();
        }
        if (browserName.toUpperCase() === "FIREFOX") {
            return new firefox();
        }
        return null;
    }
}

module.exports = browserFactory;