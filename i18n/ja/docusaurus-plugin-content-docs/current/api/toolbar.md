---
title: 'ion-toolbar'
demoUrl: '/docs/demos/api/toolbar/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/toolbar/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>Toolbar | Customize App Menu Toolbar Buttons and Icons</title>
  <meta
    name="description"
    content="Ion-toolbar component lets you customize toolbar buttons on your app menu. Add fixed toolbars above or below content or use full screen to scroll with content."
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

## CSS Shadow Parts

| Name         | Description                                                                                      |
| ------------ | ------------------------------------------------------------------------------------------------ |
| `background` | The background of the toolbar, covering the entire area behind the toolbar content.              |
| `container`  | The container that wraps all toolbar content, including the default slot and named slot content. |
| `content`    | The container for the default slot, wrapping content provided without a named slot.              |

## CSS Custom Properties

| Name               | Description                                                                                    |
| ------------------ | ---------------------------------------------------------------------------------------------- |
| `--background`     | ツールバーの背景                                                                               |
| `--background`     | ツールバーの背景                                                                               |
| `--border-color`   | ツールバーの枠の色                                                                             |
| `--border-color`   | ツールバーの枠の色                                                                             |
| `--border-style`   | ツールバーのボーダーのスタイル                                                                 |
| `--border-style`   | ツールバーのボーダーのスタイル                                                                 |
| `--border-width`   | ツールバーの枠の幅                                                                             |
| `--border-width`   | ツールバーの枠の幅                                                                             |
| `--color`          | ツールバーテキストの色                                                                         |
| `--color`          | ツールバーテキストの色                                                                         |
| `--min-height`     | ツールバーの最小高さ                                                                           |
| `--min-height`     | ツールバーの最小高さ                                                                           |
| `--opacity`        | ツールバーの背景の不透明度                                                                     |
| `--opacity`        | ツールバーの背景の不透明度                                                                     |
| `--padding-bottom` | ツールバーの Bottom Padding                                                                    |
| `--padding-bottom` | ツールバーの Bottom Padding                                                                    |
| `--padding-end`    | ツールバーの向きが左から右の場合は Right Padding、右から左の場合は Left Padding を使用します。 |
| `--padding-end`    | ツールバーの向きが左から右の場合は Right Padding、右から左の場合は Left Padding を使用します。 |
| `--padding-start`  | ツールバーの方向が左から右の場合は Left Padding、右から左の場合は Right Padding を使用します。 |
| `--padding-start`  | ツールバーの方向が左から右の場合は Left Padding、右から左の場合は Right Padding を使用します。 |
| `--padding-top`    | ツールバーの Top Padding                                                                       |
| `--padding-top`    | ツールバーの Top Padding                                                                       |

## Slots

| Name        | Description                                                                                     |
| ----------- | ----------------------------------------------------------------------------------------------- |
| ``          | slot がない状態で提供される場合、コンテンツは名前付き slot の間に配置されます。                 |
| `end`       | コンテンツは、LTR ではツールバーテキストの右側に、RTL では左側に配置されます。                  |
| `primary`   | コンテンツは、`ios` mode ではツールバーテキストの右側に、`md` mode では右端に配置されます。     |
| `secondary` | コンテンツは、`ios` mode ではツールバーテキストの左側に、`md` mode では右側に直接配置されます。 |
| `start`     | コンテンツは、LTR ではツールバーテキストの左側に、RTL では右側に配置されます。                  |
