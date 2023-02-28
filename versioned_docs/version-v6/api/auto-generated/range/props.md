

### activeBarStart 

| | |
| --- | --- |
| **Description** | The start position of the range active bar. This feature is only available with a single knob (dualKnobs="false"). Valid values are greater than or equal to the min value and less than or equal to the max value. |
| **Attribute** | `active-bar-start` |
| **Type** | `number ｜ undefined` |
| **Default** | `undefined` |



### color 

| | |
| --- | --- |
| **Description** | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). |
| **Attribute** | `color` |
| **Type** | `"danger" ｜ "dark" ｜ "light" ｜ "medium" ｜ "primary" ｜ "secondary" ｜ "success" ｜ "tertiary" ｜ "warning" ｜ string & Record<never, never> ｜ undefined` |
| **Default** | `undefined` |



### debounce 

| | |
| --- | --- |
| **Description** | How long, in milliseconds, to wait to trigger the `ionChange` event after each change in the range value. This also impacts form bindings such as `ngModel` or `v-model`. |
| **Attribute** | `debounce` |
| **Type** | `number` |
| **Default** | `0` |



### disabled 

| | |
| --- | --- |
| **Description** | If `true`, the user cannot interact with the range. |
| **Attribute** | `disabled` |
| **Type** | `boolean` |
| **Default** | `false` |



### dualKnobs 

| | |
| --- | --- |
| **Description** | Show two knobs. |
| **Attribute** | `dual-knobs` |
| **Type** | `boolean` |
| **Default** | `false` |



### max 

| | |
| --- | --- |
| **Description** | Maximum integer value of the range. |
| **Attribute** | `max` |
| **Type** | `number` |
| **Default** | `100` |



### min 

| | |
| --- | --- |
| **Description** | Minimum integer value of the range. |
| **Attribute** | `min` |
| **Type** | `number` |
| **Default** | `0` |



### mode 

| | |
| --- | --- |
| **Description** | The mode determines which platform styles to use. |
| **Attribute** | `mode` |
| **Type** | `"ios" ｜ "md"` |
| **Default** | `undefined` |



### name 

| | |
| --- | --- |
| **Description** | The name of the control, which is submitted with the form data. |
| **Attribute** | `name` |
| **Type** | `string` |
| **Default** | `''` |



### pin 

| | |
| --- | --- |
| **Description** | If `true`, a pin with integer value is shown when the knob is pressed. |
| **Attribute** | `pin` |
| **Type** | `boolean` |
| **Default** | `false` |



### pinFormatter 

| | |
| --- | --- |
| **Description** | A callback used to format the pin text. By default the pin text is set to `Math.round(value)`. |
| **Attribute** | `undefined` |
| **Type** | `(value: number) => string ｜ number` |
| **Default** | `(value: number): number => Math.round(value)` |



### snaps 

| | |
| --- | --- |
| **Description** | If `true`, the knob snaps to tick marks evenly spaced based on the step property value. |
| **Attribute** | `snaps` |
| **Type** | `boolean` |
| **Default** | `false` |



### step 

| | |
| --- | --- |
| **Description** | Specifies the value granularity. |
| **Attribute** | `step` |
| **Type** | `number` |
| **Default** | `1` |



### ticks 

| | |
| --- | --- |
| **Description** | If `true`, tick marks are displayed based on the step value. Only applies when `snaps` is `true`. |
| **Attribute** | `ticks` |
| **Type** | `boolean` |
| **Default** | `true` |



### value 

| | |
| --- | --- |
| **Description** | the value of the range. |
| **Attribute** | `value` |
| **Type** | `number ｜ { lower: number; upper: number; }` |
| **Default** | `0` |

