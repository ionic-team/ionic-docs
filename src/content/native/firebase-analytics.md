# FirebaseAnalytics 


Cordova plugin for Firebase Analytics

Go to firebase console and export google-services.json and GoogleService-Info.plist. Put those files into the root of your cordova app folder.

NOTE: on iOS in order to collect demographic, age, gender data etc. you should additionally include AdSupport.framework into your project.


Repo: [https://github.com/chemerisuk/cordova-plugin-firebase-analytics](https://github.com/chemerisuk/cordova-plugin-firebase-analytics)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-firebase-analytics
$ npm install --save @ionic-native/firebase-analytics
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';


constructor(private firebaseAnalytics: FirebaseAnalytics) { }

...

this.firebaseAnalytics.logEvent('page_view', {page: "dashboard"})
  .then((res: any) => console.log(res))
  .catch((error: any) => console.error(error));

```




<p><br></p>

## Instance Members

### logEvent

Logs an app event.
Be aware of automatically collected events.

<dl>
<dt><h4>name</h4><strong>Type: </strong><code>string</code></dt>
<dd>The name of the event</dd><dt><h4>params</h4><strong>Type: </strong><code>any</code></dt>
<dd>Some param to configure something</dd>
</dl>

### setCurrentScreen

Sets the current screen name, which specifies the current visual context in your app.
This helps identify the areas in your app where users spend their time and how they interact with your app.

<dl>
<dt><h4>name</h4><strong>Type: </strong><code>string</code></dt>
<dd>The name of the screen</dd>
</dl>

### setEnabled

Sets whether analytics collection is enabled for this app on this device.

<dl>
<dt><h4>enabled</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>undefined</dd>
</dl>

### setUserId

Sets the user ID property.
This feature must be used in accordance with Google's Privacy Policy.

<dl>
<dt><h4>id</h4><strong>Type: </strong><code>string</code></dt>
<dd>The user ID</dd>
</dl>

### setUserProperty

This feature must be used in accordance with Google's Privacy Policy.
Be aware of automatically collected user properties.

<dl>
<dt><h4>name</h4><strong>Type: </strong><code>string</code></dt>
<dd>The property name</dd><dt><h4>value</h4><strong>Type: </strong><code>string</code></dt>
<dd>The property value</dd>
</dl>

<p><br></p>

