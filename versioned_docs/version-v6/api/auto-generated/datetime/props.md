

### cancelText 

| | |
| --- | --- |
| **Description** | The text to display on the picker's cancel button. |
| **Attribute** | `cancel-text` |
| **Type** | `string` |
| **Default** | `'Cancel'` |



### clearText 

| | |
| --- | --- |
| **Description** | The text to display on the picker's "Clear" button. |
| **Attribute** | `clear-text` |
| **Type** | `string` |
| **Default** | `'Clear'` |



### color 

| | |
| --- | --- |
| **Description** | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). |
| **Attribute** | `color` |
| **Type** | `"danger" ｜ "dark" ｜ "light" ｜ "medium" ｜ "primary" ｜ "secondary" ｜ "success" ｜ "tertiary" ｜ "warning" ｜ string & Record<never, never> ｜ undefined` |
| **Default** | `'primary'` |



### dayValues 

| | |
| --- | --- |
| **Description** | Values used to create the list of selectable days. By default every day is shown for the given month. However, to control exactly which days of the month to display, the `dayValues` input can take a number, an array of numbers, or a string of comma separated numbers. Note that even if the array days have an invalid number for the selected month, like `31` in February, it will correctly not show days which are not valid for the selected month. |
| **Attribute** | `day-values` |
| **Type** | `number ｜ number[] ｜ string ｜ undefined` |
| **Default** | `undefined` |



### disabled 

| | |
| --- | --- |
| **Description** | If `true`, the user cannot interact with the datetime. |
| **Attribute** | `disabled` |
| **Type** | `boolean` |
| **Default** | `false` |



### doneText 

| | |
| --- | --- |
| **Description** | The text to display on the picker's "Done" button. |
| **Attribute** | `done-text` |
| **Type** | `string` |
| **Default** | `'Done'` |



### firstDayOfWeek 

| | |
| --- | --- |
| **Description** | The first day of the week to use for `ion-datetime`. The default value is `0` and represents Sunday. |
| **Attribute** | `first-day-of-week` |
| **Type** | `number` |
| **Default** | `0` |



### hourCycle 

| | |
| --- | --- |
| **Description** | The hour cycle of the `ion-datetime`. If no value is set, this is specified by the current locale. |
| **Attribute** | `hour-cycle` |
| **Type** | `"h12" ｜ "h23" ｜ undefined` |
| **Default** | `undefined` |



### hourValues 

| | |
| --- | --- |
| **Description** | Values used to create the list of selectable hours. By default the hour values range from `0` to `23` for 24-hour, or `1` to `12` for 12-hour. However, to control exactly which hours to display, the `hourValues` input can take a number, an array of numbers, or a string of comma separated numbers. |
| **Attribute** | `hour-values` |
| **Type** | `number ｜ number[] ｜ string ｜ undefined` |
| **Default** | `undefined` |



### isDateEnabled 

| | |
| --- | --- |
| **Description** | Returns if an individual date (calendar day) is enabled or disabled.<br /><br />If `true`, the day will be enabled/interactive. If `false`, the day will be disabled/non-interactive.<br /><br />The function accepts an ISO 8601 date string of a given day. By default, all days are enabled. Developers can use this function to write custom logic to disable certain days.<br /><br />The function is called for each rendered calendar day, for the previous, current and next month. Custom implementations should be optimized for performance to avoid jank. |
| **Attribute** | `undefined` |
| **Type** | `((dateIsoString: string) => boolean) ｜ undefined` |
| **Default** | `undefined` |



### locale 

| | |
| --- | --- |
| **Description** | The locale to use for `ion-datetime`. This impacts month and day name formatting. The `'default'` value refers to the default locale set by your device. |
| **Attribute** | `locale` |
| **Type** | `string` |
| **Default** | `'default'` |



### max 

