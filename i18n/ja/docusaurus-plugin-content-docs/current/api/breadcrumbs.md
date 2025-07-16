---
title: "ion-breadcrumbs"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


  
## Properties


### color

| | |
| --- | --- |
| **Description** | アプリケーションのカラーパレットから使用する色を指定します。デフォルトのオプションは以下の通りです。 `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, と `"dark"` です．色に関する詳しい情報は [theming](/docs/theming/basics) を参照してください。 |
| **Attribute** | `color` |
| **Type** | `"danger" \| "dark" \| "light" \| "medium" \| "primary" \| "secondary" \| "success" \| "tertiary" \| "warning" \| string & Record<never, never> \| undefined` |
| **Default** | `undefined` |



### itemsAfterCollapse

| | |
| --- | --- |
| **Description** | 折りたたまれたインジケータの後に表示するパンくずの数。itemsBeforeCollapse` + `itemsAfterCollapse` が `maxItems` よりも大きい場合、パンくずは折りたたまれない。 |
| **Attribute** | `items-after-collapse` |
| **Type** | `number` |
| **Default** | `1` |



### itemsBeforeCollapse

| | |
| --- | --- |
| **Description** | 折りたたんだインジケータの前に表示するパンくずの数を指定します。itemsBeforeCollapse` + `itemsAfterCollapse` が `maxItems` よりも大きい場合、パンくずは折りたたまれない。 |
| **Attribute** | `items-before-collapse` |
| **Type** | `number` |
| **Default** | `1` |



### maxItems

| | |
| --- | --- |
| **Description** | 折りたたむ前に表示するパンくずの最大数を指定します。 |
| **Attribute** | `max-items` |
| **Type** | `number \| undefined` |
| **Default** | `undefined` |



### mode

| | |
| --- | --- |
| **Description** | modeは、どのプラットフォームのスタイルを使用するかを決定します。 |
| **Attribute** | `mode` |
| **Type** | `"ios" \| "md"` |
| **Default** | `undefined` |



## Events

| Name | Description |
| --- | --- |
| `ionCollapsedClick` | 折りたたみインジケータがクリックされたときに発行されます。 |

