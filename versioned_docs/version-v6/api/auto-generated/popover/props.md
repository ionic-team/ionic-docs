

### alignment 

| | |
| --- | --- |
| **Description** | Describes how to align the popover content with the `reference` point. Defaults to `'center'` for `ios` mode, and `'start'` for `md` mode. |
| **Attribute** | `alignment` |
| **Type** | `"center" ｜ "end" ｜ "start" ｜ undefined` |
| **Default** | `undefined` |



### animated 

| | |
| --- | --- |
| **Description** | If `true`, the popover will animate. |
| **Attribute** | `animated` |
| **Type** | `boolean` |
| **Default** | `true` |



### arrow 

| | |
| --- | --- |
| **Description** | If `true`, the popover will display an arrow that points at the `reference` when running in `ios` mode. Does not apply in `md` mode. |
| **Attribute** | `arrow` |
| **Type** | `boolean` |
| **Default** | `true` |



### backdropDismiss 

| | |
| --- | --- |
| **Description** | If `true`, the popover will be dismissed when the backdrop is clicked. |
| **Attribute** | `backdrop-dismiss` |
| **Type** | `boolean` |
| **Default** | `true` |



### component 

| | |
| --- | --- |
| **Description** | The component to display inside of the popover. You only need to use this if you are not using a JavaScript framework. Otherwise, you can just slot your component inside of `ion-popover`. |
| **Attribute** | `component` |
| **Type** | `Function ｜ HTMLElement ｜ null ｜ string ｜ undefined` |
| **Default** | `undefined` |



### componentProps 

| | |
| --- | --- |
| **Description** | The data to pass to the popover component. You only need to use this if you are not using a JavaScript framework. Otherwise, you can just set the props directly on your component. |
| **Attribute** | `undefined` |
| **Type** | `undefined ｜ { [key: string]: any; }` |
| **Default** | `undefined` |



### dismissOnSelect 

| | |
| --- | --- |
| **Description** | If `true`, the popover will be automatically dismissed when the content has been clicked. |
| **Attribute** | `dismiss-on-select` |
| **Type** | `boolean` |
| **Default** | `false` |



### enterAnimation 

| | |
| --- | --- |
| **Description** | Animation to use when the popover is presented. |
| **Attribute** | `undefined` |
| **Type** | `((baseEl: any, opts?: any) => Animation) ｜ undefined` |
| **Default** | `undefined` |



### event 

| | |
| --- | --- |
| **Description** | The event to pass to the popover animation. |
| **Attribute** | `event` |
| **Type** | `any` |
| **Default** | `undefined` |



### htmlAttributes 

| | |
| --- | --- |
| **Description** | Additional attributes to pass to the popover. |
| **Attribute** | `undefined` |
| **Type** | `undefined ｜ { [key: string]: any; }` |
| **Default** | `undefined` |



### isOpen 

| | |
| --- | --- |
| **Description** | If `true`, the popover will open. If `false`, the popover will close. Use this if you need finer grained control over presentation, otherwise just use the popoverController or the `trigger` property. Note: `isOpen` will not automatically be set back to `false` when the popover dismisses. You will need to do that in your code. |
| **Attribute** | `is-open` |
| **Type** | `boolean` |
| **Default** | `false` |



### keepContentsMounted 

| | |
| --- | --- |
| **Description** | If `true`, the component passed into `ion-popover` will automatically be mounted when the popover is created. The component will remain mounted even when the popover is dismissed. However, the component will be destroyed when the popover is destroyed. This property is not reactive and should only be used when initially creating a popover.<br /><br />Note: This feature only applies to inline popovers in JavaScript frameworks such as Angular, React, and Vue. |
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
| **Description** | Animation to use when the popover is dismissed. |
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



### reference 

| | |
| --- | --- |
| **Description** | Describes what to position the popover relative to. If `'trigger'`, the popover will be positioned relative to the trigger button. If passing in an event, this is determined via event.target. If `'event'`, the popover will be positioned relative to the x/y coordinates of the trigger action. If passing in an event, this is determined via event.clientX and event.clientY. |
| **Attribute** | `reference` |
| **Type** | `"event" ｜ "trigger"` |
| **Default** | `'trigger'` |



### showBackdrop 

| | |
| --- | --- |
| **Description** | If `true`, a backdrop will be displayed behind the popover. This property controls whether or not the backdrop darkens the screen when the popover is presented. It does not control whether or not the backdrop is active or present in the DOM. |
| **Attribute** | `show-backdrop` |
| **Type** | `boolean` |
| **Default** | `true` |



### side 

| | |
| --- | --- |
| **Description** | Describes which side of the `reference` point to position the popover on. The `'start'` and `'end'` values are RTL-aware, and the `'left'` and `'right'` values are not. |
| **Attribute** | `side` |
| **Type** | `"bottom" ｜ "end" ｜ "left" ｜ "right" ｜ "start" ｜ "top"` |
| **Default** | `'bottom'` |



### size 

| | |
| --- | --- |
| **Description** | Describes how to calculate the popover width. If `'cover'`, the popover width will match the width of the trigger. If `'auto'`, the popover width will be determined by the content in the popover. |
| **Attribute** | `size` |
| **Type** | `"auto" ｜ "cover"` |
| **Default** | `'auto'` |



### translucent 

| | |
| --- | --- |
| **Description** | If `true`, the popover will be translucent. Only applies when the mode is `"ios"` and the device supports [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility). |
| **Attribute** | `translucent` |
| **Type** | `boolean` |
| **Default** | `false` |



### trigger 

| | |
| --- | --- |
| **Description** | An ID corresponding to the trigger element that causes the popover to open. Use the `trigger-action` property to customize the interaction that results in the popover opening. |
| **Attribute** | `trigger` |
| **Type** | `string ｜ undefined` |
| **Default** | `undefined` |



### triggerAction 

| | |
| --- | --- |
| **Description** | Describes what kind of interaction with the trigger that should cause the popover to open. Does not apply when the `trigger` property is `undefined`. If `'click'`, the popover will be presented when the trigger is left clicked. If `'hover'`, the popover will be presented when a pointer hovers over the trigger. If `'context-menu'`, the popover will be presented when the trigger is right clicked on desktop and long pressed on mobile. This will also prevent your device's normal context menu from appearing. |
| **Attribute** | `trigger-action` |
| **Type** | `"click" ｜ "context-menu" ｜ "hover"` |
| **Default** | `'click'` |

