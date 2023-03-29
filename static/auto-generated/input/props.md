

### accept (deprecated)

| | |
| --- | --- |
| **Description** | This attribute is ignored.<br /><br />自動翻訳: この属性は無視されます。 _Deprecated_  |
| **Attribute** | `accept` |
| **Type** | `string ｜ undefined` |
| **Default** | `undefined` |



### autocapitalize 

| | |
| --- | --- |
| **Description** | Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user. Available options: `"off"`, `"none"`, `"on"`, `"sentences"`, `"words"`, `"characters"`.<br /><br />自動翻訳: テキスト値がユーザーによって入力／編集される際に、自動的に大文字にするかどうか、またどのようにするかについて示します。利用可能なオプションoff"`, `"none"`, `"on"`, `"sentences"`, `"words"`, `"characters"`. |
| **Attribute** | `autocapitalize` |
| **Type** | `string` |
| **Default** | `'off'` |



### autocomplete 

| | |
| --- | --- |
| **Description** | Indicates whether the value of the control can be automatically completed by the browser.<br /><br />自動翻訳: コントロールの値が、ブラウザによって自動的に補完されるかどうかを示す。 |
| **Attribute** | `autocomplete` |
| **Type** | `"name" ｜ "email" ｜ "tel" ｜ "url" ｜ "on" ｜ "off" ｜ "honorific-prefix" ｜ "given-name" ｜ "additional-name" ｜ "family-name" ｜ "honorific-suffix" ｜ "nickname" ｜ "username" ｜ "new-password" ｜ "current-password" ｜ "one-time-code" ｜ "organization-title" ｜ "organization" ｜ "street-address" ｜ "address-line1" ｜ "address-line2" ｜ "address-line3" ｜ "address-level4" ｜ "address-level3" ｜ "address-level2" ｜ "address-level1" ｜ "country" ｜ "country-name" ｜ "postal-code" ｜ "cc-name" ｜ "cc-given-name" ｜ "cc-additional-name" ｜ "cc-family-name" ｜ "cc-number" ｜ "cc-exp" ｜ "cc-exp-month" ｜ "cc-exp-year" ｜ "cc-csc" ｜ "cc-type" ｜ "transaction-currency" ｜ "transaction-amount" ｜ "language" ｜ "bday" ｜ "bday-day" ｜ "bday-month" ｜ "bday-year" ｜ "sex" ｜ "tel-country-code" ｜ "tel-national" ｜ "tel-area-code" ｜ "tel-local" ｜ "tel-extension" ｜ "impp" ｜ "photo"` |
| **Default** | `'off'` |



### autocorrect 

| | |
| --- | --- |
| **Description** | Whether auto correction should be enabled when the user is entering/editing the text value.<br /><br />自動翻訳: ユーザーがテキスト値を入力/編集する際に、自動補正を有効にするかどうか。 |
| **Attribute** | `autocorrect` |
| **Type** | `"off" ｜ "on"` |
| **Default** | `'off'` |



### autofocus 

| | |
| --- | --- |
| **Description** | This Boolean attribute lets you specify that a form control should have input focus when the page loads.<br /><br />自動翻訳: この Boolean 属性により、ページロード時にフォームコントロールに入力フォーカスが当たるように指定することができます。 |
| **Attribute** | `autofocus` |
| **Type** | `boolean` |
| **Default** | `false` |



### clearInput 

| | |
| --- | --- |
| **Description** | If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.<br /><br />自動翻訳: `true`の場合、値があるときに入力にクリアアイコンが表示されます。これをクリックすると、入力がクリアされます。 |
| **Attribute** | `clear-input` |
| **Type** | `boolean` |
| **Default** | `false` |



### clearOnEdit 

| | |
| --- | --- |
| **Description** | If `true`, the value will be cleared after focus upon edit. Defaults to `true` when `type` is `"password"`, `false` for all other types.<br /><br />自動翻訳: `true`の場合、編集時にフォーカスされた後、値がクリアされる。デフォルトは `type` が `"password"` のとき `true` で、それ以外のときは `false` です。 |
| **Attribute** | `clear-on-edit` |
| **Type** | `boolean ｜ undefined` |
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
| **Description** | Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke. This also impacts form bindings such as `ngModel` or `v-model`.<br /><br />自動翻訳: キーを押すたびに `ionChange` イベントが発生するまでの待ち時間をミリ秒単位で設定します。これは `ngModel` や `v-model` などのフォームバインディングにも影響します。 |
| **Attribute** | `debounce` |
| **Type** | `number` |
| **Default** | `0` |



### disabled 

| | |
| --- | --- |
| **Description** | If `true`, the user cannot interact with the input.<br /><br />自動翻訳: `true`の場合、ユーザは入力と対話することができない。 |
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



### max 

| | |
| --- | --- |
| **Description** | The maximum value, which must not be less than its minimum (min attribute) value.<br /><br />自動翻訳: 最大値で、その最小値（min属性）より小さくてはならない。 |
| **Attribute** | `max` |
| **Type** | `number ｜ string ｜ undefined` |
| **Default** | `undefined` |



### maxlength 

