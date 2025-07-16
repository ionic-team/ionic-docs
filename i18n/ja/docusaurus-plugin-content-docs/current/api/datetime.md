---
title: "ion-datetime"
demoUrl: "/docs/demos/api/datetime/index.html"
demoSourceUrl: "https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/datetime/index.html"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>ion-datetime: Ionic API Input for Datetime Format Picker</title>
  <meta name="description" content="Datetimes present a picker interface to select dates and times. Ionic's API Datetime input component easily displays a preferred format, and manages values." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


  
## Properties


### cancelText

| | |
| --- | --- |
| **Description** | ピッカーのキャンセルボタンに表示するテキストです。 |
| **Attribute** | `cancel-text` |
| **Type** | `string` |
| **Default** | `'Cancel'` |



### clearText

| | |
| --- | --- |
| **Description** | ピッカーの"Clear"ボタンに表示するテキストです。 |
| **Attribute** | `clear-text` |
| **Type** | `string` |
| **Default** | `'Clear'` |



### color

| | |
| --- | --- |
| **Description** | アプリケーションのカラーパレットから使用する色を指定します。デフォルトのオプションは以下の通りです。 `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, と `"dark"` です．色に関する詳しい情報は [theming](/docs/theming/basics) を参照してください。 |
| **Attribute** | `color` |
| **Type** | `"danger" \| "dark" \| "light" \| "medium" \| "primary" \| "secondary" \| "success" \| "tertiary" \| "warning" \| string & Record<never, never> \| undefined` |
| **Default** | `'primary'` |



### dayValues

| | |
| --- | --- |
| **Description** | 選択可能な日のリストを作成するために使用する値です。デフォルトでは、指定した月のすべての曜日が表示されます。しかし、表示する曜日を正確に制御するために、`dayValues` には数値、数値の配列、またはコンマで区切られた数値の文字列を取ることができます。配列のdayが2月の`31`のように選択した月にとって無効な数字であっても、選択した月にとって有効でない日は正しく表示されないことに注意してください。 |
| **Attribute** | `day-values` |
| **Type** | `number \| number[] \| string \| undefined` |
| **Default** | `undefined` |



### disabled

| | |
| --- | --- |
| **Description** | `true`の場合、ユーザはdatetimeを操作することができません。 |
| **Attribute** | `disabled` |
| **Type** | `boolean` |
| **Default** | `false` |



### doneText

| | |
| --- | --- |
| **Description** | ピッカーの "Done "ボタンに表示するテキスト。 |
| **Attribute** | `done-text` |
| **Type** | `string` |
| **Default** | `'Done'` |



### firstDayOfWeek

| | |
| --- | --- |
| **Description** | ion-datetime`に使用する週の最初の曜日を指定します。デフォルト値は `0` で、日曜日を表す。 |
| **Attribute** | `first-day-of-week` |
| **Type** | `number` |
| **Default** | `0` |



### formatOptions

| | |
| --- | --- |
| **Description** | 日付と時刻のフォーマットオプション。それぞれ[Intl.DateTimeFormatOptions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options)型です。 |
| **Attribute** | `format-options` |
| **Type** | `undefined \| { date: DateTimeFormatOptions; time?: DateTimeFormatOptions \| undefined; } \| { date?: DateTimeFormatOptions \| undefined; time: DateTimeFormatOptions; }` |
| **Default** | `undefined` |



### highlightedDates

| | |
| --- | --- |
| **Description** | 特定の日付にカスタムテキストと背景色を適用するために使用します。  ISO 文字列と色を含むオブジェクトの配列、または ISO 文字列を受け取って色を返すコールバックのいずれかを指定します。  preferWheel="false"`を持つ `date`、`date-time`、`time-date` のプレゼンテーションにのみ適用されます。 |
| **Attribute** | `highlighted-dates` |
| **Type** | `((dateIsoString: string) => DatetimeHighlightStyle \| undefined) \| DatetimeHighlight[] \| undefined` |
| **Default** | `undefined` |



### hourCycle

| | |
| --- | --- |
| **Description** | ion-datetime`の時間周期を指定します。値が設定されていない場合、現在のロケールによって指定される。 |
| **Attribute** | `hour-cycle` |
| **Type** | `"h11" \| "h12" \| "h23" \| "h24" \| undefined` |
| **Default** | `undefined` |



### hourValues

| | |
| --- | --- |
| **Description** | 選択可能な時間のリストを作成するために使用される値です。デフォルトでは、24時間制の場合は `0` から `23` まで、12時間制の場合は `1` から `12` までの時間帯が設定されます。しかし、表示する時間を正確に制御するために、`hourValues` には数値、数値の配列、またはコンマで区切られた数値の文字列を指定することができます。 |
| **Attribute** | `hour-values` |
| **Type** | `number \| number[] \| string \| undefined` |
| **Default** | `undefined` |



