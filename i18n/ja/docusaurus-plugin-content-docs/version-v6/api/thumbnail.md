---
title: "ion-thumbnail"
---

import Props from '@ionic-internal/component-api/v7/thumbnail/props.md';
import Events from '@ionic-internal/component-api/v7/thumbnail/events.md';
import Methods from '@ionic-internal/component-api/v7/thumbnail/methods.md';
import Parts from '@ionic-internal/component-api/v7/thumbnail/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/thumbnail/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/thumbnail/slots.md';

<head>
  <title>ion-thumbnail | Thumbnail App Component to Wrap Images or Icons</title>
  <meta name="description" content="ion-thumbnailコンポーネントは、画像やアイコンを包み込み、画像のレイアウト表示や原寸大のプレビューに使用することができます。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Thumbnailsは、通常、画像またはアイコンをラップする四角形のコンポーネントです。これを使用すると、大きな画像のグループを簡単に表示したり、フルサイズのイメージのプレビューを表示したりできます。

Thumbnailsは、単独で使用することも、任意の要素の内部で使用することもできます。`ion-item` の内部に配置すると、Thumbnailsのサイズが親コンポーネントに合わせて変更されます。Thumbnailsをアイテムの左側または右側に配置するには、slotをそれぞれ `start` または `end` に設定します。

## 基本的な使い方

import Basic from '@site/static/usage/v7/thumbnail/basic/index.md';

<Basic />

## Item Thumbnails

import Item from '@site/static/usage/v7/thumbnail/item/index.md';

<Item />

## テーマ

## CSSカスタムプロパティ

import CSSProps from '@site/static/usage/v7/thumbnail/theming/css-properties/index.md';

<CSSProps />

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
