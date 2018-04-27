# Flashlight 

This plugin allows you to switch the flashlight / torch of the device on and off.

Requires Cordova plugin: `cordova-plugin-flashlight`. For more info, please see the [Flashlight plugin docs](https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin).


Repo: [https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin](https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-flashlight
$ npm install --save @ionic-native/flashlight
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
import { Flashlight } from '@ionic-native/flashlight';

constructor(private flashlight: Flashlight) { }

...

this.flashlight.switchOn();

```




<p><br></p>

## Instance Members

### available

Checks if the flashlight is available

### isSwitchedOn

Checks if the flashlight is turned on.

### switchOff

Switches the flashlight off

### switchOn

Switches the flashlight on

### toggle

Toggles the flashlight

<p><br></p>

