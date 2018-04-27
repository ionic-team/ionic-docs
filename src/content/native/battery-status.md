# BatteryStatus 


Requires Cordova plugin: cordova-plugin-batterystatus. For more info, please see the [BatteryStatus plugin docs](https://github.com/apache/cordova-plugin-battery-status).


Repo: [https://github.com/apache/cordova-plugin-battery-status](https://github.com/apache/cordova-plugin-battery-status)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-battery-status
$ npm install --save @ionic-native/battery-status
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* iOS
* Android
* Windows
* Browser




### Usage


```typescript
import { BatteryStatus } from '@ionic-native/battery-status';

constructor(private batteryStatus: BatteryStatus) { }

...


// watch change in battery status
const subscription = this.batteryStatus.onChange().subscribe(status => {
   console.log(status.level, status.isPlugged);
});

// stop watch
subscription.unsubscribe();

```



<p><br></p>

## Instance Members

### onChange

Watch the change in battery level

### onCritical

Watch when the battery level goes to critical

### onLow

Watch when the battery level goes low

<p><br></p>

## BatteryStatusResponse

<dl>
<dt><h4>isPlugged</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>A boolean that indicates whether the device is plugged in</dd><dt><h4>level</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The battery charge percentage</dd>
</dl>

