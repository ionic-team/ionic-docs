---
title: "ion-tab"
hide_table_of_contents: true
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v6/tab/props.md';
import Events from '@ionic-internal/component-api/v6/tab/events.md';
import Methods from '@ionic-internal/component-api/v6/tab/methods.md';
import Parts from '@ionic-internal/component-api/v6/tab/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/tab/custom-props.md';
import Slots from '@ionic-internal/component-api/v6/tab/slots.md';

<head>
  <title>ion-tab - Ionic Framework Application Component</title>
  <meta name="description" content="ion-tabは、タブの子コンポーネントです。各ion-tabは、アプリケーションまたは単一のビューのトップレベルのナビゲーションスタックを含むことができます。詳しくは、こちらをご覧ください。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';
import TOCInline from '@theme/TOCInline';

<EncapsulationPill type="shadow" />

<h2 className="table-of-contents__title">コンテンツ</h2>

<TOCInline
  toc={toc}
  maxHeadingLevel={2}
/>



タブコンポーネントは、[tabs](tabs.md) の子コンポーネントです。各タブには、アプリまたは単一のビューのトップレベルのナビゲーション スタックを含めることができます。アプリには多くのタブがあり、それぞれが独立したナビゲーションを持つことができます。

:::note
 Note: このコンポーネントは、バニラまたはステンシルJavaScriptプロジェクトでのみ使用する必要があります。Angular、React、Vue のアプリでは、タブコンポーネントを宣言するために `ion-tab` を使用する必要はありません。
:::


詳しい設定方法は [tabs documentation](tabs.md) をご覧ください。



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