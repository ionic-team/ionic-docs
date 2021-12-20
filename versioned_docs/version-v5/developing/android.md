---
sidebar_label: Developing for Android
---

# Android Development

This guide covers how to run and debug Ionic apps on Android emulators and devices using [Capacitor](../reference/glossary.md#capacitor) or [Cordova](../reference/glossary.md#cordova). Android apps can be developed on Windows, macOS, and Linux.

## Android Studio

[Android Studio](https://developer.android.com/studio/) is the IDE for creating native Android apps. It includes the [Android SDK](../reference/glossary.md#android-sdk), which
will need to be configured for use in the command line.

Android Studio is also used to [create Android virtual devices](android.md#creating-an-android-virtual-device), which are required for the Android emulator. Ionic apps can also be [launched to a device](android.md#set-up-an-android-device).

:::note
We don't recommend using Android Studio for _developing_ Ionic apps. Instead, it should only really be used to build and run your apps for the native Android platform and to manage the Android SDK and virtual devices.
:::

### Installing Android Studio

Download Android Studio from the <a href="https://developer.android.com/studio/" target="_blank">Android website</a>. More detailed installation instructions can be found in the <a href="https://developer.android.com/studio/install" target="_blank">User Guide</a>.

### Installing the Android SDK

Once installed, open Android Studio. The IDE should detect that the Android SDK needs to be installed. In the **SDK Components Setup** screen, finish installing the SDK. Keep note of the **Android SDK Location**.

![Android Studio SDK Setup](/img/installation/android-studio-sdk-setup.png)

By default, the latest stable SDK Platform is installed, which includes a collection of packages required to target that version of Android.

To install system images and other minor SDK platform packages, you may need to ensure **Show Package Details** is checked at the bottom of the SDK Manager.

![Android Studio SDK Manager](/img/installation/android-studio-sdk.png)

For future reference, the Android SDK can be managed with Android Studio in the **Configure** &raquo; **SDK Manager** menu of the Android Studio welcome screen or **Tools** &raquo; **SDK Manager** inside Android projects.

### Configuring Command Line Tools

The Android SDK ships with <a href="https://developer.android.com/studio/command-line/" target="_blank">useful command-line tools</a>. Before they can be used, some environment variables must be set. The following instructions are for macOS and Linux. For Windows, check the documentation on setting and persisting environment variables in terminal sessions.

In `~/.bashrc`, `~/.bash_profile`, or similar shell startup scripts, make the following modifications:

1. Set the `ANDROID_SDK_ROOT` environment variable. This path should be the **Android SDK Location** used in the previous section.

   ```shell
   $ export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
   ```

1. Add the Android SDK command-line directories to `PATH`. Each directory corresponds to the category of <a href="https://developer.android.com/studio/command-line/" target="_blank">command-line tool</a>.

   ```shell-session
   $ # avdmanager, sdkmanager
   $ export PATH=$PATH:$ANDROID_SDK_ROOT/tools/bin
   $ # adb, logcat
   $ export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools
   $ # emulator
   $ export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
   ```

:::note

For `apksigner` and `zipalign`, `$ANDROID_SDK_ROOT/build-tools&lt;version>` must
also be added to `PATH`.

:::

### Creating an Android Virtual Device

Android Virtual Devices (AVDs) are blueprints that the Android emulator uses to run the Android OS. The following documentation is a quick way to get the Android emulator set up. For more detailed instructions and information, see <a href="https://developer.android.com/studio/run/managing-avds" target="_blank">the Android documentation</a>.

AVDs are managed with the AVD Manager. In the Android Studio welcome screen, click **Configure** &raquo; **AVD Manager**. The AVD Manager can also be opened inside Android projects in the **Tools** &raquo; **AVD Manager** menu.

![AVD Setup](/img/installation/android-studio-avd-setup.png)

Click **Create Virtual Device** and select a suitable device definition. If unsure, choose **Pixel 2**. Then, select a suitable system image. If unsure, choose **Pie** (API 28) with Google Play services. See <a href="https://en.wikipedia.org/wiki/Android_version_history" target="_blank">Android version history</a> for information on Android versions.

Once the AVD is created, launch the AVD into the Android emulator. Keeping the emulator running is the best way to ensure detection while developing Ionic apps for Android.

<img
  style={{ maxWidth: '25rem', margin: '1rem auto' }}
  src={require('@site/static/img/installation/android-emulator-booting.png').default}
  alt="Android Emulator Booting"
/>

### Set up an Android Device

Actual Android hardware can also be used for Ionic app development. But first, the device must be set up for development. The following documentation is a quick way to set up Android devices for development. For more detailed instructions and information, see <a href="https://developer.android.com/studio/run/device" target="_blank">the Android documentation</a>.

1. Enable USB debugging on the device. Open **Settings**, navigate to **Developer options**, and enable **USB debugging**. The **Developer options** menu may need to be enabled first. See <a href="https://developer.android.com/studio/debug/dev-options" target="_blank">the Android documentation</a> for instructions.
1. Ensure the device has permission to connect to the computer. For macOS, no additional setup is required. For Windows, <a href="https://developer.android.com/studio/run/oem-usb" target="_blank">install the OEM USB drivers</a>.

Verify the connection works by connecting the device to the computer with a USB cable and using the following command:

```shell
$ adb devices
```

The device should be listed. See the full <a href="https://developer.android.com/studio/command-line/adb" target="_blank">`adb` documentation</a> for troubleshooting and detailed information.

## Cordova Setup

Additional setup is required for Cordova to support programmatic builds. This section is not necessary for Capacitor.

### Java

Native Android apps are compiled with the <a href="https://java.com/en/" target="_blank">Java</a> programming language. Download JDK8 from the <a href="https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html" target="_blank">download page</a>.

:::note
Unfortunately, Cordova is not compatible with the latest version of Java.
:::

### Gradle

<a href="https://gradle.org/" target="_blank">
  Gradle
</a> is the build tool used in Android apps and must be installed separately. See the <a
  href="https://gradle.org/install/"
  target="_blank"
>
  install page
</a> for details.

## Project Setup

Before apps can be deployed to Android simulators and devices, the native project must be configured.

1. **Generate the native project, if it does not already exist.**

   For Capacitor, run the following:

   ```shell
   $ ionic capacitor add android
   ```

   For Cordova, run the following:

   ```shell
   $ ionic cordova prepare android
   ```

2. **Set the [Package ID](../reference/glossary.md#package-id).**

   For Capacitor, open the `capacitor.config.json` file and modify the `appId` property.

   For Cordova, open the `config.xml` file and modify the `id` attribute of the root element, `<widget>`. See [the Cordova documentation](https://cordova.apache.org/docs/en/latest/config_ref/#widget) for more information.

## Running with Capacitor

Capacitor uses Android Studio to build and run apps to simulators and devices.

1. **Develop the Ionic app and sync it to the native project.**

   With each meaningful change, Ionic apps must be built into web assets before the change can appear on Android simulators and devices. The web assets then must be copied into the native project. Luckily, this process is made easy with a single Ionic CLI command.

   ```shell
   $ ionic capacitor copy android
   ```

2. **In Android Studio, click the Run button and then select the target simulator or device.**

![Android Studio Run Button Area](/img/running/android-studio-run-button-area.png)

### Live reload

To start a live-reload server run the following command.

```shell
$ ionic capacitor run android -l --host=YOUR_IP_ADDRESS
```

When running on a device make sure the device and your development machine are connected to the same network.

## Running with Cordova

The Ionic CLI can build, copy, and deploy Ionic apps to Android simulators and devices with a single command. It can also spin up a development server, like the one used in `ionic serve`, to provide [live-reload](../reference/glossary.md#livereload) functionality.

Run the following to start a long-running CLI process that boots up a live-reload server:

```shell
$ ionic cordova run android -l
```

Now, when changes are made to the app's source files, web assets are rebuilt and the changes are reflected on the simulator or device without having to deploy again.

## Debugging Android Apps

Once an app is running on an Android device or emulator, it can be debugged with Chrome DevTools.

### Using Chrome DevTools

Chrome has web developer tool support for Android simulators and devices. Go to `chrome://inspect` in Chrome while the simulator is running or a device is connected to the computer and **Inspect** the app that needs to be debugged.

:::note
Make sure your application is running on the device or simulator, or it will not show up in the list.
:::

![Android Chrome DevTools](/img/running/android-chrome-devtools.png)

### Viewing Native Logs

If running with Android Studio, native logs can be found in **Logcat**.

:::note
If the **Logcat** window is hidden, you can enable it in **View** &raquo; **Tool Windows** &raquo; **Logcat**.
:::

![Android Studio Logcat](/img/running/android-studio-logcat.png)

You can also access **Logcat** with [ADB](https://developer.android.com/studio/command-line/adb).

```shell
$ adb logcat
```
