---
title: 'ion-select'
demoUrl: '/docs/demos/api/select/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/select/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>ion-select: Select One or Multiple Value Boxes or Placeholders</title>
  <meta
    name="description"
    content="ion-select is represented by selected value(s), or a placeholder, and dropdown icon. When you tap select, a dialog box appears with an easy to select list."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

## Properties

### cancelText

|                 |                                          |
| --------------- | ---------------------------------------- |
| **Description** | キャンセルボタンに表示するテキストです。 |
| **Attribute**   | `cancel-text`                            |
| **Type**        | `string`                                 |
| **Default**     | `'Cancel'`                               |

### color

|                 |                                                                                                                                                                                                                                                                                                                                                                             |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | アプリケーションのカラーパレットから使用する色を指定します。デフォルトのオプションは以下の通りです：`"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, と `"dark"` です．色についての詳細は [theming](/docs/theming/basics) を参照してください。 このプロパティは、modern select 構文を使用する場合にのみ利用可能です。 |
| **Attribute**   | `color`                                                                                                                                                                                                                                                                                                                                                                     |
| **Type**        | `"danger" \| "dark" \| "light" \| "medium" \| "primary" \| "secondary" \| "success" \| "tertiary" \| "warning" \| string & Record<never, never> \| undefined`                                                                                                                                                                                                               |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                                                                                                                 |

### compareWith

|                 |                                                                                                                                                                                                                                              |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | このプロパティを使用すると、開発者は、ion-select で選択されたオプションを決定するときにオブジェクトを比較するためのカスタム関数またはプロパティ名を指定できます。指定しない場合、デフォルトの動作では比較に厳密な等式 (===) が使用されます。 |
| **Attribute**   | `compare-with`                                                                                                                                                                                                                               |
| **Type**        | `((currentValue: any, compareValue: any) => boolean) \| null \| string \| undefined`                                                                                                                                                         |
| **Default**     | `undefined`                                                                                                                                                                                                                                  |

### disabled

|                 |                                                            |
| --------------- | ---------------------------------------------------------- |
| **Description** | `true`の場合、ユーザはセレクトと対話することができません。 |
| **Attribute**   | `disabled`                                                 |
| **Type**        | `boolean`                                                  |
| **Default**     | `false`                                                    |

### errorText

|                 |                                                                               |
| --------------- | ----------------------------------------------------------------------------- |
| **Description** | Text that is placed under the select and displayed when an error is detected. |
| **Attribute**   | `error-text`                                                                  |
| **Type**        | `string \| undefined`                                                         |
| **Default**     | `undefined`                                                                   |

### expandedIcon

|                 |                                                                                                                                                                                                          |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | セレクトが開いているときに表示するトグルアイコン。定義されている場合、`md`モードでのアイコン回転の動作は無効になる。未定義の場合、セレクトが開いているときも閉じているときも `toggleIcon` が使用される。 |
| **Attribute**   | `expanded-icon`                                                                                                                                                                                          |
| **Type**        | `string \| undefined`                                                                                                                                                                                    |
| **Default**     | `undefined`                                                                                                                                                                                              |

### fill

|                 |                                                                                                                                                                                       |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | アイテムの塗りつぶし。もし `"solid"` ならば、アイテムは背景を持つようになります。もし `"outline"` ならば、アイテムはボーダー付きの透明なものになります。md`モードでのみ使用可能です。 |
| **Attribute**   | `fill`                                                                                                                                                                                |
| **Type**        | `"outline" \| "solid" \| undefined`                                                                                                                                                   |
| **Default**     | `undefined`                                                                                                                                                                           |

### helperText

|                 |                                                                               |
| --------------- | ----------------------------------------------------------------------------- |
| **Description** | Text that is placed under the select and displayed when no error is detected. |
| **Attribute**   | `helper-text`                                                                 |
| **Type**        | `string \| undefined`                                                         |
| **Default**     | `undefined`                                                                   |

