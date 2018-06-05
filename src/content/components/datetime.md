---

---

# ion-datetime

Datetimes present a picker interface from the bottom of a page, making it easy for users to select
dates and times. The picker displays scrollable columns that can be used to individually select years,
months, days, hours and minute values. Datetimes are similar to the native `input` elements of type
`datetime-local`, however, Ionic's Datetime component makes it easy to display the date and time in a
preferred format, and manage the datetime values.


## Display and Picker Formats

The datetime component displays the values in two places: in the `<ion-datetime>` component,
and in the picker interface that is presented from the bottom of the screen. The following
chart lists all of the formats that can be used.

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

**Important**: See the [Month Names and Day of the Week
Names](#month-names-and-day-of-the-week-names) section below on how to use
different names for the month and day.

### Display Format

The `displayFormat` input property specifies how a datetime's value should be
printed, as formatted text, within the datetime component.

In the following example, the display in the `<ion-datetime>` will use the
month's short name, the numerical day with a leading zero, a comma and the
four-digit year. In addition to the date, it will display the time with the
hours in the 24-hour format and the minutes. Any character can be used as a
separator. An example display using this format is: `Jun 17, 2005 11:06`.

```html
<ion-item>
  <ion-label>Date</ion-label>
  <ion-datetime display-format="MMM DD, YYYY HH:mm"></ion-datetime>
</ion-item>
```

### Picker Format

The `pickerFormat` input property determines which columns should be shown in
the interface, the order of the columns, and which format to use within each
column. If the `pickerFormat` input is not provided then it will default to the
`displayFormat`.

In the following example, the display in the `<ion-datetime>` will use the
`MM/YYYY` format, such as `06/2020`. However, the picker interface will display
two columns with the month's long name, and the four-digit year.

```html
<ion-item>
  <ion-label>Date</ion-label>
  <ion-datetime display-format="MM/YYYY" picker-format="MMMM YYYY"></ion-datetime>
</ion-item>
```

### Datetime Data

Historically, handling datetime values within JavaScript, or even within HTML
inputs, has always been a challenge. Specifically, JavaScript's `Date` object is
notoriously difficult to correctly parse apart datetime strings or to format
datetime values. Even worse is how different browsers and JavaScript versions
parse various datetime strings differently, especially per locale.

Fortunately, Ionic's datetime input has been designed so developers can avoid
the common pitfalls, allowing developers to easily format datetime values within
the input, and give the user a simple datetime picker for a great user
experience.

##### ISO 8601 Datetime Format: YYYY-MM-DDTHH:mmZ

Ionic uses the [ISO 8601 datetime format](https://www.w3.org/TR/NOTE-datetime)
for its value. The value is simply a string, rather than using JavaScript's
`Date` object. Additionally, when using the ISO datetime format, it makes it
easier to serialize and pass within JSON objects, and sending databases a
standardized format which it can be easily parsed if need be.

An ISO format can be used as a simple year, or just the hour and minute, or get
more detailed down to the millisecond and timezone. Any of the ISO formats below
can be used, and after a user selects a new value, Ionic will continue to use
the same ISO format which datetime value was originally given as.

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

Note that the year is always four-digits, milliseconds (if it's added) is always
three-digits, and all others are always two-digits. So the number representing
January always has a leading zero, such as `01`. Additionally, the hour is
always in the 24-hour format, so `00` is `12am` on a 12-hour clock, `13` means
`1pm`, and `23` means `11pm`.

It's also important to note that neither the `displayFormat` or `pickerFormat`
can set the datetime value's output, which is the value that is set by the
component's `ngModel`. The format's are merely for displaying the value as text
and the picker's interface, but the datetime's value is always persisted as a
valid ISO 8601 datetime string.

## Min and Max Datetimes

Dates are infinite in either direction, so for a user's selection there should
be at least some form of restricting the dates that can be selected. By default,
the maximum date is to the end of the current year, and the minimum date is from
the beginning of the year that was 100 years ago.

To customize the minimum and maximum datetime values, the `min` and `max`
component inputs can be provided which may make more sense for the app's
use-case, rather than the default of the last 100 years. Following the same IS0
8601 format listed in the table above, each component can restrict which dates
can be selected by the user. Below is an example of restricting the date
selection between the beginning of 2016, and October 31st of 2020:

```html
<ion-item>
  <ion-label>Date</ion-label>
  <ion-datetime display-format="MMMM YYYY" min="2016" max="2020-10-31"></ion-datetime>
</ion-item>
```

## Month Names and Day of the Week Names

At this time, there is no one-size-fits-all standard to automatically choose the
correct language/spelling for a month name, or day of the week name, depending
on the language or locale. Good news is that there is an
[Intl.DatetimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DatetimeFormat)
standard whichmost* browsers have adopted. However, at this time the standard
has not been fully implemented by all popular browsers so Ionic is unavailable
to take advantage of ityet*. Additionally, Angular also provides an
internationalization service, but it is still under heavy development so Ionic
does not depend on it at this time.

All things considered, the by far easiest solution is to just provide an array
of names if the app needs to use names other than the default English version of
month and day names. The month names and day names can be either configured at
the app level, or individual `ion-datetime` level.

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

The datetime picker provides the simplicity of selecting an exact format, and
persists the datetime values as a string using the standardized [ISO 8601
datetime format](https://www.w3.org/TR/NOTE-datetime). However, it's important
to note that `ion-datetime` does not attempt to solve all situtations when
validating and manipulating datetime values. If datetime values need to be
parsed from a certain format, or manipulated (such as adding 5 days to a date,
subtracting 30 minutes, etc.), or even formatting data to a specific locale,
then we highly recommend using [date-fns](https://date-fns.org) to work with
dates in JavaScript.

```html
<ion-item>
  <ion-label>Date</ion-label>
  <ion-datetime display-format="MM/DD/YYYY" >
  </ion-datetime>
</ion-item>
```

<!-- Auto Generated Below -->


## Properties

#### cancelText

string

The text to display on the picker's cancel button. Default: `Cancel`.


#### dayNames

string

Full day of the week names. This can be used to provide
locale names for each day in the week. Defaults to English.


#### dayShortNames

string

Short abbreviated day of the week names. This can be used to provide
locale names for each day in the week. Defaults to English.


#### dayValues

any

Values used to create the list of selectable days. By default
every day is shown for the given month. However, to control exactly which days of
the month to display, the `dayValues` input can take a number, an array of numbers, or
a string of comma separated numbers. Note that even if the array days have an invalid
number for the selected month, like `31` in February, it will correctly not show
days which are not valid for the selected month.


#### disabled

boolean

If true, the user cannot interact with the datetime. Defaults to `false`.


#### displayFormat

string

The display format of the date and time as text that shows
within the item. When the `pickerFormat` input is not used, then the
`displayFormat` is used for both display the formatted text, and determining
the datetime picker's columns. See the `pickerFormat` input description for
more info. Defaults to `MMM D, YYYY`.


#### doneText

string

The text to display on the picker's "Done" button. Default: `Done`.


#### hourValues

any

Values used to create the list of selectable hours. By default
the hour values range from `0` to `23` for 24-hour, or `1` to `12` for 12-hour. However,
to control exactly which hours to display, the `hourValues` input can take a number, an
array of numbers, or a string of comma separated numbers.


#### max

string

The maximum datetime allowed. Value must be a date string
following the
[ISO 8601 datetime format standard](https://www.w3.org/TR/NOTE-datetime),
`1996-12-19`. The format does not have to be specific to an exact
datetime. For example, the maximum could just be the year, such as `1994`.
Defaults to the end of this year.


#### min

string

The minimum datetime allowed. Value must be a date string
following the
[ISO 8601 datetime format standard](https://www.w3.org/TR/NOTE-datetime),
such as `1996-12-19`. The format does not have to be specific to an exact
datetime. For example, the minimum could just be the year, such as `1994`.
Defaults to the beginning of the year, 100 years ago from today.


#### minuteValues

any

Values used to create the list of selectable minutes. By default
the mintues range from `0` to `59`. However, to control exactly which minutes to display,
the `minuteValues` input can take a number, an array of numbers, or a string of comma
separated numbers. For example, if the minute selections should only be every 15 minutes,
then this input value would be `minuteValues="0,15,30,45"`.


#### monthNames

string

Full names for each month name. This can be used to provide
locale month names. Defaults to English.


#### monthShortNames

string

Short abbreviated names for each month name. This can be used to provide
locale month names. Defaults to English.


#### monthValues

any

Values used to create the list of selectable months. By default
the month values range from `1` to `12`. However, to control exactly which months to
display, the `monthValues` input can take a number, an array of numbers, or a string of
comma separated numbers. For example, if only summer months should be shown, then this
input value would be `monthValues="6,7,8"`. Note that month numbers do *not* have a
zero-based index, meaning January's value is `1`, and December's is `12`.


#### pickerFormat

string

The format of the date and time picker columns the user selects.
A datetime input can have one or many datetime parts, each getting their
own column which allow individual selection of that particular datetime part. For
example, year and month columns are two individually selectable columns which help
choose an exact date from the datetime picker. Each column follows the string
parse format. Defaults to use `displayFormat`.


#### pickerOptions

PickerOptions

Any additional options that the picker interface can accept.
See the [Picker API docs](../../picker/Picker) for the picker options.


#### placeholder

string

The text to display when there's no date selected yet.
Using lowercase to match the input attribute


#### value

string

the value of the datetime.


#### yearValues

any

Values used to create the list of selectable years. By default
the year values range between the `min` and `max` datetime inputs. However, to
control exactly which years to display, the `yearValues` input can take a number, an array
of numbers, or string of comma separated numbers. For example, to show upcoming and
recent leap years, then this input's value would be `yearValues="2024,2020,2016,2012,2008"`.


## Attributes

#### cancel-text

string

The text to display on the picker's cancel button. Default: `Cancel`.


#### day-names

string

Full day of the week names. This can be used to provide
locale names for each day in the week. Defaults to English.


#### day-short-names

string

Short abbreviated day of the week names. This can be used to provide
locale names for each day in the week. Defaults to English.


#### day-values

any

Values used to create the list of selectable days. By default
every day is shown for the given month. However, to control exactly which days of
the month to display, the `dayValues` input can take a number, an array of numbers, or
a string of comma separated numbers. Note that even if the array days have an invalid
number for the selected month, like `31` in February, it will correctly not show
days which are not valid for the selected month.


#### disabled

boolean

If true, the user cannot interact with the datetime. Defaults to `false`.


#### display-format

string

The display format of the date and time as text that shows
within the item. When the `pickerFormat` input is not used, then the
`displayFormat` is used for both display the formatted text, and determining
the datetime picker's columns. See the `pickerFormat` input description for
more info. Defaults to `MMM D, YYYY`.


#### done-text

string

The text to display on the picker's "Done" button. Default: `Done`.


#### hour-values

any

Values used to create the list of selectable hours. By default
the hour values range from `0` to `23` for 24-hour, or `1` to `12` for 12-hour. However,
to control exactly which hours to display, the `hourValues` input can take a number, an
array of numbers, or a string of comma separated numbers.


#### max

string

The maximum datetime allowed. Value must be a date string
following the
[ISO 8601 datetime format standard](https://www.w3.org/TR/NOTE-datetime),
`1996-12-19`. The format does not have to be specific to an exact
datetime. For example, the maximum could just be the year, such as `1994`.
Defaults to the end of this year.


#### min

string

The minimum datetime allowed. Value must be a date string
following the
[ISO 8601 datetime format standard](https://www.w3.org/TR/NOTE-datetime),
such as `1996-12-19`. The format does not have to be specific to an exact
datetime. For example, the minimum could just be the year, such as `1994`.
Defaults to the beginning of the year, 100 years ago from today.


#### minute-values

any

Values used to create the list of selectable minutes. By default
the mintues range from `0` to `59`. However, to control exactly which minutes to display,
the `minuteValues` input can take a number, an array of numbers, or a string of comma
separated numbers. For example, if the minute selections should only be every 15 minutes,
then this input value would be `minuteValues="0,15,30,45"`.


#### month-names

string

Full names for each month name. This can be used to provide
locale month names. Defaults to English.


#### month-short-names

string

Short abbreviated names for each month name. This can be used to provide
locale month names. Defaults to English.


#### month-values

any

Values used to create the list of selectable months. By default
the month values range from `1` to `12`. However, to control exactly which months to
display, the `monthValues` input can take a number, an array of numbers, or a string of
comma separated numbers. For example, if only summer months should be shown, then this
input value would be `monthValues="6,7,8"`. Note that month numbers do *not* have a
zero-based index, meaning January's value is `1`, and December's is `12`.


#### picker-format

string

The format of the date and time picker columns the user selects.
A datetime input can have one or many datetime parts, each getting their
own column which allow individual selection of that particular datetime part. For
example, year and month columns are two individually selectable columns which help
choose an exact date from the datetime picker. Each column follows the string
parse format. Defaults to use `displayFormat`.


#### picker-options



Any additional options that the picker interface can accept.
See the [Picker API docs](../../picker/Picker) for the picker options.


#### placeholder

string

The text to display when there's no date selected yet.
Using lowercase to match the input attribute


#### value

string

the value of the datetime.


#### year-values

any

Values used to create the list of selectable years. By default
the year values range between the `min` and `max` datetime inputs. However, to
control exactly which years to display, the `yearValues` input can take a number, an array
of numbers, or string of comma separated numbers. For example, to show upcoming and
recent leap years, then this input's value would be `yearValues="2024,2020,2016,2012,2008"`.


## Events

#### ionCancel

Emitted when the datetime selection was cancelled.


#### ionStyle

Emitted when the styles change.



----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
