# BackgroundGeolocation 


This plugin provides foreground and background geolocation with battery-saving "circular region monitoring" and "stop detection". For
more detail, please see https://github.com/mauron85/cordova-plugin-background-geolocation


Repo: [https://github.com/mauron85/cordova-plugin-background-geolocation](https://github.com/mauron85/cordova-plugin-background-geolocation)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-mauron85-background-geolocation
$ npm install --save @ionic-native/background-geolocation
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage



BackgroundGeolocation must be called within app.ts and or before Geolocation. Otherwise the platform will not ask you for background tracking permission.

```typescript
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation';

constructor(private backgroundGeolocation: BackgroundGeolocation) { }

...

const config: BackgroundGeolocationConfig = {
            desiredAccuracy: 10,
            stationaryRadius: 20,
            distanceFilter: 30,
            debug: true, //  enable this hear sounds for background-geolocation life-cycle.
            stopOnTerminate: false, // enable this to clear background location settings when the app terminates
    }

this.backgroundGeolocation.configure(config)
  .subscribe((location: BackgroundGeolocationResponse) => {

    console.log(location);

    // IMPORTANT:  You must execute the finish method here to inform the native plugin that you're finished,
    // and the background-task may be completed.  You must do this regardless if your HTTP request is successful or not.
    // IF YOU DON'T, ios will CRASH YOUR APP for spending too much time in the background.
    this.backgroundGeolocation.finish(); // FOR IOS ONLY

  });

// start recording location
this.backgroundGeolocation.start();

// If you wish to turn OFF background-tracking, call the #stop method.
this.backgroundGeolocation.stop();

```



<p><br></p>

## Instance Members

### setConfig

Setup configuration

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>BackgroundGeolocationConfig</code></dt>
<dd>See BackgroundGeolocationConfig table below</dd>
</dl>

### Mode

Used in the switchMode function

### LocationProvider

Set location service provider @see https://github.com/mauron85/cordova-plugin-background-geolocation/wiki/Android-providers

### Accuracy

Desired accuracy in meters. Possible values [0, 10, 100, 1000].
The lower the number, the more power devoted to GeoLocation resulting in higher accuracy readings.
1000 results in lowest power drain and least accurate readings.

### showLocationSettings

Display device location settings

### changePace

Force the plugin to enter "moving" or "stationary" state

<dl>
<dt><h4>isMoving</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>undefined</dd>
</dl>

### start

Turn ON the background-geolocation system.
The user will be tracked whenever they suspend the app.

### finish

Inform the native plugin that you're finished, the background-task may be completed

### deleteAllLocations

Delete all stored locations.

### deleteLocation

Delete stored location by given locationId.

<dl>
<dt><h4>locationId</h4><strong>Type: </strong><code>number</code></dt>
<dd>undefined</dd>
</dl>

### configure

Configure the plugin.

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>BackgroundGeolocationConfig</code></dt>
<dd>See BackgroundGeolocationConfig table below</dd>
</dl>

### stopWatchingLocationMode

Stop watching for location mode changes.

### getLogEntries

Return all logged events. Useful for plugin debugging. Parameter limit limits number of returned entries.

<dl>
<dt><h4>limit</h4><strong>Type: </strong><code>number</code></dt>
<dd>Limits the number of entries</dd>
</dl>

### getLocations

Method will return all stored locations.
Locations are stored when:
 - config.stopOnTerminate is false and main activity was killed
   by the system
 or
 - option.debug is true

### getStationaryLocation

Returns current stationaryLocation if available. null if not

### getValidLocations

Method will return locations, which has not been yet posted to server. NOTE: Locations does contain locationId.

### isLocationEnabled

Check if location is enabled on the device

### onStationary

Add a stationary-region listener. Whenever the devices enters "stationary-mode",
your #success callback will be executed with #location param containing #radius of region

### showAppSettings

Display app settings to change permissions

### stop

Turn OFF background-tracking

### switchMode

Normally plugin will handle switching between BACKGROUND and FOREGROUND mode itself.
Calling switchMode you can override plugin behavior and force plugin to switch into other mode.

<dl>
<dt><h4>modeId</h4><strong>Type: </strong><code>number</code></dt>
<dd>undefined</dd>
</dl>

### watchLocationMode

Method can be used to detect user changes in location services settings.
If user enable or disable location services then success callback will be executed.
In case or error (SettingNotFoundException) fail callback will be executed.

<p><br></p>

## BackgroundGeolocationConfig

<dl>
<dt><h4>activitiesInterval</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>ANDROID ONLY with BackgroundGeolocation.LocationProvider.ANDROID_ACTIVITY_PROVIDER <span class="tag">optional</span></dd><dt><h4>activityType</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>IOS ONLY
[AutomotiveNavigation, OtherNavigation, Fitness, Other] Presumably,
this affects iOS GPS algorithm. @see Apple docs for more information
(https://developer.apple.com/library/ios/documentation/CoreLocation/Reference/CLLocationManager_Class/CLLocationManager/CLLocationManager.html#//apple_ref/occ/instp/CLLocationManager/activityType) <span class="tag">optional</span></dd><dt><h4>debug</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>When enabled, the plugin will emit sounds for life-cycle events of
background-geolocation! See debugging sounds table. <span class="tag">optional</span></dd><dt><h4>desiredAccuracy</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Desired accuracy in meters. Possible values [0, 10, 100, 1000]. The lower
the number, the more power devoted to GeoLocation resulting in higher
accuracy readings. 1000 results in lowest power drain and least accurate
readings. @see Apple docs (https://developer.apple.com/library/ios/documentation/CoreLocation/Reference/CLLocationManager_Class/index.html#//apple_ref/occ/instp/CLLocationManager/desiredAccuracy)</dd><dt><h4>distanceFilter</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The minimum distance (measured in meters) a device must move horizontally
before an update event is generated. @see Apple docs. (https://developer.apple.com/library/ios/documentation/CoreLocation/Reference/CLLocationManager_Class/CLLocationManager/CLLocationManager.html#//apple_ref/occ/instp/CLLocationManager/distanceFilter)</dd><dt><h4>fastestInterval</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>ANDROID ONLY with BackgroundGeolocation.LocationProvider.ANDROID_ACTIVITY_PROVIDER <span class="tag">optional</span></dd><dt><h4>httpHeaders</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Optional HTTP headers sent along in HTTP request <span class="tag">optional</span></dd><dt><h4>interval</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>ANDROID ONLY
When using BackgroundGeolocation.LocationProvider.ANDROID_DISTANCE_FILTER_PROVIDER:
The minimum time interval between location updates in milliseconds. <span class="tag">optional</span></dd><dt><h4>locationProvider</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>ANDROID ONLY
Set location service provider @see wiki (https://github.com/mauron85/cordova-plugin-background-geolocation/wiki/Android-providers) <span class="tag">optional</span></dd><dt><h4>maxLocations</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Limit maximum number of locations stored into db <span class="tag">optional</span></dd><dt><h4>notificationIconColor</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>ANDROID ONLY
The accent color to use for notification. Eg. #4CAF50. <span class="tag">optional</span></dd><dt><h4>notificationIconLarge</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>ANDROID ONLY
The filename of a custom notification icon. See android quirks.
NOTE: Only available for API Level >=21. <span class="tag">optional</span></dd><dt><h4>notificationIconSmall</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>ANDROID ONLY
The filename of a custom notification icon. See android quirks.
NOTE: Only available for API Level >=21. <span class="tag">optional</span></dd><dt><h4>notificationText</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>ANDROID ONLY
Custom notification text in the drawer. <span class="tag">optional</span></dd><dt><h4>notificationTitle</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>ANDROID ONLY
Custom notification title in the drawer. <span class="tag">optional</span></dd><dt><h4>pauseLocationUpdates</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>IOS ONLY
Pauses location updates when app is paused <span class="tag">optional</span></dd><dt><h4>saveBatteryOnBackground</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>IOS ONLY
Switch to less accurate significant changes and region monitory when in background (default) <span class="tag">optional</span></dd><dt><h4>startForeground</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>ANDROID ONLY
If false location service will not be started in foreground and no notification will be shown. <span class="tag">optional</span></dd><dt><h4>startOnBoot</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>ANDROID ONLY
Start background service on device boot. <span class="tag">optional</span></dd><dt><h4>stationaryRadius</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Stationary radius in meters. When stopped, the minimum distance the device
must move beyond the stationary location for aggressive background-tracking
to engage.</dd><dt><h4>stopOnStillActivity</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>ANDROID ONLY with BackgroundGeolocation.LocationProvider.ANDROID_ACTIVITY_PROVIDER <span class="tag">optional</span></dd><dt><h4>stopOnTerminate</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>IOS, ANDROID ONLY
Enable this in order to force a stop() when the application terminated
(e.g. on iOS, double-tap home button, swipe away the app).o <span class="tag">optional</span></dd><dt><h4>syncThreshold</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Specifies how many previously failed locations will be sent to server at once <span class="tag">optional</span></dd><dt><h4>syncUrl</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Server url where to send fail to post locations <span class="tag">optional</span></dd><dt><h4>url</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Server url where to send HTTP POST with recorded locations <span class="tag">optional</span></dd>
</dl>

## BackgroundGeolocationResponse

<dl>
<dt><h4>accuracy</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>estimated accuracy of this location, in meters.</dd><dt><h4>altitude</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>altitude if available, in meters above the WGS 84 reference ellipsoid.</dd><dt><h4>altitudeAccuracy</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>accuracy of the altitude if available.</dd><dt><h4>bearing</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>bearing, in degrees.</dd><dt><h4>coords</h4><strong>Type: </strong><code>reference</code></dt>
<dd>A Coordinates object defining the current location</dd><dt><h4>debug</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>true if location recorded as part of debug</dd><dt><h4>latitude</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>latitude, in degrees.</dd><dt><h4>locationId</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>ID of location as stored in DB (or null)</dd><dt><h4>longitude</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>longitude, in degrees.</dd><dt><h4>serviceProvider</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Service provider</dd><dt><h4>speed</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>speed if it is available, in meters/second over ground.</dd><dt><h4>time</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>UTC time of this fix, in milliseconds since January 1, 1970.</dd><dt><h4>timestamp</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>A timestamp representing the time at which the location was retrieved.</dd>
</dl>

