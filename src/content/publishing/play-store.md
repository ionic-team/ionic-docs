---
previousText: 'App Store'
previousUrl: 'docs/publishing/app-store'
nextText: 'Desktop Electron App'
nextUrl: '/docs/publishing/desktop-app'
---

# Android Play Store


## Generating a release build of an app

To generate a release build for Android, run the following cli command:

```shell
ionic cordova build --release android
```

This will generate a release build based on the settings in the `config.xml` in the `platforms/android/build/outputs/apk` directory of an app. An Ionic app will have preset default values in this file but this can be changed to customize builds.

## Signing an APK

First, the unsigned APK must be signed. If a signing key has already been generated, skip these steps and use that one instead.

Let’s generate a private key using the keytool command that comes with the the Android SDK:

```shell
keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000
```

Once that command has been ran and its prompts have been answered a file called `my-release-key.keystore` will be created in the current directory.

<blockquote>
  <p>Make sure to save this file somewhere safe, if it is lost the Google Play Store will not accept updates for this app!</p>
</blockquote>

To sign the unsigned APK, run the jarsigner tool which is also included in the Android SDK:

```shell
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore HelloWorld-release-unsigned.apk alias_name
```

This signs the apk. Finally, the zip align tool must be ran to optimize the APK. The zipalign tool can be found in `/path/to/Android/sdk/build-tools/VERSION/zipalign`. For example, on OS X with Android Studio installed, zipalign is in `~/Library/Android/sdk/build-tools/VERSION/zipalign`:

```shell
zipalign -v 4 HelloWorld-release-unsigned.apk HelloWorld.apk
```

This generates a final release binary called HelloWorld.apk and this can be released on the Google Play Store for all the world to enjoy!

## Submitting an app to the Google Play Store

Now that a release APK has been generated for the Google Play Store, a Play Store listing can be written and the APK can be uploaded.

To start, visit the [Google Play Store Developer Console](https://play.google.com/apps/publish) and create a new developer account.

<blockquote>
  <p>Making a developer account with Google Play costs 25 US Dollars</p>
</blockquote>

Once a developer account has been created, go ahead and click the `Create an Application` as shown in the screenshot below:

![Create an App button](/docs/assets/img/publishing/newAppGPlay.png)

The store listing (the APK will be uploaded later). Be sure to fill out the description for the app along with providing screenshots and additional info.

When ready, upload the signed release APK that was generated above and publish the app. Be patient and all that hard work should be live in the wild!

## Updating an app

As an app evolves, it will need to be updated with new features and fixes. An app can be updated by either submitting a new version to the Google Play Store, or by using a live update service like Ionic Deploy. Using Ionic Deploy, changes can be pushed directly to users from the Ionic Pro dashboard, without submitting changes to the Play Store. Learn more about Ionic Deploy <a href="https://ionicframework.com/pro/deploy" target="_blank">here</a>.

<blockquote>
  <p>
    In order for the Google Play Store to accept updated APKs, the config.xml file will need to be edited to increment the version value, then rebuild the app for release following the instructions above.
  </p>
</blockquote>
