

### animated 

| | |
| --- | --- |
| **Description** | If `true`, the toast will animate. |
| **Attribute** | `animated` |
| **Type** | `boolean` |
| **Default** | `true` |



### buttons 

| | |
| --- | --- |
| **Description** | An array of buttons for the toast. |
| **Attribute** | `undefined` |
| **Type** | `(string ｜ ToastButton)[] ｜ undefined` |
| **Default** | `undefined` |



### color 

| | |
| --- | --- |
| **Description** | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). |
| **Attribute** | `color` |
| **Type** | `"danger" ｜ "dark" ｜ "light" ｜ "medium" ｜ "primary" ｜ "secondary" ｜ "success" ｜ "tertiary" ｜ "warning" ｜ string & Record<never, never> ｜ undefined` |
| **Default** | `undefined` |



### cssClass 

| | |
| --- | --- |
| **Description** | Additional classes to apply for custom CSS. If multiple classes are provided they should be separated by spaces. |
| **Attribute** | `css-class` |
| **Type** | `string ｜ string[] ｜ undefined` |
| **Default** | `undefined` |



### duration 

| | |
| --- | --- |
| **Description** | How many milliseconds to wait before hiding the toast. By default, it will show until `dismiss()` is called. |
| **Attribute** | `duration` |
| **Type** | `number` |
| **Default** | `config.getNumber('toastDuration', 0)` |



### enterAnimation 

| | |
| --- | --- |
| **Description** | Animation to use when the toast is presented. |
| **Attribute** | `undefined` |
| **Type** | `((baseEl: any, opts?: any) => Animation) ｜ undefined` |
| **Default** | `undefined` |



### header 

| | |
| --- | --- |
| **Description** | Header to be shown in the toast. |
| **Attribute** | `header` |
| **Type** | `string ｜ undefined` |
| **Default** | `undefined` |



### htmlAttributes 

| | |
| --- | --- |
| **Description** | Additional attributes to pass to the toast. |
| **Attribute** | `undefined` |
| **Type** | `undefined ｜ { [key: string]: any; }` |
| **Default** | `undefined` |



### icon 

| | |
| --- | --- |
| **Description** | The name of the icon to display, or the path to a valid SVG file. See `ion-icon`. https://ionic.io/ionicons |
| **Attribute** | `icon` |
| **Type** | `string ｜ undefined` |
| **Default** | `undefined` |



### keyboardClose 

| | |
| --- | --- |
| **Description** | If `true`, the keyboard will be automatically dismissed when the overlay is presented. |
| **Attribute** | `keyboard-close` |
| **Type** | `boolean` |
| **Default** | `false` |



### leaveAnimation 

| | |
| --- | --- |
| **Description** | Animation to use when the toast is dismissed. |
| **Attribute** | `undefined` |
| **Type** | `((baseEl: any, opts?: any) => Animation) ｜ undefined` |
| **Default** | `undefined` |



### message 

| | |
| --- | --- |
| **Description** | Message to be shown in the toast. |
| **Attribute** | `message` |
| **Type** | `IonicSafeString ｜ string ｜ undefined` |
| **Default** | `undefined` |



### mode 

| | |
| --- | --- |
| **Description** | The mode determines which platform styles to use. |
| **Attribute** | `mode` |
| **Type** | `"ios" ｜ "md"` |
| **Default** | `undefined` |



### position 

| | |
| --- | --- |
| **Description** | The position of the toast on the screen. |
| **Attribute** | `position` |
| **Type** | `"bottom" ｜ "middle" ｜ "top"` |
| **Default** | `'bottom'` |



### translucent 

| | |
| --- | --- |
| **Description** | If `true`, the toast will be translucent. Only applies when the mode is `"ios"` and the device supports [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility). |
| **Attribute** | `translucent` |
| **Type** | `boolean` |
| **Default** | `false` |

