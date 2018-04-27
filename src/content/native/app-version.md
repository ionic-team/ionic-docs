# AppVersion 


Reads the version of your app from the target build settings.

Requires Cordova plugin: `cordova-plugin-app-version`. For more info, please see the [Cordova App Version docs](https://github.com/whiteoctober/cordova-plugin-app-version).


Repo: [https://github.com/whiteoctober/cordova-plugin-app-version](https://github.com/whiteoctober/cordova-plugin-app-version)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-app-version
$ npm install --save @ionic-native/app-version
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
import { AppVersion } from '@ionic-native/app-version';

constructor(private appVersion: AppVersion) { }

...


this.appVersion.getAppName();
this.appVersion.getPackageName();
this.appVersion.getVersionCode();
this.appVersion.getVersionNumber();

```




<p><br></p>

## Instance Members

### getAppName

Returns the name of the app

### getPackageName

Returns the package name of the app

### getVersionCode

Returns the build identifier of the app

### getVersionNumber

Returns the version of the app

<p><br></p>

