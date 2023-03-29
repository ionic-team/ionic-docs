---
title: "ion-tabs"
---
import Props from '@ionic-internal/component-api/v7/tabs/props.md';
import Events from '@ionic-internal/component-api/v7/tabs/events.md';
import Methods from '@ionic-internal/component-api/v7/tabs/methods.md';
import Parts from '@ionic-internal/component-api/v7/tabs/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/tabs/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/tabs/slots.md';

<head>
  <title>Ion-Tabs: Tab-Based Component for App Top-Level Navigation</title>
  <meta name="description" content="Tabsは、タブベースのナビゲーションを実装するためのトップレベルのコンポーネントです。イオンタブはスタイリングを持たず、ネイティブアプリのように動作するナビゲーションのルーター出口として機能します。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

タブは、タブベースのナビゲーションを実装するためのトップレベルのナビゲーションコンポーネントです。
このコンポーネントは、個々の[Tab](tab.md)コンポーネントのコンテナである。

`ion-tabs` コンポーネントはスタイルを持たず、ナビゲーションを処理するためのルータアウトレットとして動作します。また、UI フィードバックやタブを切り替えるための機構は提供しない。タブを切り替えるには、`ion-tabs` の直接の子として `ion-tab-bar` を用意しなければなりません。

`ion-tabs` と `ion-tab-bar` はどちらもスタンドアロンな要素として利用することができます。これらは互いに依存せずに動作しますが、通常は、ネイティブアプリのように動作するタブベースのナビゲーションを実装するために一緒に使用します。

`ion-tab-bar` は、`ion-tabs` コンポーネントの適切な場所に投影するために、スロットを定義する必要があります。

:::note Framework Support

Angular、React、Vueで `ion-tabs` を使用するには、 `ion-router-outlet` または `ion-nav` コンポーネントを使用する必要があります。

:::

## ルーターとの併用

タブはIonicルーターと一緒に使うことで、タブベースのナビゲーションを実装することができます。タブバーとアクティブなタブは、urlに基づいて自動的に解決されます。これはタブナビゲーションで最も一般的なパターンです。

import Router from '@site/static/usage/v7/tabs/router/index.md';

<Router />

:::tip Best Practices

Ionicでは、タブを使ったルーティングパターンのベストプラクティスに関するガイドを用意しています。 Check out the guides for [Angular](/angular/navigation#working-with-tabs), [React](/react/navigation#working-with-tabs), and [Vue](/vue/navigation#working-with-tabs) for additional information.

:::


## Interfaces

### TabsCustomEvent

必須ではありませんが、このコンポーネントから発行される Ionic イベントでより強く型付けを行うために、`CustomEvent` インターフェースの代わりにこのインターフェースを使用することが可能です。

```typescript
interface TabsCustomEvent extends CustomEvent {
  detail: { tab: string };
  target: HTMLIonTabsElement;
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
