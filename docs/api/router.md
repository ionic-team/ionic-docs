---
title: "ion-router"
hide_table_of_contents: true
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v6/router/props.md';
import Events from '@ionic-internal/component-api/v6/router/events.md';
import Methods from '@ionic-internal/component-api/v6/router/methods.md';
import Parts from '@ionic-internal/component-api/v6/router/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/router/custom-props.md';
import Slots from '@ionic-internal/component-api/v6/router/slots.md';

<head>
  <title>ion-router: Router Component to Coordinate URL Navigation</title>
  <meta name="description" content="ion-routerは、ionicのナビゲーションアウトレットであるion-navとion-tabsのためのURLコーディネータです。ルーターコンポーネントは vanilla と Stencil JavaScript 内のルーティングを処理します。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';
import TOCInline from '@theme/TOCInline';



<h2 className="table-of-contents__title">コンテンツ</h2>

<TOCInline
  toc={toc}
  maxHeadingLevel={2}
/>



router バニラおよびステンシルJavaScriptプロジェクト内部でルーティングを処理するためのコンポーネントです。

:::note
 Note: このコンポーネントは、バニラおよびステンシルJavaScriptプロジェクトでのみ使用してください。Angularプロジェクトでは、[`ion-router-outlet`](router-outlet.md) と Angularルータを使用してください。
:::


アプリケーションはコードベースに単一の `ion-router` コンポーネントを持たなければなりません。
このコンポーネントは、ブラウザの履歴とのすべての対話を制御し、イベント・システムを介して更新を集約します。

`ion-router` は、`ion-nav` と `ion-tabs` 、 `ion-router-outlet` というIonicのナビゲーション機能のURL調整機能に過ぎません。

つまり、 `ion-router` はDOMにアクセスすることはなく、コンポーネントを表示することも、何らかのライフサイクルイベントを発行することもなく、ブラウザのURLに基づいて、`ion-nav` と `ion-tabs` 、 `ion-router-outlet`  に何をいつ「show」すべきかを指示するだけです。

コンポーネント(ロード/選択)とURLの間の関係を設定するために、`ion-router` はJSX/HTMLを使ってルートのツリーを定義する宣言的な構文を利用します。

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