# FCM 


Provides basic functionality for Firebase Cloud Messaging


Repo: [https://github.com/fechanique/cordova-plugin-fcm](https://github.com/fechanique/cordova-plugin-fcm)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-fcm
$ npm install --save @ionic-native/fcm
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { FCM } from '@ionic-native/fcm';

constructor(private fcm: FCM) {}

...

this.fcm.subscribeToTopic('marketing');

this.fcm.getToken().then(token => {
  backend.registerToken(token);
});

this.fcm.onNotification().subscribe(data => {
  if(data.wasTapped){
    console.log("Received in background");
  } else {
    console.log("Received in foreground");
  };
});

this.fcm.onTokenRefresh().subscribe(token => {
  backend.registerToken(token);
});

this.fcm.unsubscribeFromTopic('marketing');

```



<p><br></p>

## Instance Members

### getToken

Gets device's current registration id

### onNotification

Watch for incoming notifications

### onTokenRefresh

Event firing on the token refresh

### subscribeToTopic

Subscribes you to a [topic](https://firebase.google.com/docs/notifications/android/console-topics)

<dl>
<dt><h4>topic</h4><strong>Type: </strong><code>string</code></dt>
<dd>Topic to be subscribed to
</dd>
</dl>

### unsubscribeFromTopic

Unsubscribes you from a [topic](https://firebase.google.com/docs/notifications/android/console-topics)

<dl>
<dt><h4>topic</h4><strong>Type: </strong><code>string</code></dt>
<dd>Topic to be unsubscribed from
</dd>
</dl>

<p><br></p>

## NotificationData

<dl>
<dt><h4>wasTapped</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Determines whether the notification was pressed or not</dd>
</dl>

