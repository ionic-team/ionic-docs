---
title: "ion-route-redirect"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>ion-route-redirect Plugin: Redirect 'from' a URL 'to' Another URL</title>
  <meta name="description" content="ion-route-redirect is used with as a direct child of an ion-router and redirects 'from' a URL 'to' another URL. Read to learn about the route redirect plugin." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';




  
## Properties


### from

| | |
| --- | --- |
| **Description** | リダイレクトルートは、あるURLから別のURLへリダイレクトさせるルートです。このプロパティは、その "from" URLです。このプロパティを適用するには、ナビゲートされるURLと完全に一致する必要があります。  この値で指定されるパスは、最初の `/` スラッシュが指定されていない場合でも、常に絶対パスとなります。 |
| **Attribute** | `from` |
| **Type** | `string` |
| **Default** | `undefined` |



### to

| | |
| --- | --- |
| **Description** | リダイレクトルートは、あるURLから別のURLへリダイレクトさせるルートです。このプロパティは、その "to "URLです。定義された `ion-route-redirect` ルールにマッチした場合、ルータはこのプロパティで指定されたパスにリダイレクトします。  このプロパティの値は、常に `ion-router` で定義されたルートの範囲内の絶対パスであり、別のルータや別のドメインへのリダイレクトを実行するために使用することはできません。  これは仮想的なリダイレクトであり、実際のブラウザのリフレッシュを引き起こすことはないことに注意してください。  このプロパティが指定されていない場合、または値が `undefined` の場合、たとえ "from" の値が一致しても、リダイレクトルート全体は noop となります。 |
| **Attribute** | `to` |
| **Type** | `null \| string \| undefined` |
| **Default** | `undefined` |



## Events

| Name | Description |
| --- | --- |
| `ionRouteRedirectChanged` | このルールの値がDOMから追加/削除されたり、パブリックプロパティが変更されたりしたときに発生する内部イベントです。  ion-router`は、ルータルールの内部レジストリを更新するために、このイベントを捕捉します。 |

