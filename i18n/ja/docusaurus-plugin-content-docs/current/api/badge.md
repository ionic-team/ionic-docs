---
title: 'ion-badge'
demoUrl: '/docs/demos/api/badge/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/badge/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>Badges | ion-badge: iOS & Android App Notification Badge Icons</title>
  <meta
    name="description"
    content="Badges are inline block elements that appear near other elements on iOS & Android apps—use ion-badges as notifications that indicate how many items there are."
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

## CSS Custom Properties

| Name               | Description                                                                              |
| ------------------ | ---------------------------------------------------------------------------------------- |
| `--background`     | バッジの背景                                                                             |
| `--background`     | バッジの背景                                                                             |
| `--color`          | バッジの文字色                                                                           |
| `--color`          | バッジの文字色                                                                           |
| `--padding-bottom` | バッジの Bottom Padding                                                                  |
| `--padding-bottom` | バッジの Bottom Padding                                                                  |
| `--padding-end`    | バッジの向きが左から右の場合は Right Padding、右から左の場合は Left Padding となります。 |
| `--padding-end`    | バッジの向きが左から右の場合は Right Padding、右から左の場合は Left Padding となります。 |
| `--padding-start`  | バッジの向きが左から右の場合は Left Padding、右から左の場合は Right Padding となります。 |
| `--padding-start`  | バッジの向きが左から右の場合は Left Padding、右から左の場合は Right Padding となります。 |
| `--padding-top`    | バッジの Top Padding                                                                     |
| `--padding-top`    | バッジの Top Padding                                                                     |
