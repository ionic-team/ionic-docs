---
title: Calendar
template: enterprise-plugin
version: 5.1.5
minor: 5.1.X
---

The Calendar plugin allows you to add events to the system calendar of the mobile device.

<native-ent-install plugin-id="calendar" variables=""></native-ent-install>

## Index

### Classes

* [Calendar](#calendar)

### Interfaces

* [CalendarOptions](#calendaroptions)
* [NameOrOptions](#nameoroptions)

* * *

## Classes

<a id="calendar"></a>

### Calendar

**Calendar**:

***name***: Calendar

***description***: This plugin allows you to add events to the Calendar of the mobile device.

***usage***:

```typescript
import { Calendar } from '@ionic-enterprise/calendar/ngx';

constructor(private calendar: Calendar) { }

this.calendar.createCalendar('MyCalendar').then(
  (msg) => { console.log(msg); },
  (err) => { console.log(err); }
);
```

***interfaces***: CalendarOptions NameOrOptions

<a id="calendar.createcalendar"></a>

### createCalendar

▸ **createCalendar**(nameOrOptions: *`string` \| [NameOrOptions](#nameoroptions)*): `Promise`<`any`>

Create a calendar. (iOS only)

**Parameters:**

| Name          | Type        | Description                                                                                                                                                                                                        |
| ------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| nameOrOptions | `string` \ | [NameOrOptions](#nameoroptions) | either a string name or a options object. If string, provide the calendar name. IF an object, provide a calendar name as a string and a calendar color in hex format as a string |


**Returns:** `Promise`<`any`> Returns a Promise

* * *

<a id="calendar.createevent"></a>

### createEvent

▸ **createEvent**(title?: *`string`*, location?: *`string`*, notes?: *`string`*, startDate?: *`Date`*, endDate?: *`Date`*): `Promise`<`any`>

Silently create an event.

**Parameters:**

| Name                 | Type     |
| -------------------- | -------- |
| `Optional` title     | `string` |
| `Optional` location  | `string` |
| `Optional` notes     | `string` |
| `Optional` startDate | `Date`   |
| `Optional` endDate   | `Date`   |


**Returns:** `Promise`<`any`> Returns a Promise

* * *

<a id="calendar.createeventinteractively"></a>

### createEventInteractively

▸ **createEventInteractively**(title?: *`string`*, location?: *`string`*, notes?: *`string`*, startDate?: *`Date`*, endDate?: *`Date`*): `Promise`<`any`>

Interactively create an event.

**Parameters:**

| Name                 | Type     |
| -------------------- | -------- |
| `Optional` title     | `string` |
| `Optional` location  | `string` |
| `Optional` notes     | `string` |
| `Optional` startDate | `Date`   |
| `Optional` endDate   | `Date`   |


**Returns:** `Promise`<`any`> Returns a Promise

* * *

<a id="calendar.createeventinteractivelywithoptions"></a>

### createEventInteractivelyWithOptions

▸ **createEventInteractivelyWithOptions**(title?: *`string`*, location?: *`string`*, notes?: *`string`*, startDate?: *`Date`*, endDate?: *`Date`*, options?: *[CalendarOptions](#calendaroptions)*): `Promise`<`any`>

Interactively create an event with additional options.

**Parameters:**

| Name                 | Type                                |
| -------------------- | ----------------------------------- |
| `Optional` title     | `string`                            |
| `Optional` location  | `string`                            |
| `Optional` notes     | `string`                            |
| `Optional` startDate | `Date`                              |
| `Optional` endDate   | `Date`                              |
| `Optional` options   | [CalendarOptions](#calendaroptions) |


**Returns:** `Promise`<`any`>

* * *

<a id="calendar.createeventwithoptions"></a>

### createEventWithOptions

▸ **createEventWithOptions**(title?: *`string`*, location?: *`string`*, notes?: *`string`*, startDate?: *`Date`*, endDate?: *`Date`*, options?: *[CalendarOptions](#calendaroptions)*): `Promise`<`any`>

Silently create an event with additional options.

**Parameters:**

| Name                 | Type                                |
| -------------------- | ----------------------------------- |
| `Optional` title     | `string`                            |
| `Optional` location  | `string`                            |
| `Optional` notes     | `string`                            |
| `Optional` startDate | `Date`                              |
| `Optional` endDate   | `Date`                              |
| `Optional` options   | [CalendarOptions](#calendaroptions) |


**Returns:** `Promise`<`any`> Returns a Promise

* * *

<a id="calendar.deletecalendar"></a>

### deleteCalendar

▸ **deleteCalendar**(name: *`string`*): `Promise`<`any`>

Delete a calendar. (iOS only)

**Parameters:**

| Name | Type     | Description                     |
| ---- | -------- | ------------------------------- |
| name | `string` | Name of the calendar to delete. |


**Returns:** `Promise`<`any`> Returns a Promise

* * *

<a id="calendar.deleteevent"></a>

### deleteEvent

▸ **deleteEvent**(title?: *`string`*, location?: *`string`*, notes?: *`string`*, startDate?: *`Date`*, endDate?: *`Date`*): `Promise`<`any`>

Delete an event.

**Parameters:**

| Name                 | Type     |
| -------------------- | -------- |
| `Optional` title     | `string` |
| `Optional` location  | `string` |
| `Optional` notes     | `string` |
| `Optional` startDate | `Date`   |
| `Optional` endDate   | `Date`   |


**Returns:** `Promise`<`any`> Returns a Promise

* * *

<a id="calendar.deleteeventbyid"></a>

### deleteEventById

▸ **deleteEventById**(id: *`string`*, fromDate?: *`Date`*): `Promise`<`any`>

Delete an event by id.

**Parameters:**

| Name                | Type     |
| ------------------- | -------- |
| id                  | `string` |
| `Optional` fromDate | `Date`   |


**Returns:** `Promise`<`any`> Returns a Promise

* * *

<a id="calendar.deleteeventfromnamedcalendar"></a>

### deleteEventFromNamedCalendar

▸ **deleteEventFromNamedCalendar**(title?: *`string`*, location?: *`string`*, notes?: *`string`*, startDate?: *`Date`*, endDate?: *`Date`*, calendarName?: *`string`*): `Promise`<`any`>

Delete an event from the specified Calendar. (iOS only)

**Parameters:**

| Name                    | Type     | Description |
| ----------------------- | -------- | ----------- |
| `Optional` title        | `string` |             |
| `Optional` location     | `string` |             |
| `Optional` notes        | `string` |             |
| `Optional` startDate    | `Date`   |             |
| `Optional` endDate      | `Date`   |             |
| `Optional` calendarName | `string` | \-         |


**Returns:** `Promise`<`any`> Returns a Promise

* * *

<a id="calendar.findalleventsinnamedcalendar"></a>

### findAllEventsInNamedCalendar

▸ **findAllEventsInNamedCalendar**(calendarName: *`string`*): `Promise`<`any`>

Get a list of all future events in the specified calendar. (iOS only)

**Parameters:**

| Name         | Type     |
| ------------ | -------- |
| calendarName | `string` |


**Returns:** `Promise`<`any`> Returns a Promise that resolves with the list of events, or rejects with an error.

* * *

<a id="calendar.findevent"></a>

### findEvent

▸ **findEvent**(title?: *`string`*, location?: *`string`*, notes?: *`string`*, startDate?: *`Date`*, endDate?: *`Date`*): `Promise`<`any`>

Find an event.

**Parameters:**

| Name                 | Type     |
| -------------------- | -------- |
| `Optional` title     | `string` |
| `Optional` location  | `string` |
| `Optional` notes     | `string` |
| `Optional` startDate | `Date`   |
| `Optional` endDate   | `Date`   |


**Returns:** `Promise`<`any`>

* * *

<a id="calendar.findeventwithoptions"></a>

### findEventWithOptions

▸ **findEventWithOptions**(title?: *`string`*, location?: *`string`*, notes?: *`string`*, startDate?: *`Date`*, endDate?: *`Date`*, options?: *[CalendarOptions](#calendaroptions)*): `Promise`<`any`>

Find an event with additional options.

**Parameters:**

| Name                 | Type                                |
| -------------------- | ----------------------------------- |
| `Optional` title     | `string`                            |
| `Optional` location  | `string`                            |
| `Optional` notes     | `string`                            |
| `Optional` startDate | `Date`                              |
| `Optional` endDate   | `Date`                              |
| `Optional` options   | [CalendarOptions](#calendaroptions) |


**Returns:** `Promise`<`any`> Returns a Promise that resolves with the event, or rejects with an error.

* * *

<a id="calendar.getcalendaroptions"></a>

### getCalendarOptions

▸ **getCalendarOptions**(): [CalendarOptions](#calendaroptions)

Returns the default calendar options.

**Returns:** [CalendarOptions](#calendaroptions) Returns an object with the default calendar options

* * *

<a id="calendar.getcreatecalendaroptions"></a>

### getCreateCalendarOptions

▸ **getCreateCalendarOptions**(): [NameOrOptions](#nameoroptions)

Returns options for a custom calender with specific color

**Returns:** [NameOrOptions](#nameoroptions) Returns an object with the default options

* * *

<a id="calendar.hasreadpermission"></a>

### hasReadPermission

▸ **hasReadPermission**(): `Promise`<`boolean`>

Check if we have read permission

**Returns:** `Promise`<`boolean`>

* * *

<a id="calendar.hasreadwritepermission"></a>

### hasReadWritePermission

▸ **hasReadWritePermission**(): `Promise`<`boolean`>

This function checks if we have permission to read/write from/to the calendar. The promise will resolve with `true` when:

* You're running on iOS, or
* You're targeting API level lower than 23, or
* You're using Android < 6, or
* You've already granted permission

If this returns false, you should call the `requestReadWritePermission` function

**Returns:** `Promise`<`boolean`>

* * *

<a id="calendar.haswritepermission"></a>

### hasWritePermission

▸ **hasWritePermission**(): `Promise`<`boolean`>

Check if we have write permission

**Returns:** `Promise`<`boolean`>

* * *

<a id="calendar.listcalendars"></a>

### listCalendars

▸ **listCalendars**(): `Promise`<`any`>

Get a list of all calendars.

**Returns:** `Promise`<`any`> A Promise that resolves with the list of calendars, or rejects with an error.

* * *

<a id="calendar.listeventsinrange"></a>

### listEventsInRange

▸ **listEventsInRange**(startDate: *`Date`*, endDate: *`Date`*): `Promise`<`any`>

Find a list of events within the specified date range. (Android only)

**Parameters:**

| Name      | Type   |
| --------- | ------ |
| startDate | `Date` |
| endDate   | `Date` |


**Returns:** `Promise`<`any`> Returns a Promise that resolves with the list of events, or rejects with an error.

* * *

<a id="calendar.modifyevent"></a>

### modifyEvent

▸ **modifyEvent**(title?: *`string`*, location?: *`string`*, notes?: *`string`*, startDate?: *`Date`*, endDate?: *`Date`*, newTitle?: *`string`*, newLocation?: *`string`*, newNotes?: *`string`*, newStartDate?: *`Date`*, newEndDate?: *`Date`*): `Promise`<`any`>

Modify an event. (iOS only)

**Parameters:**

| Name                    | Type     |
| ----------------------- | -------- |
| `Optional` title        | `string` |
| `Optional` location     | `string` |
| `Optional` notes        | `string` |
| `Optional` startDate    | `Date`   |
| `Optional` endDate      | `Date`   |
| `Optional` newTitle     | `string` |
| `Optional` newLocation  | `string` |
| `Optional` newNotes     | `string` |
| `Optional` newStartDate | `Date`   |
| `Optional` newEndDate   | `Date`   |


**Returns:** `Promise`<`any`> Returns a Promise

* * *

<a id="calendar.modifyeventwithoptions"></a>

### modifyEventWithOptions

▸ **modifyEventWithOptions**(title?: *`string`*, location?: *`string`*, notes?: *`string`*, startDate?: *`Date`*, endDate?: *`Date`*, newTitle?: *`string`*, newLocation?: *`string`*, newNotes?: *`string`*, newStartDate?: *`Date`*, newEndDate?: *`Date`*, filterOptions?: *[CalendarOptions](#calendaroptions)*, newOptions?: *[CalendarOptions](#calendaroptions)*): `Promise`<`any`>

Modify an event with additional options. (iOS only)

**Parameters:**

| Name                     | Type                                |
| ------------------------ | ----------------------------------- |
| `Optional` title         | `string`                            |
| `Optional` location      | `string`                            |
| `Optional` notes         | `string`                            |
| `Optional` startDate     | `Date`                              |
| `Optional` endDate       | `Date`                              |
| `Optional` newTitle      | `string`                            |
| `Optional` newLocation   | `string`                            |
| `Optional` newNotes      | `string`                            |
| `Optional` newStartDate  | `Date`                              |
| `Optional` newEndDate    | `Date`                              |
| `Optional` filterOptions | [CalendarOptions](#calendaroptions) |
| `Optional` newOptions    | [CalendarOptions](#calendaroptions) |


**Returns:** `Promise`<`any`> Returns a Promise

* * *

<a id="calendar.opencalendar"></a>

### openCalendar

▸ **openCalendar**(date: *`Date`*): `Promise`<`any`>

Open the calendar at the specified date.

**Parameters:**

| Name | Type   | Description                               |
| ---- | ------ | ----------------------------------------- |
| date | `Date` | The date you want to open the calendar on |


**Returns:** `Promise`<`any`> Promise returns a promise

* * *

<a id="calendar.requestreadpermission"></a>

### requestReadPermission

▸ **requestReadPermission**(): `Promise`<`any`>

Request read permission

**Returns:** `Promise`<`any`>

* * *

<a id="calendar.requestreadwritepermission"></a>

### requestReadWritePermission

▸ **requestReadWritePermission**(): `Promise`<`any`>

Requests read/write permissions

**Returns:** `Promise`<`any`>

* * *

<a id="calendar.requestwritepermission"></a>

### requestWritePermission

▸ **requestWritePermission**(): `Promise`<`any`>

Request write permission

**Returns:** `Promise`<`any`>

* * *

* * *

## Interfaces

<a id="calendaroptions"></a>

### CalendarOptions

**CalendarOptions**:

<a id="calendaroptions.calendarid"></a>

### `<Optional>` calendarId

**● calendarId**: *`number`*

Calendar id

* * *

<a id="calendaroptions.calendarname"></a>

### `<Optional>` calendarName

**● calendarName**: *`string`*

Calendar name. Ths is supported by `iOS` only.

* * *

<a id="calendaroptions.firstreminderminutes"></a>

### `<Optional>` firstReminderMinutes

**● firstReminderMinutes**: *`number`*

* * *

<a id="calendaroptions.id"></a>

### `<Optional>` id

**● id**: *`string`*

Id

* * *

<a id="calendaroptions.recurrence"></a>

### `<Optional>` recurrence

**● recurrence**: *`string`*

Recurrence. Can be set to `daily`, `weekly`, `monthly` or `yearly`

* * *

<a id="calendaroptions.recurrenceenddate"></a>

### `<Optional>` recurrenceEndDate

**● recurrenceEndDate**: *`Date`*

Recurrence end date. Valid only when `recurrence` option is set.

* * *

<a id="calendaroptions.recurrenceinterval"></a>

### `<Optional>` recurrenceInterval

**● recurrenceInterval**: *`number`*

Recurrence interval. Valid only when `recurrence` option is set.

* * *

<a id="calendaroptions.secondreminderminutes"></a>

### `<Optional>` secondReminderMinutes

**● secondReminderMinutes**: *`number`*

* * *

<a id="calendaroptions.url"></a>

### `<Optional>` url

**● url**: *`string`*

URL

* * *

* * *

<a id="nameoroptions"></a>

### NameOrOptions

**NameOrOptions**:

<a id="nameoroptions.calendarcolor"></a>

### `<Optional>` calendarColor

**● calendarColor**: *`string`*

Calendar color as a HEX string

* * *

<a id="nameoroptions.calendarname"></a>

### `<Optional>` calendarName

**● calendarName**: *`string`*

Calendar name

* * *

* * *