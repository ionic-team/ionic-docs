---
title: "ion-accordion-group"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


  
## Properties


### animated

| | |
| --- | --- |
| **Description** | `true`の場合、アコーディオングループ内のすべてのアコーディオンが拡大・縮小時にアニメーションを行います。 |
| **Attribute** | `animated` |
| **Type** | `boolean` |
| **Default** | `true` |



### disabled

| | |
| --- | --- |
| **Description** | `true`の場合、アコーディオングループと対話することができません。 |
| **Attribute** | `disabled` |
| **Type** | `boolean` |
| **Default** | `false` |



### expand

| | |
| --- | --- |
| **Description** | 各アコーディオンの拡張動作を記述します。指定可能な値は `"compact"` と `"inset"` です。デフォルトは `"compact"` です。 |
| **Attribute** | `expand` |
| **Type** | `"compact" \| "inset"` |
| **Default** | `'compact'` |



### mode

| | |
| --- | --- |
| **Description** | modeは、どのプラットフォームのスタイルを使用するかを決定します。 |
| **Attribute** | `mode` |
| **Type** | `"ios" \| "md"` |
| **Default** | `undefined` |



### multiple

| | |
| --- | --- |
| **Description** | `true`の場合、アコーディオングループは複数のアコーディオンコンポーネントを同時に展開することができます。 |
| **Attribute** | `multiple` |
| **Type** | `boolean \| undefined` |
| **Default** | `undefined` |



### readonly

| | |
| --- | --- |
| **Description** | `true`の場合、アコーディオングループはインタラクティブに操作できないが、不透明度は変更されない。 |
| **Attribute** | `readonly` |
| **Type** | `boolean` |
| **Default** | `false` |



### value

| | |
| --- | --- |
| **Description** | アコーディオングループの値です。これは、どのアコーディオンを展開するかを制御します。これは、`multiple="true"`のときだけ、文字列の配列でなければなりません。 |
| **Attribute** | `value` |
| **Type** | `null \| string \| string[] \| undefined` |
| **Default** | `undefined` |



## Events

| Name | Description |
| --- | --- |
| `ionChange` | valueプロパティがクリックなどのユーザーアクションによって変更されたときに発行される。  プログラムで `value` プロパティを設定した場合には、このイベントは発生しない。 |

