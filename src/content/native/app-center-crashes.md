# AppCenterCrashes 


App Center Analytics helps you understand user behavior and customer engagement to improve your app.
The SDK automatically captures session count and device properties like model, OS version, etc.
You can define your own custom events to measure things that matter to you.
All the information captured is available in the App Center portal for you to analyze the data.

For more info, please see https://docs.microsoft.com/en-us/appcenter/sdk/crashes/cordova


Repo: [https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-crashes](https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-crashes)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-appcenter-crashes
$ npm install --save @ionic-native/app-center-crashes
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { AppCenterCrashes } from '@ionic-native/app-center-crashes';


constructor(private AppCenterCrashes: AppCenterCrashes) { }

...

this.AppCenterCrashes.setEnabled(true).then(() => {
   this.AppCenterCrashes.lastSessionCrashReport().then(report => {
       console.log('Crash report', report);
   });
});

```



<p><br></p>

## Instance Members

### generateTestCrash

App Center Crashes provides you with an API to generate a test crash for easy testing of the SDK.
This API can only be used in test/beta apps and won't do anything in production apps.

### hasCrashedInLastSession

At any time after starting the SDK, you can check if the app crashed in the previous launch

### isEnabled

Check if App Center Crashes is enabled

### lastSessionCrashReport

Details about the last crash

### setEnabled

Enable or disable App Center Crashes at runtime

<dl>
<dt><h4>shouldEnable</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>Set value</dd>
</dl>

<p><br></p>

## AppCenterCrashReport

<dl>
<dt><h4>appErrorTime</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>appProcessIdentifier</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>appStartTime</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>device</h4><strong>Type: </strong><code>reference</code></dt>
<dd>undefined</dd><dt><h4>id</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>signal</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd>
</dl>

## AppCenterCrashReportDevice

<dl>
<dt><h4>app_build</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>app_namespace</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>app_version</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>carrier_country</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>carrier_name</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>locale</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>model</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>oem_name</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>os_build</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>os_name</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>os_version</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>screen_size</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>sdk_name</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>sdk_version</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>time_zone_offset</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd>
</dl>

