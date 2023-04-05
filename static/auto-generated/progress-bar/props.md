

### buffer 

| | |
| --- | --- |
| **Description** | If the buffer and value are smaller than 1, the buffer circles will show. The buffer should be between [0, 1].<br /><br />自動翻訳: バッファと値が1より小さい場合、バッファの円が表示されます。バッファは[0, 1]の間である必要があります。 |
| **Attribute** | `buffer` |
| **Type** | `number` |
| **Default** | `1` |



### color 

| | |
| --- | --- |
| **Description** | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics).<br /><br />自動翻訳: アプリケーションのカラーパレットから使用する色を指定します。デフォルトのオプションは以下の通りです。一次色"`、二次色"`、三次色"`、成功色"`、警告色"`、危険色"`、明色"`、中色"`、暗色"`です．色に関する詳しい情報は [theming](/docs/theming/basics) を参照してください。 |
| **Attribute** | `color` |
| **Type** | `"danger" ｜ "dark" ｜ "light" ｜ "medium" ｜ "primary" ｜ "secondary" ｜ "success" ｜ "tertiary" ｜ "warning" ｜ string & Record<never, never> ｜ undefined` |
| **Default** | `undefined` |



### mode 

| | |
| --- | --- |
| **Description** | The mode determines which platform styles to use.<br /><br />自動翻訳: モードは、どのプラットフォームのスタイルを使用するかを決定します。 |
| **Attribute** | `mode` |
| **Type** | `"ios" ｜ "md"` |
| **Default** | `undefined` |



### reversed 

| | |
| --- | --- |
| **Description** | If true, reverse the progress bar direction.<br /><br />自動翻訳: true の場合、プログレスバーの方向を反転させます。 |
| **Attribute** | `reversed` |
| **Type** | `boolean` |
| **Default** | `false` |



### type 

| | |
| --- | --- |
| **Description** | The state of the progress bar, based on if the time the process takes is known or not. Default options are: `"determinate"` (no animation), `"indeterminate"` (animate from left to right).<br /><br />自動翻訳: 処理にかかる時間が既知か否かに応じて、プログレスバーの状態を指定します。デフォルトのオプションは以下の通り。determinate"` (アニメーションなし), `"indeterminate"` (左から右へアニメーションする). |
| **Attribute** | `type` |
| **Type** | `"determinate" ｜ "indeterminate"` |
| **Default** | `'determinate'` |



### value 

| | |
| --- | --- |
| **Description** | The value determines how much of the active bar should display when the `type` is `"determinate"`. The value should be between [0, 1].<br /><br />自動翻訳: この値は、`type`が`"determinate"`である場合に、アクティブバーをどれだけ表示するかを決定するものである。値は [0, 1] の間であるべきです。 |
| **Attribute** | `value` |
| **Type** | `number` |
| **Default** | `0` |

