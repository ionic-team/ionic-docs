---
title: "ion-content"
---
import Props from '@ionic-internal/component-api/v7/content/props.md';
import Events from '@ionic-internal/component-api/v7/content/events.md';
import Methods from '@ionic-internal/component-api/v7/content/methods.md';
import Parts from '@ionic-internal/component-api/v7/content/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/content/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/content/slots.md';

<head>
  <title>ion-content: Scrollable CSS Component for Ionic App Content Areas</title>
  <meta name="description" content="ion-contentは、スクロール可能な領域を制御する便利なメソッドを備えた、使いやすいコンテンツ領域を提供します。このIonicアプリ用CSSコンポーネントの詳細については、こちらをご覧ください。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


Contentコンポーネントは、スクロール可能領域を制御するいくつかの便利なメソッドを備えた、
使いやすいコンテンツ領域を提供します。
1つのビューに表示できるコンテンツは1つだけです。

Contentは、他の多くのIonicコンポーネントと同様に、 [CSS Utilities](/docs/layout/css-utilities) で提供されるグローバルスタイルを使用するか、CSSおよび使用可能な [CSS Custom Properties](#css-custom-properties) を使用して個別にスタイル設定することによって、`padding` や `margin` などを変更するようにカスタマイズできます。


## 基本的な使い方

import Basic from '@site/static/usage/v7/content/basic/index.md';

<Basic />


## Header & Footer

コンテンツは、ページ内の唯一のトップレベル・コンポーネントとすることも、[ヘッダー](./header)、[フッター](./footer)、またはその両方と一緒に使用することも可能です。ヘッダーやフッターと一緒に使用すると、残りの高さを埋めるようにサイズが調整されます。

import HeaderFooter from '@site/static/usage/v7/content/header-footer/index.md';

<HeaderFooter />


## Fullscreen Content

デフォルトでは、コンテンツは [ヘッダー](./header)と [フッター](./footer)の間のスペースを埋めますが、それらの背景にまわることはありません。例えば、ヘッダーとフッターのどちらかに `translucent` プロパティを設定した場合や、ツールバーに `opacity` を設定した場合など、特定のケースでは、コンテンツをヘッダーとフッターの後ろにスクロールさせることが望まれるかもしれない。これは、コンテンツの `fullscreen` プロパティを `true` に設定することで実現することができます。

import Fullscreen from '@site/static/usage/v7/content/fullscreen/index.md';

<Fullscreen />


## コンテンツの固定

スクロール可能な領域の外側に要素を配置するには、`fixed`スロットに割り当てます。そうすることで、その要素はコンテンツの左上に[絶対位置](https://developer.mozilla.org/en-US/docs/Web/CSS/position#absolute_positioning)されます。要素の位置を変えるには、CSSの[top, right, bottom, left](https://developer.mozilla.org/en-US/docs/Web/CSS/position)プロパティを使ってスタイルを設定することができます。

import Fixed from '@site/static/usage/v7/content/fixed/index.md';

<Fixed />

## スクロールメソッド

コンテンツには [メソッド](#methods) が用意されており、これを呼び出すことでコンテンツを下、上、または特定のポイントにスクロールさせることができます。これらのメソッドには `duration` を渡すことができ、瞬時に位置を変更するのではなく、スムーズに移行することができます。

import ScrollMethods from '@site/static/usage/v7/content/scroll-methods/index.md';

<ScrollMethods />

## Scroll Events

スクロールイベントは、パフォーマンス上、コンテンツに対してデフォルトで無効化されています。しかし、`scrollEvents` を `true` に設定することで、有効にすることができます。これは、 スクロール [イベント](#events) を聞く前に必要です。

import ScrollEvents from '@site/static/usage/v7/content/scroll-events/index.md';

<ScrollEvents />


## テーマ

### Colors

import Colors from '@site/static/usage/v7/content/theming/colors/index.md';

<Colors />

### CSS Shadow Parts

import CSSParts from '@site/static/usage/v7/content/theming/css-shadow-parts/index.md';

<CSSParts />

## CSSカスタムプロパティ

import CSSProps from '@site/static/usage/v7/content/theming/css-properties/index.md';

<CSSProps />


## Interfaces

### ScrollBaseDetail

```typescript
interface ScrollBaseDetail {
  isScrolling: boolean;
}
```

### ScrollDetail

```typescript
interface ScrollDetail extends GestureDetail, ScrollBaseDetail {
  scrollTop: number;
  scrollLeft: number;
}
```

### ScrollBaseCustomEvent

必須ではありませんが、`ionScrollStart` と `ionScrollEnd` イベントをより強く型付けするために、`CustomEvent` インターフェースの代わりにこのインターフェースを利用することが可能です。

```typescript
interface ScrollBaseCustomEvent extends CustomEvent {
  detail: ScrollBaseDetail;
  target: HTMLIonContentElement;
}
```

### ScrollCustomEvent

必須ではありませんが、`ionScroll` イベントをより強く型付けするために、`CustomEvent` インターフェースの代わりにこのインターフェースを利用することが可能です。

```typescript
interface ScrollCustomEvent extends ScrollBaseCustomEvent {
  detail: ScrollDetail;
}
```


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
