# ion-datetime

datetime はページの下部にピッカー・インターフェースを表示し、
ユーザーが日付と時刻を簡単に選択できるようにします。
ピッカーには、年、月、日、時間、分の値を個別に選択するためのスクロール可能な列が表示されます。
日時は `datetime-local` 型のネイティブの `input` 要素に似ていますが、Ionicのdatetimeコンポーネントを使用すると、
希望する形式で日付と時刻を表示したり、日時の値を管理したりすることが容易になります。


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

次の例の `<ion-datetime>` では、月は `short name` 、日は先頭に0を付けた数字、
カンマを置いて、年を4桁で仕様しています。
日付のほかに、時刻も24時間表示と分を利用しています。
区切り文字として任意の文字を使用できます。
この書式を使用した表示例は、`Jun 17, 2005 11:06` となります。

```html
<ion-item>
  <ion-label>Date</ion-label>
  <ion-datetime display-format="MMM DD, YYYY HH:mm"></ion-datetime>
</ion-item>
```

**Important**: `ion-datetime` will always display values relative to the user's timezone.
Given a value of `09:00:00+01:00`, the datetime component will
display it as `04:00:00-04:00` for users in a `-04:00` timezone offset.

### Picker Format

`pickerFormat` 入力プロパティは、ピッカー・インタフェースで表示する列、
列の順序、および各列内で使用する形式を決定します。
`pickerFormat` が指定されていない場合は、
`displayFormat` がデフォルトになります。

次の例では、 `<ion-datetime>`コンポーネントの表示には `06/2020` のような
`MM/YYYY` 形式が使用されます。
ただし、ピッカー・インタフェースでは、月の `long name` 、4桁の年の列が表示されます。

```html
<ion-item>
  <ion-label>Date</ion-label>
  <ion-datetime display-format="MM/YYYY" picker-format="MMMM YYYY"></ion-datetime>
</ion-item>
```

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

## Min and Max Datetimes

日付はどちらの方向（過去・未来）にも無限であるため、ユーザーが選択するには、
選択できる日付を何らかの形で制限する必要があります。
既定では、最大の日付は現在の年の終わりまでで、
最小の日付は100年前の年の初めからです。

日時の `min` と `max` をカスタマイズするために、
過去100年のデフォルト値ではなく、アプリケーションのユースケースに
適した最小値と最大値を入力できます。
上の表と同じ IS0 8601 format に従って、
各コンポーネントはユーザーが選択できる日付を制限できます。
以下に、2016年の初めから2020年の10月31日までの日付選択を制限する例を示します。

```html
<ion-item>
  <ion-label>Date</ion-label>
  <ion-datetime display-format="MMMM YYYY" min="2016" max="2020-10-31"></ion-datetime>
</ion-item>
```

## Month Names and Day of the Week Names

現時点では、言語またはロケールの設定ひとつで、
月や曜日の名前を、正しい言語/スペルで自動的に
選択することができる標準機能はありません。

幸いなことに、 [Intl.DatetimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DatetimeFormat) を
[ほとんどのブラウザが](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DatetimeFormat#Browser_compatibility) 採用しています。

しかし現時点では、この標準はすべての一般的なブラウザーで完全に実装されているわけではないため、
Ionicがこの標準を利用することはまだできません。

また、Angularは国際化サービスも提供しているが、まだ開発途中であるため、
現時点ではIonicはこれに依存していません。

現在のベスト・プラクティスは、デフォルトの英語バージョンの月名と曜日名以外の名前を使用する必要がある場合に
一連の名前を指定することです。
月名と日名は、アプリケーション・レベルまたは個別の `ion-datetime` レベルで構成できます。

### Component Input Level

```html
<ion-item>
  <ion-label>Período</ion-label>
  <ion-datetime
    display-format="DDDD MMM D, YYYY"
    month-names="janeiro, fevereiro, mar\u00e7o, ..."
    month-short-names="jan, fev, mar, ..."
    day-names="domingo, segunda-feira, ter\u00e7a-feira, ..."
    day-short-names="dom, seg, ter, ...">
  </ion-datetime>
</ion-item>
```

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

```html
<ion-item>
  <ion-label>Date</ion-label>
  <ion-datetime display-format="MM/DD/YYYY"></ion-datetime>
</ion-item>
```
