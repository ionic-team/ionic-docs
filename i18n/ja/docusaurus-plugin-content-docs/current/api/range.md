---
title: "ion-range"
demoUrl: "/docs/demos/api/range/index.html"
demoSourceUrl: "https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/range/index.html"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>Range Slider | ion-range: Slider Knob Controls with Labels</title>
  <meta name="description" content="ion-range lets you select from a range of values by moving the slider. It accepts dual knobs but one controls the value and labels can be placed on either side." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


  
## Properties


### activeBarStart

| | |
| --- | --- |
| **Description** | レンジアクティブバーの開始位置です。この機能は、ノブが1つの場合のみ有効です（dualKnobs="false"）。有効な値は、min値以上、max値以下です。 |
| **Attribute** | `active-bar-start` |
| **Type** | `number \| undefined` |
| **Default** | `undefined` |



### color

| | |
| --- | --- |
| **Description** | アプリケーションのカラーパレットから使用する色を指定します。デフォルトのオプションは以下の通りです。 `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, と `"dark"` です．色に関する詳しい情報は [theming](/docs/theming/basics) を参照してください。 |
| **Attribute** | `color` |
| **Type** | `"danger" \| "dark" \| "light" \| "medium" \| "primary" \| "secondary" \| "success" \| "tertiary" \| "warning" \| string & Record<never, never> \| undefined` |
| **Default** | `undefined` |



### debounce

| | |
| --- | --- |
| **Description** | レンジの値が変化するたびに `ionInput` イベントをトリガーするまでの待ち時間（ミリ秒単位）。 |
| **Attribute** | `debounce` |
| **Type** | `number \| undefined` |
| **Default** | `undefined` |



### disabled

| | |
| --- | --- |
| **Description** | `true`の場合、ユーザは範囲と対話することができません。 |
| **Attribute** | `disabled` |
| **Type** | `boolean` |
| **Default** | `false` |



### dualKnobs

| | |
| --- | --- |
| **Description** | 2つのノブを表示します。 |
| **Attribute** | `dual-knobs` |
| **Type** | `boolean` |
| **Default** | `false` |



### label

| | |
| --- | --- |
| **Description** | コントロールのラベルとして表示するテキスト。プレーンテキストのみが必要な場合は `label` スロットよりもこちらを使用する。両方を使用する場合は、`label` プロパティが `label` スロットよりも優先される。 |
| **Attribute** | `label` |
| **Type** | `string \| undefined` |
| **Default** | `undefined` |



### labelPlacement

| | |
| --- | --- |
| **Description** | 範囲に対するラベルの位置。start"`：ラベルはLTRでは範囲の左側、RTLでは右側に表示される。end"`：ラベルはLTRでは範囲の右側、RTLでは左側に表示される。fixed"`：ラベルの幅が固定される以外は `"start"` と同じ動作をします。長いテキストは省略記号("...")で切り捨てられます。積み上げ"`：ラベルは方向に関係なく範囲の上に表示されます。 |
| **Attribute** | `label-placement` |
| **Type** | `"end" \| "fixed" \| "stacked" \| "start"` |
| **Default** | `'start'` |



### max

| | |
| --- | --- |
| **Description** | 範囲の最大整数値。 |
| **Attribute** | `max` |
| **Type** | `number` |
| **Default** | `100` |



### min

| | |
| --- | --- |
| **Description** | 範囲の最小の整数値。 |
| **Attribute** | `min` |
| **Type** | `number` |
| **Default** | `0` |



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
| **Default** | `this.rangeId` |



### pin

| | |
| --- | --- |
| **Description** | `true`の場合、ノブを押したときに整数値のピンが表示されます。 |
| **Attribute** | `pin` |
| **Type** | `boolean` |
| **Default** | `false` |



### pinFormatter

| | |
| --- | --- |
| **Description** | ピンのテキストをフォーマットするためのコールバック。デフォルトでは、ピンのテキストは `Math.round(value)` に設定されます。  コールバック内から `this` にアクセスする必要がある場合は https://ionicframework.com/docs/troubleshooting/runtime#accessing-this を参照してください。 |
| **Attribute** | `pin-formatter` |
| **Type** | `(value: number) => string \| number` |
| **Default** | `(value: number): number => Math.round(value)` |



### snaps

