---
sidebar_label: 'ion-datetime'
demoUrl: '/docs/demos/api/datetime/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/datetime/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ion-datetime

Datetimes present a picker interface from the bottom of a page, making it easy for
users to select dates and times. The picker displays scrollable columns that can be
used to individually select years, months, days, hours and minute values. Datetimes
are similar to the native `input` elements of type `datetime-local`, however, Ionic's
Datetime component makes it easy to display the date and time in a preferred format,
and manage the datetime values.

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

The `displayFormat` property specifies how a datetime's value should be
printed, as formatted text, within the datetime component.

A few examples are provided in the chart below. The formats mentioned
above can be passed in to the display format in any combination.

| Display Format       | Example              |
| -------------------- | -------------------- |
| `M-YYYY`             | `6-2005`             |
| `MM/YY`              | `06/05`              |
| `MMM YYYY`           | `Jun 2005`           |
| `YYYY, MMMM`         | `2005, June`         |
| `MMM DD, YYYY HH:mm` | `Jun 17, 2005 11:06` |

**Important**: `ion-datetime` will by default display values relative to the user's timezone.
Given a value of `09:00:00+01:00`, the datetime component will
display it as `04:00:00-04:00` for users in a `-04:00` timezone offset.
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

The `pickerFormat` property determines which columns should be shown in the picker
interface, the order of the columns, and which format to use within each
column. If `pickerFormat` is not provided then it will use the value of
`displayFormat`. Refer to the chart in the [Display Format](#display-format) section
for some formatting examples.

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
`Date` object. Using the ISO datetime format makes it easy to serialize
and parse within JSON objects and databases.

An ISO format can be used as a simple year, or just the hour and minute, or get
more detailed down to the millisecond and timezone. Any of the ISO formats below
can be used, and after a user selects a new value, Ionic will continue to use
the same ISO format which datetime value was originally given as.

| Description          | Format                 | Datetime Value Example        |
| -------------------- | ---------------------- | ----------------------------- |
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

Also note that neither the `displayFormat` nor the `pickerFormat`
can set the datetime value's output, which is the value that is set by the
component's `ngModel`. The formats are merely for displaying the value as text
and the picker's interface, but the datetime's value is always persisted as a
valid ISO 8601 datetime string.

## Min and Max Datetimes

Dates are infinite in either direction, so for a user's selection there should
be at least some form of restricting the dates that can be selected. By default,
the maximum date is to the end of the current year, and the minimum date is from
the beginning of the year that was 100 years ago.

To customize the minimum and maximum datetime values, the `min` and `max`
component properties can be provided which may make more sense for the app's
use-case, rather than the default of the last 100 years. Following the same IS0
8601 format listed in the table above, each component can restrict which dates
can be selected by the user. By passing `2016` to the `min` property and `2020-10-31`
to the `max` property, the datetime will restrict the date selection between the
beginning of 2016, and October 31st of 2020.

## Month Names and Day of the Week Names

At this time, there is no one-size-fits-all standard to automatically choose the
correct language/spelling for a month name, or day of the week name, depending
on the language or locale.

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

The datetime picker provides the simplicity of selecting an exact format, and
persists the datetime values as a string using the standardized [ISO 8601
datetime format](https://www.w3.org/TR/NOTE-datetime). However, it's important
to note that `ion-datetime` does not attempt to solve all situations when
validating and manipulating datetime values. If datetime values need to be
parsed from a certain format, or manipulated (such as adding 5 days to a date,
subtracting 30 minutes, etc.), or even formatting data to a specific locale,
then we highly recommend using [date-fns](https://date-fns.org) to work with
dates in JavaScript.

## Usage

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-item>
  <ion-label>MMMM</ion-label>
  <ion-datetime displayFormat="MMMM" value="2012-12-15T13:47:20.789"></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>MM DD YY</ion-label>
  <ion-datetime displayFormat="MM DD YY" placeholder="Select Date"></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>Disabled</ion-label>
  <ion-datetime id="dynamicDisabled" displayFormat="MM DD YY" disabled value="1994-12-15"></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>YYYY</ion-label>
  <ion-datetime
    [pickerOptions]="customPickerOptions"
    placeholder="Custom Options"
    displayFormat="YYYY"
    min="1981"
    max="2002"
  ></ion-datetime>
</ion-item>

<ion-item>
  <ion-label position="stacked">MMMM YY</ion-label>
  <ion-datetime
    displayFormat="MMMM YY"
    min="1989-06-04"
    max="2004-08-23"
    value="1994-12-15T13:47:20.789"
  ></ion-datetime>
</ion-item>

<ion-item>
  <ion-label position="floating">MM/DD/YYYY</ion-label>
  <ion-datetime
    displayFormat="MM/DD/YYYY"
    min="1994-03-14"
    max="2012-12-09"
    value="2002-09-23T15:03:46.789"
  ></ion-datetime>
</ion-item>

<ion-item>
  <ion-label position="floating">MM/DD/YYYY</ion-label>
  <ion-datetime displayFormat="MM/DD/YYYY" min="1994-03-14" max="2012-12-09"></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>DDD. MMM DD, YY (custom locale)</ion-label>
  <ion-datetime
    value="1995-04-15"
    min="1990-02"
    max="2000"
    [dayShortNames]="customDayShortNames"
    displayFormat="DDD. MMM DD, YY"
    monthShortNames="jan, feb, mar, apr, mai, jun, jul, aug, sep, okt, nov, des"
  ></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>D MMM YYYY H:mm</ion-label>
  <ion-datetime displayFormat="D MMM YYYY H:mm" min="1997" max="2010" value="2005-06-17T11:06Z"></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>DDDD MMM D, YYYY</ion-label>
  <ion-datetime displayFormat="DDDD MMM D, YYYY" min="2005" max="2016" value="2008-09-02"></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>HH:mm</ion-label>
  <ion-datetime displayFormat="HH:mm"></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>h:mm a</ion-label>
  <ion-datetime displayFormat="h:mm a"></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>hh:mm A (15 min steps)</ion-label>
  <ion-datetime displayFormat="h:mm A" minuteValues="0,15,30,45"></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>Leap years, summer months</ion-label>
  <ion-datetime
    displayFormat="MM/YYYY"
    pickerFormat="MMMM YYYY"
    monthValues="6,7,8"
    [yearValues]="customYearValues"
  ></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>Specific days/months/years</ion-label>
  <ion-datetime
    monthValues="6,7,8"
    yearValues="2014,2015"
    dayValues="01,02,03,04,05,06,08,09,10, 11, 12, 13, 14"
    displayFormat="DD/MMM/YYYY"
  ></ion-datetime>
</ion-item>
```

```tsx
@Component({…})
export class MyComponent {
  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  customDayShortNames = ['s\u00f8n', 'man', 'tir', 'ons', 'tor', 'fre', 'l\u00f8r'];
  customPickerOptions: any;

  constructor() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: () => console.log('Clicked Save!')
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    }
  }

}
```

</TabItem>

<TabItem value="javascript">

```html
<ion-item>
  <ion-label>MMMM</ion-label>
  <ion-datetime display-format="MMMM" value="2012-12-15T13:47:20.789"></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>MM DD YY</ion-label>
  <ion-datetime display-format="MM DD YY" placeholder="Select Date"></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>Disabled</ion-label>
  <ion-datetime id="dynamicDisabled" display-format="MM DD YY" disabled value="1994-12-15"></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>YYYY</ion-label>
  <ion-datetime
    id="customPickerOptions"
    placeholder="Custom Options"
    display-format="YYYY"
    min="1981"
    max="2002"
  ></ion-datetime>
</ion-item>

<ion-item>
  <ion-label position="stacked">MMMM YY</ion-label>
  <ion-datetime
    display-format="MMMM YY"
    min="1989-06-04"
    max="2004-08-23"
    value="1994-12-15T13:47:20.789"
  ></ion-datetime>
</ion-item>

<ion-item>
  <ion-label position="floating">MM/DD/YYYY</ion-label>
  <ion-datetime
    display-format="MM/DD/YYYY"
    min="1994-03-14"
    max="2012-12-09"
    value="2002-09-23T15:03:46.789"
  ></ion-datetime>
</ion-item>

<ion-item>
  <ion-label position="floating">MM/DD/YYYY</ion-label>
  <ion-datetime display-format="MM/DD/YYYY" min="1994-03-14" max="2012-12-09"></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>DDD. MMM DD, YY (custom locale)</ion-label>
  <ion-datetime
    id="customDayShortNames"
    value="1995-04-15"
    min="1990-02"
    max="2000"
    display-format="DDD. MMM DD, YY"
    month-short-names="jan, feb, mar, apr, mai, jun, jul, aug, sep, okt, nov, des"
  ></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>D MMM YYYY H:mm</ion-label>
  <ion-datetime display-format="D MMM YYYY H:mm" min="1997" max="2010" value="2005-06-17T11:06Z"></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>DDDD MMM D, YYYY</ion-label>
  <ion-datetime display-format="DDDD MMM D, YYYY" min="2005" max="2016" value="2008-09-02"></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>HH:mm</ion-label>
  <ion-datetime display-format="HH:mm"></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>h:mm a</ion-label>
  <ion-datetime display-format="h:mm a"></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>hh:mm A (15 min steps)</ion-label>
  <ion-datetime display-format="h:mm A" minute-values="0,15,30,45"></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>Leap years, summer months</ion-label>
  <ion-datetime
    id="customYearValues"
    display-format="MM/YYYY"
    picker-format="MMMM YYYY"
    month-values="6,7,8"
  ></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>Specific days/months/years</ion-label>
  <ion-datetime
    month-values="6,7,8"
    year-values="2014,2015"
    day-values="01,02,03,04,05,06,08,09,10, 11, 12, 13, 14"
    display-format="DD/MMM/YYYY"
  ></ion-datetime>
</ion-item>
```

```javascript
var yearValuesArray = [2020, 2016, 2008, 2004, 2000, 1996];
var customYearValues = document.getElementById('customYearValues');
customYearValues.yearValues = yearValuesArray;

var dayShortNamesArray = ['s\u00f8n', 'man', 'tir', 'ons', 'tor', 'fre', 'l\u00f8r'];
var customDayShortNames = document.getElementById('customDayShortNames');
customDayShortNames.dayShortNames = dayShortNamesArray;

var customPickerButtons = {
  buttons: [
    {
      text: 'Save',
      handler: () => console.log('Clicked Save!'),
    },
    {
      text: 'Log',
      handler: () => {
        console.log('Clicked Log. Do not Dismiss.');
        return false;
      },
    },
  ],
};
var customPickerOptions = document.getElementById('customPickerOptions');
customPickerOptions.pickerOptions = customPickerButtons;
```

</TabItem>

<TabItem value="react">

```tsx
import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonDatetime,
  IonFooter,
} from '@ionic/react';

const customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];

const customDayShortNames = ['s\u00f8n', 'man', 'tir', 'ons', 'tor', 'fre', 'l\u00f8r'];

export const DateTimeExamples: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>('2012-12-15T13:47:20.789');
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>IonDatetime Examples</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>
          <IonLabel>MMMM</IonLabel>
          <IonDatetime
            displayFormat="MMMM"
            value={selectedDate}
            onIonChange={(e) => setSelectedDate(e.detail.value!)}
          ></IonDatetime>
        </IonItem>

        <IonItem>
          <IonLabel>MM DD YY</IonLabel>
          <IonDatetime
            displayFormat="MM DD YY"
            placeholder="Select Date"
            value={selectedDate}
            onIonChange={(e) => setSelectedDate(e.detail.value!)}
          ></IonDatetime>
        </IonItem>

        <IonItem>
          <IonLabel>Disabled</IonLabel>
          <IonDatetime
            id="dynamicDisabled"
            displayFormat="MM DD YY"
            disabled
            value={selectedDate}
            onIonChange={(e) => setSelectedDate(e.detail.value!)}
          ></IonDatetime>
        </IonItem>

        <IonItem>
          <IonLabel>YYYY</IonLabel>
          <IonDatetime
            pickerOptions={{
              buttons: [
                {
                  text: 'Save',
                  handler: () => console.log('Clicked Save!'),
                },
                {
                  text: 'Log',
                  handler: () => {
                    console.log('Clicked Log. Do not Dismiss.');
                    return false;
                  },
                },
              ],
            }}
            placeholder="Custom Options"
            displayFormat="YYYY"
            min="1981"
            max="2002"
            value={selectedDate}
            onIonChange={(e) => setSelectedDate(e.detail.value!)}
          ></IonDatetime>
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">MMMM YY</IonLabel>
          <IonDatetime
            displayFormat="MMMM YY"
            min="1989-06-04"
            max="2004-08-23"
            value={selectedDate}
            onIonChange={(e) => setSelectedDate(e.detail.value!)}
          ></IonDatetime>
        </IonItem>

        <IonItem>
          <IonLabel position="floating">MM/DD/YYYY</IonLabel>
          <IonDatetime
            displayFormat="MM/DD/YYYY"
            min="1994-03-14"
            max="2012-12-09"
            value={selectedDate}
            onIonChange={(e) => setSelectedDate(e.detail.value!)}
          ></IonDatetime>
        </IonItem>

        <IonItem>
          <IonLabel position="floating">MM/DD/YYYY</IonLabel>
          <IonDatetime
            displayFormat="MM/DD/YYYY"
            min="1994-03-14"
            max="2012-12-09"
            value={selectedDate}
            onIonChange={(e) => setSelectedDate(e.detail.value!)}
          ></IonDatetime>
        </IonItem>

        <IonItem>
          <IonLabel>DDD. MMM DD, YY (custom locale)</IonLabel>
          <IonDatetime
            min="1990-02"
            max="2000"
            dayShortNames={customDayShortNames}
            displayFormat="DDD. MMM DD, YY"
            monthShortNames="jan, feb, mar, apr, mai, jun, jul, aug, sep, okt, nov, des"
            value={selectedDate}
            onIonChange={(e) => setSelectedDate(e.detail.value!)}
          ></IonDatetime>
        </IonItem>

        <IonItem>
          <IonLabel>D MMM YYYY H:mm</IonLabel>
          <IonDatetime
            displayFormat="D MMM YYYY H:mm"
            min="1997"
            max="2010"
            value={selectedDate}
            onIonChange={(e) => setSelectedDate(e.detail.value!)}
          ></IonDatetime>
        </IonItem>

        <IonItem>
          <IonLabel>DDDD MMM D, YYYY</IonLabel>
          <IonDatetime
            displayFormat="DDDD MMM D, YYYY"
            min="2005"
            max="2016"
            value={selectedDate}
            onIonChange={(e) => setSelectedDate(e.detail.value!)}
          ></IonDatetime>
        </IonItem>

        <IonItem>
          <IonLabel>HH:mm</IonLabel>
          <IonDatetime
            displayFormat="HH:mm"
            value={selectedDate}
            onIonChange={(e) => setSelectedDate(e.detail.value!)}
          ></IonDatetime>
        </IonItem>

        <IonItem>
          <IonLabel>h:mm a</IonLabel>
          <IonDatetime
            displayFormat="h:mm a"
            value={selectedDate}
            onIonChange={(e) => setSelectedDate(e.detail.value!)}
          ></IonDatetime>
        </IonItem>

        <IonItem>
          <IonLabel>hh:mm A (15 min steps)</IonLabel>
          <IonDatetime
            displayFormat="h:mm A"
            minuteValues="0,15,30,45"
            value={selectedDate}
            onIonChange={(e) => setSelectedDate(e.detail.value!)}
          ></IonDatetime>
        </IonItem>

        <IonItem>
          <IonLabel>Leap years, summer months</IonLabel>
          <IonDatetime
            displayFormat="MM/YYYY"
            pickerFormat="MMMM YYYY"
            monthValues="6,7,8"
            yearValues={customYearValues}
            value={selectedDate}
            onIonChange={(e) => setSelectedDate(e.detail.value!)}
          ></IonDatetime>
        </IonItem>

        <IonItem>
          <IonLabel>Specific days/months/years</IonLabel>
          <IonDatetime
            monthValues="6,7,8"
            yearValues="2014,2015"
            dayValues="01,02,03,04,05,06,08,09,10, 11, 12, 13, 14"
            displayFormat="DD/MMM/YYYY"
            value={selectedDate}
            onIonChange={(e) => setSelectedDate(e.detail.value!)}
          ></IonDatetime>
        </IonItem>
      </IonContent>
      <IonFooter>
        <IonToolbar>Selected Date: {selectedDate ?? '(none)'}</IonToolbar>
      </IonFooter>
    </IonPage>
  );
};
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'datetime-example',
  styleUrl: 'datetime-example.css',
})
export class DatetimeExample {
  private customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  private customDayShortNames = ['s\u00f8n', 'man', 'tir', 'ons', 'tor', 'fre', 'l\u00f8r'];
  private customPickerOptions = {
    buttons: [
      {
        text: 'Save',
        handler: () => console.log('Clicked Save!'),
      },
      {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        },
      },
    ],
  };

  render() {
    return [
      <ion-item>
        <ion-label>MMMM</ion-label>
        <ion-datetime displayFormat="MMMM" value="2012-12-15T13:47:20.789"></ion-datetime>
      </ion-item>,

      <ion-item>
        <ion-label>MM DD YY</ion-label>
        <ion-datetime displayFormat="MM DD YY" placeholder="Select Date"></ion-datetime>
      </ion-item>,

      <ion-item>
        <ion-label>Disabled</ion-label>
        <ion-datetime id="dynamicDisabled" displayFormat="MM DD YY" disabled value="1994-12-15"></ion-datetime>
      </ion-item>,

      <ion-item>
        <ion-label>YYYY</ion-label>
        <ion-datetime
          pickerOptions={this.customPickerOptions}
          placeholder="Custom Options"
          displayFormat="YYYY"
          min="1981"
          max="2002"
        ></ion-datetime>
      </ion-item>,

      <ion-item>
        <ion-label position="stacked">MMMM YY</ion-label>
        <ion-datetime
          displayFormat="MMMM YY"
          min="1989-06-04"
          max="2004-08-23"
          value="1994-12-15T13:47:20.789"
        ></ion-datetime>
      </ion-item>,

      <ion-item>
        <ion-label position="floating">MM/DD/YYYY</ion-label>
        <ion-datetime
          displayFormat="MM/DD/YYYY"
          min="1994-03-14"
          max="2012-12-09"
          value="2002-09-23T15:03:46.789"
        ></ion-datetime>
      </ion-item>,

      <ion-item>
        <ion-label position="floating">MM/DD/YYYY</ion-label>
        <ion-datetime displayFormat="MM/DD/YYYY" min="1994-03-14" max="2012-12-09"></ion-datetime>
      </ion-item>,

      <ion-item>
        <ion-label>DDD. MMM DD, YY (custom locale)</ion-label>
        <ion-datetime
          value="1995-04-15"
          min="1990-02"
          max="2000"
          dayShortNames={this.customDayShortNames}
          displayFormat="DDD. MMM DD, YY"
          monthShortNames="jan, feb, mar, apr, mai, jun, jul, aug, sep, okt, nov, des"
        ></ion-datetime>
      </ion-item>,

      <ion-item>
        <ion-label>D MMM YYYY H:mm</ion-label>
        <ion-datetime displayFormat="D MMM YYYY H:mm" min="1997" max="2010" value="2005-06-17T11:06Z"></ion-datetime>
      </ion-item>,

      <ion-item>
        <ion-label>DDDD MMM D, YYYY</ion-label>
        <ion-datetime displayFormat="DDDD MMM D, YYYY" min="2005" max="2016" value="2008-09-02"></ion-datetime>
      </ion-item>,

      <ion-item>
        <ion-label>HH:mm</ion-label>
        <ion-datetime displayFormat="HH:mm"></ion-datetime>
      </ion-item>,

      <ion-item>
        <ion-label>h:mm a</ion-label>
        <ion-datetime displayFormat="h:mm a"></ion-datetime>
      </ion-item>,

      <ion-item>
        <ion-label>hh:mm A (15 min steps)</ion-label>
        <ion-datetime displayFormat="h:mm A" minuteValues="0,15,30,45"></ion-datetime>
      </ion-item>,

      <ion-item>
        <ion-label>Leap years, summer months</ion-label>
        <ion-datetime
          displayFormat="MM/YYYY"
          pickerFormat="MMMM YYYY"
          monthValues="6,7,8"
          yearValues={this.customYearValues}
        ></ion-datetime>
      </ion-item>,

      <ion-item>
        <ion-label>Specific days/months/years</ion-label>
        <ion-datetime
          monthValues="6,7,8"
          yearValues="2014,2015"
          dayValues="01,02,03,04,05,06,08,09,10, 11, 12, 13, 14"
          displayFormat="DD/MMM/YYYY"
        ></ion-datetime>
      </ion-item>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <ion-item>
    <ion-label>MMMM</ion-label>
    <ion-datetime display-format="MMMM" value="2012-12-15T13:47:20.789"></ion-datetime>
  </ion-item>

  <ion-item>
    <ion-label>MM DD YY</ion-label>
    <ion-datetime display-format="MM DD YY" placeholder="Select Date"></ion-datetime>
  </ion-item>

  <ion-item>
    <ion-label>Disabled</ion-label>
    <ion-datetime id="dynamicDisabled" display-format="MM DD YY" disabled value="1994-12-15"></ion-datetime>
  </ion-item>

  <ion-item>
    <ion-label>YYYY</ion-label>
    <ion-datetime
      :picker-options="customPickerOptions"
      placeholder="Custom Options"
      display-format="YYYY"
      min="1981"
      max="2002"
    ></ion-datetime>
  </ion-item>

  <ion-item>
    <ion-label position="stacked">MMMM YY</ion-label>
    <ion-datetime
      display-format="MMMM YY"
      min="1989-06-04"
      max="2004-08-23"
      value="1994-12-15T13:47:20.789"
    ></ion-datetime>
  </ion-item>

  <ion-item>
    <ion-label position="floating">MM/DD/YYYY</ion-label>
    <ion-datetime
      display-format="MM/DD/YYYY"
      min="1994-03-14"
      max="2012-12-09"
      value="2002-09-23T15:03:46.789"
    ></ion-datetime>
  </ion-item>

  <ion-item>
    <ion-label position="floating">MM/DD/YYYY</ion-label>
    <ion-datetime display-format="MM/DD/YYYY" min="1994-03-14" max="2012-12-09"></ion-datetime>
  </ion-item>

  <ion-item>
    <ion-label>DDD. MMM DD, YY (custom locale)</ion-label>
    <ion-datetime
      value="1995-04-15"
      min="1990-02"
      max="2000"
      :day-short-names="customDayShortNames"
      display-format="DDD. MMM DD, YY"
      month-short-names="jan, feb, mar, apr, mai, jun, jul, aug, sep, okt, nov, des"
    ></ion-datetime>
  </ion-item>

  <ion-item>
    <ion-label>D MMM YYYY H:mm</ion-label>
    <ion-datetime display-format="D MMM YYYY H:mm" min="1997" max="2010" value="2005-06-17T11:06Z"></ion-datetime>
  </ion-item>

  <ion-item>
    <ion-label>DDDD MMM D, YYYY</ion-label>
    <ion-datetime display-format="DDDD MMM D, YYYY" min="2005" max="2016" value="2008-09-02"></ion-datetime>
  </ion-item>

  <ion-item>
    <ion-label>HH:mm</ion-label>
    <ion-datetime display-format="HH:mm"></ion-datetime>
  </ion-item>

  <ion-item>
    <ion-label>h:mm a</ion-label>
    <ion-datetime display-format="h:mm a"></ion-datetime>
  </ion-item>

  <ion-item>
    <ion-label>hh:mm A (15 min steps)</ion-label>
    <ion-datetime display-format="h:mm A" minute-values="0,15,30,45"></ion-datetime>
  </ion-item>

  <ion-item>
    <ion-label>Leap years, summer months</ion-label>
    <ion-datetime
      display-format="MM/YYYY"
      picker-format="MMMM YYYY"
      month-values="6,7,8"
      :year-values="customYearValues"
    ></ion-datetime>
  </ion-item>

  <ion-item>
    <ion-label>Specific days/months/years</ion-label>
    <ion-datetime
      month-values="6,7,8"
      year-values="2014,2015"
      day-values="01,02,03,04,05,06,08,09,10, 11, 12, 13, 14"
      display-format="DD/MMM/YYYY"
    ></ion-datetime>
  </ion-item>
</template>

<script>
  import { IonDatetime, IonItem, IonLabel } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonDatetime, IonItem, IonLabel },
    setup() {
      const customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
      const customDayShortNames = ['s\u00f8n', 'man', 'tir', 'ons', 'tor', 'fre', 'l\u00f8r'];
      const customPickerOptions = {
        buttons: [
          {
            text: 'Save',
            handler: () => console.log('Clicked Save!'),
          },
          {
            text: 'Log',
            handler: () => {
              console.log('Clicked Log. Do not Dismiss.');
              return false;
            },
          },
        ],
      };

      return {
        customYearValues,
        customDayShortNames,
        customPickerOptions,
      };
    },
  });
