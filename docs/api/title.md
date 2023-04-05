---
title: "ion-title"
---
import Props from '@ionic-internal/component-api/v7/title/props.md';
import Events from '@ionic-internal/component-api/v7/title/events.md';
import Methods from '@ionic-internal/component-api/v7/title/methods.md';
import Parts from '@ionic-internal/component-api/v7/title/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/title/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/title/slots.md';

<head>
  <title>ion-title: Ionic Framework App Title Component for Toolbars</title>
  <meta name="description" content="ion-titleは、ツールバーのタイトルを設定するコンポーネントです。Ionic Frameworkアプリのtitleとcollapsible titleコンポーネントの詳細と使用方法については、こちらをご覧ください。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


Titleは、[ツールバー](./toolbar)のタイトルを設定するテキストコンポーネントです。ユーザーが現在いる画面やセクション、使用中のアプリを説明するために使用することができます。

## Basic

import Basic from '@site/static/usage/v7/title/basic/index.md';

<Basic />

## 折りたたみ式ラージタイトル

大きなタイトルは、[content](./content)がスクロールコンテナの開始位置までスクロールされたときに表示されます。タイトルがヘッダーの後ろにスクロールされると、縮小されたタイトルがフェードインします。

:::info

This feature is only available for iOS.

:::

import CollapsibleLargeTitle from '@site/static/usage/v7/title/collapsible-large-title/basic/index.md';

<CollapsibleLargeTitle />

### 折りたたみ式ボタン

[buttons](./buttons.md)コンポーネントは、[`collapse`](./buttons.md#collapse)プロパティと共に使用すると、ツールバーが折りたたまれたときにヘッダーに追加表示することができます。


import CollapsibleLargeTitleButtons from '@site/static/usage/v7/title/collapsible-large-title/buttons/index.md';

<CollapsibleLargeTitleButtons />

## テーマ

折りたたみ式ラージタイトルは、コンテンツの他の部分との関係でシームレスに表示される必要があります。つまり、折りたたみ可能なラージタイトルを含むツールバーの背景色は、常にコンテンツの背景色と一致する必要があります。

デフォルトでは、標準タイトルを含むツールバーは `opacity: 0` を使って非表示にされ、スクロールによってラージタイトルを折りたたむと徐々に表示されるようになります。その結果、標準タイトルの後ろに見える背景色は、実際にはコンテンツの背景色となります。

標準タイトルのあるツールバーの背景色は、CSS変数に `--background` を設定することで変更できます。これにより、大きなタイトルを折りたたむと、ヘッダーの色が変わるという効果が得られます。

ラージタイトルのテキストカラーをスタイルする場合、特定のページやタブのコンテキスト内ではなく、グローバルにラージタイトルをターゲットにする必要があり、そうしないとナビゲーションアニメーションの間にそのスタイルが適用されません。

## CSSカスタムプロパティ

import CSSCustomProperties from '@site/static/usage/v7/title/theming/css-properties/index.md';

<CSSCustomProperties />

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
