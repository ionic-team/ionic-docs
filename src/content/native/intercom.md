# Intercom 


This is a plugin that allows your Ionic app to use Intercom for iOS and/or Intercom for Android.
Follow the offical documentation to setup this plugin correctly: https://developers.intercom.com/docs/cordova-phonegap-configuration


Repo: [https://github.com/intercom/intercom-cordova](https://github.com/intercom/intercom-cordova)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-intercom
$ npm install --save @ionic-native/intercom
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { Intercom } from '@ionic-native/intercom';


constructor(private intercom: Intercom) { }

...

this.intercom.registerUnidentifiedUser();
...
this.intercom.registerForPush();

```




<p><br></p>

## Instance Members

### registerUnidentifiedUser

Register a unidentified user

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>any</code></dt>
<dd>Options</dd>
</dl>

### displayConversationsList

undefined

### reset

This resets the Intercom integration's cache of your user's identity and wipes the slate clean.

### displayMessageComposerWithInitialMessage

undefined

<dl>
<dt><h4>initialMessage</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd>
</dl>

### displayMessageComposer

undefined

### setInAppMessageVisibility

undefined

<dl>
<dt><h4>visibility</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd>
</dl>

### logEvent

undefined

<dl>
<dt><h4>eventName</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd><dt><h4>metaData</h4><strong>Type: </strong><code>any</code></dt>
<dd>undefined</dd>
</dl>

### displayMessenger

undefined

### hideMessenger

undefined

### registerForPush

undefined

### registerIdentifiedUser

Register a identified user

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>any</code></dt>
<dd>Options</dd>
</dl>

### setLauncherVisibility

undefined

<dl>
<dt><h4>visibility</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd>
</dl>

### setSecureMode

undefined

<dl>
<dt><h4>secureHash</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd><dt><h4>secureData</h4><strong>Type: </strong><code>any</code></dt>
<dd>undefined</dd>
</dl>

### setUserHash

undefined

<dl>
<dt><h4>secureHash</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd>
</dl>

### unreadConversationCount

undefined

### updateUser

undefined

<dl>
<dt><h4>attributes</h4><strong>Type: </strong><code>any</code></dt>
<dd>undefined</dd>
</dl>

<p><br></p>

