

### buffer 

| | |
| --- | --- |
| **Description** | If the buffer and value are smaller than 1, the buffer circles will show. The buffer should be between [0, 1]. |
| **Attribute** | `buffer` |
| **Type** | `number` |
| **Default** | `1` |



### color 

| | |
| --- | --- |
| **Description** | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). |
| **Attribute** | `color` |
| **Type** | `"danger" ｜ "dark" ｜ "light" ｜ "medium" ｜ "primary" ｜ "secondary" ｜ "success" ｜ "tertiary" ｜ "warning" ｜ string & Record<never, never> ｜ undefined` |
| **Default** | `undefined` |



### mode 

| | |
| --- | --- |
| **Description** | The mode determines which platform styles to use. |
| **Attribute** | `mode` |
| **Type** | `"ios" ｜ "md"` |
| **Default** | `undefined` |



### reversed 

| | |
| --- | --- |
| **Description** | If true, reverse the progress bar direction. |
| **Attribute** | `reversed` |
| **Type** | `boolean` |
| **Default** | `false` |



### type 

| | |
| --- | --- |
| **Description** | The state of the progress bar, based on if the time the process takes is known or not. Default options are: `"determinate"` (no animation), `"indeterminate"` (animate from left to right). |
| **Attribute** | `type` |
| **Type** | `"determinate" ｜ "indeterminate"` |
| **Default** | `'determinate'` |



### value 

| | |
| --- | --- |
| **Description** | The value determines how much of the active bar should display when the `type` is `"determinate"`. The value should be between [0, 1]. |
| **Attribute** | `value` |
| **Type** | `number` |
| **Default** | `0` |

