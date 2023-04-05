---
title: "ion-range"
---
import Props from '@ionic-internal/component-api/v7/range/props.md';
import Events from '@ionic-internal/component-api/v7/range/events.md';
import Methods from '@ionic-internal/component-api/v7/range/methods.md';
import Parts from '@ionic-internal/component-api/v7/range/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/range/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/range/slots.md';

<head>
  <title>Range Slider | ion-range: Slider Knob Controls with Labels</title>
  <meta name="description" content="ion-rangeは、スライダーを動かして値の範囲を選択することができます。2つのノブを使用できますが、1つは値を制御し、ラベルはどちらか一方に置くことができます。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


Rangeスライダは、スライダノブを動かして、ユーザーが値の範囲を選択できるようにするものです。デフォルトでは、1つのノブがレンジの値を制御します。この動作は [dual knobs](#dual-knobs) を使ってカスタマイズすることができます。

デフォルトでは、Rangeスライダーの最小値は`0`、最大値は`100`です。これは `min` と `max` プロパティで設定することができます。

## 基本的な使い方

import Basic from '@site/static/usage/v7/range/basic/index.md';

<Basic />

## Label Placement

import LabelsPlayground from '@site/static/usage/v7/range/labels/index.md';

<LabelsPlayground />

## Decorations

Decorative elements can be passed into the `start` or `end` slots of the range. This is useful for adding icons such as low volume or high volume icons. Since these elements are decorative, they should not be announced by assistive technology such as screen readers.

If the directionality of the document is set to left to right, the contents slotted to the `start` position will display to the left of the range, where as contents slotted to the `end` position will display to the right of the range. In right to left (rtl) directionality, the contents slotted to the `start` position will display to the right of the range, where as contents slotted to the `end` position will display to the left of the range.

import DecorationsPlayground from '@site/static/usage/v7/range/slots/index.md';

<DecorationsPlayground />

## Dual Knobs

Dual knobs はユーザーが下限と上限の値を選択するために使用できる2つのknobsコントロールを導入しています。選択されると、Range は選択された上下限の値を含む [RangeValue](#rangevalue) を持つ `ionChange` イベントを発信します。

import DualKnobs from '@site/static/usage/v7/range/dual-knobs/index.md';

<DualKnobs />

## ピン

`pin` 属性は、ドラッグしたときにノブの上にレンジの値を表示します。これにより、ユーザはRange内の特定の値を選択することができます。

`pinFormatter` 関数を使用すると、開発者はユーザーに対してレンジの値のフォーマットをカスタマイズすることができます。

import Pins from '@site/static/usage/v7/range/pins/index.md';

<Pins />

## Snapping & Ticks

TicksはRange 上で利用可能な各値のインジケータを表示します。Ticksを使用するためには、開発者は `snaps` と `ticks` プロパティの両方を `true` に設定する必要があります。

snapsを有効にし、knobをドラッグして放すと、Range knobは最も近い利用可能な値にスナップします。

import SnappingTicks from '@site/static/usage/v7/range/snapping-ticks/index.md';

<SnappingTicks />

## イベントハンドリング

### Using `ionChange`

`ionChange` イベントはRange knobの値の変更を監視します。

import IonChangeEvent from '@site/static/usage/v7/range/ion-change-event/index.md';

<IonChangeEvent />

### `ionKnobMoveStart` と `ionKnobMoveEnd` を使う

マウスドラッグ、タッチジェスチャー、キーボード操作のいずれであっても、Range knobのドラッグが開始されると `ionKnobMoveStart` イベントが発行されます。逆に、`ionKnobMoveEnd`はRange knobがリリースされたときに発生します。両イベントは `RangeValue` タイプで発生し、`dualKnobs` プロパティと組み合わせて動作します。

import IonKnobMoveEvent from '@site/static/usage/v7/range/ion-knob-move-event/index.md';

<IonKnobMoveEvent />

## テーマ

## CSSカスタムプロパティ

Rangeには、アプリケーションのデザインに合わせてRangeコンポーネントの外観を素早くテーマ化してカスタマイズするための[CSS Variables](#css-custom-properties)が含まれています。

import CSSProps from '@site/static/usage/v7/range/theming/css-properties/index.md';

<CSSProps />

### CSS Shadow Parts

Rangeには [CSS Shadow Parts](#css-shadow-parts) があり、Rangeコンポーネント内の特定の要素ノードを完全にカスタマイズすることができます。CSS Shadow Partsは最も多くのカスタマイズ機能を提供し、Rangeコンポーネントで高度なスタイリングが必要な場合に推奨されるアプローチです。

import CSSParts from '@site/static/usage/v7/range/theming/css-shadow-parts/index.md';

<CSSParts />

## Migrating from Legacy Range Syntax

A simpler range syntax was introduced in Ionic 7.0. This new syntax reduces the boilerplate required to setup an range, resolves accessibility issues, and improves the developer experience.

Developers can perform this migration one range at a time. While developers can continue using the legacy syntax, we recommend migrating as soon as possible.

### 最新の構文の使い方

Using the modern syntax involves removing the `ion-label` and passing the label directly inside of `ion-range` using `slot="label"`. The placement of the label can be configured using the `labelPlacement` property on `ion-range`.

import Migration from '@site/static/usage/v7/range/migration/index.md';

<Migration />


:::note
In past versions of Ionic, `ion-item` was required for `ion-range` to function properly. Starting in Ionic 7.0, `ion-range` should only be used in an `ion-item` when the item is placed in an `ion-list`. Additionally, `ion-item` is no longer required for `ion-range` to function properly.
:::

### Using the Legacy Syntax

Ionic uses heuristics to detect if an app is using the modern range syntax. In some instances, it may be preferable to continue using the legacy syntax. Developers can set the `legacy` property on `ion-range` to `true` to force that instance of the range to use the legacy syntax.


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
