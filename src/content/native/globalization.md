# Globalization 


This plugin obtains information and performs operations specific to the user's locale, language, and timezone.


Repo: [https://github.com/apache/cordova-plugin-globalization](https://github.com/apache/cordova-plugin-globalization)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-globalization
$ npm install --save @ionic-native/globalization
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Amazon Fire OS
* Android
* Browser
* iOS
* Windows




### Usage


```typescript
import { Globalization } from '@ionic-native/globalization';

constructor(private globalization: Globalization) { }


...


this.globalization.getPreferredLanguage()
  .then(res => console.log(res))
  .catch(e => console.log(e));


```



<p><br></p>

## Instance Members

### getNumberPattern

Returns a pattern string to format and parse numbers according to the client's user preferences.

<dl>
<dt><h4>options</h4></dt>
<dd>Can be decimal, percent, or currency.</dd>
</dl>

### dateToString

Converts date to string

<dl>
<dt><h4>date</h4><strong>Type: </strong><code>Date</code></dt>
<dd>See Date table below</dd><dt><h4>options</h4><strong>Type: </strong><code>GlobalizationOptions</code></dt>
<dd>See GlobalizationOptions table below</dd>
</dl>

### getCurrencyPattern

Returns a pattern string to format and parse currency values according to the client's user preferences and ISO 4217 currency code.

<dl>
<dt><h4>currencyCode</h4><strong>Type: </strong><code>string</code></dt>
<dd>Currency Code.A</dd>
</dl>

### getDateNames

Returns an array of the names of the months or days of the week, depending on the client's user preferences and calendar.

<dl>
<dt><h4>options</h4></dt>
<dd>Object with type (narrow or wide) and item (month or days).</dd>
</dl>

### getDatePattern

Returns a pattern string to format and parse dates according to the client's user preferences.

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>GlobalizationOptions</code></dt>
<dd>See GlobalizationOptions table below</dd>
</dl>

### getFirstDayOfWeek

Returns the first day of the week according to the client's user preferences and calendar.

### getLocaleName

Returns the BCP 47 compliant locale identifier string to the successCallback with a properties object as a parameter.

### getPreferredLanguage

Returns the BCP-47 compliant language identifier tag to the successCallback with a properties object as a parameter. That object should have a value property with a String value.

### isDayLightSavingsTime

Indicates whether daylight savings time is in effect for a given date using the client's time zone and calendar.

<dl>
<dt><h4>date</h4><strong>Type: </strong><code>Date</code></dt>
<dd>See Date table below</dd>
</dl>

### numberToString

Returns a number formatted as a string according to the client's user preferences.

<dl>
<dt><h4>numberToConvert</h4><strong>Type: </strong><code>number</code></dt>
<dd>The number to convert</dd><dt><h4>options</h4></dt>
<dd>Object with property `type` that can be set to: decimal, percent, or currency.
</dd>
</dl>

### stringToDate

Parses a date formatted as a string, according to the client's user preferences and calendar using the time zone of the client, and returns the corresponding date object.

<dl>
<dt><h4>dateString</h4><strong>Type: </strong><code>string</code></dt>
<dd>Date as a string to be converted</dd><dt><h4>options</h4><strong>Type: </strong><code>GlobalizationOptions</code></dt>
<dd>See GlobalizationOptions table below</dd>
</dl>

### stringToNumber

undefined

<dl>
<dt><h4>stringToConvert</h4><strong>Type: </strong><code>string</code></dt>
<dd>String you want to conver to a number</dd><dt><h4>options</h4></dt>
<dd>The type of number you want to return. Can be decimal, percent, or currency.</dd>
</dl>

<p><br></p>

## GlobalizationOptions

<dl>
<dt><h4>formatLength</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>selector</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd>
</dl>

