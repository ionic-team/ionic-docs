---
title: "ion-checkbox"
---

import Props from '@ionic-internal/component-api/v7/checkbox/props.md';
import Events from '@ionic-internal/component-api/v7/checkbox/events.md';
import Methods from '@ionic-internal/component-api/v7/checkbox/methods.md';
import Parts from '@ionic-internal/component-api/v7/checkbox/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/checkbox/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/checkbox/slots.md';

<head>
  <title>ion-checkboxes: Ionic App Component to Select Multiple Options</title>
  <meta name="description" content="ion-checkboxは、セットから複数の選択肢を選択でき、アクティブにするとチェックされた（ticked）ように表示されます。Ionicアプリのチェックボックスコンポーネントについて説明します。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


Checkboxを使用すると、一連のオプションから複数のオプションを選択できます。選択すると、チェックマークが付いた状態(checked)で表示されます。checkboxをクリックすると、 `checked` プロパティーが切り替わります。`checked` プロパティを設定して、プログラムで `checked` を切り替えることもできます。

## 基本的な使い方

import Basic from '@site/static/usage/v7/checkbox/basic/index.md';

<Basic />

## Label Placement

開発者は `labelPlacement` プロパティを使用して、ラベルがどのように配置されるかを制御することができます。

import LabelPlacement from '@site/static/usage/v7/checkbox/label-placement/index.md';

<LabelPlacement />

## Justification

開発者は `justify` プロパティを使用して、ラベルとコントロールの行の詰め方を制御することができます。

import Justify from '@site/static/usage/v7/checkbox/justify/index.md';

<Justify />


:::note
`ion-item`は、 `justify` がどのように機能するかを強調するためにデモで使用されているだけです。 `justify` が正しく機能するために必須ではありません。
:::

## Indeterminate Checkboxes

import Indeterminate from '@site/static/usage/v7/checkbox/indeterminate/index.md';

<Indeterminate />

## テーマ

## CSSカスタムプロパティ

import CSSProps from '@site/static/usage/v7/checkbox/theming/css-properties/index.md';

<CSSProps />

## Interfaces

### CheckboxChangeEventDetail

```typescript
interface CheckboxChangeEventDetail<T = any> {
  value: T;
  checked: boolean;
}
```

### CheckboxCustomEvent

必須ではありませんが、このコンポーネントから発行される Ionic イベントでより強く型付けを行うために、`CustomEvent` インターフェースの代わりにこのインターフェースを使用することが可能です。

```typescript
interface CheckboxCustomEvent<T = any> extends CustomEvent {
  detail: CheckboxChangeEventDetail<T>;
  target: HTMLIonCheckboxElement;
}
```

## レガシーなチェックボックス構文からのマイグレーション

Ionic 7.0では、よりシンプルなチェックボックス構文が導入されました。この新しい構文は、チェックボックスの設定に必要な定型文を減らし、アクセシビリティの問題を解決し、開発者のエクスペリエンスを向上させます。

開発者は、この移行を一度に1つのチェックボックスずつ実行することができます。開発者はレガシー構文を使い続けることができますが、できるだけ早く移行することをお勧めします。

### 最新の構文の使い方

最新の構文を使用するには、`ion-label` を削除して、 `ion-checkbox` の中に直接ラベルを渡す必要があります。ラベルの配置は `ion-checkbox` の `labelPlacement` プロパティを使用して設定することができる。ラベルとコントロールの行の詰め方は、`ion-checkbox` の `justify` プロパティを使用して制御することができます。

import Migration from '@site/static/usage/v7/checkbox/migration/index.md';

<Migration />
  

:::note
Ionic の過去のバージョンでは、`ion-checkbox` が正しく機能するために `ion-item` が必要でした。Ionic 7.0 からは、`ion-checkbox` は `ion-item` の中で、そのアイテムが `ion-list` に配置される場合にのみ使用されます。また、`ion-checkbox`が正しく機能するためには、`ion-item`はもはや必須ではありません。
:::

### レガシーな構文の使い方

Ionicは、アプリが最新のチェックボックス構文を使用しているかどうかをヒューリスティックに検出します。場合によっては、レガシーな構文を使い続けることが望ましい場合もあります。開発者は `ion-checkbox` の `legacy` プロパティを `true` に設定することで、そのチェックボックスのインスタンスがレガシー構文を使用するように強制できます。


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
