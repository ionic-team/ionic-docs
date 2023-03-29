---
title: "ion-img"
---

import Props from '@ionic-internal/component-api/v7/img/props.md';
import Events from '@ionic-internal/component-api/v7/img/events.md';
import Methods from '@ionic-internal/component-api/v7/img/methods.md';
import Parts from '@ionic-internal/component-api/v7/img/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/img/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/img/slots.md';

<head>
  <title>Img Tag to Lazy Load Images in Viewport | ion-img Tag</title>
  <meta name="description" content="Imgタグは、タグがビューポートにあるときに、画像を遅延して読み込みます。大きなリストを作成する際にこのコンポーネントを利用すると、画像が表示されているときだけ読み込まれます。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


Img は、タグがビューポートに表示されているときに画像をLazy Loadするタグです。これは、画像が表示されているときにのみロードされるため、巨大なリストを生成する場合に非常に便利です。このコンポーネントは [Intersection Observer](https://caniuse.com/#feat=intersectionobserver) を内部的に使用します。Intersection Observerは、最近のほとんどのブラウザでサポートされていますが、サポートされていない場合は `setTimeout` で処理されます。

## 基本的な使い方

import Basic from '@site/static/usage/v7/img/basic/index.md';

<Basic />

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