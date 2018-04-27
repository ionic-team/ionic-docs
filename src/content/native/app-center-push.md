# AppCenterPush 



For more info, please see https://docs.microsoft.com/en-us/appcenter/sdk/push/cordova


Repo: [https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-push](https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-push)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-appcenter-push
$ npm install --save @ionic-native/app-center-push
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { AppCenterPush } from '@ionic-native/app-center-push';


constructor(private appCenterPush: AppCenterPush) { }

...

this.appCenterPush.setEnabled(true).then(() => {
   this.appCenterPush.addEventListener('My Event').subscribe(pushNotification => {
       console.log('Recived push notification', pushNotification);
   });
});

```




<p><br></p>

## Instance Members

### addEventListener

Subscribe to an event

<dl>
<dt><h4>eventName</h4><strong>Type: </strong><code>string</code></dt>
<dd>Event name</dd>
</dl>

### isEnabled

Check if App Center Push is enabled

### setEnabled

Enable or disable App Center Push at runtime

<dl>
<dt><h4>shouldEnable</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>Set value</dd>
</dl>

<p><br></p>

