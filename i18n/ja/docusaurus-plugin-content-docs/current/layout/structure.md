---
title: 構造
initialTab: 'preview'
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>レイアウトの構成 | Structures for Content Layout on Ionic Apps</title>
  <meta
    name="description"
    content="Ionic provides several different layouts that can be used to structure an app and its content—from single page layouts, to split pane views and modals."
  />
</head>

Ionic Framework は、アプリを構成するために使用できるいくつかの異なるレイアウトを提供します。シングルページレイアウトから、スプリットペインビューやモーダルまで、さまざまなレイアウトがあります。

## Header と Footer のレイアウト

### Header

最もシンプルなレイアウトは、[header](../api/header.md) と [content](../api/content.md) で構成されています。アプリのほとんどのページは、一般的にこの 2 つを備えていますが、コンテンツを使用するためにヘッダーは必要ではありません。

import Header from '@site/static/usage/v7/header/basic/index.md';

<Header />

### Footer

ヘッダーのツールバーがコンテンツの上に表示されるのに対して、フッターはコンテンツの下に表示されます。ヘッダーとフッターは、同じページで併用することも可能です。

import Footer from '@site/static/usage/v7/footer/basic/index.md';

<Footer />

## タブレイアウト

水平な [タブ](../api/tabs.md) からなるレイアウトを使用すると、ユーザーはコンテンツビューをすばやく切り替えることができます。各タブには、[router outlet](../api/router-outlet.md) や [nav](../api/nav.md) を使用して、静的コンテンツやナビゲーション・スタックを含めることができます。

import Tabs from '@site/static/usage/v7/tabs/router/index.md';

<Tabs />

## メニューレイアウト

モバイルアプリの標準的なレイアウトには、ボタンをクリックするか、横からスワイプして開くことで サイドメニュー [menu](../api/menu.md) を切り替えられる機能が含まれています。サイドメニューは一般的にナビゲーションのために使用されますが、任意のコンテンツを含むことができます。

import Menu from '@site/static/usage/v7/menu/basic/index.md';

<Menu />

## 分割ペインレイアウト

[split pane](../api/split-pane.md) レイアウトは、前述のレイアウトを組み合わせることができるため、より複雑な構造を持っています。これは、ビューポートが指定されたブレークポイントより上にある場合に、複数のビューを表示することができます。デバイスの画面サイズが一定以下の場合、分割ペインビューは非表示になります。

デフォルトでは、画面が `768px` より大きいとき、または `md` ブレイクポイントに分割ペインが表示されますが、`when` プロパティを設定することで、異なるブレイクポイントを使用するようにカスタマイズすることができます。以下は、分割ペインが `xs` 画面以上、またはビューポートが `0px` より大きい場合に表示されるメニューを含んでいる例です。これにより、すべての画面サイズに対して分割ペインが表示されるようになります。

ここで重要なのは、分割ペインで指定した `contentId` と一致する `id` を持つ要素が、常に表示されるメインコンテンツとなることです。これは、[nav](../api/nav.md)、[router outlet](../api/router-outlet.md) または [tabs](../api/tabs.md) など、どの要素でもかまいません。

import SplitPane from '@site/static/usage/v7/split-pane/basic/index.md';

<SplitPane />
