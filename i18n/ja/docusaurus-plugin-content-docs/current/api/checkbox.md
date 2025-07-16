---
title: "ion-checkbox"
demoUrl: "/docs/demos/api/checkbox/index.html"
demoSourceUrl: "https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/checkbox/index.html"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>ion-checkboxes: Ionic App Component to Select Multiple Options</title>
  <meta name="description" content="ion-checkboxes allow selection of multiple options from a set and appear as checked (ticked) when activated. Learn about the checkbox component for Ionic apps." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


  
## Properties


### alignment

| | |
| --- | --- |
| **Description** | 十字軸上のチェックボックスとラベルの配置を制御する方法。start"`：ラベルとコントロールはLTRでは横軸の左側に、RTLでは右側に表示されます。center"`：ラベルとコントロールはLTRでもRTLでも横軸の中央に表示されます。このプロパティを設定すると、チェックボックス `display` が `block` に変更されます。 |
| **Attribute** | `alignment` |
| **Type** | `"center" \| "start" \| undefined` |
| **Default** | `undefined` |



### checked

| | |
| --- | --- |
| **Description** | `true`の場合、チェックボックスが選択される。 |
| **Attribute** | `checked` |
| **Type** | `boolean` |
| **Default** | `false` |



### color

| | |
| --- | --- |
| **Description** | アプリケーションのカラーパレットから使用する色を指定します。デフォルトのオプションは以下の通りです。 `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, と `"dark"` です．色に関する詳しい情報は [theming](/docs/theming/basics) を参照してください。 |
| **Attribute** | `color` |
| **Type** | `"danger" \| "dark" \| "light" \| "medium" \| "primary" \| "secondary" \| "success" \| "tertiary" \| "warning" \| string & Record<never, never> \| undefined` |
| **Default** | `undefined` |



### disabled

| | |
| --- | --- |
| **Description** | `true`の場合、ユーザはチェックボックスと対話することができません。 |
| **Attribute** | `disabled` |
| **Type** | `boolean` |
| **Default** | `false` |



### errorText

| | |
| --- | --- |
| **Description** | Text that is placed under the checkbox label and displayed when an error is detected. |
| **Attribute** | `error-text` |
| **Type** | `string \| undefined` |
| **Default** | `undefined` |



### helperText

| | |
| --- | --- |
| **Description** | Text that is placed under the checkbox label and displayed when no error is detected. |
| **Attribute** | `helper-text` |
| **Type** | `string \| undefined` |
| **Default** | `undefined` |



### indeterminate

| | |
| --- | --- |
| **Description** | `true`の場合、チェックボックスは視覚的に不定形と表示されます。 |
| **Attribute** | `indeterminate` |
| **Type** | `boolean` |
| **Default** | `false` |



### justify

| | |
| --- | --- |
| **Description** | ラベルとチェックボックスを1行にまとめる方法。start"`：ラベルとチェックボックスはLTRでは左に、RTLでは右に表示されます。end"`：ラベルとチェックボックスはLTRでは右に、RTLでは左に表示されます。space-between"`：ラベルとチェックボックスは行の反対側に表示され、2つの要素の間にはスペースが入ります。このプロパティを設定すると、チェックボックスの `display` が `block` に変更されます。 |
| **Attribute** | `justify` |
| **Type** | `"end" \| "space-between" \| "start" \| undefined` |
| **Default** | `undefined` |



### labelPlacement

| | |
| --- | --- |
| **Description** | チェックボックスに対するラベルの位置。start"`：ラベルはLTRではチェックボックスの左に、RTLでは右に表示されます。end"`：ラベルはLTRではチェックボックスの右、RTLでは左に表示されます。fixed"`：ラベルの幅が固定される以外は `"start"` と同じ動作をします。長いテキストは省略記号("...")で切り捨てられます。積み重ね"`：ラベルは向きに関係なくチェックボックスの上に表示されます。ラベルの整列は `alignment` プロパティで制御できます。 |
| **Attribute** | `label-placement` |
| **Type** | `"end" \| "fixed" \| "stacked" \| "start"` |
| **Default** | `'start'` |



