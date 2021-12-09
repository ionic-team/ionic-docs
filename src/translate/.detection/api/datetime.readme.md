# ion-datetime

Datetimes present a calendar interface and time wheel, making it easy for users to select dates and times. Datetimes are similar to the native `input` elements of `datetime-local`, however, Ionic Framework's Datetime component makes it easy to display the date and time in the a preferred format, and manage the datetime values.

### Datetime Data

Historically, handling datetime values within JavaScript, or even within HTML
inputs, has always been a challenge. Specifically, JavaScript's `Date` object is
notoriously difficult to correctly parse apart datetime strings or to format
datetime values. Even worse is how different browsers and JavaScript versions
parse various datetime strings differently, especially per locale.

Fortunately, Ionic Framework's datetime input has been designed so developers can avoid
the common pitfalls, allowing developers to easily manipulate datetime values and give the user a simple datetime picker for a great user experience.

##### ISO 8601 Datetime Format: YYYY-MM-DDTHH:mmZ

Ionic Framework uses the [ISO 8601 datetime format](https://www.w3.org/TR/NOTE-datetime)
for its value. The value is simply a string, rather than using JavaScript's
`Date` object. Using the ISO datetime format makes it easy to serialize
and parse within JSON objects and databases.

An ISO format can be used as a simple year, or just the hour and minute, or get
more detailed down to the millisecond and timezone. Any of the ISO formats below
can be used, and after a user selects a new value, Ionic Framework will continue to use
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

## Min and Max Datetimes

Dates are infinite in either direction, so for a user's selection there should be at least some form of restricting the dates that can be selected. By default, the maximum date is to the end of the current year, and the minimum date is from the beginning of the year that was 100 years ago.

To customize the minimum and maximum datetime values, the `min` and `max` component properties can be provided which may make more sense for the app's use-case. Following the same IS0 8601 format listed in the table above, each component can restrict which dates can be selected by the user. By passing `2016` to the `min` property and `2020-10-31` to the `max` property, the datetime will restrict the date selection between the beginning of `2016`, and `October 31st of 2020`.

## Selecting Specific Values

While the `min` and `max` properties allow you to restrict date selection to a certain range, the `monthValues`, `dayValues`, `yearValues`, `hourValues`, and `minuteValues` properties allow you choose specific days and times that you to have enabled.

For example, if we wanted users to only select minutes in increments of 15, we could pass `"0,15,30,45"` to the `minuteValues` property.

As another example, if we wanted users to only select from the month of October, we could pass `"10"` to the `monthValues` property.

## Customizing Date and Time Presentation

Some use cases may call for only date selection or only time selection. The `presentation` property allows you to specify which pickers to show and the order to show them in. For example, `presentation="time"` would only show the time picker. `presentation="time-date"` would show the time picker first and the date picker second, but `presentation="date-time"` would show the date picker first and the time picker second.

## Reset and Cancel Buttons

`ion-datetime` provides `cancel` and `reset` methods that you can call when clicking on custom buttons that you have provided in the `buttons` slot. The `reset` method also allows you to provide a date to reset the datetime to.

## Confirming Selected Values

By default, `ionChange` is emitted with the new datetime value whenever a new date is selected. To require user confirmation before emitting `ionChange`, you can either set the `showDefaultButtons` property to `true` or use the `buttons` slot to pass in a custom confirmation button. When passing in custom buttons, the confirm button must call the `confirm` method on `ion-datetime` for `ionChange` to be emitted.

## Localization

Ionic Framework makes use of the [Intl.DatetimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DatetimeFormat) Web API which allows us to automatically localize the month and day names according to the language and region set on the user's device.

For instances where you need a specific locale, you can use the `locale` property to set it. The following example sets the language to "French" and the region to "France":

```html
<ion-datetime locale="fr-FR"></ion-datetime>
```

### Controlling the Hour Cycle

`ion-datetime` will use the hour cycle that is specified by the `locale` property by default. For example, if `locale` is set to `en-US`, then `ion-datetime` will use a 12 hour cycle.

There are 4 primary hour cycle types:

| Hour cycle type | Description                                                  |
| --------------- | ------------------------------------------------------------ |
| `'h12`          | Hour system using 1–12; corresponds to 'h' in patterns. The 12 hour clock, with midnight starting at 12:00 am. |
| `'h23'`         | Hour system using 0–23; corresponds to 'H' in patterns. The 24 hour clock, with midnight starting at 0:00. |
| `'h11'`         | Hour system using 0–11; corresponds to 'K' in patterns. The 12 hour clock, with midnight starting at 0:00 am. |
| `'h24'`         | Hour system using 1–24; corresponds to 'k' in pattern. The 24 hour clock, with midnight starting at 24:00. |

>  Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle

There may be scenarios where you need to have more control over which hour cycle is used. This is where the `hourCycle` property can help.

In the following example, we can use the `hourCycle` property to force `ion-datetime` to use the 12 hour cycle even though the locale is `en-GB`, which uses a 24 hour cycle by default:

```html
<ion-datetime hour-cycle="h12" locale="en-GB"></ion-datetime>
```

`ion-datetime` also supports [locale extension tags](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale). These tags let you encode information about the locale in the locale string itself. Developers may prefer to use the extension tag approach if they are using the [Intl.Locale API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale) in their apps.

For example, if you wanted to use a 12 hour cycle with the `en-GB` locale, you could alternatively do:

```html
<ion-datetime locale="en-GB-u-hc-h12"></ion-datetime>
```

`ion-datetime` currently supports the `h12` and `h23` hour cycle types. Interested in seeing support for `h11` and `h24` added to `ion-datetime`? [Let us know!](https://github.com/ionic-team/ionic-framework/issues/23750)

### Setting the First Day of the Week

For `ion-datetime`, the default first day of the week is Sunday. As of 2021, there is no browser API that lets Ionic automatically determine the first day of the week based on a device's locale, though there is on-going work regarding this (see: [TC39 GitHub](https://github.com/tc39/ecma402/issues/6)).

To customize the first day of the week, developers can use the `firstDayOfWeek` property. This property takes in a number between `0` and `6` where `0` represents Sunday and `6` represents Saturday.

For example, if you wanted to have the first day of the week be Monday, you could set `firstDayOfWeek` to `1`:

```html
<ion-datetime first-day-of-week="1"></ion-datetime>
```

## Parsing Dates

When `ionChange` is emitted, we provide an ISO-8601 string in the event payload. From there, it is the developer's responsibility to format it as they see fit. We recommend using a library like [date-fns](https://date-fns.org) to format their dates properly.

Below is an example of formatting an ISO-8601 string to display the month, date, and year:

```typescript
import { format, parseISO } from 'date-fns';

/**
 * This is provided in the event
 * payload from the `ionChange` event.
 */
const dateFromIonDatetime = '2021-06-04T14:23:00-04:00';
const formattedString = format(parseISO(dateFromIonDatetime), 'MMM d, yyyy');

console.log(formattedString); // Jun 4, 2021
```

See https://date-fns.org/docs/format for a list of all the valid format tokens.

## Advanced Datetime Validation and Manipulation

The datetime picker provides the simplicity of selecting an exact format, and
persists the datetime values as a string using the standardized [ISO 8601
datetime format](https://www.w3.org/TR/NOTE-datetime). However, it's important
to note that `ion-datetime` does not attempt to solve all situations when
validating and manipulating datetime values. If datetime values need to be
parsed from a certain format, or manipulated (such as adding 5 days to a date,
subtracting 30 minutes, etc.), or even formatting data to a specific locale,
then we highly recommend using [date-fns](https://date-fns.org) to work with
dates in JavaScript.

## Accessibility

### Keyboard Navigation

`ion-datetime` has full keyboard support for navigating between focusable elements inside of the component. The following table details what each key does:

| Key                | Function                                                     |
| ------------------ | ------------------------------------------------------------ |
| `Tab`              | Moves focus to the next focusable element.                   |
| `Shift` + `Tab`    | Moves focus to the previous focusable element.               |
| `Space` or `Enter` | Clicks the focusable element.                                |

#### Date Grid

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

#### Time, Month, and Year Wheels

When using the time wheel picker, you can use the number keys to select hour and minute values when the columns are focused.

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

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface DatetimeCustomEvent extends CustomEvent {
  detail: DatetimeChangeEventDetail;
  target: HTMLIonDatetimeElement;
}
```
