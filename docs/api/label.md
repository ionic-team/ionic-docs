---
title: "ion-label"
---
import Props from '@ionic-internal/component-api/v9/label/props.md';
import Events from '@ionic-internal/component-api/v9/label/events.md';
import Methods from '@ionic-internal/component-api/v9/label/methods.md';
import Parts from '@ionic-internal/component-api/v9/label/parts.md';
import CustomProps from '@ionic-internal/component-api/v9/label/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v9/label/slots.md';

<head>
  <title>ion-label: Item Label Color and Properties for Applications</title>
  <meta name="description" content="Labelは、他のIonicコンポーネントと組み合わせて使用できるラッパー要素です。ion-labelでアイテムラベルの色やその他のプロパティを簡単にデザインできます。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

Labelは、主に[Item](./item.md)コンポーネントにテキストコンテンツを追加するために使用される要素です。Labelは、[Input](./input.md)や[Radio](./radio.md)のようなフォーム制御コンポーネントの内部で、可視ラベルを指定する場合にも使用できますが、必須ではありません。

アイテム内のラベルの位置は、inline、fixed、stacked、またはfloatingにすることができます。

## 基本的な使い方

import Basic from '@site/static/usage/v9/label/basic/index.mdx';

<Basic />

## Item Labels

import Item from '@site/static/usage/v9/label/item/index.mdx';

<Item />

## Theming

### Colors

import Colors from '@site/static/usage/v9/label/theming/colors/index.mdx';

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