</script>
```

</TabItem>

</Tabs>

## Properties

### cancelText

|                 |                                                    |
| --------------- | -------------------------------------------------- |
| **Description** | The text to display on the picker's cancel button. |
| **Attribute**   | `cancel-text`                                      |
| **Type**        | `string`                                           |
| **Default**     | `'Cancel'`                                         |

### dayNames

|                 |                                                                                                                          |
| --------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **Description** | Full day of the week names. This can be used to provide<br />locale names for each day in the week. Defaults to English. |
| **Attribute**   | `day-names`                                                                                                              |
| **Type**        | `string \| string[] \| undefined`                                                                                        |
| **Default**     | `undefined`                                                                                                              |

### dayShortNames

|                 |                                                                                                                                                                                                             |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Short abbreviated day of the week names. This can be used to provide<br />locale names for each day in the week. Defaults to English.<br />Defaults to: `['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']` |
| **Attribute**   | `day-short-names`                                                                                                                                                                                           |
| **Type**        | `string \| string[] \| undefined`                                                                                                                                                                           |
| **Default**     | `undefined`                                                                                                                                                                                                 |

### dayValues

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Values used to create the list of selectable days. By default<br />every day is shown for the given month. However, to control exactly which days of<br />the month to display, the `dayValues` input can take a number, an array of numbers, or<br />a string of comma separated numbers. Note that even if the array days have an invalid<br />number for the selected month, like `31` in February, it will correctly not show<br />days which are not valid for the selected month. |
| **Attribute**   | `day-values`                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **Type**        | `number \| number[] \| string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

