---
title: "ion-segment-content"
---

import Props from '@ionic-internal/component-api/v9/segment-content/props.md';
import Events from '@ionic-internal/component-api/v9/segment-content/events.md';
import Methods from '@ionic-internal/component-api/v9/segment-content/methods.md';
import Parts from '@ionic-internal/component-api/v9/segment-content/parts.md';
import CustomProps from '@ionic-internal/component-api/v9/segment-content/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v9/segment-content/slots.md';

<head>
  <title>ion-segment-content: Display control element for swipeable segments</title>
  <meta name="description" content="ion-segment-contents are wrapper elements used to control the display of child elements when using swipeable segments." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

セグメントコンテンツは、スワイプ可能なセグメントを使用する際に子要素の表示を制御するためのラッパー要素です。セグメントコンテンツ要素は、[セグメント](./segment.md)にリンクされた単一の[セグメントビュー](./segment-view.md)インスタンスの子要素です。セグメントコンテンツの使用方法については、[スワイプ可能なセグメント](./segment.md#swipeable-segments)のドキュメントを参照してください。

## Usage

Each `ion-segment-content` needs a unique `id` attribute. This will be used to link the segment content to a segment button via the button's
[contentId property](./segment-button.md#properties).

{/* Reuse swipeable segments playground */}

import Swipeable from '@site/static/usage/v9/segment/swipeable/index.md';

<Swipeable />

## Properties
<Props />

## Events
<Events />

## Methods
<Methods />

## CSS Shadow Parts
<Parts />

## CSS Custom Properties
<CustomProps />

## スロット
<Slots />
