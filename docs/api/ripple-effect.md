---
title: "ion-ripple-effect"
---
import Props from '@ionic-internal/component-api/v7/ripple-effect/props.md';
import Events from '@ionic-internal/component-api/v7/ripple-effect/events.md';
import Methods from '@ionic-internal/component-api/v7/ripple-effect/methods.md';
import Parts from '@ionic-internal/component-api/v7/ripple-effect/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/ripple-effect/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/ripple-effect/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<head>
  <title>ion-ripple-effect: Ripple Effect Component for Ionic Apps</title>
  <meta name="description" content="ripple effect buttonコンポーネントは、Material Designインクのリップルインタラクション効果を追加します。ion-appでのみ使用可能で、任意のコンポーネントに追加することができます。" />
</head>

<EncapsulationPill type="shadow" />


ripple effectコンポーネントは、[Material Design ink ripple interaction effect](https://material.io/develop/web/supporting/ripple)を追加します。このコンポーネントは `<ion-app>` の内部でのみ使用でき、任意の要素の内部に追加できます。

親要素に [relative position](https://developer.mozilla.org/en-US/docs/Web/CSS/position) を設定することが重要です。波紋エフェクトはabsolute positionであり、相対位置決めされた最も近い親要素をカバーするからです。また、親要素には `ion-activatable` クラスを設定します。これは、波及効果にその要素がクリック可能であることを伝えるものです。波紋がコンテナからはみ出す場合は、親要素に `overflow: hidden` を追加することを推奨します。


## 基本的な使い方

import Basic from '@site/static/usage/v7/ripple-effect/basic/index.md';

<Basic />


## タイプ

リップル効果には2つのタイプがある： `"bounded"` と `"unbounded"` です。デフォルトのタイプである `"bounded"` は、クリック位置から外側に波及効果を広げます。常に要素の中心から始まり、円形に広がる波及効果を追加するには、タイプを `"unbounded"` に設定します。

import Type from '@site/static/usage/v7/ripple-effect/type/index.md';

<Type />


## カスタマイズ

リップルはCSSで別の色にカスタマイズできます。デフォルトでは、波紋の色はテキストの色を継承するように設定されています。これはCSSの `color` を親または波紋エフェクト自体に設定することで変更できます。

import Customizing from '@site/static/usage/v7/ripple-effect/customizing/index.md';

<Customizing />


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
