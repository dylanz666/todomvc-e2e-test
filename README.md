# Installation

* __SoftWares that need to be installed initially__: Git,Nodejs(The nodejs version should later than v7.6.0).
* __Sync the code by__: git clone https://github.com/dylanzhang123456/todomvc-e2e-test.git
* __Install devDependencies__: go to core-e2e-test project and use the command below

```bash
$ npm install
```  

# Project structure

* __browserFactory__:The browser factory.
* __commands__: The implementations of common actions which include using the 'log4js'.
* __logs__: Dir where save the logs.
* __mochawesome-reports__: Mochawesome reports.
* __mochawesome-reports/screenshots__: The screenshots.
* __services__: Common services. 
* __test/spec__: Mocha test files' directories.
* __test/pageObject__: The implementations of page object divided by modules.
* __test/testData__: Test data divided by env(The test data like test/testData/*/*.js,
which file name and function name should be the same with test suite file name,
else you should require in your test suites by yourself).
* __init.js__: Execution files which will be executed before running mocha test.

# How to write test cases
* __Create a test case in: test/spec__
* __Add a test case code to the new case files,like__:
```bash

describe('Test todos', function (data = {}) {
    before(async function () {//fefore hook,this will run before this test suite statts.
        await require(`${process.cwd()}/init`);//code run when set up this test suite
        data = testData[path.basename(__filename, '.js')] || {};//import test data
        this.chrome = await browserFactory.getBrowser("chrome");
        await this.chrome.init();
        await page.homePage.open();
    });

    it("1.Add a new todo item should pass", async function () {
        let quantity = await page.homePage.addNewToDoItem(data.todoTitle);
        assert.equal(quantity, 1);
    });
    it("2.Delete a existed todo item should pass", async function () {
        await page.homePage.addNewToDoItemBySetLocalStorage(data.todoId, data.todoTitle, data.completed_true);
        let isQuantityTextShowed = await page.homePage.deleteExistedToDoItem();
        assert.equal(isQuantityTextShowed, false);
    });
    it("3.Complete a existed todo item should pass", async function () {
        await page.homePage.addNewToDoItemBySetLocalStorage(data.todoId, data.todoTitle, data.completed_true);
        let testResult = await page.homePage.completeExistedToDoItem(data.todoItemAttrName, data.todoItemAttrValue, data.expectedIncompleteQuantity);
        assert.equal(testResult, false);
    });

    afterEach(async function () {//after each hook,this will run after each case finished
        await setScreenShot(this.currentTest, `${new Date().getTime()}.png`);
        await page.homePage.deleteLocalStorage();
    });
    after(async function () {//after hook,this will run after test suite finished
        await this.chrome.close();
    });
});

```
* __If the page object cannot satisfy the develop, you can add a new one in__: test/pageObject/*
* __If the actions cannot satisfy the develop, you can add new actions in__: commands
* __If the common services cannot satisfy the develop, you can add new services in__: services

# How to run the test
* __Use the command in core-e2e-test project below__:
```bash
$ npm test
```
# How to run the test in parallel
* __Use the command in core-e2e-test project below__:
```bash
$ npm run parallel
```

# How to do remote testing
* __Configure host and port__: Configure in browserFactory/chrome.js/firefox.js.
* __Enable host and post__: Enable in browserFactory/chrome.js/firefox.js.

# Integration with Jenkins
* __Jenkins Job__: XXX

# Specification
* __Some specification need to comply with this__: XXX

# Heads up:
* __mochawesome-screenshots module defect__:There have a defect in mochawesome-screenshots that it will cannot grab screenshot 
after test failed,we need to modify mochawesome-screenshots/lib/reportGenerator.js row 107 to "browser.saveScreenshot().then..."

# Learn more
* __webdriverIo__:http://webdriver.io/
* __Mocha__:https://mochajs.org/
* __ES6 Tutorials__:http://es6.ruanyifeng.com/#README
* __supertest__:https://github.com/visionmedia/supertest
* __log4js__:https://github.com/log4js-node/log4js-node
* __Chai__:https://www.npmjs.com/package/chai
* __Chai expect/should/assert__:http://www.chaijs.com/api/
* __Design pattern__:http://www.runoob.com/design-pattern/design-pattern-tutorial.html
* __util module official document__:https://nodejs.org/api/util.html#util_util
* __mocha-parallel-tests__:https://www.npmjs.com/package/mocha-parallel-tests