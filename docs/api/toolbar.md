---
title: "ion-toolbar"
---
import Props from '@ionic-internal/component-api/v7/toolbar/props.md';
import Events from '@ionic-internal/component-api/v7/toolbar/events.md';
import Methods from '@ionic-internal/component-api/v7/toolbar/methods.md';
import Parts from '@ionic-internal/component-api/v7/toolbar/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/toolbar/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/toolbar/slots.md';

<head>
  <title>Toolbar | Customize App Menu Toolbar Buttons and Icons</title>
  <meta name="description" content="Ion-toolbar コンポーネントは、アプリのメニューにあるツールバーボタンをカスタマイズすることができます。コンテンツの上下に固定ツールバーを追加したり、コンテンツと一緒にスクロールするフルスクリーンを使用することができます。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


ツールバーは、一般的にコンテンツの上または下に配置され、現在の画面のコンテンツとアクションを提供します。コンテンツ](./content)内に配置された場合、ツールバーはコンテンツと一緒にスクロールします。

ツールバーには、タイトル、ボタン、アイコン、戻るボタン、メニューボタン、検索バー、セグメント、プログレスバーなど、さまざまなコンポーネントを含めることができます。


## 基本的な使い方

ツールバーを正しく配置するために、[header](./header)または[footer](./footer)の内部に配置することをお勧めします。ツールバーをヘッダーに配置すると、コンテンツの上部に固定されて表示されます。フッターに配置された場合は、下側に固定されて表示されます。フルスクリーンのコンテンツは、ヘッダーやフッターにあるツールバーの後ろでスクロールします。 [title](./title) コンポーネントを使用すると、ツールバーの内側にテキストを表示することができます。

import Basic from '@site/static/usage/v7/toolbar/basic/index.md';

<Basic />


## Buttons in Toolbars

ツールバーに配置するボタンは、[buttons](./buttons)コンポーネントの内部に配置する必要があります。ボタンコンポーネントは、名前付きの [スロット](#slots) を使ってツールバーの内側に配置することができます。スロットの `"primary"` と `"secondary"` は `ios` モードと `md` モードで異なる動作をします。

buttons コンポーネントは、標準的な [ボタン](./button)、[戻るボタン](./back-button)、[メニューボタン](./menu-button)、またはそれらのいずれかをラップすることができます。ツールバーのボタンはデフォルトで透明ですが、ボタンの [`fill`](./button#fill) プロパティで変更することが可能です。この例でバックボタンとメニューボタンに含まれているプロパティは表示目的であり、適切な使用方法についてはそれぞれのドキュメントを参照してください。

import Buttons from '@site/static/usage/v7/toolbar/buttons/index.md';

<Buttons />


## Searchbars in Toolbars

[searchbar](./searchbar)は、ツールバーの中に配置することで、コンテンツを検索することができます。ツールバーの唯一の子コンポーネントである必要があり、幅と高さを完全に占有します。

import Searchbars from '@site/static/usage/v7/toolbar/searchbars/index.md';

<Searchbars />


## ツールバーのセグメント

[セグメント](./segment)は、一般的にツールバーで、同じページ内の2つの異なるコンテンツビューを切り替えるために使用されます。ボタンなどの他のコンポーネントと一緒にツールバーに配置することができますが、タイトルと一緒に配置するべきではありません。

import Segments from '@site/static/usage/v7/toolbar/segments/index.md';

<Segments />


## ツールバーのプログレスバー

[プログレスバー](./progress-bar)は、アプリで進行中のプロセスを示すローディングインジケータとして使用されます。プログレスバーは、ツールバーの下部に配置されるため、ツールバーの中の他のコンポーネントと一緒に配置することができます。

import ProgressBars from '@site/static/usage/v7/toolbar/progress-bars/index.md';

<ProgressBars />


## テーマ

### Colors

import Colors from '@site/static/usage/v7/toolbar/theming/colors/index.md';

<Colors />

## CSSカスタムプロパティ

import CSSProps from '@site/static/usage/v7/toolbar/theming/css-properties/index.md';

<CSSProps />


## Borders

`md` モードでは、`<ion-header>` は下部にボックスシャドウを、`<ion-footer>` は上部にボックスシャドウを表示します。 `ios` モードでは、`<ion-header>` の下部にボーダーが、`<ion-footer>` の上部にボーダーが表示されます。


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
