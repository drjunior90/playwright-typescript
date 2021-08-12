import { test as base, expect } from "@playwright/test";
import { TodoPage } from "../pages/TodoPage";

const TODO_ONE = "Walk the dog";
const TODO_TWO = "Read a book";

const test = base.extend<{ todoPage: TodoPage }>({
  todoPage: async ({ page }, use) => {
    const todoPage = new TodoPage(page);
    await todoPage.goto();

    await todoPage.addTodo(TODO_ONE);
    await todoPage.addTodo(TODO_TWO);

    const length = await todoPage.listSize();
    expect(length === 2).toBeTruthy();

    await use(todoPage);
  },
});

test("Filtering completed todo items from todo list", async ({ todoPage }) => {
  await todoPage.markTodoCompleted(TODO_TWO);
  await todoPage.filterItemsBy("Completed");

  const length = await todoPage.listSize();
  expect(length === 1).toBeTruthy();

  const todos = await todoPage.listItems();
  expect(todos).toStrictEqual([TODO_TWO]);
});