| | |
| --- | --- |
| **Description** | If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.<br /><br />自動翻訳: type属性の値が `text`, `email`, `search`, `password`, `tel`, または `url` の場合、この属性はユーザーが入力できる最大文字数を指定します。 |
| **Attribute** | `maxlength` |
| **Type** | `number ｜ undefined` |
| **Default** | `undefined` |



### min 

| | |
| --- | --- |
| **Description** | The minimum value, which must not be greater than its maximum (max attribute) value.<br /><br />自動翻訳: 最小値で、その最大値（max属性）より大きくてはならない。 |
| **Attribute** | `min` |
| **Type** | `number ｜ string ｜ undefined` |
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



### multiple 

| | |
| --- | --- |
| **Description** | If `true`, the user can enter more than one value. This attribute applies when the type attribute is set to `"email"`, otherwise it is ignored.<br /><br />自動翻訳: `true`の場合、ユーザは複数の値を入力することができる。この属性は、type属性が `"email"` に設定されている場合に適用され、それ以外の場合は無視される。 |
| **Attribute** | `multiple` |
| **Type** | `boolean ｜ undefined` |
| **Default** | `undefined` |



### name 

| | |
| --- | --- |
| **Description** | The name of the control, which is submitted with the form data.<br /><br />自動翻訳: フォームデータとともに送信されるコントロールの名前。 |
| **Attribute** | `name` |
| **Type** | `string` |
| **Default** | `this.inputId` |



### pattern 

| | |
| --- | --- |
| **Description** | A regular expression that the value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, `"date"`, or `"password"`, otherwise it is ignored. When the type attribute is `"date"`, `pattern` will only be used in browsers that do not support the `"date"` input type natively. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date for more information.<br /><br />自動翻訳: 値をチェックするための正規表現。パターンは、部分的なものだけでなく、値全体にマッチする必要があります。title 属性を使って、ユーザーを助けるためにパターンを説明します。この属性は、type属性の値が `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, `"date"`, または `"password"` であるときに適用され、それ以外のときは無視されます。type 属性が `"date"` の場合、`pattern` は `"date"` 入力タイプをネイティブにサポートしないブラウザでのみ使用されます。詳しくは https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date を参照してください。 |
| **Attribute** | `pattern` |
| **Type** | `string ｜ undefined` |
| **Default** | `undefined` |



### placeholder 

| | |
| --- | --- |
| **Description** | Instructional text that shows before the input has a value. This property applies only when the `type` property is set to `"email"`, `"number"`, `"password"`, `"search"`, `"tel"`, `"text"`, or `"url"`, otherwise it is ignored.<br /><br />自動翻訳: 入力が値を持つ前に表示される指示テキスト。このプロパティは、`type`プロパティが `"email"`, `"number"`, `"password"`, `"search"`, `"tel"`, `"text"`, または `"url"` に設定されている場合にのみ適用され、それ以外は無視されます。 |
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



### size 

| | |
| --- | --- |
| **Description** | The initial size of the control. This value is in pixels unless the value of the type attribute is `"text"` or `"password"`, in which case it is an integer number of characters. This attribute applies only when the `type` attribute is set to `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, or `"password"`, otherwise it is ignored.<br /><br />自動翻訳: コントロールの初期サイズ。ただし、type属性の値が `"text"` または `"password"` である場合は、整数値の文字数である。この属性は、`type`属性が `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, または `"password"` に設定されている場合にのみ適用され、それ以外の場合は無視されます。 |
| **Attribute** | `size` |
| **Type** | `number ｜ undefined` |
| **Default** | `undefined` |



### spellcheck 

| | |
| --- | --- |
| **Description** | If `true`, the element will have its spelling and grammar checked.<br /><br />自動翻訳: `true`の場合、その要素のスペルチェックと文法チェックが行われる。 |
| **Attribute** | `spellcheck` |
| **Type** | `boolean` |
| **Default** | `false` |



### step 

| | |
| --- | --- |
| **Description** | Works with the min and max attributes to limit the increments at which a value can be set. Possible values are: `"any"` or a positive floating point number.<br /><br />自動翻訳: min属性、max属性と連携して、値を設定する際の増分を制限することができます。設定可能な値は以下の通りです。any"`または正の浮動小数点数。 |
| **Attribute** | `step` |
| **Type** | `string ｜ undefined` |
| **Default** | `undefined` |



### type 

| | |
| --- | --- |
| **Description** | The type of control to display. The default type is text.<br /><br />自動翻訳: 表示するコントロールの種類を指定します。デフォルトのタイプはテキストです。 |
| **Attribute** | `type` |
| **Type** | `"date" ｜ "datetime-local" ｜ "email" ｜ "month" ｜ "number" ｜ "password" ｜ "search" ｜ "tel" ｜ "text" ｜ "time" ｜ "url" ｜ "week"` |
| **Default** | `'text'` |



### value 

| | |
| --- | --- |
| **Description** | The value of the input.<br /><br />自動翻訳: 入力された値です。 |
| **Attribute** | `value` |
| **Type** | `null ｜ number ｜ string ｜ undefined` |
| **Default** | `''` |

