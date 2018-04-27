# DeviceAccounts 


Gets the Google accounts associated with the Android device


Repo: [https://github.com/danielsogl/cordova-device-accounts](https://github.com/danielsogl/cordova-device-accounts)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-device-accounts
$ npm install --save @ionic-native/device-accounts
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android




### Usage


```typescript
import { DeviceAccounts } from '@ionic-native/device-accounts';

constructor(private deviceAccounts: DeviceAccounts) { }

...

this.deviceAccounts.get()
  .then(accounts => console.log(accounts))
  .catch(error => console.error(error));

```



<p><br></p>

## Instance Members

### get

 Gets all accounts registered on the Android Device

### getByType

 Get all accounts registered on Android device for requested type

<dl>
<dt><h4>type</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd>
</dl>

### getEmail

 Get the first email registered on Android device

### getEmails

 Get all emails registered on Android device (accounts with 'com.google' type)

<p><br></p>

## AndroidAccount

<dl>
<dt><h4>CREATOR</h4><strong>Type: </strong><code>reference</code></dt>
<dd>Account creator</dd><dt><h4>name</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Account name</dd><dt><h4>type</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Account type</dd>
</dl>

