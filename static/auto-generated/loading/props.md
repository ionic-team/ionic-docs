

### animated 

| | |
| --- | --- |
| **Description** | If `true`, the loading indicator will animate.<br /><br />自動翻訳: `true`の場合、ロードインジケータをアニメーションで表示します。 |
| **Attribute** | `animated` |
| **Type** | `boolean` |
| **Default** | `true` |



### backdropDismiss 

| | |
| --- | --- |
| **Description** | If `true`, the loading indicator will be dismissed when the backdrop is clicked.<br /><br />自動翻訳: `true`の場合、バックドロップがクリックされたときにローディングインジケータが解除される。 |
| **Attribute** | `backdrop-dismiss` |
| **Type** | `boolean` |
| **Default** | `false` |



### cssClass 

| | |
| --- | --- |
| **Description** | Additional classes to apply for custom CSS. If multiple classes are provided they should be separated by spaces.<br /><br />自動翻訳: カスタムCSSに適用する追加のクラス。複数のクラスを指定する場合は、スペースで区切る必要があります。 |
| **Attribute** | `css-class` |
| **Type** | `string ｜ string[] ｜ undefined` |
| **Default** | `undefined` |



### duration 

| | |
| --- | --- |
| **Description** | Number of milliseconds to wait before dismissing the loading indicator.<br /><br />自動翻訳: ローディングインジケータを解除するまでの待ち時間（ミリ秒）。 |
| **Attribute** | `duration` |
| **Type** | `number` |
| **Default** | `0` |



### enterAnimation 

| | |
| --- | --- |
| **Description** | Animation to use when the loading indicator is presented.<br /><br />自動翻訳: ローディングインジケータが表示されたときに使用するアニメーションです。 |
| **Attribute** | `undefined` |
| **Type** | `((baseEl: any, opts?: any) => Animation) ｜ undefined` |
| **Default** | `undefined` |



### htmlAttributes 

| | |
| --- | --- |
| **Description** | Additional attributes to pass to the loader.<br /><br />自動翻訳: ローダーに渡す追加属性。 |
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
| **Description** | Animation to use when the loading indicator is dismissed.<br /><br />自動翻訳: ローディングインジケータが解除されたときに使用するアニメーションです。 |
| **Attribute** | `undefined` |
| **Type** | `((baseEl: any, opts?: any) => Animation) ｜ undefined` |
| **Default** | `undefined` |



### message 

| | |
| --- | --- |
| **Description** | Optional text content to display in the loading indicator.<br /><br />自動翻訳: ロードインジケータに表示するテキストコンテンツは任意です。 |
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



### showBackdrop 

| | |
| --- | --- |
| **Description** | If `true`, a backdrop will be displayed behind the loading indicator.<br /><br />自動翻訳: `true`の場合、ロードインジケータの後ろにバックドロップが表示されます。 |
| **Attribute** | `show-backdrop` |
| **Type** | `boolean` |
| **Default** | `true` |



### spinner 

| | |
| --- | --- |
| **Description** | The name of the spinner to display.<br /><br />自動翻訳: 表示するスピナーの名前。 |
| **Attribute** | `spinner` |
| **Type** | `"bubbles" ｜ "circles" ｜ "circular" ｜ "crescent" ｜ "dots" ｜ "lines" ｜ "lines-sharp" ｜ "lines-sharp-small" ｜ "lines-small" ｜ null ｜ undefined` |
| **Default** | `undefined` |



### translucent 

| | |
| --- | --- |
| **Description** | If `true`, the loading indicator will be translucent. Only applies when the mode is `"ios"` and the device supports [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).<br /><br />自動翻訳: `true`の場合、ロードインジケータは半透明になります。モードが `"ios"` で、デバイスが [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility) をサポートしている場合にのみ適用されます。 |
| **Attribute** | `translucent` |
| **Type** | `boolean` |
| **Default** | `false` |

