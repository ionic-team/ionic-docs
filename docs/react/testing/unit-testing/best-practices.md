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

`user-event`の詳細については、[user-event documentation](https://testing-library.com/docs/user-event/intro/)を参照してください。

## コンポーネントの待機

Ionic コンポーネントがレンダリングされるのを待ってからその DOM に対してアサートする必要がある場合は、`@ionic/core`からエクスポートされる`componentOnReady`ヘルパーを使用してください。`el.componentOnReady()`を直接呼び出さないでください。`@ionic/react`は Stencil のカスタムエレメントビルドを使用しており、そのメソッドは要素上に存在しません。ヘルパーは代わりに 1 フレーム待機し、コンポーネントの内部コンテンツがレンダリングされる機会を与えます。

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

  const button = container.querySelector('ion-button')!;

  await new Promise<void>((resolve) => componentOnReady(button, () => resolve()));

  expect(button.textContent).toContain('Submit');
});
```
