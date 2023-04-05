---
title: "ion-datetime"
---
import Props from '@ionic-internal/component-api/v7/datetime/props.md';
import Events from '@ionic-internal/component-api/v7/datetime/events.md';
import Methods from '@ionic-internal/component-api/v7/datetime/methods.md';
import Parts from '@ionic-internal/component-api/v7/datetime/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/datetime/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/datetime/slots.md';

import Basic from '@site/static/usage/v7/datetime/basic/index.md';

import MaxMin from '@site/static/usage/v7/datetime/date-constraints/max-min/index.md';
import Values from '@site/static/usage/v7/datetime/date-constraints/values/index.md';
import Advanced from '@site/static/usage/v7/datetime/date-constraints/advanced/index.md';

import CustomLocale from '@site/static/usage/v7/datetime/localization/custom-locale/index.md';
import HourCycle from '@site/static/usage/v7/datetime/localization/hour-cycle/index.md';
import FirstDayOfWeek from '@site/static/usage/v7/datetime/localization/first-day-of-week/index.md';
import LocaleExtensionTags from '@site/static/usage/v7/datetime/localization/locale-extension-tags/index.md';
import TimeLabel from '@site/static/usage/v7/datetime/localization/time-label/index.md';

import MonthAndYear from '@site/static/usage/v7/datetime/presentation/month-and-year/index.md';
import Time from '@site/static/usage/v7/datetime/presentation/time/index.md';
import Date from '@site/static/usage/v7/datetime/presentation/date/index.md';

import ShowingDefaultTitle from '@site/static/usage/v7/datetime/title/showing-default-title/index.md';
import CustomizingTitle from '@site/static/usage/v7/datetime/title/customizing-title/index.md';

import ShowingConfirmationButtons from '@site/static/usage/v7/datetime/buttons/showing-confirmation-buttons/index.md';
import CustomizingButtons from '@site/static/usage/v7/datetime/buttons/customizing-buttons/index.md';
import CustomizingButtonTexts from '@site/static/usage/v7/datetime/buttons/customizing-button-texts/index.md';

import HighlightedDatesArray from '@site/static/usage/v7/datetime/highlightedDates/array/index.md';
import HighlightedDatesCallback from '@site/static/usage/v7/datetime/highlightedDates/callback/index.md';

import MultipleDateSelection from '@site/static/usage/v7/datetime/multiple/index.md';

import Theming from '@site/static/usage/v7/datetime/theming/index.md';

<head>
  <title>ion-datetime: Ionic API Input for Datetime Format Picker</title>
  <meta name="description" content="Datetimeは、日付や時刻を選択するためのピッカーインターフェイスを提供します。IonicのAPI Datetime入力コンポーネントは、好みの形式を簡単に表示し、値を管理します。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Datetimeはカレンダーとタイムホイールのインターフェイスを表示し、ユーザーが簡単に日付と時刻を選択できるようにします。Datetimeはネイティブの `datetime-local` の `input` 要素と似ていますが、Ionic FrameworkのDatetimeコンポーネントを使用すると、好みのフォーマットで日付と時刻を表示したり、datetimeの値を管理することが簡単にできます。

## 概要 

これまで、JavaScriptやHTMLの入力でdatetimeの値を扱うことは、常に困難でした。
入力でさえも、常に課題でした。
特に、JavaScriptの `Date` オブジェクトは、datetime文字列を正しく解析したり、datetime値をフォーマットしたりするのが難しいことで有名です。
さらに悪いことに、ブラウザやJavaScriptのバージョンによって、
特にロケールごとに様々なdatetime文字列の解析が異なるのです。

Ionic Frameworkのdatetimeは、開発者が一般的な落とし穴を回避できるように設計されており、
開発者は簡単にdatetime値を操作し、ユーザーにシンプルなdatetimeピッカーを提供し、素晴らしいユーザーエクスペリエンスを提供することができます。

### ISO 8601 Datetime Format: YYYY-MM-DDTHH:mmZ

