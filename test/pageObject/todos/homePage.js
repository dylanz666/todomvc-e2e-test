/**Created by Dylan*/
//selector
const newTodo_input = ".new-todo";
const leftToDoItems_strong = "//strong[@data-reactid='.0.2.0.0']";
const destroy_button = ".destroy";
const toggle_checkbox = ".toggle";
const todoItem_label = "//label[text()='%s']";
const fistToDoItem_li = ".todo-list li";

class homePage {
    async open() {
        await I.openUrl("http://todomvc.com/examples/react/#/");
        await I.waitForVisible(newTodo_input);
    }

    async addNewToDoItem(todoTitle) {
        await I.input(newTodo_input, todoTitle);
        await I.keys("Enter");
        return await I.getText(leftToDoItems_strong);
    }

    async addNewToDoItemBySetLocalStorage(todoId, todoTitle, completed) {
        await I.setLocalStorage("react-todos", `[{"id":"${todoId}","title":"${todoTitle}","completed":${completed}}]`);
        await I.refresh();
        await I.waitForVisible(XPATH.format(todoItem_label, todoTitle));
    }

    async deleteLocalStorage() {
        await I.deleteLocalStorage();
    }

    async deleteExistedToDoItem() {
        await I.moveToObject(toggle_checkbox);
        await I.click(destroy_button);
        return await I.getElements(leftToDoItems_strong) === 0;
    }

    async completeExistedToDoItem(todoItemAttrName, todoItemAttrValue, expectedIncompleteQuantity) {
        await I.click(toggle_checkbox);
        let firstToDoClass = await I.getAttribute(fistToDoItem_li, todoItemAttrName);
        let incompleteQuantity = await I.getText(leftToDoItems_strong);
        return firstToDoClass === todoItemAttrValue && parseInt(incompleteQuantity) === expectedIncompleteQuantity;
    }
}

exports.homePage = new homePage();