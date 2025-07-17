---
title: 'ion-picker-column-option'
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
| **Default**     | `'primary'`                                                                                                                                                                                                                                                                                               |

### disabled

|                 |                                                             |
| --------------- | ----------------------------------------------------------- |
| **Description** | true`の場合、ユーザーはピッカー列オプションを操作できない。 |
| **Attribute**   | `disabled`                                                  |
| **Type**        | `boolean`                                                   |
| **Default**     | `false`                                                     |

### value

|                 |                              |
| --------------- | ---------------------------- |
| **Description** | オプションのテキスト値です。 |
| **Attribute**   | `value`                      |
| **Type**        | `any`                        |
| **Default**     | `undefined`                  |
