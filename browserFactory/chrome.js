/**Created by Dylan*/
let browserParent = require("./browserParent");

class chrome extends browserParent {
    async init() {
        let host = 'input host here';
        let port = 'input prot here';
        let options = {
            desiredCapabilities: {
                browserName: 'chrome',
                enableVNC: true,
                acceptSslCerts: true,
                chromeOptions: {
                    useAutomationExtension: false,
                    args: ['--start-maximized']
                },
                version: "67.0"
            },
            sync: false,
            /*host: host,
            port: port,*/
            baseUrl: origin,
            logLevel: 'verbose' //Level of logging verbosity. values: verbose | silent | command | data | result
        };
        global.browser = webdriverio.remote(options);
        await browser.init();
    }

    async close() {
        await browser.end();
    }
}

module.exports = chrome;