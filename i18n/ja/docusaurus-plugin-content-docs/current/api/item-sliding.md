---
title: "ion-item-sliding"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>Slide Buttons | Slide Right to Left with ion-item-sliding</title>
  <meta name="description" content="ion-item-sliding component contains items that are dragged to reveal buttons. Options are revealed when the sliding item is swiped from left to right." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';




  
## Properties


### disabled

| | |
| --- | --- |
| **Description** | `true`の場合、ユーザーはスライドアイテムを操作することができません。 |
| **Attribute** | `disabled` |
| **Type** | `boolean` |
| **Default** | `false` |



## Events

| Name | Description |
| --- | --- |
| `ionDrag` | スライド位置が変化したときに発行されます。 |


## Methods


### close

| | |
| --- | --- |
| **Description** | スライドしているアイテムを閉じる。アイテムは[リスト](./list)からも閉じることができます。 |
| **Signature** | `close() => Promise<void>` |


### closeOpened

| | |
| --- | --- |
| **Description** | リスト内のスライドアイテムをすべて閉じます。アイテムは、[リスト](./list)からも閉じることができます。 |
| **Signature** | `closeOpened() => Promise<boolean>` |


### getOpenAmount

| | |
| --- | --- |
| **Description** | アイテムが開いている量をピクセル単位で取得します。 |
| **Signature** | `getOpenAmount() => Promise<number>` |


### getSlidingRatio

| | |
| --- | --- |
| **Description** | オプションの幅と比較した、アイテムのオープン量の比率を取得します。返された数値が正の場合、右側のオプションが開いていることになります。返された数値が負の場合、左側のオプションが開いています。数値の絶対値が1より大きい場合、その項目は選択肢の幅より多く開いていることになります。 |
| **Signature** | `getSlidingRatio() => Promise<number>` |


### open

| | |
| --- | --- |
| **Description** | スライド式の項目を開く。 |
| **Signature** | `open(side: Side \| undefined) => Promise<void>` |


