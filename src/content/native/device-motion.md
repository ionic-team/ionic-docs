# DeviceMotion 


Requires Cordova plugin: `cordova-plugin-device-motion`. For more info, please see the [Device Motion docs](https://github.com/apache/cordova-plugin-device-motion).


Repo: [https://github.com/apache/cordova-plugin-device-motion](https://github.com/apache/cordova-plugin-device-motion)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-device-motion
$ npm install --save @ionic-native/device-motion
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* BlackBerry 10
* Browser
* Firefox OS
* iOS
* Tizen
* Ubuntu
* Windows
* Windows Phone 8




### Usage


```typescript
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion';

constructor(private deviceMotion: DeviceMotion) { }

...

// Get the device current acceleration
this.deviceMotion.getCurrentAcceleration().then(
  (acceleration: DeviceMotionAccelerationData) => console.log(acceleration),
  (error: any) => console.log(error)
);

// Watch device acceleration
var subscription = this.deviceMotion.watchAcceleration().subscribe((acceleration: DeviceMotionAccelerationData) => {
  console.log(acceleration);
});

// Stop watch
subscription.unsubscribe();

```



<p><br></p>

## Instance Members

### getCurrentAcceleration

Get the current acceleration along the x, y, and z axes.

### watchAcceleration

Watch the device acceleration. Clear the watch by unsubscribing from the observable.

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>DeviceMotionAccelerometerOptions</code></dt>
<dd>See DeviceMotionAccelerometerOptions table below <span class="tag">optional</span></dd>
</dl>

<p><br></p>

## DeviceMotionAccelerationData

<dl>
<dt><h4>timestamp</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Creation timestamp in milliseconds.</dd><dt><h4>x</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Amount of acceleration on the x-axis. (in m/s^2)</dd><dt><h4>y</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Amount of acceleration on the y-axis. (in m/s^2)</dd><dt><h4>z</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Amount of acceleration on the z-axis. (in m/s^2)</dd>
</dl>

## DeviceMotionAccelerometerOptions

<dl>
<dt><h4>frequency</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Requested period of calls to accelerometerSuccess with acceleration data in Milliseconds. Default: 10000 <span class="tag">optional</span></dd>
</dl>

