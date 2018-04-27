# Backlight 


This plugin adds turning on/off the device backlight.


Repo: [https://github.com/mebibou/cordova-plugin-backlight](https://github.com/mebibou/cordova-plugin-backlight)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-backlight
$ npm install --save @ionic-native/backlight
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android




### Usage


```typescript
import { Backlight } from '@ionic-native/backlight';

constructor(private backlight: Backlight) { }

...

// Turn backlight on
this.backlight.on().then(() => console.log('backlight on'));

// Turn backlight off
this.backlight.off().then(() => console.log('backlight off'));

```




<p><br></p>

## Instance Members

### off

This function turns backlight off

### on

This function turns backlight on

<p><br></p>

