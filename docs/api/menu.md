---
title: "ion-menu"
---
import Props from '@site/static/auto-generated/menu/props.md';
import Events from '@site/static/auto-generated/menu/events.md';
import Methods from '@site/static/auto-generated/menu/methods.md';
import Parts from '@site/static/auto-generated/menu/parts.md';
import CustomProps from '@site/static/auto-generated/menu/custom-props.md';
import Slots from '@site/static/auto-generated/menu/slots.md';

<head>
  <title>ion-menu: API Framework Docs for Types of Menu Components</title>
  <meta name="description" content="ion-menuコンポーネントは、現在のビューの横からスライドして入ってくるナビゲーションドロワーです。Ionic APIで利用可能なメニューの種類については、フレームワークのドキュメントをご覧ください。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


Menuコンポーネントは、現在のビューの横からスライドするナビゲーションパネルです。
デフォルトでは左からスライドしますが、サイドはオーバーライドできます。
Menuの表示はmodeによって異なりますが、表示するtypeはmenuのtypeによって変更することができます。
menu要素は、root content要素と同じ深度である必要があります。
コンテンツにつけるMenuの数に制限はありません。
これらはテンプレートから、またはプログラムでMenuControllerを使用して制御できます。

## Basic Usage

import BasicUsage from '@site/static/usage/menu/basic/index.md';

<BasicUsage />

## Menu Toggle

The [ion-menu-toggle](./menu-toggle) component can be used to create custom button that can open or close the menu.

import MenuToggle from '@site/static/usage/menu/toggle/index.md';

<MenuToggle />

## Menu Types

The `type` property can be used to customize how menus display in your application.

import MenuType from '@site/static/usage/menu/type/index.md';

<MenuType />

## Theming

### CSS Shadow Parts

import Theming from '@site/static/usage/menu/theming/index.md';

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
