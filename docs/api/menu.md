---
title: "ion-menu"
---
import Props from '@ionic-internal/component-api/v7/menu/props.md';
import Events from '@ionic-internal/component-api/v7/menu/events.md';
import Methods from '@ionic-internal/component-api/v7/menu/methods.md';
import Parts from '@ionic-internal/component-api/v7/menu/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/menu/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/menu/slots.md';

<head>
  <title>ion-menu: API Framework Docs for Types of Menu Components</title>
  <meta name="description" content="ion-menuコンポーネントは、現在のビューの横からスライドして入ってくるナビゲーションドロワーです。Ionic APIで利用可能なメニューの種類については、フレームワークのドキュメントをご覧ください。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


メニューコンポーネントは、現在のビューの横からスライドしてくるナビゲーションドロワーです。デフォルトでは、開始側を使用し、LTRの場合は左から、RTLの場合は右からスライドさせますが、サイドをオーバーライドすることができます。メニューの表示はモードによって異なりますが、表示タイプは利用可能なメニュータイプのいずれかに変更することができます。

メニュー要素はルートコンテンツ要素の兄弟要素でなければなりません。コンテンツにはいくつでもメニューを付けることができる。これらのメニューはテンプレートから制御するか、`MenuController`を使用してプログラムで制御することができます。

## 基本的な使い方

import Basic from '@site/static/usage/v7/menu/basic/index.md';

<Basic />


## Menu Toggle

[menu toggle](./menu-toggle) コンポーネントを使用して、メニューを開いたり閉じたりするカスタムボタンを作成することができます。

import MenuToggle from '@site/static/usage/v7/menu/toggle/index.md';

<MenuToggle />


## Menu Types

`type`プロパティは、アプリケーションでのメニューの表示方法をカスタマイズするために使用することができます。

import MenuType from '@site/static/usage/v7/menu/type/index.md';

<MenuType />


## Menu Sides

メニューはデフォルトでは`"start"`側に表示されます。左から右へ移動するアプリでは左側に、右から左へ移動するアプリでは右側に表示されます。メニューは`"start"`の反対側である`"end"`側に表示させることもできます。

アプリ内で両サイドのメニューが必要な場合、 `MenuController` の `open` メソッドに `side` の値を渡すことでメニューを開くことができます。sideが指定されない場合は、`"start"`側のメニューが開かれる。MenuController` を使用した例については、下記の [複数メニュー](#multiple-menus) セクションを参照ください。

import Sides from '@site/static/usage/v7/menu/sides/index.md';

<Sides />


## 複数メニュー

同じサイドに複数のメニューが存在する場合、サイドではなくIDで参照する必要があります。そうしないと、間違ったメニューがアクティブになる可能性がある。

import Multiple from '@site/static/usage/v7/menu/multiple/index.md';

<Multiple />


## テーマ

### CSS Shadow Parts

import Theming from '@site/static/usage/v7/menu/theming/index.md';

<Theming />

## Interfaces

### MenuCustomEvent

必須ではありませんが、このコンポーネントから発行される Ionic イベントでより強く型付けを行うために、`CustomEvent` インターフェースの代わりにこのインターフェースを使用することが可能です。

```typescript
interface MenuCustomEvent<T = any> extends CustomEvent {
  detail: T;
  target: HTMLIonMenuElement;
}
```




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