### interface

|                 |                                                                                        |
| --------------- | -------------------------------------------------------------------------------------- |
| **Description** | セレクトが使用するインターフェース：action-sheet`, `popover`, `alert`, または `modal`. |
| **Attribute**   | `interface`                                                                            |
| **Type**        | `"action-sheet" \| "alert" \| "modal" \| "popover"`                                    |
| **Default**     | `'alert'`                                                                              |

### interfaceOptions

|                 |                                                                                                                                                                                                                                                                                                                                                                            |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | alert`、`action-sheet`、`popover`インターフェースが取ることができる追加オプション。各インターフェイスの作成オプションについては、[ion-alert docs](./alert), [ion-action-sheet docs](./action-sheet), [ion-popover docs](./popover), [ion-modal docs](./modal) を参照してください。  注意:`interfaceOptions`は`alert`インターフェイスの`inputs`や`buttons` を上書きしない。 |
| **Attribute**   | `interface-options`                                                                                                                                                                                                                                                                                                                                                        |
| **Type**        | `any`                                                                                                                                                                                                                                                                                                                                                                      |
| **Default**     | `{}`                                                                                                                                                                                                                                                                                                                                                                       |

### justify

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | ラベルとセレクトを 1 行にまとめる方法。`labelPlacement`が `"floating"` または `"stacked"` に設定されている場合、ラベルとセレクトが異なる行にあるときは `justify` は適用されません。`"start"`：ラベルとセレクトは LTR では左側に、RTL では右側に表示されます。`"end"`：ラベルとセレクトは LTR では右に、RTL では左に表示されます。"space-between"`：ラベルとセレクトは行の反対側の端に表示され、2 つの要素の間にはスペースがあります。 |
| **Attribute**   | `justify`                                                                                                                                                                                                                                                                                                                                                                                                                             |
| **Type**        | `"end" \| "space-between" \| "start" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                    |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                           |

### label

