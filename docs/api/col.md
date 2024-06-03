---
title: "ion-col"
---
import Props from '@ionic-internal/component-api/v8/col/props.md';
import Events from '@ionic-internal/component-api/v8/col/events.md';
import Methods from '@ionic-internal/component-api/v8/col/methods.md';
import Parts from '@ionic-internal/component-api/v8/col/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/col/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/col/slots.md';

<head>
  <title>ion-col: Column Component Padding and Other Properties</title>
  <meta name="description" content="ion-colは、rowの内側に入るカラムコンポーネントです。グリッド内のコンテンツは、カラムの中に入ります。列のパディング、サイズ、その他のプロパティについては、こちらをご覧ください。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


Columnは、[Grid](./grid) システムのセルラーコンポーネントで、[row](./row)の内部に配置されます。列は行を埋めるように拡張されます。グリッド内のすべてのコンテンツは、カラムの内部に配置する必要があります。

詳しくは、[grid](./grid)のドキュメントを参照してください。


## Column Alignment

デフォルトでは、カラムは行の高さ全体を埋めるように引き伸ばされます。カラムは[フレックスアイテム](https://developer.mozilla.org/en-US/docs/Glossary/Flex_Item)なので、この動作をカスタマイズするために、カラムに適用できるいくつかの[CSSクラス](/docs/layout/css-utilities#flex-item-properties) があります。




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
