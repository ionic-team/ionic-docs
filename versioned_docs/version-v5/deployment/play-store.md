---
sidebar_label: Android Play Store
---

# Android Play Store Deployment

## Generating a release build of an app

To generate a release build for Android, run the following cli command:

```shell
$ ionic cordova build android --prod --release
```

This will generate a release build based on the settings in the `config.xml` in the `platforms/android/app/build/outputs/apk` directory of an app.
An Ionic app will have preset default values in this file but this can be changed to customize builds.

## Signing an APK

First, the unsigned APK must be signed. If a signing key has already been generated, skip these steps and use that one instead.
Generate a private key using the keytool command that comes with the Android SDK:

```shell
$ keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000
```

Once that command has been ran and its prompts have been answered a file called `my-release-key.keystore` will be created in the current directory.

:::caution
Save this file and keep it somewhere safe. If it is lost the Google Play Store will not accept updates for this app!
:::

To sign the unsigned APK, run the jarsigner tool which is also included in the Android SDK:

```shell
$ jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore HelloWorld-release-unsigned.apk alias_name
```

Finally, the zip align tool must be ran to optimize the APK.
The `zipalign` tool can be found in `/path/to/Android/sdk/build-tools/VERSION/zipalign`.
For example, on macOS with Android Studio installed, `zipalign` is in `~/Library/Android/sdk/build-tools/VERSION/zipalign`:

```shell
$ zipalign -v 4 HelloWorld-release-unsigned.apk HelloWorld.apk
```

This generates a final release binary called HelloWorld.apk that can be accepted into the Google Play Store.

## Submitting an app to the Google Play Store

Now that a release APK has been generated, a Play Store listing can be written and the APK can be uploaded.

To start, visit the [Google Play Store Developer Console](https://play.google.com/apps/publish) and create a new developer account.

:::note
Making a developer account with Google Play costs $25 USD.
:::

Once a developer account has been created, go ahead and click the `Create an Application`

![Create an App button](/img/publishing/newAppGPlay.png)

Be sure to fill out the description for the app along with providing screenshots and additional info.
When ready, upload the signed release APK that was generated and publish the app.

## Updating an app

As an app evolves, it will need to be updated with new features and fixes. An app can be updated by either submitting a new version to the Google Play Store, or by using a live update service like Appflow's Live Update feature. Using Live Updates, changes can be pushed directly to users from the Appflow dashboard, without submitting changes to the Play Store. Learn more about Live Updates <a href="https://ionic.io/docs/appflow/deploy/intro" target="_blank">here</a>.

:::note
In order for the Google Play Store to accept updated APKs, the config.xml file will need to be edited to increment the version value, then rebuild the app for release following the instructions above.
:::
