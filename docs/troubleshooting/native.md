---
title: Native Errors
---

<head>
  <title>Native App Errors: How to Resolve Native Errors on Ionic Apps</title>
  <meta
    name="description"
    content="Review native app errors including code signing, Xcode build error 65, and clashing Google Play Services versions. Learn to resolve native errors on Ionic apps."
  />
</head>

## Code Signing errors

```shell
Code Signing Error: Failed to create provisioning profile. The app ID "com.csform.ionic.yellow" cannot be registered to your development team. Change your bundle identifier to a unique string to try again. Code Signing Error: No profiles for 'com.csform.ionic.yellow' were found: Xcode couldn't find any iOS App Development provisioning profiles matching 'com.csform.ionic.yellow'. Code Signing Error: Code signing is required for product type 'Application' in SDK 'iOS 11.1'
```

Running an app on an iOS device requires a provisioning profile. If a provisioning profile has not been created yet follow these directions:

1. <strong>Set the [Package ID](../reference/glossary.md#package-id).</strong>

   For Capacitor, open the `capacitor.config.json` file and modify the `appId` property.

   For Cordova, open the `config.xml` file and modify the `id` attribute of the root element, `<widget>`. See [the Cordova documentation](https://cordova.apache.org/docs/en/latest/config_ref/#widget) for more information.

2. <strong>
     Open the project in <b>Xcode</b>.
   </strong>

   For Capacitor, run the following to open the app in Xcode:

   ```shell
   $ ionic capacitor open ios
   ```

   For Cordova, open Xcode. Use **File** &raquo; **Open** and locate the app. Open the app's `platforms/ios` directory.

3. <strong>
     In <b>Project navigator</b>, select the project root to open the project editor. Under the **Identity** section,
     verify that the Package ID that was set matches the Bundle Identifier.
   </strong>

   ![Xcode Identity Setup](/img/running/ios-xcode-identity-setup.png)

4. <strong>
     In the same project editor, under the <b>Signing</b> section, ensure <b>Automatically manage signing</b> is
     enabled.
   </strong> Then, select a Development Team. Given a Development Team, Xcode will attempt to automatically prepare provisioning
   and signing.

   ![Xcode Signing Setup](/img/running/ios-xcode-signing-setup.png)

## Xcode build error 65

```shell
Error: Error code 65 for command: xcodebuild with args: -xcconfig,/Users/ionitron/projects/my-project/platforms/ios/cordova/build-debug.xcconfig,-workspace,SC project.xcworkspace,-scheme,SC project,-configuration,Debug,-sdk,iphonesimulator,-destination,platform=iOS Simulator,name=iPhone X,build,CONFIGURATION_BUILD_DIR=/Users/ionitron/projects/my-project/platforms/ios/build/emulator,SHARED_PRECOMPS_DIR=/Users/ionitron/projects/my-project/platforms/ios/build/sharedpch
```

This error is an error code from Xcode that can be caused by provisioning issues or outdated cordova dependencies. To fix this error first make sure a provisioning profile has been generated using the above instructions and then try to [run the app from Xcode](../developing/ios.md#running-with-xcode).

If this does not fix the error then run the following commands:

```shell
rm -rf node_modules
rm -rf platform
npm i
ionic cordova platform add ios
ionic cordova prepare ios
ionic cordova build ios --prod
```

Once these commands have been ran a fresh build can be done.

## Clashing Google Play Services versions

```shell
Error: more than one library with package name com.google.android.gms
```

This error is caused by two separate plugins trying to use different versions of the `Google Play Services`. To fix this issue make sure you are running `cordova` version `7.1.0` or higher and `cordova-android` `6.3.0` or higher. To install latest `cordova` run:

```shell
$ npm install cordova@latest
```

and to update `cordova-android` run:

```shell
$ cordova platform update android
```

Plugins that depend on `Google Play Services` can now be updated to use the same version. For example, if `pluginA` uses version 11.0 and `pluginB` uses version 15.0 they can be updated to use the same version with the following snippet in the `config.xml` file:

```xml
<plugin name="pluginA" spec="npm">
  <variable name="PLAY_SERVICES_VERSION" value="15.0.0"/>
</plugin>
<plugin name="pluginB" spec="npm">
  <variable name="PLAY_SERVICES_VERSION" value="15.0.0" />
</plugin>
```
