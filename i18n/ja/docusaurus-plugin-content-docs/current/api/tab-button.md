---
title: 'ion-tab-button'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>Ion-Tab-Button: What it is, Usage & Properties | Ionic Framework</title>
  <meta
    name="description"
    content="What is an ion-tab-button? It's a UI component that is placed inside of a tab bar and can specify the layout of the icon and connect to a tab view."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

## Properties

### disabled

|                 |                                                              |
| --------------- | ------------------------------------------------------------ |
| **Description** | `true`の場合、ユーザはタブボタンを操作することができません。 |
| **Attribute**   | `disabled`                                                   |
| **Type**        | `boolean`                                                    |
| **Default**     | `false`                                                      |

### download

|                 |                                                                                                                                                                                                                                                                                        |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | この属性は、ブラウザが URL に移動する代わりに URL をダウンロードするように指示し、ユーザはローカルファイルとして保存するように促されます。この属性に値がある場合、保存のプロンプトであらかじめ入力されたファイル名として使用されます（ユーザーはファイル名を変更することができます）。 |
| **Attribute**   | `download`                                                                                                                                                                                                                                                                             |
| **Type**        | `string \| undefined`                                                                                                                                                                                                                                                                  |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                            |

### href

|                 |                                                                                                                                            |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | ハイパーリンクが指し示す URL または URL フラグメントを格納します。このプロパティが設定されている場合、アンカータグがレンダリングされます。 |
| **Attribute**   | `href`                                                                                                                                     |
| **Type**        | `string \| undefined`                                                                                                                      |
| **Default**     | `undefined`                                                                                                                                |

### layout

|                 |                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------- |
| **Description** | タブバーのテキストとアイコンのレイアウトを設定します。デフォルトは`"icon-top"`です。                    |
| **Attribute**   | `layout`                                                                                                |
| **Type**        | `"icon-bottom" \| "icon-end" \| "icon-hide" \| "icon-start" \| "icon-top" \| "label-hide" \| undefined` |
| **Default**     | `undefined`                                                                                             |

### mode

|                 |                                                                   |
| --------------- | ----------------------------------------------------------------- |
| **Description** | mode は、どのプラットフォームのスタイルを使用するかを決定します。 |
| **Attribute**   | `mode`                                                            |
| **Type**        | `"ios" \| "md"`                                                   |
| **Default**     | `undefined`                                                       |

### rel

|                 |                                                                                                                                                                                    |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | ターゲットオブジェクトとリンクオブジェクトの関係を指定します。値は、スペースで区切られた[リンクタイプ](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types)のリストです。 |
| **Attribute**   | `rel`                                                                                                                                                                              |
| **Type**        | `string \| undefined`                                                                                                                                                              |
| **Default**     | `undefined`                                                                                                                                                                        |

### selected

|                 |                              |
| --------------- | ---------------------------- |
| **Description** | 選択されたタブコンポーネント |
| **Attribute**   | `selected`                   |
| **Type**        | `boolean`                    |
| **Default**     | `false`                      |

### tab

|                 |                                                                                                                                                 |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | 各 `ion-tab` にはタブ ID を指定する必要があります。これは、選択されたタブを参照したり、ルータがタブを切り替えたりするために内部的に使用される。 |
| **Attribute**   | `tab`                                                                                                                                           |
| **Type**        | `string \| undefined`                                                                                                                           |
| **Default**     | `undefined`                                                                                                                                     |

### target

|                 |                                                                                                                                                       |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | リンク先の URL を表示する場所を指定します。href`を指定した場合のみ適用される。特別なキーワードがあります。_blank"`, `"_self"`, `"_parent"`, `"_top"`. |
| **Attribute**   | `target`                                                                                                                                              |
| **Type**        | `string \| undefined`                                                                                                                                 |
| **Default**     | `undefined`                                                                                                                                           |

## CSS Shadow Parts

| Name     | Description                                              |
| -------- | -------------------------------------------------------- |
| `native` | すべての子要素を包むネイティブ HTML のアンカー要素です。 |

## CSS Custom Properties

| Name                           | Description                                                                                  |
| ------------------------------ | -------------------------------------------------------------------------------------------- |
| `--background`                 | タブボタンの背景                                                                             |
| `--background`                 | タブボタンの背景                                                                             |
| `--background-focused`         | タブキーでフォーカスされたときのタブボタンの背景                                             |
| `--background-focused`         | タブキーでフォーカスされたときのタブボタンの背景                                             |
| `--background-focused-opacity` | タブキーでフォーカスしたときのタブボタンの背景の不透明度                                     |
| `--background-focused-opacity` | タブキーでフォーカスしたときのタブボタンの背景の不透明度                                     |
| `--color`                      | タブボタンの色                                                                               |
| `--color`                      | タブボタンの色                                                                               |
| `--color-focused`              | タブキーでフォーカスしたときのタブボタンの色                                                 |
| `--color-focused`              | タブキーでフォーカスしたときのタブボタンの色                                                 |
| `--color-selected`             | 選択されたタブボタンの色                                                                     |
| `--color-selected`             | 選択されたタブボタンの色                                                                     |
| `--padding-bottom`             | タブボタンの Bottom Padding                                                                  |
| `--padding-bottom`             | タブボタンの Bottom Padding                                                                  |
| `--padding-end`                | タブボタンの向きが左から右の場合は Right Padding、右から左の場合は Left Padding となります。 |
| `--padding-end`                | タブボタンの向きが左から右の場合は Right Padding、右から左の場合は Left Padding となります。 |
| `--padding-start`              | タブボタンの向きが左から右の場合は Left Padding、右から左の場合は Right Padding となります。 |
| `--padding-start`              | タブボタンの向きが左から右の場合は Left Padding、右から左の場合は Right Padding となります。 |
| `--padding-top`                | タブボタンの Top Padding                                                                     |
| `--padding-top`                | タブボタンの Top Padding                                                                     |
| `--ripple-color`               | ボタンリプルエフェクトの色                                                                   |
| `--ripple-color`               | ボタンリプルエフェクトの色                                                                   |
