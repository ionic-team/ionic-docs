

### activeBarStart 

| | |
| --- | --- |
| **Description** | The start position of the range active bar. This feature is only available with a single knob (dualKnobs="false"). Valid values are greater than or equal to the min value and less than or equal to the max value.<br /><br />自動翻訳: レンジアクティブバーの開始位置です。この機能は、ノブが1つの場合のみ有効です（dualKnobs="false"）。有効な値は、min値以上、max値以下です。 |
| **Attribute** | `active-bar-start` |
| **Type** | `number ｜ undefined` |
| **Default** | `undefined` |



### color 

| | |
| --- | --- |
| **Description** | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics).<br /><br />自動翻訳: アプリケーションのカラーパレットから使用する色を指定します。デフォルトのオプションは以下の通りです。一次色"`、二次色"`、三次色"`、成功色"`、警告色"`、危険色"`、明色"`、中色"`、暗色"`です．色に関する詳しい情報は [theming](/docs/theming/basics) を参照してください。 |
| **Attribute** | `color` |
| **Type** | `"danger" ｜ "dark" ｜ "light" ｜ "medium" ｜ "primary" ｜ "secondary" ｜ "success" ｜ "tertiary" ｜ "warning" ｜ string & Record<never, never> ｜ undefined` |
| **Default** | `undefined` |



### debounce 

| | |
| --- | --- |
| **Description** | How long, in milliseconds, to wait to trigger the `ionChange` event after each change in the range value. This also impacts form bindings such as `ngModel` or `v-model`.<br /><br />自動翻訳: 範囲の値が変化するたびに `ionChange` イベントを起動するまでの待ち時間をミリ秒単位で指定します。これは `ngModel` や `v-model` のようなフォームバインディングにも影響します。 |
| **Attribute** | `debounce` |
| **Type** | `number` |
| **Default** | `0` |



### disabled 

| | |
| --- | --- |
| **Description** | If `true`, the user cannot interact with the range.<br /><br />自動翻訳: `true`の場合、ユーザは範囲と対話することができない。 |
| **Attribute** | `disabled` |
| **Type** | `boolean` |
| **Default** | `false` |



### dualKnobs 

| | |
| --- | --- |
| **Description** | Show two knobs.<br /><br />自動翻訳: 2つのノブを表示する。 |
| **Attribute** | `dual-knobs` |
| **Type** | `boolean` |
| **Default** | `false` |



### max 

| | |
| --- | --- |
| **Description** | Maximum integer value of the range.<br /><br />自動翻訳: 範囲の最大整数値。 |
| **Attribute** | `max` |
| **Type** | `number` |
| **Default** | `100` |



### min 

| | |
| --- | --- |
| **Description** | Minimum integer value of the range.<br /><br />自動翻訳: 範囲の最小の整数値。 |
| **Attribute** | `min` |
| **Type** | `number` |
| **Default** | `0` |



### mode 

| | |
| --- | --- |
| **Description** | The mode determines which platform styles to use.<br /><br />自動翻訳: モードは、どのプラットフォームのスタイルを使用するかを決定します。 |
| **Attribute** | `mode` |
| **Type** | `"ios" ｜ "md"` |
| **Default** | `undefined` |



### name 

| | |
| --- | --- |
| **Description** | The name of the control, which is submitted with the form data.<br /><br />自動翻訳: フォームデータとともに送信されるコントロールの名前。 |
| **Attribute** | `name` |
| **Type** | `string` |
| **Default** | `''` |



### pin 

| | |
| --- | --- |
| **Description** | If `true`, a pin with integer value is shown when the knob is pressed.<br /><br />自動翻訳: `true`の場合、ノブを押したときに整数値のピンが表示されます。 |
| **Attribute** | `pin` |
| **Type** | `boolean` |
| **Default** | `false` |



### pinFormatter 

| | |
| --- | --- |
| **Description** | A callback used to format the pin text. By default the pin text is set to `Math.round(value)`.<br /><br />自動翻訳: ピンのテキストをフォーマットするために使用されるコールバックです。デフォルトでは、ピンのテキストは `Math.round(value)` に設定されます。 |
| **Attribute** | `undefined` |
| **Type** | `(value: number) => string ｜ number` |
| **Default** | `(value: number): number => Math.round(value)` |



### snaps 

| | |
| --- | --- |
| **Description** | If `true`, the knob snaps to tick marks evenly spaced based on the step property value.<br /><br />自動翻訳: `true`の場合、ノブはステッププロパティの値に基づいて等間隔に配置されたティックマークにスナップします。 |
| **Attribute** | `snaps` |
| **Type** | `boolean` |
| **Default** | `false` |



### step 

| | |
| --- | --- |
| **Description** | Specifies the value granularity.<br /><br />自動翻訳: 値の粒度を指定する。 |
| **Attribute** | `step` |
| **Type** | `number` |
| **Default** | `1` |



### ticks 

| | |
| --- | --- |
| **Description** | If `true`, tick marks are displayed based on the step value. Only applies when `snaps` is `true`.<br /><br />自動翻訳: `true`の場合、ステップの値に基づいてティックマークを表示する。snaps`が `true` の場合のみ適用される。 |
| **Attribute** | `ticks` |
| **Type** | `boolean` |
| **Default** | `true` |



### value 

| | |
| --- | --- |
| **Description** | the value of the range.<br /><br />自動翻訳: 範囲の値です。 |
| **Attribute** | `value` |
| **Type** | `number ｜ { lower: number; upper: number; }` |
| **Default** | `0` |

