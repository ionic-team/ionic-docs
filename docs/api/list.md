---
title: "ion-list"
---
import Props from '@ionic-internal/component-api/v7/list/props.md';
import Events from '@ionic-internal/component-api/v7/list/events.md';
import Methods from '@ionic-internal/component-api/v7/list/methods.md';
import Parts from '@ionic-internal/component-api/v7/list/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/list/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/list/slots.md';

<head>
  <title>ion-list: Item List View Component for iOS and Android Apps</title>
  <meta name="description" content="ion-listsは、テキスト、アイコン、トグルなどを含むアイテムの複数の行で構成されています。iOSおよびAndroidのIonicアプリのリストビューコンポーネントについて説明します。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';


リストは、Text、Buttons、Toggleを含むこと [アイテム](./item) の複数の行で構成されています。
アイコンやサムネイルなど、さまざまな機能を備えています。リストには一般的に、画像やテキストなど、類似したデータ内容を持つアイテムが含まれます。

リストは、アイテムをスワイプしてオプションを表示したり、ドラッグしてリスト内のアイテムを[並び替え](./reorder)したり、アイテムを削除したりするなどの操作をサポートしています。

## 基本的な使い方

import Basic from '@site/static/usage/v7/list/basic/index.md';

<Basic />


## Inset List

リストに `inset` プロパティを追加すると、リストの周囲にマージンが適用されます。また、`ios`モードでは、リストに角丸が追加されます。

import Inset from '@site/static/usage/v7/list/inset/index.md';

<Inset />


## List Lines

リストに `lines` プロパティを追加すると、リスト内のすべてのアイテムの下側のボーダーを調整することができます。 `"full"`に設定すると全幅のボーダーが表示され、`"inset"`に設定すると左paddingで調整されたボーダーが表示され、`none"`に設定するとボーダーが表示されません。リスト内のアイテムに `lines` プロパティが設定されている場合は、リスト上のプロパティよりもそちらが優先されます。

import Lines from '@site/static/usage/v7/list/lines/index.md';

<Lines />



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
