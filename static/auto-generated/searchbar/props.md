

### animated 

| | |
| --- | --- |
| **Description** | If `true`, enable searchbar animation.<br /><br />自動翻訳: `true`の場合、検索バーのアニメーションを有効にする。 |
| **Attribute** | `animated` |
| **Type** | `boolean` |
| **Default** | `false` |



### autocomplete 

| | |
| --- | --- |
| **Description** | Set the input's autocomplete property.<br /><br />自動翻訳: 入力のオートコンプリートプロパティを設定します。 |
| **Attribute** | `autocomplete` |
| **Type** | `"name" ｜ "email" ｜ "tel" ｜ "url" ｜ "on" ｜ "off" ｜ "honorific-prefix" ｜ "given-name" ｜ "additional-name" ｜ "family-name" ｜ "honorific-suffix" ｜ "nickname" ｜ "username" ｜ "new-password" ｜ "current-password" ｜ "one-time-code" ｜ "organization-title" ｜ "organization" ｜ "street-address" ｜ "address-line1" ｜ "address-line2" ｜ "address-line3" ｜ "address-level4" ｜ "address-level3" ｜ "address-level2" ｜ "address-level1" ｜ "country" ｜ "country-name" ｜ "postal-code" ｜ "cc-name" ｜ "cc-given-name" ｜ "cc-additional-name" ｜ "cc-family-name" ｜ "cc-number" ｜ "cc-exp" ｜ "cc-exp-month" ｜ "cc-exp-year" ｜ "cc-csc" ｜ "cc-type" ｜ "transaction-currency" ｜ "transaction-amount" ｜ "language" ｜ "bday" ｜ "bday-day" ｜ "bday-month" ｜ "bday-year" ｜ "sex" ｜ "tel-country-code" ｜ "tel-national" ｜ "tel-area-code" ｜ "tel-local" ｜ "tel-extension" ｜ "impp" ｜ "photo"` |
| **Default** | `'off'` |



### autocorrect 

| | |
| --- | --- |
| **Description** | Set the input's autocorrect property.<br /><br />自動翻訳: 入力のオートコレクトプロパティを設定します。 |
| **Attribute** | `autocorrect` |
| **Type** | `"off" ｜ "on"` |
| **Default** | `'off'` |



### cancelButtonIcon 

| | |
| --- | --- |
| **Description** | Set the cancel button icon. Only applies to `md` mode. Defaults to `arrow-back-sharp`.<br /><br />自動翻訳: キャンセルボタンのアイコンを設定する。md`モードのみに適用されます。デフォルトは `arrow-back-sharp` です。 |
| **Attribute** | `cancel-button-icon` |
| **Type** | `string` |
| **Default** | `config.get('backButtonIcon', arrowBackSharp) as string` |



### cancelButtonText 

| | |
| --- | --- |
| **Description** | Set the the cancel button text. Only applies to `ios` mode.<br /><br />自動翻訳: キャンセルボタンのテキストを設定します。ios`モードのみ適用されます。 |
| **Attribute** | `cancel-button-text` |
| **Type** | `string` |
| **Default** | `'Cancel'` |



### clearIcon 

| | |
| --- | --- |
| **Description** | Set the clear icon. Defaults to `close-circle` for `ios` and `close-sharp` for `md`.<br /><br />自動翻訳: クリアアイコンを設定する。デフォルトは `ios` の場合は `close-circle` 、`md` の場合は `close-sharp` です。 |
| **Attribute** | `clear-icon` |
| **Type** | `string ｜ undefined` |
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
| **Default** | `250` |



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



### mode 

| | |
| --- | --- |
| **Description** | The mode determines which platform styles to use.<br /><br />自動翻訳: モードは、どのプラットフォームのスタイルを使用するかを決定します。 |
| **Attribute** | `mode` |
| **Type** | `"ios" ｜ "md"` |
| **Default** | `undefined` |



### placeholder 

