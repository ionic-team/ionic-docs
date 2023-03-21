---
title: "ion-segment-button"
---
import Props from '@site/static/auto-generated/segment-button/props.md';
import Events from '@site/static/auto-generated/segment-button/events.md';
import Methods from '@site/static/auto-generated/segment-button/methods.md';
import Parts from '@site/static/auto-generated/segment-button/parts.md';
import CustomProps from '@site/static/auto-generated/segment-button/custom-props.md';
import Slots from '@site/static/auto-generated/segment-button/slots.md';

<head>
  <title>ion-segment-button | Segment Button Icon and Segment Value</title>
  <meta name="description" content="ion-segment-buttonsは、Segmentの中にある関連するボタンのグループです。Ionic Frameworkアプリでsegment-buttonsのアイコンの使い方を学び、その値を確認します。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


Segment buttons are groups of related buttons inside of a [segment](segment.md). They are displayed in a horizontal row. A segment button can be selected by default by setting the `value` of the segment to the `value` of the segment button. Only one segment button can be selected at a time.


## 基本的な使い方

import Basic from '@site/static/usage/v7/segment-button/basic/index.md';

<Basic />


## Layout

The `layout` property is set to `"icon-top"` by default. When a segment button has both an icon and a label, it will display the icon on top of the label. This behavior can be changed by setting the `layout` property to `"icon-bottom"`, `"icon-start"`, or `"icon-end"` which will show the icon below the label, to the start of the label (left in LTR and right in RTL) or to the end of the label (right in LTR and left in RTL), respectively.

import Layout from '@site/static/usage/v7/segment-button/layout/index.md';

<Layout />


## テーマ
### CSS Shadow Parts

import CSSParts from '@site/static/usage/v7/segment-button/theming/css-shadow-parts/index.md';

<CSSParts />


## CSSカスタムプロパティ

import CSSProps from '@site/static/usage/v7/segment-button/theming/css-properties/index.md';

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
