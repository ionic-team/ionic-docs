---
previousText: 'Cookbook'
previousUrl: '/docs/appflow/cookbook/private_npm_modules'
---

# Ionic DevApp

The Ionic DevApp is a free app that makes it easy to run your Ionic app directly on your iOS or Android device.

Skip dealing with frustrating Native SDK installation issues, just run `ionic serve --devapp`, open the DevApp, connect to the same network, and the app will automatically load and run your app.

The DevApp comes with many native plugins built right in, so you don't need to worry about installing plugins.

## Download the DevApp

The DevApp is available on iOS and Android.

Enter your phone number below to text yourself an install link, or find the app on your app store of choice:

<sms-form></sms-form>

<div style="display:flex;">
  <a href="https://itunes.apple.com/us/app/ionic-devapp/id1233447133?ls=1&amp;mt=8" target="_blank">
    <img style="width: 160px" src="/docs/assets/img/appstore.png" id="appstore-image">
  </a>
  <a href="https://play.google.com/store/apps/details?id=io.ionic.devapp&amp;hl=en" target="_blank">
    <img style="width: 160px" alt="Get it on Google Play" src="/docs/assets/img/playstore.png" id="playstore-image">
  </a>
</div>

## Using DevApp

The DevApp finds `ionic serve` instances running on your local Wi-Fi network.

First, ensure you are running the latest release of the Ionic CLI. Run `npm install -g ionic`.

Once the latest CLI is installed, run `ionic serve --devapp` in the app of your choice on your computer and let it finish building. Next, open your iOS or Android device and connect to *the same network* as your computer (through Wi-Fi). Open the DevApp, and you should see your local app show up in the list.

> Note: Cordova must be installed in your project before DevApp can be used, so you may need to run `ionic cordova prepare [platform]` before running `ionic serve --devapp`.

## CORS

If your web requests are failing, you may be running into issues with [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS). Unfortunately, CORS errors only show in the console of your browser, so they won't appear as a runtime error modal or in the logs printed to your `ionic serve` instance.

There are a few things you can do to resolve the issue.

### Set the appropriate headers

If you control the server responding to the failing requests, you can set the appropriate `Access-Control-Allow-Origin` header on the server. The Origin of your request is the IP that your app is served from, for example `192.168.1.1:8100`. You can also set the Origin as `*` (wildcard), but be aware that requests from any origin will be able to see responses from your server. Wildcard is a common setting for any API, or any other endpoint that is expected to be accessed from various origins.

### Use the Advanced HTTP plugin

