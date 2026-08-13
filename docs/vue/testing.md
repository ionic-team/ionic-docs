---
title: Testing
---

<head>
  <title>Vue Unit and End-to-End Testing for Ionic App Components</title>
  <meta
    name="description"
    content="Vue apps created using Ionic are automatically set up for unit and end-to-end testing. Read to learn more about testing tools for Ionic components."
  />
</head>

This document provides an overview of how to test an application built with `@ionic/vue`. Applications generated with the Ionic CLI are set up for unit testing with [Vitest](https://vitest.dev) and [Vue Test Utils](https://test-utils.vuejs.org), and for end-to-end testing with [Cypress](https://www.cypress.io).

## Unit Testing

### Waiting for Components

When you need to wait for an Ionic component to render before asserting against its DOM, use the `componentOnReady` helper exported from `@ionic/core`. Do not call `el.componentOnReady()` directly. `@ionic/vue` uses Stencil's custom elements build, where that method does not exist on the element. The helper waits one animation frame instead, giving the component's inner contents a chance to render.

```ts
import { mount } from '@vue/test-utils';
import { componentOnReady } from '@ionic/core';

import Example from './Example.vue';

test('renders the submit button', async () => {
  const wrapper = mount(Example);

  const button = wrapper.find('ion-button').element;

  await new Promise<void>((resolve) => componentOnReady(button, () => resolve()));

  expect(button.textContent).toContain('Submit');
});
```