| | |
| --- | --- |
| **Description** | `true`の場合、ノブはステッププロパティの値に基づいて等間隔に配置されたティックマークにスナップします。 |
| **Attribute** | `snaps` |
| **Type** | `boolean` |
| **Default** | `false` |



### step

| | |
| --- | --- |
| **Description** | 値の粒度を指定します。 |
| **Attribute** | `step` |
| **Type** | `number` |
| **Default** | `1` |



### ticks

| | |
| --- | --- |
| **Description** | `true`の場合、ステップの値に基づいてティックマークを表示します。snaps`が `true` の場合のみ適用される。 |
| **Attribute** | `ticks` |
| **Type** | `boolean` |
| **Default** | `true` |



### value

| | |
| --- | --- |
| **Description** | 範囲の値です。 |
| **Attribute** | `value` |
| **Type** | `number \| { lower: number; upper: number; }` |
| **Default** | `0` |



## Events

| Name | Description |
| --- | --- |
| `ionBlur` | レンジの焦点が合わなくなったときに発行されます。 |
| `ionChange` | ionChange`イベントは`<ion-range>`要素に対して、ユーザがその要素の値を変更したときに発生します。 ・ユーザがドラッグした後にノブを離したとき ・ユーザがキーボードの矢印でノブを移動したとき このイベントはプログラムで`value`プロパティを設定したときには発生しません。 |
| `ionFocus` | レンジのフォーカスが合ったときに発行されます。 |
| `ionInput` | `ionInput`イベントは、`<ion-range>`要素に対して、値が変更されたときに発生するイベントです。`ionChange`とは異なり、`ionInput`はユーザがノブをドラッグしている間、継続して発生します。 |
| `ionKnobMoveEnd` | マウスドラッグ、タッチジェスチャー、キーボード操作など、ユーザーが範囲ノブの移動を終了したときに発行されます。 |
| `ionKnobMoveStart` | マウスドラッグ、タッチジェスチャー、キーボード操作など、ユーザーがレンジノブの移動を開始したときに発行されます。 |


## CSS Shadow Parts

| Name | Description |
| --- | --- |
| `bar` | バーの非アクティブな部分。 |
| `bar-active` | バーのアクティブな部分です。 |
| `knob` | 範囲をドラッグする際に使用するハンドル。 |
| `label` | 範囲を表すラベルテキスト。 |
| `pin` | ノブの上に表示されるカウンターです。 |
| `tick` | 非アクティブなティックマークです。 |
| `tick-active` | アクティブなティックマークです。 |


## CSS Custom Properties

| Name | Description |
| --- | --- |
| `--bar-background` | レンジバーの背景 |
| `--bar-background` | レンジバーの背景 |
| `--bar-background-active` | アクティブレンジバーの背景 |
| `--bar-background-active` | アクティブレンジバーの背景 |
| `--bar-border-radius` | レンジバーのボーダー半径 |
| `--bar-border-radius` | レンジバーのボーダー半径 |
| `--bar-height` | レンジバーの高さ |
| `--bar-height` | レンジバーの高さ |
| `--height` | レンジの高さ |
| `--height` | レンジの高さ |
| `--knob-background` | レンジノブの背景 |
| `--knob-background` | レンジノブの背景 |
| `--knob-border-radius` | レンジツマミのボーダー半径 |
| `--knob-border-radius` | レンジツマミのボーダー半径 |
| `--knob-box-shadow` | レンジノブのボックスシャドウ |
| `--knob-box-shadow` | レンジノブのボックスシャドウ |
| `--knob-size` | レンジツマミの大きさ |
| `--knob-size` | レンジツマミの大きさ |
| `--pin-background` | レンジピンの背景（MD mode時のみ有効） |
| `--pin-background` | レンジピンの背景（MD mode時のみ有効） |
| `--pin-color` | レンジピンの色（MD mode時のみ有効） |
| `--pin-color` | レンジピンの色（MD mode時のみ有効） |


## Slots

| Name | Description |
| --- | --- |
| `end` | コンテンツは、LTRでは範囲スライダーの右側に、RTLでは左側に配置されます。 |
| `label` | 範囲に関連付けるラベルテキスト。`"labelPlacement`"プロパティを使用して、ラベルが範囲に対してどの位置に配置されるかを制御します。 |
| `start` | コンテンツは、LTRでは範囲スライダーの左側に、RTLでは右側に配置されます。 |

