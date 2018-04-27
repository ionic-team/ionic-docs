# GoogleAnalytics 


This plugin connects to Google's native Universal Analytics SDK
Prerequisites:
- A Cordova 3.0+ project for iOS and/or Android
- A Mobile App property through the Google Analytics Admin Console
- (Android) Google Play Services SDK installed via [Android SDK Manager](https://developer.android.com/sdk/installing/adding-packages.html)

Repo: [https://github.com/danwilson/google-analytics-plugin](https://github.com/danwilson/google-analytics-plugin)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-google-analytics
$ npm install --save @ionic-native/google-analytics
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* Browser
* iOS
* Windows Phone 8




### Usage


```typescript
import { GoogleAnalytics } from '@ionic-native/google-analytics';

constructor(private ga: GoogleAnalytics) { }

...

this.ga.startTrackerWithId('YOUR_TRACKER_ID')
   .then(() => {
     console.log('Google analytics is ready now');
     this.ga.trackView('test');
     // Tracker is ready
     // You can now track pages or set additional information such as AppVersion or UserId
   })
   .catch(e => console.log('Error starting GoogleAnalytics', e));


```




<p><br></p>

## Instance Members

### setAppVersion

Set the app version

<dl>
<dt><h4>appVersion</h4><strong>Type: </strong><code>string</code></dt>
<dd>App version</dd>
</dl>

### addCustomDimension

Add a Custom Dimension
https://developers.google.com/analytics/devguides/platform/customdimsmets

<dl>
<dt><h4>key</h4><strong>Type: </strong><code>number</code></dt>
<dd>undefined</dd><dt><h4>value</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd>
</dl>

### setOptOut

Set OptOut

<dl>
<dt><h4>optout</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>undefined</dd>
</dl>

### addTransactionItem

Add a Transaction Item (Ecommerce)
https://developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce#addItem

<dl>
<dt><h4>id</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd><dt><h4>name</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd><dt><h4>sku</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd><dt><h4>category</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd><dt><h4>price</h4><strong>Type: </strong><code>number</code></dt>
<dd>undefined</dd><dt><h4>quantity</h4><strong>Type: </strong><code>number</code></dt>
<dd>undefined</dd><dt><h4>currencyCode</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd>
</dl>

### addTransaction

Add a Transaction (Ecommerce)
https://developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce#addTrans

<dl>
<dt><h4>id</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd><dt><h4>affiliation</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd><dt><h4>revenue</h4><strong>Type: </strong><code>number</code></dt>
<dd>undefined</dd><dt><h4>tax</h4><strong>Type: </strong><code>number</code></dt>
<dd>undefined</dd><dt><h4>shipping</h4><strong>Type: </strong><code>number</code></dt>
<dd>undefined</dd><dt><h4>currencyCode</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd>
</dl>

### setVar

Set a variable

<dl>
<dt><h4>key</h4><strong>Type: </strong><code>string</code></dt>
<dd>Variable</dd><dt><h4>value</h4><strong>Type: </strong><code>string</code></dt>
<dd>Parameter</dd>
</dl>

### enableUncaughtExceptionReporting

Enable/disable automatic reporting of uncaught exceptions

<dl>
<dt><h4>shouldEnable</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>undefined</dd>
</dl>

### debugMode

Enable verbose logging

### dispatch

Manually dispatch any data

### getVar

Get a variable

<dl>
<dt><h4>key</h4><strong>Type: </strong><code>string</code></dt>
<dd>Variable</dd>
</dl>

### setAllowIDFACollection

Enabling Advertising Features in Google Analytics allows you to take advantage of Remarketing, Demographics & Interests reports, and more

<dl>
<dt><h4>allow</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>undefined</dd>
</dl>

### setAnonymizeIp

Set a anonymize Ip address

<dl>
<dt><h4>anonymize</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>Set to true to anonymize the IP Address</dd>
</dl>

### setUserId

Set a UserId
https://developers.google.com/analytics/devguides/collection/analyticsjs/user-id

<dl>
<dt><h4>id</h4><strong>Type: </strong><code>string</code></dt>
<dd>User ID</dd>
</dl>

### startTrackerWithId

In your 'deviceready' handler, set up your Analytics tracker.
https://developers.google.com/analytics/devguides/collection/analyticsjs/

<dl>
<dt><h4>id</h4><strong>Type: </strong><code>string</code></dt>
<dd>Your Google Analytics Mobile App property</dd><dt><h4>interval</h4><strong>Type: </strong><code>number</code></dt>
<dd>Optional dispatch period in seconds. Defaults to 30. <span class="tag">optional</span></dd>
</dl>

### trackEvent

Track an event
https://developers.google.com/analytics/devguides/collection/analyticsjs/events

<dl>
<dt><h4>category</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd><dt><h4>action</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd><dt><h4>label</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>value</h4><strong>Type: </strong><code>number</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>newSession</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>Set to true to create a new session <span class="tag">optional</span></dd>
</dl>

### trackException

Track an exception

<dl>
<dt><h4>description</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd><dt><h4>fatal</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>undefined</dd>
</dl>

### trackMetric

Track custom metric

<dl>
<dt><h4>key</h4><strong>Type: </strong><code>number</code></dt>
<dd>undefined</dd><dt><h4>value</h4><strong>Type: </strong><code>number</code></dt>
<dd>undefined <span class="tag">optional</span></dd>
</dl>

### trackTiming

Track User Timing (App Speed)

<dl>
<dt><h4>category</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd><dt><h4>intervalInMilliseconds</h4><strong>Type: </strong><code>number</code></dt>
<dd>undefined</dd><dt><h4>variable</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd><dt><h4>label</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd>
</dl>

### trackView

Track a screen
https://developers.google.com/analytics/devguides/collection/analyticsjs/screens

<dl>
<dt><h4>title</h4><strong>Type: </strong><code>string</code></dt>
<dd>Screen title</dd><dt><h4>campaignUrl</h4><strong>Type: </strong><code>string</code></dt>
<dd>Campaign url for measuring referrals <span class="tag">optional</span></dd><dt><h4>newSession</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>Set to true to create a new session <span class="tag">optional</span></dd>
</dl>

<p><br></p>

