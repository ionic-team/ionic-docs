---
title: "ion-text"
hide_table_of_contents: true
demoUrl: "/docs/demos/api/text/index.html"
demoSourceUrl: "https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/text/index.html"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v6/text/props.md';
import Events from '@ionic-internal/component-api/v6/text/events.md';
import Methods from '@ionic-internal/component-api/v6/text/methods.md';
import Parts from '@ionic-internal/component-api/v6/text/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/text/custom-props.md';
import Slots from '@ionic-internal/component-api/v6/text/slots.md';

<head>
  <title>ion-text: Ionic App Component to Style or Change Text Color</title>
  <meta name="description" content="ion-textは、任意の要素のテキストカラーをスタイルするために使用できるシンプルなアプリコンポーネントです。テキスト色を変更するために、ion-textがどのように要素をラップしているかを説明します。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';
import TOCInline from '@theme/TOCInline';

<EncapsulationPill type="shadow" />

<h2 className="table-of-contents__title">コンテンツ</h2>

<TOCInline
  toc={toc}
  maxHeadingLevel={2}
/>



textコンポーネントは、任意の要素のテキストカラーのスタイル設定に使用できる単純なコンポーネントです。テキストカラーを変更するには、要素を `ion-text` 要素で囲む必要があります。




## 使い方

```html
<ion-text color="secondary">
  <h1>H1: The quick brown fox jumps over the lazy dog</h1>
</ion-text>

<ion-text color="primary">
  <h2>H2: The quick brown fox jumps over the lazy dog</h2>
</ion-text>

<ion-text color="light">
  <h3>H3: The quick brown fox jumps over the lazy dog</h3>
</ion-text>

<ion-text color="danger">
  <h4 >H4: The quick brown fox jumps over the lazy dog</h4>
</ion-text>

<ion-text color="dark">
  <h5>H5: The quick brown fox jumps over the lazy dog</h5>
</ion-text>

<p>
  I saw a werewolf with a Chinese menu in his hand.
  Walking through the <ion-text color="danger"><sub>streets</sub></ion-text> of Soho in the rain.
  He <ion-text color="primary"><i>was</i></ion-text> looking for a place called Lee Ho Fook's.
  Gonna get a <ion-text color="secondary"><a>big dish of beef chow mein.</a></ion-text>
  <ion-text color="danger"><ion-icon name="cut"></ion-icon></ion-text>
</p>
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