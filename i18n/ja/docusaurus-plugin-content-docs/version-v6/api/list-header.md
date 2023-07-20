---
title: "ion-list-header"
---
import Props from '@ionic-internal/component-api/v7/list-header/props.md';
import Events from '@ionic-internal/component-api/v7/list-header/events.md';
import Methods from '@ionic-internal/component-api/v7/list-header/methods.md';
import Parts from '@ionic-internal/component-api/v7/list-header/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/list-header/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/list-header/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


リストヘッダーは、[リスト](./list)の内容を記述するために使用されるブロック要素です。アイテムディバイダー](./item-divider)とは異なり、リストヘッダーは[アイテム](./item)のリストの先頭で一度だけ使用する必要があります。

## 基本的な使い方

import Basic from '@site/static/usage/v7/list-header/basic/index.md';

<Basic />


## リストヘッダーのボタン

リストのヘッダーに [button](./button) を配置すると、リストの一部を表示し、ボタンで全リストにリダイレクトするのに便利です。

import Buttons from '@site/static/usage/v7/list-header/buttons/index.md';

<Buttons />


## List Headerの下線

リストヘッダーは、デフォルトでは下部のボーダーが表示されません。 `lines` プロパティを `"full"` または `"inset"` に変更すると、それぞれ全幅のボーダーまたは左paddingを伴う挿入ボーダーが表示されます。

import Lines from '@site/static/usage/v7/list-header/lines/index.md';

<Lines />

## テーマ

### Colors

import Colors from '@site/static/usage/v7/list-header/theming/colors/index.md';

<Colors />

## CSSカスタムプロパティ

import CSSProps from '@site/static/usage/v7/list-header/theming/css-properties/index.md';

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
