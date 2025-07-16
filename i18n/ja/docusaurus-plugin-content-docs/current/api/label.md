---
title: "ion-label"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>Item Label Color and Properties for Applications | ion-label</title>
  <meta name="description" content="Label is a wrapper element that can be used in combination with other Ionic components. Easily design item label colors and other properties with ion-label." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />


  
## Properties


### color

| | |
| --- | --- |
| **Description** | アプリケーションのカラーパレットから使用する色を指定します。デフォルトのオプションは以下の通りです。 `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, と `"dark"` です．色に関する詳しい情報は [theming](/docs/theming/basics) を参照してください。 |
| **Attribute** | `color` |
| **Type** | `"danger" \| "dark" \| "light" \| "medium" \| "primary" \| "secondary" \| "success" \| "tertiary" \| "warning" \| string & Record<never, never> \| undefined` |
| **Default** | `undefined` |



### mode

| | |
| --- | --- |
| **Description** | modeは、どのプラットフォームのスタイルを使用するかを決定します。 |
| **Attribute** | `mode` |
| **Type** | `"ios" \| "md"` |
| **Default** | `undefined` |



### position

| | |
| --- | --- |
| **Description** | 位置は、ラベルがアイテム内のどこで、どのように動作するかを決定します。 |
| **Attribute** | `position` |
| **Type** | `"fixed" \| "floating" \| "stacked" \| undefined` |
| **Default** | `undefined` |



## CSS Custom Properties

| Name | Description |
| --- | --- |
| `--color` | ラベルの色。このプロパティは `ion-label` を `ion-item` の内部で使用する場合にのみ利用可能です。 |
| `--color` | ラベルの色。このプロパティは `ion-label` を `ion-item` の内部で使用する場合にのみ利用可能です。 |