### isDateEnabled

| | |
| --- | --- |
| **Description** | 個々の日付(暦日)が有効か無効かを返します。 `true`の場合、その日は有効/対話型になる。もし `false` ならば、その日は無効/非インタラクティブです。  この関数は、指定された日のISO 8601の日付文字列を受け取ります。デフォルトでは、すべての曜日が有効になります。開発者はこの関数を使用して、特定の日を無効にするカスタムロジックを記述することができます。  この関数は、レンダリングされたカレンダーの各日、前月、当月、翌月に対して呼び出されます。カスタム実装は、ジャンクを避けるためにパフォーマンスを最適化する必要があります。 |
| **Attribute** | `is-date-enabled` |
| **Type** | `((dateIsoString: string) => boolean) \| undefined` |
| **Default** | `undefined` |



### locale

| | |
| --- | --- |
| **Description** | ion-datetime`に使用するロケールを指定します。これは月と日の名前のフォーマットに影響します。`"default"`の値は、あなたのデバイスが設定するデフォルトのロケールを指します。 |
| **Attribute** | `locale` |
| **Type** | `string` |
| **Default** | `'default'` |



### max

| | |
| --- | --- |
| **Description** | 許容される最大のdatetimeを指定します。値は、[ISO 8601 datetime format standard](https://www.w3.org/TR/NOTE-datetime) の `1996-12-19` に従った日付文字列である必要があります。このフォーマットは、正確な日付時刻を指定する必要はありません。例えば、最大で`1994`のような年号を指定することができます。デフォルトはこの年の末日です。 |
| **Attribute** | `max` |
| **Type** | `string \| undefined` |
| **Default** | `undefined` |



### min

| | |
| --- | --- |
| **Description** | 許容される最小のdatetime。値は [ISO 8601 datetime format standard](https://www.w3.org/TR/NOTE-datetime) に従った日付文字列でなければならず、例えば `1996-12-19` のようなものです。このフォーマットは、正確な日付時刻を指定する必要はありません。例えば、最小値は`1994`のような年号だけでいいです。デフォルトは、今日から100年前の年頭です。 |
| **Attribute** | `min` |
| **Type** | `string \| undefined` |
| **Default** | `undefined` |



### minuteValues

| | |
| --- | --- |
| **Description** | 選択可能な分数のリストを作成するために使用される値です。デフォルトでは、分数は `0` から `59` までの範囲です。しかし、表示する分を正確に制御するために、`minuteValues` には数値、数値の配列、またはコンマで区切られた数値の文字列を取ることができます。例えば、分表示を15分ごとに行う場合は、 `minuteValues="0,15,30,45"` と入力することになります。 |
| **Attribute** | `minute-values` |
| **Type** | `number \| number[] \| string \| undefined` |
| **Default** | `undefined` |



### mode

| | |
| --- | --- |
| **Description** | modeは、どのプラットフォームのスタイルを使用するかを決定します。 |
| **Attribute** | `mode` |
| **Type** | `"ios" \| "md"` |
| **Default** | `undefined` |



### monthValues

| | |
| --- | --- |
| **Description** | 選択可能な月のリストを作成するために使用する値。デフォルトでは、月の値は `1` から `12` までの範囲です。しかし、どの月を表示するかを正確に制御するために、`monthValues` には数値、数値の配列、またはコンマで区切られた数値の文字列を取ることができます。例えば、夏の月だけを表示する場合、この入力値は `monthValues="6,7,8"` となります。つまり、1月の値は `1` であり、12月の値は `12` です。 |
| **Attribute** | `month-values` |
| **Type** | `number \| number[] \| string \| undefined` |
| **Default** | `undefined` |



### multiple

| | |
| --- | --- |
| **Description** | `true`の場合、複数の日付を一度に選択することができる。presentation="date"`と `preferWheel="false"` にのみ適用される。 |
| **Attribute** | `multiple` |
| **Type** | `boolean` |
| **Default** | `false` |



### name

| | |
| --- | --- |
| **Description** | フォームデータとともに送信されるコントロールの名前。 |
| **Attribute** | `name` |
| **Type** | `string` |
| **Default** | `this.inputId` |



### preferWheel

| | |
| --- | --- |
| **Description** | `true`の場合、可能な限りカレンダーグリッドの代わりにホイールピッカーが表示されます。もし `false` ならば、可能な限りホイールピッカーの代わりにカレンダーグリッドがレンダリングされます。  ホイールピッカーは、`presentation`が以下の値の場合、グリッドの代わりにレンダリングすることができます：`presentation`が `"date"`, `"date-time"`, または `"time-date"`.  ホイールピッカーは、`preferWheel`の値に関係なく、`presentation`が次の値のいずれかである場合に常にレンダリングされます：`"time"`, `"month"`, `"month-year"`, または `"year"`. |
| **Attribute** | `prefer-wheel` |
| **Type** | `boolean` |
| **Default** | `false` |



