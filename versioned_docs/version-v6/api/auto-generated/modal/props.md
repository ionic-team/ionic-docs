

### animated 

| | |
| --- | --- |
| **Description** | If `true`, the modal will animate. |
| **Attribute** | `animated` |
| **Type** | `boolean` |
| **Default** | `true` |



### backdropBreakpoint 

| | |
| --- | --- |
| **Description** | A decimal value between 0 and 1 that indicates the point after which the backdrop will begin to fade in when using a sheet modal. Prior to this point, the backdrop will be hidden and the content underneath the sheet can be interacted with. This value is exclusive meaning the backdrop will become active after the value specified. |
| **Attribute** | `backdrop-breakpoint` |
| **Type** | `number` |
| **Default** | `0` |



### backdropDismiss 

| | |
| --- | --- |
| **Description** | If `true`, the modal will be dismissed when the backdrop is clicked. |
| **Attribute** | `backdrop-dismiss` |
| **Type** | `boolean` |
| **Default** | `true` |



### breakpoints 

| | |
| --- | --- |
| **Description** | The breakpoints to use when creating a sheet modal. Each value in the array must be a decimal between 0 and 1 where 0 indicates the modal is fully closed and 1 indicates the modal is fully open. Values are relative to the height of the modal, not the height of the screen. One of the values in this array must be the value of the `initialBreakpoint` property. For example: [0, .25, .5, 1] |
| **Attribute** | `undefined` |
| **Type** | `number[] ｜ undefined` |
| **Default** | `undefined` |



### canDismiss 

| | |
| --- | --- |
| **Description** | Determines whether or not a modal can dismiss when calling the `dismiss` method.<br /><br />If the value is `true` or the value's function returns `true`, the modal will close when trying to dismiss. If the value is `false` or the value's function returns `false`, the modal will not close when trying to dismiss. |
| **Attribute** | `can-dismiss` |
| **Type** | `((data?: any, role?: string ｜ undefined) => Promise<boolean>) ｜ boolean ｜ undefined` |
| **Default** | `undefined` |



### enterAnimation 

| | |
| --- | --- |
| **Description** | Animation to use when the modal is presented. |
| **Attribute** | `undefined` |
| **Type** | `((baseEl: any, opts?: any) => Animation) ｜ undefined` |
| **Default** | `undefined` |



### handle 

| | |
| --- | --- |
| **Description** | The horizontal line that displays at the top of a sheet modal. It is `true` by default when setting the `breakpoints` and `initialBreakpoint` properties. |
| **Attribute** | `handle` |
| **Type** | `boolean ｜ undefined` |
| **Default** | `undefined` |



### handleBehavior 

| | |
| --- | --- |
| **Description** | The interaction behavior for the sheet modal when the handle is pressed.<br /><br />Defaults to `"none"`, which  means the modal will not change size or position when the handle is pressed. Set to `"cycle"` to let the modal cycle between available breakpoints when pressed.<br /><br />Handle behavior is unavailable when the `handle` property is set to `false` or when the `breakpoints` property is not set (using a fullscreen or card modal). |
| **Attribute** | `handle-behavior` |
| **Type** | `"cycle" ｜ "none" ｜ undefined` |
| **Default** | `'none'` |



### htmlAttributes 

| | |
| --- | --- |
| **Description** | Additional attributes to pass to the modal. |
| **Attribute** | `undefined` |
| **Type** | `undefined ｜ { [key: string]: any; }` |
| **Default** | `undefined` |



### initialBreakpoint 

| | |
| --- | --- |
| **Description** | A decimal value between 0 and 1 that indicates the initial point the modal will open at when creating a sheet modal. This value must also be listed in the `breakpoints` array. |
| **Attribute** | `initial-breakpoint` |
| **Type** | `number ｜ undefined` |
| **Default** | `undefined` |



### isOpen 

| | |
| --- | --- |
| **Description** | If `true`, the modal will open. If `false`, the modal will close. Use this if you need finer grained control over presentation, otherwise just use the modalController or the `trigger` property. Note: `isOpen` will not automatically be set back to `false` when the modal dismisses. You will need to do that in your code. |
| **Attribute** | `is-open` |
| **Type** | `boolean` |
| **Default** | `false` |



### keepContentsMounted 

| | |
| --- | --- |
| **Description** | If `true`, the component passed into `ion-modal` will automatically be mounted when the modal is created. The component will remain mounted even when the modal is dismissed. However, the component will be destroyed when the modal is destroyed. This property is not reactive and should only be used when initially creating a modal.<br /><br />Note: This feature only applies to inline modals in JavaScript frameworks such as Angular, React, and Vue. |
| **Attribute** | `keep-contents-mounted` |
| **Type** | `boolean` |
| **Default** | `false` |



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
| **Description** | Animation to use when the modal is dismissed. |
| **Attribute** | `undefined` |
| **Type** | `((baseEl: any, opts?: any) => Animation) ｜ undefined` |
| **Default** | `undefined` |



### mode 

| | |
| --- | --- |
| **Description** | The mode determines which platform styles to use. |
| **Attribute** | `mode` |
| **Type** | `"ios" ｜ "md"` |
| **Default** | `undefined` |



### presentingElement 

| | |
| --- | --- |
| **Description** | The element that presented the modal. This is used for card presentation effects and for stacking multiple modals on top of each other. Only applies in iOS mode. |
| **Attribute** | `undefined` |
| **Type** | `HTMLElement ｜ undefined` |
| **Default** | `undefined` |



### showBackdrop 

| | |
| --- | --- |
| **Description** | If `true`, a backdrop will be displayed behind the modal. This property controls whether or not the backdrop darkens the screen when the modal is presented. It does not control whether or not the backdrop is active or present in the DOM. |
| **Attribute** | `show-backdrop` |
| **Type** | `boolean` |
| **Default** | `true` |



### swipeToClose (deprecated)

| | |
| --- | --- |
| **Description** | If `true`, the modal can be swiped to dismiss. Only applies in iOS mode. _Deprecated_ - To prevent modals from dismissing, use canDismiss instead. |
| **Attribute** | `swipe-to-close` |
| **Type** | `boolean` |
| **Default** | `false` |



### trigger 

| | |
| --- | --- |
| **Description** | An ID corresponding to the trigger element that causes the modal to open when clicked. |
| **Attribute** | `trigger` |
| **Type** | `string ｜ undefined` |
| **Default** | `undefined` |

