---
title: "ion-thumbnail"
---

import Props from '@site/static/auto-generated/thumbnail/props.md';
import Events from '@site/static/auto-generated/thumbnail/events.md';
import Methods from '@site/static/auto-generated/thumbnail/methods.md';
import Parts from '@site/static/auto-generated/thumbnail/parts.md';
import CustomProps from '@site/static/auto-generated/thumbnail/custom-props.md';
import Slots from '@site/static/auto-generated/thumbnail/slots.md';

<head>
  <title>ion-thumbnail | Thumbnail App Component to Wrap Images or Icons</title>
  <meta name="description" content="ion-thumbnailコンポーネントは、画像やアイコンを包み込み、画像のレイアウト表示や原寸大のプレビューに使用することができます。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Thumbnailsは、通常、画像またはアイコンをラップする四角形のコンポーネントです。これを使用すると、大きな画像のグループを簡単に表示したり、フルサイズのイメージのプレビューを表示したりできます。

Thumbnailsは、単独で使用することも、任意の要素の内部で使用することもできます。`ion-item` の内部に配置すると、Thumbnailsのサイズが親コンポーネントに合わせて変更されます。Thumbnailsをアイテムの左側または右側に配置するには、slotをそれぞれ `start` または `end` に設定します。

## Basic

import Basic from '@site/static/usage/thumbnail/basic/index.md';

<Basic />

## Item Thumbnails

import Item from '@site/static/usage/thumbnail/item/index.md';

<Item />

## Theming

import Theming from '@site/static/usage/thumbnail/theming/index.md';

<Theming />

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
