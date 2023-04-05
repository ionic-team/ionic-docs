

### animated 

| | |
| --- | --- |
| **Description** | If `true`, the action sheet will animate.<br /><br />自動翻訳: `true`の場合、アクションシートはアニメーションを行います。 |
| **Attribute** | `animated` |
| **Type** | `boolean` |
| **Default** | `true` |



### backdropDismiss 

| | |
| --- | --- |
| **Description** | If `true`, the action sheet will be dismissed when the backdrop is clicked.<br /><br />自動翻訳: `true`の場合、バックドロップがクリックされるとアクションシートが解除されます。 |
| **Attribute** | `backdrop-dismiss` |
| **Type** | `boolean` |
| **Default** | `true` |



### buttons 

| | |
| --- | --- |
| **Description** | An array of buttons for the action sheet.<br /><br />自動翻訳: アクションシートのボタンの配列です。 |
| **Attribute** | `undefined` |
| **Type** | `(string ｜ ActionSheetButton<any>)[]` |
| **Default** | `[]` |



### cssClass 

| | |
| --- | --- |
| **Description** | Additional classes to apply for custom CSS. If multiple classes are provided they should be separated by spaces.<br /><br />自動翻訳: カスタムCSSに適用する追加のクラス。複数のクラスを指定する場合は、スペースで区切る必要があります。 |
| **Attribute** | `css-class` |
| **Type** | `string ｜ string[] ｜ undefined` |
| **Default** | `undefined` |



### enterAnimation 

| | |
| --- | --- |
| **Description** | Animation to use when the action sheet is presented.<br /><br />自動翻訳: アクションシートの提示時に使用するアニメーションです。 |
| **Attribute** | `undefined` |
| **Type** | `((baseEl: any, opts?: any) => Animation) ｜ undefined` |
| **Default** | `undefined` |



### header 

| | |
| --- | --- |
| **Description** | Title for the action sheet.<br /><br />自動翻訳: アクションシートのタイトルです。 |
| **Attribute** | `header` |
| **Type** | `string ｜ undefined` |
| **Default** | `undefined` |



### htmlAttributes 

| | |
| --- | --- |
| **Description** | Additional attributes to pass to the action sheet.<br /><br />自動翻訳: アクションシートに渡す追加属性。 |
| **Attribute** | `undefined` |
| **Type** | `undefined ｜ { [key: string]: any; }` |
| **Default** | `undefined` |



### keyboardClose 

| | |
| --- | --- |
| **Description** | If `true`, the keyboard will be automatically dismissed when the overlay is presented.<br /><br />自動翻訳: `true`の場合、オーバーレイが表示されたときにキーボードが自動的に解除されます。 |
| **Attribute** | `keyboard-close` |
| **Type** | `boolean` |
| **Default** | `true` |



### leaveAnimation 

| | |
| --- | --- |
| **Description** | Animation to use when the action sheet is dismissed.<br /><br />自動翻訳: アクションシートが解除されたときに使用するアニメーションです。 |
| **Attribute** | `undefined` |
| **Type** | `((baseEl: any, opts?: any) => Animation) ｜ undefined` |
| **Default** | `undefined` |



### mode 

| | |
| --- | --- |
| **Description** | The mode determines which platform styles to use.<br /><br />自動翻訳: モードは、どのプラットフォームのスタイルを使用するかを決定します。 |
| **Attribute** | `mode` |
| **Type** | `"ios" ｜ "md"` |
| **Default** | `undefined` |



### subHeader 

| | |
| --- | --- |
| **Description** | Subtitle for the action sheet.<br /><br />自動翻訳: アクションシートのサブタイトルです。 |
| **Attribute** | `sub-header` |
| **Type** | `string ｜ undefined` |
| **Default** | `undefined` |



### translucent 

| | |
| --- | --- |
| **Description** | If `true`, the action sheet will be translucent. Only applies when the mode is `"ios"` and the device supports [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).<br /><br />自動翻訳: `true`の場合、アクションシートは半透明になります。モードが `"ios"` で、デバイスが [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility) をサポートしている場合にのみ適用されます。 |
| **Attribute** | `translucent` |
| **Type** | `boolean` |
| **Default** | `false` |

