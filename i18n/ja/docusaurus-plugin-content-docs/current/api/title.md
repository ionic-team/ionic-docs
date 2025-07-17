---
title: 'ion-title'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>ion-title: Ionic Framework App Title Component for Toolbars</title>
  <meta
    name="description"
    content="ion-title is a component that sets the title of the toolbar. Read to learn more about title and collapsible title components and usage for Ionic Framework Apps."
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

### size

|                 |                                            |
| --------------- | ------------------------------------------ |
| **Description** | ツールバーのタイトルの大きさを指定します。 |
| **Attribute**   | `size`                                     |
| **Type**        | `"large" \| "small" \| undefined`          |
| **Default**     | `undefined`                                |

## CSS Custom Properties

| Name      | Description      |
| --------- | ---------------- |
| `--color` | タイトルの文字色 |
| `--color` | タイトルの文字色 |
