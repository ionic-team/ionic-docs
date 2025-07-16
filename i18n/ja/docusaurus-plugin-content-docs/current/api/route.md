---
title: "ion-route"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>ion-route: API Route Component for Ionic Framework Apps</title>
  <meta name="description" content="The ion-route component takes a component and renders it when the Browser URL matches the URL property. Learn more about the API route component for Ionic Apps." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';




  
## Properties


### beforeEnter

| | |
| --- | --- |
| **Description** | ルーターがアクセスしようとしたときに発生するナビゲーションフックです。 `true`を返すとナビゲーションを進めることができ、`false`を返すとナビゲーションをキャンセルすることができます。NavigationHookOptions`オブジェクトを返すと、ルーターは指定されたパスにリダイレクトするようになります。 |
| **Attribute** | `before-enter` |
| **Type** | `(() => NavigationHookResult \| Promise<NavigationHookResult>) \| undefined` |
| **Default** | `undefined` |



### beforeLeave

| | |
| --- | --- |
| **Description** | ルートが離脱しようとしたときに発生するナビゲーションフックです。 `true`を返すとナビゲーションを進めることができ、`false`を返すとナビゲーションをキャンセルすることができます。NavigationHookOptions`オブジェクトを返すと、ルーターは指定されたパスにリダイレクトするようになります。 |
| **Attribute** | `before-leave` |
| **Type** | `(() => NavigationHookResult \| Promise<NavigationHookResult>) \| undefined` |
| **Default** | `undefined` |



### component

| | |
| --- | --- |
| **Description** | ルートが一致したときに、ナビゲーションアウトレット（`ion-tabs`、`ion-nav`）にロード/選択するコンポーネントの名前。  このプロパティの値は、常にロードするコンポーネントのタグ名とは限らず、`ion-tabs`では、実際には選択する `ion-tab` の名前を指します。 |
| **Attribute** | `component` |
| **Type** | `string` |
| **Default** | `undefined` |



### componentProps

| | |
| --- | --- |
| **Description** | キーとなる値 `{ 'red': true, 'blue':'white'}` には、レンダリング時に定義されたコンポーネントに渡すべき小道具が含まれる。 |
| **Attribute** | `component-props` |
| **Type** | `undefined \| { [key: string]: any; }` |
| **Default** | `undefined` |



### url

| | |
| --- | --- |
| **Description** | このルートを適用するために一致させる必要がある相対パスです。  expressjs と同様にパスを受け付けるので、/foo/:bar のような url でパラメータを定義し、受信する props で bar を利用することができます。 |
| **Attribute** | `url` |
| **Type** | `string` |
| **Default** | `''` |



## Events

| Name | Description |
| --- | --- |
| `ionRouteDataChanged` | このルートがいつ変更されたかを知るために `ion-router` が内部で使用します。 |

