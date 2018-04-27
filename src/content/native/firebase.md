# Firebase 


This plugin brings push notifications, analytics, event tracking, crash reporting and more from Google Firebase to your Cordova project! Android and iOS supported (including iOS 10).


Repo: [https://github.com/arnesson/cordova-plugin-firebase](https://github.com/arnesson/cordova-plugin-firebase)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-firebase
$ npm install --save @ionic-native/firebase
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { Firebase } from '@ionic-native/firebase';

constructor(private firebase: Firebase) { }

...

this.firebase.getToken()
  .then(token => console.log(`The token is ${token}`)) // save the token server-side and use it to push notifications to this device
  .catch(error => console.error('Error getting token', error));

this.firebase.onTokenRefresh()
  .subscribe((token: string) => console.log(`Got a new token ${token}`));

```




<p><br></p>

## Instance Members

### onTokenRefresh

Get notified when a token is refreshed

### activateFetched

Activate the Remote Config fetched config

### setAnalyticsCollectionEnabled

Allows the user to enable/disable analytics collection

<dl>
<dt><h4>enabled</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>value to set collection</dd>
</dl>

### getBadgeNumber

Get icon badge number

### fetch

Fetch Remote Config parameter values for your app

<dl>
<dt><h4>cacheExpirationSeconds</h4><strong>Type: </strong><code>number</code></dt>
<dd>null <span class="tag">optional</span></dd>
</dl>

### setBadgeNumber

Set icon badge number. Set to 0 to clear the badge.

<dl>
<dt><h4>badgeNumber</h4><strong>Type: </strong><code>number</code></dt>
<dd>undefined</dd>
</dl>

### getToken

Get the device token

### getByteArray

Retrieve a Remote Config byte array

<dl>
<dt><h4>key</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd><dt><h4>namespace</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd>
</dl>

### getInfo

Get the current state of the FirebaseRemoteConfig singleton object

### setDefaults

Set defaults in the Remote Config

<dl>
<dt><h4>defaults</h4><strong>Type: </strong><code>any</code></dt>
<dd>undefined</dd><dt><h4>namespace</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd>
</dl>

### hasPermission

Check permission to receive push notifications

### getValue

Retrieve a Remote Config value

<dl>
<dt><h4>key</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd><dt><h4>namespace</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd>
</dl>

### getVerificationID

Sends an SMS to the user with the SMS verification code and returns the Verification ID required to sign in using phone authentication

<dl>
<dt><h4>phoneNumber</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd>
</dl>

### grantPermission

Grant permission to receive push notifications

### setUserProperty

Set a user property for use in Analytics

<dl>
<dt><h4>name</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd><dt><h4>value</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd>
</dl>

### onNotificationOpen

Get notified when the user opens a notification

### logError

Log an Error using FirebaseCrash

<dl>
<dt><h4>message</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd>
</dl>

### logEvent

Log an event using Analytics

<dl>
<dt><h4>type</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd><dt><h4>data</h4><strong>Type: </strong><code>any</code></dt>
<dd>undefined</dd>
</dl>

### incrementCounter

To count the performance-related events that occur in your app (such as cache hits or retries), add a line of code
similar to the following whenever the event occurs, using a string other than retry to name that event if you are
counting a different type of event:

<dl>
<dt><h4>trace</h4><strong>Type: </strong><code>string</code></dt>
<dd>Trace name</dd><dt><h4>counter</h4><strong>Type: </strong><code>string</code></dt>
<dd>Counter
</dd>
</dl>

### setConfigSettings

Change the settings for the FirebaseRemoteConfig object's operations

<dl>
<dt><h4>settings</h4><strong>Type: </strong><code>any</code></dt>
<dd>undefined</dd>
</dl>

### setScreenName

Set the name of the current screen in Analytics

<dl>
<dt><h4>name</h4><strong>Type: </strong><code>string</code></dt>
<dd>Screen name</dd>
</dl>

### setUserId

Set a user id for use in Analytics

<dl>
<dt><h4>userId</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd>
</dl>

### startTrace

Start a trace.

<dl>
<dt><h4>trace</h4><strong>Type: </strong><code>string</code></dt>
<dd>Trace name
</dd>
</dl>

### stopTrace

Stop the trace

<dl>
<dt><h4>trace</h4><strong>Type: </strong><code>string</code></dt>
<dd>Trace name
</dd>
</dl>

### subscribe

Subscribe to a topic

<dl>
<dt><h4>topic</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd>
</dl>

### unregister

Unregister from firebase, used to stop receiving push notifications.
Call this when you logout user from your app.

### unsubscribe

Unsubscribe from a topic

<dl>
<dt><h4>topic</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd>
</dl>

### verifyPhoneNumber

Sends an SMS to the user with the SMS verification code and returns the Verification ID required to sign in using phone authentication

<dl>
<dt><h4>phoneNumber</h4><strong>Type: </strong><code>string</code></dt>
<dd>The phone number, including '+' and country code</dd><dt><h4>timeoutDuration</h4><strong>Type: </strong><code>number</code></dt>
<dd>The timeout in sec - no more SMS will be sent to this number until this timeout expires</dd>
</dl>

<p><br></p>

