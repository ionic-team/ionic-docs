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
  <title>ion-range: Range Slider Knob Controls with Labels</title>
  <meta name="description" content="ion-rangeは、スライダーを動かして値の範囲を選択することができます。2つのノブを使用できますが、1つは値を制御し、ラベルはどちらか一方に置くことができます。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


Rangeスライダは、スライダノブを動かして、ユーザーが値の範囲を選択できるようにするものです。デフォルトでは、1つのノブがレンジの値を制御します。この動作は [dual knobs](#dual-knobs) を使ってカスタマイズすることができます。

デフォルトでは、Rangeスライダーの最小値は`0`、最大値は`100`です。これは `min` と `max` プロパティで設定することができます。

## Labels

ラベルは、範囲を説明するために使用されるべきです。それらは視覚的に使用することができ、また、ユーザーがRangeをフォーカスしてるときに、スクリーンリーダーによって読み上げられます。これにより、ユーザーは範囲の意図を理解しやすくなります。範囲にはラベルを割り当てるいくつかの方法があります：

- `label`プロパティ：プレーンテキストのラベルに使用する。
- `label`スロット：カスタム HTML ラベルに使用する。
- `aria-label`: スクリーンリーダー用のラベルとして使用されるが、ラベルは表示されない。

### Label Placement

以下のデモでは、`labelPlacement` プロパティを使用して、範囲に対するラベルの位置を変更しています。ここでは `label` プロパティを使用しているが、`labelPlacement` は `label` スロットでも使用できます。

import LabelsPlayground from '@site/static/usage/v7/range/labels/index.md';

<LabelsPlayground />

### Label Slot

プレーンテキストのラベルは `label` プロパティで渡すべきであるが、カスタムHTMLが必要な場合は、代わりに `label` スロットで渡すことができます。

import LabelSlotPlayground from '@site/static/usage/v7/range/label-slot/index.md';

<LabelSlotPlayground />

### No Visible Label

もし表示するラベルが必要ない場合でも、開発者は`aria-label`を与えるべきです。

import NoVisibleLabel from '@site/static/usage/v7/range/no-visible-label/index.md';

<NoVisibleLabel />

## Decorations

装飾的な要素は、範囲の `start` または `end` スロットに渡すことができます。これは、音量の小さいアイコンや大きいアイコンのようなアイコンを追加するのに便利です。これらの要素は装飾的なものなので、スクリーンリーダーのような支援技術によってアナウンスされるべきではありません。

ドキュメントの方向性が左から右に設定されている場合、`start`位置にスロットされたコンテンツは範囲の左に表示され、`end`位置にスロットされたコンテンツは範囲の右に表示されます。右から左(rtl)の方向性の場合、`start`位置にスロットされたコンテンツは範囲の右側に表示され、`end`位置にスロットされたコンテンツは範囲の左側に表示されます。

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

## レガシーな範囲構文からの移行

Ionic 7.0では、よりシンプルな範囲構文が導入されました。この新しい構文は、範囲を設定するために必要な定型文を減らし、アクセシビリティの問題を解決し、開発者のエクスペリエンスを向上させます。

開発者はこの移行を範囲ごとに実行できます。開発者は従来の構文を使い続けることもできますが、できるだけ早く移行することをお勧めします。

### 最新の構文の使い方

最新の構文を使用するには、`ion-label` を削除し、`label` プロパティを使用して `ion-range` にラベルを渡します。ラベルの配置は `labelPlacement` プロパティを使用して設定することができます。

ラベルにカスタム HTML が必要な場合は、代わりに `label` スロットを使用して `ion-range` 内に直接渡すことができる。

import Migration from '@site/static/usage/v7/range/migration/index.md';

<Migration />


:::note
Ionic の過去のバージョンでは、`ion-range` が正しく機能するためには `ion-item` が必要でした。Ionic 7.0 以降では、`ion-range` は `ion-item` 内でアイテムを `ion-list` に配置する場合にのみ使用します。また、`ion-range` が正しく機能するためには、`ion-item` は不要になりました。
:::

### レガシー構文の使用

Ionicは、アプリが最新の範囲構文を使用しているかどうかをヒューリスティックで検出します。場合によっては、レガシー構文を使い続けた方が望ましいこともあります。開発者は `ion-range` の `legacy` プロパティを `true` に設定することで、そのインスタンスにレガシー構文を使用させることができます。


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
