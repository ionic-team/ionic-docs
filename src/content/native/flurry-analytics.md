# FlurryAnalytics 


This plugin connects to Flurry Analytics SDK


Repo: [https://github.com/blakgeek/cordova-plugin-flurryanalytics](https://github.com/blakgeek/cordova-plugin-flurryanalytics)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-flurryanalytics
$ npm install --save @ionic-native/flurry-analytics
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { FlurryAnalytics, FlurryAnalyticsObject, FlurryAnalyticsOptions } from '@ionic-native/flurry-analytics';

constructor(private flurryAnalytics: FlurryAnalytics) { }

...

const options: FlurryAnalyticsOptions = {
 appKey: '<your app key>', // REQUIRED
 reportSessionsOnClose: true,
 enableLogging: true
}

let fa: FlurryAnalyticsObject = this.flurryAnalytics.create(options);

fa.logEvent('event name')
  .then(() => console.log('Logged an event!'))
  .catch(e => console.log('Error logging the event', e));

```



<p><br></p>

## Instance Members

### create

Creates a new instance of FlurryAnalyticsObject

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>FlurryAnalyticsOptions</code></dt>
<dd>See FlurryAnalyticsOptions table below</dd>
</dl>

<p><br></p>

## FlurryAnalyticsLocation

<dl>
<dt><h4>horizontalAccuracy</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Set radius about 2d point
It is optional and use only for iOS <span class="tag">optional</span></dd><dt><h4>latitude</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>longitude</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>verticalAccuracy</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Set altitude
It is optional and use only for iOS <span class="tag">optional</span></dd>
</dl>

## FlurryAnalyticsOptions

<dl>
<dt><h4>age</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Set age of the user <span class="tag">optional</span></dd><dt><h4>appKey</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Flurry API key is required</dd><dt><h4>continueSessionSeconds</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>How long can the app be paused before a new session is created,
must be less than or equal to five for Android devices <span class="tag">optional</span></dd><dt><h4>enableBackgroundSessions</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Should the session continue when the app is the background, defaults to false, iOS only <span class="tag">optional</span></dd><dt><h4>enableCrashReporting</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Should app crashes be recorded in flurry, defaults to false, iOS only <span class="tag">optional</span></dd><dt><h4>enableEventLogging</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Should every event show up the app's log, defaults to true <span class="tag">optional</span></dd><dt><h4>enableLogging</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Defaults to false <span class="tag">optional</span></dd><dt><h4>gender</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Set gender of the user
Valid values are "m", "M", "f" and "F" <span class="tag">optional</span></dd><dt><h4>logLevel</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Set error for log
Values: VERBOSE, DEBUG, INFO, WARN, ERROR <span class="tag">optional</span></dd><dt><h4>reportSessionsOnClose</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Should data be pushed to flurry when the app closes, defaults to true, iOS only <span class="tag">optional</span></dd><dt><h4>reportSessionsOnPause</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Should data be pushed to flurry when the app is paused, defaults to true, iOS only <span class="tag">optional</span></dd><dt><h4>userId</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Set id of the user <span class="tag">optional</span></dd><dt><h4>version</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Overrides the version of the app <span class="tag">optional</span></dd>
</dl>

