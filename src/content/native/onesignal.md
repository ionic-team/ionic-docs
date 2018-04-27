# OneSignal 


The OneSignal plugin is an client implementation for using the [OneSignal](https://onesignal.com/) Service.
OneSignal is a simple implementation for delivering push notifications.

Please view the official [OneSignal Ionic SDK Installation](https://documentation.onesignal.com/docs/ionic-sdk-setup) guide
for more information.

#### Icons
If you want to use generated icons with command `ionic cordova resources`:

1. Add a file to your `hooks` directory called `copy_android_notification_icons.js`

2. Configure the hook in your config.xml
```
    <platform name="android">
        <hook type="after_prepare" src="hooks/copy_android_notification_icons.js" />
    </platform>
```

3. Put the following code in it:

```
#!/usr/bin/env node

var fs = require('fs');
var path = require('path');

var filestocopy = [{
    "resources/android/icon/drawable-hdpi-icon.png":
        "platforms/android/res/drawable-hdpi/ic_stat_onesignal_default.png"
}, {
    "resources/android/icon/drawable-mdpi-icon.png":
        "platforms/android/res/drawable-mdpi/ic_stat_onesignal_default.png"
}, {
    "resources/android/icon/drawable-xhdpi-icon.png":
        "platforms/android/res/drawable-xhdpi/ic_stat_onesignal_default.png"
}, {
    "resources/android/icon/drawable-xxhdpi-icon.png":
        "platforms/android/res/drawable-xxhdpi/ic_stat_onesignal_default.png"
}, {
    "resources/android/icon/drawable-xxxhdpi-icon.png":
        "platforms/android/res/drawable-xxxhdpi/ic_stat_onesignal_default.png"
} ];

module.exports = function(context) {

    // no need to configure below
    var rootdir = context.opts.projectRoot;

    filestocopy.forEach(function(obj) {
        Object.keys(obj).forEach(function(key) {
            var val = obj[key];
            var srcfile = path.join(rootdir, key);
            var destfile = path.join(rootdir, val);
            console.log("copying "+srcfile+" to "+destfile);
            var destdir = path.dirname(destfile);
            if (fs.existsSync(srcfile) && fs.existsSync(destdir)) {
                fs.createReadStream(srcfile).pipe(
                    fs.createWriteStream(destfile));
            }
        });
    });

};
```

3. From the root of your project make the file executable:
`$ chmod +x hooks/after_prepare/030_copy_android_notification_icons.js`



Repo: [https://github.com/OneSignal/OneSignal-Cordova-SDK](https://github.com/OneSignal/OneSignal-Cordova-SDK)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add onesignal-cordova-plugin
$ npm install --save @ionic-native/onesignal
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Amazon Fire OS
* Android
* iOS
* Windows




### Usage


```typescript
import { OneSignal } from '@ionic-native/onesignal';

constructor(private oneSignal: OneSignal) { }

...

this.oneSignal.startInit('b2f7f966-d8cc-11e4-bed1-df8f05be55ba', '703322744261');

this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

this.oneSignal.handleNotificationReceived().subscribe(() => {
 // do something when notification is received
});

this.oneSignal.handleNotificationOpened().subscribe(() => {
  // do something when a notification is opened
});

this.oneSignal.endInit();
```



<p><br></p>

## Instance Members

### handleNotificationReceived

Callback to run when a notification is received, whether it was displayed or not.

### OSInFocusDisplayOption

constants to use in inFocusDisplaying()

### iOSSettings

**iOS** - Settings for iOS apps

<dl>
<dt><h4>settings</h4></dt>
<dd>
 kOSSettingsKeyAutoPrompt: boolean = true
 Auto prompt user for notification permissions.

 kOSSettingsKeyInAppLaunchURL: boolean = false
 Launch notifications with a launch URL as an in app webview.</dd>
</dl>

### addPermissionObserver

The passed in function will be fired when a notification permission setting changes.
This includes the following events:
- Notification permission prompt shown
- The user accepting or declining the permission prompt
- Enabling/disabling notifications for your app in the device Settings after returning to your app.

### inFocusDisplaying

Setting to control how OneSignal notifications will be shown when one is received while your app is in focus. By default this is set to inAppAlert, which can be helpful during development.

<dl>
<dt><h4>displayOption</h4><strong>Type: </strong><code>OSDisplayType</code></dt>
<dd>See OSDisplayType table below</dd>
</dl>

### cancelNotification

Cancels a single OneSignal notification based on its Android notification integer id. Use instead of NotificationManager.cancel(id); otherwise the notification will be restored when your app is restarted.

<dl>
<dt><h4>notificationId</h4><strong>Type: </strong><code>string</code></dt>
<dd>
</dd>
</dl>

### addSubscriptionObserver

The passed in function will be fired when a notification subscription property changes.
This includes the following events:
- Getting a push token from Apple / Google.
- Getting a player / user id from OneSignal
- OneSignal.setSubscription is called
- User disables or enables notifications

### promptForPushNotificationsWithUserResponse

Prompt the user for notification permissions. Callback fires as soon as the user accepts or declines notifications.

### deleteTag

Deletes a tag that was previously set on a user with `sendTag` or `sendTags`. Use `deleteTags` if you need to delete more than one.

<dl>
<dt><h4>key</h4><strong>Type: </strong><code>string</code></dt>
<dd>null</dd>
</dl>

### clearOneSignalNotifications

Clears all OneSignla notifications

### promptLocation

Prompts the user for location permission to allow geotagging based on the "Location radius" filter on the OneSignal dashboard.

### enableVibrate

Warning:
Only applies to Android and Amazon. You can call this from your UI from a button press for example to give your user's options for your notifications.

<dl>
<dt><h4>enable</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>null</dd>
</dl>

### deleteTags

Deletes tags that were previously set on a user with `sendTag` or `sendTags`.

<dl>
<dt><h4>keys</h4></dt>
<dd>null</dd>
</dl>

### enableSound

Warning:
Only applies to Android and Amazon. You can call this from your UI from a button press for example to give your user's options for your notifications.

<dl>
<dt><h4>enable</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>null</dd>
</dl>

### sendTag

Tag a user based on an app event of your choosing so later you can create segments on [onesignal.com](https://onesignal.com/) to target these users.
Recommend using sendTags over sendTag if you need to set more than one tag on a user at a time.

<dl>
<dt><h4>key</h4><strong>Type: </strong><code>string</code></dt>
<dd>null</dd><dt><h4>value</h4><strong>Type: </strong><code>string</code></dt>
<dd>null</dd>
</dl>

### getIds

Lets you retrieve the OneSignal user id and device token.
Your handler is called after the device is successfully registered with OneSignal.

### endInit

Must be called after `startInit` to complete initialization of OneSignal.

### getPermissionSubscriptionState

Get the current notification and permission state. Returns a OSPermissionSubscriptionState type described below.

### getTags

Retrieve a list of tags that have been set on the user from the OneSignal server.

### handleNotificationOpened

Callback to run when a notification is tapped on from the notification shade (**ANDROID**) or notification
center (**iOS**), or when closing an Alert notification shown in the app (if InAppAlert is enabled in
inFocusDisplaying).

### postNotification

undefined

<dl>
<dt><h4>notificationObj</h4><strong>Type: </strong><code>OSNotification</code></dt>
<dd>See OSNotification table below</dd>
</dl>

### registerForPushNotifications

Call this when you would like to prompt an iOS user to accept push notifications with the default system prompt.
Only works if you set `kOSSettingsAutoPrompt` to `false` in `iOSSettings`

### sendTags

Tag a user based on an app event of your choosing so later you can create segments on [onesignal.com](https://onesignal.com/) to target these users.
Recommend using sendTags over sendTag if you need to set more than one tag on a user at a time.

<dl>
<dt><h4>json</h4><strong>Type: </strong><code>any</code></dt>
<dd>null</dd>
</dl>

### setLogLevel

Enable logging to help debug if you run into an issue setting up OneSignal.
The logging levels are as follows: 0 = None, 1= Fatal, 2 = Errors, 3 = Warnings, 4 = Info, 5 = Debug, 6 = Verbose

<dl>
<dt><h4>logLevel</h4></dt>
<dd>null</dd>
</dl>

### setSubscription

You can call this method with false to opt users out of receiving all notifications through OneSignal.
You can pass true later to opt users back into notifications.

<dl>
<dt><h4>enable</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>
</dd>
</dl>

### startInit

Start the initialization process. Once you are done configuring OneSignal, call the `endInit` function.

<dl>
<dt><h4>appId</h4><strong>Type: </strong><code>string</code></dt>
<dd>Your OneSignal app id</dd><dt><h4>googleProjectNumber</h4><strong>Type: </strong><code>string</code></dt>
<dd>**ANDROID** - your Google project number; only required for Android GCM/FCM pushes. <span class="tag">optional</span></dd>
</dl>

### syncHashedEmail

undefined

<dl>
<dt><h4>email</h4><strong>Type: </strong><code>string</code></dt>
<dd>
</dd>
</dl>

<p><br></p>

## OSActionButton

<dl>
<dt><h4>icon</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>**ANDROID** - Icon shown on the button.</dd><dt><h4>id</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Id assigned to the button.</dd><dt><h4>text</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Text show on the button to the user.</dd>
</dl>

## OSBackgroundImageLayout

<dl>
<dt><h4>bodyTextColor</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Text color of the body on the notification. ARGB Format.</dd><dt><h4>image</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Image URL or name used as the background image.</dd><dt><h4>titleTextColor</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Text color of the title on the notification. ARGB Format.</dd>
</dl>

## OSNotification

<dl>
<dt><h4>adm_big_picture</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>adm_group</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>adm_group_message</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>adm_large_icon</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>adm_small_icon</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>adm_sound</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>amazon_background_data</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>androidNotificationId</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>**ANDROID** - Android Notification assigned to the notification. Can be used to cancel or replace the notification. <span class="tag">optional</span></dd><dt><h4>android_accent_color</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>android_group</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>android_group_message</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>android_led_color</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>android_sound</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>android_visibility</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>app_id</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>app_ids</h4><strong>Type: </strong><code>string[]</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>big_picture</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>buttons</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>chrome_big_picture</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>chrome_icon</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>chrome_web_icon</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>content_available</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>contents</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>data</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>delayed_option</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>delivery_time_of_day</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>displayType</h4><strong>Type: </strong><code>reference</code></dt>
<dd>How the notification was displayed to the user. Can be set to `Notification`, `InAppAlert`, or `None` if it was not displayed.</dd><dt><h4>excluded_segments</h4><strong>Type: </strong><code>string[]</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>firefox_icon</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>groupedNotifications</h4><strong>Type: </strong><code>OSNotificationPayload[]</code></dt>
<dd>**ANDROID** - Notification is a summary notification for a group this will contain all notification payloads it was created from. <span class="tag">optional</span></dd><dt><h4>headings</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>include_amazon_reg_ids</h4><strong>Type: </strong><code>string[]</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>include_android_reg_ids</h4><strong>Type: </strong><code>string[]</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>include_chrome_reg_ids</h4><strong>Type: </strong><code>string[]</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>include_chrome_web_reg_ids</h4><strong>Type: </strong><code>string[]</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>include_ios_tokens</h4><strong>Type: </strong><code>string[]</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>include_player_ids</h4><strong>Type: </strong><code>string[]</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>include_wp_uris</h4><strong>Type: </strong><code>string[]</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>include_wp_wns_uris</h4><strong>Type: </strong><code>string[]</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>included_segments</h4><strong>Type: </strong><code>string[]</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>ios_badgeCount</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>ios_badgeType</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>ios_category</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>ios_sound</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>isAdm</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>isAndroid</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>isAnyWeb</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>isAppInFocus</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Was app in focus.</dd><dt><h4>isChrome</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>isChromeWeb</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>isIos</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>isSafari</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>isWP</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>isWP_WNS</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>large_icon</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>payload</h4><strong>Type: </strong><code>reference</code></dt>
<dd>Payload received from OneSignal.</dd><dt><h4>priority</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>send_after</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>shown</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Was notification shown to the user. Will be false for silent notifications.</dd><dt><h4>small_icon</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>tags</h4><strong>Type: </strong><code>any[]</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>template_id</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>ttl</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>url</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>wp_sound</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>wp_wns_sound</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd>
</dl>

## OSNotificationOpenedResult

<dl>
<dt><h4>action</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>undefined</dd><dt><h4>notification</h4><strong>Type: </strong><code>reference</code></dt>
<dd>undefined</dd>
</dl>

## OSNotificationPayload

<dl>
<dt><h4>actionButtons</h4><strong>Type: </strong><code>OSActionButton[]</code></dt>
<dd>List of action buttons on the notification.</dd><dt><h4>additionalData</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Custom additional data that was sent with the notification. Set on the dashboard under Options > Additional Data
or with the 'data' field on the REST API. <span class="tag">optional</span></dd><dt><h4>backgroundImageLayout</h4><strong>Type: </strong><code>reference</code></dt>
<dd>**ANDROID** - If a background image was set this object will be available. <span class="tag">optional</span></dd><dt><h4>bigPicture</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>**ANDROID** - Big picture image set on the notification. <span class="tag">optional</span></dd><dt><h4>body</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Body of the notification.</dd><dt><h4>fromProjectNumber</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>**ANDROID** - The Google project number the notification was sent under. <span class="tag">optional</span></dd><dt><h4>groupKey</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>**ANDROID** - Notifications with this same key will be grouped together as a single summary notification. <span class="tag">optional</span></dd><dt><h4>groupMessage</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>**ANDROID** - Summary text displayed in the summary notification. <span class="tag">optional</span></dd><dt><h4>largeIcon</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>**ANDROID** - Large icon set on the notification. <span class="tag">optional</span></dd><dt><h4>launchURL</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>URL to open when opening the notification. <span class="tag">optional</span></dd><dt><h4>ledColor</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>**ANDROID** - Devices that have a notification LED will blink in this color. ARGB format. <span class="tag">optional</span></dd><dt><h4>lockScreenVisibility</h4><strong>Type: </strong><code>reference</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>notificationID</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>OneSignal notification UUID.</dd><dt><h4>priority</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>rawPayload</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>List of action buttons on the notification.</dd><dt><h4>smallIcon</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>**ANDROID** - Small icon resource name set on the notification. <span class="tag">optional</span></dd><dt><h4>smallIconAccentColor</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>**ANDROID** - Accent color shown around small notification icon on Android 5+ devices. ARGB format. <span class="tag">optional</span></dd><dt><h4>sound</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Sound resource to play when the notification is shown.</dd><dt><h4>title</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Title of the notification.</dd>
</dl>

## OSPermissionState

<dl>
<dt><h4>hasPrompted</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>User was prompted.</dd><dt><h4>status</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Permissions Status</dd>
</dl>

## OSPermissionSubscriptionState

<dl>
<dt><h4>permissionStatus</h4><strong>Type: </strong><code>reference</code></dt>
<dd>Id assigned to the button.</dd><dt><h4>subscriptionStatus</h4><strong>Type: </strong><code>reference</code></dt>
<dd>Text show on the button to the user.</dd>
</dl>

## OSSubscriptionState

<dl>
<dt><h4>pushToken</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>subscribed</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>userId</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>userSubscriptionSetting</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd>
</dl>

