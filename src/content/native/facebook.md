# Facebook 


Use the Facebook Connect plugin to obtain access to the native FB application on iOS and Android.

Requires Cordova plugin: `cordova-plugin-facebook4`. For more info, please see the [Facebook Connect](https://github.com/jeduan/cordova-plugin-facebook4).

#### Installation

 To use the FB plugin, you first have to create a new Facebook App inside of the Facebook developer portal at [https://developers.facebook.com/apps](https://developers.facebook.com/apps).

[![fb-getstarted-1](/img/docs/native/Facebook/1.png)](https://developers.facebook.com/apps/)

Retrieve the `App ID` and `App Name`.

[![fb-getstarted-2](/img/docs/native/Facebook/2.png)](https://developers.facebook.com/apps/)

Then type in the following command in your Terminal, where APP_ID and APP_NAME are the values from the Facebook Developer portal.

```bash
 ionic cordova plugin add cordova-plugin-facebook4 --variable APP_ID="123456789" --variable APP_NAME="myApplication"
```

After, you'll need to add the native platforms you'll be using to your app in the Facebook Developer portal under your app's Settings:

[![fb-getstarted-3](/img/docs/native/Facebook/3.png)](https://developers.facebook.com/apps/)

Click `'Add Platform'`.

[![fb-getstarted-4](/img/docs/native/Facebook/4.png)](https://developers.facebook.com/apps/)

At this point you'll need to open your project's [`config.xml`](https://cordova.apache.org/docs/en/latest/config_ref/index.html) file, found in the root directory of your project.

Take note of the `id` for the next step:
```
<widget id="com.mycompany.testapp" version="0.0.1" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
```

You can also edit the `id` to whatever you'd like it to be.

#### iOS Install
Under 'Bundle ID', add the `id` from your `config.xml` file:

[![fb-getstarted-5](/img/docs/native/Facebook/5.png)](https://developers.facebook.com/apps/)


#### Android Install
Under 'Google Play Package Name', add the `id` from your `config.xml` file:

[![fb-getstarted-6](/img/docs/native/Facebook/6.png)](https://developers.facebook.com/apps/)


And that's it! You can now make calls to Facebook using the plugin.

## Events

App events allow you to understand the makeup of users engaging with your app, measure the performance of your Facebook mobile app ads, and reach specific sets of your users with Facebook mobile app ads.

- [iOS] [https://developers.facebook.com/docs/ios/app-events](https://developers.facebook.com/docs/ios/app-events)
- [Android] [https://developers.facebook.com/docs/android/app-events](https://developers.facebook.com/docs/android/app-events)
- [JS] Does not have an Events API, so the plugin functions are empty and will return an automatic success

Activation events are automatically tracked for you in the plugin.

Events are listed on the [insights page](https://www.facebook.com/insights/).

For tracking events, see `logEvent` and `logPurchase`.


Repo: [https://github.com/jeduan/cordova-plugin-facebook4](https://github.com/jeduan/cordova-plugin-facebook4)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">ionic cordova plugin add cordova-plugin-facebook4 --variable APP_ID="123456789" --variable APP_NAME="myApplication"
$ npm install --save @ionic-native/facebook
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS
* Browser




### Usage


```typescript
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

constructor(private fb: Facebook) { }

...

this.fb.login(['public_profile', 'user_friends', 'email'])
  .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
  .catch(e => console.log('Error logging into Facebook', e));


this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);

```





<p><br></p>

## Instance Members

### EVENTS



### api

Make a call to Facebook Graph API. Can take additional permissions beyond those granted on login.

<dl>
<dt><h4>requestPath</h4><strong>Type: </strong><code>string</code></dt>
<dd>Graph API endpoint you want to call</dd><dt><h4>permissions</h4></dt>
<dd>List of [permissions](https://developers.facebook.com/docs/facebook-login/permissions) for this request.</dd>
</dl>

### appInvite

Open App Invite dialog. Does not require login.

<dl>
<dt><h4>options</h4></dt>
<dd>An object containing an [App Link](https://developers.facebook.com/docs/applinks) URL to your app and an optional image URL.</dd>
</dl>

### getAccessToken

Get a Facebook access token for using Facebook services.

### getLoginStatus

Determine if a user is logged in to Facebook and has authenticated your app.  There are three possible states for a user:

### logEvent

Log an event.  For more information see the Events section above.

<dl>
<dt><h4>name</h4><strong>Type: </strong><code>string</code></dt>
<dd>Name of the event</dd><dt><h4>params</h4><strong>Type: </strong><code>Object</code></dt>
<dd>See Object table below <span class="tag">optional</span></dd><dt><h4>valueToSum</h4><strong>Type: </strong><code>number</code></dt>
<dd>null <span class="tag">optional</span></dd>
</dl>

### logPurchase

Log a purchase. For more information see the Events section above.

<dl>
<dt><h4>value</h4><strong>Type: </strong><code>number</code></dt>
<dd>Value of the purchase.</dd><dt><h4>currency</h4><strong>Type: </strong><code>string</code></dt>
<dd>The currency, as an [ISO 4217 currency code](http://en.wikipedia.org/wiki/ISO_4217)</dd>
</dl>

### login

Login to Facebook to authenticate this app.

<dl>
<dt><h4>permissions</h4></dt>
<dd>List of [permissions](https://developers.facebook.com/docs/facebook-login/permissions) this app has upon logging in.</dd>
</dl>

### logout

Logout of Facebook.

### showDialog

Show one of various Facebook dialogs. Example of options for a Share dialog:

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>any</code></dt>
<dd>The dialog options</dd>
</dl>

<p><br></p>

## FacebookLoginResponse

<dl>
<dt><h4>authResponse</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>undefined</dd><dt><h4>status</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd>
</dl>

