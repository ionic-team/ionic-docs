---
title: 'ion-item-divider'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>Item Divider | List Item Divider Block Element for Ionic Apps</title>
  <meta
    name="description"
    content="Item Dividers are block elements that can be used to separate items in a list. They are similar to list headers, but instead, go in between groups of items."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

## Properties

### color

|                 |                                                                                                                                                                                                                                                                                                           |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | アプリケーションのカラーパレットから使用する色を指定します。デフォルトのオプションは以下の通りです。 `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, と `"dark"` です．色に関する詳しい情報は [theming](/docs/theming/basics) を参照してください。 |
| **Attribute**   | `color`                                                                                                                                                                                                                                                                                                   |
| **Type**        | `"danger" \| "dark" \| "light" \| "medium" \| "primary" \| "secondary" \| "success" \| "tertiary" \| "warning" \| string & Record<never, never> \| undefined`                                                                                                                                             |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                                               |

### mode

|                 |                                                                   |
| --------------- | ----------------------------------------------------------------- |
| **Description** | mode は、どのプラットフォームのスタイルを使用するかを決定します。 |
| **Attribute**   | `mode`                                                            |
| **Type**        | `"ios" \| "md"`                                                   |
| **Default**     | `undefined`                                                       |

### sticky

|                 |                                                                                                                                                                                                                                        |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | `true`に設定すると、アイテムディバイダーがビューポートの上部に到達しても、次の `ion-item-divider` がそれを置き換えるまで表示されたままになります。 この機能は `position:sticky` に依存しています: https://caniuse.com/#feat=css-sticky |
| **Attribute**   | `sticky`                                                                                                                                                                                                                               |
| **Type**        | `boolean`                                                                                                                                                                                                                              |
| **Default**     | `false`                                                                                                                                                                                                                                |

## CSS Custom Properties

| Name                     | Description                                                                                            |
| ------------------------ | ------------------------------------------------------------------------------------------------------ |
| `--background`           | アイテムディバイダーの背景                                                                             |
| `--background`           | アイテムディバイダーの背景                                                                             |
| `--color`                | アイテムディバイダーの色                                                                               |
| `--color`                | アイテムディバイダーの色                                                                               |
| `--inner-padding-bottom` | アイテムディバイダーの Bottom Inner Padding                                                            |
| `--inner-padding-bottom` | アイテムディバイダーの Bottom Inner Padding                                                            |
| `--inner-padding-end`    | アイテムディバイダーの End Inner Padding                                                               |
| `--inner-padding-end`    | アイテムディバイダーの End Inner Padding                                                               |
| `--inner-padding-start`  | アイテムディバイダーの Start Inner Padding                                                             |
| `--inner-padding-start`  | アイテムディバイダーの Start Inner Padding                                                             |
| `--inner-padding-top`    | アイテムディバイダーの Top Inner Padding                                                               |
| `--inner-padding-top`    | アイテムディバイダーの Top Inner Padding                                                               |
| `--padding-bottom`       | アイテムディバイダーの Bottom Padding                                                                  |
| `--padding-bottom`       | アイテムディバイダーの Bottom Padding                                                                  |
| `--padding-end`          | アイテムディバイダーの方向が左から右の場合は Right Padding、右から左の場合は Left Padding              |
| `--padding-end`          | アイテムディバイダーの方向が左から右の場合は Right Padding、右から左の場合は Left Padding              |
| `--padding-start`        | アイテムディバイダーの方向が左から右の場合は Left Padding、右から左の場合は Right Padding となります。 |
| `--padding-start`        | アイテムディバイダーの方向が左から右の場合は Left Padding、右から左の場合は Right Padding となります。 |
| `--padding-top`          | アイテムディバイダーの Top Padding                                                                     |
| `--padding-top`          | アイテムディバイダーの Top Padding                                                                     |

## Slots

| Name    | Description                                                                     |
| ------- | ------------------------------------------------------------------------------- |
| ``      | slot がない状態で提供される場合、コンテンツは名前付き slot の間に配置されます。 |
| `end`   | コンテンツは、LTR では仕切り文字の右側に、RTL では左側に配置されます。          |
| `start` | コンテンツは、LTR では仕切り文字の左側に、RTL では右側に配置されます。          |
