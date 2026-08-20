---
title: "ion-tab"
---

import Props from '@ionic-internal/component-api/v9/tab/props.md';
import Events from '@ionic-internal/component-api/v9/tab/events.md';
import Methods from '@ionic-internal/component-api/v9/tab/methods.md';
import Parts from '@ionic-internal/component-api/v9/tab/parts.md';
import CustomProps from '@ionic-internal/component-api/v9/tab/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v9/tab/slots.md';

<head>
  <title>ion-tab: Ionic Framework Application Component</title>
  <meta name="description" content="ion-tabは、タブの子コンポーネントです。各ion-tabは、アプリケーションまたは単一のビューのトップレベルのナビゲーションスタックを含むことができます。詳しくは、こちらをご覧ください。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

タブコンポーネントは、[tabs](tabs.md) の子コンポーネントです。各タブには、アプリまたは単一のビューのトップレベルのナビゲーション スタックを含めることができます。アプリには多くのタブがあり、それぞれが独立したナビゲーションを持つことができます。

:::note
Angular、React、Vue は、`ion-tabs` コンポーネントが[基本的な使い方](./tabs.md#basic-usage)に設定されている場合にのみ、このコンポーネントを使用できます。ルーティングでタブを設定する場合、`ion-tab`コンポーネントは使用できません。

JavaScript では、このコンポーネントは `ion-tabs` コンポーネントを[基本的な使い方](./tabs.md#basic-usage)または[ルーターと使う方法](./tabs.md#usage-with-router)に設定した場合に使用できます。
:::

タブの設定の詳細については、[tabs ドキュメント](tabs.md)を参照してください。

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

## スロット
<Slots />
