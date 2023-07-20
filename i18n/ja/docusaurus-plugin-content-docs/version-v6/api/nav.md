---
title: "ion-nav"
---
import Props from '@ionic-internal/component-api/v7/nav/props.md';
import Events from '@ionic-internal/component-api/v7/nav/events.md';
import Methods from '@ionic-internal/component-api/v7/nav/methods.md';
import Parts from '@ionic-internal/component-api/v7/nav/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/nav/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/nav/slots.md';

<head>
  <title>ion-nav | Nav View Component for Ionic Framework Apps</title>
  <meta name="description" content="ion-navは、任意のコンポーネントをロードしたり、新しいコンポーネントをスタックにPushするために単独で利用できます。ナビビューをロードしたり、他をプッシュしても、ルータ全体に影響を与えることはありません。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Navは、任意のコンポーネントをロードし、スタックに新しいコンポーネントを追加するためのスタンドアロンコンポーネントです。

RouterOutletとは異なり、Navは特定のルーターに関連付けられていません。つまり、Navコンポーネントをロードして他のコンポーネントをスタックに追加しても、ルーター全体のアプリケーションには影響しません。これは、独自のサブナビゲーションを必要とするが、アプリのURLに縛られないモーダルを持つことができるユースケースに適しています。

## NavLinkを利用する

NavLinkは、Navと対話する際の簡略化されたAPIです。開発者は、コンポーネントをカスタマイズしたり、コンポーネントのプロパティを渡したり、ルートアニメーションの方向を変更したり、ナビゲート時のカスタムアニメーションを定義したりすることができます。

import NavLinkExample from '@site/static/usage/v7/nav/nav-link/index.md';

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
