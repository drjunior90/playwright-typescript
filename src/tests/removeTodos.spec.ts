import { test as base, expect } from "@playwright/test";
import { TodoPage } from "../pages/TodoPage";

const TODO_ONE = "Learn Playwright";
const TODO_TWO = "Cycle training";
const TODO_THREE = "Go to supermarket";

const test = base.extend<{ todoPage: TodoPage }>({
  todoPage: async ({ page }, use) => {
    const todoPage = new TodoPage(page);
    await todoPage.goto();

    await todoPage.addTodo(TODO_ONE);
    await todoPage.addTodo(TODO_TWO);
    await todoPage.addTodo(TODO_THREE);

    const length = await todoPage.listSize();
    expect(length === 3).toBeTruthy();

    await use(todoPage);
  },
});

test("Removing an item from todo list", async ({ todoPage }) => {
  await todoPage.removeTodo(TODO_ONE);

  const todos = await todoPage.listItems();
  expect(todos).not.toContain(TODO_ONE);

  const length = await todoPage.listSize();
  expect(length === 2).toBeTruthy();
});
