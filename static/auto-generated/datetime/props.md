

### cancelText 

| | |
| --- | --- |
| **Description** | The text to display on the picker's cancel button.<br /><br />自動翻訳: ピッカーのキャンセルボタンに表示するテキストです。 |
| **Attribute** | `cancel-text` |
| **Type** | `string` |
| **Default** | `'Cancel'` |



### clearText 

| | |
| --- | --- |
| **Description** | The text to display on the picker's "Clear" button.<br /><br />自動翻訳: ピッカーの「クリア」ボタンに表示するテキストです。 |
| **Attribute** | `clear-text` |
| **Type** | `string` |
| **Default** | `'Clear'` |



### color 

| | |
| --- | --- |
| **Description** | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics).<br /><br />自動翻訳: アプリケーションのカラーパレットから使用する色を指定します。デフォルトのオプションは以下の通りです。一次色"`、二次色"`、三次色"`、成功色"`、警告色"`、危険色"`、明色"`、中色"`、暗色"`です．色に関する詳しい情報は [theming](/docs/theming/basics) を参照してください。 |
| **Attribute** | `color` |
| **Type** | `"danger" ｜ "dark" ｜ "light" ｜ "medium" ｜ "primary" ｜ "secondary" ｜ "success" ｜ "tertiary" ｜ "warning" ｜ string & Record<never, never> ｜ undefined` |
| **Default** | `'primary'` |



### dayValues 

| | |
| --- | --- |
| **Description** | Values used to create the list of selectable days. By default every day is shown for the given month. However, to control exactly which days of the month to display, the `dayValues` input can take a number, an array of numbers, or a string of comma separated numbers. Note that even if the array days have an invalid number for the selected month, like `31` in February, it will correctly not show days which are not valid for the selected month.<br /><br />自動翻訳: 選択可能な日のリストを作成するために使用する値です。デフォルトでは、指定した月のすべての曜日が表示されます。しかし、表示する曜日を正確に制御するために、`dayValues`入力には数値、数値の配列、またはコンマで区切られた数値の文字列を取ることができます。配列のdayが2月の`31`のように選択した月にとって無効な数字であっても、選択した月にとって有効でない日は正しく表示されないことに注意してください。 |
| **Attribute** | `day-values` |
| **Type** | `number ｜ number[] ｜ string ｜ undefined` |
| **Default** | `undefined` |



### disabled 

| | |
| --- | --- |
| **Description** | If `true`, the user cannot interact with the datetime.<br /><br />自動翻訳: `true`の場合、ユーザはdatetimeを操作することができない。 |
| **Attribute** | `disabled` |
| **Type** | `boolean` |
| **Default** | `false` |



### doneText 

| | |
| --- | --- |
| **Description** | The text to display on the picker's "Done" button.<br /><br />自動翻訳: ピッカーの "Done "ボタンに表示するテキスト。 |
| **Attribute** | `done-text` |
| **Type** | `string` |
| **Default** | `'Done'` |



### firstDayOfWeek 

| | |
| --- | --- |
| **Description** | The first day of the week to use for `ion-datetime`. The default value is `0` and represents Sunday.<br /><br />自動翻訳: ion-datetime`に使用する週の最初の曜日を指定する。デフォルト値は `0` で、日曜日を表す。 |
| **Attribute** | `first-day-of-week` |
| **Type** | `number` |
| **Default** | `0` |



### highlightedDates 

| | |
| --- | --- |
| **Description** | Used to apply custom text and background colors to specific dates.<br /><br />Can be either an array of objects containing ISO strings and colors, or a callback that receives an ISO string and returns the colors.<br /><br />Only applies to the `date`, `date-time`, and `time-date` presentations, with `preferWheel="false"`.<br /><br />自動翻訳: 特定の日付にカスタムテキストと背景色を適用するために使用します。  ISO 文字列と色を含むオブジェクトの配列、または ISO 文字列を受け取って色を返すコールバックのいずれかを指定します。  preferWheel="false"`を持つ `date`、`date-time`、`time-date` のプレゼンテーションにのみ適用されます。 |
| **Attribute** | `undefined` |
| **Type** | `((dateIsoString: string) => DatetimeHighlightStyle ｜ undefined) ｜ DatetimeHighlight[] ｜ undefined` |
| **Default** | `undefined` |



