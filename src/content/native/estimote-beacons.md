# EstimoteBeacons 


This plugin enables communication between a phone and Estimote Beacons peripherals.


Repo: [https://github.com/evothings/phonegap-estimotebeacons](https://github.com/evothings/phonegap-estimotebeacons)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-estimote
$ npm install --save @ionic-native/estimote-beacons
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { EstimoteBeacons } from '@ionic-native/estimote-beacons';

constructor(private eb: EstimoteBeacons) { }

...

this.eb.requestAlwaysAuthorization();

this.eb.enableAnalytics(true);

```




<p><br></p>

## Instance Members

### enableAnalytics

Enable analytics.

<dl>
<dt><h4>enable</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>Boolean value to turn analytics on or off (mandatory).</dd>
</dl>

### BeaconColorBlueberryPie

Beacon colour

### isAnalyticsEnabled

Test if analytics is enabled.

### BeaconColorIcyMarshmallow

Beacon colour

### BeaconColorCandyFloss

Beacon colour

### isAuthorized

Test if App ID and App Token is set.

### BeaconColorMintCocktail

Beacon colour

### BeaconColorLemonTart

Beacon colour

### BeaconColorLiquoriceSwirl

Beacon colour

### requestWhenInUseAuthorization

Ask the user for permission to use location services
while the app is in the foreground.
You need to call this function or requestAlwaysAuthorization
on iOS 8+.
Does nothing on other platforms.

### BeaconColorVanillaJello

Beacon colour

### BeaconColorSweetBeetroot

Beacon colour.

### BeaconColorTransparent

Beacon colour

### BeaconColorUnknown

Beacon colour

### startEstimoteBeaconDiscovery

Start scanning for all nearby beacons using CoreBluetooth (no region object is used).
Available on iOS.

### ProximityUnknown

Proximity value

### BeaconColorWhite

Beacon colour

### ProximityFar

Proximity value

### ProximityImmediate

Proximity value

### ProximityNear

Proximity value

### startRangingSecureBeaconsInRegion

Start ranging secure beacons. Available on iOS.
This function has the same parameters/behavior as
{@link EstimoteBeacons.startRangingBeaconsInRegion}.
To use secure beacons set the App ID and App Token using
{@link EstimoteBeacons.setupAppIDAndAppToken}.

<dl>
<dt><h4>region</h4><strong>Type: </strong><code>EstimoteBeaconRegion</code></dt>
<dd>See EstimoteBeaconRegion table below</dd>
</dl>

### disconnectConnectedBeacon

Disconnect from connected Estimote Beacon. Available on Android.

### authorizationStatus

Get the current location authorization status.
Implemented on iOS 8+.
Does nothing on other platforms.

### RegionStateUnknown

Region state

### connectToBeacon

Connect to Estimote Beacon. Available on Android.

<dl>
<dt><h4>beacon</h4><strong>Type: </strong><code>any</code></dt>
<dd>Beacon to connect to.</dd>
</dl>

### RegionStateOutside

Region state

### RegionStateInside

Region state

### stopEstimoteBeaconDiscovery

Stop CoreBluetooth scan. Available on iOS.

### startAdvertisingAsBeacon

Start advertising as a beacon.

<dl>
<dt><h4>uuid</h4><strong>Type: </strong><code>string</code></dt>
<dd>UUID string the beacon should advertise (mandatory).</dd><dt><h4>major</h4><strong>Type: </strong><code>number</code></dt>
<dd>Major value to advertise (mandatory).</dd><dt><h4>minor</h4><strong>Type: </strong><code>number</code></dt>
<dd>Minor value to advertise (mandatory).</dd><dt><h4>regionId</h4><strong>Type: </strong><code>string</code></dt>
<dd>Identifier of the region used to advertise (mandatory).</dd>
</dl>

### setupAppIDAndAppToken

Set App ID and App Token.

<dl>
<dt><h4>appID</h4><strong>Type: </strong><code>string</code></dt>
<dd>The App ID (mandatory).</dd><dt><h4>appToken</h4><strong>Type: </strong><code>string</code></dt>
<dd>The App Token (mandatory).</dd>
</dl>

### requestAlwaysAuthorization

Ask the user for permission to use location services
whenever the app is running.
You need to call this function or requestWhenInUseAuthorization
on iOS 8+.
Does nothing on other platforms.

### stopRangingBeaconsInRegion

Stop ranging beacons. Available on iOS and Android.

<dl>
<dt><h4>region</h4><strong>Type: </strong><code>EstimoteBeaconRegion</code></dt>
<dd>See EstimoteBeaconRegion table below</dd>
</dl>

### startRangingBeaconsInRegion

Start ranging beacons. Available on iOS and Android.

<dl>
<dt><h4>region</h4><strong>Type: </strong><code>EstimoteBeaconRegion</code></dt>
<dd>See EstimoteBeaconRegion table below</dd>
</dl>

### startMonitoringForRegion

Start monitoring beacons. Available on iOS and Android.

<dl>
<dt><h4>region</h4><strong>Type: </strong><code>EstimoteBeaconRegion</code></dt>
<dd>See EstimoteBeaconRegion table below</dd><dt><h4>notifyEntryStateOnDisplay</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>null</dd>
</dl>

### startSecureMonitoringForRegion

Start monitoring secure beacons. Available on iOS.
This function has the same parameters/behavior as
EstimoteBeacons.startMonitoringForRegion.
To use secure beacons set the App ID and App Token using
{@link EstimoteBeacons.setupAppIDAndAppToken}.

<dl>
<dt><h4>region</h4><strong>Type: </strong><code>EstimoteBeaconRegion</code></dt>
<dd>See EstimoteBeaconRegion table below</dd><dt><h4>notifyEntryStateOnDisplay</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>undefined</dd>
</dl>

### stopAdvertisingAsBeacon

Stop advertising as a beacon.

### stopMonitoringForRegion

Stop monitoring beacons. Available on iOS and Android.

<dl>
<dt><h4>region</h4><strong>Type: </strong><code>EstimoteBeaconRegion</code></dt>
<dd>See EstimoteBeaconRegion table below</dd>
</dl>

### stopRangingSecureBeaconsInRegion

Stop ranging secure beacons. Available on iOS.
This function has the same parameters/behavior as
{@link EstimoteBeacons.stopRangingBeaconsInRegion}.

<dl>
<dt><h4>region</h4><strong>Type: </strong><code>EstimoteBeaconRegion</code></dt>
<dd>See EstimoteBeaconRegion table below</dd>
</dl>

### stopSecureMonitoringForRegion

Stop monitoring secure beacons. Available on iOS.
This function has the same parameters/behaviour as
{@link EstimoteBeacons.stopMonitoringForRegion}.

<dl>
<dt><h4>region</h4><strong>Type: </strong><code>EstimoteBeaconRegion</code></dt>
<dd>See EstimoteBeaconRegion table below</dd>
</dl>

### writeConnectedMajor

Write major to connected Estimote Beacon. Available on Android.

<dl>
<dt><h4>major</h4><strong>Type: </strong><code>number</code></dt>
<dd>null</dd>
</dl>

### writeConnectedMinor

Write minor to connected Estimote Beacon. Available on Android.

<dl>
<dt><h4>minor</h4><strong>Type: </strong><code>number</code></dt>
<dd>null</dd>
</dl>

### writeConnectedProximityUUID

Write proximity UUID to connected Estimote Beacon. Available on Android.

<dl>
<dt><h4>uuid</h4><strong>Type: </strong><code>any</code></dt>
<dd>null</dd>
</dl>

<p><br></p>

## EstimoteBeaconRegion

<dl>
<dt><h4>identifier</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>major</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>minor</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>state</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>uuid</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd>
</dl>

