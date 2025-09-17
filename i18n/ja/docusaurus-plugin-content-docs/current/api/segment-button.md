---
title: 'ion-segment-button'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>ion-segment-button | Segment Button Icon and Segment Value</title>
  <meta
    name="description"
    content="ion-segment-buttons are groups of related buttons inside of a Segment. Learn to use segment button icons and check their values on Ionic Framework Apps."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

## Properties

### contentId

|                 |                                |
| --------------- | ------------------------------ |
| **Description** | セグメントコンテンツの `id` 。 |
| **Attribute**   | `content-id`                   |
| **Type**        | `string \| undefined`          |
| **Default**     | `undefined`                    |

### disabled

|                 |                                                                      |
| --------------- | -------------------------------------------------------------------- |
| **Description** | `true`の場合、ユーザーはセグメントボタンを操作することができません。 |
| **Attribute**   | `disabled`                                                           |
| **Type**        | `boolean`                                                            |
| **Default**     | `false`                                                              |

### layout

|                 |                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------- |
| **Description** | セグメント内のテキストとアイコンのレイアウトを設定します。                                              |
| **Attribute**   | `layout`                                                                                                |
| **Type**        | `"icon-bottom" \| "icon-end" \| "icon-hide" \| "icon-start" \| "icon-top" \| "label-hide" \| undefined` |
| **Default**     | `'icon-top'`                                                                                            |

### mode

|                 |                                                                   |
| --------------- | ----------------------------------------------------------------- |
| **Description** | mode は、どのプラットフォームのスタイルを使用するかを決定します。 |
| **Attribute**   | `mode`                                                            |
| **Type**        | `"ios" \| "md"`                                                   |
| **Default**     | `undefined`                                                       |

### type

|                 |                                   |
| --------------- | --------------------------------- |
| **Description** | ボタンの種類です。                |
| **Attribute**   | `type`                            |
| **Type**        | `"button" \| "reset" \| "submit"` |
| **Default**     | `'button'`                        |

### value

|                 |                            |
| --------------- | -------------------------- |
| **Description** | セグメントボタンの値です。 |
| **Attribute**   | `value`                    |
| **Type**        | `number \| string`         |
| **Default**     | `'ion-sb-' + ids++`        |

## CSS Shadow Parts

| Name                   | Description                                                          |
| ---------------------- | -------------------------------------------------------------------- |
| `indicator`            | チェックしたセグメントボタンに表示されるインジケーターです。         |
| `indicator-background` | チェックしたセグメントボタンに表示されるインジケータの背景要素です。 |
| `native`               | すべての子要素を包むネイティブ HTML ボタン要素。                     |

## CSS Custom Properties

