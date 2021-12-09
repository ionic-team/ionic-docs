# ion-datetime

Datetimeコンポーネントはページの下部にPickerインターフェースを表示し、
ユーザーが日付と時刻を簡単に選択できるようにします。
ピッカーには、年、月、日、時間、分の値を個別に選択するために使用できるスクロール可能な列が表示されます。
`Date` オブジェクトを ISO datetime 形式で使用すると、
JSONオブジェクトとデータベース内でのシリアル化と解析が簡単になります。


## Display and Picker Formats

datetimeコンポーネントでは、`<ion-datetime>` コンポーネントと、
画面の下部に表示されるピッカー・インターフェースの2つの場所に値が表示されます。
次の表に、使用できるすべての形式を示します。

| Format | Description                    | Example                 |
| ------ | ------------------------------ | ----------------------- |
| `YYYY` | Year, 4 digits                 | `2018`                  |
| `YY`   | Year, 2 digits                 | `18`                    |
| `M`    | Month                          | `1` ... `12`            |
| `MM`   | Month, leading zero            | `01` ... `12`           |
| `MMM`  | Month, short name              | `Jan`                   |
| `MMMM` | Month, full name               | `January`               |
| `D`    | Day                            | `1` ... `31`            |
| `DD`   | Day, leading zero              | `01` ... `31`           |
| `DDD`  | Day, short name                | `Fri`                   |
| `DDDD` | Day, full name                 | `Friday`                |
| `H`    | Hour, 24-hour                  | `0` ... `23`            |
| `HH`   | Hour, 24-hour, leading zero    | `00` ... `23`           |
| `h`    | Hour, 12-hour                  | `1` ... `12`            |
| `hh`   | Hour, 12-hour, leading zero    | `01` ... `12`           |
| `a`    | 12-hour time period, lowercase | `am` `pm`               |
| `A`    | 12-hour time period, uppercase | `AM` `PM`               |
| `m`    | Minute                         | `1` ... `59`            |
| `mm`   | Minute, leading zero           | `01` ... `59`           |
| `s`    | Second                         | `1` ... `59`            |
| `ss`   | Second, leading zero           | `01` ... `59`           |
| `Z`    | UTC Timezone Offset            | `Z or +HH:mm or -HH:mm` |

