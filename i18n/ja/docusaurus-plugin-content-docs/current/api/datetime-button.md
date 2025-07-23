---
title: 'ion-datetime-button'
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

### datetime

|                 |                                                                    |
| --------------- | ------------------------------------------------------------------ |
| **Description** | datetime ボタンに関連付けられた `ion-datetime` インスタンスの ID。 |
| **Attribute**   | `datetime`                                                         |
| **Type**        | `string \| undefined`                                              |
| **Default**     | `undefined`                                                        |

### disabled

|                 |                                                          |
| --------------- | -------------------------------------------------------- |
| **Description** | `true`の場合、ユーザはボタンと対話することができません。 |
| **Attribute**   | `disabled`                                               |
| **Type**        | `boolean`                                                |
| **Default**     | `false`                                                  |

### mode

|                 |                                                                   |
| --------------- | ----------------------------------------------------------------- |
| **Description** | mode は、どのプラットフォームのスタイルを使用するかを決定します。 |
| **Attribute**   | `mode`                                                            |
| **Type**        | `"ios" \| "md"`                                                   |
| **Default**     | `undefined`                                                       |

## CSS Shadow Parts

| Name     | Description                                                 |
| -------- | ----------------------------------------------------------- |
| `native` | slot されたテキストをラップするネイティブ HTML ボタンです。 |

## Slots

| Name          | Description                                  |
| ------------- | -------------------------------------------- |
| `date-target` | 日付ボタンの内側に表示されるコンテンツです。 |
| `time-target` | 時刻ボタンの内側に表示される内容。           |
