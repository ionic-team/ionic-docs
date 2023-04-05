

### animated 

| | |
| --- | --- |
| **Description** | If `true`, the toast will animate.<br /><br />自動翻訳: `true`の場合、トーストはアニメーションします。 |
| **Attribute** | `animated` |
| **Type** | `boolean` |
| **Default** | `true` |



### buttons 

| | |
| --- | --- |
| **Description** | An array of buttons for the toast.<br /><br />自動翻訳: トースト用のボタンがずらり。 |
| **Attribute** | `undefined` |
| **Type** | `(string ｜ ToastButton)[] ｜ undefined` |
| **Default** | `undefined` |



### color 

| | |
| --- | --- |
| **Description** | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics).<br /><br />自動翻訳: アプリケーションのカラーパレットから使用する色を指定します。デフォルトのオプションは以下の通りです。一次色"`、二次色"`、三次色"`、成功色"`、警告色"`、危険色"`、明色"`、中色"`、暗色"`です．色に関する詳しい情報は [theming](/docs/theming/basics) を参照してください。 |
| **Attribute** | `color` |
| **Type** | `"danger" ｜ "dark" ｜ "light" ｜ "medium" ｜ "primary" ｜ "secondary" ｜ "success" ｜ "tertiary" ｜ "warning" ｜ string & Record<never, never> ｜ undefined` |
| **Default** | `undefined` |



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
| **Description** | How many milliseconds to wait before hiding the toast. By default, it will show until `dismiss()` is called.<br /><br />自動翻訳: トーストを隠すまでに何ミリ秒待つかを指定します。デフォルトでは、`dismiss()`が呼ばれるまで表示されます。 |
| **Attribute** | `duration` |
| **Type** | `number` |
| **Default** | `config.getNumber('toastDuration', 0)` |



### enterAnimation 

| | |
| --- | --- |
| **Description** | Animation to use when the toast is presented.<br /><br />自動翻訳: 乾杯の音頭をとるときに使うアニメーションです。 |
| **Attribute** | `undefined` |
| **Type** | `((baseEl: any, opts?: any) => Animation) ｜ undefined` |
| **Default** | `undefined` |



### header 

| | |
| --- | --- |
| **Description** | Header to be shown in the toast.<br /><br />自動翻訳: トーストに表示されるヘッダー。 |
| **Attribute** | `header` |
| **Type** | `string ｜ undefined` |
| **Default** | `undefined` |



### htmlAttributes 

| | |
| --- | --- |
| **Description** | Additional attributes to pass to the toast.<br /><br />自動翻訳: トーストに渡す追加の属性。 |
| **Attribute** | `undefined` |
| **Type** | `undefined ｜ { [key: string]: any; }` |
| **Default** | `undefined` |



### icon 

| | |
| --- | --- |
| **Description** | The name of the icon to display, or the path to a valid SVG file. See `ion-icon`. https://ionic.io/ionicons<br /><br />自動翻訳: 表示するアイコンの名前、または有効なSVGファイルへのパスを指定する。ion-icon`を参照。https://ionic.io/ionicons |
| **Attribute** | `icon` |
| **Type** | `string ｜ undefined` |
| **Default** | `undefined` |



### keyboardClose 

| | |
| --- | --- |
| **Description** | If `true`, the keyboard will be automatically dismissed when the overlay is presented.<br /><br />自動翻訳: `true`の場合、オーバーレイが表示されたときにキーボードが自動的に解除されます。 |
| **Attribute** | `keyboard-close` |
| **Type** | `boolean` |
| **Default** | `false` |



### layout 

| | |
| --- | --- |
| **Description** | Defines how the message and buttons are laid out in the toast. 'baseline': The message and the buttons will appear on the same line. Message text may wrap within the message container. 'stacked': The buttons containers and message will stack on top of each other. Use this if you have long text in your buttons.<br /><br />自動翻訳: トーストのメッセージやボタンの配置を定義します。'baseline'を指定します。メッセージとボタンは同じ行に表示されます。メッセージテキストはメッセージコンテナ内で折り返すことができます。'stacked':ボタンコンテナとメッセージが重なるように表示されます。ボタンに長いテキストがある場合に使用します。 |
| **Attribute** | `layout` |
| **Type** | `"baseline" ｜ "stacked"` |
| **Default** | `'baseline'` |



### leaveAnimation 

| | |
| --- | --- |
| **Description** | Animation to use when the toast is dismissed.<br /><br />自動翻訳: トーストの解散時に使用するアニメーションです。 |
| **Attribute** | `undefined` |
| **Type** | `((baseEl: any, opts?: any) => Animation) ｜ undefined` |
| **Default** | `undefined` |



### message 

| | |
| --- | --- |
| **Description** | Message to be shown in the toast.<br /><br />自動翻訳: 乾杯の際に表示するメッセージ |
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



### position 

| | |
| --- | --- |
| **Description** | The position of the toast on the screen.<br /><br />自動翻訳: 画面上のトーストの位置です。 |
| **Attribute** | `position` |
| **Type** | `"bottom" ｜ "middle" ｜ "top"` |
| **Default** | `'bottom'` |



### translucent 

| | |
| --- | --- |
| **Description** | If `true`, the toast will be translucent. Only applies when the mode is `"ios"` and the device supports [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).<br /><br />自動翻訳: `true`の場合、トーストは半透明になります。モードが `"ios"` で、デバイスが [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility) をサポートしている場合にのみ適用されます。 |
| **Attribute** | `translucent` |
| **Type** | `boolean` |
| **Default** | `false` |

