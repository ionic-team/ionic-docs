---
title: "ion-item-sliding"
---
import Props from '@ionic-internal/component-api/v7/item-sliding/props.md';
import Events from '@ionic-internal/component-api/v7/item-sliding/events.md';
import Methods from '@ionic-internal/component-api/v7/item-sliding/methods.md';
import Parts from '@ionic-internal/component-api/v7/item-sliding/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/item-sliding/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/item-sliding/slots.md';

<head>
  <title>Slide Buttons | Slide Right to Left with ion-item-sliding</title>
  <meta name="description" content="ion-item-sliding コンポーネントには、ドラッグしてボタンを表示するアイテムが含まれています。スライドしたアイテムが左から右にスワイプされると、オプションが表示されます。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';


スライドアイテムには、ドラッグしてオプションボタンを表示させることができるアイテムが含まれています。子要素として [item](./item) コンポーネントが必要です。表示させるオプションはすべて [item options](./item-options) 要素に記述する必要があります。


## 基本的な使い方

スライドアイテムのオプションは、デフォルトではアイテムの `"end"` 側に配置されます。つまり、LTRでは右から左へ、RTLでは左から右へスワイプすると、オプションが表示されます。反対側に配置し、反対方向にスワイプしたときに表示されるようにするには、 [item options](./item-options) 要素の side 属性を `"start"` に設定します。アイテムオプションは最大2つまで同時に使用することができ、スワイプの方向によって2つの異なるオプションを表示させることができます。

import Basic from '@site/static/usage/v7/item-sliding/basic/index.md';

<Basic />


## Icon Options

[アイテムオプション](./item-option) でアイコンをテキストと一緒に配置すると、デフォルトでテキストの上にアイコンを表示します。アイコンのスロットは、利用可能な [アイテムオプションスロット](./item-option#slots) に変更することで位置を変更することが可能です。

import Icons from '@site/static/usage/v7/item-sliding/icons/index.md';

<Icons />


## 拡張可能なオプション

オプションは、あるポイントを超えてスワイプすると、アイテムの幅いっぱいに広がるように拡張することができます。これは、 [item options](./item-options) の `ionSwipe` イベントと組み合わせることで、アイテムが完全にスワイプされたときにメソッドを呼び出すことができるようになります。

import Expandable from '@site/static/usage/v7/item-sliding/expandable/index.md';

<Expandable />


## Interfaces

### ItemSlidingCustomEvent

必須ではありませんが、このコンポーネントから発行される Ionic イベントでより強く型付けを行うために、`CustomEvent` インターフェースの代わりにこのインターフェースを使用することが可能です。

```typescript
interface ItemSlidingCustomEvent extends CustomEvent {
  target: HTMLIonItemSlidingElement;
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
