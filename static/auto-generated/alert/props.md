

### animated 

| | |
| --- | --- |
| **Description** | If `true`, the alert will animate.<br /><br />自動翻訳: `true`の場合、アラートはアニメーションで表示されます。 |
| **Attribute** | `animated` |
| **Type** | `boolean` |
| **Default** | `true` |



### backdropDismiss 

| | |
| --- | --- |
| **Description** | If `true`, the alert will be dismissed when the backdrop is clicked.<br /><br />自動翻訳: `true`の場合、バックドロップがクリックされるとアラートが解除される。 |
| **Attribute** | `backdrop-dismiss` |
| **Type** | `boolean` |
| **Default** | `true` |



### buttons 

| | |
| --- | --- |
| **Description** | Array of buttons to be added to the alert.<br /><br />自動翻訳: アラートに追加されるボタンの配列。 |
| **Attribute** | `undefined` |
| **Type** | `(string ｜ AlertButton)[]` |
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
| **Description** | Animation to use when the alert is presented.<br /><br />自動翻訳: アラート提示時に使用するアニメーションです。 |
| **Attribute** | `undefined` |
| **Type** | `((baseEl: any, opts?: any) => Animation) ｜ undefined` |
| **Default** | `undefined` |



### header 

| | |
| --- | --- |
| **Description** | The main title in the heading of the alert.<br /><br />自動翻訳: アラートの見出しにあるメインタイトルです。 |
| **Attribute** | `header` |
| **Type** | `string ｜ undefined` |
| **Default** | `undefined` |



### htmlAttributes 

| | |
| --- | --- |
| **Description** | Additional attributes to pass to the alert.<br /><br />自動翻訳: アラートに渡す追加属性。 |
| **Attribute** | `undefined` |
| **Type** | `undefined ｜ { [key: string]: any; }` |
| **Default** | `undefined` |



### inputs 

| | |
| --- | --- |
| **Description** | Array of input to show in the alert.<br /><br />自動翻訳: アラートに表示する入力の配列。 |
| **Attribute** | `undefined` |
| **Type** | `AlertInput[]` |
| **Default** | `[]` |



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
| **Description** | Animation to use when the alert is dismissed.<br /><br />自動翻訳: アラートが解除されたときに使用するアニメーション。 |
| **Attribute** | `undefined` |
| **Type** | `((baseEl: any, opts?: any) => Animation) ｜ undefined` |
| **Default** | `undefined` |



### message 

| | |
| --- | --- |
| **Description** | The main message to be displayed in the alert. `message` can accept either plaintext or HTML as a string. To display characters normally reserved for HTML, they must be escaped. For example `<Ionic>` would become `&lt;Ionic&gt;`<br /><br />For more information: [Security Documentation](https://ionicframework.com/docs/faq/security)<br /><br />自動翻訳: アラートに表示されるメインメッセージ。 `message` には、文字列としてプレーンテキストまたはHTMLのいずれかを指定することができます。通常HTML用に予約されている文字を表示するには、エスケープする必要があります。例えば、`<Ionic>`は `&lt;Ionic&gt;` となります。[セキュリティ・ドキュメンテーション](https://ionicframework.com/docs/faq/security) |
| **Attribute** | `message` |
| **Type** | `IonicSafeString ｜ string ｜ undefined` |
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
| **Description** | The subtitle in the heading of the alert. Displayed under the title.<br /><br />自動翻訳: アラートの見出しにあるサブタイトルです。タイトルの下に表示されます。 |
| **Attribute** | `sub-header` |
| **Type** | `string ｜ undefined` |
| **Default** | `undefined` |



### translucent 

| | |
| --- | --- |
| **Description** | If `true`, the alert will be translucent. Only applies when the mode is `"ios"` and the device supports [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).<br /><br />自動翻訳: `true`の場合、アラートは半透明になります。モードが `"ios"` で、デバイスが [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility) をサポートしている場合にのみ適用されます。 |
| **Attribute** | `translucent` |
| **Type** | `boolean` |
| **Default** | `false` |

