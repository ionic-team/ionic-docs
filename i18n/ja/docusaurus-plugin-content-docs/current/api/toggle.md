---
title: "ion-toggle"
demoUrl: "/docs/demos/api/toggle/index.html"
demoSourceUrl: "https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/toggle/index.html"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>Toggle | ion-toggle: Custom Toggle Button for Ionic Applications</title>
  <meta name="description" content="Toggle changes the state of a single option. Use ion-toggle to create customizable toggle buttons that can be switched on or off for your applications." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


  
## Properties


### alignment

| | |
| --- | --- |
| **Description** | 十字軸上のトグルとラベルの配置を制御する方法。start"`：ラベルとコントロールはLTRでは十字軸の左側に、RTLでは右側に表示されます。center"`：ラベルとコントロールはLTRでもRTLでも横軸の中央に表示されます。このプロパティを設定すると、トグルの `display` が `block` に変更されます。 |
| **Attribute** | `alignment` |
| **Type** | `"center" \| "start" \| undefined` |
| **Default** | `undefined` |



### checked

| | |
| --- | --- |
| **Description** | `true`の場合、トグルが選択されます。 |
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
| **Description** | `true`の場合、ユーザーはトグルを操作することができません。 |
| **Attribute** | `disabled` |
| **Type** | `boolean` |
| **Default** | `false` |



### enableOnOffLabels

| | |
| --- | --- |
| **Description** | トグル内のオン／オフアクセシビリティスイッチラベルを有効にします。 |
| **Attribute** | `enable-on-off-labels` |
| **Type** | `boolean \| undefined` |
| **Default** | `config.get('toggleOnOffLabels')` |



### errorText

| | |
| --- | --- |
| **Description** | Text that is placed under the toggle label and displayed when an error is detected. |
| **Attribute** | `error-text` |
| **Type** | `string \| undefined` |
| **Default** | `undefined` |



### helperText

| | |
| --- | --- |
| **Description** | Text that is placed under the toggle label and displayed when no error is detected. |
| **Attribute** | `helper-text` |
| **Type** | `string \| undefined` |
| **Default** | `undefined` |



### justify

| | |
| --- | --- |
| **Description** | ラベルとトグルを1行にまとめる方法。start"`：ラベルとトグルはLTRでは左に、RTLでは右に表示されます。end"`：ラベルとトグルはLTRでは右に、RTLでは左に表示されます。space-between"`：ラベルとトグルは行の反対側に表示され、2つの要素の間にはスペースが入ります。このプロパティを設定すると、トグルの `display` が `block` に変更されます。 |
| **Attribute** | `justify` |
| **Type** | `"end" \| "space-between" \| "start" \| undefined` |
| **Default** | `undefined` |



### labelPlacement

| | |
| --- | --- |
| **Description** | 入力に対するラベルの位置。start"`：ラベルはLTRではトグルの左に、RTLでは右に表示されます。end"`：ラベルはLTRではトグルの右、RTLでは左に表示されます。fixed"`：ラベルの幅が固定される以外は `"start"` と同じ動作をします。長いテキストは省略記号("...")で切り捨てられます。stacked"`：ラベルは向きに関係なくトグルの上に表示されます。ラベルの整列は `alignment` プロパティで制御できます。 |
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
| **Description** | トグルの値は、チェックされているかどうかを意味するものではありません。  トグルの値は `<input type="checkbox">` の値に類似しており、トグルがネイティブの `<form>` に参加する場合にのみ使用されます。 |
| **Attribute** | `value` |
| **Type** | `null \| string \| undefined` |
| **Default** | `'on'` |



## Events

| Name | Description |
| --- | --- |
| `ionBlur` | トグルのフォーカスが外れたときに発行されます。 |
| `ionChange` | ユーザがトグルのオン/オフを切り替えたときに発行される。  プログラムで `checked` プロパティを設定した場合は、このイベントは発生しない。 |
| `ionFocus` | トグルにフォーカスが当たったときに発行されます。 |


## CSS Shadow Parts

| Name | Description |
| --- | --- |
| `error-text` | Supporting text displayed beneath the toggle label when the toggle is invalid and touched. |
| `handle` | チェックした状態を変更するために使用するトグルハンドル（つまみ）です。 |
| `helper-text` | Supporting text displayed beneath the toggle label when the toggle is valid. |
| `label` | トグルを説明するラベルテキスト。 |
| `supporting-text` | Supporting text displayed beneath the toggle label. |
| `track` | トグルの背景トラックです。 |


## CSS Custom Properties

| Name | Description |
| --- | --- |
| `--border-radius` | トグルトラックのボーダー半径 |
| `--border-radius` | トグルトラックのボーダー半径 |
| `--handle-background` | トグルハンドルの背景 |
| `--handle-background` | トグルハンドルの背景 |
| `--handle-background-checked` | チェックしたときのトグルハンドルの背景 |
| `--handle-background-checked` | チェックしたときのトグルハンドルの背景 |
| `--handle-border-radius` | トグルハンドルのボーダー半径 |
| `--handle-border-radius` | トグルハンドルのボーダー半径 |
| `--handle-box-shadow` | トグルハンドルのボックスシャドウ |
| `--handle-box-shadow` | トグルハンドルのボックスシャドウ |
| `--handle-height` | トグルハンドルの高さ |
| `--handle-height` | トグルハンドルの高さ |
| `--handle-max-height` | トグルハンドルの最大の高さ |
| `--handle-max-height` | トグルハンドルの最大の高さ |
| `--handle-spacing` | トグルハンドル周辺の横方向の間隔 |
| `--handle-spacing` | トグルハンドル周辺の横方向の間隔 |
| `--handle-transition` | トグルハンドルの変遷 |
| `--handle-transition` | トグルハンドルの変遷 |
| `--handle-width` | トグルハンドルの幅 |
| `--handle-width` | トグルハンドルの幅 |
| `--track-background` | トグルトラックの背景 |
| `--track-background` | トグルトラックの背景 |
| `--track-background-checked` | チェックしたときのトグルトラックの背景 |
| `--track-background-checked` | チェックしたときのトグルトラックの背景 |


## Slots

| Name | Description |
| --- | --- |
| `` | トグルに関連付けるラベルテキストです。`"labelPlacement`"プロパティを使用して、トグルに対してラベルを配置する位置を制御します。 |

