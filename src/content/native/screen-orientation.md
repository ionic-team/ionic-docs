# ScreenOrientation 


Cordova plugin to set/lock the screen orientation in a common way.

Requires Cordova plugin: `cordova-plugin-screen-orientation`. For more info, please see the [Screen Orientation plugin docs](https://github.com/apache/cordova-plugin-screen-orientation).


Repo: [https://github.com/apache/cordova-plugin-screen-orientation](https://github.com/apache/cordova-plugin-screen-orientation)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-screen-orientation
$ npm install --save @ionic-native/screen-orientation
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
import { ScreenOrientation } from '@ionic-native/screen-orientation';

constructor(private screenOrientation: ScreenOrientation) { }

...


// get current
console.log(this.screenOrientation.type); // logs the current orientation, example: 'landscape'

// set to landscape
this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);

// allow user rotate
this.screenOrientation.unlock();

// detect orientation changes
this.screenOrientation.onChange().subscribe(
   () => {
       console.log("Orientation Changed");
   }
);

```




<p><br></p>

## Instance Members

### ORIENTATIONS

Convenience enum for possible orientations

### lock

Lock the orientation to the passed value.
See below for accepted values

<dl>
<dt><h4>orientation</h4><strong>Type: </strong><code>string</code></dt>
<dd>The orientation which should be locked. Accepted values see table above.</dd>
</dl>

### onChange

Listen to orientation change event

### type

Get the current orientation of the device.

### unlock

Unlock and allow all orientations.

<p><br></p>

