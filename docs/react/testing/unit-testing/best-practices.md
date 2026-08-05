---
sidebar_label: Best Practices
---

# Best Practices

## IonApp is required for test templates

In your test template when rendering with React Testing Library, you must wrap your component with an `IonApp` component. This is required for the component to be rendered correctly.

```tsx title="Example.test.tsx"
import { IonApp } from '@ionic/react';
import { render } from "@testing-library/react";

import Example from './Example';

test('example', () => {
  render(
    <IonApp>
      <Example />
    </IonApp>
  );
  ...
});
```

## Use `user-event` for user interactions

React Testing Library recommends using the `user-event` library for simulating user interactions. This library provides a more realistic simulation of user interactions than the `fireEvent` function provided by React Testing Library.

```tsx title="Example.test.tsx"
import { IonApp } from '@ionic/react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Example from './Example';

test('example', async () => {
  const user = userEvent.setup();

  render(
    <IonApp>
      <Example />
    </IonApp>
  );

  await user.click(screen.getByRole('button', { name: /click me!/i }));
});
```

For more information on `user-event`, see the [user-event documentation](https://testing-library.com/docs/user-event/intro/).

## Waiting for Components

When you need to wait for an Ionic component to render before asserting against its DOM, use the `componentOnReady` helper exported from `@ionic/core`. Do not call `el.componentOnReady()` directly. `@ionic/react` uses Stencil's custom elements build, where that method does not exist on the element. The helper waits one animation frame instead, giving the component's inner contents a chance to render.

```tsx
import { IonApp } from '@ionic/react';
import { render } from '@testing-library/react';
import { componentOnReady } from '@ionic/core';

import Example from './Example';

test('renders the submit button', async () => {
  const { container } = render(
    <IonApp>
      <Example />
    </IonApp>
  );

  const button = container.querySelector('ion-button');

  await new Promise<void>((resolve) => componentOnReady(button, () => resolve()));

  expect(button.textContent).toContain('Submit');
});
```
