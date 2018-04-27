# ExtendedDeviceInformation 


Retrieves additional device information that is not provided by other plugins


Repo: [https://github.com/danielehrhardt/cordova-plugin-extended-device-information](https://github.com/danielehrhardt/cordova-plugin-extended-device-information)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-extended-device-information
$ npm install --save @ionic-native/extended-device-information
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android




### Usage


```typescript
import { ExtendedDeviceInformation } from '@ionic-native/extended-device-information';


constructor(private extendedDeviceInformation: ExtendedDeviceInformation) { }

...

console.log('The Memory is: ' + this.extendedDeviceInformation.memory);
```




<p><br></p>

## Instance Members

### cpumhz

Get the device's CPU mhz

### memory

Get the device's memory size

### totalstorage

Get the total storage

<p><br></p>

