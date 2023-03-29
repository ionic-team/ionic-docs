---
title: "ion-segment"
---
import Props from '@ionic-internal/component-api/v7/segment/props.md';
import Events from '@ionic-internal/component-api/v7/segment/events.md';
import Methods from '@ionic-internal/component-api/v7/segment/methods.md';
import Parts from '@ionic-internal/component-api/v7/segment/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/segment/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/segment/slots.md';

<head>
  <title>ion-segment: API Documentation for Segmented Controls</title>
  <meta name="description" content="ion-segmentは、関連するボタンのグループを表示します（セグメントコントロールとも呼ばれます）。使用方法の詳細については、Segment API ドキュメンテーションを参照してください。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


Segmentsは、関連するボタンのグループを水平方向の行に表示することができ、segmented controlsとも呼ばれます。これらは、toolbarまたはメインコンテンツの内部に表示できます。

これらの機能は、1つを選択すると他のすべてが選択解除されるTabsと似ています。Segmentsは、コンテンツ内の異なるビューを切り替える場合に便利です。クリックしてページ間の遷移をコントロールする場合は、Segmentsの代わりにTabsを使用してください。


## 基本的な使い方

セグメントは[セグメントボタン](./segment-button)からなり、各ボタンには`value`プロパティが設定されています。セグメントの `value` プロパティをボタンの値と一致させることで、そのボタンを選択することができます。また、セグメントを無効にすることで、ユーザがセグメントと対話できないようにすることができます。

import Basic from '@site/static/usage/v7/segment/basic/index.md';

<Basic />


## Scrollable Segments

デフォルトでは、セグメントはスクロールできません。各セグメントボタンの幅は固定で、セグメントボタンの数を画面幅で割って幅を決定します。これにより、各セグメントボタンがスクロールすることなく画面に表示されることが保証されます。そのため、ラベルが長いセグメントボタンは、一部が切れてしまうことがあります。これを避けるために、短いラベルを使用するか、`scrollable` プロパティを `true` に設定してスクロール可能なセグメントに変更することをお勧めします。これはセグメントを水平方向にスクロールさせますが、各セグメントボタンの幅を変更することができます。

import Scrollable from '@site/static/usage/v7/segment/scrollable/index.md';

<Scrollable />


## Segments in Toolbars

<!-- Reuse the playground from the Toolbar directory -->
import Toolbar from '@site/static/usage/v7/toolbar/segments/index.md';

<Toolbar />


## テーマ

### Colors

import Colors from '@site/static/usage/v7/segment/theming/colors/index.md';

<Colors />

## CSSカスタムプロパティ

import CSSProps from '@site/static/usage/v7/segment/theming/css-properties/index.md';

<CSSProps />


## アクセシビリティ

### キーボードナビゲーション

このコンポーネントは、`ion-segment-button`要素間のナビゲーションと選択について、フルキーボードサポートを備えています。デフォルトでは、キーボードナビゲーションは `ion-segment-button` 要素にのみフォーカスしますが、`selectOnFocus` プロパティを使用すると、フォーカスされた要素も確実に選択されるようになります。次の表は、それぞれのキーが何をするのかの詳細です。

| Key                | Function                                                       |
| ------------------ | -------------------------------------------------------------- |
| `ArrowRight`       | Focuses the next focusable element.                            |
| `ArrowLeft`        | Focuses the previous focusable element.                        |
| `Home`             | Focuses the first focusable element.                           |
| `End`              | Focuses the last focusable element.                            |
| `Space` or `Enter` | Selects the element that is currently focused.                 |

## Interfaces

### SegmentChangeEventDetail

```typescript
interface SegmentChangeEventDetail {
  value?: string;
}
```

### SegmentCustomEvent

必須ではありませんが、このコンポーネントから発行される Ionic イベントでより強く型付けを行うために、`CustomEvent` インターフェースの代わりにこのインターフェースを使用することが可能です。

```typescript
interface SegmentCustomEvent extends CustomEvent {
  target: HTMLIonSegmentElement;
  detail: SegmentChangeEventDetail;
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
