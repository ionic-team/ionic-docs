# IBeacon 


This plugin provides functions for working with iBeacons.

 The plugin's API closely mimics the one exposed through the [CLLocationManager](https://developer.apple.com/library/ios/documentation/CoreLocation/Reference/CLLocationManager_Class/index.html) introduced in iOS 7.


Repo: [https://github.com/petermetz/cordova-plugin-ibeacon](https://github.com/petermetz/cordova-plugin-ibeacon)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-ibeacon
$ npm install --save @ionic-native/ibeacon
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage



```typescript
import { IBeacon } from '@ionic-native/ibeacon';

constructor(private ibeacon: IBeacon) { }

...


// Request permission to use location on iOS
this.ibeacon.requestAlwaysAuthorization();
// create a new delegate and register it with the native layer
let delegate = this.ibeacon.Delegate();

// Subscribe to some of the delegate's event handlers
delegate.didRangeBeaconsInRegion()
  .subscribe(
    data => console.log('didRangeBeaconsInRegion: ', data),
    error => console.error()
  );
delegate.didStartMonitoringForRegion()
  .subscribe(
    data => console.log('didStartMonitoringForRegion: ', data),
    error => console.error()
  );
delegate.didEnterRegion()
  .subscribe(
    data => {
      console.log('didEnterRegion: ', data);
    }
  );

let beaconRegion = this.ibeacon.BeaconRegion('deskBeacon','F7826DA6-ASDF-ASDF-8024-BC5B71E0893E');

this.ibeacon.startMonitoringForRegion(beaconRegion)
  .then(
    () => console.log('Native layer recieved the request to monitoring'),
    error => console.error('Native layer failed to begin monitoring: ', error)
  );
```



<p><br></p>

## Instance Members

### isAdvertisingAvailable

Determines if advertising is available or not, according to the native layer.

### BeaconRegion

Creates a new BeaconRegion

<dl>
<dt><h4>identifer</h4><strong>Type: </strong><code>string</code></dt>
<dd>null</dd><dt><h4>uuid</h4><strong>Type: </strong><code>string</code></dt>
<dd>The proximity ID of the beacon being targeted.
This value must not be blank nor invalid as a UUID.</dd><dt><h4>major</h4><strong>Type: </strong><code>number</code></dt>
<dd>The major value that you use to identify one or more beacons. <span class="tag">optional</span></dd><dt><h4>minor</h4><strong>Type: </strong><code>number</code></dt>
<dd>The minor value that you use to identify a specific beacon. <span class="tag">optional</span></dd><dt><h4>notifyEntryStateOnDisplay</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>
 <span class="tag">optional</span></dd>
</dl>

### isBluetoothEnabled

Determines if bluetooth is switched on, according to the native layer.

### appendToDeviceLog

Appends the provided [message] to the device logs.
Note: If debug logging is turned off, this won't do anything.

<dl>
<dt><h4>message</h4><strong>Type: </strong><code>string</code></dt>
<dd>The message to append to the device logs.
</dd>
</dl>

### Delegate

Instances of this class are delegates between the {@link LocationManager} and
the code that consumes the messages generated on in the native layer.

### isRangingAvailable

Determines if ranging is available or not, according to the native layer.

### disableDebugNotifications

Disables the posting of debug notifications in the native layer. Use this method if you want
to prevent the plugin from posting local notifications.

### disableBluetooth

Disables Bluetooth using the native Layer. (ANDROID ONLY)

### disableDebugLogs

Disables debug logging in the native layer. Use this method if you want
to prevent this plugin from writing to the device logs.

### requestAlwaysAuthorization

See the documentation of {@code requestWhenInUseAuthorization} for further details.

### getAuthorizationStatus

Queries the native layer to determine the current authorization in effect.

### enableBluetooth

Enables Bluetooth using the native Layer. (ANDROID ONLY)

### enableDebugLogs

Enables debug logging in the native layer. Use this method if you want
a debug the inner workings of this plugin.

### enableDebugNotifications

Enables the posting of debug notifications in the native layer. Use this method if you want
to allow the plugin the posting local notifications.
This can be very helpful when debugging how to apps behave when launched into the background.

### requestWhenInUseAuthorization

For iOS 8 and above only. The permission model has changed by Apple in iOS 8, making it necessary for apps to
explicitly request permissions via methods like these:
<a href="https://developer.apple.com/library/prerelease/iOS/documentation/CoreLocation/Reference/CLLocationManager_Class/index.html#//apple_ref/occ/instm/CLLocationManager/requestWhenInUseAuthorization">requestWhenInUseAuthorization</a>
<a href="https://developer.apple.com/library/prerelease/iOS/documentation/CoreLocation/Reference/CLLocationManager_Class/index.html#//apple_ref/occ/instm/CLLocationManager/requestAlwaysAuthorization">requestAlwaysAuthorization</a>

### isAdvertising

Determines if advertising is currently active, according to the native layer.

### getRangedRegions

undefined

### getMonitoredRegions

undefined

### getDelegate

undefined

### isMonitoringAvailableForClass

Determines if region type is supported or not, according to the native layer.

<dl>
<dt><h4>region</h4><strong>Type: </strong><code>Region</code></dt>
<dd>See Region table below</dd>
</dl>

### onDomDelegateReady

Signals the native layer that the client side is ready to consume messages.
Readiness here means that it has a {IBeaconDelegate} set by the consumer javascript
code.

### requestStateForRegion

Request state the for specified region. When result is ready
didDetermineStateForRegion is triggered. This can be any region,
also those which is not currently monitored.

<dl>
<dt><h4>region</h4><strong>Type: </strong><code>Region</code></dt>
<dd>See Region table below</dd>
</dl>

### setDelegate

undefined

<dl>
<dt><h4>delegate</h4><strong>Type: </strong><code>IBeaconDelegate</code></dt>
<dd>See IBeaconDelegate table below</dd>
</dl>

### startAdvertising

Start advertising the specified region.

<dl>
<dt><h4>region</h4><strong>Type: </strong><code>Region</code></dt>
<dd>See Region table below</dd><dt><h4>measuredPower</h4><strong>Type: </strong><code>number</code></dt>
<dd>null <span class="tag">optional</span></dd>
</dl>

### startMonitoringForRegion

Start monitoring the specified region.

<dl>
<dt><h4>region</h4><strong>Type: </strong><code>Region</code></dt>
<dd>See Region table below</dd>
</dl>

### startRangingBeaconsInRegion

Start ranging the specified beacon region.

<dl>
<dt><h4>region</h4><strong>Type: </strong><code>Region</code></dt>
<dd>See Region table below</dd>
</dl>

### stopAdvertising

Stop advertising as a beacon.

<dl>
<dt><h4>region</h4><strong>Type: </strong><code>Region</code></dt>
<dd>See Region table below</dd>
</dl>

### stopMonitoringForRegion

Stop monitoring the specified region.  It is valid to call
stopMonitoringForRegion: for a region that was registered for monitoring
with a different location manager object, during this or previous
launches of your application.

<dl>
<dt><h4>region</h4><strong>Type: </strong><code>Region</code></dt>
<dd>See Region table below</dd>
</dl>

### stopRangingBeaconsInRegion

Stop ranging the specified region.  It is valid to call
stopMonitoringForRegion: for a region that was registered for ranging
with a different location manager object, during this or previous
launches of your application.

<dl>
<dt><h4>region</h4><strong>Type: </strong><code>Region</code></dt>
<dd>See Region table below</dd>
</dl>

<p><br></p>

## Beacon

<dl>
<dt><h4>accuracy</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The accuracy of the ranging.</dd><dt><h4>major</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The beacon's major identifier number.</dd><dt><h4>minor</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The beacon's minor identifier number.</dd><dt><h4>proximity</h4><strong>Type: </strong><code>union</code></dt>
<dd>The proximity of the beacon relative to the phone.</dd><dt><h4>rssi</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Received Signal Strength Indicator. The strength of the beacon's signal when it reaches the device.
 RSSI ranges from aprox -26 (a few inches) to -100 (40-50 m distance).</dd><dt><h4>tx</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Transmission Power of the beacon. A constant emitted by the beacon which indicates what's the expected RSSI at a distance of 1 meter to the beacon.</dd><dt><h4>uuid</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The physical device's identifier.</dd>
</dl>

## BeaconRegion

<dl>
<dt><h4>identifier</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>A unique identifier for this region.</dd><dt><h4>major</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The beacon's major identifier number. Optional, of nothing is supplied
the plugin will treat it as a wildcard. <span class="tag">optional</span></dd><dt><h4>minor</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The beacon's minor identifier number. Optional, of nothing is supplied
the plugin will treat it as a wildcard. <span class="tag">optional</span></dd><dt><h4>notifyEntryStateOnDisplay</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>If set to true the device will scan for beacons and determine region state anytime
the device's screen is turned on or off. Useful for debugging. <span class="tag">optional</span></dd><dt><h4>uuid</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The the beacon identifier the device will "watch" for. Many beacons can share the same uuid.</dd>
</dl>

## CircularRegion

<dl>
<dt><h4>identifier</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>A unique identifier for this region.</dd><dt><h4>latitude</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The latitude of this region.</dd><dt><h4>longitude</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The longitude of this region.</dd><dt><h4>radius</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The radius of the geofence for this region.</dd>
</dl>

## IBeaconDelegate

<dl>

</dl>

## IBeaconPluginResult

<dl>
<dt><h4>authorizationStatus</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The status of the location permission for iOS.</dd><dt><h4>beacons</h4><strong>Type: </strong><code>Beacon[]</code></dt>
<dd>An array of beacon objects</dd><dt><h4>error</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Error message, used only with monitoringDidFailForRegionWithError delegate.</dd><dt><h4>eventType</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The name of the delegate function that produced the PluginResult object.</dd><dt><h4>region</h4><strong>Type: </strong><code>reference</code></dt>
<dd>The region that triggered the event.</dd><dt><h4>state</h4><strong>Type: </strong><code>union</code></dt>
<dd>The state of the phone in relation to the region. Inside/outside for example.</dd>
</dl>

