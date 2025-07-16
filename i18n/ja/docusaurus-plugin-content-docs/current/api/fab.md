---
title: "ion-fab"
demoUrl: "/docs/demos/api/fab/index.html"
demoSourceUrl: "https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/fab/index.html"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>ion-fab: Floating Action Button for Android and iOS Ionic Apps</title>
  <meta name="description" content="Fabs, floating action buttons, are container elements that contain one or more fab buttons. Use ion-fab when creating Android and iOS apps with Ionic Framework." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


  
## Properties


### activated

| | |
| --- | --- |
| **Description** | もし `true` ならば、`ion-fab` 内の `ion-fab-button` とすべての `ion-fab-list` の両方がアクティブになる。つまり、`ion-fab-button`は`close`アイコンになり、`ion-fab-list`は可視化される。 |
| **Attribute** | `activated` |
| **Type** | `boolean` |
| **Default** | `false` |



### edge

| | |
| --- | --- |
| **Description** | `true`の場合、`vertical`が`"top"`の場合はヘッダーの端に、`"bottom"`の場合はフッターの端にファブを表示します。 `fixed` slotと一緒に使用する必要があります。 |
| **Attribute** | `edge` |
| **Type** | `boolean` |
| **Default** | `false` |



### horizontal

| | |
| --- | --- |
| **Description** | ビューポートでファブを水平に揃える場所。 |
| **Attribute** | `horizontal` |
| **Type** | `"center" \| "end" \| "start" \| undefined` |
| **Default** | `undefined` |



### vertical

| | |
| --- | --- |
| **Description** | ビューポートでファブを縦に並べる場所。 |
| **Attribute** | `vertical` |
| **Type** | `"bottom" \| "center" \| "top" \| undefined` |
| **Default** | `undefined` |



## Methods


### close

| | |
| --- | --- |
| **Description** | アクティブなFABリストコンテナを閉じる。 |
| **Signature** | `close() => Promise<void>` |


