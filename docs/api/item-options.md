---
title: "ion-item-options"
hide_table_of_contents: true
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v6/item-options/props.md';
import Events from '@ionic-internal/component-api/v6/item-options/events.md';
import Methods from '@ionic-internal/component-api/v6/item-options/methods.md';
import Parts from '@ionic-internal/component-api/v6/item-options/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/item-options/custom-props.md';
import Slots from '@ionic-internal/component-api/v6/item-options/slots.md';

<head>
  <title>ion-item-options: Option Button Components for Ionic Apps</title>
  <meta name="description" content="ion-item-optionsはion-item-slidingのためのものです。このオプションボタンは、開始側と終了側のどちらにも配置することができます。Ionicアプリでの使用については、こちらをご覧ください。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';
import TOCInline from '@theme/TOCInline';



<h2 className="table-of-contents__title">コンテンツ</h2>

<TOCInline
  toc={toc}
  maxHeadingLevel={2}
/>



`ion-item-sliding`で利用するButton要素のオプションです。これらのButtonは、[start or end side](#side-description)に配置できます。
`ionSwipe` イベントと `expandable` ディレクティブを組み合わせて、Itemのすべてのスワイプアクションを作成できます。


## Side Description

| Side    | Position                                                        | Swipe Direction                                                   |
|---------|-----------------------------------------------------------------|-------------------------------------------------------------------|
| `start` | To the `left` of the content in LTR, and to the `right` in RTL. | From `left` to `right` in LTR, and from `right` to `left` in RTL. |
| `end`   | To the `right` of the content in LTR, and to the `left` in RTL. | From `right` to `left` in LTR, and from `left` to `right` in RTL. |




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