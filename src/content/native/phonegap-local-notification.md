# PhonegapLocalNotification 


The Local Notification plugin gives developers the ability to post notifications from their app that show up in the device’s notification area.
The API for the local notification plugin follows the W3C Web Notifications specification: https://www.w3.org/TR/notifications/


Repo: [https://github.com/phonegap/phonegap-plugin-local-notification](https://github.com/phonegap/phonegap-plugin-local-notification)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add phonegap-plugin-local-notification
$ npm install --save @ionic-native/phonegap-local-notification
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


```
import { PhonegapLocalNotification } from '@ionic-native/phonegap-local-notification';


constructor(private localNotification: PhonegapLocalNotification) { }

...

this.localNotification.requestPermission().then(
  (permission) => {
    if (permission === 'granted') {

      // Create the notification
      this.localNotification.create('My Title', {
        tag: 'message1',
        body: 'My body',
        icon: 'assets/icon/favicon.ico'
      });

    }
  }
);

```




<p><br></p>

## Instance Members

### create

A global object that lets you interact with the Notification API.

<dl>
<dt><h4>title</h4><strong>Type: </strong><code>string</code></dt>
<dd>Title of the local notification.</dd><dt><h4>options</h4><strong>Type: </strong><code>LocalNotificationOptions</code></dt>
<dd>See LocalNotificationOptions table below</dd>
</dl>

### requestPermission

requests permission from the user to show a local notification.

<p><br></p>

## LocalNotificationOptions

<dl>
<dt><h4>body</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Sets the body of the notification <span class="tag">optional</span></dd><dt><h4>dir</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Sets the direction of the notification. One of "auto", "ltr" or "rtl" <span class="tag">optional</span></dd><dt><h4>icon</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Sets the icon of the notification <span class="tag">optional</span></dd><dt><h4>lang</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd> Sets the language of the notification <span class="tag">optional</span></dd><dt><h4>tag</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Sets the identifying tag of the notification <span class="tag">optional</span></dd>
</dl>