| | |
| --- | --- |
| **Description** | The maximum datetime allowed. Value must be a date string following the [ISO 8601 datetime format standard](https://www.w3.org/TR/NOTE-datetime), `1996-12-19`. The format does not have to be specific to an exact datetime. For example, the maximum could just be the year, such as `1994`. Defaults to the end of this year. |
| **Attribute** | `max` |
| **Type** | `string ｜ undefined` |
| **Default** | `undefined` |



### min 

| | |
| --- | --- |
| **Description** | The minimum datetime allowed. Value must be a date string following the [ISO 8601 datetime format standard](https://www.w3.org/TR/NOTE-datetime), such as `1996-12-19`. The format does not have to be specific to an exact datetime. For example, the minimum could just be the year, such as `1994`. Defaults to the beginning of the year, 100 years ago from today. |
| **Attribute** | `min` |
| **Type** | `string ｜ undefined` |
| **Default** | `undefined` |



### minuteValues 

| | |
| --- | --- |
| **Description** | Values used to create the list of selectable minutes. By default the minutes range from `0` to `59`. However, to control exactly which minutes to display, the `minuteValues` input can take a number, an array of numbers, or a string of comma separated numbers. For example, if the minute selections should only be every 15 minutes, then this input value would be `minuteValues="0,15,30,45"`. |
| **Attribute** | `minute-values` |
| **Type** | `number ｜ number[] ｜ string ｜ undefined` |
| **Default** | `undefined` |



### mode 

| | |
| --- | --- |
| **Description** | The mode determines which platform styles to use. |
| **Attribute** | `mode` |
| **Type** | `"ios" ｜ "md"` |
| **Default** | `undefined` |



### monthValues 

| | |
| --- | --- |
| **Description** | Values used to create the list of selectable months. By default the month values range from `1` to `12`. However, to control exactly which months to display, the `monthValues` input can take a number, an array of numbers, or a string of comma separated numbers. For example, if only summer months should be shown, then this input value would be `monthValues="6,7,8"`. Note that month numbers do *not* have a zero-based index, meaning January's value is `1`, and December's is `12`. |
| **Attribute** | `month-values` |
| **Type** | `number ｜ number[] ｜ string ｜ undefined` |
| **Default** | `undefined` |



### multiple 

| | |
| --- | --- |
| **Description** | If `true`, multiple dates can be selected at once. Only applies to `presentation="date"` and `preferWheel="false"`. |
| **Attribute** | `multiple` |
| **Type** | `boolean` |
| **Default** | `false` |



### name 

| | |
| --- | --- |
| **Description** | The name of the control, which is submitted with the form data. |
| **Attribute** | `name` |
| **Type** | `string` |
| **Default** | `this.inputId` |



### preferWheel 

| | |
| --- | --- |
| **Description** | If `true`, a wheel picker will be rendered instead of a calendar grid where possible. If `false`, a calendar grid will be rendered instead of a wheel picker where possible.<br /><br />A wheel picker can be rendered instead of a grid when `presentation` is one of the following values: `'date'`, `'date-time'`, or `'time-date'`.<br /><br />A wheel picker will always be rendered regardless of the `preferWheel` value when `presentation` is one of the following values: `'time'`, `'month'`, `'month-year'`, or `'year'`. |
| **Attribute** | `prefer-wheel` |
| **Type** | `boolean` |
| **Default** | `false` |



### presentation 

| | |
| --- | --- |
| **Description** | Which values you want to select. `'date'` will show a calendar picker to select the month, day, and year. `'time'` will show a time picker to select the hour, minute, and (optionally) AM/PM. `'date-time'` will show the date picker first and time picker second. `'time-date'` will show the time picker first and date picker second. |
| **Attribute** | `presentation` |
| **Type** | `"date" ｜ "date-time" ｜ "month" ｜ "month-year" ｜ "time" ｜ "time-date" ｜ "year"` |
| **Default** | `'date-time'` |



### readonly 

| | |
| --- | --- |
| **Description** | If `true`, the datetime appears normal but is not interactive. |
| **Attribute** | `readonly` |
| **Type** | `boolean` |
| **Default** | `false` |



### showClearButton 

| | |
| --- | --- |
| **Description** | If `true`, a "Clear" button will be rendered alongside the default "Cancel" and "OK" buttons at the bottom of the `ion-datetime` component. Developers can also use the `button` slot if they want to customize these buttons. If custom buttons are set in the `button` slot then the default buttons will not be rendered. |
| **Attribute** | `show-clear-button` |
| **Type** | `boolean` |
| **Default** | `false` |



### showDefaultButtons 

| | |
| --- | --- |
| **Description** | If `true`, the default "Cancel" and "OK" buttons will be rendered at the bottom of the `ion-datetime` component. Developers can also use the `button` slot if they want to customize these buttons. If custom buttons are set in the `button` slot then the default buttons will not be rendered. |
| **Attribute** | `show-default-buttons` |
| **Type** | `boolean` |
| **Default** | `false` |



### showDefaultTimeLabel 

| | |
| --- | --- |
| **Description** | If `true`, the default "Time" label will be rendered for the time selector of the `ion-datetime` component. Developers can also use the `time-label` slot if they want to customize this label. If a custom label is set in the `time-label` slot then the default label will not be rendered. |
| **Attribute** | `show-default-time-label` |
| **Type** | `boolean` |
| **Default** | `true` |



### showDefaultTitle 

| | |
| --- | --- |
| **Description** | If `true`, a header will be shown above the calendar picker. This will include both the slotted title, and the selected date. |
| **Attribute** | `show-default-title` |
| **Type** | `boolean` |
| **Default** | `false` |



### size 

| | |
| --- | --- |
| **Description** | If `cover`, the `ion-datetime` will expand to cover the full width of its container. If `fixed`, the `ion-datetime` will have a fixed width. |
| **Attribute** | `size` |
| **Type** | `"cover" ｜ "fixed"` |
| **Default** | `'fixed'` |



### titleSelectedDatesFormatter 

| | |
| --- | --- |
| **Description** | A callback used to format the header text that shows how many dates are selected. Only used if there are 0 or more than 1 selected (i.e. unused for exactly 1). By default, the header text is set to "numberOfDates days". |
| **Attribute** | `undefined` |
| **Type** | `((selectedDates: string[]) => string) ｜ undefined` |
| **Default** | `undefined` |



### value 

| | |
| --- | --- |
| **Description** | The value of the datetime as a valid ISO 8601 datetime string. Should be an array of strings if `multiple="true"`. |
| **Attribute** | `value` |
| **Type** | `null ｜ string ｜ string[] ｜ undefined` |
| **Default** | `undefined` |



### yearValues 

| | |
| --- | --- |
| **Description** | Values used to create the list of selectable years. By default the year values range between the `min` and `max` datetime inputs. However, to control exactly which years to display, the `yearValues` input can take a number, an array of numbers, or string of comma separated numbers. For example, to show upcoming and recent leap years, then this input's value would be `yearValues="2024,2020,2016,2012,2008"`. |
| **Attribute** | `year-values` |
| **Type** | `number ｜ number[] ｜ string ｜ undefined` |
| **Default** | `undefined` |

