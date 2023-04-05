---
sidebar_label: Introduction
title: Ionic React Testing Introduction
description: Learn how to test an Ionic React application. This document provides an overview of how to test an application built with @ionic/react.
---

# Testing Ionic React

This document provides an overview of how to test an application built with `@ionic/react`. It covers the basics of testing with React, as well as the specific tools and libraries used in `@ionic/react`.

## Introduction

Testing is an important part of the development process, and it helps to ensure that an application is working as intended. In `@ionic/react`, testing is done using a combination of tools and libraries, including Vitest, Jest, React Testing Library, Playwright or Cypress.

## Types of Tests

There are two types of tests that can be written:

**Unit Tests**: Unit tests are used to test individual functions and components in isolation. They can be written using tools such as [Jest](https://jestjs.io) and [React Testing Library](https://testing-library.com) or [Vitest](https://vitest.dev).

**Integration Tests**: Integration tests are used to test how different components work together. They can be written using tools such as [Cypress](https://www.cypress.io) or [Playwright](https://playwright.dev).

## Tools and Libraries

### Unit Testing

[**Jest**](https://jestjs.io): Jest is a popular testing framework for JavaScript applications. It is included with `react-scripts` and is used to run unit tests.

[**Vitest**](https://vitest.dev): Vitest is a modern testing framework powered by Vite. It is compatible with Jest and is used to run unit tests.

[**React Testing Library**](https://testing-library.com): React Testing Library is a set of utilities that make it easy to test React components. It's used to interact with components and test their behavior.

### Integration Testing

[**Cypress**](https://www.cypress.io): Cypress is a modern testing tool that's used to run end-to-end tests. It allows developers to test the entire application, including the user interface, in a simulated environment.

[**Playwright**](https://playwright.dev): Playwright is a browser automation library that's used to run end-to-end tests. It allows developers to test the entire application, including the user interface, in a simulated environment.

## Additional Resources

- [Testing Ionic React Apps with Jest and React Testing Library](https://ionicframework.com/blog/testing-ionic-react-apps-with-jest-and-react-testing-library/)
