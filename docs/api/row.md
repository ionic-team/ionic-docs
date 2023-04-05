---
title: "ion-row"
---
import Props from '@ionic-internal/component-api/v7/row/props.md';
import Events from '@ionic-internal/component-api/v7/row/events.md';
import Methods from '@ionic-internal/component-api/v7/row/methods.md';
import Parts from '@ionic-internal/component-api/v7/row/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/row/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/row/slots.md';

<head>
  <title>ion-row: Horizontal Row Components and Alignment | Ionic API Docs</title>
  <meta name="description" content="Rowsはグリッドシステムの水平方向のコンポーネントで、さまざまな数のカラムを含んでいます。行の配置や使用方法については、ion-row API Docs を参照してください。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Rows are horizontal components of the [grid](./grid) system and contain varying numbers of
[columns](./col). They ensure the columns are positioned properly.

See the [grid](./grid) documentation for more information.


## Row Alignment

デフォルトでは、列は行の高さ全体を埋めるように伸縮し、必要に応じて折り返されます。行は [Flexコンテナ](https://developer.mozilla.org/en-US/docs/Glossary/Flex_Container) なので、この動作をカスタマイズするために、行に適用できるいくつかの [CSS クラス](/docs/layout/css-utilities#flex-container-properties) が用意されています。




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
