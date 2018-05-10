---
previousText: 'App Store'
previousUrl: 'docs/publishing/app-store'
nextText: 'Publishing a Progressive Web App'
nextUrl: '/docs/publishing/progressive-web-app'
---

# Android Play Store


## Generating a release build of our app

Before we deploy, we should take care to adjust plugins needed during development that should not be in production mode. For example, we probably don’t want the debug console plugin enabled, so we should remove it before generating the release builds:

`ionic cordova plugin rm cordova-plugin-console`

Now we are ready to generate a release build for Android, lets run the following cli command:

`ionic cordova build --release android`

This will generate a release build based on the settings in your `config.xml`. Your Ionic app will have preset default values in this file, but if you need to customize how your app is built, you can edit this file to fit your preferences. 

## Signing our APK

We can now find our unsigned APK file in the `platforms/android/build/outputs/apk` directory of our app. First, we need to sign the unsigned APK. If you already have a signing key, skip these steps and use that one instead.


Let’s generate our private key using the keytool command that comes with the the Android SDK:

`keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000`

Once you have ran that command and answered the prompts you should have a file called `my-release-key.keystore` created in the current directory.

<blockquote>
  <p>Make sure to save this file somewhere safe, if you lose it you won’t be able to submit updates to your app!</p>
</blockquote>

To sign the unsigned APK, run the jarsigner tool which is also included in the Android SDK:

`jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore HelloWorld-release-unsigned.apk alias_name`

This signs the apk. Finally, we need to run the zip align tool to optimize the APK. The zipalign tool can be found in /path/to/Android/sdk/build-tools/VERSION/zipalign. For example, on OS X with Android Studio installed, zipalign is in ~/Library/Android/sdk/build-tools/VERSION/zipalign:

`zipalign -v 4 HelloWorld-release-unsigned.apk HelloWorld.apk`

Now we have our final release binary called HelloWorld.apk and we can release this on the Google Play Store for all the world to enjoy!

## Submitting our app to the Google Play Store

Now that we have our release APK ready for the Google Play Store, we can create a Play Store listing and upload our APK.

To start, you’ll need to visit the [Google Play Store Developer Console](https://play.google.com/apps/publish) and create a new developer account.

<blockquote>
  <p>Making a developer account with Google Play costs 25 US Dollars</p>
</blockquote>

Once you have a developer account, you can go ahead and click `Create an Application` as shown in the screenshot below:

![Create an App button](../assets/img/publishing/newAppGPlay.png)

We then need to edit our store listing (We will upload an APK later). You’ll want to fill out the description for the app along with providing screenshots and additional info.

When you are ready, upload the signed release APK we generated above and publish your app. Be patient and your hard work should be live in the wild!

## Updating your app

As you develop your app, you’ll want to update it periodically.

In order for the Google Play Store to accept updated APKs, you’ll need to edit the config.xml file to increment the version value, then rebuild the app for release following the instructions above.
