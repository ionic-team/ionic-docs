---
title: "ion-accordion"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>Ion-Accordion Components: How to Build & Examples | Ionic</title>
  <meta name="description" content="Ion-accordion components provide collapsible sections in content to reduce vertical space and organize information. Learn how to build one and see examples." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


  
## Properties


### disabled

| | |
| --- | --- |
| **Description** | `true`の場合、アコーディオンは対話することができません。 |
| **Attribute** | `disabled` |
| **Type** | `boolean` |
| **Default** | `false` |



### mode

| | |
| --- | --- |
| **Description** | modeは、どのプラットフォームのスタイルを使用するかを決定します。 |
| **Attribute** | `mode` |
| **Type** | `"ios" \| "md"` |
| **Default** | `undefined` |



### readonly

| | |
| --- | --- |
| **Description** | `true`の場合、アコーディオンはインタラクティブに操作することはできませんが、不透明度は変化しません。 |
| **Attribute** | `readonly` |
| **Type** | `boolean` |
| **Default** | `false` |



### toggleIcon

| | |
| --- | --- |
| **Description** | 使用するトグルアイコンです。このアイコンは、アコーディオンの展開・折りたたみ時に回転されます。 |
| **Attribute** | `toggle-icon` |
| **Type** | `string` |
| **Default** | `chevronDown` |



### toggleIconSlot

| | |
| --- | --- |
| **Description** | トグルアイコンを配置する `ion-item` の内側のスロット。デフォルトは `"end"` です。 |
| **Attribute** | `toggle-icon-slot` |
| **Type** | `"end" \| "start"` |
| **Default** | `'end'` |



### value

| | |
| --- | --- |
| **Description** | アコーディオンの値です。デフォルトは自動生成された値です。 |
| **Attribute** | `value` |
| **Type** | `string` |
| **Default** | ``ion-accordion-${accordionIds++}`` |



## CSS Shadow Parts

| Name | Description |
| --- | --- |
| `content` | content slotのラッパー要素。 |
| `expanded` | 拡張された要素です。ヘッダ`とコンテンツ`の部分と組み合わせて使用することができます（例：`::part(header expanded)`）。 |
| `header` | header slotのラッパーの要素です。 |


## Slots

| Name | Description |
| --- | --- |
| `content` | コンテンツはヘッダーの下に配置され、展開状態に応じて表示または非表示になります。 |
| `header` | コンテンツは上部に配置され、アコーディオンアイテムの拡大・縮小に使用されます。 |

