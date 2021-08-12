import type { Page } from "@playwright/test";
import {
  todoInput,
  labelWithText,
  removeButton,
  inputCheckbox,
  linkWithText,
  filters,
  todoItemsLabels,
  todoItemsList,
} from "../targets/todos";

export class TodoPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("https://todomvc.com/examples/react/#/");
  }

  async addTodo(todo: string) {
    await this.page.fill(todoInput, todo);
    await this.page.press(todoInput, "Enter");
  }

  async removeTodo(todo: string) {
    await this.page.hover(`${labelWithText(todo)}`);
    await this.page.click(`${removeButton}:near(${labelWithText(todo)})`);
  }

  async markTodoCompleted(todo: string) {
    await this.page.check(`${inputCheckbox}:near(${labelWithText(todo)})`);
  }

  async filterItemsBy(status: string) {
    await this.page.click(`${linkWithText(status)}:near(${filters})`);
  }

  async listItems() {
    return this.page.$$eval(todoItemsLabels, (labels) =>
      labels.map((label) => label.textContent)
    );
  }

  async listSize() {
    return this.page.$$eval(todoItemsList, (items) => items.length);
  }
}
