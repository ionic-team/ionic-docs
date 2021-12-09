---
sidebar_label: Deploying Mobile
---

# Deploying to iOS and Android

Since we added Capacitor to our project when it was first created, there’s only a handful of steps remaining until the Photo Gallery app is on our device! Remember, you can find the complete source code for this app [here](https://github.com/ionic-team/photo-gallery-capacitor-ng).

## Capacitor Setup

Capacitor is Ionic’s official app runtime that makes it easy to deploy web apps to native platforms like iOS, Android, and more. If you’ve used Cordova in the past, consider reading more about the differences [here](https://capacitor.ionicframework.com/docs/cordova#differences-between-capacitor-and-cordova).

If you’re still running `ionic serve` in the terminal, cancel it. Complete a fresh build of your Ionic project, fixing any errors that it reports:

```shell
$ ionic build
```

Next, create both the iOS and Android projects:

```shell
$ ionic cap add ios
$ ionic cap add android
```

Both android and ios folders at the root of the project are created. These are entirely standalone native projects that should be considered part of your Ionic app (i.e., check them into source control, edit them using their native tooling, etc.).

Every time you perform a build (e.g. `ionic build`) that updates your web directory (default: `www`), you'll need to copy those changes into your native projects:

```shell
$ ionic cap copy
```

Note: After making updates to the native portion of the code (such as adding a new plugin), use the `sync` command:

```shell
$ ionic cap sync
```

## iOS Deployment

:::note
To build an iOS app, you’ll need a Mac computer.
:::

Capacitor iOS apps are configured and managed through Xcode (Apple’s iOS/Mac IDE), with dependencies managed by [CocoaPods](https://cocoapods.org/). Before running this app on an iOS device, there's a couple of steps to complete.

First, run the Capacitor `open` command, which opens the native iOS project in Xcode:

```shell
$ ionic cap open ios
```

In order for some native plugins to work, user permissions must be configured. In our photo gallery app, this includes the Camera plugin: iOS displays a modal dialog automatically after the first time that `Camera.getPhoto()` is called, prompting the user to allow the app to use the Camera. The permission that drives this is labeled “Privacy - Camera Usage.” To set it, the `Info.plist` file must be modified ([more details here](https://capacitor.ionicframework.com/docs/ios/configuration)). To access it, click "Info," then expand "Custom iOS Target Properties."

![Xcode Custom iOS Target Properties](/img/guides/first-app-cap-ng/xcode-info-plist.png)

Each setting in `Info.plist` has a low-level parameter name and a high-level name. By default, the property list editor shows the high-level names, but it's often useful to switch to showing the raw, low-level names. To do this, right-click anywhere in the property list editor and toggle "Raw Keys/Values."

Add the `NSCameraUsageDescription` Key and set the Value to something that describes why the app needs to use the camera, such as "To Take Photos." The Value field is displayed to the app user when the permission prompt opens.

Follow the same process to add the other two Keys required of the Camera plugin: `NSPhotoLibraryAddUsageDescription` and `NSPhotoLibraryUsageDescription`.

Next, click on `App` in the Project Navigator on the left-hand side, then within the `Signing & Capabilities` section, select your Development Team.

![Xcode - Selecting Development Team](/img/guides/first-app-cap-ng/xcode-signing.png)

With permissions in place and Development Team selected, we are ready to try out the app on a real device! Connect an iOS device to your Mac computer, select it (`App -> Matthew’s iPhone` for me) then click the "Build" button to build, install, and launch the app on your device:

![Xcode build button](/img/guides/first-app-cap-ng/xcode-build-button.png)

Upon tapping the Camera button on the Photo Gallery tab, the permission prompt will display. Tap OK, then take a picture with the Camera. Afterward, the photo shows in the app!

![iOS Camera permissions](/img/guides/first-app-cap-ng/ios-permissions-photo.png)

## Android Deployment

Capacitor Android apps are configured and managed through Android Studio. Before running this app on an Android device, there's a couple of steps to complete.

First, run the Capacitor `open` command, which opens the native Android project in Android Studio:

```shell
$ ionic cap open android
```

Similar to iOS, we must enable the correct permissions to use the Camera. Configure these in the `AndroidManifest.xml` file. Android Studio will likely open this file automatically, but in case it doesn't, locate it under `android/app/src/main/`.

![Android Manifest location](/img/guides/first-app-cap-ng/android-manifest.png)

Scroll to the `Permissions` section and ensure these entries are included:

```xml
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
```

Save the file. With permissions in place, we are ready to try out the app on a real device! Connect an Android device to your computer. Within Android Studio, click the "Run" button, select the attached Android device, then click OK to build, install, and launch the app on your device.

![Launching app on Android](/img/guides/first-app-cap-ng/android-device.png)

Once again, upon tapping the Camera button on the Photo Gallery tab, the permission prompt should be displayed. Tap OK, then take a picture with the Camera. Afterward, the photo should appear in the app.

![Android Camera permissions](/img/guides/first-app-cap-ng/android-permissions-photo.png)

Our Photo Gallery app has just been deployed to Android and iOS devices. 🎉

In the final portion of this tutorial, we’ll use the Ionic CLI’s Live Reload functionality to quickly implement photo deletion - thus completing our Photo Gallery feature.
