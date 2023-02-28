

### checked 

| | |
| --- | --- |
| **Description** | If `true`, the toggle is selected. |
| **Attribute** | `checked` |
| **Type** | `boolean` |
| **Default** | `false` |



### color 

| | |
| --- | --- |
| **Description** | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). |
| **Attribute** | `color` |
| **Type** | `"danger" ｜ "dark" ｜ "light" ｜ "medium" ｜ "primary" ｜ "secondary" ｜ "success" ｜ "tertiary" ｜ "warning" ｜ string & Record<never, never> ｜ undefined` |
| **Default** | `undefined` |



### disabled 

| | |
| --- | --- |
| **Description** | If `true`, the user cannot interact with the toggle. |
| **Attribute** | `disabled` |
| **Type** | `boolean` |
| **Default** | `false` |



### enableOnOffLabels 

| | |
| --- | --- |
| **Description** | Enables the on/off accessibility switch labels within the toggle. |
| **Attribute** | `enable-on-off-labels` |
| **Type** | `boolean ｜ undefined` |
| **Default** | `config.get('toggleOnOffLabels')` |



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



### value 

| | |
| --- | --- |
| **Description** | The value of the toggle does not mean if it's checked or not, use the `checked` property for that.<br /><br />The value of a toggle is analogous to the value of a `<input type="checkbox">`, it's only used when the toggle participates in a native `<form>`. |
| **Attribute** | `value` |
| **Type** | `null ｜ string ｜ undefined` |
| **Default** | `'on'` |

