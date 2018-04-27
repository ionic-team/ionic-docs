# Calendar 


This plugin allows you to add events to the Calendar of the mobile device.

Requires Cordova plugin: `cordova-plugin-calendar`. For more info, please see the [Calendar plugin docs](https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin).



Repo: [https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin](https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-calendar
$ npm install --save @ionic-native/calendar
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { Calendar } from '@ionic-native/calendar';

constructor(private calendar: Calendar) { }


this.calendar.createCalendar('MyCalendar').then(
  (msg) => { console.log(msg); },
  (err) => { console.log(err); }
);
```



<p><br></p>

## Instance Members

### getCreateCalendarOptions

Returns options for a custom calender with specific color

### createCalendar

Create a calendar. (iOS only)

<dl>
<dt><h4>nameOrOptions</h4></dt>
<dd>either a string name or a options object. If string, provide the calendar name. IF an object, provide a calendar name as a string and a calendar color in hex format as a string</dd>
</dl>

### hasReadPermission

Check if we have read permission

### createEventInteractively

Interactively create an event.

<dl>
<dt><h4>title</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd><dt><h4>location</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd><dt><h4>notes</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd><dt><h4>startDate</h4><strong>Type: </strong><code>Date</code></dt>
<dd>See Date table below <span class="tag">optional</span></dd><dt><h4>endDate</h4><strong>Type: </strong><code>Date</code></dt>
<dd>See Date table below <span class="tag">optional</span></dd>
</dl>

### createEvent

Silently create an event.

<dl>
<dt><h4>title</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd><dt><h4>location</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd><dt><h4>notes</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd><dt><h4>startDate</h4><strong>Type: </strong><code>Date</code></dt>
<dd>See Date table below <span class="tag">optional</span></dd><dt><h4>endDate</h4><strong>Type: </strong><code>Date</code></dt>
<dd>See Date table below <span class="tag">optional</span></dd>
</dl>

### hasReadWritePermission

This function checks if we have permission to read/write from/to the calendar.
The promise will resolve with `true` when:
- You're running on iOS, or
- You're targeting API level lower than 23, or
- You're using Android < 6, or
- You've already granted permission

### deleteCalendar

Delete a calendar. (iOS only)

<dl>
<dt><h4>name</h4><strong>Type: </strong><code>string</code></dt>
<dd>Name of the calendar to delete.</dd>
</dl>

### createEventInteractivelyWithOptions

Interactively create an event with additional options.

<dl>
<dt><h4>title</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd><dt><h4>location</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd><dt><h4>notes</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd><dt><h4>startDate</h4><strong>Type: </strong><code>Date</code></dt>
<dd>See Date table below <span class="tag">optional</span></dd><dt><h4>endDate</h4><strong>Type: </strong><code>Date</code></dt>
<dd>See Date table below <span class="tag">optional</span></dd><dt><h4>options</h4><strong>Type: </strong><code>CalendarOptions</code></dt>
<dd>See CalendarOptions table below <span class="tag">optional</span></dd>
</dl>

### createEventWithOptions

Silently create an event with additional options.

<dl>
<dt><h4>title</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd><dt><h4>location</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd><dt><h4>notes</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd><dt><h4>startDate</h4><strong>Type: </strong><code>Date</code></dt>
<dd>See Date table below <span class="tag">optional</span></dd><dt><h4>endDate</h4><strong>Type: </strong><code>Date</code></dt>
<dd>See Date table below <span class="tag">optional</span></dd><dt><h4>options</h4><strong>Type: </strong><code>CalendarOptions</code></dt>
<dd>See CalendarOptions table below <span class="tag">optional</span></dd>
</dl>

### listCalendars

Get a list of all calendars.

### findEvent

Find an event.

<dl>
<dt><h4>title</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd><dt><h4>location</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd><dt><h4>notes</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd><dt><h4>startDate</h4><strong>Type: </strong><code>Date</code></dt>
<dd>See Date table below <span class="tag">optional</span></dd><dt><h4>endDate</h4><strong>Type: </strong><code>Date</code></dt>
<dd>See Date table below <span class="tag">optional</span></dd>
</dl>

### deleteEvent

Delete an event.

<dl>
<dt><h4>title</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd><dt><h4>location</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd><dt><h4>notes</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd><dt><h4>startDate</h4><strong>Type: </strong><code>Date</code></dt>
<dd>See Date table below <span class="tag">optional</span></dd><dt><h4>endDate</h4><strong>Type: </strong><code>Date</code></dt>
<dd>See Date table below <span class="tag">optional</span></dd>
</dl>

### findAllEventsInNamedCalendar

Get a list of all future events in the specified calendar. (iOS only)

<dl>
<dt><h4>calendarName</h4><strong>Type: </strong><code>string</code></dt>
<dd>null</dd>
</dl>

### deleteEventFromNamedCalendar

Delete an event from the specified Calendar. (iOS only)

<dl>
<dt><h4>title</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd><dt><h4>location</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd><dt><h4>notes</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd><dt><h4>startDate</h4><strong>Type: </strong><code>Date</code></dt>
<dd>See Date table below <span class="tag">optional</span></dd><dt><h4>endDate</h4><strong>Type: </strong><code>Date</code></dt>
<dd>See Date table below <span class="tag">optional</span></dd><dt><h4>calendarName</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined <span class="tag">optional</span></dd>
</dl>

### findEventWithOptions

Find an event with additional options.

<dl>
<dt><h4>title</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd><dt><h4>location</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd><dt><h4>notes</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd><dt><h4>startDate</h4><strong>Type: </strong><code>Date</code></dt>
<dd>See Date table below <span class="tag">optional</span></dd><dt><h4>endDate</h4><strong>Type: </strong><code>Date</code></dt>
<dd>See Date table below <span class="tag">optional</span></dd><dt><h4>options</h4><strong>Type: </strong><code>CalendarOptions</code></dt>
<dd>See CalendarOptions table below <span class="tag">optional</span></dd>
</dl>

### getCalendarOptions

Returns the default calendar options.

### hasWritePermission

Check if we have write permission

### listEventsInRange

Find a list of events within the specified date range. (Android only)

<dl>
<dt><h4>startDate</h4><strong>Type: </strong><code>Date</code></dt>
<dd>See Date table below</dd><dt><h4>endDate</h4><strong>Type: </strong><code>Date</code></dt>
<dd>See Date table below</dd>
</dl>

### modifyEvent

Modify an event. (iOS only)

<dl>
<dt><h4>title</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd><dt><h4>location</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd><dt><h4>notes</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd><dt><h4>startDate</h4><strong>Type: </strong><code>Date</code></dt>
<dd>See Date table below <span class="tag">optional</span></dd><dt><h4>endDate</h4><strong>Type: </strong><code>Date</code></dt>
<dd>See Date table below <span class="tag">optional</span></dd><dt><h4>newTitle</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd><dt><h4>newLocation</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd><dt><h4>newNotes</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd><dt><h4>newStartDate</h4><strong>Type: </strong><code>Date</code></dt>
<dd>See Date table below <span class="tag">optional</span></dd><dt><h4>newEndDate</h4><strong>Type: </strong><code>Date</code></dt>
<dd>See Date table below <span class="tag">optional</span></dd>
</dl>

### modifyEventWithOptions

Modify an event with additional options. (iOS only)

<dl>
<dt><h4>title</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd><dt><h4>location</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd><dt><h4>notes</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd><dt><h4>startDate</h4><strong>Type: </strong><code>Date</code></dt>
<dd>See Date table below <span class="tag">optional</span></dd><dt><h4>endDate</h4><strong>Type: </strong><code>Date</code></dt>
<dd>See Date table below <span class="tag">optional</span></dd><dt><h4>newTitle</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd><dt><h4>newLocation</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd><dt><h4>newNotes</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd><dt><h4>newStartDate</h4><strong>Type: </strong><code>Date</code></dt>
<dd>See Date table below <span class="tag">optional</span></dd><dt><h4>newEndDate</h4><strong>Type: </strong><code>Date</code></dt>
<dd>See Date table below <span class="tag">optional</span></dd><dt><h4>filterOptions</h4><strong>Type: </strong><code>CalendarOptions</code></dt>
<dd>See CalendarOptions table below <span class="tag">optional</span></dd><dt><h4>newOptions</h4><strong>Type: </strong><code>CalendarOptions</code></dt>
<dd>See CalendarOptions table below <span class="tag">optional</span></dd>
</dl>

### openCalendar

Open the calendar at the specified date.

<dl>
<dt><h4>date</h4><strong>Type: </strong><code>Date</code></dt>
<dd>See Date table below</dd>
</dl>

### requestReadPermission

Request read permission

### requestReadWritePermission

Requests read/write permissions

### requestWritePermission

Request write permission

<p><br></p>

## CalendarOptions

<dl>
<dt><h4>calendarId</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Calendar id <span class="tag">optional</span></dd><dt><h4>calendarName</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Calendar name. Ths is supported by `iOS` only. <span class="tag">optional</span></dd><dt><h4>firstReminderMinutes</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>id</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Id <span class="tag">optional</span></dd><dt><h4>recurrence</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Recurrence. Can be set to `daily`, `weekly`, `monthly` or `yearly` <span class="tag">optional</span></dd><dt><h4>recurrenceEndDate</h4><strong>Type: </strong><code>reference</code></dt>
<dd>Recurrence end date. Valid only when `recurrence` option is set. <span class="tag">optional</span></dd><dt><h4>recurrenceInterval</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Recurrence interval. Valid only when `recurrence` option is set. <span class="tag">optional</span></dd><dt><h4>secondReminderMinutes</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>url</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>URL <span class="tag">optional</span></dd>
</dl>

## NameOrOptions

<dl>
<dt><h4>calendarColor</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Calendar color as a HEX string <span class="tag">optional</span></dd><dt><h4>calendarName</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Calendar name <span class="tag">optional</span></dd>
</dl>