### hourCycle 

| | |
| --- | --- |
| **Description** | The hour cycle of the `ion-datetime`. If no value is set, this is specified by the current locale.<br /><br />自動翻訳: ion-datetime`の時間周期を指定する。値が設定されていない場合、現在のロケールによって指定される。 |
| **Attribute** | `hour-cycle` |
| **Type** | `"h12" ｜ "h23" ｜ undefined` |
| **Default** | `undefined` |



### hourValues 

| | |
| --- | --- |
| **Description** | Values used to create the list of selectable hours. By default the hour values range from `0` to `23` for 24-hour, or `1` to `12` for 12-hour. However, to control exactly which hours to display, the `hourValues` input can take a number, an array of numbers, or a string of comma separated numbers.<br /><br />自動翻訳: 選択可能な時間のリストを作成するために使用される値です。デフォルトでは、24時間制の場合は `0` から `23` まで、12時間制の場合は `1` から `12` までの時間帯が設定されます。しかし、表示する時間を正確に制御するために、`hourValues`入力には数値、数値の配列、またはコンマで区切られた数値の文字列を指定することができます。 |
| **Attribute** | `hour-values` |
| **Type** | `number ｜ number[] ｜ string ｜ undefined` |
| **Default** | `undefined` |



### isDateEnabled 

| | |
| --- | --- |
| **Description** | Returns if an individual date (calendar day) is enabled or disabled.<br /><br />If `true`, the day will be enabled/interactive. If `false`, the day will be disabled/non-interactive.<br /><br />The function accepts an ISO 8601 date string of a given day. By default, all days are enabled. Developers can use this function to write custom logic to disable certain days.<br /><br />The function is called for each rendered calendar day, for the previous, current and next month. Custom implementations should be optimized for performance to avoid jank.<br /><br />自動翻訳: 個々の日付(暦日)が有効か無効かを返す。 `true`の場合、その日は有効/対話型になる。もし `false` ならば、その日は無効/非インタラクティブである。  この関数は、指定された日のISO 8601の日付文字列を受け取ります。デフォルトでは、すべての曜日が有効になります。開発者はこの関数を使用して、特定の日を無効にするカスタムロジックを記述することができます。  この関数は、レンダリングされたカレンダーの各日、前月、当月、翌月に対して呼び出されます。カスタム実装は、ジャンクを避けるためにパフォーマンスを最適化する必要があります。 |
| **Attribute** | `undefined` |
| **Type** | `((dateIsoString: string) => boolean) ｜ undefined` |
| **Default** | `undefined` |



### locale 

| | |
| --- | --- |
| **Description** | The locale to use for `ion-datetime`. This impacts month and day name formatting. The `'default'` value refers to the default locale set by your device.<br /><br />自動翻訳: ion-datetime`に使用するロケールを指定します。これは月と日の名前のフォーマットに影響します。default'`値は、あなたのデバイスが設定するデフォルトのロケールを参照します。 |
| **Attribute** | `locale` |
| **Type** | `string` |
| **Default** | `'default'` |



### max 

