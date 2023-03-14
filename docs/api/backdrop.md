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

## Basic Usage

The backdrop is transparent by default. The backdrop will prevent clicking or tapping on the content behind it.

import Basic from '@site/static/usage/v7/backdrop/basic/index.md';

<Basic />

## Styling

The backdrop can be customized by assigning CSS properties directly to the backdrop element. Common properties include `background-color`, `background` and `opacity`. 

Content can be displayed above the backdrop by setting a `z-index` on the content, higher than the backdrop (defaults to `2`).

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