### presentation

| | |
| --- | --- |
| **Description** | どの値を選択するか。`"date"`はカレンダーピッカーを表示し、月、日、年を選択します。`"time"`は時間ピッカーを表示し、時、分、そして（オプションで）AM/PMを選択します。`"date-time"`は、日付ピッカーを最初に、時間ピッカーを次に表示します。"time-date"`は、最初に時間ピッカー、2番目に日付ピッカーを表示します。 |
| **Attribute** | `presentation` |
| **Type** | `"date" \| "date-time" \| "month" \| "month-year" \| "time" \| "time-date" \| "year"` |
| **Default** | `'date-time'` |



### readonly

| | |
| --- | --- |
| **Description** | true`の場合、日付は正常に表示されるが、選択された日付は変更できない。 |
| **Attribute** | `readonly` |
| **Type** | `boolean` |
| **Default** | `false` |



### showAdjacentDays

| | |
| --- | --- |
| **Description** | If `true`, the datetime calendar displays a six-week (42-day) layout, including days from the previous and next months to fill the grid. These adjacent days are selectable unless disabled. |
| **Attribute** | `show-adjacent-days` |
| **Type** | `boolean` |
| **Default** | `false` |



### showClearButton

| | |
| --- | --- |
| **Description** | `true`の場合、`ion-datetime`コンポーネントの下部にあるデフォルトの "Cancel "と "OK "ボタンと一緒に "Clear "ボタンがレンダリングされます。これらのボタンをカスタマイズしたい場合、開発者は `button` slotを使用することもできる。カスタムボタンが `button` slotに設定されている場合、デフォルトのボタンはレンダリングされません。 |
| **Attribute** | `show-clear-button` |
| **Type** | `boolean` |
| **Default** | `false` |



### showDefaultButtons

| | |
| --- | --- |
| **Description** | `true`の場合、`ion-datetime`コンポーネントの下部にデフォルトの "Cancel" と "OK" ボタンがレンダリングされます。これらのボタンをカスタマイズしたい場合は、`button`slotを使用することもできます。カスタムボタンが `button` slotに設定されている場合、デフォルトのボタンはレンダリングされません。 |
| **Attribute** | `show-default-buttons` |
| **Type** | `boolean` |
| **Default** | `false` |



### showDefaultTimeLabel

| | |
| --- | --- |
| **Description** | `true`の場合、`ion-datetime`コンポーネントの時間セレクタにデフォルトの "Time "ラベルがレンダリングされる。このラベルをカスタマイズしたい場合は、`time-label`slotを使用することもできます。 `time-label` slotにカスタムラベルが設定されている場合、デフォルトのラベルはレンダリングされません。 |
| **Attribute** | `show-default-time-label` |
| **Type** | `boolean` |
| **Default** | `true` |



### showDefaultTitle

| | |
| --- | --- |
| **Description** | `true`の場合、カレンダーピッカーの上にヘッダーが表示されます。これには、slotされたタイトルと、選択された日付の両方が含まれます。 |
| **Attribute** | `show-default-title` |
| **Type** | `boolean` |
| **Default** | `false` |



### size

