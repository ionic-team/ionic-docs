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

`buffer`プロパティが設定されている場合、バッファーストリームがアニメーションの円と共に表示され、アクティビティを示します。また、`buffer`プロパティの値は、目に見えるトラックの量によって表されます。もし `buffer` の値が `value` プロパティより小さければ、目に見えるトラックはありません。もし `buffer` が `1` に等しければ、バッファースリームは隠されます。

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


## テーマ

### Colors

import Colors from '@site/static/usage/v7/progress-bar/theming/colors/index.md';

<Colors />


## CSSカスタムプロパティ

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
