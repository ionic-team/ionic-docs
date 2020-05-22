---
previousText: '添加移动版'
previousUrl: '/docs/angular/your-first app/5-adding-mobile'
nextText: '使用实时重载快速开发应用程序'
nextUrl: '/docs/angular/your-firstapp/7-live-reload'
---

# 部署到 iOS 和 Android

由于我们是在首次创建Capacitor时将其添加到项目中的，因此只有几步之遥，直到在我们的设备上使用Photo Gallery应用程序为止！ 请记住，您可以在这里找到此应用的完整源代码 [](https://github.com/ionic-team/photo-gallery-capacitor-ng)。

## Capacitor 设置

Capacitor是Ionic的官方运行时，它使得在本地平台如iOS、Android等安装网络应用变得容易。 如果您以前使用过Cordova，请考虑阅读更多 [差异的信息](https://capacitor.ionicframework.com/docs/cordova#differences-between-capacitor-and-cordova) 。

如果您仍在终端中运行 `ionic service` ，请取消它。 完成你的Ionic项目的新构建，修复它报告的错误：

```shell
$ ionic build
```

接下来，创建iOS和Android项目：

```shell
$ ionic cap add ios
$ ionic cap add android
```

项目根目录下的 android 和 ios 文件夹都已创建。 这些是完全独立的本地项目，应被视为你的Ionic应用程序的一部分(即：将其检入源代码管理，使用其本机工具进行编辑等)。

每次您执行构建(例如`ionic build`)来更新您的Web目录(默认值：`www`)时，都需要将这些更改复制到本地项目中：

```shell
$ ionic cap copy
```

注意：对代码的本机部分进行更新 (例如添加新插件) 后，请使用`sync`命令：

```shell
$ ionic cap sync
```

## iOS 部署

> 要构建一个 iOS 应用程序，您将需要一个 Mac 苹果电脑。

Capacitor iOS 应用程序是通过Xcode (Apple's iOS/Mac IDE) 配置和管理的，依赖关系由CocoaPod 管理。 在 iOS 设备上运行此应用程序之前，有几个步骤要完成。

首先，运行 Capacitor `open` 命令，打开Xcode中的原生iOS项目：

```shell
$ ionic cap open ios
```

In order for some native plugins to work, user permissions must be configured. In our photo gallery app, this includes the Camera plugin: iOS displays a modal dialog automatically after the first time that `Camera.getPhoto()` is called, prompting the user to allow the app to use the Camera. The permission that drives this is labeled “Privacy - Camera Usage.” To set it, the `Info.plist` file must be modified ([more details here](https://capacitor.ionicframework.com/docs/ios/configuration)). To access it, click "Info," then expand "Custom iOS Target Properties."

![Xcode Custom iOS Target Properties](/docs/assets/img/guides/first-app-cap-ng/xcode-info-plist.png)


Each setting in `Info.plist` has a low-level parameter name and a high-level name. By default, the property list editor shows the high-level names, but it's often useful to switch to showing the raw, low-level names. To do this, right-click anywhere in the property list editor and toggle "Raw Keys/Values."

Locate the `NSCameraUsageDescription` Key (it should exist already if you followed along with this tutorial) and set the Value to something that describes why the app needs to use the camera, such as "To Take Photos." The Value field is displayed to the app user when the permission prompt opens.

Next, click on `App` in the Project Navigator on the left-hand side, then within the `Signing & Capabilities` section, select your Development Team.

![Xcode - Selecting Development Team](/docs/assets/img/guides/first-app-cap-ng/xcode-signing.png)

With permissions in place and Development Team selected, we are ready to try out the app on a real device! Connect an iOS device to your Mac computer, select it (`App -> Matthew’s iPhone` for me) then click the "Build" button to build, install, and launch the app on your device:

![Xcode build button](/docs/assets/img/guides/first-app-cap-ng/xcode-build-button.png)

Upon tapping the Camera button on the Photo Gallery tab, the permission prompt will display. Tap OK, then take a picture with the Camera. Afterward, the photo shows in the app!

![iOS Camera permissions](/docs/assets/img/guides/first-app-cap-ng/ios-permissions-photo.png)

## Android Deployment

Capacitor Android apps are configured and managed through Android Studio. Before running this app on an Android device, there's a couple of steps to complete.

First, run the Capacitor `open` command, which opens the native Android project in Android Studio:

```shell
$ ionic cap open android
```

Similar to iOS, we must enable the correct permissions to use the Camera. Configure these in the `AndroidManifest.xml` file. Android Studio will likely open this file automatically, but in case it doesn't, locate it under `android/app/src/main/`.

![Android Manifest location](/docs/assets/img/guides/first-app-cap-ng/android-manifest.png)

Scroll to the `Permissions` section and ensure these entries are included:

```xml
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
```

Save the file. With permissions in place, we are ready to try out the app on a real device! Connect an Android device to your computer. Within Android Studio, click the "Run" button, select the attached Android device, then click OK to build, install, and launch the app on your device.

![Launching app on Android](/docs/assets/img/guides/first-app-cap-ng/android-device.png)

Once again, upon tapping the Camera button on the Photo Gallery tab, the permission prompt should be displayed. Tap OK, then take a picture with the Camera. Afterward, the photo should appear in the app.

![Android Camera permissions](/docs/assets/img/guides/first-app-cap-ng/android-permissions-photo.png)

Our Photo Gallery app has just been deployed to Android and iOS devices. 🎉

In the final portion of this tutorial, we’ll use the Ionic CLI’s Live Reload functionality to quickly implement photo deletion - thus completing our Photo Gallery feature.