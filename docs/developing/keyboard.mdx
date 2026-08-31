---
title: Keyboard
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>キーボードガイド: Tools to Manage an On-Screen Mobile App Keyboard</title>
  <meta
    name="description"
    content="Accounting for an on-screen keyboard is a common developer roadblock. This guide introduces the tools available for managing on-screen keyboards in mobile apps."
  />
</head>

開発者がモバイルアプリや PWA を開発する際に直面する一般的な障害は、画面上のキーボードの存在を考慮してカスタマイズすることです。このガイドでは、アプリケーションでオンスクリーンキーボードを管理するためのさまざまなツールの概要を説明します。

## inputmode

開発者は、 `inputmode` 属性を使用して、入力に入力できるデータのタイプを指定できます。これにより、ユーザーの入力内容に関連するボタンを含むキーボードがブラウザに表示されます。例えば、 `inputmode="email"` を指定すると、 `@` キーを含むキーボードが表示され、その他の email 入力の最適化も行われます。

`inputmode` はグローバル属性であるため、通常の入力エレメントに加えて、`ion-input` や `ion-textarea` などの Ionic コンポーネントでも使用できます。

特定のデータ型を必要とする入力では、代わりに `type` 属性を使用する必要があります。たとえば、email の入力では、 `inputmode.` を指定するのではなく、`type="email"`
を使用する必要があります。これは、入力されるデータが常に email の形式になるためです。一方、input が email またはユーザー名を受け入れる場合は、入力されるデータが常に `type="email"` になるとは限らないため、 `inputmode=”email”` を使用するのが適切です。

許可されている値の一覧については、<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode" target="_blank" rel="noreferrer">inputmode ドキュメント</a>を参照してください。

### Usage

import Inputmode from '@site/static/usage/v9/keyboard/inputmode/index.mdx';

<Inputmode />

:::note
`inputmode` 属性は Chrome 66+ と iOS Safari 12.2+のデバイスでサポートされています: https://caniuse.com/#search=inputmode
:::

## enterkeyhint

`enterkeyhint` 属性を使用すると、開発者は "Enter" キーに表示するアクション・ラベルまたはアイコンのタイプを指定できます。 `enterkeyhint` を使用すると、ユーザが "Enter" キーをタップしたときに何が起こるかを知ることができます。ここで指定する値は、ユーザーが何をしているかによって異なります。たとえば、ユーザーが検索ボックスに入力している場合、開発者は input が `enterkeyhint="search"` であることを確認する必要があります。

`enterkeyhint` はグローバル属性であるため、通常の入力エレメントに加えて、`ion-input` や `ion-textarea` などの Ionic コンポーネントでも使用できます。

許可されている値の一覧については、<a href="https://html.spec.whatwg.org/dev/interaction.html#input-modalities:-the-enterkeyhint-attribute" target="_blank" rel="noreferrer">enterkeyhint 標準</a>を参照してください。

### Usage

import Enterkeyhint from '@site/static/usage/v9/keyboard/enterkeyhint/index.mdx';

<Enterkeyhint />

:::note
`enterkeyhint` 属性は Chrome 77 以降および iOS Safari 13.4 以降のデバイスでサポートされています
:::

## ダークモード {/* #dark-mode */}

デフォルトでは、キーボードテーマは OS によって決定されます。たとえば、iOS でダークモードが有効になっている場合、アプリケーションの CSS にダークテーマがない場合でも、アプリケーションのキーボードはダークテーマで表示されます。

モバイル Web ブラウザや PWA でアプリを実行しているとき、キーボードを特定のテーマで表示させる方法はありません。

Capacitor や Cordova でアプリを実行する際、特定のテーマでキーボードを表示することが可能です。この設定に関する詳細は、<a href="https://capacitorjs.com/docs/apis/keyboard#keyboard-configuration-ios-only-" target="_blank">Capacitor Keyboard Documentation</a>を参照してください。

## アクセサリバーを非表示にする

ウェブベースのアプリケーションを実行すると、iOS はキーボードの上にアクセサリバーを表示する。これにより、ユーザーは次または前の入力に移動したり、キーボードを閉じることができます。

モバイル Web ブラウザや PWA でアプリを実行する場合、アクセサリバーを非表示にする方法はありません。

Capacitor や Cordova でアプリを実行する際、アクセサリーバーを非表示にすることが可能です。この設定に関する詳細は、<a href="https://capacitorjs.com/docs/apis/keyboard#keyboard-configuration-ios-only-" target="_blank">Capacitor Keyboard Documentation</a>を参照してください。

## キーボードのライフサイクルイベント {/* #keyboard-lifecycle-events */}

スクリーンキーボードの存在を検出することは、そうでなければキーボードによって隠される入力の位置を調整するのに有用です。Capacitor と Cordova アプリでは、開発者は一般的にネイティブのキーボードプラグインを使ってキーボードライフサイクルイベントを Listen します。モバイルブラウザや PWA で動作するアプリでは、サポートされていれば Visual Viewport API を使用することができる。Ionic Framework はこれらの両方のアプローチをラップし、`window` に `ionKeyboardDidShow` と `ionKeyboardDidHide` イベントを発行します。 `ionKeyboardDidShow` のイベントペイロードには、キーボードの高さの近似値がピクセル単位で含まれています。

### Usage

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'angular', label: 'Angular' },
    { value: 'angular-standalone', label: 'Angular (Standalone)' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]
}>
<TabItem value="javascript">

```javascript
window.addEventListener('ionKeyboardDidShow', event => {
  const { keyboardHeight } = event;
  // Do something with the keyboard height such as translating an input above the keyboard.
});

window.addEventListener('ionKeyboardDidHide', () => {
  // Move input back to original location
});
```
</TabItem>
<TabItem value="angular">

```tsx
import { Platform } from '@ionic/angular/lazy';

...

constructor(private platform: Platform) {
  this.platform.keyboardDidShow.subscribe(event => {
    const { keyboardHeight } = event;
    // Do something with the keyboard height such as translating an input above the keyboard.
  });

  this.platform.keyboardDidHide.subscribe(() => {
    // Move input back to original location
  });
}
```
</TabItem>
<TabItem value="angular-standalone">

```tsx
import { Platform } from '@ionic/angular';

...

constructor(private platform: Platform) {
  this.platform.keyboardDidShow.subscribe(event => {
    const { keyboardHeight } = event;
    // Do something with the keyboard height such as translating an input above the keyboard.
  });

  this.platform.keyboardDidHide.subscribe(() => {
    // Move input back to original location
  });
}
```
</TabItem>
<TabItem value="react">

```tsx
import { useKeyboardState } from '@ionic/react-hooks/keyboard';

...

const { isOpen, keyboardHeight } = useKeyboardState();

// Do something with the keyboard height such as translating an input above the keyboard
```
</TabItem>
<TabItem value="vue">

```tsx
import { useKeyboard } from '@ionic/vue';
import { watch } from 'vue';

...

const { isOpen, keyboardHeight } = useKeyboard();

watch(keyboardHeight, () => {
  console.log(`Is Keyboard Open: ${isOpen.value}, Keyboard Height: ${keyboardHeight.value}`);
});

```
</TabItem>
</Tabs>
````

:::note
モバイル Web ブラウザや PWA で動作するアプリでは、 Keyboard Lifecycle Events は Chrome 62 以降と iOS Safari 13.0 以降でのみサポートされています。
:::
