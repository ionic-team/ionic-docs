---
title: "ion-backdrop"
---
import Props from '@ionic-internal/component-api/v7/backdrop/props.md';
import Events from '@ionic-internal/component-api/v7/backdrop/events.md';
import Methods from '@ionic-internal/component-api/v7/backdrop/methods.md';
import Parts from '@ionic-internal/component-api/v7/backdrop/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/backdrop/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/backdrop/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Backdropは、他のコンポーネントをオーバーレイするためフルスクリーンのコンポーネントです。これらは、他のコンテンツの上に遷移するコンポーネントのバックグラウンドで役立ち、そのコンポーネントを削除するために使用できます。

## 基本的な使い方

バックドロップは、デフォルトで透明です。バックドロップは、その背後にあるコンテンツのクリックやタップを防ぐことができます。

import Basic from '@site/static/usage/v7/backdrop/basic/index.md';

<Basic />

## スタイリング

バックドロップは、CSSプロパティをバックドロップ要素に直接割り当てることで、カスタマイズすることができます。一般的なプロパティには `background-color`, `background`, `opacity` があります。

コンテンツに `z-index` を設定し、背景よりも高い位置に表示させることができます（デフォルトは `2` です）。

import Styling from '@site/static/usage/v7/backdrop/styling/index.md';

<Styling />

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