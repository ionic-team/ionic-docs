---
title: "ion-router"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>ion-router: Router Component to Coordinate URL Navigation</title>
  <meta name="description" content="ion-router is a URL coordinator for navigation outlets of ionic: ion-nav and ion-tabs. Router components handle routing inside vanilla and Stencil JavaScript." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';




  
## Properties


### root

| | |
| --- | --- |
| **Description** | URLのマッチング時に使用するルートパスです。デフォルトでは"/"に設定されていますが、すべてのURLパスに対して代替プレフィックスを指定することができます。 |
| **Attribute** | `root` |
| **Type** | `string` |
| **Default** | `'/'` |



### useHash

| | |
| --- | --- |
| **Description** | ルーターは2つの "モード "で動作します。- ハッシュを使用します。ハッシュあり： `/index.html#/path/to/page` - ハッシュなし。ハッシュなし： `/path/to/page` - ハッシュあり： `/index.html#/path/to/page` どちらを使うかは、アプリの要件や配置される場所によって異なるかもしれません。  通常、"ハッシュなし"ナビゲーションはSEOに有利で、よりユーザーフレンドリーですが、適切に動作させるためにサーバー側の追加設定が必要な場合があります。  一方、ハッシュ・ナビゲーションは、ファイル・プロトコルで動作するため、導入が非常に簡単です。  デフォルトでは、このプロパティは `true` です。ハッシュのない URL を許可するには `false` に変更します。 |
| **Attribute** | `use-hash` |
| **Type** | `boolean` |
| **Default** | `true` |



## Events

| Name | Description |
| --- | --- |
| `ionRouteDidChange` | ルートが変更されたときに発行されます。 |
| `ionRouteWillChange` | ルートが変更されようとするときに発行されます。イベント |


## Methods


### back

| | |
| --- | --- |
| **Description** | window.historyで前ページに戻る。 |
| **Signature** | `back() => Promise<void>` |


### push

| | |
| --- | --- |
| **Description** | 指定されたパスに移動します。 |
| **Signature** | `push(path: string, direction?: RouterDirection, animation?: AnimationBuilder) => Promise<boolean>` |


