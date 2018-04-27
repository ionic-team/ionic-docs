# UniqueDeviceID 


This plugin produces a unique, cross-install, app-specific device id.


Repo: [https://github.com/Paldom/UniqueDeviceID](https://github.com/Paldom/UniqueDeviceID)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-uniquedeviceid
$ npm install --save @ionic-native/unique-device-id
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS
* Windows Phone 8




### Usage


```typescript
import { UniqueDeviceID } from '@ionic-native/unique-device-id';

constructor(private uniqueDeviceID: UniqueDeviceID) { }

...

this.uniqueDeviceID.get()
  .then((uuid: any) => console.log(uuid))
  .catch((error: any) => console.log(error));

```




<p><br></p>

## Instance Members

### get

Gets a unique, cross-install, app-specific device id.

<p><br></p>

