---
title: "ion-progress-bar"
---
import Props from '@ionic-internal/component-api/v7/progress-bar/props.md';
import Events from '@ionic-internal/component-api/v7/progress-bar/events.md';
import Methods from '@ionic-internal/component-api/v7/progress-bar/methods.md';
import Parts from '@ionic-internal/component-api/v7/progress-bar/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/progress-bar/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/progress-bar/slots.md';

<head>
  <title>Progress Bar | Horizontal App Progress Bar for Loading Indicator</title>
  <meta name="description" content="ion-progress-barは、水平方向の読み込みインジケーターで、フォームの送信や更新の保存など、進行中のアプリ処理のステータスをユーザーに知らせます。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


プログレスバーは、アプリのロード、フォームの送信、更新の保存など、進行中の処理の状態をユーザーに知らせるものです。プログレスバーには2つのタイプがあります。プログレスバーには、`determinate`と`indeterminate`の2種類があります。

## Determinate

Determinateはデフォルトのタイプです。操作のパーセンテージがわかっている場合に使用されるべきです。進行状況は `value` プロパティを設定することで表現されます。これは、進捗が0から100%まで増加するように表示するために使用できます。

import Determinate from '@site/static/usage/v7/progress-bar/determinate/index.md';

<Determinate />

### Buffer

If the `buffer` property is set, a buffer stream will show with animated circles to indicate activity. The value of the `buffer` property will also be represented by how much visible track there is. If the value of `buffer` is less than the `value` property, there will be no visible track. If `buffer` is equal to `1` then the buffer stream will be hidden.

import Buffer from '@site/static/usage/v7/progress-bar/buffer/index.md';

<Buffer />


## Indeterminate

Indeterminateタイプは、処理にかかる時間が不明な場合に使用します。プログレスバーは `value` と連動しておらず、処理が完了するまでトラックに沿ってスライドしつづけます。

import Indeterminate from '@site/static/usage/v7/progress-bar/indeterminate/index.md';

<Indeterminate />


## Progress Bars in Toolbars

<!-- Reuse the playground from the Toolbar directory -->
import Toolbar from '@site/static/usage/v7/toolbar/progress-bars/index.md';

<Toolbar />


## Theming

### Colors

import Colors from '@site/static/usage/v7/progress-bar/theming/colors/index.md';

<Colors />


### CSS Custom Properties

import CSSProps from '@site/static/usage/v7/progress-bar/theming/css-properties/index.md';

<CSSProps />


### CSS Shadow Parts

import CSSParts from '@site/static/usage/v7/progress-bar/theming/css-shadow-parts/index.md';

<CSSParts />


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