### disabled

|                 |                                                        |
| --------------- | ------------------------------------------------------ |
| **Description** | If `true`, the user cannot interact with the datetime. |
| **Attribute**   | `disabled`                                             |
| **Type**        | `boolean`                                              |
| **Default**     | `false`                                                |

### displayFormat

|                 |                                                                                                                                                                                                                                                                                                                                                    |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The display format of the date and time as text that shows<br />within the item. When the `pickerFormat` input is not used, then the<br />`displayFormat` is used for both display the formatted text, and determining<br />the datetime picker's columns. See the `pickerFormat` input description for<br />more info. Defaults to `MMM D, YYYY`. |
| **Attribute**   | `display-format`                                                                                                                                                                                                                                                                                                                                   |
| **Type**        | `string`                                                                                                                                                                                                                                                                                                                                           |
| **Default**     | `'MMM D, YYYY'`                                                                                                                                                                                                                                                                                                                                    |

### displayTimezone

|                 |                                                                                                                                                                                                                                                                                                                                                    |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The timezone to use for display purposes only. See<br />[Date.prototype.toLocaleString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString)<br />for a list of supported timezones. If no value is provided, the<br />component will default to displaying times in the user's local timezone. |
| **Attribute**   | `display-timezone`                                                                                                                                                                                                                                                                                                                                 |
| **Type**        | `string \| undefined`                                                                                                                                                                                                                                                                                                                              |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                                                                                        |

