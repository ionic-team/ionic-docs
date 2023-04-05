

### cancelText 

| | |
| --- | --- |
| **Description** | The text to display on the cancel button.<br /><br />自動翻訳: キャンセルボタンに表示するテキストです。 |
| **Attribute** | `cancel-text` |
| **Type** | `string` |
| **Default** | `'Cancel'` |



### compareWith 

| | |
| --- | --- |
| **Description** | A property name or function used to compare object values<br /><br />自動翻訳: オブジェクトの値を比較するために使用されるプロパティ名または関数。 |
| **Attribute** | `compare-with` |
| **Type** | `((currentValue: any, compareValue: any) => boolean) ｜ null ｜ string ｜ undefined` |
| **Default** | `undefined` |



### disabled 

| | |
| --- | --- |
| **Description** | If `true`, the user cannot interact with the select.<br /><br />自動翻訳: `true`の場合、ユーザはセレクトと対話することができない。 |
| **Attribute** | `disabled` |
| **Type** | `boolean` |
| **Default** | `false` |



### interface 

| | |
| --- | --- |
| **Description** | The interface the select should use: `action-sheet`, `popover` or `alert`.<br /><br />自動翻訳: selectが使用するインターフェース。action-sheet`, `popover` または `alert`. |
| **Attribute** | `interface` |
| **Type** | `"action-sheet" ｜ "alert" ｜ "popover"` |
| **Default** | `'alert'` |



### interfaceOptions 

| | |
| --- | --- |
| **Description** | Any additional options that the `alert`, `action-sheet` or `popover` interface can take. See the [ion-alert docs](./alert), the [ion-action-sheet docs](./action-sheet) and the [ion-popover docs](./popover) for the create options for each interface.<br /><br />Note: `interfaceOptions` will not override `inputs` or `buttons` with the `alert` interface.<br /><br />自動翻訳: alert`、`action-sheet`、`popover` インターフェースが取ることができる追加オプション。各インターフェイスの作成オプションについては、 [ion-alert docs](./alert), [ion-action-sheet docs](./action-sheet), [ion-popover docs](./popover) を参照してください。  注意: `interfaceOptions` は `alert` インターフェースで `inputs` や `buttons` をオーバーライドしません。 |
| **Attribute** | `interface-options` |
| **Type** | `any` |
| **Default** | `{}` |



### mode 

| | |
| --- | --- |
| **Description** | The mode determines which platform styles to use.<br /><br />自動翻訳: モードは、どのプラットフォームのスタイルを使用するかを決定します。 |
| **Attribute** | `mode` |
| **Type** | `"ios" ｜ "md"` |
| **Default** | `undefined` |



### multiple 

| | |
| --- | --- |
| **Description** | If `true`, the select can accept multiple values.<br /><br />自動翻訳: `true`の場合、selectは複数の値を受け入れることができる。 |
| **Attribute** | `multiple` |
| **Type** | `boolean` |
| **Default** | `false` |



### name 

| | |
| --- | --- |
| **Description** | The name of the control, which is submitted with the form data.<br /><br />自動翻訳: フォームデータとともに送信されるコントロールの名前。 |
| **Attribute** | `name` |
| **Type** | `string` |
| **Default** | `this.inputId` |



### okText 

| | |
| --- | --- |
| **Description** | The text to display on the ok button.<br /><br />自動翻訳: okボタンに表示するテキストです。 |
| **Attribute** | `ok-text` |
| **Type** | `string` |
| **Default** | `'OK'` |



### placeholder 

| | |
| --- | --- |
| **Description** | The text to display when the select is empty.<br /><br />自動翻訳: セレクトが空のときに表示するテキストです。 |
| **Attribute** | `placeholder` |
| **Type** | `string ｜ undefined` |
| **Default** | `undefined` |



### selectedText 

| | |
| --- | --- |
| **Description** | The text to display instead of the selected option's value.<br /><br />自動翻訳: 選択されたオプションの値の代わりに表示するテキストです。 |
| **Attribute** | `selected-text` |
| **Type** | `null ｜ string ｜ undefined` |
| **Default** | `undefined` |



### value 

| | |
| --- | --- |
| **Description** | the value of the select.<br /><br />自動翻訳: セレクトの値です。 |
| **Attribute** | `value` |
| **Type** | `any` |
| **Default** | `undefined` |

