---
title: "ion-split-pane"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>ion-split-pane: Split Plane View for Menus and Multi-View Layouts</title>
  <meta name="description" content="ion-split-pane is useful when creating multi-view app layouts. It allows UI elements, like menus, to be displayed as the viewport width increases." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


  
## Properties


### contentId

| | |
| --- | --- |
| **Description** | メインコンテンツの `id` です。ルータを使用する場合は、通常 `ion-router-outlet` となります。ルータを使用しない場合は、通常、メインビューの `ion-content` となります。これは `ion-menu` 内の `ion-content` の ID ではありません。 |
| **Attribute** | `content-id` |
| **Type** | `string \| undefined` |
| **Default** | `undefined` |



### disabled

| | |
| --- | --- |
| **Description** | `true`の場合、分割ペインが非表示になります。 |
| **Attribute** | `disabled` |
| **Type** | `boolean` |
| **Default** | `false` |



### when

| | |
| --- | --- |
| **Description** | 分割パネルを表示するタイミング。CSSメディアクエリ式、またはショートカット式を指定します。また、ブーリアン表現も可能です。 |
| **Attribute** | `when` |
| **Type** | `boolean \| string` |
| **Default** | `QUERY['lg']` |



## Events

| Name | Description |
| --- | --- |
| `ionSplitPaneVisible` | 分割画面の表示が変わったときに呼び出される式 |


## CSS Custom Properties

| Name | Description |
| --- | --- |
| `--border` | ペイン間のボーダー |
| `--border` | ペイン間のボーダー |
| `--side-max-width` | サイドペインの最大幅を指定します。分割ペインが折りたたまれた状態では適用されません。 |
| `--side-max-width` | サイドペインの最大幅を指定します。分割ペインが折りたたまれた状態では適用されません。 |
| `--side-min-width` | サイドペインの最小幅を指定します。分割ペインが折りたたまれた状態では適用されません。 |
| `--side-min-width` | サイドペインの最小幅を指定します。分割ペインが折りたたまれた状態では適用されません。 |
| `--side-width` | サイドペインの幅を指定します。分割ペインが折りたたまれた状態では適用されません。 |
| `--side-width` | サイドペインの幅を指定します。分割ペインが折りたたまれた状態では適用されません。 |

