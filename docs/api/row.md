---
title: "ion-row"
hide_table_of_contents: true
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v6/row/props.md';
import Events from '@ionic-internal/component-api/v6/row/events.md';
import Methods from '@ionic-internal/component-api/v6/row/methods.md';
import Parts from '@ionic-internal/component-api/v6/row/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/row/custom-props.md';
import Slots from '@ionic-internal/component-api/v6/row/slots.md';

<head>
  <title>ion-row: Horizontal Row Components and Alignment | Ionic API Docs</title>
  <meta name="description" content="Rowsはグリッドシステムの水平方向のコンポーネントで、さまざまな数のカラムを含んでいます。行の配置や使用方法については、ion-row API Docs を参照してください。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';
import TOCInline from '@theme/TOCInline';

<EncapsulationPill type="shadow" />

<h2 className="table-of-contents__title">コンテンツ</h2>

<TOCInline
  toc={toc}
  maxHeadingLevel={2}
/>



Rowsは [grid](grid.md)システムの水平方向の構成要素で、さまざまな数の
[列](col.md)を含んでいます。列が適切に配置されるようにします。

詳しくは、[グリッドレイアウト](/docs/layout/grid) を参照してください。


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