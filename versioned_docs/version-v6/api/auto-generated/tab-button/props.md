

### disabled 

| | |
| --- | --- |
| **Description** | If `true`, the user cannot interact with the tab button. |
| **Attribute** | `disabled` |
| **Type** | `boolean` |
| **Default** | `false` |



### download 

| | |
| --- | --- |
| **Description** | This attribute instructs browsers to download a URL instead of navigating to it, so the user will be prompted to save it as a local file. If the attribute has a value, it is used as the pre-filled file name in the Save prompt (the user can still change the file name if they want). |
| **Attribute** | `download` |
| **Type** | `string ｜ undefined` |
| **Default** | `undefined` |



### href 

| | |
| --- | --- |
| **Description** | Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered. |
| **Attribute** | `href` |
| **Type** | `string ｜ undefined` |
| **Default** | `undefined` |



### layout 

| | |
| --- | --- |
| **Description** | Set the layout of the text and icon in the tab bar. It defaults to `'icon-top'`. |
| **Attribute** | `layout` |
| **Type** | `"icon-bottom" ｜ "icon-end" ｜ "icon-hide" ｜ "icon-start" ｜ "icon-top" ｜ "label-hide" ｜ undefined` |
| **Default** | `undefined` |



### mode 

| | |
| --- | --- |
| **Description** | The mode determines which platform styles to use. |
| **Attribute** | `mode` |
| **Type** | `"ios" ｜ "md"` |
| **Default** | `undefined` |



### rel 

| | |
| --- | --- |
| **Description** | Specifies the relationship of the target object to the link object. The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types). |
| **Attribute** | `rel` |
| **Type** | `string ｜ undefined` |
| **Default** | `undefined` |



### selected 

| | |
| --- | --- |
| **Description** | The selected tab component |
| **Attribute** | `selected` |
| **Type** | `boolean` |
| **Default** | `false` |



### tab 

| | |
| --- | --- |
| **Description** | A tab id must be provided for each `ion-tab`. It's used internally to reference the selected tab or by the router to switch between them. |
| **Attribute** | `tab` |
| **Type** | `string ｜ undefined` |
| **Default** | `undefined` |



### target 

| | |
| --- | --- |
| **Description** | Specifies where to display the linked URL. Only applies when an `href` is provided. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`. |
| **Attribute** | `target` |
| **Type** | `string ｜ undefined` |
| **Default** | `undefined` |

