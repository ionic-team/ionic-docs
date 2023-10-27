---
title: "ion-fab"
---
import Props from '@ionic-internal/component-api/v7/fab/props.md';
import Events from '@ionic-internal/component-api/v7/fab/events.md';
import Methods from '@ionic-internal/component-api/v7/fab/methods.md';
import Parts from '@ionic-internal/component-api/v7/fab/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/fab/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/fab/slots.md';

<head>
  <title>ion-fab: Ionic Floating Action Button for Android and iOS</title>
  <meta name="description" content="Fabs（フローティングアクションボタン）は、1つまたは複数のFabボタンを含むコンテナ要素です。Ionic FrameworkでAndroidおよびiOSアプリを作成する際にion-fabを使用します。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Fabは、1つ以上の[fabボタン](./fab-button)を含むコンテナ要素です。それらはコンテンツと一緒にスクロールしない固定位置に配置されるべきです。Fabは1つのメインFabボタンを持つべきです。また、メインファブボタンがクリックされたときに表示される関連ボタンを含む1つ以上の[fabリスト](./fab-list)を含むことができます。

## 基本的な使い方

import BasicUsage from '@site/static/usage/v7/fab/basic/index.md';

<BasicUsage />

## List Side

[fabリスト](./fab-list)コンポーネントの`side`プロパティは、メインfabボタンと相対的に表示される場所を制御します。一つのfabは、`side`の値が全て異なる限り、複数のfabリストを持つことができます。

import ListSide from '@site/static/usage/v7/fab/list-side/index.md';

<ListSide />

## ポジション

fabを固定位置に配置するためには、外側の [content](./content) コンポーネントの `fixed` スロットに割り当てる必要があります。vertical`とhorizontal`のプロップを使用して、ビューポートでのfabの配置を制御します。edge`プロップは、アプリのヘッダーやフッターにfabボタンが重なるようにします。

import Positioning from '@site/static/usage/v7/fab/positioning/index.md';

<Positioning />

### セーフエリア

`ion-header`コンポーネントや`ion-footer`コンポーネントがない場合、fabはデバイスのノッチやステータスバー、その他のデバイスUIで覆われている可能性があります。このような場合、上下の [safe area](/docs/theming/advanced#safe-area-padding) は考慮されません。これは [`--ion-safe-area-(dir)`変数](/docs/theming/advanced#application-variables) を使って調整することができます。

`vertical`を`"top"`に設定したfabを `ion-header` なしで使用する場合は、上マージンを設定する必要があります：

```css
ion-fab {
  margin-top: var(--ion-safe-area-top, 0)；
}
```

また、`ion-footer`なしで`vertical`を`"bottom"`に設定したfabを使用する場合は、下マージンを設定する必要があります：

```css
ion-fab {
  margin-bottom: var(--ion-safe-area-bottom, 0)；
}
```

`ion-header` (`vertical` が `"top"` に設定されたファブの場合) または `ion-footer` (`vertical` が `"bottom"` に設定されたファブの場合) がある場合、ファブはヘッダまたはフッタからの相対位置に配置されるため、CSS の調整は必要ありません。

import SafeArea from '@site/static/usage/v7/fab/safe-area/index.md';

<SafeArea />

## ボタンサイズ

メインファブボタンの `size` プロパティを `"small"` に設定すると、ミニサイズで描画されます。なお、このプロパティは内側のファブボタンで使用した場合は効果がありません。

import ButtonSizing from '@site/static/usage/v7/fab/button-sizing/index.md';

<ButtonSizing />

## テーマ

### Colors

import Colors from '@site/static/usage/v7/fab/theming/colors/index.md';

<Colors />

## CSSカスタムプロパティ

import CSSCustomProperties from '@site/static/usage/v7/fab/theming/css-custom-properties/index.md';

<CSSCustomProperties />

### CSS Shadow Parts

import CSSShadowParts from '@site/static/usage/v7/fab/theming/css-shadow-parts/index.md';

<CSSShadowParts />

## アクセシビリティ

### ラベル

FABはアイコンのみを含むことができるため、開発者は各`ion-fab-button`インスタンスに `aria-label` を提供しなければなりません。このラベルがなければ、支援技術は各ボタンの目的を告知することができません。

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