**Important**: 月と日に異なる名前を使用する方法については、後述の
[Month Names and Day of the Week
Names](#month-names-and-day-of-the-week-names) をご覧ください。

### Display Format

`displayFormat` の入力プロパティーは、datetimeコンポーネント内で
datetimeの値を書式付きテキストとして出力する方法を指定します。

以下の表にいくつかの例を示します。記載されているフォーマット
上記は、任意の組み合わせで表示フォーマットに渡すことができます。

| Display Format        | Example                 |
| ----------------------| ----------------------- |
| `M-YYYY`              | `6-2005`                |
| `MM/YY`               | `06/05`                 |
| `MMM YYYY`            | `Jun 2005`              |
| `YYYY, MMMM`          | `2005, June`            |
| `MMM DD, YYYY HH:mm`  | `Jun 17, 2005 11:06`    |

**Important**: `ion-datetime` は常にユーザ環境のデフォルトのタイムゾーンを表示します。
値 `09:00:00+01:00` が指定された場合、日時コンポーネントでは、
ユーザーのタイムゾーン・オフセットが `-04:00` であった場合 `04:00:00-04:00` と表示されます。
To change the display to use a different timezone, use the displayTimezone property described below.

### Display Timezone

The `displayTimezone` property allows you to change the default behavior
of displaying values relative to the user's local timezone. In addition to "UTC" valid
time zone values are determined by the browser, and in most cases follow the time zone names
of the [IANA time zone database](https://www.iana.org/time-zones), such as "Asia/Shanghai",
"Asia/Kolkata", "America/New_York". In the following example:

```html
<ion-datetime value="2019-10-01T15:43:40.394Z" display-timezone="utc"></ion-datetime>
```

The displayed value will not be converted and will be displayed as provided (UTC).

### Picker Format

`pickerFormat` プロパティは、Pickerインタフェースに表示する列、
列の順序、および各列内で使用する形式を決定します。
`pickerFormat` が指定されていない場合は、
`displayFormat` の値が使用されます。
フォーマットの例については、 [Display Format](#display-format) セクションの図を参照してください。


### Datetime Data

これまで、JavaScript内、あるいはHTMLのInputでの日時値の処理は、常に課題でした。
特に、JavaScriptの `Date` オブジェクトは、datetimeの文字列を正しく解析したり、
datetimeの値をフォーマットしたりすることが非常に困難であることで有名です。
さらに悪いことに、ブラウザとJavaScriptのバージョンが異なると、
さまざまな日時ストリングの構文解析方法が異なり、特にロケールごとに異なります。

幸いなことに、Ionicの datetime は、開発者がよくはまる落とし穴を避けることができるように設計されているため、
開発者は Input の中で日時の値を簡単にフォーマットすることができ、
ユーザーには素晴らしいUser Experienceのための
シンプルな日時ピッカーを提供することができます。

##### ISO 8601 Datetime Format: YYYY-MM-DDTHH:mmZ

Ionic では、[ISO 8601 datetime format](https://www.w3.org/TR/NOTE-datetime) を使用されます。
値は、JavaScriptの `Date` オブジェクトを使用するのではなく、単なる文字列です。
さらに、ISO datetime formatを使用すると、JSONオブジェクト内でシリアライズして渡すことが容易になり、
データベースに標準フォーマットを送信して
必要に応じて簡単に解析できるようになります。

ISO formatは、単純に年だけを利用することも、時間と分だけを使用することも、
ミリ秒とタイムゾーンまで詳細に表示することもできます。
以下のISO formatを使用でき、ユーザーが新しい値を選択した後も、
Ionic はdatetime値が最初に指定されたのと同じISOフォーマットを引き続き使用します。

| Description          | Format                 | Datetime Value Example        |
| -------------------- | ---------------------- | ----------------------------  |
| Year                 | YYYY                   | 1994                          |
| Year and Month       | YYYY-MM                | 1994-12                       |
| Complete Date        | YYYY-MM-DD             | 1994-12-15                    |
| Date and Time        | YYYY-MM-DDTHH:mm       | 1994-12-15T13:47              |
| UTC Timezone         | YYYY-MM-DDTHH:mm:ssTZD | 1994-12-15T13:47:20.789Z      |
| Timezone Offset      | YYYY-MM-DDTHH:mm:ssTZD | 1994-12-15T13:47:20.789+05:00 |
| Hour and Minute      | HH:mm                  | 13:47                         |
| Hour, Minute, Second | HH:mm:ss               | 13:47:20                      |

年は常に4桁、ミリ秒(利用している場合)は常に3桁、
その他は常に2桁となることに注意してください。
したがって、1月を表す数字の先頭には常に0 (`01`のように) が付きます。
また、時間は常に24時間形式であるため、`00`は12時間表記の`12am`、
`13`は`1pm`、`23`は`11pm`を意味します。

`displayFormat` と `pickerFormat` のどちらも
入力された値 (コンポーネントの `ngModel` によって設定される値) を
任意のフォーマットで変更できないことにも注意してください。
書式は単に値をテキストおよびピッカーのインタフェースとして表示するためのもので、
日時の値は常に有効な ISO 8601 datetime の文字列として保持されます。

## Datetimesの最大値と最小値

日付はどちらの方向にも無限であるため、
ユーザーが選択するには、選択できる日付を何らかの形で制限する必要があります。
デフォルトでは、最大の日付は現在の年の終わりまでで、
最小の日付は100年前の年の初めからです。

日時の最小値と最大値をカスタマイズするには、過去100年のデフォルト値ではなく、
アプリケーションのユースケースに適した
`min` および `max` コンポーネントプロパティを指定します。
上の表と同じIS0 8601形式に従って、
各コンポーネントはユーザーが選択できる日付を制限できます。
minプロパティに `2016` を渡し、maxプロパティに `2020-10-31` を渡すことによって、
datetimeは2016年の初めから2020年の10月31日までの間の日付の選択を制限します。


## 月の名前と曜日名

現時点では、言語またはロケールに応じて、
月名または曜日名の正しい言語/スペルを
自動的に選択するための標準規格はありません。

The good news is that there is an [Intl.DatetimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DatetimeFormat)
standard which [most browsers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DatetimeFormat#Browser_compatibility) have adopted.

However, at this time the standard has not been fully implemented by all popular browsers
so Ionic is unavailable to take advantage of it yet.

Additionally, Angular also provides an internationalization service, but it is still
under heavy development so Ionic does not depend on it at this time.

The current best practice is to provide an array of names if the app needs to use names other
than the default English version of month and day names. The month names and day names can be
either configured at the app level, or individual `ion-datetime` level.


### Advanced Datetime Validation and Manipulation

datetimeピッカーは、正確な書式を簡単に選択でき、
標準化された [ISO 8601 datetime format](https://www.w3.org/TR/NOTE-datetime) を使用して、
日時の値を文字列として保持します。
ただし、 `ion-datetime` は、日時の値を検証および操作するときに、
すべての状況を解決しようとするわけではないことに注意してください。
datetimeの値を特定の形式から解析したり、操作したり(たとえば、
日付に5日進めたり、30分戻ったり)、
あるいは特定のロケールにデータをフォーマットしたりする必要がある場合は、
[date-fns](https://date-fns.org) を使用してJavaScriptの日付を処理することを強くお勧めします。

