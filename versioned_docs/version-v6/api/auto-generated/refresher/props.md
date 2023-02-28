

### closeDuration 

| | |
| --- | --- |
| **Description** | Time it takes to close the refresher. Does not apply when the refresher content uses a spinner, enabling the native refresher. |
| **Attribute** | `close-duration` |
| **Type** | `string` |
| **Default** | `'280ms'` |



### disabled 

| | |
| --- | --- |
| **Description** | If `true`, the refresher will be hidden. |
| **Attribute** | `disabled` |
| **Type** | `boolean` |
| **Default** | `false` |



### pullFactor 

| | |
| --- | --- |
| **Description** | How much to multiply the pull speed by. To slow the pull animation down, pass a number less than `1`. To speed up the pull, pass a number greater than `1`. The default value is `1` which is equal to the speed of the cursor. If a negative value is passed in, the factor will be `1` instead.<br /><br />For example: If the value passed is `1.2` and the content is dragged by `10` pixels, instead of `10` pixels the content will be pulled by `12` pixels (an increase of 20 percent). If the value passed is `0.8`, the dragged amount will be `8` pixels, less than the amount the cursor has moved.<br /><br />Does not apply when the refresher content uses a spinner, enabling the native refresher. |
| **Attribute** | `pull-factor` |
| **Type** | `number` |
| **Default** | `1` |



### pullMax 

| | |
| --- | --- |
| **Description** | The maximum distance of the pull until the refresher will automatically go into the `refreshing` state. Defaults to the result of `pullMin + 60`. Does not apply when  the refresher content uses a spinner, enabling the native refresher. |
| **Attribute** | `pull-max` |
| **Type** | `number` |
| **Default** | `this.pullMin + 60` |



### pullMin 

| | |
| --- | --- |
| **Description** | The minimum distance the user must pull down until the refresher will go into the `refreshing` state. Does not apply when the refresher content uses a spinner, enabling the native refresher. |
| **Attribute** | `pull-min` |
| **Type** | `number` |
| **Default** | `60` |



### snapbackDuration 

| | |
| --- | --- |
| **Description** | Time it takes the refresher to snap back to the `refreshing` state. Does not apply when the refresher content uses a spinner, enabling the native refresher. |
| **Attribute** | `snapback-duration` |
| **Type** | `string` |
| **Default** | `'280ms'` |

