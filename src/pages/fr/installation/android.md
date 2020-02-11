---
previousText: 'iOS Setup'
previousUrl: '/docs/installation/ios'
nextText: 'Starting an App'
nextUrl: '/docs/building/starting'
contributors:
  - rtpHarry
---

# Android Setup

To target the Android platform, some additional environment setup is required. Android apps can be created on Windows, macOS, and Linux.

## Android Studio

<a href="https://developer.android.com/studio/" target="_blank">Android Studio</a> is the IDE for creating native Android apps. It includes the <a href="/docs/faq/glossary#android-sdk">Android SDK</a>, which will need to be configured for use in the command line.

Android Studio is also used to [create Android virtual devices](/docs/installation/android#creating-an-android-virtual-device), which are required for the Android emulator. Ionic apps can also be [launched to a device](/docs/installation/android#set-up-an-android-device).

> We don't recommend using Android Studio for *developing* Ionic apps. Instead, it should only really be used to build and run your apps for the native Android platform and to manage the Android SDK and virtual devices.

### Installing Android Studio

Download Android Studio from the <a href="https://developer.android.com/studio/" target="_blank">Android website</a>. More detailed installation instructions can be found in the <a href="https://developer.android.com/studio/install" target="_blank">User Guide</a>.

### Installing the Android SDK

Once installed, open Android Studio. The IDE should detect that the Android SDK needs to be installed. In the **SDK Components Setup** screen, finish installing the SDK. Keep note of the **Android SDK Location**.

![Android Studio SDK Setup](/docs/assets/img/installation/android-studio-sdk-setup.png)

By default, the latest stable SDK Platform is installed, which includes a collection of packages required to target that version of Android.

To install system images and other minor SDK platform packages, you may need to ensure **Show Package Details** is checked at the bottom of the SDK Manager. ![Android Studio SDK Manager](/docs/assets/img/installation/android-studio-sdk.png)

For future reference, the Android SDK can be managed with Android Studio in the **Configure** &raquo; **SDK Manager** menu of the Android Studio welcome screen or **Tools** &raquo; **SDK Manager** inside Android projects.

### Configuring Command Line Tools

The Android SDK ships with <a href="https://developer.android.com/studio/command-line/" target="_blank">useful command-line tools</a>. Before they can be used, some environment variables must be set. The following instructions are for macOS and Linux. For Windows, check the documentation on setting and persisting environment variables in terminal sessions.

In `~/.bashrc`, `~/.bash_profile`, or similar shell startup scripts, make the following modifications:

1. Set the `ANDROID_SDK_ROOT` environment variable. This path should be the **Android SDK Location** used in the previous section.

   ```shell
   $ export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
   ```

1. Add the Android SDK command-line directories to `PATH`. Each directory corresponds to the category of <a href="https://developer.android.com/studio/command-line/" target="_blank">command-line tool</a>.
    
    <command-line nobuttons> <command-output># avdmanager, sdkmanager</command-output> <command-prompt>export PATH=$PATH:$ANDROID_SDK_ROOT/tools/bin</command-prompt>   
    <command-output># adb, logcat</command-output> <command-prompt>export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools</command-prompt>   
    <command-output># emulator</command-output> <command-prompt>export PATH=$PATH:$ANDROID_SDK_ROOT/emulator</command-prompt> </command-line>

> For `apksigner` and `zipalign`, `$ANDROID_SDK_ROOT/build-tools<version>` must also be added to `PATH`.

### Creating an Android Virtual Device

Android Virtual Devices (AVDs) are blueprints that the Android emulator uses to run the Android OS. The following documentation is a quick way to get the Android emulator set up. For more detailed instructions and information, see <a href="https://developer.android.com/studio/run/managing-avds" target="_blank">the Android documentation</a>.

AVDs are managed with the AVD Manager. In the Android Studio welcome screen, click **Configure** &raquo; **AVD Manager**. The AVD Manager can also be opened inside Android projects in the **Tools** &raquo; **AVD Manager** menu.

![AVD Setup](/docs/assets/img/installation/android-studio-avd-setup.png)

Click **Create Virtual Device** and select a suitable device definition. If unsure, choose **Pixel 2**. Then, select a suitable system image. If unsure, choose **Pie** (API 28) with Google Play services. See <a href="https://en.wikipedia.org/wiki/Android_version_history" target="_blank">Android version history</a> for information on Android versions.

Once the AVD is created, launch the AVD into the Android emulator. Keeping the emulator running is the best way to ensure detection while developing Ionic apps for Android.

<figure class="device">
  <img alt="Android Emulator Booting" src="/docs/assets/img/installation/android-emulator-booting.png" />
</figure>

### Set up an Android Device

Actual Android hardware can also be used for Ionic app development. But first, the device must be set up for development. The following documentation is a quick way to set up Android devices for development. For more detailed instructions and information, see <a href="https://developer.android.com/studio/run/device" target="_blank">the Android documentation</a>.

1. Enable USB debugging on the device. Open **Settings**, navigate to **Developer options**, and enable **USB debugging**. The **Developer options** menu may need to be enabled first. See <a href="https://developer.android.com/studio/debug/dev-options" target="_blank">the Android documentation</a> for instructions.
2. Ensure the device has permission to connect to the computer. For macOS, no additional setup is required. For Windows, <a href="https://developer.android.com/studio/run/oem-usb" target="_blank">install the OEM USB drivers</a>.

Verify the connection works by connecting the device to the computer with a USB cable and using the following command:

```shell
$ adb devices
```

The device should be listed. See the full <a href="https://developer.android.com/studio/command-line/adb" target="_blank"><code>adb</code> documentation</a> for troubleshooting and detailed information.

## Cordova Setup

Additional setup is required for Cordova to support programmatic builds. This section is not necessary for Capacitor.

### Java

Native Android apps are compiled with the <a href="https://java.com/en/" target="_blank">Java</a> programming language. Download JDK8 from the <a href="https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html" target="_blank">download page</a>.

> Unfortunately, Cordova is not compatible with the latest version of Java.

### Gradle

<a href="https://gradle.org/" target="_blank">Gradle</a> is the build tool used in Android apps and must be installed separately. See the <a href="https://gradle.org/install/" target="_blank">install page</a> for details.