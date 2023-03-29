---
title: "ion-text"
---
import Props from '@ionic-internal/component-api/v7/text/props.md';
import Events from '@ionic-internal/component-api/v7/text/events.md';
import Methods from '@ionic-internal/component-api/v7/text/methods.md';
import Parts from '@ionic-internal/component-api/v7/text/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/text/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/text/slots.md';

<head>
  <title>ion-text: Ionic App Component to Style or Change Text Color</title>
  <meta name="description" content="ion-textは、任意の要素のテキストカラーをスタイルするために使用できるシンプルなアプリコンポーネントです。テキスト色を変更するために、ion-textがどのように要素をラップしているかを説明します。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

textコンポーネントは、任意の要素のテキストカラーのスタイル設定に使用できる単純なコンポーネントです。テキストカラーを変更するには、要素を `ion-text` 要素で囲む必要があります。

## 基本的な使い方

import Basic from '@site/static/usage/v7/text/basic/index.md';

<Basic />


## テーマ

テキストコンポーネントは、Ionicが提供するデフォルトの[colors](../../docs/theming/colors)のいずれかを変更することでカスタマイズすることが可能です。

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
