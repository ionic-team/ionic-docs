---
title: 'ion-back-button'
demoUrl: '/docs/demos/api/back-button/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/back-button/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>Back Button | ion-back-button: Custom Menu Icon for Applications</title>
  <meta
    name="description"
    content="The ion-back-button is a custom menu icon for Android, iOS, and Progressive Web Apps. Use Ionic Framework components to easily build applications."
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

### defaultHref

|                 |                                                |
| --------------- | ---------------------------------------------- |
| **Description** | 履歴がない場合に、デフォルトで戻るための URL。 |
| **Attribute**   | `default-href`                                 |
| **Type**        | `string \| undefined`                          |
| **Default**     | `undefined`                                    |

### disabled

|                 |                                                          |
| --------------- | -------------------------------------------------------- |
| **Description** | `true`の場合、ユーザはボタンと対話することができません。 |
| **Attribute**   | `disabled`                                               |
| **Type**        | `boolean`                                                |
| **Default**     | `false`                                                  |

### icon

|                 |                                                                                                 |
| --------------- | ----------------------------------------------------------------------------------------------- |
| **Description** | 戻るボタンに使用する内蔵の名前付き SVG アイコン名または SVG ファイルの正確な`src`を指定します。 |
| **Attribute**   | `icon`                                                                                          |
| **Type**        | `null \| string \| undefined`                                                                   |
| **Default**     | `undefined`                                                                                     |

### mode

|                 |                                                                   |
| --------------- | ----------------------------------------------------------------- |
| **Description** | mode は、どのプラットフォームのスタイルを使用するかを決定します。 |
| **Attribute**   | `mode`                                                            |
| **Type**        | `"ios" \| "md"`                                                   |
| **Default**     | `undefined`                                                       |

### routerAnimation

|                 |                                                                                  |
| --------------- | -------------------------------------------------------------------------------- |
| **Description** | ルーターを使用する場合、別のページに移動する際の遷移アニメーションを指定します。 |
| **Attribute**   | `router-animation`                                                               |
| **Type**        | `((baseEl: any, opts?: any) => Animation) \| undefined`                          |
| **Default**     | `undefined`                                                                      |

### text

|                 |                                      |
| --------------- | ------------------------------------ |
| **Description** | バックボタンに表示するテキストです。 |
| **Attribute**   | `text`                               |
| **Type**        | `null \| string \| undefined`        |
| **Default**     | `undefined`                          |

### type

|                 |                                   |
| --------------- | --------------------------------- |
| **Description** | ボタンの種類です。                |
| **Attribute**   | `type`                            |
| **Type**        | `"button" \| "reset" \| "submit"` |
| **Default**     | `'button'`                        |

## CSS Shadow Parts

| Name     | Description                                      |
| -------- | ------------------------------------------------ |
| `icon`   | 戻るボタンのアイコン（ion-icon を使用）。        |
| `native` | すべての子要素を包むネイティブ HTML ボタン要素。 |
| `text`   | 戻るボタンのテキストです。                       |

## CSS Custom Properties