| | |
| --- | --- |
| **Description** | cover`の場合、`ion-datetime`はコンテナの全幅を覆うように展開される。`fixed`の場合、`ion-datetime`は固定幅になる。 |
| **Attribute** | `size` |
| **Type** | `"cover" \| "fixed"` |
| **Default** | `'fixed'` |



### titleSelectedDatesFormatter

| | |
| --- | --- |
| **Description** | 選択されている日付の数を示すヘッダーテキストをフォーマットするために使用されるコールバック。選択されている日付が 0 あるいは 1 以上の場合にのみ使用されます (つまり、1 の場合は未使用です)。デフォルトでは、ヘッダテキストは "numberOfDates days "に設定されます。  コールバック内から `this` にアクセスする必要がある場合は https://ionicframework.com/docs/troubleshooting/runtime#accessing-this を参照。 |
| **Attribute** | `title-selected-dates-formatter` |
| **Type** | `((selectedDates: string[]) => string) \| undefined` |
| **Default** | `undefined` |



### value

| | |
| --- | --- |
| **Description** | datetimeの値を有効なISO 8601 datetime文字列として指定します。これは、`multiple="true"`の場合のみ、文字列の配列です。 |
| **Attribute** | `value` |
| **Type** | `null \| string \| string[] \| undefined` |
| **Default** | `undefined` |



### yearValues

| | |
| --- | --- |
| **Description** | 選択可能な年のリストを作成するために使用する値。デフォルトでは、年の値は日付の `min` と `max` の間に設定される。しかし、表示する年を正確に制御するために、 `yearValues` 入力には数値、数値の配列、カンマで区切られた数値の文字列を指定することができます。例えば、うるう年と最近のうるう年を表示する場合、この入力の値は `yearValues="2008,2012,2016,2020,2024"` となります。 |
| **Attribute** | `year-values` |
| **Type** | `number \| number[] \| string \| undefined` |
| **Default** | `undefined` |



## Events

| Name | Description |
| --- | --- |
| `ionBlur` | datetimeのフォーカスが外れたときに発行されます。 |
| `ionCancel` | datetimeの選択がキャンセルされたときに発生します。 |
| `ionChange` | 値(選択された日付)が変更されたときに発行される。  プログラムで `value` プロパティを設定した場合は、このイベントは発生しない。 |
| `ionFocus` | datetimeにフォーカスが当たったときに発行されます。 |


## Methods


### cancel

| | |
| --- | --- |
| **Description** | ionCancel イベントを発行し、オプションで datetime が表示されたポップオーバーまたはモーダルを閉じます。 |
| **Signature** | `cancel(closeOverlay?: boolean) => Promise<void>` |


### confirm

| | |
| --- | --- |
| **Description** | 選択されたdatetimeの値を確認し、`value`プロパティを更新し、オプションでdatetimeが表示されていたポップオーバーまたはモーダルを閉じます。 |
| **Signature** | `confirm(closeOverlay?: boolean) => Promise<void>` |


### reset

| | |
| --- | --- |
| **Description** | datetimeの内部状態をリセットするが、値は更新しません。有効なISO-8601文字列を渡すと、コンポーネントの状態は指定した日付にリセットされます。値が提供されない場合、内部状態はmin、max、todayのクランプされた値にリセットされます。 |
| **Signature** | `reset(startDate?: string) => Promise<void>` |



## CSS Shadow Parts

| Name | Description |
| --- | --- |
| `calendar-day` | 日付カレンダーの中に日を表示する個々のボタン。 |
| `calendar-day active` | 現在選択されている暦日。 |
| `calendar-day disabled` | 無効になる暦日。 |
| `calendar-day today` | 現在の日を含む暦日。 |
| `month-year-button` | グリッドスタイルレイアウト使用時に月/年ピッカーを開くボタン。 |
| `time-button` | presentation="date-time"`または`"time-date"`のグリッドスタイルレイアウトを使用しているときに、時間ピッカーを開くボタン。 |
| `time-button active` | ピッカーが開いているときのタイムピッカーボタン。 |
| `wheel-item` | ホイールスタイルレイアウトを使用している場合は個々の項目、グリッドスタイルレイアウトを使用している場合は月/年のピッカーに表示されます。 |
| `wheel-item active` | 現在選択されているホイール項目。 |


## CSS Custom Properties

| Name | Description |
| --- | --- |
| `--background` | datetimeコンポーネントの主な背景。 |
| `--background` | datetimeコンポーネントの主な背景。 |
| `--background-rgb` | datetimeコンポーネントの主な背景をRGBフォーマットで示します。 |
| `--background-rgb` | datetimeコンポーネントの主な背景をRGBフォーマットで示します。 |
| `--title-color` | タイトルの文字色です。 |
| `--title-color` | タイトルの文字色です。 |
| `--wheel-fade-background-rgb` | ホイールスタイルレイアウトの場合は非選択項目を覆うグラデーションの色、グリッドスタイルレイアウトの場合は月/年ピッカーの色。255,255,255`のようなRGBフォーマットでなければなりません。 |
| `--wheel-fade-background-rgb` | ホイールスタイルレイアウトの場合は非選択項目を覆うグラデーションの色、グリッドスタイルレイアウトの場合は月/年ピッカーの色。255,255,255`のようなRGBフォーマットでなければなりません。 |
| `--wheel-highlight-background` | ホイールスタイルレイアウトの場合は選択された項目の下、グリッドスタイルレイアウトの場合は月/年ピッカーのハイライトの背景。 |
| `--wheel-highlight-background` | ホイールスタイルレイアウトの場合は選択された項目の下、グリッドスタイルレイアウトの場合は月/年ピッカーのハイライトの背景。 |
| `--wheel-highlight-border-radius` | ホイールスタイルレイアウトの場合は選択された項目の下、グリッドスタイルレイアウトの場合は月/年ピッカーのハイライトの境界半径。 |
| `--wheel-highlight-border-radius` | ホイールスタイルレイアウトの場合は選択された項目の下、グリッドスタイルレイアウトの場合は月/年ピッカーのハイライトの境界半径。 |


## Slots

| Name | Description |
| --- | --- |
| `buttons` | datetimeのボタンです。 |
| `time-label` | datetimeの時間セレクタのラベルです。 |
| `title` | datetimeのタイトルです。 |

