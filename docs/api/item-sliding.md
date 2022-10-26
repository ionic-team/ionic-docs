---
title: "ion-item-sliding"
---
import Props from '@site/static/auto-generated/item-sliding/props.md';
import Events from '@site/static/auto-generated/item-sliding/events.md';
import Methods from '@site/static/auto-generated/item-sliding/methods.md';
import Parts from '@site/static/auto-generated/item-sliding/parts.md';
import CustomProps from '@site/static/auto-generated/item-sliding/custom-props.md';
import Slots from '@site/static/auto-generated/item-sliding/slots.md';

<head>
  <title>Slide Buttons | Slide Right to Left with ion-item-sliding</title>
  <meta name="description" content="ion-item-sliding コンポーネントには、ドラッグしてボタンを表示するアイテムが含まれています。スライドしたアイテムが左から右にスワイプされると、オプションが表示されます。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';


A sliding item contains an item that can be dragged to reveal option buttons. It requires an [item](./item) component as a child. All options to reveal should be placed in the [item options](./item-options) element.


## Basic Usage

スライドアイテムのオプションは、デフォルトではアイテムの `"end"` 側に配置されます。つまり、LTRでは右から左へ、RTLでは左から右へスワイプすると、オプションが表示されます。反対側に配置し、反対方向にスワイプしたときに表示されるようにするには、 [item options](./item-options) 要素の side 属性を `"start"` に設定します。アイテムオプションは最大2つまで同時に使用することができ、スワイプの方向によって2つの異なるオプションを表示させることができます。

import Basic from '@site/static/usage/item-sliding/basic/index.md';

<Basic />


## Icon Options

[アイテムオプション](./item-option) でアイコンをテキストと一緒に配置すると、デフォルトでテキストの上にアイコンを表示します。アイコンのスロットは、利用可能な [アイテムオプションスロット](./item-option#slots) に変更することで位置を変更することが可能です。

import Icons from '@site/static/usage/item-sliding/icons/index.md';

<Icons />


## 拡張可能なオプション

オプションは、あるポイントを超えてスワイプすると、アイテムの幅いっぱいに広がるように拡張することができます。これは、 [item options](./item-options) の `ionSwipe` イベントと組み合わせることで、アイテムが完全にスワイプされたときにメソッドを呼び出すことができるようになります。

import Expandable from '@site/static/usage/item-sliding/expandable/index.md';

<Expandable />


## Interfaces

### ItemSlidingCustomEvent

必須ではありませんが、このコンポーネントから発行される Ionic イベントでより強く型付けを行うために、`CustomEvent` インターフェースの代わりにこのインターフェースを使用することが可能です。

```typescript
interface ItemSlidingCustomEvent extends CustomEvent {
  target: HTMLIonItemSlidingElement;
}
```

## Properties
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
