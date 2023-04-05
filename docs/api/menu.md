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


Menuコンポーネントは、現在のビューの横からスライドするナビゲーションパネルです。
デフォルトでは左からスライドしますが、サイドはオーバーライドできます。
Menuの表示はmodeによって異なりますが、表示するtypeはmenuのtypeによって変更することができます。
menu要素は、root content要素と同じ深度である必要があります。
コンテンツにつけるMenuの数に制限はありません。
これらはテンプレートから、またはプログラムでMenuControllerを使用して制御できます。

## 基本的な使い方

import BasicUsage from '@site/static/usage/v7/menu/basic/index.md';

<BasicUsage />

## Menu Toggle

[ion-menu-toggle](./menu-toggle) コンポーネントを使用して、メニューを開いたり閉じたりするカスタムボタンを作成することができます。

import MenuToggle from '@site/static/usage/v7/menu/toggle/index.md';

<MenuToggle />

## Menu Types

`type`プロパティは、アプリケーションでのメニューの表示方法をカスタマイズするために使用することができます。

import MenuType from '@site/static/usage/v7/menu/type/index.md';

<MenuType />

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
