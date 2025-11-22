---
title: Managing Focus
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>フォーカス管理</title>
  <meta
    name="description"
    content="autofocus属性の代わりにsetFocus APIを使用してIonicアプリケーションでフォーカスを管理する方法を学びます。"
  />
</head>

## 手動フォーカス管理

Ionicは、[Input](../api/input)、[Searchbar](../api/searchbar)、[Textarea](../api/textarea)などのコンポーネントに`setFocus` APIを提供し、開発者が要素に手動でフォーカスを設定できるようにします。このAPIは`autofocus`属性の代わりに使用し、以下のタイミングで呼び出す必要があります：

- ルーティングアプリケーションでページが入力されたときの`ionViewDidEnter`ライフサイクルイベント。
- オーバーレイが表示されたときのオーバーレイの`didPresent`ライフサイクルイベント。
- アプリケーションが読み込まれたときのバニラJavaScriptアプリケーションの`appload`イベント。
- ユーザーのジェスチャーやインタラクションの結果。

### なぜautofocusを使わないのか？

`autofocus`属性は、ページが読み込まれたときに要素にフォーカスを設定できる標準のHTML属性です。この属性は、通常、ページの最初の入力要素にフォーカスを設定するために使用されます。ただし、`autofocus`属性は、ページ間をナビゲートする際にルーティングアプリケーションで問題を引き起こす可能性があります。これは、`autofocus`属性がページが読み込まれたときに要素にフォーカスを設定しますが、ページが再訪問されたときに要素にフォーカスを設定しないためです。`autofocus`属性の詳細については、[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus)を参照してください。

### プラットフォームの制限

`setFocus` APIを使用する際に注意すべきプラットフォームの制限があります：

1. Androidでは、要素にフォーカスを設定する前にユーザーのインタラクションが必要です。これは、ユーザーが画面をタップするだけでも可能です。
2. Mobile Safari（iOS）では、インタラクティブ要素はユーザーのジェスチャーの結果としてのみフォーカスできます。たとえば、ボタンクリックの結果として`setFocus`を呼び出すなどです。

### 基本的な使用方法

以下の例は、ユーザーがボタンをクリックしたときに`setFocus` APIを使用して入力にフォーカスを要求する方法を示しています。

import Basic from '@site/static/usage/v8/input/set-focus/index.md';

<Basic />

### ルーティング

開発者は、`ionViewDidEnter`ライフサイクルイベントを使用して、ページが入力されたときに要素にフォーカスを設定できます。

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="angular"
  values={[
    { value: 'angular', label: 'Angular' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]
}>

<TabItem value="angular">

```ts
/* example.component.ts */
import { Component, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
})
export class ExampleComponent {
  @ViewChild('input') input!: IonInput;

  ionViewDidEnter() {
    this.input.setFocus();
  }
}
```
</TabItem>
<TabItem value="react">

```tsx
import React, { useRef } from 'react';
import { IonInput, IonPage, useIonViewDidEnter } from '@ionic/react';

const Home = () => {
  const input = useRef<HTMLIonInputElement>(null);

  useIonViewDidEnter(() => {
    input.current?.setFocus();
  });

  return (
    <IonPage>
      <IonInput ref={input} label="setFocus" labelPlacement="floating"></IonInput>
    </IonPage>
  );
};

export default Home;
```

</TabItem>
<TabItem value="vue">

```html
<template>
  <ion-page>
    <ion-input ref="input" label="setFocus" label-placement="floating"></ion-input>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonInput, IonPage, onIonViewDidEnter } from '@ionic/vue';
  import { ref } from 'vue';

  const input = ref();
  onIonViewDidEnter(() => {
    requestAnimationFrame(() => {
      // requestAnimationFrame is currently required due to:
      // https://github.com/ionic-team/ionic-framework/issues/24434
      input.value.$el.setFocus();
    });
  });
</script>
```

</TabItem>
</Tabs>
````

### オーバーレイ

開発者は、`didPresent`ライフサイクルイベントを使用して、オーバーレイが表示されたときに要素にフォーカスを設定できます。

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'Javascript' },
    { value: 'angular', label: 'Angular' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]
}>

<TabItem value="javascript">

```html
<ion-modal>
  <ion-input></ion-input>
</ion-modal>

<script>
  const modal = document.querySelector('ion-modal');
  modal.addEventListener('didPresent', () => {
    const input = modal.querySelector('ion-input');
    input.setFocus();
  });
</script>
```

