---
title: "ion-button"
---
import Props from '@ionic-internal/component-api/v7/button/props.md';
import Events from '@ionic-internal/component-api/v7/button/events.md';
import Methods from '@ionic-internal/component-api/v7/button/methods.md';
import Parts from '@ionic-internal/component-api/v7/button/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/button/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/button/slots.md';

<head>
  <title>ion-button: Design and Style Buttons with Custom CSS Properties</title>
  <meta name="description" content="ion-button は、標準的なボタン機能が必要な場所で使用するためのクリック可能な要素を提供します。カスタム CSS プロパティを使用して、ボタン要素をデザインし、スタイルを設定します。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Buttonはクリック可能な要素を提供し、Form内や、標準の単機能なButton機能を必要とする任意の場所で使用できます。text、icon、またはその両方を表示できます。Buttonは、いくつかの属性を利用して特定の外観になるようにスタイル設定できます。

## 基本的な使い方

import Basic from '@site/static/usage/v7/button/basic/index.md';

<Basic />

## Expand

このプロパティでは、ボタンの幅を指定することができます。デフォルトでは、ボタンは `display: inline-block` を持ちますが、このプロパティを設定すると、ボタンは `display: block` を持つ全角要素に変更されます。

import Expand from '@site/static/usage/v7/button/expand/index.md';

<Expand />

## Shape

このプロパティは、ボタンの形状を指定することができます。デフォルトでは、ボタンは小さなボーダー半径を持つ長方形ですが、これを `"round"` に設定すると、ボタンは丸みを帯びた要素に変更されます。

import Shape from '@site/static/usage/v7/button/shape/index.md';

<Shape />


## Fill

この属性は、Buttonのbackgroundとborder-colorを設定します。デフォルトでは、Buttonはtoolbar内にない限り、backgroundは塗りつぶされます。toolbar内にある場合は、backgroundは透明になります。

import Fill from '@site/static/usage/v7/button/fill/index.md';

<Fill />

## Size

この属性は、Buttonのサイズを指定します。この属性を設定すると、Buttonの高さとpaddingが変更されます

import Size from '@site/static/usage/v7/button/size/index.md';

<Size />

## Icons

import Icons from '@site/static/usage/v7/button/icons/index.md';

<Icons />

## テーマ

### Colors

import Colors from '@site/static/usage/v7/button/theming/colors/index.md';

<Colors />

## CSSカスタムプロパティ

import CSSProps from '@site/static/usage/v7/button/theming/css-properties/index.md';

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
