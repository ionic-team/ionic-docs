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

Menus are displayed on the `"start"` side by default. In apps that use left-to-right direction, this is the left side, and in right-to-left apps, this will be the right side. Menus can also be set to display on the `"end"` side, which is the opposite of `"start"`.

If menus on both sides are needed in an app, the menu can be opened by passing the `side` value to the `open` method on `MenuController`. If a side is not provided, the menu on the `"start"` side will be opened. See the [multiple menus](#multiple-menus) section below for an example using `MenuController`.

import Sides from '@site/static/usage/v7/menu/sides/index.md';

<Sides />


## Multiple Menus

When multiple menus exist on the same side, we need to enable the menu that we want to open before it can be opened. This can be done by calling the `enable` method on the `MenuController`. We can then call `open` on a menu based on its `menuId` or `side`.

import Multiple from '@site/static/usage/v7/menu/multiple/index.md';

<Multiple />


## Theming

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
