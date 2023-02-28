

### animated 

| | |
| --- | --- |
| **Description** | If `true`, enable searchbar animation. |
| **Attribute** | `animated` |
| **Type** | `boolean` |
| **Default** | `false` |



### autocomplete 

| | |
| --- | --- |
| **Description** | Set the input's autocomplete property. |
| **Attribute** | `autocomplete` |
| **Type** | `"name" ｜ "email" ｜ "tel" ｜ "url" ｜ "on" ｜ "off" ｜ "honorific-prefix" ｜ "given-name" ｜ "additional-name" ｜ "family-name" ｜ "honorific-suffix" ｜ "nickname" ｜ "username" ｜ "new-password" ｜ "current-password" ｜ "one-time-code" ｜ "organization-title" ｜ "organization" ｜ "street-address" ｜ "address-line1" ｜ "address-line2" ｜ "address-line3" ｜ "address-level4" ｜ "address-level3" ｜ "address-level2" ｜ "address-level1" ｜ "country" ｜ "country-name" ｜ "postal-code" ｜ "cc-name" ｜ "cc-given-name" ｜ "cc-additional-name" ｜ "cc-family-name" ｜ "cc-number" ｜ "cc-exp" ｜ "cc-exp-month" ｜ "cc-exp-year" ｜ "cc-csc" ｜ "cc-type" ｜ "transaction-currency" ｜ "transaction-amount" ｜ "language" ｜ "bday" ｜ "bday-day" ｜ "bday-month" ｜ "bday-year" ｜ "sex" ｜ "tel-country-code" ｜ "tel-national" ｜ "tel-area-code" ｜ "tel-local" ｜ "tel-extension" ｜ "impp" ｜ "photo"` |
| **Default** | `'off'` |



### autocorrect 

| | |
| --- | --- |
| **Description** | Set the input's autocorrect property. |
| **Attribute** | `autocorrect` |
| **Type** | `"off" ｜ "on"` |
| **Default** | `'off'` |



### cancelButtonIcon 

| | |
| --- | --- |
| **Description** | Set the cancel button icon. Only applies to `md` mode. Defaults to `arrow-back-sharp`. |
| **Attribute** | `cancel-button-icon` |
| **Type** | `string` |
| **Default** | `config.get('backButtonIcon', arrowBackSharp) as string` |



### cancelButtonText 

| | |
| --- | --- |
| **Description** | Set the the cancel button text. Only applies to `ios` mode. |
| **Attribute** | `cancel-button-text` |
| **Type** | `string` |
| **Default** | `'Cancel'` |



### clearIcon 

| | |
| --- | --- |
| **Description** | Set the clear icon. Defaults to `close-circle` for `ios` and `close-sharp` for `md`. |
| **Attribute** | `clear-icon` |
| **Type** | `string ｜ undefined` |
| **Default** | `undefined` |



### color 

| | |
| --- | --- |
| **Description** | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). |
| **Attribute** | `color` |
| **Type** | `"danger" ｜ "dark" ｜ "light" ｜ "medium" ｜ "primary" ｜ "secondary" ｜ "success" ｜ "tertiary" ｜ "warning" ｜ string & Record<never, never> ｜ undefined` |
| **Default** | `undefined` |



### debounce 

| | |
| --- | --- |
| **Description** | Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke. This also impacts form bindings such as `ngModel` or `v-model`. |
| **Attribute** | `debounce` |
| **Type** | `number` |
| **Default** | `250` |



### disabled 

| | |
| --- | --- |
| **Description** | If `true`, the user cannot interact with the input. |
| **Attribute** | `disabled` |
| **Type** | `boolean` |
| **Default** | `false` |



### enterkeyhint 

| | |
| --- | --- |
| **Description** | A hint to the browser for which enter key to display. Possible values: `"enter"`, `"done"`, `"go"`, `"next"`, `"previous"`, `"search"`, and `"send"`. |
| **Attribute** | `enterkeyhint` |
| **Type** | `"done" ｜ "enter" ｜ "go" ｜ "next" ｜ "previous" ｜ "search" ｜ "send" ｜ undefined` |
| **Default** | `undefined` |



### inputmode 

| | |
| --- | --- |
| **Description** | A hint to the browser for which keyboard to display. Possible values: `"none"`, `"text"`, `"tel"`, `"url"`, `"email"`, `"numeric"`, `"decimal"`, and `"search"`. |
| **Attribute** | `inputmode` |
| **Type** | `"decimal" ｜ "email" ｜ "none" ｜ "numeric" ｜ "search" ｜ "tel" ｜ "text" ｜ "url" ｜ undefined` |
| **Default** | `undefined` |



### mode 

| | |
| --- | --- |
| **Description** | The mode determines which platform styles to use. |
| **Attribute** | `mode` |
| **Type** | `"ios" ｜ "md"` |
| **Default** | `undefined` |



### placeholder 

| | |
| --- | --- |
| **Description** | Set the input's placeholder. `placeholder` can accept either plaintext or HTML as a string. To display characters normally reserved for HTML, they must be escaped. For example `<Ionic>` would become `&lt;Ionic&gt;`<br /><br />For more information: [Security Documentation](https://ionicframework.com/docs/faq/security) |
| **Attribute** | `placeholder` |
| **Type** | `string` |
| **Default** | `'Search'` |



### searchIcon 

| | |
| --- | --- |
| **Description** | The icon to use as the search icon. Defaults to `search-outline` in `ios` mode and `search-sharp` in `md` mode. |
| **Attribute** | `search-icon` |
| **Type** | `string ｜ undefined` |
| **Default** | `undefined` |



### showCancelButton 

| | |
| --- | --- |
| **Description** | Sets the behavior for the cancel button. Defaults to `"never"`. Setting to `"focus"` shows the cancel button on focus. Setting to `"never"` hides the cancel button. Setting to `"always"` shows the cancel button regardless of focus state. |
| **Attribute** | `show-cancel-button` |
| **Type** | `"always" ｜ "focus" ｜ "never"` |
| **Default** | `'never'` |



### showClearButton 

| | |
| --- | --- |
| **Description** | Sets the behavior for the clear button. Defaults to `"focus"`. Setting to `"focus"` shows the clear button on focus if the input is not empty. Setting to `"never"` hides the clear button. Setting to `"always"` shows the clear button regardless of focus state, but only if the input is not empty. |
| **Attribute** | `show-clear-button` |
| **Type** | `"always" ｜ "focus" ｜ "never"` |
| **Default** | `'always'` |



### spellcheck 

| | |
| --- | --- |
| **Description** | If `true`, enable spellcheck on the input. |
| **Attribute** | `spellcheck` |
| **Type** | `boolean` |
| **Default** | `false` |



### type 

| | |
| --- | --- |
| **Description** | Set the type of the input. |
| **Attribute** | `type` |
| **Type** | `"email" ｜ "number" ｜ "password" ｜ "search" ｜ "tel" ｜ "text" ｜ "url"` |
| **Default** | `'search'` |



### value 

| | |
| --- | --- |
| **Description** | the value of the searchbar. |
| **Attribute** | `value` |
| **Type** | `null ｜ string ｜ undefined` |
| **Default** | `''` |

