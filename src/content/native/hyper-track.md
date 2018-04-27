# HyperTrack 


HyperTrack cordova plugin wrapper for Ionic Native. Location-based services provider.
Make sure to include your publishable key at config.xml (see [HyperTrack Cordova Setup](https://docs.hypertrack.com/sdks/cordova/setup.html#step-2-configure-the-sdk)).


Repo: [https://github.com/hypertrack/hypertrack-cordova](https://github.com/hypertrack/hypertrack-cordova)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-hypertrack
$ npm install --save @ionic-native/hyper-track
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android




### Usage


```typescript
import { HyperTrack } from '@ionic-native/hyper-track';

constructor(private hyperTrack: HyperTrack) { }

// Check if app has location permissions enabled
this.hyperTrack.checkLocationPermission().then(response => {
  // response (String) can be "true" or "false"
  if (response != "true") {
    // Ask for permissions
    this.hyperTrack.requestPermissions().then(response => {}, error => {});
  }
}, error => {});

// Check if app has location services enabled
this.hyperTrack.checkLocationServices().then(response => {
  // response (String) can be "true" or "false"
  if (response != "true") {
    // Request services to be enabled
    this.hyperTrack.requestLocationServices().then(response => {}, error => {});
  }
}, error => {});

// First set the current user. This can be done via getOrCreateUser() or setUserId()
this.hyperTrack.setUserId("xxx").then(user => {
  // user (String) is a String representation of a User's JSON

  this.hyperTrack.startTracking().then(userId => {}, trackingError => {});

  this.hyperTrack.createAndAssignAction('visit', 'lookupId','address', 20.12, -100.3).then(action => {
    // Handle action. It's a String representation of the Action's JSON. For example:
    // '{"eta":"Jul 17, 2017 12:50:03 PM","assigned_at":"Jul 17, 2017 12:34:38 PM",,"distance":"0.0",...}'
  }, error => {});

  // You can complete an action with completeAction() or completeActionWithLookupId()
  this.hyperTrack.completeAction('action-id').then(response => {
    // Handle response (String). Should be "OK".
  }, error => {});

  this.hyperTrack.getCurrentLocation().then(location => {
    // Handle location. It's a String representation of a Location's JSON.For example:
    // '{"mAccuracy":22.601,,"mLatitude":23.123456, "mLongitude":-100.1234567, ...}'
  }, error => {});

  this.hyperTrack.stopTracking().then(success => {
    // Handle success (String). Should be "OK".
  }, error => {});

}, error => {});*
```




<p><br></p>

## Instance Members

### getOrCreateUser

Create a new user to identify the current device or get a user from a lookup id.

<dl>
<dt><h4>name</h4><strong>Type: </strong><code>String</code></dt>
<dd>See String table below</dd><dt><h4>phone</h4><strong>Type: </strong><code>String</code></dt>
<dd>See String table below</dd><dt><h4>photo</h4><strong>Type: </strong><code>String</code></dt>
<dd>See String table below</dd><dt><h4>lookupId</h4><strong>Type: </strong><code>String</code></dt>
<dd>See String table below</dd>
</dl>

### checkLocationPermission

Check if Location permission has been granted to the app (for Android).
Returns "true" or "false" in success method accordingly.

### helloWorld

Returns given text. For testing purposes.

<dl>
<dt><h4>text</h4><strong>Type: </strong><code>String</code></dt>
<dd>See String table below</dd>
</dl>

### completeAction

Complete an action from the SDK by its ID

<dl>
<dt><h4>actionId</h4><strong>Type: </strong><code>String</code></dt>
<dd>See String table below</dd>
</dl>

### checkLocationServices

Check if Location services are enabled on the device (for Android).
Returns "true" or "false" in success method accordingly.

### completeActionWithLookupId

Complete an action from the SDK using Action's lookupId as parameter

<dl>
<dt><h4>lookupId</h4><strong>Type: </strong><code>String</code></dt>
<dd>See String table below</dd>
</dl>

### createAndAssignAction

Create and assign an action to the current user using specified parameters

<dl>
<dt><h4>type</h4><strong>Type: </strong><code>String</code></dt>
<dd>See String table below</dd><dt><h4>lookupId</h4><strong>Type: </strong><code>String</code></dt>
<dd>See String table below</dd><dt><h4>expectedPlaceAddress</h4><strong>Type: </strong><code>String</code></dt>
<dd>See String table below</dd><dt><h4>expectedPlaceLatitude</h4><strong>Type: </strong><code>Number</code></dt>
<dd>See Number table below</dd><dt><h4>expectedPlaceLongitude</h4><strong>Type: </strong><code>Number</code></dt>
<dd>See Number table below</dd>
</dl>

### getCurrentLocation

Get user's current location from the SDK

### requestLocationServices

Request user to enable Location services on the device.
For Android Marshmallow and above. In other platforms, the Promise is never resolved.

### requestPermissions

Request user to grant Location access to the app (for Anrdoid).
For Android Marshmallow and above. In other platforms, the Promise is never resolved.

### setUserId

Set UserId for the SDK created using HyperTrack APIs. This is useful if you already have a user previously created.

<dl>
<dt><h4>userId</h4><strong>Type: </strong><code>String</code></dt>
<dd>See String table below</dd>
</dl>

### startTracking

Enable the SDK and start tracking. This will fail if there is no user set.

### stopTracking

Disable the SDK and stop tracking.
Needs user setting (via getOrCreateUser() or setUserId()) first.

<p><br></p>

