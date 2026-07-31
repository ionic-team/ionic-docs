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

## Import `componentOnReady` for standalone projects

When testing Ionic components, use the exported `componentOnReady` helper from `@ionic/core` instead of calling `el.componentOnReady()` directly. The helper works with both lazy-loaded and custom-element builds, making it more likely the component has finished rendering before making assertions against its rendered DOM or running accessibility tests.
