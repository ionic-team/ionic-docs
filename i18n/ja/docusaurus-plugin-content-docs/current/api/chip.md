---
title: 'ion-chip'
demoUrl: '/docs/demos/api/chip/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/chip/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>ion-chip: Name, Text, Icon and Avatar for Ionic Framework Apps</title>
  <meta
    name="description"
    content="ion-chips represent complex entities in small blocks, such as a contact. A chip can contain several different elements such as names, avatars, text, and icons."
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

### disabled

|                 |                                                          |
| --------------- | -------------------------------------------------------- |
| **Description** | `true`の場合、ユーザはチップと対話することができません。 |
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

### outline

|                 |                                          |
| --------------- | ---------------------------------------- |
| **Description** | アウトラインスタイルボタンを表示します。 |
| **Attribute**   | `outline`                                |
| **Type**        | `boolean`                                |
| **Default**     | `false`                                  |

## CSS Custom Properties

| Name           | Description  |
| -------------- | ------------ |
| `--background` | チップの背景 |
| `--background` | チップの背景 |
| `--color`      | チップの色   |
| `--color`      | チップの色   |
