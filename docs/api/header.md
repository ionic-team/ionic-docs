---
title: "ion-header"
---
import Props from '@ionic-internal/component-api/v7/header/props.md';
import Events from '@ionic-internal/component-api/v7/header/events.md';
import Methods from '@ionic-internal/component-api/v7/header/methods.md';
import Parts from '@ionic-internal/component-api/v7/header/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/header/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/header/slots.md';

<head>
  <title>ion-header: Header Parent Component for Ionic Framework Apps</title>
  <meta name="description" content="ion-headerは、ツールバーを保持する親コンポーネントです。ion-headerは、ページの3つのルート要素のうちの1つである必要があることに注意することが重要です。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';


ヘッダーは、ページの上部に配置されるページのルートコンポーネントです。1つ以上の[ツールバー](./toolbar)のラッパーとして使用することが推奨されていますが、あらゆる要素をラップするために使用することができます。ツールバーがヘッダー内で使用される場合、コンテンツは正しいサイズになるように調整され、ヘッダーはデバイスセーフ領域を考慮します。


## 基本的な使い方

import Basic from '@site/static/usage/v7/header/basic/index.md';

<Basic />


## 半透明のヘッダー

ヘッダーは、`translucent`プロパティを設定することで、ネイティブのiOSアプリケーションに見られるような透明度に合わせることができます。ヘッダーの後ろにスクロールするコンテンツを見るには、コンテンツに `fullscreen` プロパティを設定する必要があります。この効果は、モードが `"ios"` で、デバイスが [backdrop-filter](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#browser_compatibility) をサポートしている場合にのみ適用されます。

import Translucent from '@site/static/usage/v7/header/translucent/index.md';

<Translucent />


## 折りたたみのヘッダー

Ionicでは、iOSネイティブアプリケーションで見られる、大きなツールバーのタイトルを表示し、スクロールすると小さなタイトルに折りたたむ機能を提供しています。これは、コンテンツの上に1つ、コンテンツの中に1つ、合計2つのヘッダーを追加し、コンテンツの中にあるヘッダーに `collapse` プロパティを `"condense"` に設定することで実現できます。この効果は、モードが "ios "のときのみ適用されます。

import Condense from '@site/static/usage/v7/header/condense/index.md';

<Condense />


## フェードヘッダー

多くのネイティブiOSアプリケーションは、ツールバーにフェード効果を持たせています。これは、ヘッダーの `collapse` プロパティを `"fade"` に設定することで実現可能です。ページが最初に読み込まれたとき、ヘッダーの背景と境界線は非表示になります。コンテンツがスクロールされると、ヘッダーは再びフェードインします。この効果は、モードが「ios」のときだけ適用されます。

この機能は、[Condensed Header](#condensed-header)と組み合わせることができます。collapse`プロパティに`"fade"`を設定した場合は、コンテンツの外側にあるヘッダーに適用されるはずです。

import Fade from '@site/static/usage/v7/header/fade/index.md';

<Fade />


### 仮想スクロールの使用方法

フェードヘッダーが正しく動作するためには、スクロールコンテナが必要です。仮想スクロールソリューションを使用する場合は、カスタムスクロールターゲットを提供する必要があります。コンテンツのスクロールを無効にし、スクロールを担当する要素に `.ion-content-scroll-host` クラスを追加する必要があります。

import CustomScrollTarget from '@site/static/usage/v7/header/custom-scroll-target/index.md';

<CustomScrollTarget />


## Borders

`"md"`モードでは、ヘッダーの下部に `box-shadow` が表示されます。 `"ios"`モードでは、ヘッダの下部に `border` が表示されます。これらは、ヘッダーに `.ion-no-border` クラスを追加することで削除することができます。

import NoBorder from '@site/static/usage/v7/header/no-border/index.md';

<NoBorder />


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
