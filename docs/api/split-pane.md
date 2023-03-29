---
title: "ion-split-pane"
---

import Props from '@ionic-internal/component-api/v7/split-pane/props.md';
import Events from '@ionic-internal/component-api/v7/split-pane/events.md';
import Methods from '@ionic-internal/component-api/v7/split-pane/methods.md';
import Parts from '@ionic-internal/component-api/v7/split-pane/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/split-pane/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/split-pane/slots.md';

<head>
  <title>ion-split-pane: Split Plane View for Menus and Multi-View Layouts</title>
  <meta name="description" content="ion-split-paneは、マルチビューのアプリレイアウトを作成する際に便利です。これにより、メニューなどのUI要素を、ビューポートの幅が広がるにつれて表示することができます。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

分割ペインは、マルチビューレイアウトを作成する際に便利です。
メニューのようなUI要素は、分割されたペインで表示することができます。ビューポートの幅が大きくなるにつれて表示されます。

デバイスの画面幅が特定のサイズより小さい場合、分割ペインは縮小され、メニューは非表示になります。これは、ブラウザで提供され、アプリストアを通じてスマートフォンやタブレットにデプロイされるアプリを作成するのに理想的な動作です。

## 基本的な使い方

:::note
このデモでは `when` プロパティを `'xs'` に設定し、分割ペインが常に表示されるようにしています。小さなビューポートで分割ペインを折りたたみたい場合は、Ionicアプリケーションにこの設定は必要ありません。詳しくは、[ブレークポイントの設定](#setting-breakpoints)を参照してください。
:::

import Basic from '@site/static/usage/v7/split-pane/basic/index.md';

<Basic />

## ブレイキング・ポイントを決める

デフォルトでは、画面が992pxを超えると分割ペインが拡張表示されます。これをカスタマイズするには、 `when` プロパティにブレークポイントを渡します。`when` プロパティには、真偽値、有効なメディア・クエリー、またはIonicの事前定義サイズのいずれかを指定できます。


```html
<!-- can be "xs", "sm", "md", "lg", or "xl" -->
<ion-split-pane when="md"></ion-split-pane>

<!-- can be any valid media query https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries -->
<ion-split-pane when="(min-width: 40px)"></ion-split-pane>
```


 | Size | Value                 | Description                                                           |
 |------|-----------------------|-----------------------------------------------------------------------|
 | `xs` | `(min-width: 0px)`    | Show the split-pane when the min-width is 0px (meaning, always)       |
 | `sm` | `(min-width: 576px)`  | Show the split-pane when the min-width is 576px                       |
 | `md` | `(min-width: 768px)`  | Show the split-pane when the min-width is 768px                       |
 | `lg` | `(min-width: 992px)`  | Show the split-pane when the min-width is 992px (default break point) |
 | `xl` | `(min-width: 1200px)` | Show the split-pane when the min-width is 1200px                      |
## テーマ

## CSSカスタムプロパティ

import CSSProperties from '@site/static/usage/v7/split-pane/theming/css-properties/index.md';

<CSSProperties />

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