### mode

| | |
| --- | --- |
| **Description** | modeは、どのプラットフォームのスタイルを使用するかを決定します。 |
| **Attribute** | `mode` |
| **Type** | `"ios" \| "md"` |
| **Default** | `undefined` |



### name

| | |
| --- | --- |
| **Description** | フォームデータとともに送信されるコントロールの名前。 |
| **Attribute** | `name` |
| **Type** | `string` |
| **Default** | `this.inputId` |



### required

| | |
| --- | --- |
| **Description** | If true, screen readers will announce it as a required field. This property works only for accessibility purposes, it will not prevent the form from submitting if the value is invalid. |
| **Attribute** | `required` |
| **Type** | `boolean` |
| **Default** | `false` |



### value

| | |
| --- | --- |
| **Description** | チェックボックスの値は、チェックされているかどうかを意味するものではなく、`checked`プロパティを使用します。  チェックボックスの値は `<input type="checkbox">` の値に似ており、チェックボックスがネイティブの `<form>` に参加する場合にのみ使用されます。 |
| **Attribute** | `value` |
| **Type** | `any` |
| **Default** | `'on'` |



## Events

| Name | Description |
| --- | --- |
| `ionBlur` | チェックボックスのフォーカスが外れたときに発行されます。 |
| `ionChange` | クリックなどのユーザーアクションの結果、checkedプロパティが変更されたときに発行される。  プログラムで `checked` プロパティを設定した場合は、このイベントは発生しません。 |
| `ionFocus` | チェックボックスにフォーカスが当たったときに発行されます。 |


## CSS Shadow Parts

| Name | Description |
| --- | --- |
| `container` | チェックボックスマークのコンテナです。 |
| `error-text` | Supporting text displayed beneath the checkbox label when the checkbox is invalid and touched. |
| `helper-text` | Supporting text displayed beneath the checkbox label when the checkbox is valid. |
| `label` | チェックボックスを表すラベルテキスト。 |
| `mark` | チェックされた状態を示すために使用されるチェックマークです。 |
| `supporting-text` | Supporting text displayed beneath the checkbox label. |


## CSS Custom Properties

| Name | Description |
| --- | --- |
| `--border-color` | チェックボックスアイコンのボーダーカラー |
| `--border-color` | チェックボックスアイコンのボーダーカラー |
| `--border-color-checked` | チェックボックスのアイコンがチェックされたときのボーダーカラー |
| `--border-color-checked` | チェックボックスのアイコンがチェックされたときのボーダーカラー |
| `--border-radius` | チェックボックスアイコンの境界半径 |
| `--border-radius` | チェックボックスアイコンの境界半径 |
| `--border-style` | チェックボックスアイコンのボーダースタイル |
| `--border-style` | チェックボックスアイコンのボーダースタイル |
| `--border-width` | チェックボックスアイコンのボーダー幅 |
| `--border-width` | チェックボックスアイコンのボーダー幅 |
| `--checkbox-background` | チェックボックスアイコンの背景 |
| `--checkbox-background` | チェックボックスアイコンの背景 |
| `--checkbox-background-checked` | チェックしたときのチェックボックスアイコンの背景 |
| `--checkbox-background-checked` | チェックしたときのチェックボックスアイコンの背景 |
| `--checkmark-color` | チェックボックスのチェックマークがチェックされたときの色 |
| `--checkmark-color` | チェックボックスのチェックマークがチェックされたときの色 |
| `--checkmark-width` | チェックボックス・チェックマークのストローク幅 |
| `--checkmark-width` | チェックボックス・チェックマークのストローク幅 |
| `--size` | チェックボックスのアイコンの大きさ |
| `--size` | チェックボックスのアイコンの大きさ |
| `--transition` | チェックボックスアイコンの遷移 |
| `--transition` | チェックボックスアイコンの遷移 |


## Slots

| Name | Description |
| --- | --- |
| `` | チェックボックスと関連付けるラベルテキスト。"labelPlacement"プロパティを使用して、チェックボックスに対するラベルの配置を制御します。 |

