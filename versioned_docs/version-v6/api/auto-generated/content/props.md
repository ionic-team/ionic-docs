

### color 

| | |
| --- | --- |
| **Description** | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). |
| **Attribute** | `color` |
| **Type** | `"danger" ｜ "dark" ｜ "light" ｜ "medium" ｜ "primary" ｜ "secondary" ｜ "success" ｜ "tertiary" ｜ "warning" ｜ string & Record<never, never> ｜ undefined` |
| **Default** | `undefined` |



### forceOverscroll 

| | |
| --- | --- |
| **Description** | If `true` and the content does not cause an overflow scroll, the scroll interaction will cause a bounce. If the content exceeds the bounds of ionContent, nothing will change. Note, the does not disable the system bounce on iOS. That is an OS level setting. |
| **Attribute** | `force-overscroll` |
| **Type** | `boolean ｜ undefined` |
| **Default** | `undefined` |



### fullscreen 

| | |
| --- | --- |
| **Description** | If `true`, the content will scroll behind the headers and footers. This effect can easily be seen by setting the toolbar to transparent. |
| **Attribute** | `fullscreen` |
| **Type** | `boolean` |
| **Default** | `false` |



### scrollEvents 

| | |
| --- | --- |
| **Description** | Because of performance reasons, ionScroll events are disabled by default, in order to enable them and start listening from (ionScroll), set this property to `true`. |
| **Attribute** | `scroll-events` |
| **Type** | `boolean` |
| **Default** | `false` |



### scrollX 

| | |
| --- | --- |
| **Description** | If you want to enable the content scrolling in the X axis, set this property to `true`. |
| **Attribute** | `scroll-x` |
| **Type** | `boolean` |
| **Default** | `false` |



### scrollY 

| | |
| --- | --- |
| **Description** | If you want to disable the content scrolling in the Y axis, set this property to `false`. |
| **Attribute** | `scroll-y` |
| **Type** | `boolean` |
| **Default** | `true` |