You can use the [Advanced HTTP plugin](https://ionicframework.com/docs/native/http/) to make requests. The plugin receives responses natively and passes the response back to JavaScript.

## Troubleshooting

If you don't see your app in the list, try these things to resolve it:

1. First, make sure your are on the same network as the app. Double check your Wi-Fi connection settings.
2. Try force-quitting the DevApp and restarting it
3. Try restarting `ionic serve --devapp` on your computer.

If those things still didn't resolve the issue, make sure you don't have any custom network settings that could cause the app to fail to discover the serve instance.

## Reporting issues and feedback

If the above steps don't work, or you want to share feedback, please post in the [DevApp Feedback Megathread](https://forum.ionicframework.com/t/ionic-devapp-feedback-mega-thread/109842) on the Ionic forum. Please avoid contacting support for this first release of the DevApp as we'd like direct feedback and would like to aggregate it to help others.

We cannot guarantee support on this post but we will monitor it and use it to make DevApp better.

## Native Cordova Plugin Support

Ionic DevApp currently supports the following plugins:

<pre>card.io.cordova.mobilesdk 2.1.0 "CardIO"
com-intel-security-cordova-plugin 2.0.3 "APP Security API"
com.darktalker.cordova.screenshot 0.1.5 "Screenshot"
com.paypal.cordova.mobilesdk 3.5.0 "PayPalMobile"
cordova-admob-sdk 0.8.0 "AdMob SDK"
cordova-base64-to-gallery 4.1.2 "base64ToGallery"
cordova-instagram-plugin 0.5.5 "Instagram"
cordova-launch-review 2.0.0 "Launch Review"
cordova-plugin-3dtouch 1.3.5 "3D Touch"
cordova-plugin-actionsheet 2.3.3 "ActionSheet"
cordova-plugin-add-swift-support 1.6.2 "AddSwiftSupport"
cordova-plugin-admob-free 0.10.0 "Cordova AdMob Plugin"
cordova-plugin-advanced-http 1.8.1 "Advanced HTTP plugin"
cordova-plugin-app-event 1.2.0 "Application Events"
cordova-plugin-apprate 1.3.0 "AppRate"
cordova-plugin-battery-status 1.2.4 "Battery"
cordova-plugin-ble-central 1.1.4 "BLE"
cordova-plugin-bluetooth-serial 0.4.7 "Bluetooth Serial"
cordova-plugin-brightness 0.1.5 "Brightness"
cordova-plugin-calendar 4.6.0 "Calendar"
cordova-plugin-camera 2.4.1 "Camera"
cordova-plugin-compat 1.1.0 "Compat"
cordova-plugin-contacts 2.3.1 "Contacts"
cordova-plugin-datepicker 0.9.3 "DatePicker"
cordova-plugin-device 1.1.6 "Device"
cordova-plugin-device-motion 1.2.5 "Device Motion"
cordova-plugin-device-orientation 1.0.7 "Device Orientation"
cordova-plugin-dialogs 1.3.3 "Notification"
cordova-plugin-email-composer 0.8.7 "EmailComposer"
cordova-plugin-geolocation 2.4.3 "Geolocation"
cordova-plugin-globalization 1.0.7 "Globalization"
cordova-plugin-health 1.0.0 "Cordova Health"
cordova-plugin-image-picker 1.1.1 "ImagePicker"
cordova-plugin-inappbrowser 1.6.1 "InAppBrowser"
cordova-plugin-insomnia 4.3.0 "Insomnia (prevent screen sleep)"
cordova-plugin-ionic 1.1.8 "IonicCordova"
cordova-plugin-ios-keychain 3.0.1 "KeyChain Plugin for Cordova iOS"
cordova-plugin-media 3.0.1 "Media"
cordova-plugin-mixpanel 3.1.0 "Mixpanel"
cordova-plugin-music-controls 2.0.0 "MusicControls"
cordova-plugin-nativeaudio 3.0.9 "Cordova Native Audio"
cordova-plugin-nativestorage 2.2.2 "NativeStorage"
cordova-plugin-network-information 1.3.3 "Network Information"
cordova-plugin-request-location-accuracy 2.2.1 "Request Location Accuracy"
cordova-plugin-safariviewcontroller 1.4.7 "SafariViewController"
cordova-plugin-screen-orientation 2.0.1 "Screen Orientation"
cordova-plugin-secure-storage 2.6.8 "SecureStorage"
cordova-plugin-shake 0.6.0 "Shake Gesture Detection"
cordova-plugin-sim 1.3.3 "SIM"
cordova-plugin-splashscreen 4.0.3 "Splashscreen"
cordova-plugin-statusbar 2.2.4-dev "StatusBar"
cordova-plugin-stripe 1.5.3 "cordova-plugin-stripe"
cordova-plugin-taptic-engine 2.1.0 "Taptic Engine"
cordova-plugin-themeablebrowser 0.2.17 "ThemeableBrowser"
cordova-plugin-touch-id 3.2.0 "Touch ID"
cordova-plugin-tts 0.2.3 "TTS"
cordova-plugin-vibration 2.1.5 "Vibration"
cordova-plugin-whitelist 1.3.2 "Whitelist"
cordova-plugin-x-socialsharing 5.1.8 "SocialSharing"
cordova-plugin-x-toast 2.6.0 "Toast"
cordova-plugin-zip 3.1.0 "cordova-plugin-zip"
cordova-promise-polyfill 0.0.2 "cordova-promise-polyfill"
cordova-sms-plugin 0.1.11 "Cordova SMS Plugin"
cordova-sqlite-storage 2.0.4 "Cordova sqlite storage plugin"
cordova-universal-clipboard 0.1.0 "Clipboard"
de.appplant.cordova.plugin.local-notification 0.8.5 "LocalNotification"
de.appplant.cordova.plugin.printer 0.7.1 "Printer"
ionic-plugin-keyboard 2.2.1 "Keyboard"
phonegap-plugin-barcodescanner 6.0.7 "BarcodeScanner"
phonegap-plugin-mobile-accessibility 1.0.5-dev "Mobile Accessibility"
uk.co.workingedge.phonegap.plugin.launchnavigator 4.0.4 "Launch Navigator"
</pre>