</TabItem>

<TabItem value="angular">

```ts
/* example.component.ts */
import { Component, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
})
export class ExampleComponent {
  @ViewChild('input') input!: IonInput;

  onDidPresent() {
    this.input.setFocus();
  }
}
```

```html
<!-- example.component.html -->
<ion-modal (didPresent)="onDidPresent()">
  <ion-input #input></ion-input>
</ion-modal>
```

</TabItem>
<TabItem value="react">

```tsx
import React, { useRef } from 'react';
import { IonInput, IonModal } from '@ionic/react';

const Home = () => {
  const input = useRef<HTMLIonInputElement>(null);

  const onDidPresent = () => {
    input.current?.setFocus();
  };

  return (
    <IonModal onDidPresent={onDidPresent}>
      <IonInput ref={input}></IonInput>
    </IonModal>
  );
};

export default Home;
```

</TabItem>
<TabItem value="vue">

```html
<template>
  <ion-modal @didPresent="onDidPresent">
    <ion-input ref="input"></ion-input>
  </ion-modal>
</template>

<script setup lang="ts">
  import { IonInput, IonModal } from '@ionic/vue';
  import { ref } from 'vue';

  const input = ref();

  function onDidPresent() {
    input.value.$el.setFocus();
  }
</script>
```

</TabItem>
</Tabs>
````

## アシスティブテクノロジーのフォーカス管理

デフォルトでは、シングルページアプリケーションには、ブラウザまたはWebViewでアクティブなビューが変更されたことをスクリーンリーダーに通知する組み込みの方法がありません。これは、アシスティブテクノロジーに依存するユーザーが、ナビゲーションイベントが発生したかどうかを常に知ることができないことを意味します。

[focusManagerPriority設定](./config#ionicconfig)を有効にした開発者は、ページ遷移中にフォーカス管理をIonicに委任できます。有効にすると、Ionicは設定オプションで指定された正しい要素にフォーカスを移動します。これにより、スクリーンリーダーにナビゲーションイベントが発生したことが通知されます。

### 型

```typescript
type FocusManagerPriority = 'content' | 'heading' | 'banner';
```

### コンテンツタイプ

次の表は、各コンテンツタイプが何を表すかを説明しています：

| Type      | 説明                   | Ionic Component           | Semantic HTML Equivalent                                                     | Landmark Equivalent                                                                                                                                                                                                   |
| --------- | ----------------------------- | ------------------------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `content` | ビューの主要部分。 | [Content](../api/content) | [`main`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main)     | [`role="main"`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Main_role)                                                                                                                      |
| `heading` | ビューのタイトル。        | [Title](../api/title)     | [`h1`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h1)         | [`role="heading"`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/heading_role) with [`aria-level="1"`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-level) |
| `banner`  | ビューのヘッダー。       | [Header](../api/header)   | [`header`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header) | [`role="banner"`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Banner_Role)                                                                                                                  |

:::important
開発者は、各ビューの主要な[Title](../api/title)に`role="heading"`と`aria-level="1"`を割り当てる必要があります。単一のビューで複数の[Title](../api/title)コンポーネントを使用できるため、Ionicはこれらの属性を自動的に割り当てません。
:::

### 優先順位の指定

設定は優先順位の降順で指定する必要があります。次の例では、Ionicは常に最初に見出しにフォーカスします。ビューに見出しがない場合にのみ、Ionicは次のフォーカス優先順位であるbannerに進みます：

```js
focusManagerPriority: ['heading', 'banner'];
```

### 実装に関する注意事項

- フォーカス優先順位を指定する場合、ブラウザはそのフォーカス優先順位内でフォーカスを移動する場合があります。たとえば、`'content'`フォーカス優先順位を指定すると、Ionicはコンテンツにフォーカスを移動します。ただし、ブラウザはその後、そのコンテンツ内の最初のフォーカス可能な要素（ボタンなど）にフォーカスを移動する場合があります。
- ビューでフォーカス優先順位が見つからない場合、Ionicは代わりにビュー自体にフォーカスを移動して、フォーカスが一般的に正しい場所に移動するようにします。その後、ブラウザはビュー内でフォーカスを調整する場合があります。
- 現在のビューから前のビューにナビゲートする場合、Ionicは現在のビューを表示した要素にフォーカスを戻します。
- フォーカスマネージャーは、[ルーティングでの手動フォーカス管理](#routing)に示すように、ビューごとにオーバーライドできます。
