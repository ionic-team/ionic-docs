

### autoGrow 

| | |
| --- | --- |
| **Description** | If `true`, the textarea container will grow and shrink based on the contents of the textarea.<br /><br />自動翻訳: `true`の場合、textareaコンテナはtextareaの内容に応じて拡大・縮小する。 |
| **Attribute** | `auto-grow` |
| **Type** | `boolean` |
| **Default** | `false` |



### autocapitalize 

| | |
| --- | --- |
| **Description** | Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user. Available options: `"off"`, `"none"`, `"on"`, `"sentences"`, `"words"`, `"characters"`.<br /><br />自動翻訳: テキスト値がユーザーによって入力／編集される際に、自動的に大文字にするかどうか、またどのようにするかについて示します。利用可能なオプションoff"`, `"none"`, `"on"`, `"sentences"`, `"words"`, `"characters"`. |
| **Attribute** | `autocapitalize` |
| **Type** | `string` |
| **Default** | `'none'` |



### autofocus 

| | |
| --- | --- |
| **Description** | This Boolean attribute lets you specify that a form control should have input focus when the page loads.<br /><br />自動翻訳: この Boolean 属性により、ページロード時にフォームコントロールに入力フォーカスが当たるように指定することができます。 |
| **Attribute** | `autofocus` |
| **Type** | `boolean` |
| **Default** | `false` |



### clearOnEdit 

| | |
| --- | --- |
| **Description** | If `true`, the value will be cleared after focus upon edit. Defaults to `true` when `type` is `"password"`, `false` for all other types.<br /><br />自動翻訳: `true`の場合、編集時にフォーカスされた後、値がクリアされる。デフォルトは `type` が `"password"` のとき `true` で、それ以外のときは `false` です。 |
| **Attribute** | `clear-on-edit` |
| **Type** | `boolean` |
| **Default** | `false` |



### color 

| | |
| --- | --- |
| **Description** | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics).<br /><br />自動翻訳: アプリケーションのカラーパレットから使用する色を指定します。デフォルトのオプションは以下の通りです。一次色"`、二次色"`、三次色"`、成功色"`、警告色"`、危険色"`、明色"`、中色"`、暗色"`です．色に関する詳しい情報は [theming](/docs/theming/basics) を参照してください。 |
| **Attribute** | `color` |
| **Type** | `"danger" ｜ "dark" ｜ "light" ｜ "medium" ｜ "primary" ｜ "secondary" ｜ "success" ｜ "tertiary" ｜ "warning" ｜ string & Record<never, never> ｜ undefined` |
| **Default** | `undefined` |



### cols 

| | |
| --- | --- |
| **Description** | The visible width of the text control, in average character widths. If it is specified, it must be a positive integer.<br /><br />自動翻訳: テキストコントロールの可視幅を、平均文字幅で指定する。指定する場合は、正の整数である必要があります。 |
| **Attribute** | `cols` |
| **Type** | `number ｜ undefined` |
| **Default** | `undefined` |



### debounce 

| | |
| --- | --- |
| **Description** | Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke. This also impacts form bindings such as `ngModel` or `v-model`.<br /><br />自動翻訳: キーを押すたびに `ionChange` イベントが発生するまでの待ち時間をミリ秒単位で設定します。これは `ngModel` や `v-model` などのフォームバインディングにも影響します。 |
| **Attribute** | `debounce` |
| **Type** | `number` |
| **Default** | `0` |



### disabled 

| | |
| --- | --- |
| **Description** | If `true`, the user cannot interact with the textarea.<br /><br />自動翻訳: `true`の場合、ユーザはテキストエリアと対話することができない。 |
| **Attribute** | `disabled` |
| **Type** | `boolean` |
| **Default** | `false` |



### enterkeyhint 

