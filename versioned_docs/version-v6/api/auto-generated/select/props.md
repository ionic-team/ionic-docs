

### cancelText 

| | |
| --- | --- |
| **Description** | The text to display on the cancel button. |
| **Attribute** | `cancel-text` |
| **Type** | `string` |
| **Default** | `'Cancel'` |



### compareWith 

| | |
| --- | --- |
| **Description** | A property name or function used to compare object values |
| **Attribute** | `compare-with` |
| **Type** | `((currentValue: any, compareValue: any) => boolean) ｜ null ｜ string ｜ undefined` |
| **Default** | `undefined` |



### disabled 

| | |
| --- | --- |
| **Description** | If `true`, the user cannot interact with the select. |
| **Attribute** | `disabled` |
| **Type** | `boolean` |
| **Default** | `false` |



### interface 

| | |
| --- | --- |
| **Description** | The interface the select should use: `action-sheet`, `popover` or `alert`. |
| **Attribute** | `interface` |
| **Type** | `"action-sheet" ｜ "alert" ｜ "popover"` |
| **Default** | `'alert'` |



### interfaceOptions 

| | |
| --- | --- |
| **Description** | Any additional options that the `alert`, `action-sheet` or `popover` interface can take. See the [ion-alert docs](./alert), the [ion-action-sheet docs](./action-sheet) and the [ion-popover docs](./popover) for the create options for each interface.<br /><br />Note: `interfaceOptions` will not override `inputs` or `buttons` with the `alert` interface. |
| **Attribute** | `interface-options` |
| **Type** | `any` |
| **Default** | `{}` |



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
| **Description** | If `true`, the select can accept multiple values. |
| **Attribute** | `multiple` |
| **Type** | `boolean` |
| **Default** | `false` |



### name 

| | |
| --- | --- |
| **Description** | The name of the control, which is submitted with the form data. |
| **Attribute** | `name` |
| **Type** | `string` |
| **Default** | `this.inputId` |



### okText 

| | |
| --- | --- |
| **Description** | The text to display on the ok button. |
| **Attribute** | `ok-text` |
| **Type** | `string` |
| **Default** | `'OK'` |



### placeholder 

| | |
| --- | --- |
| **Description** | The text to display when the select is empty. |
| **Attribute** | `placeholder` |
| **Type** | `string ｜ undefined` |
| **Default** | `undefined` |



### selectedText 

| | |
| --- | --- |
| **Description** | The text to display instead of the selected option's value. |
| **Attribute** | `selected-text` |
| **Type** | `null ｜ string ｜ undefined` |
| **Default** | `undefined` |



### value 

| | |
| --- | --- |
| **Description** | the value of the select. |
| **Attribute** | `value` |
| **Type** | `any` |
| **Default** | `undefined` |

