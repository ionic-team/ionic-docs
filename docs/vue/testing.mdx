---
title: テスト
---

<head>
  <title>IonicアプリコンポーネントのVueユニットテストおよびエンドツーエンドテスト</title>
  <meta
    name="description"
    content="Vue apps created using Ionic are automatically set up for unit and end-to-end testing. Read to learn more about testing tools for Ionic components."
  />
</head>

このドキュメントは、`@ionic/vue`で作成されたアプリケーションをテストする方法の概要を提供します。Ionic CLI で生成されたアプリケーションは、[Vitest](https://vitest.dev)および[Vue Test Utils](https://test-utils.vuejs.org)によるユニットテストのセットアップがされており、[Cypress](https://www.cypress.io)によるエンドツーエンドテストにも対応しています。

## ユニットテスト

### コンポーネントの待機

Ionic コンポーネントの DOM に対してアサーションを行う前にレンダリングを待つ必要がある場合は、`@ionic/core`からエクスポートされる`componentOnReady`ヘルパーを使用してください。`el.componentOnReady()`を直接呼び出さないでください。`@ionic/vue`は Stencil のカスタム要素ビルドを使用しており、このメソッドは要素上には存在しません。このヘルパーは代わりに 1 フレーム待機し、コンポーネントの内部コンテンツがレンダリングされる機会を与えます。

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
