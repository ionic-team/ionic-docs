---
title: "ion-fab-button"
---
import Props from '@ionic-internal/component-api/v7/fab-button/props.md';
import Events from '@ionic-internal/component-api/v7/fab-button/events.md';
import Methods from '@ionic-internal/component-api/v7/fab-button/methods.md';
import Parts from '@ionic-internal/component-api/v7/fab-button/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/fab-button/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/fab-button/slots.md';

<head>
  <title>Floating Action Button | Ionic FAB Button Icon for Primary Action</title>
  <meta name="description" content="フローティング・アクション・ボタン（FAB）は、アプリ内の主要なアクションを表します。アイコンは円形で、ボタンを押すと、関連するアクションを開くことができます。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


Floating Action Buttons (FABs) represent the primary action in an application. By default, they have a circular shape. When pressed, the button may open more related actions.

As the name suggests, FABs generally float over the content in a fixed position. This is achieved by wrapping the fab button in a [fab](./fab) component. If the button is not wrapped with a fab, it will scroll with the content.

For usage examples, see the [fab documentation](./fab).

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