Ionic Frameworkでは、[ISO 8601 datetime format](https://www.w3.org/TR/NOTE-datetime) を値として使用します。
この値は、JavaScriptの `Date` オブジェクトを使用するのではなく、単純に文字列として使用されます。
ISO datetimeフォーマットを使用することで、
JSONオブジェクトやデータベース内でのシリアライズやパースが容易になります。

以下は、 `ion-datetime` で使用できる ISO 8601 フォーマットの例です:

| Description          | Format                 | Datetime Value Example        |
| -------------------- | ---------------------- | ----------------------------  |
| Year                 | YYYY                   | 1994                          |
| Year and Month       | YYYY-MM                | 1994-12                       |
| Complete Date        | YYYY-MM-DD             | 1994-12-15                    |
| Date and Time        | YYYY-MM-DDTHH:mm       | 1994-12-15T13:47              |
| UTC Timezone         | YYYY-MM-DDTHH:mm:ssZ   | 1994-12-15T13:47:20Z          |
| Timezone Offset      | YYYY-MM-DDTHH:mm:ssTZD | 1994-12-15T13:47:20+05:00     |
| Hour and Minute      | HH:mm                  | 13:47                         |

年号は常に4桁、ミリ秒は（加算される場合は）常に3桁、その他は常に2桁であることに注意してください。
ミリ秒は3桁、その他は2桁である。
ですから、1月を表す数字には 1月を表す数字には常に先頭のゼロ、例えば`01`が付きます。
また、時刻は常に24時間表示で、
12時間表示の時計では「00」は「午前12時」、「13」は「午後1時」、「23」は「午後3時」を意味します。

:::note
秒、ミリ秒、タイムゾーンは ISO 8601 datetime フォーマットで指定できますが、 `ion-datetime` は秒、ミリ秒、タイムゾーンを選択するためのインターフェイスを提供しません。秒、ミリ秒、タイムゾーンの値を指定しても無視されます。
:::

## 基本的な使い方

<Basic />

## 日付ボタンと使う

モーダルやポップオーバーなどのオーバーレイで日付時刻を表示する必要がある場合は、 [ion-datetime-button](./datetime-button) を使用することをお勧めします。スペースに制約がある場合は、 `ion-datetime-button` を使用する必要があります。このコンポーネントは、現在の日付と時刻の値を表示するボタンを表示します。ボタンがタップされると、日付と時刻のピッカーがオーバーレイで表示されます。

## 日付コンテナ

### 日付の最小値と最大値

日付の最小値と最大値をカスタマイズするには、 `min` と `max` コンポーネントプロパティを使用します。上の表にあるのと同じ IS0 8601 フォーマットに従って、各コンポーネントはユーザーが選択できる日付を制限することができます。

次の例では、日付の選択を 2022 年 3 月から 2022 年 5 月のみに制限しています。

<MaxMin />

### 特定の値を選択する

`min` と `max` プロパティでは、日付の選択をある範囲に制限することができますが、 `monthValues`, `dayValues`, `yearValues`, `hourValues`, `minuteValues` プロパティでは、ユーザーが選択できる特定の日や時刻を選択することが可能です。

次の例では、15分単位で分を選択することができます。また、日付を5刻みで選択することができます。

<Values />

### 高度な日付制限

`isDateEnabled` プロパティを使用すると、開発者は ISO 8601 日付文字列を使用して、特定の日、日付の範囲、週末、または任意のカスタムルールを無効にするように `ion-datetime` をカスタマイズすることができます。
`isDateEnabled` プロパティは、日付が有効かどうかを示す boolean 値を返す関数を受け付けます。この関数は、レンダリングされた各日付、前月、今月、来月に対して呼び出されます。カスタムの実装では、ジャンキングを避けるために、パフォーマンスを最適化する必要があります。

次の例では、週末の日付をすべて無効にする方法を示しています。より高度な日付操作を行うには、 `date-fns` のような日付ユーティリティを使用することをお勧めします。

<Advanced />

## ローカライゼーション

Ionic Frameworkでは、[Intl.DatetimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DatetimeFormat) Web APIを利用して、ユーザーの端末に設定されている言語や地域に応じて、月名と曜日名を自動的にローカライズすることが可能です。

### カスタムロケール

特定のロケールが必要な場合、 `locale` プロパティを使用して設定することができます。ロケールは、表示される言語と日付・時刻のフォーマットの両方を制御します。

次の例では、ロケールをスペイン語（Spanish）に設定する方法を示しています。

<CustomLocale />

:::note
時刻の表記は、自動的にローカライズされません。詳しくは [Time Label](#time-label) を参照してください。
:::

### 時間サイクル

`ion-datetime` は、デフォルトで `locale` プロパティで指定された時間サイクルを使用します。例えば、 `locale` が `en-US` に設定されている場合、 `ion-datetime` は12時間のサイクルを使用します。

時間サイクルには4つのタイプがあります。

| Hour cycle type | Description                                                  |
| --------------- | ------------------------------------------------------------ |
| `'h12'`          | Hour system using 1–12; corresponds to 'h' in patterns. The 12 hour clock, with midnight starting at 12:00 am. |
| `'h23'`         | Hour system using 0–23; corresponds to 'H' in patterns. The 24 hour clock, with midnight starting at 0:00. |
| `'h11'`         | Hour system using 0–11; corresponds to 'K' in patterns. The 12 hour clock, with midnight starting at 0:00 am. |
| `'h24'`         | Hour system using 1–24; corresponds to 'k' in pattern. The 24 hour clock, with midnight starting at 24:00. |

:::note
  ソース: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle
:::


どの時間のサイクルを使用するか、もっとコントロールする必要があるシナリオがあるかもしれません。このような場合には、 `hourCycle` プロパティが役に立ちます。

次の例では、 `hourCycle` プロパティを使用して、ロケールが `en-GB` であるにもかかわらず、 `ion-datetime` に12時間周期を使用するように強制することができます。

<HourCycle />

### 週初めの日

`ion-datetime`の場合、週初めの曜日はデフォルトで日曜日です。2022年現在、Ionicがデバイスのロケールに基づいて自動的に週の最初の曜日を決定するためのブラウザAPIはありませんが、これに関する作業は進行中です（参照: [TC39 GitHub](https://github.com/tc39/ecma402/issues/6) )．

<FirstDayOfWeek />

### 時刻表記

時刻表記は自動的にローカライズされるわけではありません。幸いなことに、Ionicでは `time-label` スロットで簡単にカスタムのローカライズを提供することができます。

<TimeLabel />

### ロケールエクステンションタグ

`ion-datetime` は、 `Intl.Locale` API の一部として [locale extension tags](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale) もサポートしています。これらのタグを使用すると、ロケールに関する情報をロケール文字列自体にエンコードすることができます。開発者は、アプリの中で [Intl.Locale API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale) を使っている場合、拡張タグのアプローチを使うことを好むかもしれません。

たとえば、 `en-GB` ロケールで 12 時間周期を使用したい場合は、 `locale` と `hourCycle` の両方のプロパティを使用するのではなく、拡張タグを使用します。

<LocaleExtensionTags />

:::note
アプリで使用する前に、 `Intl.Locale` の [Browser Compatibility Chart](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale#browser_compatibility) を必ず確認してください。
:::

## プレゼンテーション

デフォルトでは、 `ion-datetime` は日付と時刻の両方を選択することができる。さらに、ユーザは特定の月、年、時間、分を選択することができます。

ユースケースによっては、日付だけを選択したり、時間だけを選択したりすることもできます。 `presentation` プロパティでは、表示するピッカーとその順番を指定することができます。例えば、 `date-time` を設定すると、カレンダーピッカーがタイムピッカーよりも先に表示されます。 `time-date` を設定すると、カレンダーピッカーはtimeピッカーの後に表示されます。

### 月と年の選択

月と年の選択は、  `presentation` プロパティに `month-year` , `year-month` , `month` , または `year` を渡すことで行うことができます。

この例では、 `month-year` を設定した datetime を示しています。

<MonthAndYear />

### 時刻の選択

時刻の選択は、 `presentation` プロパティに `date-time`, `time-date`, `time` を渡すことで行うことができます。

この例では、`time`の設定で datetime を表示しています。

<Time />

### 日付の選択

時刻の選択は、 `presentation` プロパティに `date-time`, `time-date`, または `date` を渡すことで行うことで有効になります。

この例では、`date`の設定でdatetimeを指定しています。

<Date />

### ピッカーのホイールスタイル

デフォルトでは、Ionicは `presentation` を使用する場合、グリッドスタイルのレイアウトを優先して表示します。しかし、`preferWheel` プロパティを使用すると、ホイールスタイルを表示することができます。preferWheel` が `true` の場合、Ionic は可能な限りホイールスタイルのレイアウトを優先して表示します。

特定の `presentation` オプションには、グリッドとホイールの両方のスタイルがあり、開発者は `preferWheel` プロパティで選択することができます。その他の `presentation` の値はホイールスタイルのみを持ち、グリッドスタイルは決して表示されません。下の表は、どの `presentation` の値がグリッドスタイルとホイールスタイルを持つかを示しています。

| `presentation` | グリッドシステム   | ホイールシステム   |
| -------------- | --------------- | ---------------- |
| `date`         | Yes             | Yes              |
| `date-time`    | Yes             | Yes              |
| `month`        | No              | Yes              |
| `month-year`   | No              | Yes              |
| `time`         | No              | Yes              |
| `time-date`    | Yes             | Yes              |
| `year`         | No              | Yes              |

以下の例では、ホイールピッカーに `presentation="date-time"` を指定しています。

import Wheel from '@site/static/usage/v7/datetime/presentation/wheel/index.md';

<Wheel />

## Multiple Date Selection

If the `multiple` property is set to `true`, multiple dates can be selected from the calendar picker. Clicking a selected date will deselect it.

:::note
This property is only supported when using `presentation="date"` and `preferWheel="false"`.
:::

<MultipleDateSelection />

## タイトル

デフォルトでは、`ion-datetime`は、コンポーネントに関連するヘッダーやタイトルを表示しません。開発者は `showDefaultTitle` プロパティを使用して、デフォルトのタイトル/ヘッダー構成を表示することができます。また、 `title` スロットを使用して、ヘッダーに表示される内容をカスタマイズすることもできます。

### デフォルトタイトルを表示

<ShowingDefaultTitle />

### タイトルをカスタマイズ

<CustomizingTitle />

## ボタン

デフォルトでは、新しい日付が選択されると、新しいdatetimeの値で `ionChange` が発行されます。 `ionChange` を発行する前にユーザの確認を必要とする場合は、 `showDefaultButtons` プロパティを `true` に設定するか、 `buttons` スロットでカスタム確認ボタンを渡すことができます。カスタムボタンを渡す場合、 `ionChange` を発生させるために、確認ボタンは `ion-datetime` の `confirm` メソッドを呼び出す必要があります。

### 確認ボタンの表示

デフォルトのDoneボタンとCancelボタンは、それぞれ [`confirm`](#confirm) と [`cancel`](#cancel) メソッドを呼び出すように予め設定されています。

<ShowingConfirmationButtons />

### ボタンテキストのカスタマイズ

単純なユースケースの場合、開発者は `doneText` と `cancelText` プロパティを使用して、確認とキャンセルの値にカスタムボタンテキストを指定することができます。この方法は、ボタンのテキストを変更するだけで、カスタムビヘイビアを必要としない場合に推奨します。

<CustomizingButtonTexts />

### ボタン要素のカスタマイズ

開発者は、高度なカスタム動作のための独自のボタンを提供することができる。

`ion-datetime` には `confirm`, `cancel`, `reset` メソッドがあり、開発者がカスタムボタンをクリックした際に呼び出すことができる。また、 `reset` メソッドには、日付のリセット先を指定することができます。

<CustomizingButtons />

## Highlighting Specific Dates

Using the `highlightedDates` property, developers can style particular dates with custom text or background colors. This property can be defined as either an array of dates and their colors, or a callback that receives an ISO string and returns the colors to use.

When specifying colors, any valid CSS color format can be used. This includes hex codes, rgba, [color variables](../theming/colors), etc.

To maintain a consistent user experience, the style of selected date(s) will always override custom highlights.

:::note
This property is only supported when `preferWheel="false"`, and using a `presentation` of either `"date"`, `"date-time"`, or `"time-date"`.
:::

### Using Array

An array is better when the highlights apply to fixed dates, such as due dates.

<HighlightedDatesArray />

### Using Callback

A callback is better when the highlighted dates are recurring, such as birthdays or recurring meetings.

<HighlightedDatesCallback />

## テーマ

Ionicの強力なテーマシステムを使用すると、特定のテーマに合わせてアプリ全体を簡単に変更することができます。この例では、[Color Creator](../theming/colors#new-color-creator) と [Stepped Color Generator](../theming/themes#stepped-color-generator) を使用して、 `ion-datetime` で使用できるローズ色のパレットを作成しました。

この方法の利点は、`ion-datetime`だけでなく、すべてのコンポーネントが自動的にこのテーマを利用できることです。

<Theming />

## タイムゾーン

Ionicの `ion-datetime` は、[datetime-local](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local) の動作に従い、datetimeコントロールの内部でタイムゾーンを操作・設定することはありません。つまり、「07:00」という時刻の値は、異なるタイムゾーンに応じて調整されることはありません。

[date-fns-tz](https://github.com/marnusw/date-fns-tz) のようなライブラリを使用して、datetimeの値を希望するタイムゾーンに変換することをお勧めします。

以下は、ISO-8601文字列をユーザーのデバイスに設定されたタイムゾーンで表示するためのフォーマット例です。

```typescript
import { format, utcToZonedTime } from 'date-fns-tz';

// Get the time zone set on the user's device
const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

// Create a date object from a UTC date string
const date = new Date('2014-10-25T10:46:20Z');

// Use date-fns-tz to convert from UTC to a zoned time
const zonedTime = dateFnsTz.utcToZonedTime(date, userTimeZone);

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
しかし、 `ion-datetime` は、datetimeの値を検証したり操作したりするときに、
すべての状況を解決しようとするわけではないことに注意することが重要です。
もし、datetimeの値を特定のフォーマットからパースしたり、
操作したり(例えば、日付に5日足したり、30分を引いたり)、
あるいは、特定のロケールにデータをフォーマットする必要があるなら、
JavaScriptで日付を扱うために [date-fns](https://date-fns.org) を使うことを強くお勧めします。

## アクセシビリティ

### キーボードナビゲーション

`ion-datetime` は、コンポーネント内のフォーカス可能な要素間を移動するためのフルキーボードサポートを備えています。次の表は、それぞれのキーが何をするのかの詳細です。

| Key                | Function                                                     |
| ------------------ | ------------------------------------------------------------ |
| `Tab`              | Moves focus to the next focusable element.                   |
| `Shift` + `Tab`    | Moves focus to the previous focusable element.               |
| `Space` or `Enter` | Clicks the focusable element.                                |

#### 日付の表示

| Key                | Function                                                     |
| ------------------ | ------------------------------------------------------------ |
| `ArrowUp` | Moves focus to the same day of the previous week. |
| `ArrowDown` | Moves focus to the same day of the next week. |
| `ArrowRight` | Moves focus to the next day. |
| `ArrowLeft` | Moves focus to the previous day. |
| `Home` | Moves focus to the first day of the current week. |
| `End` | Moves focus to the last day of the current week. |
| `PageUp` | Changes the grid of dates to the previous month. |
| `PageDown` | Changes the grid of dates to the next month. |
| `Shift` + `PageUp` | Changes the grid of dates to the previous year. |
| `Shift` + `PageDown` | Changes the grid of dates to the next year. |

#### 時刻、月、年のホイール

タイムホイールピッカーを使用する場合、列がフォーカスされているときに、数字キーで時、分の値を選択することができます。

| Key                | Function                                                     |
| ------------------ | ------------------------------------------------------------ |
| `ArrowUp` | Scroll to the previous item. |
| `ArrowDown` | Scroll to the next item. |
| `Home` | Scroll to the first item. |
| `End` | Scroll to the last item. |

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

## CSSカスタムプロパティ
<CustomProps />

## Slots
<Slots />
