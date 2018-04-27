# Brightness 


The Brightness plugin let you control the display brightness of your device.

Requires Cordova plugin: `cordova-plugin-brightness`. For more info, please see the [Brightness plugin docs](https://github.com/mgcrea/cordova-plugin-brightness).


Repo: [https://github.com/mgcrea/cordova-plugin-brightness](https://github.com/mgcrea/cordova-plugin-brightness)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-brightness
$ npm install --save @ionic-native/brightness
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { Brightness } from '@ionic-native/brightness';

constructor(private brightness: Brightness) { }

...

let brightnessValue = 0.8;
this.brightness.setBrightness(brightnessValue);
```





<p><br></p>

## Instance Members

### getBrightness

Reads the current brightness of the device display.

### setBrightness

Sets the brightness of the display.

<dl>
<dt><h4>value</h4><strong>Type: </strong><code>number</code></dt>
<dd>Floating number between 0 and 1 in which case 1 means 100% brightness and 0 means 0% brightness.</dd>
</dl>

### setKeepScreenOn

Keeps the screen on. Prevents the device from setting the screen to sleep.

<dl>
<dt><h4>value</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>
</dd>
</dl>

<p><br></p>

