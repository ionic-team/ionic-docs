---
title: "ion-loading"
---
import Props from '@ionic-internal/component-api/v7/loading/props.md';
import Events from '@ionic-internal/component-api/v7/loading/events.md';
import Methods from '@ionic-internal/component-api/v7/loading/methods.md';
import Parts from '@ionic-internal/component-api/v7/loading/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/loading/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/loading/slots.md';

<head>
  <title>Loading | Application Loading Indicator Overlay | ion-loading</title>
  <meta name="description" content="ion-loadingは、ユーザーのインタラクションをブロックしながら、アクティビティを表示します。ローディングインジケータは、アプリのコンテンツの上に表示され、解除することができます。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />


ユーザインタラクションをブロックしながらアクティビティを示すためのオーバーレイです。ローディング・インジケータはアプリのコンテンツの上に表示され、ユーザーの操作を再開するために消すことができます。オプションでbackdropが含まれており、`showBackdrop: false` で無効にすることができます。

## 基本的な使い方

一度表示されると、ロードインジケータはデフォルトで無期限に表示されます。開発者は、コンポーネント上で `dismiss()` メソッドを呼び出すことで、作成後にローディングインジケータを手動で解除することができます。onDidDismiss` 関数を呼び出すと、ローディングインジケータが解除された後にアクションを実行することができます。

また、ロードオプションの `duration` に表示するミリ秒数を渡すことで、特定の時間が経過した後にロードインジケータを自動的に解除するよう設定することもできます。

### インラインロード (推奨)

import Inline from '@site/static/usage/v7/loading/inline/index.md';

<Inline />

### Controller

import Controller from '@site/static/usage/v7/loading/controller/index.md';

<Controller />

## Customization

### スピナー

使用するスピナーは `spinner` プロパティを使用してカスタマイズすることができます。オプションの完全なリストは [spinner property documentation](#spinner) を参照してください。

import Spinners from '@site/static/usage/v7/loading/spinners/index.md';

<Spinners />

### テーマ

Loading は scoped encapsulation を使用しています。これは、実行時に各スタイルに追加のクラスを付加することで、自動的に CSS をスコープ化することを意味します。CSSでscopedセレクタをオーバーライドするには、[higher specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) セレクタが必要です。

カスタムクラスを渡して、それを使ってホストと内部要素にカスタムスタイルを追加することをお勧めします。

import Theming from '@site/static/usage/v7/loading/theming/index.md';

<Theming />

:::note
 `ion-loading` is presented at the root of your application, so we recommend placing any `ion-loading` styles in a global stylesheet.
:::

## アクセシビリティ

Ionicは自動的にLoadingの`role`を[`dialog`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role)に設定します。

Loadingに`message`プロパティが定義されている場合、`aria-labelledby`属性は自動的にmessage要素のIDに設定されます。そうでない場合、`aria-labelledby`は設定されず、開発者は `htmlAttributes` プロパティを使用して `aria-label` を提供する必要があります。

すべてのARIA属性は、Loadingの`htmlAttributes`プロパティにカスタム値を定義することによって、手動で上書きすることができます。

## Interfaces

### LoadingOptions

```typescript
interface LoadingOptions {
  spinner?: SpinnerTypes | null;
  message?: string | IonicSafeString;
  cssClass?: string | string[];
  showBackdrop?: boolean;
  duration?: number;
  translucent?: boolean;
  animated?: boolean;
  backdropDismiss?: boolean;
  mode?: Mode;
  keyboardClose?: boolean;
  id?: string;
  htmlAttributes?: { [key: string]: any };

  enterAnimation?: AnimationBuilder;
  leaveAnimation?: AnimationBuilder;
}
```


## プロパティ
<Props />

## イベント
<Events />

## メソッド
<Methods />

## CSS Shadow Parts
<Parts />

## CSSカスタムプロパティ
<CustomProps />

## Slots
<Slots />
