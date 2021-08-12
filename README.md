# Playwright and Typescript - Todo App

## Overview

This is a sample project for getting started with Playwright and Typescript. The tests created for the [Todo App](https://todomvc.com/examples/react/#/) are documented with `test` keyword from Playwright Test:

- Tests can be found in: `/src/tests`

## Playwright Test

Playwright Test was created specifically to accommodate the needs of the end-to-end testing. It does everything you would expect from the regular test runner, and more. Playwright test allows to:

- Run tests across all browsers.
- Execute tests in parallel.
- Enjoy context isolation out of the box.
- Capture videos, screenshots and other artifacts on failure.
- Integrate your POMs as extensible fixtures.

## Page Object Model

Large test suites can be structured to optimize ease of authoring and maintenance. Page object models are one such approach to structure your test suite.

- Page objects simplify authoring. They create a higher-level API which suits your application.
- Page objects simplify maintenance. They capture element selectors in one place and create reusable code to avoid repetition.

Pages for Todo App in the context of POM, can be found in `/src/pages`. For a better separation of concerns, UI identifiers can be found in `/src/targets`.

## Installing dependencies

In order to install necessary dependencies, the following command should be executed from project root:

`yarn install`

`yarn install-browsers`

## Running tests

The following commands are available:

| Script name             | Description                                                                        |
| ----------------------- | ---------------------------------------------------------------------------------- |
| `yarn install-browsers` | Playwright Test doesn't bundle browsers by default, so you need to install them    |
| `yarn test`             | Run tests in parallel with chromium, firefox, and webkit browsers in headless mode |
| `yarn test-chromium`    | Run tests in parallel with chromium browser in headless mode                       |
| `yarn test-firefox`     | Run tests in parallel with firefox browser in headless mode                        |
| `yarn test-webkit`      | Run tests in parallel with webkit browser in headless mode                         |
| `yarn codegen`          | Open codegen tool to generate code for todo app                                    |
| `yarn debug`            | Run tests in debug mode                                                            |

## Tests run in parallel

Playwright Test runs tests in parallel by default, using multiple worker processes.

![Tests run in parallel](https://user-images.githubusercontent.com/27835328/129224383-c1013f4d-37a2-4adb-ad42-abe032277847.gif)
