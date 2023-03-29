---
title: "ion-range"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v6/range/props.md';
import Events from '@ionic-internal/component-api/v6/range/events.md';
import Methods from '@ionic-internal/component-api/v6/range/methods.md';
import Parts from '@ionic-internal/component-api/v6/range/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/range/custom-props.md';
import Slots from '@ionic-internal/component-api/v6/range/slots.md';

<head>
  <title>Range Slider | ion-range: Slider Knob Controls with Labels</title>
  <meta name="description" content="ion-rangeは、スライダーを動かして値の範囲を選択することができます。2つのノブを使用できますが、1つは値を制御し、ラベルはどちらか一方に置くことができます。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';
import TOCInline from '@theme/TOCInline';

<EncapsulationPill type="shadow" />


Rangeスライダは、スライダノブを動かして、ユーザーが値の範囲を選択できるようにするものです。デフォルトでは、1つのノブがレンジの値を制御します。この動作は [dual knobs](#dual-knobs) を使ってカスタマイズすることができます。

デフォルトでは、Rangeスライダーの最小値は`0`、最大値は`100`です。これは `min` と `max` プロパティで設定することができます。

import Basic from '@site/static/usage/v6/range/basic/index.md';

<Basic />

## Rangeラベル

ラベルやカスタム UI 要素は、要素に `slot="start"` または `slot="end"` を追加することで、範囲のどちら側にもスロットさせることができます。この要素には、 `ion-label` や `ion-icon` 、 `div` など、任意の要素を指定することができます。ドキュメントの方向性が左から右に設定されている場合、 `start` 位置にスロットされたコンテンツは範囲の左側に表示され、 `end` 位置にスロットされたコンテンツは範囲の右側に表示されます。右から左へ(rtl)の方向性の場合、`start`の位置にスロットされたコンテンツは範囲の右側に表示され、`end`の位置にスロットされたコンテンツは範囲の左側に表示されます。

import SlotsPlayground from '@site/static/usage/v6/range/slots/index.md';

<SlotsPlayground />

## Dual Knobs

Dual knobs はユーザーが下限と上限の値を選択するために使用できる2つのknobsコントロールを導入しています。選択されると、Range は選択された上下限の値を含む [RangeValue](#rangevalue) を持つ `ionChange` イベントを発信します。

import DualKnobs from '@site/static/usage/v6/range/dual-knobs/index.md';

<DualKnobs />

## ピン

`pin` 属性は、ドラッグしたときにノブの上にレンジの値を表示します。これにより、ユーザはRange内の特定の値を選択することができます。

`pinFormatter` 関数を使用すると、開発者はユーザーに対してレンジの値のフォーマットをカスタマイズすることができます。

import Pins from '@site/static/usage/v6/range/pins/index.md';

<Pins />

## Snapping & Ticks

TicksはRange 上で利用可能な各値のインジケータを表示します。Ticksを使用するためには、開発者は `snaps` と `ticks` プロパティの両方を `true` に設定する必要があります。

snapsを有効にし、knobをドラッグして放すと、Range knobは最も近い利用可能な値にスナップします。

import SnappingTicks from '@site/static/usage/v6/range/snapping-ticks/index.md';

<SnappingTicks />

## Event Handling

### Using `ionChange`

`ionChange` イベントはRange knobの値の変更を監視します。

import IonChangeEvent from '@site/static/usage/v6/range/ion-change-event/index.md';

<IonChangeEvent />

### `ionKnobMoveStart` と `ionKnobMoveEnd` を使う

マウスドラッグ、タッチジェスチャー、キーボード操作のいずれであっても、Range knobのドラッグが開始されると `ionKnobMoveStart` イベントが発行されます。逆に、`ionKnobMoveEnd`はRange knobがリリースされたときに発生します。両イベントは `RangeValue` タイプで発生し、`dualKnobs` プロパティと組み合わせて動作します。

import IonKnobMoveEvent from '@site/static/usage/v6/range/ion-knob-move-event/index.md';

<IonKnobMoveEvent />

## スタイリング

### CSS変数を使ったスタイリング

Rangeには、アプリケーションのデザインに合わせてRangeコンポーネントの外観を素早くテーマ化してカスタマイズするための[CSS Variables](#css-custom-properties)が含まれています。

import CssVariablesPlayground from '@site/static/usage/v6/range/theming/css-properties/index.md';

<CssVariablesPlayground />

### CSS Shadow Partsによるスタイリング

Rangeには [CSS Shadow Parts](#css-shadow-parts) があり、Rangeコンポーネント内の特定の要素ノードを完全にカスタマイズすることができます。CSS Shadow Partsは最も多くのカスタマイズ機能を提供し、Rangeコンポーネントで高度なスタイリングが必要な場合に推奨されるアプローチです。

import CssShadowPartsPlayground from '@site/static/usage/v6/range/theming/css-shadow-parts/index.md';

<CssShadowPartsPlayground />

## Interfaces

### RangeChangeEventDetail

```typescript
interface RangeChangeEventDetail {
  value: RangeValue;
}
```

### RangeKnobMoveStartEventDetail

```typescript
interface RangeKnobMoveStartEventDetail {
  value: RangeValue;
}
```

### RangeKnobMoveEndEventDetail

```typescript
interface RangeKnobMoveEndEventDetail {
  value: RangeValue;
}
```

### RangeCustomEvent

必須ではありませんが、このコンポーネントから発行される Ionic イベントでより強く型付けを行うために、`CustomEvent` インターフェースの代わりにこのインターフェースを使用することが可能です。

```typescript
interface RangeCustomEvent extends CustomEvent {
  detail: RangeChangeEventDetail;
  target: HTMLIonRangeElement;
}
```

## Types

### RangeValue

```typescript
type RangeValue = number | { lower: number, upper: number };
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