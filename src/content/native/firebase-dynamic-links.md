# FirebaseDynamicLinks 


Cordova plugin for Firebase Dynamic Links

Variables APP_DOMAIN and APP_PATH specify web URL where your app will start an activity to handle the link. They also used to setup support for App Indexing.
Go to firebase console and export google-services.json and GoogleService-Info.plist. Put those files into the root of your cordova app folder.

Preferences:

Preferences GoogleIOSClientId and GoogleAndroidClientId are used to setup dynamic links when you have an app for several platforms.
You can find values at your GoogleService-Info.plist (key ANDROID_CLIENT_ID) and google-services.json (key client[0].oauth_client[0].client_id).

config.xml:
```xml
<platform name="android">
    <preference name="GoogleIOSClientId" value="..." />
</platform>
<platform name="ios">
    <preference name="GoogleAndroidClientId" value="..." />
</platform>
```

Repo: [https://github.com/chemerisuk/cordova-plugin-firebase-dynamiclinks](https://github.com/chemerisuk/cordova-plugin-firebase-dynamiclinks)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">ionic cordova plugin add cordova-plugin-firebase-dynamiclinks --save --variable APP_DOMAIN="example.com" --variable APP_PATH="/"
$ npm install --save @ionic-native/firebase-dynamic-links
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { FirebaseDynamicLinks } from '@ionic-native/firebase-dynamic-links';


constructor(private firebaseDynamicLinks: FirebaseDynamicLinks) { }

...

this.firebaseDynamicLinks.onDynamicLink()
  .then((res: any) => console.log(res)) //Handle the logic here after opening the app with the Dynamic link
  .catch((error:any) => console.log(error));
```




<p><br></p>

## Instance Members

### onDynamicLink

Registers callback that is triggered on each dynamic link click.

<p><br></p>

## IDynamicLink

<dl>
<dt><h4>deepLink</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>matchType</h4><strong>Type: </strong><code>union</code></dt>
<dd>undefined</dd>
</dl>

