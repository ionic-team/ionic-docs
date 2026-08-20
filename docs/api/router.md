---
title: "ion-router"
---

import Props from '@ionic-internal/component-api/v9/router/props.md';
import Events from '@ionic-internal/component-api/v9/router/events.md';
import Methods from '@ionic-internal/component-api/v9/router/methods.md';
import Parts from '@ionic-internal/component-api/v9/router/parts.md';
import CustomProps from '@ionic-internal/component-api/v9/router/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v9/router/slots.md';

<head>
  <title>ion-router: Router Component to Coordinate URL Navigation</title>
  <meta name="description" content="ion-router は、Ionic のナビゲーションアウトレットである ion-tabs と ion-router-outlet のための URL コーディネーターです。ルーターコンポーネントは vanilla と Stencil JavaScript 内のルーティングを処理します。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';



ルーターは、vanilla と Stencil での JavaScriptプロジェクト内でルーティングを処理するためのコンポーネントです。

:::note
注意: このコンポーネントは、vanilla と Stencil での JavaScriptプロジェクトでのみ使用してください。フレームワーク固有のルーティングソリューションについては、[Angular](../angular/navigation)、[React](../react/navigation)、[Vue](../vue/navigation)のルーティングガイドを参照してください。
:::


アプリケーションはコードベースに単一の `ion-router` コンポーネントを持たなければなりません。
このコンポーネントは、ブラウザの履歴とのすべての対話を制御し、イベント・システムを介して更新を集約します。

`ion-router` は、`ion-tabs` と `ion-router-outlet` という Ionic のナビゲーションアウトレットのための URL コーディネーターです。

つまり、`ion-router` は DOM にアクセスせず、コンポーネントを表示したり、ライフサイクルイベントを発行したりすることもありません。ブラウザの URL に基づいて、`ion-tabs` と `ion-router-outlet` に何をいつ「show」すべきかを指示するだけです。

コンポーネント（ロードまたは選択）と URL の関係を設定するために、`ion-router` は JSX/HTML でルートツリーを定義する宣言的な構文を使用します。

## 基本的な使い方

import BasicExample from '@site/static/usage/v9/router/basic/index.md';

<BasicExample />

## Using ion-nav within a Routed Page

`ion-router` and [`ion-nav`](./nav.md) are separate systems. `ion-router` coordinates URL-based navigation through `ion-router-outlet`, while `ion-nav` manages a local stack that is independent of the URL. `ion-nav` does not integrate with `ion-router`: placing an `ion-nav` inside an `ion-router` does not turn it into a routed outlet, and pushing or popping views on an `ion-nav` never changes the URL.

The two can still be composed. A routed page rendered by `ion-router-outlet` can host its own `ion-nav` for local, URL-less navigation within that page. In the example below, navigating to `/details` updates the URL, but stepping through the `ion-nav` inside that page does not.

import NavWithinPageExample from '@site/static/usage/v9/router/nav-within-page/index.md';

<NavWithinPageExample />

## Interfaces

### RouterEventDetail

```typescript
interface RouterEventDetail {
  from: string | null;
  redirectedFrom: string | null;
  to: string;
}
```

### RouterCustomEvent

必須ではありませんが、このコンポーネントから発行される Ionic イベントでより強く型付けを行うために、`CustomEvent` インターフェースの代わりにこのインターフェースを使用することが可能です。

```typescript
interface RouterCustomEvent extends CustomEvent {
  detail: RouterEventDetail;
  target: HTMLIonRouterElement;
}
```



## 使い方

```html
<ion-router>
  <ion-route component="page-tabs">
    <ion-route url="/schedule" component="tab-schedule">
      <ion-route component="page-schedule"></ion-route>
      <ion-route url="/session/:sessionId" component="page-session"></ion-route>
    </ion-route>

    <ion-route url="/speakers" component="tab-speaker">
      <ion-route component="page-speaker-list"></ion-route>
      <ion-route url="/session/:sessionId" component="page-session"></ion-route>
      <ion-route url="/:speakerId" component="page-speaker-detail"></ion-route>
    </ion-route>

    <ion-route url="/map" component="page-map"></ion-route>
    <ion-route url="/about" component="page-about"></ion-route>
  </ion-route>

  <ion-route url="/tutorial" component="page-tutorial"></ion-route>
  <ion-route url="/login" component="page-login"></ion-route>
  <ion-route url="/account" component="page-account"></ion-route>
  <ion-route url="/signup" component="page-signup"></ion-route>
  <ion-route url="/support" component="page-support"></ion-route>
</ion-router>

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