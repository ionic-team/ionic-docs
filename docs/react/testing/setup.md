---
sidebar_label: Setup
title: Ionic React Unit Testing Setup
description: Learn how to set up unit tests for an Ionic React application.
---

# Setup

Ionic requires a few additional steps to set up unit tests.

## Install Jest

### React Scripts

If your React project is using `react-scripts`, jest is already installed. You can confirm the version of Jest by running:

```bash
npm ls jest
```

Ionic recommends `react-scripts@5` and requires a minimum version of `jest@27`, which includes `jsdom@16`. If you are using an older version of `react-scripts`, you can update it by running:

```bash
npm install react-scripts@latest
```

## Initialize Ionic React

Ionic React requires the `setupIonicReact` function to be called before any tests are run. Failing to do so will result in mode-based classes and platform behaviors not being applied to your components.

In `src/setupTest.ts`, add the following code:

```tsx title="src/setupTest.ts"
import { setupIonicReact } from '@ionic/react';

setupIonicReact();
```

## Test Environment

Ionic requires a DOM environment to be available in order to render components. This is typically provided by the `jsdom` test environment. In Jest 27 and later, the default environment is `node`.

### React Scripts

To configure this behavior, update your `test` command to include `--env=jsdom`:

```json title="package.json"
"test": "react-scripts test --env=jsdom --transformIgnorePatterns 'node_modules/(?!(@ionic/react|@ionic/react-router|@ionic/core|@stencil/core|ionicons)/)'",
```
