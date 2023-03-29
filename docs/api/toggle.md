---
title: "ion-toggle"
---
import Props from '@ionic-internal/component-api/v7/toggle/props.md';
import Events from '@ionic-internal/component-api/v7/toggle/events.md';
import Methods from '@ionic-internal/component-api/v7/toggle/methods.md';
import Parts from '@ionic-internal/component-api/v7/toggle/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/toggle/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/toggle/slots.md';

<head>
  <title>Toggle | ion-toggle: Custom Toggle Button for Ionic Applications</title>
  <meta name="description" content="Toggleは、1つのオプションの状態を変更します。ion-toggleを使用して、アプリケーションのオン/オフを切り替えることができるカスタマイズ可能なトグルボタンを作成します。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


トグルは、1つのオプションの状態を変更するスイッチです。押したり、スワイプしたりすることで、オン・オフを切り替えることができます。トグルは、`checked`プロパティを設定することで、プログラムによってチェックすることも可能です。

## 基本的な使い方

import Basic from '@site/static/usage/v7/toggle/basic/index.md';

<Basic />


## On / Off Labels

トグルは、`enableOnOffLabels`プロパティを設定することで、オン/オフラベルを有効にすることができます。これはアクセシビリティ上重要なことで、チェックされたトグルとチェックされていないトグルの区別がつきやすくなります。

import OnOff from '@site/static/usage/v7/toggle/on-off/index.md';

<OnOff />


## Toggles in a List

[アイテム](./item)と[リスト](./list)コンポーネントを使用すると、リストビューでトグルを使用することも可能です。

import List from '@site/static/usage/v7/toggle/list/index.md';

<List />


## Label Placement

開発者は `labelPlacement` プロパティを使用して、ラベルがどのように配置されるかを制御することができます。

import LabelPlacement from '@site/static/usage/v7/toggle/label-placement/index.md';

<LabelPlacement />


## Justification

開発者は `justify` プロパティを使用して、ラベルとコントロールの行の詰め方を制御することができます。

import Justify from '@site/static/usage/v7/toggle/justify/index.md';

<Justify />


## テーマ

### Colors

import Colors from '@site/static/usage/v7/toggle/theming/colors/index.md';

<Colors />

## CSSカスタムプロパティ

CSSカスタムプロパティは、標準CSSと組み合わせてトグルの異なる部分をターゲットにすることができます。トグルの `width` と `height` を直接変更してトラックのサイズを変更し、`--handle-width` と `--handle-height` カスタムプロパティを使用して、ハンドルサイズをカスタマイズすることができます。

import CSSProps from '@site/static/usage/v7/toggle/theming/css-properties/index.md';

<CSSProps />

### CSS Shadow Parts

トグルをさらにカスタマイズするには、公開されている特定のシャドウ部分をターゲットにすることができます。これらの部分には、どのようなCSSプロパティでもスタイルを設定でき、CSSカスタムプロパティと組み合わせることも可能です。

import CSSParts from '@site/static/usage/v7/toggle/theming/css-shadow-parts/index.md';

<CSSParts />

## レガシーなトグル構文からの移行

Ionic 7.0では、よりシンプルなトグル構文が導入されました。この新しい構文は、トグルの設定に必要な定型文を減らし、アクセシビリティの問題を解決し、開発者のエクスペリエンスを向上させます。

開発者は従来の構文を使い続けることができますが、できるだけ早く移行することをお勧めします。

### 最新の構文の使い方

最新の構文を使用するには、`ion-label`を削除して、`ion-toggle`の内部にラベルを直接渡します。ラベルの配置は `ion-toggle` の `labelPlacement` プロパティを使用して設定することができる。ラベルとコントロールの行の詰め方は、`ion-toggle` の `justify` プロパティを使用して制御することができます。

import Migration from '@site/static/usage/v7/toggle/migration/index.md';

<Migration />
  

:::note
Ionic の過去のバージョンでは、`ion-toggle` が正しく機能するためには `ion-item` が必要でした。Ionic 7.0 からは、`ion-toggle` は `ion-item` の中で、そのアイテムが `ion-list` に配置される場合にのみ使用されます。また、`ion-toggle`が正しく機能するためには、`ion-item`はもはや必須ではありません。
:::

### レガシー構文の使用

Ionicは、アプリが最新のトグル構文を使用しているかどうかを検出するためにヒューリスティックを使用しています。場合によっては、レガシー構文を使い続けることが望ましいこともあります。開発者は、`ion-toggle`の`legacy`プロパティを`true`に設定することで、そのトグルのインスタンスがレガシー構文を使用するように強制できます。

## Interfaces

### ToggleChangeEventDetail

```typescript
interface ToggleChangeEventDetail<T = any> {
  value: T;
  checked: boolean;
}
```

### ToggleCustomEvent

必須ではありませんが、このコンポーネントから発行される Ionic イベントでより強く型付けを行うために、`CustomEvent` インターフェースの代わりにこのインターフェースを使用することが可能です。

```typescript
interface ToggleCustomEvent<T = any> extends CustomEvent {
  detail: ToggleChangeEventDetail<T>;
  target: HTMLIonToggleElement;
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
