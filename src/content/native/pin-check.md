# PinCheck 


This plugin is for use with Apache Cordova and allows your application to check whether pin/keyguard or passcode is setup on iOS and Android phones.

Requires Cordova plugin: cordova-plugin-pincheck. For more info, please see the [PinCheck plugin docs](https://github.com/ohh2ahh/AppAvailability).


Repo: [https://github.com/shangyilim/cordova-plugin-pincheck](https://github.com/shangyilim/cordova-plugin-pincheck)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-pincheck
$ npm install --save @ionic-native/pin-check
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { PinCheck } from '@ionic-native/pin-check';
import { Platform } from 'ionic-angular';

constructor(private pinCheck: PinCheck, private platform: Platform) { }

...

this.pinCheck.isPinSetup()
  .then(
    (success: string) =>  console.log("pin is setup.");,
    (error: string) => console.log("pin not setup.");
  );
```




<p><br></p>

## Instance Members

### isPinSetup

 check whether pin/keyguard or passcode is setup

<p><br></p>