| Name                           | Description                                                                                        |
| ------------------------------ | -------------------------------------------------------------------------------------------------- |
| `--background`                 | ボタンの背景                                                                                       |
| `--background`                 | ボタンの背景                                                                                       |
| `--background-focused`         | タブキーでフォーカスしたときのボタンの背景                                                         |
| `--background-focused`         | タブキーでフォーカスしたときのボタンの背景                                                         |
| `--background-focused-opacity` | タブキーでフォーカスしたときのボタンの背景の不透明度                                               |
| `--background-focused-opacity` | タブキーでフォーカスしたときのボタンの背景の不透明度                                               |
| `--background-hover`           | ホバー時のボタンの背景                                                                             |
| `--background-hover`           | ホバー時のボタンの背景                                                                             |
| `--background-hover-opacity`   | ホバー時の背景の不透明度                                                                           |
| `--background-hover-opacity`   | ホバー時の背景の不透明度                                                                           |
| `--border-radius`              | ボタンの境界半径                                                                                   |
| `--border-radius`              | ボタンの境界半径                                                                                   |
| `--color`                      | ボタンの文字色                                                                                     |
| `--color`                      | ボタンの文字色                                                                                     |
| `--color-focused`              | タブキーでフォーカスしたときのボタンの文字色                                                       |
| `--color-focused`              | タブキーでフォーカスしたときのボタンの文字色                                                       |
| `--color-hover`                | ホバー時のボタンの文字色                                                                           |
| `--color-hover`                | ホバー時のボタンの文字色                                                                           |
| `--icon-font-size`             | ボタンアイコンの Font Size                                                                         |
| `--icon-font-size`             | ボタンアイコンの Font Size                                                                         |
| `--icon-font-weight`           | ボタンアイコンの Font Weight                                                                       |
| `--icon-font-weight`           | ボタンアイコンの Font Weight                                                                       |
| `--icon-margin-bottom`         | ボタンアイコンの Bottom Margin                                                                     |
| `--icon-margin-bottom`         | ボタンアイコンの Bottom Margin                                                                     |
| `--icon-margin-end`            | ボタンアイコンの方向が左から右の場合は Right Margin、右から左の場合は Left Margin                  |
| `--icon-margin-end`            | ボタンアイコンの方向が左から右の場合は Right Margin、右から左の場合は Left Margin                  |
| `--icon-margin-start`          | ボタンアイコンの方向が左から右の場合は Left Margin、右から左の場合は Right Margin                  |
| `--icon-margin-start`          | ボタンアイコンの方向が左から右の場合は Left Margin、右から左の場合は Right Margin                  |
| `--icon-margin-top`            | ボタンアイコンの Top Margin                                                                        |
| `--icon-margin-top`            | ボタンアイコンの Top Margin                                                                        |
| `--icon-padding-bottom`        | ボタンアイコンの Bottom Padding                                                                    |
| `--icon-padding-bottom`        | ボタンアイコンの Bottom Padding                                                                    |
| `--icon-padding-end`           | ボタンアイコンの向きが左から右の場合は Right Padding、右から左の場合は Left Padding を使用します。 |
| `--icon-padding-end`           | ボタンアイコンの向きが左から右の場合は Right Padding、右から左の場合は Left Padding を使用します。 |
| `--icon-padding-start`         | ボタンアイコンの方向が左から右の場合は Left Padding、右から左の場合は Right Padding を使用します。 |
| `--icon-padding-start`         | ボタンアイコンの方向が左から右の場合は Left Padding、右から左の場合は Right Padding を使用します。 |
| `--icon-padding-top`           | ボタンアイコンの Top Padding                                                                       |
| `--icon-padding-top`           | ボタンアイコンの Top Padding                                                                       |
| `--margin-bottom`              | ボタンの Bottom Margin                                                                             |
| `--margin-bottom`              | ボタンの Bottom Margin                                                                             |
| `--margin-end`                 | ボタンの向きが左から右の場合は Right Margin、右から左の場合は Left Margin                          |
| `--margin-end`                 | ボタンの向きが左から右の場合は Right Margin、右から左の場合は Left Margin                          |
| `--margin-start`               | ボタンの向きが左から右の場合は Left Margin、右から左の場合は Right Margin                          |
| `--margin-start`               | ボタンの向きが左から右の場合は Left Margin、右から左の場合は Right Margin                          |
| `--margin-top`                 | ボタンの Top Margin                                                                                |
| `--margin-top`                 | ボタンの Top Margin                                                                                |
| `--min-height`                 | ボタンの最小高さ                                                                                   |
| `--min-height`                 | ボタンの最小高さ                                                                                   |
| `--min-width`                  | ボタンの最小幅                                                                                     |
| `--min-width`                  | ボタンの最小幅                                                                                     |
| `--opacity`                    | ボタンの不透明度                                                                                   |
| `--opacity`                    | ボタンの不透明度                                                                                   |
| `--padding-bottom`             | ボタンの Bottom Padding                                                                            |
| `--padding-bottom`             | ボタンの Bottom Padding                                                                            |
| `--padding-end`                | ボタンの向きが左から右の場合は Right Padding、右から左の場合は Left Padding となります。           |
| `--padding-end`                | ボタンの向きが左から右の場合は Right Padding、右から左の場合は Left Padding となります。           |
| `--padding-start`              | ボタンの向きが左から右の場合は Left Padding、右から左の場合は Right Padding となります。           |
| `--padding-start`              | ボタンの向きが左から右の場合は Left Padding、右から左の場合は Right Padding となります。           |
| `--padding-top`                | ボタンの Top Padding                                                                               |
| `--padding-top`                | ボタンの Top Padding                                                                               |
| `--ripple-color`               | ボタンリプルエフェクトの色                                                                         |
| `--ripple-color`               | ボタンリプルエフェクトの色                                                                         |
| `--transition`                 | ボタンの遷移                                                                                       |
| `--transition`                 | ボタンの遷移                                                                                       |
