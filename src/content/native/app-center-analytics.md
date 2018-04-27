# AppCenterAnalytics 


App Center Analytics helps you understand user behavior and customer engagement to improve your app.
The SDK automatically captures session count and device properties like model, OS version, etc.
You can define your own custom events to measure things that matter to you.
All the information captured is available in the App Center portal for you to analyze the data.

For more info, please see https://docs.microsoft.com/en-us/appcenter/sdk/analytics/cordova


Repo: [https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-analytics](https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-analytics)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-appcenter-analytics
$ npm install --save @ionic-native/app-center-analytics
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { AppCenterAnalytics } from '@ionic-native/app-center-analytics';


constructor(private appCenterAnalytics: AppCenterAnalytics) { }

...

this.appCenterAnalytics.setEnabled(true).then(() => {
   this.appCenterAnalytics.trackEvent('My Event', { TEST: 'HELLO_WORLD' }).then(() => {
       console.log('Custom event tracked');
   });
});

```



<p><br></p>

## Instance Members

### isEnabled

Check if App Center Analytics is enabled

### setEnabled

Enable or disable App Center Analytics at runtime

<dl>
<dt><h4>shouldEnable</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>Set value</dd>
</dl>

### trackEvent

Tracks an custom event.
You can send up to 200 distinct event names. Also, there is a maximum limit of 256 characters per event name
and 64 characters per event property name and event property value.

<dl>
<dt><h4>eventName</h4><strong>Type: </strong><code>string</code></dt>
<dd>Event name</dd><dt><h4>properties</h4><strong>Type: </strong><code>StringMap</code></dt>
<dd>See StringMap table below</dd>
</dl>

<p><br></p>

## StringMap

