---
title: "ion-segment-button"
---
import Props from '@ionic-internal/component-api/v7/segment-button/props.md';
import Events from '@ionic-internal/component-api/v7/segment-button/events.md';
import Methods from '@ionic-internal/component-api/v7/segment-button/methods.md';
import Parts from '@ionic-internal/component-api/v7/segment-button/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/segment-button/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/segment-button/slots.md';

<head>
  <title>ion-segment-button | Segment Button Icon and Segment Value</title>
  <meta name="description" content="ion-segment-buttonsは、Segmentの中にある関連するボタンのグループです。Ionic Frameworkアプリでsegment-buttonsのアイコンの使い方を学び、その値を確認します。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


セグメントボタンは、[segment](segment.md)の中にある、関連するボタンのグループです。それらは横一列に表示されます。セグメントの `value` をセグメントボタンの `value` に設定することで、デフォルトでセグメントボタンを選択することができます。一度に選択できるセグメントボタンは1つだけです。


## 基本的な使い方

import Basic from '@site/static/usage/v7/segment-button/basic/index.md';

<Basic />


## Layout

`layout`プロパティは、デフォルトで `"icon-top"` に設定されています。セグメントボタンにアイコンとラベルの両方がある場合、アイコンはラベルの上に表示されます。この動作は `layout` プロパティを `"icon-bottom"`, `"icon-start"`, `"icon-end"` に設定することで変更可能で、それぞれアイコンをラベルの下、ラベルの先頭（LTRでは左、RTLでは右）、ラベルの末尾（LTRでは右、RTLでは左）に表示することができます。

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
