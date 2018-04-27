# AndroidPermissions 


This plugin is designed to support Android new permissions checking mechanism.

You can find all permissions here: https://developer.android.com/reference/android/Manifest.permission.html


Repo: [https://github.com/NeoLSN/cordova-plugin-android-permissions](https://github.com/NeoLSN/cordova-plugin-android-permissions)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-android-permissions
$ npm install --save @ionic-native/android-permissions
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android




### Usage


```
import { AndroidPermissions } from '@ionic-native/android-permissions';


constructor(private androidPermissions: AndroidPermissions) { }

...

this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
  result => console.log('Has permission?',result.hasPermission),
  err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
);

this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);

```

Android 26 and above: due to Android 26's changes to permissions handling (permissions are requested at time of use rather than at runtime,) if your app does not include any functions (eg. other Ionic Native plugins) that utilize a particular permission, then `requestPermission()` and `requestPermissions()` will resolve immediately with no prompt shown to the user.  Thus, you must include a function utilizing the feature you would like to use before requesting permission for it.




<p><br></p>

## Instance Members

### PERMISSION



### checkPermission

Check permission

<dl>
<dt><h4>permission</h4><strong>Type: </strong><code>string</code></dt>
<dd>The name of the permission</dd>
</dl>

### hasPermission

This function still works now, will not support in the future.

<dl>
<dt><h4>permission</h4><strong>Type: </strong><code>string</code></dt>
<dd>The name of the permission</dd>
</dl>

### requestPermission

Request permission

<dl>
<dt><h4>permission</h4><strong>Type: </strong><code>string</code></dt>
<dd>The name of the permission to request</dd>
</dl>

### requestPermissions

Request permissions

<dl>
<dt><h4>permissions</h4></dt>
<dd>An array with permissions</dd>
</dl>

<p><br></p>

