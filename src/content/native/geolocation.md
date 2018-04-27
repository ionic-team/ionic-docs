# Geolocation 


This plugin provides information about the device's location, such as latitude and longitude. Common sources of location information include Global Positioning System (GPS) and location inferred from network signals such as IP address, RFID, WiFi and Bluetooth MAC addresses, and GSM/CDMA cell IDs.

 This API is based on the W3C Geolocation API Specification, and only executes on devices that don't already provide an implementation.

For iOS you have to add this configuration to your configuration.xml file
```xml
<edit-config file="*-Info.plist" mode="merge" target="NSLocationWhenInUseUsageDescription">
   <string>We want your location! Best regards NSA</string>
</edit-config>
```



Repo: [https://github.com/apache/cordova-plugin-geolocation](https://github.com/apache/cordova-plugin-geolocation)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">ionic cordova plugin add cordova-plugin-geolocation --variable GEOLOCATION_USAGE_DESCRIPTION="To locate you"
$ npm install --save @ionic-native/geolocation
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
import { Geolocation } from '@ionic-native/geolocation';

...

constructor(private geolocation: Geolocation) {}

...

this.geolocation.getCurrentPosition().then((resp) => {
 // resp.coords.latitude
 // resp.coords.longitude
}).catch((error) => {
  console.log('Error getting location', error);
});

let watch = this.geolocation.watchPosition();
watch.subscribe((data) => {
 // data can be a set of coordinates, or an error (if an error occurred).
 // data.coords.latitude
 // data.coords.longitude
});
```



<p><br></p>

## Instance Members

### getCurrentPosition

Get the device's current position.

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>GeolocationOptions</code></dt>
<dd>See GeolocationOptions table below <span class="tag">optional</span></dd>
</dl>

### watchPosition

Watch the current device's position.  Clear the watch by unsubscribing from
Observable changes.

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>GeolocationOptions</code></dt>
<dd>See GeolocationOptions table below <span class="tag">optional</span></dd>
</dl>

<p><br></p>

## Coordinates

<dl>
<dt><h4>accuracy</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>A double representing the accuracy of the latitude and longitude properties,
expressed in meters.</dd><dt><h4>altitude</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>A double representing the position's altitude in metres, relative to sea
level. This value can be null if the implementation cannot provide the data.</dd><dt><h4>altitudeAccuracy</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>A double representing the accuracy of the altitude expressed in meters.
This value can be null.</dd><dt><h4>heading</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>A double representing the direction in which the device is traveling. This
value, specified in degrees, indicates how far off from heading true north
the device is. 0 degrees represents true north, and the direction is
determined clockwise (which means that east is 90 degrees and west is 270
degrees). If speed is 0, heading is NaN. If the device is unable to provide
heading information, this value is null.</dd><dt><h4>latitude</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>a double representing the position's latitude in decimal degrees.</dd><dt><h4>longitude</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>A double representing the position's longitude in decimal degrees.</dd><dt><h4>speed</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>A double representing the velocity of the device in meters per second.
This value can be null.</dd>
</dl>

## GeolocationOptions

<dl>
<dt><h4>enableHighAccuracy</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Indicates the application would like to receive the best possible results.
If true and if the device is able to provide a more accurate position, it
will do so. Note that this can result in slower response times or increased
power consumption (with a GPS chip on a mobile device for example). On the
other hand, if false, the device can take the liberty to save resources by
responding more quickly and/or using less power. Default: false. <span class="tag">optional</span></dd><dt><h4>maximumAge</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Is a positive long value indicating the maximum age in milliseconds of a
possible cached position that is acceptable to return. If set to 0, it
means that the device cannot use a cached position and must attempt to
retrieve the real current position. If set to Infinity the device must
return a cached position regardless of its age. Default: 0. <span class="tag">optional</span></dd><dt><h4>timeout</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Is a positive long value representing the maximum length of time
(in milliseconds) the device is allowed to take in order to return a
position. The default value is Infinity, meaning that getCurrentPosition()
won't return until the position is available. <span class="tag">optional</span></dd>
</dl>

## Geoposition

<dl>
<dt><h4>coords</h4><strong>Type: </strong><code>reference</code></dt>
<dd>A Coordinates object defining the current location</dd><dt><h4>timestamp</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>A timestamp representing the time at which the location was retrieved.</dd>
</dl>

## PositionError

<dl>
<dt><h4>code</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>A code that indicates the error that occurred</dd><dt><h4>message</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>A message that can describe the error that occurred</dd>
</dl>

