# DatePicker 


The DatePicker plugin allows the user to fetch date or time using native dialogs.


Repo: [https://github.com/VitaliiBlagodir/cordova-plugin-datepicker](https://github.com/VitaliiBlagodir/cordova-plugin-datepicker)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-datepicker
$ npm install --save @ionic-native/date-picker
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
import { DatePicker } from '@ionic-native/date-picker';

constructor(private datePicker: DatePicker) { }


...


this.datePicker.show({
  date: new Date(),
  mode: 'date',
  androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
}).then(
  date => console.log('Got date: ', date),
  err => console.log('Error occurred while getting date: ', err)
);
```



<p><br></p>

## Instance Members

### show

Shows the date and/or time picker dialog(s)

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>DatePickerOptions</code></dt>
<dd>See DatePickerOptions table below</dd>
</dl>

<p><br></p>

## DatePickerOptions

<dl>
<dt><h4>allowFutureDates</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Shows or hide dates after selected date. <span class="tag">optional</span></dd><dt><h4>allowOldDates</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Shows or hide dates earlier then selected date. <span class="tag">optional</span></dd><dt><h4>androidTheme</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Choose the Android theme for the picker. You can use the DatePicker.ANDROID_THEMES property.
Values: 1: THEME_TRADITIONAL | 2: THEME_HOLO_DARK | 3: THEME_HOLO_LIGHT | 4: THEME_DEVICE_DEFAULT_DARK | 5: THEME_DEVICE_DEFAULT_LIGHT <span class="tag">optional</span></dd><dt><h4>cancelButtonColor</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Hex color of cancel button. <span class="tag">optional</span></dd><dt><h4>cancelButtonLabel</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Label of cancel button. <span class="tag">optional</span></dd><dt><h4>cancelText</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Label of BUTTON_NEGATIVE (cancel button). If empty, uses android.R.string.cancel. <span class="tag">optional</span></dd><dt><h4>date</h4><strong>Type: </strong><code>union</code></dt>
<dd>Selected date</dd><dt><h4>doneButtonColor</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Hex color of done button. <span class="tag">optional</span></dd><dt><h4>doneButtonLabel</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Label of done button. <span class="tag">optional</span></dd><dt><h4>is24Hour</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Shows time dialog in 24 hours format. <span class="tag">optional</span></dd><dt><h4>locale</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Force locale for datePicker. <span class="tag">optional</span></dd><dt><h4>maxDate</h4><strong>Type: </strong><code>union</code></dt>
<dd>Maximum date
Default: empty String <span class="tag">optional</span></dd><dt><h4>minDate</h4><strong>Type: </strong><code>union</code></dt>
<dd>Minimum date
Default: empty String <span class="tag">optional</span></dd><dt><h4>minuteInterval</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Interval between options in the minute section of the date picker. <span class="tag">optional</span></dd><dt><h4>mode</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The mode of the date picker
Values: date | time | datetime</dd><dt><h4>nowText</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Label of now button. If empty, doesn't show the option to select current time. <span class="tag">optional</span></dd><dt><h4>okText</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Label of BUTTON_POSITIVE (done button) on Android <span class="tag">optional</span></dd><dt><h4>popoverArrowDirection</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Force the UIPopoverArrowDirection enum. The value any will revert to default UIPopoverArrowDirectionAny and let the app choose the proper direction itself. <span class="tag">optional</span></dd><dt><h4>titleText</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Label for the dialog title. If empty, uses android default (Set date/Set time).
Default: empty String <span class="tag">optional</span></dd><dt><h4>todayText</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Label of today button. If empty, doesn't show the option to select current date. <span class="tag">optional</span></dd><dt><h4>x</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>X position of date picker. The position is absolute to the root view of the application. <span class="tag">optional</span></dd><dt><h4>y</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Y position of date picker. The position is absolute to the root view of the application. <span class="tag">optional</span></dd>
</dl>

