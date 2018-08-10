/**Created by Dylan*/
module.exports = async function () {
    global.STRING = require('util');
    global.SQL = STRING;
    global.XPATH = STRING;
    global.fs = require('fs');
    global.path = require('path');
    global.expect = require('chai').expect;
    global.assert = require('chai').assert;
    global.webdriverio = require('webdriverio');
    global.logger = require('./services/log4js');
    global.random = require('./services/random');
    global.logReport = require('mochawesome-screenshots/logReport');
    global.setScreenShot = require('./services/setScreenShot');
    global.env = process.env.NODE_ENV ? (process.env.NODE_ENV).toLowerCase() : "test";
    global.testData = require("./test/testData/index");
    global.origin = "http://todomvc.com";
    global.browserFactory = require("./browserFactory/factory");
    global.chrome = "";
    global.firefox = "";
    global.I = require("./commands/index");
    global.page = require("./test/pageObject/index");
}();