/**Created by Dylan*/
describe('Test todos', function (data = {}) {
    before(async function () {
        await require(`${process.cwd()}/init`);
        data = testData[path.basename(__filename, '.js')] || {};
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

    afterEach(async function () {
        await setScreenShot(this.currentTest, `${new Date().getTime()}.png`);
        await page.homePage.deleteLocalStorage();
    });
    after(async function () {
        await this.chrome.close();
    });
});
