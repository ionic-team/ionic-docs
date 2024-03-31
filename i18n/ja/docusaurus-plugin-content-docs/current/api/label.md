---
title: "ion-label"
---
import Props from '@ionic-internal/component-api/v7/label/props.md';
import Events from '@ionic-internal/component-api/v7/label/events.md';
import Methods from '@ionic-internal/component-api/v7/label/methods.md';
import Parts from '@ionic-internal/component-api/v7/label/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/label/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/label/slots.md';

<head>
  <title>ion-label: Item Label Color and Properties for Applications</title>
  <meta name="description" content="Labelは、他のIonicコンポーネントと組み合わせて使用できるラッパー要素です。ion-labelでアイテムラベルの色やその他のプロパティを簡単にデザインできます。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

Labelは、主に[Item](./item.md)コンポーネントにテキストコンテンツを追加するために使用される要素です。Labelは、[Input](./input.md)や[Radio](./radio.md)のようなフォーム制御コンポーネントの内部で、可視ラベルを指定する場合にも使用できますが、必須ではありません。

The position of the label inside of an item can be inline, fixed, stacked, or floating.

## 基本的な使い方

import Basic from '@site/static/usage/v7/label/basic/index.md';

<Basic />

## Item Labels

import Item from '@site/static/usage/v7/label/item/index.md';

<Item />

## Theming

### Colors

import Colors from '@site/static/usage/v7/label/theming/colors/index.md';

<Colors />


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
