---
title: 'ion-input-password-toggle'
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

### hideIcon

|                 |                                                                                         |
| --------------- | --------------------------------------------------------------------------------------- |
| **Description** | パスワードの非表示を表すアイコン。設定されていない場合、"eyeOff "アイコンが使用される。 |
| **Attribute**   | `hide-icon`                                                                             |
| **Type**        | `string \| undefined`                                                                   |
| **Default**     | `undefined`                                                                             |

### mode

|                 |                                                                   |
| --------------- | ----------------------------------------------------------------- |
| **Description** | mode は、どのプラットフォームのスタイルを使用するかを決定します。 |
| **Attribute**   | `mode`                                                            |
| **Type**        | `"ios" \| "md"`                                                   |
| **Default**     | `undefined`                                                       |

### showIcon

|                 |                                                                                   |
| --------------- | --------------------------------------------------------------------------------- |
| **Description** | パスワードを示すアイコン。設定されていない場合は、"eye"のアイコンが使用されます。 |
| **Attribute**   | `show-icon`                                                                       |
| **Type**        | `string \| undefined`                                                             |
| **Default**     | `undefined`                                                                       |