|                 |                                                                                                                                                                 |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | セレクトに関連付けられた可視ラベル。 プレーンテキストのラベルをレンダリングする必要がある場合に使用する。 label`プロパティは `label` スロットよりも優先される。 |
| **Attribute**   | `label`                                                                                                                                                         |
| **Type**        | `string \| undefined`                                                                                                                                           |
| **Default**     | `undefined`                                                                                                                                                     |

### labelPlacement

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | セレクトに対してラベルを配置する位置。`"start"`：ラベルは LTR ではセレクトの左側に、RTL では右側に表示されます。`"end"`：ラベルは LTR ではセレクトの右側に、RTL では左側に表示されます。"floating"`：ラベルは、セレクトがフォーカスされているか、セレクトに値がある場合、小さく表示され、セレクトの上に表示されます。それ以外の場合は、セレクトの上に表示されます。"stacked"`：ラベルは、セレクトがぼやけた状態や値がない状態でも、小さく表示され、セレクトの上に表示されます。`"fixed"`：ラベルの幅が固定される以外は、`"start"`と同じ動作になります。長いテキストは省略記号（"..."）で切り捨てられます。`"floating"`や "stacked"`を使用する場合は、selectに `value`か`placeholder` のどちらかを指定して初期化することをお勧めします。 |
| **Attribute**   | `label-placement`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| **Type**        | `"end" \| "fixed" \| "floating" \| "stacked" \| "start" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **Default**     | `'start'`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

### mode

|                 |                                                                   |
| --------------- | ----------------------------------------------------------------- |
| **Description** | mode は、どのプラットフォームのスタイルを使用するかを決定します。 |
| **Attribute**   | `mode`                                                            |
| **Type**        | `"ios" \| "md"`                                                   |
| **Default**     | `undefined`                                                       |

### multiple

|                 |                                                           |
| --------------- | --------------------------------------------------------- |
| **Description** | `true`の場合、select は複数の値を受け入れることができる。 |
| **Attribute**   | `multiple`                                                |
| **Type**        | `boolean`                                                 |
| **Default**     | `false`                                                   |

### name

|                 |                                                      |
| --------------- | ---------------------------------------------------- |
| **Description** | フォームデータとともに送信されるコントロールの名前。 |
| **Attribute**   | `name`                                               |
| **Type**        | `string`                                             |
| **Default**     | `this.inputId`                                       |

### okText

|                 |                                   |
| --------------- | --------------------------------- |
| **Description** | ok ボタンに表示するテキストです。 |
| **Attribute**   | `ok-text`                         |
| **Type**        | `string`                          |
| **Default**     | `'OK'`                            |

### placeholder

|                 |                                            |
| --------------- | ------------------------------------------ |
| **Description** | セレクトが空のときに表示するテキストです。 |
| **Attribute**   | `placeholder`                              |
| **Type**        | `string \| undefined`                      |
| **Default**     | `undefined`                                |

### required

|                 |                                                                                                                                                                                          |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | If true, screen readers will announce it as a required field. This property works only for accessibility purposes, it will not prevent the form from submitting if the value is invalid. |
| **Attribute**   | `required`                                                                                                                                                                               |
| **Type**        | `boolean`                                                                                                                                                                                |
| **Default**     | `false`                                                                                                                                                                                  |

### selectedText

|                 |                                                          |
| --------------- | -------------------------------------------------------- |
| **Description** | 選択されたオプションの値の代わりに表示するテキストです。 |
| **Attribute**   | `selected-text`                                          |
| **Type**        | `null \| string \| undefined`                            |
| **Default**     | `undefined`                                              |

### shape

|                 |                                                                           |
| --------------- | ------------------------------------------------------------------------- |
| **Description** | セレクトの形状を指定します。`round`の場合、境界線の半径が大きくなります。 |
| **Attribute**   | `shape`                                                                   |
| **Type**        | `"round" \| undefined`                                                    |
| **Default**     | `undefined`                                                               |

### toggleIcon

|                 |                                                                                                                             |
| --------------- | --------------------------------------------------------------------------------------------------------------------------- |
| **Description** | 使用するトグルアイコン。デフォルトは `ios` モードの場合は `chevronExpand` で、`md` モードの場合は `caretDownSharp` である。 |
| **Attribute**   | `toggle-icon`                                                                                                               |
| **Type**        | `string \| undefined`                                                                                                       |
| **Default**     | `undefined`                                                                                                                 |

### value

|                 |                    |
| --------------- | ------------------ |
| **Description** | セレクトの値です。 |
| **Attribute**   | `value`            |
| **Type**        | `any`              |
| **Default**     | `undefined`        |

## Events

| Name         | Description                                                                                                  |
| ------------ | ------------------------------------------------------------------------------------------------------------ |
| `ionBlur`    | セレクトのフォーカスが外れたときに発行されます。                                                             |
| `ionCancel`  | 選択がキャンセルされたときに発行されます。                                                                   |
| `ionChange`  | 値が変更されたときに発行される。 プログラムで `value` プロパティを設定した場合は、このイベントは発生しない。 |
| `ionDismiss` | オーバーレイが解除されたときに発行されます。                                                                 |
| `ionFocus`   | セレクトにフォーカスが当たったときに発行されます。                                                           |

## Methods

### open

|                 |                                                                                                                                                                 |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | セレクトオーバーレイを開きます。オーバーレイは `ion-select` の `interface` プロパティによって、アラート、アクションシート、ポップオーバーのいずれかになります。 |
| **Signature**   | `open(event?: UIEvent) => Promise<any>`                                                                                                                         |

## CSS Shadow Parts

| Name              | Description                                                                          |
| ----------------- | ------------------------------------------------------------------------------------ |
| `container`       | 選択テキストまたはプレースホルダーのコンテナ。                                       |
| `error-text`      | Supporting text displayed beneath the select when the select is invalid and touched. |
| `helper-text`     | Supporting text displayed beneath the select when the select is valid.               |
| `icon`            | セレクトアイコンのコンテナです。                                                     |
| `label`           | セレクトを表すラベルテキスト。                                                       |
| `placeholder`     | 値がないときにセレクトに表示されるテキスト。                                         |
| `supporting-text` | Supporting text displayed beneath the select.                                        |
| `text`            | セレクトの表示値です。                                                               |

## CSS Custom Properties

| Name                        | Description                                                                                |
| --------------------------- | ------------------------------------------------------------------------------------------ |
| `--background`              | セレクトの背景                                                                             |
| `--background`              | セレクトの背景                                                                             |
| `--border-color`            | セレクトボーダーの色                                                                       |
| `--border-color`            | セレクトボーダーの色                                                                       |
| `--border-radius`           | 選択枠の半径。fill="outline "を使う場合、半径が大きいと表示が不 均一になることがあります。 |
| `--border-radius`           | 選択枠の半径。fill="outline "を使う場合、半径が大きいと表示が不 均一になることがあります。 |
| `--border-style`            | セレクトボーダーのスタイル                                                                 |
| `--border-style`            | セレクトボーダーのスタイル                                                                 |
| `--border-width`            | セレクトボーダーの幅                                                                       |
| `--border-width`            | セレクトボーダーの幅                                                                       |
| `--highlight-color-focused` | フォーカス時のセレクトのハイライトの色                                                     |
| `--highlight-color-focused` | フォーカス時のセレクトのハイライトの色                                                     |
| `--highlight-color-invalid` | 無効時のセレクトのハイライトの色                                                           |
| `--highlight-color-invalid` | 無効時のセレクトのハイライトの色                                                           |
| `--highlight-color-valid`   | 有効時のセレクトのハイライトの色                                                           |
| `--highlight-color-valid`   | 有効時のセレクトのハイライトの色                                                           |
| `--highlight-height`        | セレクトのハイライトの高さ。md モードにのみ適用される。                                    |
| `--highlight-height`        | セレクトのハイライトの高さ。md モードにのみ適用される。                                    |
| `--padding-bottom`          | セレクトの Bottom Padding                                                                  |
| `--padding-bottom`          | セレクトの Bottom Padding                                                                  |
| `--padding-end`             | セレクトの方向が左から右の場合は Right Padding、右から左の場合は Left Padding を行う       |
| `--padding-end`             | セレクトの方向が左から右の場合は Right Padding、右から左の場合は Left Padding を行う       |
| `--padding-start`           | セレクトの方向が左から右の場合は Left Padding、右から左の場合は Right Padding              |
| `--padding-start`           | セレクトの方向が左から右の場合は Left Padding、右から左の場合は Right Padding              |
| `--padding-top`             | セレクトの Top Padding                                                                     |
| `--padding-top`             | セレクトの Top Padding                                                                     |
| `--placeholder-color`       | セレクト Placeholder テキストの色                                                          |
| `--placeholder-color`       | セレクト Placeholder テキストの色                                                          |
| `--placeholder-opacity`     | 選択 Placeholder テキストの不透明度                                                        |
| `--placeholder-opacity`     | 選択 Placeholder テキストの不透明度                                                        |
| `--ripple-color`            | MD モード時のリップルエフェクトの色です。                                                  |
| `--ripple-color`            | MD モード時のリップルエフェクトの色です。                                                  |

## Slots

| Name    | Description                                                                                                                                                                            |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `end`   | セレクトの最後尾に表示するコンテンツ。                                                                                                                                                 |
| `label` | セレクトに関連付けるラベルテキスト。labelPlacement`プロパティを使用して、select に対するラベルの位置を制御します。ラベルをカスタム HTML でレンダリングする必要がある場合に使用します。 |
| `start` | セレクトの最先端に表示するコンテンツ。                                                                                                                                                 |
