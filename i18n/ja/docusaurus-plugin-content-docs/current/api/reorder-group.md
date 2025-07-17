---
title: 'ion-reorder-group'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>ion-reorder-group: Wrapper Component for Ionic Framework Apps</title>
  <meta
    name="description"
    content="ion-reorder-group is a wrapper component for items using the ion-reorder component on Ionic apps. Read to learn more about ion-reorder-group usage."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

## Properties

### disabled

|                 |                                          |
| --------------- | ---------------------------------------- |
| **Description** | `true`の場合、リオーダーは非表示になる。 |
| **Attribute**   | `disabled`                               |
| **Type**        | `boolean`                                |
| **Default**     | `true`                                   |

## Events

| Name             | Description                                                                                                                                                                |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ionItemReorder` | 再注文アクションを完了させるためにリッスンする必要があるイベント。イベントが発生したら、再注文のアクションを確定するために `complete()` メソッドを呼び出す必要があります。 |

## Methods

### complete

|                 |                                                                                                                                                                                                                                                                                                                                                        |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | 再注文操作を完了します。ionItemReorder`イベントで呼び出す必要がある。  アイテムのリストが渡された場合、リストは適切な順序に並び替えられ、返される。  パラメータが渡されない場合、または`true`が渡された場合、並べ替えは完了し、アイテムはドラッグされた位置に留まります。`false`が渡された場合、並び替えは完了し、アイテムは元の位置に跳ね返されます。 |
| **Signature**   | `complete(listOrReorder?: boolean \| any[]) => Promise<any>`                                                                                                                                                                                                                                                                                           |
