---
title: "ion-footer"
---
import Props from '@ionic-internal/component-api/v7/footer/props.md';
import Events from '@ionic-internal/component-api/v7/footer/events.md';
import Methods from '@ionic-internal/component-api/v7/footer/methods.md';
import Parts from '@ionic-internal/component-api/v7/footer/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/footer/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/footer/slots.md';

<head>
  <title>Page Footer | Ionic App Footer: Wrapper Root Page Component</title>
  <meta name="description" content="footerはページの下部に配置されるルートコンポーネントのことです。Ionicのfooterはion-toolbarのラッパーとして、コンテンツ領域が正しいサイズであることを確認することができます。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';


フッターは、ページの下部に配置されるページのルートコンポーネントです。1つ以上の [ツールバー](./toolbar) のラッパーとして使用することが推奨されますが、あらゆる要素をラップするために使用することができます。ツールバーがフッターの中で使用される場合、コンテンツは正しいサイズに調整され、フッターはデバイスセーフエリアを考慮したものになります。

## 基本的な使い方

import Basic from '@site/static/usage/v7/footer/basic/index.md';

<Basic />


## 半透明のフッター

フッターは、`translucent`プロパティを設定することで、ネイティブのiOSアプリケーションに見られるような透明度に合わせることができます。フッターの後ろにスクロールするコンテンツを見るには、コンテンツに `fullscreen` プロパティを設定する必要があります。この効果は、モードが `"ios"` で、デバイスが [backdrop-filter](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#browser_compatibility) をサポートしている場合にのみ適用されます。

import Translucent from '@site/static/usage/v7/footer/translucent/index.md';

<Translucent />


## フェードフッター

多くのネイティブiOSアプリケーションは、ツールバーにフェード効果を持たせています。これは、フッターの `collapse` プロパティを `"fade"` に設定することで実現できます。コンテンツが最後までスクロールされると、フッターの背景とボーダーはフェードアウトします。この効果は、モードが `"ios"` のときだけ適用されます。

import Fade from '@site/static/usage/v7/footer/fade/index.md';

<Fade />


### 仮想スクロールでの使用方法

フェードフッターを正しく動作させるためには、スクロールコンテナが必要です。仮想スクロールソリューションを使用する場合は、カスタムスクロールターゲットを提供する必要があります。コンテンツのスクロールを無効にし、スクロールを担当する要素に `.ion-content-scroll-host` クラスを追加する必要があります。

import CustomScrollTarget from '@site/static/usage/v7/footer/custom-scroll-target/index.md';

<CustomScrollTarget />

## ボーダー

`"md"`モードでは、フッターは上部に `box-shadow` が表示されます。`"ios"`モードでは、上部に `border` が表示されます。これらは、フッターに `.ion-no-border` クラスを追加することで削除することができます。

import NoBorder from '@site/static/usage/v7/footer/no-border/index.md';

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
