---
title: "ion-app"
hide_table_of_contents: true
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TOCInline from '@theme/TOCInline';

import Props from '@ionic-internal/component-api/v6/app/props.md';
import Events from '@ionic-internal/component-api/v6/app/events.md';
import Methods from '@ionic-internal/component-api/v6/app/methods.md';
import Parts from '@ionic-internal/component-api/v6/app/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/app/custom-props.md';
import Slots from '@ionic-internal/component-api/v6/app/slots.md';

<head>
  <title>ion-app: Container Element for an Ionic Application</title>
  <meta name="description" content="ion-appは、Ionicアプリケーションのためのコンテナ要素です。アプリは、メニュー、ヘッダー、コンテンツ、フッターなど、多くのIonicコンポーネントを持つことができます。詳しくはこちらをご覧ください。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';



<h2 className="table-of-contents__title">コンテンツ</h2>

<TOCInline
  toc={toc}
  maxHeadingLevel={2}
/>



AppはIonicアプリケーションのコンテナ要素です。プロジェクトごとに `<ion-app>` 要素は1つだけにしてください。アプリケーションには、menus, headers, content, footersなど、多くのIonicコンポーネントを含めることができます。オーバーレイコンポーネントは、表示されるときに `<ion-app>` に追加されます。



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