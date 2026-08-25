---
title: 'ion-datetime'
---
import Props from '@ionic-internal/component-api/v9/datetime/props.md';
import Events from '@ionic-internal/component-api/v9/datetime/events.md';
import Methods from '@ionic-internal/component-api/v9/datetime/methods.md';
import Parts from '@ionic-internal/component-api/v9/datetime/parts.md';
import CustomProps from '@ionic-internal/component-api/v9/datetime/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v9/datetime/slots.md';

import Basic from '@site/static/usage/v9/datetime/basic/index.mdx';

import MaxMin from '@site/static/usage/v9/datetime/date-constraints/max-min/index.mdx';
import Values from '@site/static/usage/v9/datetime/date-constraints/values/index.mdx';
import Advanced from '@site/static/usage/v9/datetime/date-constraints/advanced/index.mdx';

import FormatOptions from '@site/static/usage/v9/datetime/format-options/index.mdx';

import CustomLocale from '@site/static/usage/v9/datetime/localization/custom-locale/index.mdx';
import HourCycle from '@site/static/usage/v9/datetime/localization/hour-cycle/index.mdx';
import FirstDayOfWeek from '@site/static/usage/v9/datetime/localization/first-day-of-week/index.mdx';
import LocaleExtensionTags from '@site/static/usage/v9/datetime/localization/locale-extension-tags/index.mdx';
import TimeLabel from '@site/static/usage/v9/datetime/localization/time-label/index.mdx';

import MonthAndYear from '@site/static/usage/v9/datetime/presentation/month-and-year/index.mdx';
import Time from '@site/static/usage/v9/datetime/presentation/time/index.mdx';
import Date from '@site/static/usage/v9/datetime/presentation/date/index.mdx';

import ShowingDefaultTitle from '@site/static/usage/v9/datetime/title/showing-default-title/index.mdx';
import CustomizingTitle from '@site/static/usage/v9/datetime/title/customizing-title/index.mdx';

import ShowingConfirmationButtons from '@site/static/usage/v9/datetime/buttons/showing-confirmation-buttons/index.mdx';
import CustomizingButtons from '@site/static/usage/v9/datetime/buttons/customizing-buttons/index.mdx';
import CustomizingButtonTexts from '@site/static/usage/v9/datetime/buttons/customizing-button-texts/index.mdx';

import HighlightedDatesArray from '@site/static/usage/v9/datetime/highlightedDates/array/index.mdx';
import HighlightedDatesCallback from '@site/static/usage/v9/datetime/highlightedDates/callback/index.mdx';

import ShowAdjacentDays from '@site/static/usage/v9/datetime/show-adjacent-days/index.mdx';

import MultipleDateSelection from '@site/static/usage/v9/datetime/multiple/index.mdx';

import GlobalTheming from '@site/static/usage/v9/datetime/styling/global-theming/index.mdx';
import CalendarHeaderStyling from '@site/static/usage/v9/datetime/styling/calendar-header/index.mdx';
import CalendarDaysStyling from '@site/static/usage/v9/datetime/styling/calendar-days/index.mdx';
import DatetimeHeaderStyling from '@site/static/usage/v9/datetime/styling/datetime-header/index.mdx';
import WheelStyling from '@site/static/usage/v9/datetime/styling/wheel-styling/index.mdx';

<head>
  <title>ion-datetime: Ionic API Input for Datetime Format Picker</title>
  <meta
    name="description"
    content="Datetimeは、日付や時刻を選択するためのピッカーインターフェイスを提供します。IonicのAPI Datetime入力コンポーネントは、好みの形式を簡単に表示し、値を管理します。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Datetime はカレンダーとタイムホイールのインターフェイスを表示し、ユーザーが簡単に日付と時刻を選択できるようにします。Datetime はネイティブの `datetime-local` の `input` 要素と似ていますが、Ionic Framework の Datetime コンポーネントを使用すると、好みのフォーマットで日付と時刻を表示したり、datetime の値を管理することが簡単にできます。

