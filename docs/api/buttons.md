---
title: "ion-buttons"
---
import Props from '@ionic-internal/component-api/v7/buttons/props.md';
import Events from '@ionic-internal/component-api/v7/buttons/events.md';
import Methods from '@ionic-internal/component-api/v7/buttons/methods.md';
import Parts from '@ionic-internal/component-api/v7/buttons/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/buttons/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/buttons/slots.md';

<head>
  <title>ion-buttons: Toolbar Element with Named Slots for Buttons</title>
  <meta name="description" content="Buttonsコンポーネントは、コンテナ要素です。ツールバーに配置されるボタンはion-buttons要素の中にあるべきで、名前付きスロットを使って配置することができます。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />


Buttonsコンポーネントは、コンテナ要素です。 [ツールバー](./toolbar) の内部で使用し、標準の[ボタン](./button)、[メニューボタン](./menu-button)、[戻るボタン](./back-button)を含むいくつかのタイプのボタンを含めることができる。

## 基本的な使い方

import Basic from '@site/static/usage/v7/buttons/basic/index.md';

<Basic />


## Buttons Placement

ツールバー内のボタンは、スロットという名前を使って配置することができます。下図は各スロットの説明です。

| Slot         | Description                                                                                              |
|--------------|----------------------------------------------------------------------------------------------------------|
| `start`      | Positions to the `left` of the content in LTR, and to the `right` in RTL.                                |
| `end`        | Positions to the `right` of the content in LTR, and to the `left` in RTL.                                |
| `secondary`  | Positions element to the `left` of the content in `ios` mode, and directly to the `right` in `md` mode.  |
| `primary`    | Positions element to the `right` of the content in `ios` mode, and to the far `right` in `md` mode.      |

import Placement from '@site/static/usage/v7/buttons/placement/index.md';

<Placement />


## Buttonsのタイプ

ツールバーのボタンは、デフォルトでは透明ですが、ボタンの [`fill`](./button#fill) プロパティで変更することが可能です。この例で [バックボタン](./back-button) と [メニューボタン](./menu-button) に含まれるプロパティは表示目的であり、正しい使用方法はそれぞれのドキュメントをご覧ください。

import Types from '@site/static/usage/v7/buttons/types/index.md';

<Types />


## Collapsible Buttons

ボタンに `collapse` プロパティを設定すると、ヘッダーが折りたたまれたときにボタンが折りたたまれます。これは通常、[collapsible large titles](./title#collapsible-large-titles) と共に使用します。

:::info

この機能はiOS modeでのみ有効です。

:::

<!-- Reuse the playground from the Title directory -->
import CollapsibleLargeTitleButtons from '@site/static/usage/v7/title/collapsible-large-title/buttons/index.md';

<CollapsibleLargeTitleButtons />


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
