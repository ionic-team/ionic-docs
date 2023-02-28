

### disabled 

| | |
| --- | --- |
| **Description** | If `true`, the infinite scroll will be hidden and scroll event listeners will be removed.<br /><br />Set this to true to disable the infinite scroll from actively trying to receive new data while scrolling. This is useful when it is known that there is no more data that can be added, and the infinite scroll is no longer needed. |
| **Attribute** | `disabled` |
| **Type** | `boolean` |
| **Default** | `false` |



### position 

| | |
| --- | --- |
| **Description** | The position of the infinite scroll element. The value can be either `top` or `bottom`. |
| **Attribute** | `position` |
| **Type** | `"bottom" ｜ "top"` |
| **Default** | `'bottom'` |



### threshold 

| | |
| --- | --- |
| **Description** | The threshold distance from the bottom of the content to call the `infinite` output event when scrolled. The threshold value can be either a percent, or in pixels. For example, use the value of `10%` for the `infinite` output event to get called when the user has scrolled 10% from the bottom of the page. Use the value `100px` when the scroll is within 100 pixels from the bottom of the page. |
| **Attribute** | `threshold` |
| **Type** | `string` |
| **Default** | `'15%'` |

