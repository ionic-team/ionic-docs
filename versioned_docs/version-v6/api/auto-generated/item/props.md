

### button 

| | |
| --- | --- |
| **Description** | If `true`, a button tag will be rendered and the item will be tappable. |
| **Attribute** | `button` |
| **Type** | `boolean` |
| **Default** | `false` |



### color 

| | |
| --- | --- |
| **Description** | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). |
| **Attribute** | `color` |
| **Type** | `"danger" ｜ "dark" ｜ "light" ｜ "medium" ｜ "primary" ｜ "secondary" ｜ "success" ｜ "tertiary" ｜ "warning" ｜ string & Record<never, never> ｜ undefined` |
| **Default** | `undefined` |



### counter 

| | |
| --- | --- |
| **Description** | If `true`, a character counter will display the ratio of characters used and the total character limit. Only applies when the `maxlength` property is set on the inner `ion-input` or `ion-textarea`. |
| **Attribute** | `counter` |
| **Type** | `boolean` |
| **Default** | `false` |



### counterFormatter 

| | |
| --- | --- |
| **Description** | A callback used to format the counter text. By default the counter text is set to "itemLength / maxLength". |
| **Attribute** | `undefined` |
| **Type** | `((inputLength: number, maxLength: number) => string) ｜ undefined` |
| **Default** | `undefined` |



### detail 

| | |
| --- | --- |
| **Description** | If `true`, a detail arrow will appear on the item. Defaults to `false` unless the `mode` is `ios` and an `href` or `button` property is present. |
| **Attribute** | `detail` |
| **Type** | `boolean ｜ undefined` |
| **Default** | `undefined` |



### detailIcon 

| | |
| --- | --- |
| **Description** | The icon to use when `detail` is set to `true`. |
| **Attribute** | `detail-icon` |
| **Type** | `string` |
| **Default** | `chevronForward` |



### disabled 

| | |
| --- | --- |
| **Description** | If `true`, the user cannot interact with the item. |
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



### fill 

| | |
| --- | --- |
| **Description** | The fill for the item. If `'solid'` the item will have a background. If `'outline'` the item will be transparent with a border. Only available in `md` mode. |
| **Attribute** | `fill` |
| **Type** | `"outline" ｜ "solid" ｜ undefined` |
| **Default** | `undefined` |



### href 

| | |
| --- | --- |
| **Description** | Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered. |
| **Attribute** | `href` |
| **Type** | `string ｜ undefined` |
| **Default** | `undefined` |



### lines 

| | |
| --- | --- |
| **Description** | How the bottom border should be displayed on the item. |
| **Attribute** | `lines` |
| **Type** | `"full" ｜ "inset" ｜ "none" ｜ undefined` |
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



### routerAnimation 

| | |
| --- | --- |
| **Description** | When using a router, it specifies the transition animation when navigating to another page using `href`. |
| **Attribute** | `undefined` |
| **Type** | `((baseEl: any, opts?: any) => Animation) ｜ undefined` |
| **Default** | `undefined` |



### routerDirection 

| | |
| --- | --- |
| **Description** | When using a router, it specifies the transition direction when navigating to another page using `href`. |
| **Attribute** | `router-direction` |
| **Type** | `"back" ｜ "forward" ｜ "root"` |
| **Default** | `'forward'` |



### shape 

| | |
| --- | --- |
| **Description** | The shape of the item. If "round" it will have increased border radius. |
| **Attribute** | `shape` |
| **Type** | `"round" ｜ undefined` |
| **Default** | `undefined` |



### target 

| | |
| --- | --- |
| **Description** | Specifies where to display the linked URL. Only applies when an `href` is provided. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`. |
| **Attribute** | `target` |
| **Type** | `string ｜ undefined` |
| **Default** | `undefined` |



### type 

| | |
| --- | --- |
| **Description** | The type of the button. Only used when an `onclick` or `button` property is present. |
| **Attribute** | `type` |
| **Type** | `"button" ｜ "reset" ｜ "submit"` |
| **Default** | `'button'` |

