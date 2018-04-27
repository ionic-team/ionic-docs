# Vibration 

Vibrates the device

Repo: [https://github.com/apache/cordova-plugin-vibration](https://github.com/apache/cordova-plugin-vibration)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-vibration
$ npm install --save @ionic-native/vibration
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS
* Windows




### Usage


```typescript
import { Vibration } from '@ionic-native/vibration';

constructor(private vibration: Vibration) { }

...

// Vibrate the device for a second
// Duration is ignored on iOS.
this.vibration.vibrate(1000);

// Vibrate 2 seconds
// Pause for 1 second
// Vibrate for 2 seconds
// Patterns work on Android and Windows only
this.vibration.vibrate([2000,1000,2000]);

// Stop any current vibrations immediately
// Works on Android and Windows only
this.vibration.vibrate(0);
```




<p><br></p>

## Instance Members

### vibrate

Vibrates the device for given amount of time.

<dl>
<dt><h4>time</h4></dt>
<dd>Milliseconds to vibrate the device. If passed an array of numbers, it will define a vibration pattern. Pass 0 to stop any vibration immediately.
</dd>
</dl>

<p><br></p>

