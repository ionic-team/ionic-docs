

### checked 

| | |
| --- | --- |
| **Description** | If `true`, the toggle is selected.<br /><br />自動翻訳: `true`の場合、トグルが選択されます。 |
| **Attribute** | `checked` |
| **Type** | `boolean` |
| **Default** | `false` |



### color 

| | |
| --- | --- |
| **Description** | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics).<br /><br />自動翻訳: アプリケーションのカラーパレットから使用する色を指定します。デフォルトのオプションは以下の通りです。一次色"`、二次色"`、三次色"`、成功色"`、警告色"`、危険色"`、明色"`、中色"`、暗色"`です．色に関する詳しい情報は [theming](/docs/theming/basics) を参照してください。 |
| **Attribute** | `color` |
| **Type** | `"danger" ｜ "dark" ｜ "light" ｜ "medium" ｜ "primary" ｜ "secondary" ｜ "success" ｜ "tertiary" ｜ "warning" ｜ string & Record<never, never> ｜ undefined` |
| **Default** | `undefined` |



### disabled 

| | |
| --- | --- |
| **Description** | If `true`, the user cannot interact with the toggle.<br /><br />自動翻訳: `true`の場合、ユーザーはトグルを操作することができない。 |
| **Attribute** | `disabled` |
| **Type** | `boolean` |
| **Default** | `false` |



### enableOnOffLabels 

| | |
| --- | --- |
| **Description** | Enables the on/off accessibility switch labels within the toggle.<br /><br />自動翻訳: トグル内のオン／オフアクセシビリティスイッチラベルを有効にします。 |
| **Attribute** | `enable-on-off-labels` |
| **Type** | `boolean ｜ undefined` |
| **Default** | `config.get('toggleOnOffLabels')` |



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
| **Default** | `this.inputId` |



### value 

| | |
| --- | --- |
| **Description** | The value of the toggle does not mean if it's checked or not, use the `checked` property for that.<br /><br />The value of a toggle is analogous to the value of a `<input type="checkbox">`, it's only used when the toggle participates in a native `<form>`.<br /><br />自動翻訳: トグルの値は、チェックされているかどうかを意味するものではありません。  トグルの値は `<input type="checkbox">` の値に類似しており、トグルがネイティブの `<form>` に参加する場合にのみ使用されます。 |
| **Attribute** | `value` |
| **Type** | `null ｜ string ｜ undefined` |
| **Default** | `'on'` |