| | |
| --- | --- |
| **Description** | Set the input's placeholder. `placeholder` can accept either plaintext or HTML as a string. To display characters normally reserved for HTML, they must be escaped. For example `<Ionic>` would become `&lt;Ionic&gt;`<br /><br />For more information: [Security Documentation](https://ionicframework.com/docs/faq/security)<br /><br />自動翻訳: 入力のプレースホルダーを設定します。 `placeholder` には、文字列としてプレーンテキストまたはHTMLのいずれかを指定することができます。通常HTML用に予約されている文字を表示するには、エスケープする必要があります。例えば `<Ionic>` は `&lt;Ionic&gt;` になります。詳細はこちら。[セキュリティ・ドキュメンテーション](https://ionicframework.com/docs/faq/security) |
| **Attribute** | `placeholder` |
| **Type** | `string` |
| **Default** | `'Search'` |



### searchIcon 

| | |
| --- | --- |
| **Description** | The icon to use as the search icon. Defaults to `search-outline` in `ios` mode and `search-sharp` in `md` mode.<br /><br />自動翻訳: 検索アイコンとして使用するアイコンです。デフォルトは `ios` モードでは `search-outline` 、`md` モードでは `search-sharp` である。 |
| **Attribute** | `search-icon` |
| **Type** | `string ｜ undefined` |
| **Default** | `undefined` |



### showCancelButton 

| | |
| --- | --- |
| **Description** | Sets the behavior for the cancel button. Defaults to `"never"`. Setting to `"focus"` shows the cancel button on focus. Setting to `"never"` hides the cancel button. Setting to `"always"` shows the cancel button regardless of focus state.<br /><br />自動翻訳: キャンセルボタンに関する動作を設定する。デフォルトは `"never"` です。focus"` に設定すると、フォーカスが当たったときにキャンセルボタンを表示します。never"`に設定すると、キャンセルボタンを非表示にする。always"` に設定すると、フォーカスの状態に関係なくキャンセルボタンを表示する。 |
| **Attribute** | `show-cancel-button` |
| **Type** | `"always" ｜ "focus" ｜ "never"` |
| **Default** | `'never'` |



### showClearButton 

| | |
| --- | --- |
| **Description** | Sets the behavior for the clear button. Defaults to `"focus"`. Setting to `"focus"` shows the clear button on focus if the input is not empty. Setting to `"never"` hides the clear button. Setting to `"always"` shows the clear button regardless of focus state, but only if the input is not empty.<br /><br />自動翻訳: クリアボタンに関する動作を設定する。デフォルトは `"focus"` です。focus"`に設定すると、入力が空でない場合、フォーカス時にクリアボタンを表示します。never"`に設定すると、クリアボタンを非表示にします。always"`に設定すると、フォーカスの状態に関係なくクリアボタンを表示するが、入力が空でない場合にのみクリアボタンを表示する。 |
| **Attribute** | `show-clear-button` |
| **Type** | `"always" ｜ "focus" ｜ "never"` |
| **Default** | `'always'` |



### spellcheck 

| | |
| --- | --- |
| **Description** | If `true`, enable spellcheck on the input.<br /><br />自動翻訳: `true`の場合、入力のスペルチェックを有効にする。 |
| **Attribute** | `spellcheck` |
| **Type** | `boolean` |
| **Default** | `false` |



### type 

| | |
| --- | --- |
| **Description** | Set the type of the input.<br /><br />自動翻訳: 入力の種類を設定します。 |
| **Attribute** | `type` |
| **Type** | `"email" ｜ "number" ｜ "password" ｜ "search" ｜ "tel" ｜ "text" ｜ "url"` |
| **Default** | `'search'` |



### value 

| | |
| --- | --- |
| **Description** | the value of the searchbar.<br /><br />自動翻訳: 検索バーの値。 |
| **Attribute** | `value` |
| **Type** | `null ｜ string ｜ undefined` |
| **Default** | `''` |

