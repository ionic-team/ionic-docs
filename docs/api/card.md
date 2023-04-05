---
title: "ion-card"
---
import Props from '@ionic-internal/component-api/v7/card/props.md';
import Events from '@ionic-internal/component-api/v7/card/events.md';
import Methods from '@ionic-internal/component-api/v7/card/methods.md';
import Parts from '@ionic-internal/component-api/v7/card/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/card/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/card/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<head>
  <title>ion-card: Card UI Components for Ionic Framework API</title>
  <meta name="description" content="ion-card UIコンポーネントは、より詳細な情報へのエントリーポイントです。カードは単一のコンポーネントであることも、いくつかのヘッダ、タイトル、サブタイトル、コンテンツから構成されることもあります。" />
</head>

<EncapsulationPill type="shadow" />


カードは、テキスト、画像、ボタン、リストなどのコンテンツを表示するためのコンテナです。
カードは1つのコンポーネントで構成することもできますが、
多くの場合、ヘッダー、タイトル、サブタイトル、コンテンツで構成されます。
カードはこの構造に対応するため、いくつかのコンポーネントに分割されます。
[カードヘッダ](./card-header)、[カードタイトル](./card-title)、[カードサブタイトル](./card-subtitle)、[カードコンテンツ](./card-content)。


## 基本的な使い方

import Basic from '@site/static/usage/v7/card/basic/index.md';

<Basic />


## Media Cards

import Media from '@site/static/usage/v7/card/media/index.md';

<Media />


## Card Buttons

import Buttons from '@site/static/usage/v7/card/buttons/index.md';

<Buttons />


## List Card

import List from '@site/static/usage/v7/card/list/index.md';

<List />


## テーマ

### Colors

import Colors from '@site/static/usage/v7/card/theming/colors/index.md';

<Colors />

## CSSカスタムプロパティ

import CSSProps from '@site/static/usage/v7/card/theming/css-properties/index.md';

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
