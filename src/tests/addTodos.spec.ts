import { test as base, expect } from "@playwright/test";
import { TodoPage } from "../pages/TodoPage";

const TODO_ONE = "Walk the dog";
const TODO_TWO = "Haircut";
const TODO_THREE = "Read a book";

const test = base.extend<{ todoPage: TodoPage }>({
  todoPage: async ({ page }, use) => {
    const todoPage = new TodoPage(page);
    await todoPage.goto();

    const length = await todoPage.listSize();
    expect(length === 0).toBeTruthy();

    await use(todoPage);
  },
});

test("Adding three items to an empty todo list", async ({ todoPage }) => {
  await todoPage.addTodo(TODO_ONE);
  await todoPage.addTodo(TODO_TWO);
  await todoPage.addTodo(TODO_THREE);

  const length = await todoPage.listSize();
  expect(length === 3).toBeTruthy();
});
