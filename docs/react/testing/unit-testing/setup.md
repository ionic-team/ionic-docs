---
sidebar_label: Setup
title: Ionic React Unit Testing Setup
description: Learn how to set up unit tests for an Ionic React application.
---

# Unit Testing Setup

Ionic requires a few additional steps to set up unit tests.

## Jest

If your React project is using `react-scripts`, jest is already installed. You can confirm the version of Jest by running:

```bash
npm ls jest
```

Ionic recommends `react-scripts@5` and requires a minimum version of `jest@27`, which includes `jsdom@16`. If you are using an older version of `react-scripts`, you can update it by running:

```bash
npm install react-scripts@latest
```

### Install React Testing Library

React Testing Library is a set of utilities that make it easier to test React components. It's used to interact with components and test their behavior.

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

### Initialize Ionic React

Ionic React requires the `setupIonicReact` function to be called before any tests are run. Failing to do so will result in mode-based classes and platform behaviors not being applied to your components.

In `src/setupTest.ts`, add the following code:

```tsx title="src/setupTest.ts"
import { setupIonicReact } from '@ionic/react';

setupIonicReact();
```

### Mock `requestAnimationFrame`

Either in `src/setupTest.ts` or in the individual test file, add the following code before any tests run:

```tsx title="src/setupTest.ts"
beforeEach(() => {
  jest.useFakeTimers();
  jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => cb());
});

afterEach(() => {
  window.requestAnimationFrame.mockRestore();
  jest.clearAllMocks();
});
```

:::note

This is required if your application is using features such as `useIonModal` or `useIonPopover`.

:::

### Test Environment

Ionic requires a DOM environment to be available in order to render components. This is typically provided by the `jsdom` test environment. In Jest 27 and later, the default environment is `node`.

To configure this behavior, update your `test` command to include `--env=jsdom`:

```json title="package.json"
"test": "react-scripts test --env=jsdom --transformIgnorePatterns 'node_modules/(?!(@ionic/react|@ionic/react-router|@ionic/core|@stencil/core|ionicons)/)'",
```

:::note

Starting in Ionic v6, the `--transformIgnorePatterns` flag is required.

:::
