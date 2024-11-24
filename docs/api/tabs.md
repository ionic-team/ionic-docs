---
title: "ion-tabs"
---
import Props from '@ionic-internal/component-api/v8/tabs/props.md';
import Events from '@ionic-internal/component-api/v8/tabs/events.md';
import Methods from '@ionic-internal/component-api/v8/tabs/methods.md';
import Parts from '@ionic-internal/component-api/v8/tabs/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/tabs/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/tabs/slots.md';

<head>
  <title>ion-tabs: Tab-Based Component for App Top-Level Navigation</title>
  <meta name="description" content="Tabsは、タブベースのナビゲーションを実装するためのトップレベルのコンポーネントです。イオンタブはスタイリングを持たず、ネイティブアプリのように動作するナビゲーションのルーター出口として機能します。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

タブは、タブベースのナビゲーションを実装するためのトップレベルのナビゲーションコンポーネントです。
このコンポーネントは、個々の[Tab](tab.md)コンポーネントのコンテナである。

`ion-tabs` コンポーネントはスタイルを持たず、ナビゲーションを処理するためのルータアウトレットとして動作します。また、UI フィードバックやタブを切り替えるための機構は提供しない。タブを切り替えるには、`ion-tabs` の直接の子として `ion-tab-bar` を用意しなければなりません。

`ion-tabs` と `ion-tab-bar` はどちらもスタンドアロンな要素として利用することができます。これらは互いに依存せずに動作しますが、通常は、ネイティブアプリのように動作するタブベースのナビゲーションを実装するために一緒に使用します。

`ion-tab-bar` は、`ion-tabs` コンポーネントの適切な場所に投影するために、スロットを定義する必要があります。

## Basic Usage

タブは、URLを変更することなく、異なるコンテンツを表示するために使用することができます。これは、タブをナビゲーションのために使用するのではなく、異なるコンテンツを表示するために使用する場合に便利です。

import Basic from '@site/static/usage/v8/tabs/basic/index.md';

<Basic />

## ルーターとの併用

タブをIonicルーターで使用すると、タブベースのナビゲーションを実装できます。タブバーとアクティブタブはURLに基づいて自動的に解決されます。これはタブナビゲーションの最も一般的なパターンです。

import Router from '@site/static/usage/v8/tabs/router/index.md';

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