| | |
| --- | --- |
| **Description** | The maximum datetime allowed. Value must be a date string following the [ISO 8601 datetime format standard](https://www.w3.org/TR/NOTE-datetime), `1996-12-19`. The format does not have to be specific to an exact datetime. For example, the maximum could just be the year, such as `1994`. Defaults to the end of this year.<br /><br />自動翻訳: 許容される最大のdatetimeを指定します。値は、[ISO 8601 datetime format standard](https://www.w3.org/TR/NOTE-datetime) の `1996-12-19` に従った日付文字列である必要があります。このフォーマットは、正確な日付時刻を指定する必要はありません。例えば、最大で`1994`のような年号を指定することができます。デフォルトはこの年の末日です。 |
| **Attribute** | `max` |
| **Type** | `string ｜ undefined` |
| **Default** | `undefined` |



### min 

| | |
| --- | --- |
| **Description** | The minimum datetime allowed. Value must be a date string following the [ISO 8601 datetime format standard](https://www.w3.org/TR/NOTE-datetime), such as `1996-12-19`. The format does not have to be specific to an exact datetime. For example, the minimum could just be the year, such as `1994`. Defaults to the beginning of the year, 100 years ago from today.<br /><br />自動翻訳: 許容される最小のdatetime。値は [ISO 8601 datetime format standard](https://www.w3.org/TR/NOTE-datetime) に従った日付文字列でなければならず、例えば `1996-12-19` のようなものです。このフォーマットは、正確な日付時刻を指定する必要はありません。例えば、最小値は`1994`のような年号だけでよい。デフォルトは、今日から100年前の年頭です。 |
| **Attribute** | `min` |
| **Type** | `string ｜ undefined` |
| **Default** | `undefined` |



### minuteValues 

| | |
| --- | --- |
| **Description** | Values used to create the list of selectable minutes. By default the minutes range from `0` to `59`. However, to control exactly which minutes to display, the `minuteValues` input can take a number, an array of numbers, or a string of comma separated numbers. For example, if the minute selections should only be every 15 minutes, then this input value would be `minuteValues="0,15,30,45"`.<br /><br />自動翻訳: 選択可能な分数のリストを作成するために使用される値です。デフォルトでは、分数は `0` から `59` までの範囲です。しかし、表示する分を正確に制御するために、`minuteValues`入力には数値、数値の配列、またはコンマで区切られた数値の文字列を取ることができます。例えば、分表示を15分ごとに行う場合は、 `minuteValues="0,15,30,45"` と入力することになります。 |
| **Attribute** | `minute-values` |
| **Type** | `number ｜ number[] ｜ string ｜ undefined` |
| **Default** | `undefined` |



### mode 

| | |
| --- | --- |
| **Description** | The mode determines which platform styles to use.<br /><br />自動翻訳: モードは、どのプラットフォームのスタイルを使用するかを決定します。 |
| **Attribute** | `mode` |
| **Type** | `"ios" ｜ "md"` |
| **Default** | `undefined` |



### monthValues 

| | |
| --- | --- |
| **Description** | Values used to create the list of selectable months. By default the month values range from `1` to `12`. However, to control exactly which months to display, the `monthValues` input can take a number, an array of numbers, or a string of comma separated numbers. For example, if only summer months should be shown, then this input value would be `monthValues="6,7,8"`. Note that month numbers do *not* have a zero-based index, meaning January's value is `1`, and December's is `12`.<br /><br />自動翻訳: 選択可能な月のリストを作成するために使用する値。デフォルトでは、月の値は `1` から `12` までの範囲です。しかし、どの月を表示するかを正確に制御するために、`monthValues`入力には数値、数値の配列、またはコンマで区切られた数値の文字列を取ることができます。例えば、夏の月だけを表示する場合、この入力値は `monthValues="6,7,8"` となります。つまり、1月の値は `1` であり、12月の値は `12` です。 |
| **Attribute** | `month-values` |
| **Type** | `number ｜ number[] ｜ string ｜ undefined` |
| **Default** | `undefined` |



### multiple 

| | |
| --- | --- |
| **Description** | If `true`, multiple dates can be selected at once. Only applies to `presentation="date"` and `preferWheel="false"`.<br /><br />自動翻訳: `true`の場合、複数の日付を一度に選択することができる。presentation="date"`と `preferWheel="false"` にのみ適用される。 |
| **Attribute** | `multiple` |
| **Type** | `boolean` |
| **Default** | `false` |



### name 

| | |
| --- | --- |
| **Description** | The name of the control, which is submitted with the form data.<br /><br />自動翻訳: フォームデータとともに送信されるコントロールの名前。 |
| **Attribute** | `name` |
| **Type** | `string` |
| **Default** | `this.inputId` |



### preferWheel 

| | |
| --- | --- |
| **Description** | If `true`, a wheel picker will be rendered instead of a calendar grid where possible. If `false`, a calendar grid will be rendered instead of a wheel picker where possible.<br /><br />A wheel picker can be rendered instead of a grid when `presentation` is one of the following values: `'date'`, `'date-time'`, or `'time-date'`.<br /><br />A wheel picker will always be rendered regardless of the `preferWheel` value when `presentation` is one of the following values: `'time'`, `'month'`, `'month-year'`, or `'year'`.<br /><br />自動翻訳: `true`の場合、可能な限りカレンダーグリッドの代わりにホイールピッカーが表示されます。もし `false` ならば、可能な限りホイールピッカーの代わりにカレンダーグリッドがレンダリングされます。  ホイールピッカーは、`presentation`が以下の値の場合、グリッドの代わりにレンダリングすることができます。presentation`が `'date'`, `'date-time'`, または `'time-date'`.  ホイールピッカーは、`preferWheel`の値に関係なく、`presentation`が次の値のいずれかである場合に常にレンダリングされます。time'`, `month'`, `'month-year'`, または `-year'`. |
| **Attribute** | `prefer-wheel` |
| **Type** | `boolean` |
| **Default** | `false` |



### presentation 

| | |
| --- | --- |
| **Description** | Which values you want to select. `'date'` will show a calendar picker to select the month, day, and year. `'time'` will show a time picker to select the hour, minute, and (optionally) AM/PM. `'date-time'` will show the date picker first and time picker second. `'time-date'` will show the time picker first and date picker second.<br /><br />自動翻訳: どの値を選択するか。date'`はカレンダーピッカーを表示し、月、日、年を選択します。time'`は時間ピッカーを表示し、時、分、そして（オプションで）AM/PMを選択します。date-time'`は日付ピッカーを最初に表示し、時間ピッカーを次に表示します。'time-date'`は時間ピッカーを最初に、日付ピッカーを2番目に表示します。 |
| **Attribute** | `presentation` |
| **Type** | `"date" ｜ "date-time" ｜ "month" ｜ "month-year" ｜ "time" ｜ "time-date" ｜ "year"` |
| **Default** | `'date-time'` |



### readonly 

| | |
| --- | --- |
| **Description** | If `true`, the datetime appears normal but is not interactive.<br /><br />自動翻訳: `true`の場合、datetimeは正常に表示されるが、インタラクティブにはならない。 |
| **Attribute** | `readonly` |
| **Type** | `boolean` |
| **Default** | `false` |



### showClearButton 

| | |
| --- | --- |
| **Description** | If `true`, a "Clear" button will be rendered alongside the default "Cancel" and "OK" buttons at the bottom of the `ion-datetime` component. Developers can also use the `button` slot if they want to customize these buttons. If custom buttons are set in the `button` slot then the default buttons will not be rendered.<br /><br />自動翻訳: `true`の場合、`ion-datetime`コンポーネントの下部にあるデフォルトの "Cancel "と "OK "ボタンと一緒に "Clear "ボタンがレンダリングされます。これらのボタンをカスタマイズしたい場合、開発者は `button` スロットを使用することもできる。カスタムボタンが `button` スロットに設定されている場合、デフォルトのボタンはレンダリングされません。 |
| **Attribute** | `show-clear-button` |
| **Type** | `boolean` |
| **Default** | `false` |



### showDefaultButtons 

| | |
| --- | --- |
| **Description** | If `true`, the default "Cancel" and "OK" buttons will be rendered at the bottom of the `ion-datetime` component. Developers can also use the `button` slot if they want to customize these buttons. If custom buttons are set in the `button` slot then the default buttons will not be rendered.<br /><br />自動翻訳: `true`の場合、`ion-datetime`コンポーネントの下部にデフォルトの "Cancel" と "OK" ボタンがレンダリングされます。これらのボタンをカスタマイズしたい場合は、`button`スロットを使用することもできます。カスタムボタンが `button` スロットに設定されている場合、デフォルトのボタンはレンダリングされません。 |
| **Attribute** | `show-default-buttons` |
| **Type** | `boolean` |
| **Default** | `false` |



### showDefaultTimeLabel 

| | |
| --- | --- |
| **Description** | If `true`, the default "Time" label will be rendered for the time selector of the `ion-datetime` component. Developers can also use the `time-label` slot if they want to customize this label. If a custom label is set in the `time-label` slot then the default label will not be rendered.<br /><br />自動翻訳: `true`の場合、`ion-datetime`コンポーネントの時間セレクタにデフォルトの "Time "ラベルがレンダリングされる。このラベルをカスタマイズしたい場合は、`time-label`スロットを使用することもできます。time-label`スロットにカスタムラベルが設定されている場合、デフォルトのラベルはレンダリングされません。 |
| **Attribute** | `show-default-time-label` |
| **Type** | `boolean` |
| **Default** | `true` |



### showDefaultTitle 

| | |
| --- | --- |
| **Description** | If `true`, a header will be shown above the calendar picker. This will include both the slotted title, and the selected date.<br /><br />自動翻訳: `true`の場合、カレンダーピッカーの上にヘッダーが表示されます。これには、スロットされたタイトルと、選択された日付の両方が含まれます。 |
| **Attribute** | `show-default-title` |
| **Type** | `boolean` |
| **Default** | `false` |



### size 

| | |
| --- | --- |
| **Description** | If `cover`, the `ion-datetime` will expand to cover the full width of its container. If `fixed`, the `ion-datetime` will have a fixed width.<br /><br />自動翻訳: cover`の場合、`ion-datetime`はコンテナの全幅を覆うように展開される。fixed`の場合、`ion-datetime`は固定幅になる。 |
| **Attribute** | `size` |
| **Type** | `"cover" ｜ "fixed"` |
| **Default** | `'fixed'` |



### titleSelectedDatesFormatter 

| | |
| --- | --- |
| **Description** | A callback used to format the header text that shows how many dates are selected. Only used if there are 0 or more than 1 selected (i.e. unused for exactly 1). By default, the header text is set to "numberOfDates days".<br /><br />自動翻訳: 選択された日付の数を示すヘッダーテキストをフォーマットするために使用されるコールバックです。選択された日付が0または1以上の場合のみ使用されます（つまり、ちょうど1の場合は未使用です）。デフォルトでは、ヘッダーテキストは "numberOfDates days "に設定されています。 |
| **Attribute** | `undefined` |
| **Type** | `((selectedDates: string[]) => string) ｜ undefined` |
| **Default** | `undefined` |



### value 

| | |
| --- | --- |
| **Description** | The value of the datetime as a valid ISO 8601 datetime string. Should be an array of strings if `multiple="true"`.<br /><br />自動翻訳: datetimeの値を有効なISO 8601 datetime文字列として指定する。multiple="true"`の場合は、文字列の配列とする必要がある。 |
| **Attribute** | `value` |
| **Type** | `null ｜ string ｜ string[] ｜ undefined` |
| **Default** | `undefined` |



### yearValues 

| | |
| --- | --- |
| **Description** | Values used to create the list of selectable years. By default the year values range between the `min` and `max` datetime inputs. However, to control exactly which years to display, the `yearValues` input can take a number, an array of numbers, or string of comma separated numbers. For example, to show upcoming and recent leap years, then this input's value would be `yearValues="2024,2020,2016,2012,2008"`.<br /><br />自動翻訳: 選択可能な年号のリストを作成するために使用する値。デフォルトでは、年の値は `min` と `max` の間の範囲になります。しかし、表示する年を正確に制御するために、`yearValues` 入力には数値、数値の配列、またはカンマで区切られた数値の文字列を取ることができます。例えば、今後のうるう年と最近のうるう年を表示するには、この入力の値は `yearValues="2024,2020,2016,2012,2008"` となります。 |
| **Attribute** | `year-values` |
| **Type** | `number ｜ number[] ｜ string ｜ undefined` |
| **Default** | `undefined` |

