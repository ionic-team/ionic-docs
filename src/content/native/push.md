# Push 


Register and receive push notifications.

Requires Cordova plugin: `phonegap-plugin-push`. For more info, please see the [Push plugin docs](https://github.com/phonegap/phonegap-plugin-push).

For TypeScript users, see the [Push plugin docs about using TypeScript for custom notifications](https://github.com/phonegap/phonegap-plugin-push/blob/master/docs/TYPESCRIPT.md).


Repo: [https://github.com/phonegap/phonegap-plugin-push](https://github.com/phonegap/phonegap-plugin-push)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">ionic cordova plugin add phonegap-plugin-push
$ npm install --save @ionic-native/push
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* Browser
* iOS
* Windows




### Usage


```typescript
import { Push, PushObject, PushOptions } from '@ionic-native/push';

constructor(private push: Push) { }

...


// to check if we have permission
this.push.hasPermission()
  .then((res: any) => {

    if (res.isEnabled) {
      console.log('We have permission to send push notifications');
    } else {
      console.log('We do not have permission to send push notifications');
    }

  });

// Create a channel (Android O and above). You'll need to provide the id, description and importance properties.
this.push.createChannel({
 id: "testchannel1",
 description: "My first test channel",
 // The importance property goes from 1 = Lowest, 2 = Low, 3 = Normal, 4 = High and 5 = Highest.
 importance: 3
}).then(() => console.log('Channel created'));

// Delete a channel (Android O and above)
this.push.deleteChannel('testchannel1').then(() => console.log('Channel deleted'));

// Return a list of currently configured channels
this.push.listChannels().then((channels) => console.log('List of channels', channels))

// to initialize push notifications

const options: PushOptions = {
   android: {},
   ios: {
       alert: 'true',
       badge: true,
       sound: 'false'
   },
   windows: {},
   browser: {
       pushServiceURL: 'http://push.api.phonegap.com/v1/push'
   }
}

const pushObject: PushObject = this.push.init(options);


pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));

pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));

pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));


```




<p><br></p>

## Instance Members

### createChannel

Create a new notification channel for Android O and above.

<dl>
<dt><h4>channel</h4><strong>Type: </strong><code>Channel</code></dt>
<dd>See Channel table below <span class="tag">optional</span></dd>
</dl>

### deleteChannel

Delete a notification channel for Android O and above.

<dl>
<dt><h4>id</h4><strong>Type: </strong><code>string</code></dt>
<dd>
 <span class="tag">optional</span></dd>
</dl>

### hasPermission

Check whether the push notification permission has been granted.

### init

Init push notifications

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>PushOptions</code></dt>
<dd>See PushOptions table below</dd>
</dl>

### listChannels

Returns a list of currently configured channels.

<p><br></p>

## AndroidPushOptions

<dl>
<dt><h4>clearBadge</h4><strong>Type: </strong><code>union</code></dt>
<dd>If true the icon badge will be cleared on init and before push messages are processed. <span class="tag">optional</span></dd><dt><h4>clearNotifications</h4><strong>Type: </strong><code>union</code></dt>
<dd>If true the app clears all pending notifications when it is closed. <span class="tag">optional</span></dd><dt><h4>forceShow</h4><strong>Type: </strong><code>union</code></dt>
<dd>If true will always show a notification, even when the app is on the
foreground. <span class="tag">optional</span></dd><dt><h4>icon</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The name of a drawable resource to use as the small-icon. The name should
not include the extension. <span class="tag">optional</span></dd><dt><h4>iconColor</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Sets the background color of the small icon on Android 5.0 and greater.
[Supported Formats](http://developer.android.com/intl/ru/reference/android/graphics/Color.html#parseColor(java.lang.String)) <span class="tag">optional</span></dd><dt><h4>messageKey</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The key to search for text of notification. <span class="tag">optional</span></dd><dt><h4>senderID</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Maps to the project number in the Google Developer Console. <span class="tag">optional</span></dd><dt><h4>sound</h4><strong>Type: </strong><code>union</code></dt>
<dd>If true it plays the sound specified in the push data or the default system
sound. <span class="tag">optional</span></dd><dt><h4>titleKey</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The key to search for title of notification. <span class="tag">optional</span></dd><dt><h4>topics</h4><strong>Type: </strong><code>string[]</code></dt>
<dd>If the array contains one or more strings each string will be used to
subscribe to a GcmPubSub topic. <span class="tag">optional</span></dd><dt><h4>vibrate</h4><strong>Type: </strong><code>union</code></dt>
<dd>If true the device vibrates on receipt of notification. <span class="tag">optional</span></dd>
</dl>

## BrowserPushOptions

<dl>
<dt><h4>applicationServerKey</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Optional. Your GCM API key if you are using VAPID keys. <span class="tag">optional</span></dd><dt><h4>pushServiceURL</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>URL for the push server you want to use.
Default: http://push.api.phonegap.com/v1/push  Optional. <span class="tag">optional</span></dd>
</dl>

## CategoryAction

<dl>
<dt><h4>maybe</h4><strong>Type: </strong><code>reference</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>no</h4><strong>Type: </strong><code>reference</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>yes</h4><strong>Type: </strong><code>reference</code></dt>
<dd>undefined <span class="tag">optional</span></dd>
</dl>

## CategoryActionData

<dl>
<dt><h4>callback</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>destructive</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>foreground</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>title</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd>
</dl>

## CategoryArray

## Channel

<dl>
<dt><h4>description</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>id</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>importance</h4><strong>Type: </strong><code>reference</code></dt>
<dd>undefined</dd><dt><h4>sound</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd>
</dl>

## IOSPushOptions

<dl>
<dt><h4>alert</h4><strong>Type: </strong><code>union</code></dt>
<dd>If true the device shows an alert on receipt of notification.
**Note**: the value you set this option to the first time you call the init
method will be how the application always acts. Once this is set
programmatically in the init method it can only be changed manually by the
user in Settings>Notifications>App Name. This is normal iOS behaviour. <span class="tag">optional</span></dd><dt><h4>badge</h4><strong>Type: </strong><code>union</code></dt>
<dd>If true the device sets the badge number on receipt of notification.
**Note**: the value you set this option to the first time you call the init
method will be how the application always acts. Once this is set
programmatically in the init method it can only be changed manually by the
user in Settings>Notifications>App Name. This is normal iOS behaviour. <span class="tag">optional</span></dd><dt><h4>categories</h4><strong>Type: </strong><code>reference</code></dt>
<dd>The data required in order to enable Action Buttons for iOS.
Action Buttons on iOS - https://github.com/phonegap/phonegap-plugin-push/blob/master/docs/PAYLOAD.md#action-buttons-1 <span class="tag">optional</span></dd><dt><h4>clearBadge</h4><strong>Type: </strong><code>union</code></dt>
<dd>If true the badge will be cleared on app startup. <span class="tag">optional</span></dd><dt><h4>fcmSandbox</h4><strong>Type: </strong><code>union</code></dt>
<dd>Whether to use prod or sandbox GCM setting. <span class="tag">optional</span></dd><dt><h4>sound</h4><strong>Type: </strong><code>union</code></dt>
<dd>If true the device plays a sound on receipt of notification.
**Note**: the value you set this option to the first time you call the init
method will be how the application always acts. Once this is set
programmatically in the init method it can only be changed manually by the
user in Settings>Notifications>App Name. This is normal iOS behaviour. <span class="tag">optional</span></dd><dt><h4>topics</h4><strong>Type: </strong><code>string[]</code></dt>
<dd>If the array contains one or more strings each string will be used to
subscribe to a GcmPubSub topic.
**Note**: only usable in conjunction with `senderID`. <span class="tag">optional</span></dd>
</dl>

## NotificationEventAdditionalData

<dl>
<dt><h4>coldstart</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>collapse_key</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>foreground</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Whether the notification was received while the app was in the foreground <span class="tag">optional</span></dd><dt><h4>from</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>notId</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd>
</dl>

## NotificationEventResponse

<dl>
<dt><h4>additionalData</h4><strong>Type: </strong><code>intersection</code></dt>
<dd>An optional collection of data sent by the 3rd party push service that does not fit in the above properties.</dd><dt><h4>count</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The number of messages to be displayed in the badge iOS or message count in the notification shade in Android.
For windows, it represents the value in the badge notification which could be a number or a status glyph.</dd><dt><h4>image</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The path of the image file to be displayed in the notification.</dd><dt><h4>message</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The text of the push message sent from the 3rd party service.</dd><dt><h4>sound</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The name of the sound file to be played upon receipt of the notification.</dd><dt><h4>title</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The optional title of the push message sent from the 3rd party service. <span class="tag">optional</span></dd>
</dl>

## PushOptions

<dl>
<dt><h4>android</h4><strong>Type: </strong><code>reference</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>browser</h4><strong>Type: </strong><code>reference</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>ios</h4><strong>Type: </strong><code>reference</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>windows</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd>
</dl>

## RegistrationEventResponse

<dl>
<dt><h4>registrationId</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The registration ID provided by the 3rd party remote push service.</dd>
</dl>