| Name                           | Description                                                                                        |
| ------------------------------ | -------------------------------------------------------------------------------------------------- |
| `--background`                 | セグメントボタンの背景                                                                             |
| `--background`                 | セグメントボタンの背景                                                                             |
| `--background-checked`         | チェックしたセグメントボタンの背景                                                                 |
| `--background-checked`         | チェックしたセグメントボタンの背景                                                                 |
| `--background-focused`         | タブキーでフォーカスされたときのセグメントボタンの背景                                             |
| `--background-focused`         | タブキーでフォーカスされたときのセグメントボタンの背景                                             |
| `--background-focused-opacity` | タブキーでフォーカスしたときのセグメントボタンの背景の不透明度                                     |
| `--background-focused-opacity` | タブキーでフォーカスしたときのセグメントボタンの背景の不透明度                                     |
| `--background-hover`           | セグメントボタンがホバーされたときの背景                                                           |
| `--background-hover`           | セグメントボタンがホバーされたときの背景                                                           |
| `--background-hover-opacity`   | ホバー時のセグメントボタンの背景の不透明度                                                         |
| `--background-hover-opacity`   | ホバー時のセグメントボタンの背景の不透明度                                                         |
| `--border-color`               | セグメントボタンのボーダーの色                                                                     |
| `--border-color`               | セグメントボタンのボーダーの色                                                                     |
| `--border-radius`              | セグメントボタンのボーダーの半径                                                                   |
| `--border-radius`              | セグメントボタンのボーダーの半径                                                                   |
| `--border-style`               | セグメントボタンのボーダーのスタイル                                                               |
| `--border-style`               | セグメントボタンのボーダーのスタイル                                                               |
| `--border-width`               | セグメントボタンの枠の幅                                                                           |
| `--border-width`               | セグメントボタンの枠の幅                                                                           |
| `--color`                      | セグメントボタンの色                                                                               |
| `--color`                      | セグメントボタンの色                                                                               |
| `--color-checked`              | チェックしたセグメントボタンの色                                                                   |
| `--color-checked`              | チェックしたセグメントボタンの色                                                                   |
| `--color-focused`              | タブキーでフォーカスしたときのセグメントボタンの色                                                 |
| `--color-focused`              | タブキーでフォーカスしたときのセグメントボタンの色                                                 |
| `--color-hover`                | ホバー時のセグメントボタンの色                                                                     |
| `--color-hover`                | ホバー時のセグメントボタンの色                                                                     |
| `--indicator-box-shadow`       | チェックしたセグメントボタンのインジケーターにボックスシャドウを付ける                             |
| `--indicator-box-shadow`       | チェックしたセグメントボタンのインジケーターにボックスシャドウを付ける                             |
| `--indicator-color`            | チェックしたセグメントボタンのインジケーターの色                                                   |
| `--indicator-color`            | チェックしたセグメントボタンのインジケーターの色                                                   |
| `--indicator-height`           | チェックしたセグメントボタンのインジケータの高さ                                                   |
| `--indicator-height`           | チェックしたセグメントボタンのインジケータの高さ                                                   |
| `--indicator-transform`        | チェックされたセグメントボタンのインジケータのトランスフォーム                                     |
| `--indicator-transform`        | チェックされたセグメントボタンのインジケータのトランスフォーム                                     |
| `--indicator-transition`       | チェックしたセグメントボタンのインジケーターの遷移                                                 |
| `--indicator-transition`       | チェックしたセグメントボタンのインジケーターの遷移                                                 |
| `--margin-bottom`              | セグメントボタンの Bottom Margin                                                                   |
| `--margin-bottom`              | セグメントボタンの Bottom Margin                                                                   |
| `--margin-end`                 | セグメントボタンの方向が左から右の場合は Right Margin、右から左の場合は Left Margin                |
| `--margin-end`                 | セグメントボタンの方向が左から右の場合は Right Margin、右から左の場合は Left Margin                |
| `--margin-start`               | セグメントボタンの方向が左から右の場合は Left Margin、右から左の場合は Right Margin                |
| `--margin-start`               | セグメントボタンの方向が左から右の場合は Left Margin、右から左の場合は Right Margin                |
| `--margin-top`                 | セグメントボタンの Top Margin                                                                      |
| `--margin-top`                 | セグメントボタンの Top Margin                                                                      |
| `--padding-bottom`             | セグメントボタンの Bottom Padding                                                                  |
| `--padding-bottom`             | セグメントボタンの Bottom Padding                                                                  |
| `--padding-end`                | セグメントボタンの向きが左から右の場合は Right Padding、右から左の場合は Left Padding となります。 |
| `--padding-end`                | セグメントボタンの向きが左から右の場合は Right Padding、右から左の場合は Left Padding となります。 |
| `--padding-start`              | セグメントボタンの向きが左から右の場合は Left Padding、右から左の場合は Right Padding となります。 |
| `--padding-start`              | セグメントボタンの向きが左から右の場合は Left Padding、右から左の場合は Right Padding となります。 |
| `--padding-top`                | セグメントボタンの Top Padding                                                                     |
| `--padding-top`                | セグメントボタンの Top Padding                                                                     |
| `--transition`                 | セグメントボタンの遷移                                                                             |
| `--transition`                 | セグメントボタンの遷移                                                                             |
