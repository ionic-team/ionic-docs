---
title: "ion-spinner"
---
import Props from '@ionic-internal/component-api/v7/spinner/props.md';
import Events from '@ionic-internal/component-api/v7/spinner/events.md';
import Methods from '@ionic-internal/component-api/v7/spinner/methods.md';
import Parts from '@ionic-internal/component-api/v7/spinner/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/spinner/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/spinner/slots.md';

<head>
  <title>ion-spinner | Animated Spinner Icon Components and Properties</title>
  <meta name="description" content="ion-spinner コンポーネントは、アニメーションするさまざまな SVG スピナーを提供します。これらのアイコンは、アプリがロード中であることや、別の処理を実行していることを示し、待機させることができます。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


Spinnerコンポーネントには、さまざまなアニメーションつきのSVG Spinnerが用意されています。Spinnerは、アプリがコンテンツを読み込んだり、ユーザーが待つ必要のある別のプロセスを実行していることを視覚的に示すものです。


## 基本的な使い方

デフォルトのスピナーは、モードに基づいて決定されます。モードが `ios` の場合、スピナーは `"lines"` となり、モードが `md` の場合、スピナーは `"circular"` となります。 `name` プロパティが設定されている場合は、モード固有のスピナーの代わりに、そのスピナーが使用されます。

import Basic from '@site/static/usage/v7/spinner/basic/index.md';

<Basic />

## テーマ

### Colors

import Colors from '@site/static/usage/v7/spinner/theming/colors/index.md';

<Colors />

## CSSカスタムプロパティ

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
