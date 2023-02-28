

### autoGrow 

| | |
| --- | --- |
| **Description** | If `true`, the textarea container will grow and shrink based on the contents of the textarea. |
| **Attribute** | `auto-grow` |
| **Type** | `boolean` |
| **Default** | `false` |



### autocapitalize 

| | |
| --- | --- |
| **Description** | Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user. Available options: `"off"`, `"none"`, `"on"`, `"sentences"`, `"words"`, `"characters"`. |
| **Attribute** | `autocapitalize` |
| **Type** | `string` |
| **Default** | `'none'` |



### autofocus 

| | |
| --- | --- |
| **Description** | This Boolean attribute lets you specify that a form control should have input focus when the page loads. |
| **Attribute** | `autofocus` |
| **Type** | `boolean` |
| **Default** | `false` |



### clearOnEdit 

| | |
| --- | --- |
| **Description** | If `true`, the value will be cleared after focus upon edit. Defaults to `true` when `type` is `"password"`, `false` for all other types. |
| **Attribute** | `clear-on-edit` |
| **Type** | `boolean` |
| **Default** | `false` |



### color 

| | |
| --- | --- |
| **Description** | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). |
| **Attribute** | `color` |
| **Type** | `"danger" ｜ "dark" ｜ "light" ｜ "medium" ｜ "primary" ｜ "secondary" ｜ "success" ｜ "tertiary" ｜ "warning" ｜ string & Record<never, never> ｜ undefined` |
| **Default** | `undefined` |



### cols 

| | |
| --- | --- |
| **Description** | The visible width of the text control, in average character widths. If it is specified, it must be a positive integer. |
| **Attribute** | `cols` |
| **Type** | `number ｜ undefined` |
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
| **Description** | If `true`, the user cannot interact with the textarea. |
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



### maxlength 

| | |
| --- | --- |
| **Description** | If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter. |
| **Attribute** | `maxlength` |
| **Type** | `number ｜ undefined` |
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



### name 

| | |
| --- | --- |
| **Description** | The name of the control, which is submitted with the form data. |
| **Attribute** | `name` |
| **Type** | `string` |
| **Default** | `this.inputId` |



### placeholder 

| | |
| --- | --- |
| **Description** | Instructional text that shows before the input has a value. |
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



### rows 

| | |
| --- | --- |
| **Description** | The number of visible text lines for the control. |
| **Attribute** | `rows` |
| **Type** | `number ｜ undefined` |
| **Default** | `undefined` |



### spellcheck 

| | |
| --- | --- |
| **Description** | If `true`, the element will have its spelling and grammar checked. |
| **Attribute** | `spellcheck` |
| **Type** | `boolean` |
| **Default** | `false` |



### value 

| | |
| --- | --- |
| **Description** | The value of the textarea. |
| **Attribute** | `value` |
| **Type** | `null ｜ string ｜ undefined` |
| **Default** | `''` |



### wrap 

| | |
| --- | --- |
| **Description** | Indicates how the control wraps text. |
| **Attribute** | `wrap` |
| **Type** | `"hard" ｜ "off" ｜ "soft" ｜ undefined` |
| **Default** | `undefined` |

