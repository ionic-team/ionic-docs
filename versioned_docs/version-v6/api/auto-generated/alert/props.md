

### animated 

| | |
| --- | --- |
| **Description** | If `true`, the alert will animate. |
| **Attribute** | `animated` |
| **Type** | `boolean` |
| **Default** | `true` |



### backdropDismiss 

| | |
| --- | --- |
| **Description** | If `true`, the alert will be dismissed when the backdrop is clicked. |
| **Attribute** | `backdrop-dismiss` |
| **Type** | `boolean` |
| **Default** | `true` |



### buttons 

| | |
| --- | --- |
| **Description** | Array of buttons to be added to the alert. |
| **Attribute** | `undefined` |
| **Type** | `(string ｜ AlertButton)[]` |
| **Default** | `[]` |



### cssClass 

| | |
| --- | --- |
| **Description** | Additional classes to apply for custom CSS. If multiple classes are provided they should be separated by spaces. |
| **Attribute** | `css-class` |
| **Type** | `string ｜ string[] ｜ undefined` |
| **Default** | `undefined` |



### enterAnimation 

| | |
| --- | --- |
| **Description** | Animation to use when the alert is presented. |
| **Attribute** | `undefined` |
| **Type** | `((baseEl: any, opts?: any) => Animation) ｜ undefined` |
| **Default** | `undefined` |



### header 

| | |
| --- | --- |
| **Description** | The main title in the heading of the alert. |
| **Attribute** | `header` |
| **Type** | `string ｜ undefined` |
| **Default** | `undefined` |



### htmlAttributes 

| | |
| --- | --- |
| **Description** | Additional attributes to pass to the alert. |
| **Attribute** | `undefined` |
| **Type** | `undefined ｜ { [key: string]: any; }` |
| **Default** | `undefined` |



### inputs 

| | |
| --- | --- |
| **Description** | Array of input to show in the alert. |
| **Attribute** | `undefined` |
| **Type** | `AlertInput[]` |
| **Default** | `[]` |



### keyboardClose 

| | |
| --- | --- |
| **Description** | If `true`, the keyboard will be automatically dismissed when the overlay is presented. |
| **Attribute** | `keyboard-close` |
| **Type** | `boolean` |
| **Default** | `true` |



### leaveAnimation 

| | |
| --- | --- |
| **Description** | Animation to use when the alert is dismissed. |
| **Attribute** | `undefined` |
| **Type** | `((baseEl: any, opts?: any) => Animation) ｜ undefined` |
| **Default** | `undefined` |



### message 

| | |
| --- | --- |
| **Description** | The main message to be displayed in the alert. `message` can accept either plaintext or HTML as a string. To display characters normally reserved for HTML, they must be escaped. For example `<Ionic>` would become `&lt;Ionic&gt;`<br /><br />For more information: [Security Documentation](https://ionicframework.com/docs/faq/security) |
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



### subHeader 

| | |
| --- | --- |
| **Description** | The subtitle in the heading of the alert. Displayed under the title. |
| **Attribute** | `sub-header` |
| **Type** | `string ｜ undefined` |
| **Default** | `undefined` |



### translucent 

| | |
| --- | --- |
| **Description** | If `true`, the alert will be translucent. Only applies when the mode is `"ios"` and the device supports [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility). |
| **Attribute** | `translucent` |
| **Type** | `boolean` |
| **Default** | `false` |

