# LocalNotifications 


This plugin allows you to display local notifications on the device


Repo: [https://github.com/katzer/cordova-plugin-local-notifications](https://github.com/katzer/cordova-plugin-local-notifications)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-local-notification
$ npm install --save @ionic-native/local-notifications
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS
* Windows




### Usage


```typescript
import { LocalNotifications } from '@ionic-native/local-notifications';


constructor(private localNotifications: LocalNotifications) { }

...


// Schedule a single notification
this.localNotifications.schedule({
  id: 1,
  text: 'Single ILocalNotification',
  sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
  data: { secret: key }
});


// Schedule multiple notifications
this.localNotifications.schedule([{
   id: 1,
   text: 'Multi ILocalNotification 1',
   sound: isAndroid ? 'file://sound.mp3': 'file://beep.caf',
   data: { secret:key }
  },{
   id: 2,
   title: 'Local ILocalNotification Example',
   text: 'Multi ILocalNotification 2',
   icon: 'http://example.com/icon.png'
}]);


// Schedule delayed notification
this.localNotifications.schedule({
   text: 'Delayed ILocalNotification',
   trigger: {at: new Date(new Date().getTime() + 3600)},
   led: 'FF0000',
   sound: null
});
```



<p><br></p>

## Instance Members

### getScheduledIds

Get the ids of scheduled notifications

### addActions

Adds a group of actions

<dl>
<dt><h4>groupId</h4><strong>Type: </strong><code>any</code></dt>
<dd>The id of the action group</dd><dt><h4>actions</h4><strong>Type: </strong><code>Array</code></dt>
<dd>See Array table below</dd>
</dl>

### getTriggered

Get a triggered notification object

<dl>
<dt><h4>notificationId</h4><strong>Type: </strong><code>any</code></dt>
<dd>The id of the notification to get</dd>
</dl>

### cancelAll

Cancels all notifications

### cancel

Cancels single or multiple notifications

<dl>
<dt><h4>notificationId</h4><strong>Type: </strong><code>any</code></dt>
<dd>A single notification id, or an array of notification ids.</dd>
</dl>

### getTriggeredIds

Get the ids of triggered notifications

### fireEvent

Not an official interface, however its possible to manually fire events.

<dl>
<dt><h4>eventName</h4><strong>Type: </strong><code>string</code></dt>
<dd>The name of the event. Available events: schedule, trigger, click, update, clear, clearall, cancel, cancelall. Custom event names are possible for actions</dd><dt><h4>args</h4><strong>Type: </strong><code>any</code></dt>
<dd>Optional arguments
</dd>
</dl>

### clear

Clears single or multiple notifications

<dl>
<dt><h4>notificationId</h4><strong>Type: </strong><code>any</code></dt>
<dd>A single notification id, or an array of notification ids.</dd>
</dl>

### clearAll

Clears all notifications

### hasPermission

Informs if the app has the permission to show notifications.

### getAllScheduled

Get all scheduled notification objects

### fireQueuedEvents

Fire queued events once the device is ready and all listeners are registered.

### get

Get a notification object

<dl>
<dt><h4>notificationId</h4><strong>Type: </strong><code>any</code></dt>
<dd>The id of the notification to get</dd>
</dl>

### getAll

Get all notification objects

### isTriggered

Checks if a notification is triggered

<dl>
<dt><h4>notificationId</h4><strong>Type: </strong><code>number</code></dt>
<dd>undefined</dd>
</dl>

### getScheduled

Get a scheduled notification object

<dl>
<dt><h4>notificationId</h4><strong>Type: </strong><code>any</code></dt>
<dd>The id of the notification to get</dd>
</dl>

### getDefaults

Gets the (platform specific) default settings.

### getIds

Get all the notification ids

### getAllTriggered

Get all triggered notification objects

### hasActions

Checks if a group of actions is defined

<dl>
<dt><h4>groupId</h4><strong>Type: </strong><code>any</code></dt>
<dd>The id of the action group</dd>
</dl>

### isPresent

Checks presence of a notification

<dl>
<dt><h4>notificationId</h4><strong>Type: </strong><code>number</code></dt>
<dd>undefined</dd>
</dl>

### isScheduled

Checks is a notification is scheduled

<dl>
<dt><h4>notificationId</h4><strong>Type: </strong><code>number</code></dt>
<dd>undefined</dd>
</dl>

### on

Sets a callback for a specific event

<dl>
<dt><h4>eventName</h4><strong>Type: </strong><code>string</code></dt>
<dd>The name of the event. Available events: schedule, trigger, click, update, clear, clearall, cancel, cancelall. Custom event names are possible for actions</dd>
</dl>

### removeActions

Removes a group of actions

<dl>
<dt><h4>groupId</h4><strong>Type: </strong><code>any</code></dt>
<dd>The id of the action group</dd>
</dl>

### requestPermission

Request permission to show notifications if not already granted.

### schedule

Schedules a single or multiple notifications

<dl>
<dt><h4>options</h4></dt>
<dd>optional
 <span class="tag">optional</span></dd>
</dl>

### setDefaults

Overwrites the (platform specific) default settings.

<dl>
<dt><h4>defaults</h4><strong>Type: </strong><code>any</code></dt>
<dd>null</dd>
</dl>

### update

Updates a previously scheduled notification. Must include the id in the options parameter.

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>ILocalNotification</code></dt>
<dd>See ILocalNotification table below <span class="tag">optional</span></dd>
</dl>

<p><br></p>

## ILocalNotification

<dl>
<dt><h4>actions</h4><strong>Type: </strong><code>union</code></dt>
<dd>Actions id or actions <span class="tag">optional</span></dd><dt><h4>attachments</h4><strong>Type: </strong><code>string[]</code></dt>
<dd>A list of image attachments <span class="tag">optional</span></dd><dt><h4>autoClear</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>ANDROID ONLY
Make this notification automatically dismissed when the user touches it. <span class="tag">optional</span></dd><dt><h4>badge</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The number currently set as the badge of the app icon in Springboard (iOS) or at the right-hand side of the local notification (Android)
Default: 0 (which means don't show a number) <span class="tag">optional</span></dd><dt><h4>channel</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>ANDROID ONLY
Specifies the channel the notification should be delivered on. <span class="tag">optional</span></dd><dt><h4>clock</h4><strong>Type: </strong><code>union</code></dt>
<dd>ANDROID ONLY
If and how the notification shall show the when date.
Possbile values:
                 boolean: true equals 'clock', false disable a watch/counter
                 'clock': Show the when date in the content view
                 'chronometer': Show a stopwatch <span class="tag">optional</span></dd><dt><h4>color</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>ANDROID ONLY
RGB value for the background color of the smallIcon.
Default: Androids COLOR_DEFAULT, which will vary based on Android version. <span class="tag">optional</span></dd><dt><h4>data</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Arbitrary data, objects will be encoded to JSON string
Default: null <span class="tag">optional</span></dd><dt><h4>defaults</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>ANDROID ONLY
Set the default notification options that will be used.
The value should be one or more of the following fields combined with
bitwise-or: DEFAULT_SOUND, DEFAULT_VIBRATE, DEFAULT_LIGHTS. <span class="tag">optional</span></dd><dt><h4>group</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>ANDROID ONLY
If multiple notifications have the same group your app can present
them as a single group. <span class="tag">optional</span></dd><dt><h4>groupSummary</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>ANDROID ONLY
If set to 'true' this notification could use 'summary' to summarize
the contents of the whole group <span class="tag">optional</span></dd><dt><h4>icon</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>ANDROID ONLY
Uri of the icon that is shown in the ticker and notification
Default: res://icon <span class="tag">optional</span></dd><dt><h4>id</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>A unique identifier required to clear, cancel, update or retrieve the local notification in the future
Default: 0 <span class="tag">optional</span></dd><dt><h4>launch</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Specifies whether the a click on the notification causes the app
to launch in the foreground <span class="tag">optional</span></dd><dt><h4>led</h4><strong>Type: </strong><code>union</code></dt>
<dd>ANDROID ONLY
Define the blinking of the LED on the device.
If set to true, the LED will blink in the default color with
timings for on and off set to 1000 ms.
If set to a string, the LED will blink in this ARGB value with
timings for on and off set to 1000 ms.
If set to an array, the value of the key 0 will be used as the color,
the value of the key 1 will be used as the 'on' timing, the value of
the key 2 will be used as the 'off' timing <span class="tag">optional</span></dd><dt><h4>lockscreen</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>ANDROID ONLY
If set to true the notification will be show in its entirety on all lockscreens.
If set to false it will not be revealed on a secure lockscreen. <span class="tag">optional</span></dd><dt><h4>mediaSession</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>ANDROID ONLY
Set the token for the media session <span class="tag">optional</span></dd><dt><h4>number</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>ANDROID ONLY
Sets the number of items this notification represents. <span class="tag">optional</span></dd><dt><h4>priority</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Notification priority.
Integers between -2 and 2, whereas -2 is minimum and 2 is maximum priority <span class="tag">optional</span></dd><dt><h4>progressBar</h4><strong>Type: </strong><code>union</code></dt>
<dd>Shows a progress bar
Setting a boolean is a shortcut for {enabled: true/false} respectively <span class="tag">optional</span></dd><dt><h4>silent</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Is a silent notification <span class="tag">optional</span></dd><dt><h4>smallIcon</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>ANDROID ONLY
Uri of the resource (only res://) to use in the notification layouts. Different classes of devices may return different sizes
Default: res://ic_popup_reminder <span class="tag">optional</span></dd><dt><h4>sound</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Uri of the file containing the sound to play when an alert is displayed
Default: res://platform_default <span class="tag">optional</span></dd><dt><h4>sticky</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>ANDROID ONLY
Set whether this is an "ongoing" notification.
Ongoing notifications cannot be dismissed by the user,
so your application or service must take care of canceling them. <span class="tag">optional</span></dd><dt><h4>summary</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>ANDROID ONLY
Summary of the whole notification group. Should be used in conjuntion
with 'groupSummary' set to true <span class="tag">optional</span></dd><dt><h4>text</h4><strong>Type: </strong><code>union</code></dt>
<dd>Second row of the notification
Default: Empty string <span class="tag">optional</span></dd><dt><h4>timeoutAfter</h4><strong>Type: </strong><code>union</code></dt>
<dd>ANDROID ONLY
Specifies a duration in milliseconds after which this notification should be canceled, if it is not already canceled. <span class="tag">optional</span></dd><dt><h4>title</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>First row of the notification
Default: Empty string (iOS) or the app name (Android) <span class="tag">optional</span></dd><dt><h4>trigger</h4><strong>Type: </strong><code>reference</code></dt>
<dd>When to trigger the notification <span class="tag">optional</span></dd><dt><h4>vibrate</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>ANDROID ONLY
Use the default notification vibrate. <span class="tag">optional</span></dd><dt><h4>wakeup</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>ANDROID ONLY
Wakeup the device. (default is true) <span class="tag">optional</span></dd>
</dl>

## ILocalNotificationAction

<dl>
<dt><h4>icon</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The resource path of the action icon <span class="tag">optional</span></dd><dt><h4>id</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The id of the action is used as the event name in the listener function <span class="tag">optional</span></dd><dt><h4>launch</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Specifies whether the action causes the app to launch in the foreground <span class="tag">optional</span></dd><dt><h4>needsAuth</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Specifies whether the action requires that the user’s device be unlocked.
When the user selects an action with this option, the system prompts
the user to unlock the device <span class="tag">optional</span></dd><dt><h4>title</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The title of the notification message <span class="tag">optional</span></dd><dt><h4>type</h4><strong>Type: </strong><code>reference</code></dt>
<dd>The type of the action. If omitted 'button' is used. <span class="tag">optional</span></dd><dt><h4>ui</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>If the value is 'decline' the action is displayed with special highlighting to indicate that it performs a destructive task <span class="tag">optional</span></dd>
</dl>

## ILocalNotificationProgressBar

<dl>
<dt><h4>description</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>WINDOWS ONLY
Gets or sets an optional string to be displayed instead of the
default percentage string. If this isn't provided, something
like "70%" will be displayed. <span class="tag">optional</span></dd><dt><h4>enabled</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Is the progress bar enabled? <span class="tag">optional</span></dd><dt><h4>indeterminate</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>ANDROID ONLY
Show an indeterminate progress bar <span class="tag">optional</span></dd><dt><h4>maxValue</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>ANDROID ONLY
The maximum value (default is 100) <span class="tag">optional</span></dd><dt><h4>status</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>WINDOWS ONLY
Sets the status (required), which is displayed underneath the progress bar
on the left.
This string should reflect the status of the operation,
like "Downloading..." or "Installing..." <span class="tag">optional</span></dd><dt><h4>value</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The current value <span class="tag">optional</span></dd>
</dl>

## ILocalNotificationTrigger

<dl>
<dt><h4>after</h4><strong>Type: </strong><code>reference</code></dt>
<dd>Only for "match" <span class="tag">optional</span></dd><dt><h4>at</h4><strong>Type: </strong><code>reference</code></dt>
<dd>The date and time when the system should deliver the local notification. If the specified value is nil or is a date in the past, the local notification is delivered immediately.
Default: now ~ new Date() <span class="tag">optional</span></dd><dt><h4>before</h4><strong>Type: </strong><code>reference</code></dt>
<dd>The end of the repeating notification <span class="tag">optional</span></dd><dt><h4>center</h4><strong>Type: </strong><code>number[]</code></dt>
<dd>IOS ONLY
Center of the location
Latitude and Longitude values <span class="tag">optional</span></dd><dt><h4>count</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Amount of units <span class="tag">optional</span></dd><dt><h4>every</h4><strong>Type: </strong><code>reference</code></dt>
<dd>The unit <span class="tag">optional</span></dd><dt><h4>firstAt</h4><strong>Type: </strong><code>reference</code></dt>
<dd>The date and time when the system should deliver the local notification. If the specified value is nil or is a date in the past, the local notification is delivered immediately.
Only for "repeat"
Default: now ~ new Date() <span class="tag">optional</span></dd><dt><h4>in</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Amount of units <span class="tag">optional</span></dd><dt><h4>notifyOnEntry</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>IOS ONLY
Trigger on entry of the location <span class="tag">optional</span></dd><dt><h4>notifyOnExit</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>IOS ONLY
Trigger on exit of the location <span class="tag">optional</span></dd><dt><h4>radius</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>IOS ONLY
Radius in meters <span class="tag">optional</span></dd><dt><h4>single</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>IOS ONLY
Trigger only once? <span class="tag">optional</span></dd><dt><h4>unit</h4><strong>Type: </strong><code>reference</code></dt>
<dd>Unit <span class="tag">optional</span></dd>
</dl>

