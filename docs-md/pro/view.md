### Coming from Legacy Ionic View?

Check out the [migration guide](/docs/pro/migration/view.html).

# Ionic View

Ionic View makes it easy to distribute versions of your app to beta testers, clients, co-workers, and more, without dealing with the complicated device provisioning and configuration required with traditional beta testing services.  

You can install the latest version of Ionic View from the iOS or Android app store:
<div id="badges" style="text-align:center">
  <a href="https://itunes.apple.com/us/app/ionic-view-test-share-ionic-apps/id1271789931?ls=1&mt=8">
    <img style="width: 148px" src="/img/pro/appstore.png" id="appstore-image">
  </a>

  <a href="https://play.google.com/store/apps/details?id=com.ionicframework.view">
    <img style="width: 180px" alt="Get it on Google Play" src="/img/pro/playstore.png" id="playstore-image">
  </a>
</div>  
<br>

If you are a developer, you can log in from the settings menu to see the apps from your Ionic Pro dashboard.

## Testing Apps

<h3 style="margin-top: 0" id="from-an-email-invite">By email invite</h3>
If you received an email inviting you to test an app, simply clicking on the link in the email will open View with the app loaded (or direct you to the app store if you haven't downloaded View yet).

### By invitation code
If for some reason the link doesn't work, you can also enter your invite code that should have been included in the email.

### By app ID (public Channels only)
If you know an app's ID, you can enter its ID to view any Channels the app owner has made public.

<div style="text-align: center">
  <img style="width: 207px" src="/img/pro/view-code.png">
</div>

### Testing apps from your Ionic Pro dashboard
If you are a developer with an Ionic Pro account, you can add the account from the settings tab.  Once you have added
the account you can view and test any app from your Ionic Pro dashboard.

## Submitting Feedback
For apps you were invited to, you can submit feedback by shaking the device while testing the app and selecting "Send Feedback".

<div style="text-align: center">
  <img style="width: 207px; margin-right: 20px" src="/img/pro/view-shake.png">
  <img style="width: 207px" src="/img/pro/view-feedback.png">
</div>

The app owner will be able to view submitted feedback in the Ionic Pro dashboard for that app. See the [Beta Testing docs](/docs/pro/beta-testing.html#viewing-feedback) for more details.

## Exiting Apps
To exit an app you are testing, just shake the device and select "Exit".  You can also 3-finger swipe down.

<div style="text-align: center">
  <img style="width: 207px" src="/img/pro/view-shake.png">
</div>

## Plugin Support
Ionic View currently supports the following plugins:

<pre>
card.io.cordova.mobilesdk 2.1.0 "CardIO"
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
cordova-plugin-app-event 1.2.0 "Application Events"
cordova-plugin-apprate 1.3.0 "AppRate"
cordova-plugin-battery-status 1.2.4 "Battery"
cordova-plugin-ble-central 1.1.4 "BLE"
cordova-plugin-bluetooth-serial 0.4.7 "Bluetooth Serial"
cordova-plugin-brightness 0.1.5 "Brightness"
cordova-plugin-calendar 4.6.0 "Calendar"
cordova-plugin-camera 2.4.1 "Camera"
cordova-plugin-compat 1.1.0 "Compat"
cordova-plugin-console 1.0.7 "Console"
cordova-plugin-contacts 2.3.1 "Contacts"
cordova-plugin-datepicker 0.9.3 "DatePicker"
cordova-plugin-device 1.1.6 "Device"
cordova-plugin-device-motion 1.2.5 "Device Motion"
cordova-plugin-device-orientation 1.0.7 "Device Orientation"
cordova-plugin-dialogs 1.3.3 "Notification"
cordova-plugin-email-composer 0.8.7 "EmailComposer"
cordova-plugin-geolocation 2.4.3 "Geolocation"
cordova-plugin-globalization 1.0.7 "Globalization"
cordova-plugin-google-analytics 1.8.3 "Google Universal Analytics Plugin"
cordova-plugin-health 1.0.0 "Cordova Health"
cordova-plugin-image-picker 1.1.1 "ImagePicker"
cordova-plugin-inappbrowser 1.6.1 "InAppBrowser"
cordova-plugin-insomnia 4.3.0 "Insomnia (prevent screen sleep)"
cordova-plugin-intercom 3.2.2 "Intercom"
cordova-plugin-ionic 1.1.6 "IonicCordova"
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
cordova-plugin-statusbar 2.2.3 "StatusBar"
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
phonegap-nfc 0.6.6 "NFC"
phonegap-plugin-barcodescanner 6.0.7 "BarcodeScanner"
phonegap-plugin-mobile-accessibility 1.0.5-dev "Mobile Accessibility"
uk.co.workingedge.phonegap.plugin.launchnavigator 4.0.4 "Launch Navigator"
</pre>
