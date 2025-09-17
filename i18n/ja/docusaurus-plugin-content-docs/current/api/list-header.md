---
title: 'ion-list-header'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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

### lines

|                 |                                                        |
| --------------- | ------------------------------------------------------ |
| **Description** | リストヘッダーの下辺のボーダーをどのように表示するか。 |
| **Attribute**   | `lines`                                                |
| **Type**        | `"full" \| "inset" \| "none" \| undefined`             |
| **Default**     | `undefined`                                            |

### mode

|                 |                                                                   |
| --------------- | ----------------------------------------------------------------- |
| **Description** | mode は、どのプラットフォームのスタイルを使用するかを決定します。 |
| **Attribute**   | `mode`                                                            |
| **Type**        | `"ios" \| "md"`                                                   |
| **Default**     | `undefined`                                                       |

## CSS Custom Properties

| Name                   | Description                      |
| ---------------------- | -------------------------------- |
| `--background`         | リストヘッダーの背景             |
| `--background`         | リストヘッダーの背景             |
| `--border-color`       | リストヘッダーボーダーの色       |
| `--border-color`       | リストヘッダーボーダーの色       |
| `--border-style`       | リストヘッダーボーダーのスタイル |
| `--border-style`       | リストヘッダーボーダーのスタイル |
| `--border-width`       | リストヘッダー枠の幅             |
| `--border-width`       | リストヘッダー枠の幅             |
| `--color`              | リストヘッダーテキストの色       |
| `--color`              | リストヘッダーテキストの色       |
| `--inner-border-width` | リストヘッダー内枠の幅           |
| `--inner-border-width` | リストヘッダー内枠の幅           |
