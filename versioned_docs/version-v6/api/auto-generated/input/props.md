

### accept (deprecated)

| | |
| --- | --- |
| **Description** | This attribute is ignored. _Deprecated_  |
| **Attribute** | `accept` |
| **Type** | `string ｜ undefined` |
| **Default** | `undefined` |



### autocapitalize 

| | |
| --- | --- |
| **Description** | Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user. Available options: `"off"`, `"none"`, `"on"`, `"sentences"`, `"words"`, `"characters"`. |
| **Attribute** | `autocapitalize` |
| **Type** | `string` |
| **Default** | `'off'` |



### autocomplete 

| | |
| --- | --- |
| **Description** | Indicates whether the value of the control can be automatically completed by the browser. |
| **Attribute** | `autocomplete` |
| **Type** | `"name" ｜ "email" ｜ "tel" ｜ "url" ｜ "on" ｜ "off" ｜ "honorific-prefix" ｜ "given-name" ｜ "additional-name" ｜ "family-name" ｜ "honorific-suffix" ｜ "nickname" ｜ "username" ｜ "new-password" ｜ "current-password" ｜ "one-time-code" ｜ "organization-title" ｜ "organization" ｜ "street-address" ｜ "address-line1" ｜ "address-line2" ｜ "address-line3" ｜ "address-level4" ｜ "address-level3" ｜ "address-level2" ｜ "address-level1" ｜ "country" ｜ "country-name" ｜ "postal-code" ｜ "cc-name" ｜ "cc-given-name" ｜ "cc-additional-name" ｜ "cc-family-name" ｜ "cc-number" ｜ "cc-exp" ｜ "cc-exp-month" ｜ "cc-exp-year" ｜ "cc-csc" ｜ "cc-type" ｜ "transaction-currency" ｜ "transaction-amount" ｜ "language" ｜ "bday" ｜ "bday-day" ｜ "bday-month" ｜ "bday-year" ｜ "sex" ｜ "tel-country-code" ｜ "tel-national" ｜ "tel-area-code" ｜ "tel-local" ｜ "tel-extension" ｜ "impp" ｜ "photo"` |
| **Default** | `'off'` |



### autocorrect 

| | |
| --- | --- |
| **Description** | Whether auto correction should be enabled when the user is entering/editing the text value. |
| **Attribute** | `autocorrect` |
| **Type** | `"off" ｜ "on"` |
| **Default** | `'off'` |



### autofocus 

| | |
| --- | --- |
| **Description** | This Boolean attribute lets you specify that a form control should have input focus when the page loads. |
| **Attribute** | `autofocus` |
| **Type** | `boolean` |
| **Default** | `false` |



### clearInput 

| | |
| --- | --- |
| **Description** | If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input. |
| **Attribute** | `clear-input` |
| **Type** | `boolean` |
| **Default** | `false` |



### clearOnEdit 

| | |
| --- | --- |
| **Description** | If `true`, the value will be cleared after focus upon edit. Defaults to `true` when `type` is `"password"`, `false` for all other types. |
| **Attribute** | `clear-on-edit` |
| **Type** | `boolean ｜ undefined` |
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
| **Default** | `0` |



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



### max 

| | |
| --- | --- |
| **Description** | The maximum value, which must not be less than its minimum (min attribute) value. |
| **Attribute** | `max` |
| **Type** | `number ｜ string ｜ undefined` |
| **Default** | `undefined` |



### maxlength 

| | |
| --- | --- |
| **Description** | If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter. |
| **Attribute** | `maxlength` |
| **Type** | `number ｜ undefined` |
| **Default** | `undefined` |



### min 

| | |
| --- | --- |
| **Description** | The minimum value, which must not be greater than its maximum (max attribute) value. |
| **Attribute** | `min` |
| **Type** | `number ｜ string ｜ undefined` |
| **Default** | `undefined` |



### minlength 

| | |
| --- | --- |
| **Description** | If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter. |
| **Attribute** | `minlength` |
| **Type** | `number ｜ undefined` |
| **Default** | `undefined` |



### mode 

| | |
| --- | --- |
| **Description** | The mode determines which platform styles to use. |
| **Attribute** | `mode` |
| **Type** | `"ios" ｜ "md"` |
| **Default** | `undefined` |



### multiple 

| | |
| --- | --- |
| **Description** | If `true`, the user can enter more than one value. This attribute applies when the type attribute is set to `"email"`, otherwise it is ignored. |
| **Attribute** | `multiple` |
| **Type** | `boolean ｜ undefined` |
| **Default** | `undefined` |



### name 

| | |
| --- | --- |
| **Description** | The name of the control, which is submitted with the form data. |
| **Attribute** | `name` |
| **Type** | `string` |
| **Default** | `this.inputId` |



### pattern 

| | |
| --- | --- |
| **Description** | A regular expression that the value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, `"date"`, or `"password"`, otherwise it is ignored. When the type attribute is `"date"`, `pattern` will only be used in browsers that do not support the `"date"` input type natively. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date for more information. |
| **Attribute** | `pattern` |
| **Type** | `string ｜ undefined` |
| **Default** | `undefined` |



### placeholder 

| | |
| --- | --- |
| **Description** | Instructional text that shows before the input has a value. This property applies only when the `type` property is set to `"email"`, `"number"`, `"password"`, `"search"`, `"tel"`, `"text"`, or `"url"`, otherwise it is ignored. |
| **Attribute** | `placeholder` |
| **Type** | `string ｜ undefined` |
| **Default** | `undefined` |



### readonly 

| | |
| --- | --- |
| **Description** | If `true`, the user cannot modify the value. |
| **Attribute** | `readonly` |
| **Type** | `boolean` |
| **Default** | `false` |



### required 

| | |
| --- | --- |
| **Description** | If `true`, the user must fill in a value before submitting a form. |
| **Attribute** | `required` |
| **Type** | `boolean` |
| **Default** | `false` |



### size 

| | |
| --- | --- |
| **Description** | The initial size of the control. This value is in pixels unless the value of the type attribute is `"text"` or `"password"`, in which case it is an integer number of characters. This attribute applies only when the `type` attribute is set to `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, or `"password"`, otherwise it is ignored. |
| **Attribute** | `size` |
| **Type** | `number ｜ undefined` |
| **Default** | `undefined` |



### spellcheck 

| | |
| --- | --- |
| **Description** | If `true`, the element will have its spelling and grammar checked. |
| **Attribute** | `spellcheck` |
| **Type** | `boolean` |
| **Default** | `false` |



### step 

| | |
| --- | --- |
| **Description** | Works with the min and max attributes to limit the increments at which a value can be set. Possible values are: `"any"` or a positive floating point number. |
| **Attribute** | `step` |
| **Type** | `string ｜ undefined` |
| **Default** | `undefined` |



### type 

| | |
| --- | --- |
| **Description** | The type of control to display. The default type is text. |
| **Attribute** | `type` |
| **Type** | `"date" ｜ "datetime-local" ｜ "email" ｜ "month" ｜ "number" ｜ "password" ｜ "search" ｜ "tel" ｜ "text" ｜ "time" ｜ "url" ｜ "week"` |
| **Default** | `'text'` |



### value 

| | |
| --- | --- |
| **Description** | The value of the input. |
| **Attribute** | `value` |
| **Type** | `null ｜ number ｜ string ｜ undefined` |
| **Default** | `''` |

