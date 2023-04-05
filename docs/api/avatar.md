---
title: "ion-avatar"
---

import Props from '@ionic-internal/component-api/v7/avatar/props.md';
import Events from '@ionic-internal/component-api/v7/avatar/events.md';
import Methods from '@ionic-internal/component-api/v7/avatar/methods.md';
import Parts from '@ionic-internal/component-api/v7/avatar/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/avatar/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/avatar/slots.md';

<head>
  <title>ion-avatar: Circular Application Avatar Icon Component</title>
  <meta name="description" content="Ion-avatarsは画像やアイコンを包む円形のアプリケーション部品です。人物や物体を表現することができ、単体でも、要素の中に入れてもかまいません。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Avatarは通常、写真やアイコンをラップする円形のコンポーネントです。これらは、人またはオブジェクトを表示するために使用できます。

Avatarは、単独で使用することも、任意の要素の内部で使用することもできます。`ion-chip` または `ion-item` の内部に配置すると、Avatarは親コンポーネントに合わせてサイズ変更します。Avatarをitemの左側または右側に配置するには、`slot` を `start` か `end` に設定します。

## 基本的な使い方

import Basic from '@site/static/usage/v7/avatar/basic/index.md';

<Basic />

## Chip Avatar

import Chip from '@site/static/usage/v7/avatar/chip/index.md';

<Chip />

## Item Avatar

import Item from '@site/static/usage/v7/avatar/item/index.md';

<Item />

## テーマ

## CSSカスタムプロパティ

import CSSProps from '@site/static/usage/v7/avatar/theming/css-properties/index.md';

<CSSProps />

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