### doneText

|                 |                                                    |
| --------------- | -------------------------------------------------- |
| **Description** | The text to display on the picker's "Done" button. |
| **Attribute**   | `done-text`                                        |
| **Type**        | `string`                                           |
| **Default**     | `'Done'`                                           |

### hourValues

|                 |                                                                                                                                                                                                                                                                                                                          |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | Values used to create the list of selectable hours. By default<br />the hour values range from `0` to `23` for 24-hour, or `1` to `12` for 12-hour. However,<br />to control exactly which hours to display, the `hourValues` input can take a number, an<br />array of numbers, or a string of comma separated numbers. |
| **Attribute**   | `hour-values`                                                                                                                                                                                                                                                                                                            |
| **Type**        | `number \| number[] \| string \| undefined`                                                                                                                                                                                                                                                                              |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                                                              |

### max

|                 |                                                                                                                                                                                                                                                                                                                                                           |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The maximum datetime allowed. Value must be a date string<br />following the<br />[ISO 8601 datetime format standard](https://www.w3.org/TR/NOTE-datetime),<br />`1996-12-19`. The format does not have to be specific to an exact<br />datetime. For example, the maximum could just be the year, such as `1994`.<br />Defaults to the end of this year. |
| **Attribute**   | `max`                                                                                                                                                                                                                                                                                                                                                     |
| **Type**        | `string \| undefined`                                                                                                                                                                                                                                                                                                                                     |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                                                                                               |

### min

|                 |                                                                                                                                                                                                                                                                                                                                                                                                  |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | The minimum datetime allowed. Value must be a date string<br />following the<br />[ISO 8601 datetime format standard](https://www.w3.org/TR/NOTE-datetime),<br />such as `1996-12-19`. The format does not have to be specific to an exact<br />datetime. For example, the minimum could just be the year, such as `1994`.<br />Defaults to the beginning of the year, 100 years ago from today. |
| **Attribute**   | `min`                                                                                                                                                                                                                                                                                                                                                                                            |
| **Type**        | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                            |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                                                                                                                                      |

### minuteValues

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Values used to create the list of selectable minutes. By default<br />the minutes range from `0` to `59`. However, to control exactly which minutes to display,<br />the `minuteValues` input can take a number, an array of numbers, or a string of comma<br />separated numbers. For example, if the minute selections should only be every 15 minutes,<br />then this input value would be `minuteValues="0,15,30,45"`. |
| **Attribute**   | `minute-values`                                                                                                                                                                                                                                                                                                                                                                                                            |
| **Type**        | `number \| number[] \| string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                |

### mode

|                 |                                                   |
| --------------- | ------------------------------------------------- |
| **Description** | The mode determines which platform styles to use. |
| **Attribute**   | `mode`                                            |
| **Type**        | `"ios" \| "md"`                                   |
| **Default**     | `undefined`                                       |

### monthNames

|                 |                                                                                                           |
| --------------- | --------------------------------------------------------------------------------------------------------- |
| **Description** | Full names for each month name. This can be used to provide<br />locale month names. Defaults to English. |
| **Attribute**   | `month-names`                                                                                             |
| **Type**        | `string \| string[] \| undefined`                                                                         |
| **Default**     | `undefined`                                                                                               |

### monthShortNames

|                 |                                                                                                                        |
| --------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **Description** | Short abbreviated names for each month name. This can be used to provide<br />locale month names. Defaults to English. |
| **Attribute**   | `month-short-names`                                                                                                    |
| **Type**        | `string \| string[] \| undefined`                                                                                      |
| **Default**     | `undefined`                                                                                                            |

### monthValues

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Values used to create the list of selectable months. By default<br />the month values range from `1` to `12`. However, to control exactly which months to<br />display, the `monthValues` input can take a number, an array of numbers, or a string of<br />comma separated numbers. For example, if only summer months should be shown, then this<br />input value would be `monthValues="6,7,8"`. Note that month numbers do _not_ have a<br />zero-based index, meaning January's value is `1`, and December's is `12`. |
| **Attribute**   | `month-values`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| **Type**        | `number \| number[] \| string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

### name

|                 |                                                                 |
| --------------- | --------------------------------------------------------------- |
| **Description** | The name of the control, which is submitted with the form data. |
| **Attribute**   | `name`                                                          |
| **Type**        | `string`                                                        |
| **Default**     | `this.inputId`                                                  |

### pickerFormat

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The format of the date and time picker columns the user selects.<br />A datetime input can have one or many datetime parts, each getting their<br />own column which allow individual selection of that particular datetime part. For<br />example, year and month columns are two individually selectable columns which help<br />choose an exact date from the datetime picker. Each column follows the string<br />parse format. Defaults to use `displayFormat`. |
| **Attribute**   | `picker-format`                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **Type**        | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

### pickerOptions

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Any additional options that the picker interface can accept.<br />See the [Picker API docs](picker.md) for the picker options.                                                                                                                                                                                                                                                                                                                       |
| **Attribute**   | `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **Type**        | `undefined \| { columns?: PickerColumn[] \| undefined; buttons?: PickerButton[] \| undefined; cssClass?: string \| string[] \| undefined; showBackdrop?: boolean \| undefined; backdropDismiss?: boolean \| undefined; animated?: boolean \| undefined; mode?: Mode \| undefined; keyboardClose?: boolean \| undefined; id?: string \| undefined; enterAnimation?: AnimationBuilder \| undefined; leaveAnimation?: AnimationBuilder \| undefined; }` |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                          |

### placeholder

|                 |                                                                                                          |
| --------------- | -------------------------------------------------------------------------------------------------------- |
| **Description** | The text to display when there's no date selected yet.<br />Using lowercase to match the input attribute |
| **Attribute**   | `placeholder`                                                                                            |
| **Type**        | `null \| string \| undefined`                                                                            |
| **Default**     | `undefined`                                                                                              |

### readonly

|                 |                                                                |
| --------------- | -------------------------------------------------------------- |
| **Description** | If `true`, the datetime appears normal but is not interactive. |
| **Attribute**   | `readonly`                                                     |
| **Type**        | `boolean`                                                      |
| **Default**     | `false`                                                        |

### value

|                 |                                                                |
| --------------- | -------------------------------------------------------------- |
| **Description** | The value of the datetime as a valid ISO 8601 datetime string. |
| **Attribute**   | `value`                                                        |
| **Type**        | `null \| string \| undefined`                                  |
| **Default**     | `undefined`                                                    |

### yearValues

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Values used to create the list of selectable years. By default<br />the year values range between the `min` and `max` datetime inputs. However, to<br />control exactly which years to display, the `yearValues` input can take a number, an array<br />of numbers, or string of comma separated numbers. For example, to show upcoming and<br />recent leap years, then this input's value would be `yearValues="2024,2020,2016,2012,2008"`. |
| **Attribute**   | `year-values`                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **Type**        | `number \| number[] \| string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                   |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                   |

## Events

| Name        | Description                                         |
| ----------- | --------------------------------------------------- |
| `ionBlur`   | Emitted when the datetime loses focus.              |
| `ionCancel` | Emitted when the datetime selection was cancelled.  |
| `ionChange` | Emitted when the value (selected date) has changed. |
| `ionFocus`  | Emitted when the datetime has focus.                |

## Methods

### open

|                 |                             |
| --------------- | --------------------------- |
| **Description** | Opens the datetime overlay. |
| **Signature**   | `open() => Promise<void>`   |

## CSS Shadow Parts

| Name          | Description                      |
| ------------- | -------------------------------- |
| `placeholder` | The placeholder of the datetime. |
| `text`        | The value of the datetime.       |

## CSS Custom Properties

| Name                  | Description                                                                                                 |
| --------------------- | ----------------------------------------------------------------------------------------------------------- |
| `--padding-bottom`    | Bottom padding of the datetime                                                                              |
| `--padding-end`       | Right padding if direction is left-to-right, and left padding if direction is right-to-left of the datetime |
| `--padding-start`     | Left padding if direction is left-to-right, and right padding if direction is right-to-left of the datetime |
| `--padding-top`       | Top padding of the datetime                                                                                 |
| `--placeholder-color` | Color of the datetime placeholder                                                                           |
