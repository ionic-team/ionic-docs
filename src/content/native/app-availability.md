# AppAvailability 


This plugin allows you to check if an app is installed on the user's device. It requires an URI Scheme (e.g. twitter://) on iOS or a Package Name (e.g com.twitter.android) on Android.

Requires Cordova plugin: cordova-plugin-appavailability. For more info, please see the [AppAvailability plugin docs](https://github.com/ohh2ahh/AppAvailability).


Repo: [https://github.com/ohh2ahh/AppAvailability](https://github.com/ohh2ahh/AppAvailability)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-appavailability
$ npm install --save @ionic-native/app-availability
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { AppAvailability } from '@ionic-native/app-availability';
import { Platform } from 'ionic-angular';

constructor(private appAvailability: AppAvailability, private platform: Platform) { }

...

let app;

if (this.platform.is('ios')) {
  app = 'twitter://';
} else if (this.platform.is('android')) {
  app = 'com.twitter.android';
}

this.appAvailability.check(app)
  .then(
    (yes: boolean) => console.log(app + ' is available'),
    (no: boolean) => console.log(app + ' is NOT available')
  );
```




<p><br></p>

## Instance Members

### check

Checks if an app is available on device

<dl>
<dt><h4>app</h4><strong>Type: </strong><code>string</code></dt>
<dd>Package name on android, or URI scheme on iOS</dd>
</dl>

<p><br></p>

