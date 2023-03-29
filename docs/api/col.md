---
title: "ion-col"
hide_table_of_contents: true
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TOCInline from '@theme/TOCInline';

import Props from '@ionic-internal/component-api/v6/col/props.md';
import Events from '@ionic-internal/component-api/v6/col/events.md';
import Methods from '@ionic-internal/component-api/v6/col/methods.md';
import Parts from '@ionic-internal/component-api/v6/col/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/col/custom-props.md';
import Slots from '@ionic-internal/component-api/v6/col/slots.md';

<head>
  <title>ion-col: Column Component Padding, Size and Other Properties</title>
  <meta name="description" content="ion-colは、rowの内側に入るカラムコンポーネントです。グリッド内のコンテンツは、カラムの中に入ります。列のパディング、サイズ、その他のプロパティについては、こちらをご覧ください。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

<h2 className="table-of-contents__title">コンテンツ</h2>

<TOCInline
  toc={toc}
  maxHeadingLevel={2}
/>



Columnは [grid](grid.md) system のセルとなるコンポーネントで、行の内側に入ります。 [row](row.md) を埋めるように展開されます。
グリッド内のすべてのコンテンツは、Columnの内側に配置する必要があります。

詳しくは [Grid Layout](/docs/layout/grid) をご覧ください。


## Column Alignment

By default, columns will stretch to fill the entire height of the row. Columns are [flex items](https://developer.mozilla.org/en-US/docs/Glossary/Flex_Item), so there are several [CSS classes](/docs/layout/css-utilities#flex-item-properties) that can be applied to a column to customize this behavior.




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