## 概要

これまで、JavaScript や HTML の入力で datetime の値を扱うことは、常に困難でした。
入力でさえも、常に課題でした。
特に、JavaScript の `Date` オブジェクトは、datetime 文字列を正しく解析したり、datetime 値をフォーマットしたりするのが難しいことで有名です。
さらに悪いことに、ブラウザや JavaScript のバージョンによって、
特にロケールごとに様々な datetime 文字列の解析が異なるのです。

Ionic Framework の datetime は、開発者が一般的な落とし穴を回避できるように設計されており、
開発者は簡単に datetime 値を操作し、ユーザーにシンプルな datetime ピッカーを提供し、素晴らしいユーザーエクスペリエンスを提供することができます。

### ISO 8601 日時形式: `YYYY-MM-DDTHH:mmZ`

Ionic Framework では、[ISO 8601 datetime format](https://www.w3.org/TR/NOTE-datetime) を値として使用します。
この値は、JavaScript の `Date` オブジェクトを使用するのではなく、単純に文字列として使用されます。
ISO datetime フォーマットを使用することで、
JSON オブジェクトやデータベース内でのシリアライズやパースが容易になります。

以下は、 `ion-datetime` で使用できる ISO 8601 フォーマットの例です:

| 説明                   | 形式                     | 日時値の例                  |
| ---------------------- | ------------------------ | --------------------------- |
| 年                     | `YYYY`                   | `1994`                      |
| 年と月                 | `YYYY-MM`                | `1994-12`                   |
| 完全な日付             | `YYYY-MM-DD`             | `1994-12-15`                |
| 日付と時刻             | `YYYY-MM-DDTHH:mm`       | `1994-12-15T13:47`          |
| UTC タイムゾーン       | `YYYY-MM-DDTHH:mm:ssZ`   | `1994-12-15T13:47:20Z`      |
| タイムゾーンオフセット | `YYYY-MM-DDTHH:mm:ssTZD` | `1994-12-15T13:47:20+05:00` |
| 時と分                 | `HH:mm`                  | `13:47`                     |

年は常に 4 桁、ミリ秒は（指定する場合）常に 3 桁、その他は常に 2 桁であることに注意してください。
そのため、1 月を表す数字には `01` のように必ず先頭にゼロが付きます。
また、時刻は常に 24 時間表示で、
12 時間表示の時計では「00」は「午前 12 時」、「13」は「午後 1 時」、「23」は「午後 11 時」を意味します。

:::note
秒、ミリ秒、タイムゾーンは ISO 8601 datetime フォーマットで指定できますが、 `ion-datetime` は秒、ミリ秒、タイムゾーンを選択するためのインターフェイスを提供しません。秒、ミリ秒、タイムゾーンの値を指定しても無視されます。
:::

## 基本的な使い方

<Basic />

## 日付ボタンと使う

モーダルやポップオーバーなどのオーバーレイで日付時刻を表示する必要がある場合は、 [ion-datetime-button](./datetime-button) を使用することをお勧めします。スペースに制約がある場合は、 `ion-datetime-button` を使用する必要があります。このコンポーネントは、現在の日付と時刻の値を表示するボタンを表示します。ボタンがタップされると、日付と時刻のピッカーがオーバーレイで表示されます。

## 非同期に値を設定する

すでに datetime が作成された後にプログラムで`value`が更新されると、datetime は自動的に新しい日付にジャンプします。しかし、ユーザーが datetime を操作しているときに、この方法で`value`を更新することは避けることをお勧めします。例えば、datetime の`value`が非同期処理で読み込まれる場合、値の更新が終わるまで CSS で datetime を非表示にすることをお勧めします。

## 日付コンテナ

### 日付の最小値と最大値

日付の最小値と最大値をカスタマイズするには、 `min` と `max` コンポーネントプロパティを使用します。上の表にあるのと同じ ISO 8601 フォーマットに従って、各コンポーネントはユーザーが選択できる日付を制限することができます。

以下の例では、日付の選択を 2022 年 3 月から 2022 年 5 月のみに制限しています。

<MaxMin />

### 特定の値を選択する

`min` と `max` プロパティでは、日付の選択をある範囲に制限することができますが、 `monthValues`, `dayValues`, `yearValues`, `hourValues`, `minuteValues` プロパティでは、ユーザーが選択できる特定の日や時刻を選択することが可能です。

次の例では、15 分単位で分を選択することができます。また、日付を 5 刻みで選択することができます。

<Values />

### 高度な日付制限

`isDateEnabled` プロパティを使用すると、開発者は `ion-datetime` をカスタマイズして、ISO 8601 の日付文字列を使用し、特定の日、日付の範囲、週末、または任意のカスタムルールを無効にできます。
`isDateEnabled` プロパティは、日付が有効かどうかを示すブール値を返す関数を受け付けます。この関数は、表示されている各日付と、その前月および翌月の日付に対して呼び出されます。カスタム実装では、画面のカクつきを避けるためにパフォーマンスを最適化する必要があります。

次の例では、週末の日付をすべて無効にする方法を示しています。より高度な日付操作を行うには、 `date-fns` のような日付ユーティリティを使用することをお勧めします。

<Advanced />

## ローカライゼーション {/* #localization */}

Ionic Framework では、[Intl.DatetimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DatetimeFormat) Web API を利用して、ユーザーの端末に設定されている言語や地域に応じて、月名と曜日名を自動的にローカライズすることが可能です。

### カスタムロケール

特定のロケールが必要な場合、 `locale` プロパティを使用して設定することができます。ロケールは、表示される言語と日付・時刻のフォーマットの両方を制御します。

次の例では、ロケールをスペイン語（Spanish）に設定する方法を示しています。

<CustomLocale />

:::note
時間ラベルは自動的にローカライズされません。詳細は [時間ラベル](#time-label) を参照してください。
:::

### 時間サイクル

`ion-datetime` は、デフォルトで `locale` プロパティで指定された時間サイクルを使用します。例えば、 `locale` が `en-US` に設定されている場合、 `ion-datetime` は 12 時間のサイクルを使用します。

時間サイクルには 4 つのタイプがあります。

| 時間サイクルの種類 | 説明                                                                          |
| ------------------ | ----------------------------------------------------------------------------- |
| `'h12'`            | 1〜12 を使用する時間方式。パターンの `h` に対応し、午前 12:00 から始まります。 |
| `'h23'`            | 0〜23 を使用する時間方式。パターンの `H` に対応し、0:00 から始まります。       |
| `'h11'`            | 0〜11 を使用する時間方式。パターンの `K` に対応し、午前 0:00 から始まります。  |
| `'h24'`            | 1〜24 を使用する時間方式。パターンの `k` に対応し、24:00 から始まります。      |

:::note
ソース: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle
:::

どの時間のサイクルを使用するか、もっとコントロールする必要があるシナリオがあるかもしれません。このような場合には、 `hourCycle` プロパティが役に立ちます。

次の例では、 `hourCycle` プロパティを使用して、ロケールが `en-GB` であるにもかかわらず、 `ion-datetime` に 12 時間周期を使用するように強制することができます。

<HourCycle />

### 週初めの日

`ion-datetime` の場合、デフォルトの週の最初の日は日曜日です。2022 年時点では、Ionic がデバイスのロケールに基づいて週の最初の日を自動的に判定するブラウザ API はありませんが、これに関する作業は進行中です（[TC39 GitHub](https://github.com/tc39/ecma402/issues/6) を参照）。

<FirstDayOfWeek />

### 時刻表記 {/* #time-label */}

時刻表記は自動的にローカライズされるわけではありません。幸いなことに、Ionic では `time-label` スロットで簡単にカスタムのローカライズを提供することができます。

<TimeLabel />

### ロケールエクステンションタグ

`ion-datetime` は、`Intl.Locale` API の一部として[ロケール拡張タグ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale)もサポートしています。これらのタグを使用すると、ロケールに関する情報をロケール文字列自体にエンコードすることができます。開発者は、アプリの中で [`Intl.Locale` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale) を使っている場合、拡張タグのアプローチを使うことを好むかもしれません。

たとえば、 `en-GB` ロケールで 12 時間周期を使用したい場合は、 `locale` と `hourCycle` の両方のプロパティを使用するのではなく、拡張タグを使用します。

<LocaleExtensionTags />

:::note
アプリで使用する前に、`Intl.Locale` の[ブラウザー互換性表](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale#browser_compatibility)を必ず確認してください。
:::

## プレゼンテーション

デフォルトでは、 `ion-datetime` は日付と時刻の両方を選択することができる。さらに、ユーザは特定の月、年、時間、分を選択することができます。

ユースケースによっては、日付だけを選択したり、時間だけを選択したりすることもできます。 `presentation` プロパティでは、表示するピッカーとその順番を指定することができます。例えば、 `date-time` を設定すると、カレンダーピッカーがタイムピッカーよりも先に表示されます。 `time-date` を設定すると、カレンダーピッカーは time ピッカーの後に表示されます。

### 月と年の選択

月と年の選択は、 `presentation` プロパティに `month-year` , `month` , または `year` を渡すことで行うことができます。

この例では、 `month-year` を設定した datetime を示しています。

<MonthAndYear />

### 時刻の選択

時刻の選択は、 `presentation` プロパティに `date-time`, `time-date`, `time` を渡すことで行うことができます。

この例では、`time`の設定で datetime を表示しています。

<Time />

### 日付の選択

時刻の選択は、 `presentation` プロパティに `date-time`, `time-date`, または `date` を渡すことで行うことで有効になります。

この例では、`date`の設定で datetime を指定しています。

<Date />

### ピッカーのホイールスタイル

デフォルトでは、Ionic は `presentation` を使用する場合、グリッドスタイルのレイアウトを優先して表示します。しかし、`preferWheel` プロパティを使用すると、ホイールスタイルを表示することができます。`preferWheel`が`true` の場合、Ionic は可能な限りホイールスタイルのレイアウトを優先して表示します。

特定の `presentation` オプションには、グリッドとホイールの両方のスタイルがあり、開発者は `preferWheel` プロパティで選択することができます。その他の `presentation` の値はホイールスタイルのみを持ち、グリッドスタイルは決して表示されません。下の表は、どの `presentation` の値がグリッドスタイルとホイールスタイルを持つかを示しています。

| `presentation` | グリッドシステム | ホイールシステム |
| -------------- | ---------------- | ---------------- |
| `date`         | あり             | あり             |
| `date-time`    | あり             | あり             |
| `month`        | なし             | あり             |
| `month-year`   | なし             | あり             |
| `time`         | なし             | あり             |
| `time-date`    | あり             | あり             |
| `year`         | なし             | あり             |

以下の例では、ホイールピッカーに `presentation="date-time"` を指定しています。

import Wheel from '@site/static/usage/v9/datetime/presentation/wheel/index.mdx';

<Wheel />

## 隣接する日を表示する

`showAdjacentDays` プロパティが `true` に設定されている場合、カレンダービューに前月と翌月の日が表示され、月の初めや終わりの空白を埋めることができます。ユーザーが有効な隣接日をクリックすると、カレンダーはその月のビューを表示するようにスムーズにアニメーションします。

`showAdjacentDays`が有効な場合、カレンダービューは常に 6 行表示されるため、グリッドを埋めるために必要に応じて前月または翌月の日が表示されます。例えば、ある月が週の初日に始まり、5 行目で終わるとしても、6 行目を完成させるために翌月の日が最後に表示されます。

:::note
このプロパティは、`presentation="date"` かつ `preferWheel="false"` の場合にのみサポートされます。
:::

<ShowAdjacentDays />

## 複数の日付の選択

`multiple`プロパティが`true`に設定されている場合、カレンダーピッカーから複数の日付を選択することができます。選択した日付をクリックすると選択が解除されます。

:::note
このプロパティは、`presentation="date"` かつ `preferWheel="false"` の場合にのみサポートされます。
:::

<MultipleDateSelection />

## タイトル

デフォルトでは、`ion-datetime`は、コンポーネントに関連するヘッダーやタイトルを表示しません。開発者は `showDefaultTitle` プロパティを使用して、デフォルトのタイトル/ヘッダー構成を表示することができます。また、 `title` スロットを使用して、ヘッダーに表示される内容をカスタマイズすることもできます。

### デフォルトタイトルを表示

<ShowingDefaultTitle />

### タイトルをカスタマイズ

<CustomizingTitle />

## フォーマットオプション {/* #format-options */}

`formatOptions`を指定することで、Datetime コンポーネントのヘッダーテキスト内の日付と時刻ボタン内の時刻の書式をカスタマイズすることができます。`formatOptions`プロパティ内の `date` と `time` はそれぞれ [`Intl.DateTimeFormatOptions`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) オブジェクトでなければなりません。もし `formatOptions` が指定されなかった場合、日付と時刻にはデフォルトのフォーマットが使用されます。

Datetime はタイムゾーンを [操作したり設定したりしません](#time-zones)。もし `timeZone` や `timeZoneName` が指定された場合、それらは無視され、タイムゾーンは UTC に設定される。これにより、表示される値がユーザーの現在のタイムゾーンに変換されるのではなく、選択された値と一致するようになります。

選択された表示と一致しない可能性があるので、指定するオプションには注意してください。例えば、`month`の表示に対して`minute: 'numeric'` を指定すると、予期しない動作になり、時間だけが表示されるはずのところに月が表示されるかもしれません。

<FormatOptions />

## ボタン

デフォルトでは、新しい日付が選択されると、新しい datetime の値で `ionChange` が発行されます。 `ionChange` を発行する前にユーザの確認を必要とする場合は、 `showDefaultButtons` プロパティを `true` に設定するか、 `buttons` スロットでカスタム確認ボタンを渡すことができます。カスタムボタンを渡す場合、 `ionChange` を発生させるために、確認ボタンは `ion-datetime` の `confirm` メソッドを呼び出す必要があります。

### 確認ボタンの表示

デフォルトの「完了」と「キャンセル」ボタンは、それぞれ既に [`confirm`](#method-confirm) と [`cancel`](#method-cancel) メソッドを呼び出すように事前設定されています。

<ShowingConfirmationButtons />

### ボタンテキストのカスタマイズ

単純なユースケースの場合、開発者は `doneText` と `cancelText` プロパティを使用して、確認とキャンセルの値にカスタムボタンテキストを指定することができます。この方法は、ボタンのテキストを変更するだけで、カスタムビヘイビアを必要としない場合に推奨します。

<CustomizingButtonTexts />

### ボタン要素のカスタマイズ

開発者は、高度なカスタム動作のための独自のボタンを提供することができる。

`ion-datetime` には `confirm`, `cancel`, `reset` メソッドがあり、開発者がカスタムボタンをクリックした際に呼び出すことができる。また、 `reset` メソッドには、日付のリセット先を指定することができます。

<CustomizingButtons />

## 特定の日付をハイライトする

`highlightedDates`プロパティを使用すると、開発者は特定の日付をカスタムテキストや背景色でスタイル設定することができます。このプロパティは、日付とその色の配列として定義するか、ISO 文字列を受け取って使用する色を返すコールバックとして定義することができます。

色を指定する場合は、有効な CSS カラーフォーマットを使用できます。これには、16 進コード、赤・緑・青・透明度を指定する関数、[カラーバリエーション](../theming/colors)などが含まれます。

一貫したユーザーエクスペリエンスを維持するため、選択された日付のスタイルは常にカスタムハイライトよりも優先されます。

:::note
このプロパティは、`preferWheel="false"` かつ `presentation` が `"date"`、`"date-time"`、`"time-date"` のいずれかの場合にのみサポートされます。
:::

### 配列を利用

ハイライトが期日などの固定された日付に適用される場合は、配列の方が適しています。

<HighlightedDatesArray />

### Callback を利用

誕生日や定期的なミーティングなど、ハイライトされた日付が繰り返される場合は、コールバックを使用した方がよいでしょう。

<HighlightedDatesCallback />

## スタイリング

### グローバルテーマ

Ionic の強力なテーマシステムを使用すると、特定のテーマに合わせてアプリ全体を簡単に変更することができます。この例では、[Color Creator](../theming/colors#new-color-creator) と [Stepped Color Generator](../theming/themes#stepped-color-generator) を使用して、 `ion-datetime` で使用できるローズ色のパレットを作成しました。

この方法の利点は、`ion-datetime`だけでなく、すべてのコンポーネントが自動的にこのテーマを利用できることです。

<GlobalTheming />

### Datetime Header

The datetime header manages the content for the `title` slot and the selected date.

:::note
`preferWheel` が `true` の場合、選択した日付は表示されません。
:::

<DatetimeHeaderStyling />

### カレンダーヘッダー

The calendar header manages the date navigation controls (month/year picker and prev/next buttons) and the days of the week when using a grid style layout.

The header can be styled using CSS shadow parts.

<CalendarHeaderStyling />

### Calendar Days

The calendar days in a grid-style `ion-datetime` can be styled using CSS shadow parts.

:::note
The example below selects the day 2 days ago, unless that day is in the previous month, then it selects a day 2 days in the future. This is done for demo purposes in order to show how to apply custom styling to all days, the current day, and the selected day.
:::

<CalendarDaysStyling />

### Wheel Pickers

`ion-datetime`で使用するホイールは、シャドウパーツと CSS 変数を組み合わせてスタイルを設定することができます。これは、ホイールスタイルの datetime のカラムにも、グリッドスタイルの datetime の月/年のピッカーにも適用されます。

<WheelStyling />

## タイムゾーン {/* #time-zones */}

Ionic の `ion-datetime` は、[datetime-local](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local) の動作に従い、datetime コントロールの内部でタイムゾーンを操作・設定することはありません。つまり、「07:00」という時刻の値は、異なるタイムゾーンに応じて調整されることはありません。

[date-fns-tz](https://github.com/marnusw/date-fns-tz) のようなライブラリを使用して、datetime の値を希望するタイムゾーンに変換することをお勧めします。

以下は、ISO-8601 文字列をユーザーのデバイスに設定されたタイムゾーンで表示するためのフォーマット例です。

```typescript
import { format, utcToZonedTime } from 'date-fns-tz';

// Get the time zone set on the user's device
const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

// Create a date object from a UTC date string
const date = new Date('2014-10-25T10:46:20Z');

// Use date-fns-tz to convert from UTC to a zoned time
const zonedTime = utcToZonedTime(date, userTimeZone);

// Create a formatted string from the zoned time
format(zonedTime, 'yyyy-MM-dd HH:mm:ssXXX', { timeZone: userTimeZone });
```

### 日付の値のパース

`ionChange` イベントは、イベントのペイロードに ISO-8601 形式の文字列として日付の値を出力します。アプリケーションのニーズに応じてこれをフォーマットするのは、開発者の責任です。日付の値をフォーマットするには、[date-fns](https://date-fns.org) を使用することを推奨します。

以下は、月、日、年を表示するために ISO-8601 文字列をフォーマットする例である。

```typescript
import { format, parseISO } from 'date-fns';

/**
 * This is provided in the event
 * payload from the `ionChange` event.
 *
 * The value is an ISO-8601 date string.
 */
const dateFromIonDatetime = '2021-06-04T14:23:00-04:00';
const formattedString = format(parseISO(dateFromIonDatetime), 'MMM d, yyyy');

console.log(formattedString); // Jun 4, 2021
```

See https://date-fns.org/docs/format for a list of all the valid format tokens.

## 高度な日時の検証および操作

datetime ピッカーは、正確なフォーマットを選択するシンプルさを提供し、
標準化された [ISO 8601 datetime format](https://www.w3.org/TR/NOTE-datetime) を使用して、
datetime 値を文字列として持続させることができます。
しかし、 `ion-datetime` は、datetime の値を検証したり操作したりするときに、
すべての状況を解決しようとするわけではないことに注意することが重要です。
もし、datetime の値を特定のフォーマットからパースしたり、
操作したり(例えば、日付に 5 日足したり、30 分を引いたり)、
あるいは、特定のロケールにデータをフォーマットする必要があるなら、
JavaScript で日付を扱うために [date-fns](https://date-fns.org) を使うことを強くお勧めします。

## アクセシビリティ

### キーボードインタラクション

`ion-datetime` は、コンポーネント内のフォーカス可能な要素間を移動するためのフルキーボードサポートを備えています。次の表は、それぞれのキーが何をするのかの詳細です。

| Key                                  | Description                                    |
| ------------------------------------ | ---------------------------------------------- |
| <kbd>Tab</kbd>                       | Moves focus to the next focusable element.     |
| <kbd>Shift</kbd> + <kbd>Tab</kbd>    | Moves focus to the previous focusable element. |
| <kbd>Space</kbd> or <kbd>Enter</kbd> | Clicks the focusable element.                  |

#### 日付の表示

| Key                                    | Description                                       |
| -------------------------------------- | ------------------------------------------------- |
| <kbd>ArrowUp</kbd>                     | Moves focus to the same day of the previous week. |
| <kbd>ArrowDown</kbd>                   | Moves focus to the same day of the next week.     |
| <kbd>ArrowRight</kbd>                  | Moves focus to the next day.                      |
| <kbd>ArrowLeft</kbd>                   | Moves focus to the previous day.                  |
| <kbd>Home</kbd>                        | Moves focus to the first day of the current week. |
| <kbd>End</kbd>                         | Moves focus to the last day of the current week.  |
| <kbd>PageUp</kbd>                      | Changes the grid of dates to the previous month.  |
| <kbd>PageDown</kbd>                    | Changes the grid of dates to the next month.      |
| <kbd>Shift</kbd> + <kbd>PageUp</kbd>   | Changes the grid of dates to the previous year.   |
| <kbd>Shift</kbd> + <kbd>PageDown</kbd> | Changes the grid of dates to the next year.       |

#### 時刻、月、年のホイール

Datetime のホイールピッカーは内部で [Picker](./picker) を使用しています。ホイールピッカーのアクセシビリティ機能の詳細は [Picker アクセシビリティ](./picker#accessibility) を参照してください。

## Interfaces

### DatetimeChangeEventDetail

```typescript
interface DatetimeChangeEventDetail {
  value?: string | null;
}
```

### DatetimeCustomEvent

必須ではありませんが、このコンポーネントから発行される Ionic イベントでより強く型付けを行うために、`CustomEvent` インターフェースの代わりにこのインターフェースを使用することが可能です。

```typescript
interface DatetimeCustomEvent extends CustomEvent {
  detail: DatetimeChangeEventDetail;
  target: HTMLIonDatetimeElement;
}
```

## プロパティ
<Props />

## イベント
<Events />

## メソッド
<Methods />

## CSS Shadow Parts
<Parts />

## CSS カスタムプロパティ
<CustomProps />

## Slots
<Slots />
