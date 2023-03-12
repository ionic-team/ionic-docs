---
title: "ion-fab"
---
import Props from '@site/static/auto-generated/fab/props.md';
import Events from '@site/static/auto-generated/fab/events.md';
import Methods from '@site/static/auto-generated/fab/methods.md';
import Parts from '@site/static/auto-generated/fab/parts.md';
import CustomProps from '@site/static/auto-generated/fab/custom-props.md';
import Slots from '@site/static/auto-generated/fab/slots.md';

<head>
  <title>ion-fab: Floating Action Button for Android and iOS Ionic Apps</title>
  <meta name="description" content="Fabs（フローティングアクションボタン）は、1つまたは複数のFabボタンを含むコンテナ要素です。Ionic FrameworkでAndroidおよびiOSアプリを作成する際にion-fabを使用します。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Fabs are container elements that contain one or more [fab buttons](./fab-button). They should be placed in a fixed position that does not scroll with the content. Fabs should have one main fab button. Fabs can also contain one or more [fab lists](./fab-list) which contain related buttons that show when the main fab button is clicked.

## Basic Usage

import BasicUsage from '@site/static/usage/v7/fab/basic/index.md';

<BasicUsage />

## List Side

The `side` property of the [fab list](./fab-list) component controls where it appears relative to the main fab button. A single fab can have multiple fab lists as long as they all have different values for `side`.

import ListSide from '@site/static/usage/v7/fab/list-side/index.md';

<<<<<<< HEAD
## 使い方
=======
<ListSide />
>>>>>>> 99d3f5222ffbfc340f268bf630572d37e9d9586b

## Positioning

In order to place the fab in a fixed position, it should be assigned to the `fixed` slot of the outer [content](./content) component. Use the `vertical` and `horizontal` props to control the alignment of the fab in the viewport. The `edge` prop will cause the fab button to overlap with the app's header or footer.

import Positioning from '@site/static/usage/v7/fab/positioning/index.md';

<Positioning />

## Button Sizing

Setting the `size` property of the main fab button to `"small"` will render it at a mini size. Note that this property will not have an effect when used with the inner fab buttons.

import ButtonSizing from '@site/static/usage/v7/fab/button-sizing/index.md';

<ButtonSizing />

## Theming

### Colors

import Colors from '@site/static/usage/v7/fab/theming/colors/index.md';

<Colors />

### CSS Custom Properties

import CSSCustomProperties from '@site/static/usage/v7/fab/theming/css-custom-properties/index.md';

<CSSCustomProperties />

### CSS Shadow Parts

import CSSShadowParts from '@site/static/usage/v7/fab/theming/css-shadow-parts/index.md';

<CSSShadowParts />
 

## Accessibility

### Labels

Since FABs are allowed to contain only icons, developers must provide an `aria-label` on each `ion-fab-button` instance. Without this label, assistive technologies will not be able to announce the purpose of each button.

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