| | |
| --- | --- |
| **Description** | A hint to the browser for which enter key to display. Possible values: `"enter"`, `"done"`, `"go"`, `"next"`, `"previous"`, `"search"`, and `"send"`.<br /><br />自動翻訳: どのエンターキーを表示するかのブラウザへのヒント。指定可能な値。enter"`, `"done"`, `"go"`, `"next"`, `"previous"`, `"search"`, and `"send"`. |
| **Attribute** | `enterkeyhint` |
| **Type** | `"done" ｜ "enter" ｜ "go" ｜ "next" ｜ "previous" ｜ "search" ｜ "send" ｜ undefined` |
| **Default** | `undefined` |



### inputmode 

| | |
| --- | --- |
| **Description** | A hint to the browser for which keyboard to display. Possible values: `"none"`, `"text"`, `"tel"`, `"url"`, `"email"`, `"numeric"`, `"decimal"`, and `"search"`.<br /><br />自動翻訳: どのキーボードを表示するかのブラウザへのヒント。指定可能な値。none"`, `"text"`, `"tel"`, `"url"`, `"email"`, `"numeric"`, `"decimal"`, and `"search"`. |
| **Attribute** | `inputmode` |
| **Type** | `"decimal" ｜ "email" ｜ "none" ｜ "numeric" ｜ "search" ｜ "tel" ｜ "text" ｜ "url" ｜ undefined` |
| **Default** | `undefined` |



### maxlength 

| | |
| --- | --- |
| **Description** | If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.<br /><br />自動翻訳: type属性の値が `text`, `email`, `search`, `password`, `tel`, または `url` の場合、この属性はユーザーが入力できる最大文字数を指定します。 |
| **Attribute** | `maxlength` |
| **Type** | `number ｜ undefined` |
| **Default** | `undefined` |



### minlength 

| | |
| --- | --- |
| **Description** | If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.<br /><br />自動翻訳: type属性の値が `text`, `email`, `search`, `password`, `tel`, または `url` の場合、この属性はユーザーが入力できる最小文字数を指定します。 |
| **Attribute** | `minlength` |
| **Type** | `number ｜ undefined` |
| **Default** | `undefined` |



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



### placeholder 

| | |
| --- | --- |
| **Description** | Instructional text that shows before the input has a value.<br /><br />自動翻訳: 入力が値を持つ前に表示される指示文。 |
| **Attribute** | `placeholder` |
| **Type** | `string ｜ undefined` |
| **Default** | `undefined` |



### readonly 

| | |
| --- | --- |
| **Description** | If `true`, the user cannot modify the value.<br /><br />自動翻訳: `true`の場合、ユーザーは値を変更することができない。 |
| **Attribute** | `readonly` |
| **Type** | `boolean` |
| **Default** | `false` |



### required 

| | |
| --- | --- |
| **Description** | If `true`, the user must fill in a value before submitting a form.<br /><br />自動翻訳: `true`の場合、ユーザーはフォームを送信する前に値を入力する必要があります。 |
| **Attribute** | `required` |
| **Type** | `boolean` |
| **Default** | `false` |



### rows 

| | |
| --- | --- |
| **Description** | The number of visible text lines for the control.<br /><br />自動翻訳: コントロールの可視テキスト行数。 |
| **Attribute** | `rows` |
| **Type** | `number ｜ undefined` |
| **Default** | `undefined` |



### spellcheck 

| | |
| --- | --- |
| **Description** | If `true`, the element will have its spelling and grammar checked.<br /><br />自動翻訳: `true`の場合、その要素のスペルチェックと文法チェックが行われる。 |
| **Attribute** | `spellcheck` |
| **Type** | `boolean` |
| **Default** | `false` |



### value 

| | |
| --- | --- |
| **Description** | The value of the textarea.<br /><br />自動翻訳: textareaの値です。 |
| **Attribute** | `value` |
| **Type** | `null ｜ string ｜ undefined` |
| **Default** | `''` |



### wrap 

| | |
| --- | --- |
| **Description** | Indicates how the control wraps text.<br /><br />自動翻訳: コントロールがテキストをどのように折り返すかを示す。 |
| **Attribute** | `wrap` |
| **Type** | `"hard" ｜ "off" ｜ "soft" ｜ undefined` |
| **Default** | `undefined` |

