# DeviceOrientation 


Requires Cordova plugin: `cordova-plugin-device-orientation`. For more info, please see the [Device Orientation docs](https://github.com/apache/cordova-plugin-device-orientation).


Repo: [https://github.com/apache/cordova-plugin-device-orientation](https://github.com/apache/cordova-plugin-device-orientation)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-device-orientation
$ npm install --save @ionic-native/device-orientation
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Amazon Fire OS
* Android
* BlackBerry 10
* Browser
* Firefox OS
* iOS
* Tizen
* Ubuntu
* Windows
* Windows Phone




### Usage


```typescript
// DeviceOrientationCompassHeading is an interface for compass
import { DeviceOrientation, DeviceOrientationCompassHeading } from '@ionic-native/device-orientation';

constructor(private deviceOrientation: DeviceOrientation) { }

...

// Get the device current compass heading
this.deviceOrientation.getCurrentHeading().then(
  (data: DeviceOrientationCompassHeading) => console.log(data),
  (error: any) => console.log(error)
);

// Watch the device compass heading change
var subscription = this.deviceOrientation.watchHeading().subscribe(
  (data: DeviceOrientationCompassHeading) => console.log(data)
);

// Stop watching heading change
subscription.unsubscribe();
```



<p><br></p>

## Instance Members

### getCurrentHeading

Get the current compass heading.

### watchHeading

Get the device current heading at a regular interval

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>DeviceOrientationCompassOptions</code></dt>
<dd>See DeviceOrientationCompassOptions table below <span class="tag">optional</span></dd>
</dl>

<p><br></p>

## DeviceOrientationCompassHeading

<dl>
<dt><h4>headingAccuracy</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The deviation in degrees between the reported heading and the true heading. (Number)</dd><dt><h4>magneticHeading</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The heading in degrees from 0-359.99 at a single moment in time. (Number)</dd><dt><h4>timestamp</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The time at which this heading was determined. (DOMTimeStamp)</dd><dt><h4>trueHeading</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The heading relative to the geographic North Pole in degrees 0-359.99 at a single moment in time. A negative value indicates that the true heading can't be determined. (Number)</dd>
</dl>

## DeviceOrientationCompassOptions

<dl>
<dt><h4>filter</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The change in degrees required to initiate a watchHeading success callback. When this value is set, frequency is ignored. (Number) <span class="tag">optional</span></dd><dt><h4>frequency</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>How often to retrieve the compass heading in milliseconds. (Number) (Default: 100) <span class="tag">optional</span></dd>
</dl>

