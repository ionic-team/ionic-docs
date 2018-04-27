# Device 


Access information about the underlying device and platform.


Repo: [https://github.com/apache/cordova-plugin-device](https://github.com/apache/cordova-plugin-device)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-device
$ npm install --save @ionic-native/device
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* Browser
* iOS
* macOS
* Windows




### Usage


```typescript
import { Device } from '@ionic-native/device';

constructor(private device: Device) { }

...

console.log('Device UUID is: ' + this.device.uuid);
```




<p><br></p>

## Instance Members

### cordova

Get the version of Cordova running on the device.

### isVirtual

Whether the device is running on a simulator.

### manufacturer

Get the device's manufacturer.

### model

The device.model returns the name of the device's model or product. The value is set
by the device manufacturer and may be different across versions of the same product.

### platform

Get the device's operating system name.

### serial

Get the device hardware serial number.

### uuid

Get the device's Universally Unique Identifier (UUID).

### version

Get the operating system version.

<p><br></p>

