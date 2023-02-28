

### collapse 

| | |
| --- | --- |
| **Description** | Describes the scroll effect that will be applied to the header. Only applies in iOS mode.<br /><br />Typically used for [Collapsible Large Titles](https://ionicframework.com/docs/api/title#collapsible-large-titles) |
| **Attribute** | `collapse` |
| **Type** | `"condense" ｜ "fade" ｜ undefined` |
| **Default** | `undefined` |



### mode 

| | |
| --- | --- |
| **Description** | The mode determines which platform styles to use. |
| **Attribute** | `mode` |
| **Type** | `"ios" ｜ "md"` |
| **Default** | `undefined` |



### translucent 

| | |
| --- | --- |
| **Description** | If `true`, the header will be translucent. Only applies when the mode is `"ios"` and the device supports [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).<br /><br />Note: In order to scroll content behind the header, the `fullscreen` attribute needs to be set on the content. |
| **Attribute** | `translucent` |
| **Type** | `boolean` |
| **Default** | `false` |

