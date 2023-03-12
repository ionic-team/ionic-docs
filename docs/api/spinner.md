---
title: "ion-spinner"
---
import Props from '@site/static/auto-generated/spinner/props.md';
import Events from '@site/static/auto-generated/spinner/events.md';
import Methods from '@site/static/auto-generated/spinner/methods.md';
import Parts from '@site/static/auto-generated/spinner/parts.md';
import CustomProps from '@site/static/auto-generated/spinner/custom-props.md';
import Slots from '@site/static/auto-generated/spinner/slots.md';

<head>
  <title>ion-spinner | Animated Spinner Icon Components and Properties</title>
  <meta name="description" content="ion-spinner コンポーネントは、アニメーションするさまざまな SVG スピナーを提供します。これらのアイコンは、アプリがロード中であることや、別の処理を実行していることを示し、待機させることができます。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


Spinnerコンポーネントには、さまざまなアニメーションつきのSVG Spinnerが用意されています。Spinnerは、アプリがコンテンツを読み込んだり、ユーザーが待つ必要のある別のプロセスを実行していることを視覚的に示すものです。


## Basic Usage

The default spinner is based on the mode. When the mode is `ios` the spinner will be `"lines"`, and when the mode is `md` the spinner will be `"circular"`. If the `name` property is set, then that spinner will be used instead of the mode specific spinner.

import Basic from '@site/static/usage/v7/spinner/basic/index.md';

<Basic />

## Theming

### Colors

import Colors from '@site/static/usage/v7/spinner/theming/colors/index.md';

<Colors />

### CSS Custom Properties

import CSSProps from '@site/static/usage/v7/spinner/theming/css-properties/index.md';

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
