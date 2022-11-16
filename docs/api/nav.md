---
title: "ion-nav"
---
import Props from '@site/static/auto-generated/nav/props.md';
import Events from '@site/static/auto-generated/nav/events.md';
import Methods from '@site/static/auto-generated/nav/methods.md';
import Parts from '@site/static/auto-generated/nav/parts.md';
import CustomProps from '@site/static/auto-generated/nav/custom-props.md';
import Slots from '@site/static/auto-generated/nav/slots.md';

<head>
  <title>ion-nav | Nav View Component for Ionic Framework Apps</title>
  <meta name="description" content="ion-navは、任意のコンポーネントをロードしたり、新しいコンポーネントをスタックにPushするために単独で利用できます。ナビビューをロードしたり、他をプッシュしても、ルータ全体に影響を与えることはありません。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Navは、任意のコンポーネントをロードし、スタックに新しいコンポーネントを追加するためのスタンドアロンコンポーネントです。

RouterOutletとは異なり、Navは特定のルーターに関連付けられていません。つまり、Navコンポーネントをロードして他のコンポーネントをスタックに追加しても、ルーター全体のアプリケーションには影響しません。これは、独自のサブナビゲーションを必要とするが、アプリのURLに縛られないモーダルを持つことができるユースケースに適しています。

## Using NavLink

NavLink is a simplified API when interacting with Nav. Developers can customize the component, pass along component properties, modify the direction of the route animation or define a custom animation when navigating.

import NavLinkExample from '@site/static/usage/nav/nav-link/index.md';

<NavLinkExample />

## Interfaces

### NavCustomEvent

必須ではありませんが、このコンポーネントから発行される Ionic イベントでより強く型付けを行うために、`CustomEvent` インターフェースの代わりにこのインターフェースを使用することが可能です。

```typescript
interface NavCustomEvent extends CustomEvent {
  target: HTMLIonNavElement;
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
