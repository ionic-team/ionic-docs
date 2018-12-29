---
previousText: 'iOS Setup'
previousUrl: '/docs/installation/ios'
nextText: 'Starting an App '
nextUrl: '/docs/building/starting'
---

# Android Setup

<p class="intro" markdown="1">
To target the Android platform, some additional environment setup is required. Android apps can be created on Windows, macOS, and Linux.
</p>

## Java

Native Android apps are compiled with the <a href="https://java.com/en/" target="_blank">Java</a> programming language. Download JDK8 from the <a href="http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html" target="_blank">download page</a>.

<blockquote>
  <p>Java 10 is still a bit too new and doesn't work well with Cordova. We recommend JDK8.</p>
</blockquote>

## Gradle

<a href="https://gradle.org/" target="_blank">Gradle</a> is the build tool used in Android apps and can be installed separately. See the <a href="https://gradle.org/install/" target="_blank">install page</a> for details.

## Android Studio

<a href="https://developer.android.com/studio/" target="_blank">Android Studio</a> is the IDE for creating native Android apps. It includes the [Android SDK](/docs/faq/glossary#android-sdk), which will need to be configured for use in the command line.

Android Studio is also used to [create Android virtual devices](/docs/installation/android#creating-an-android-virtual-device), which are required for the Android emulator. Ionic apps can also be [launched to a device](/docs/installation/android#set-up-an-android-device).

### Installing Android Studio

Download Android Studio from the <a href="https://developer.android.com/studio/" target="_blank">Android website<a>. More detailed installation instructions can be found in the <a href="https://developer.android.com/studio/install" target="_blank">User Guide</a>.

### Installing the Android SDK

Once installed, open Android Studio. The IDE should detect that the Android SDK needs to be installed. In the **SDK Components Setup** screen, finish installing the SDK. Keep note of the **Android SDK Location**.

![Android Studio SDK Setup](/docs/assets/img/installation/android-studio-sdk-setup.png)

After the Android SDK is installed, Android Studio can be closed.

For future reference, the Android SDK can be managed with Android Studio in the **Configure** &raquo; **SDK Manager** menu.

### Configuring Command Line Tools

The Android SDK ships with <a href="https://developer.android.com/studio/command-line/" target="_blank">useful command-line tools</a>. Before they can be used, some environment variables must be set. The following instructions are for macOS and Linux. For Windows, check the documentation on setting and persisting environment variables in terminal sessions.

In `~/.bashrc`, `~/.bash_profile`, or similar shell startup scripts, make the following modifications:

1. Set the `ANDROID_SDK_ROOT` environment variable. This path should be the **Android SDK Location** used in the previous section.

   ```shell
   $ export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
   ```

1. Add the Android SDK command-line directories to `PATH`. Each directory corresponds to the category of <a href="https://developer.android.com/studio/command-line/" target="_blank">command-line tool</a>.

   <command-line nobuttons>
      <command-output># avdmanager, sdkmanager</command-output>
      <command-prompt>export PATH=$PATH:$ANDROID_SDK_ROOT/tools/bin</command-prompt>
      <br />
      <command-output># adb, logcat</command-output>
      <command-prompt>export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools</command-prompt>
      <br />
      <command-output># emulator</command-output>
      <command-prompt>export PATH=$PATH:$ANDROID_SDK_ROOT/emulator</command-prompt>
   </command-line>

   <blockquote>
     <p>For `apksigner` and `zipalign`, `$ANDROID_SDK_ROOT/build-tools/<version>` must also be added to `PATH`.</p>
   </blockquote>

### Creating an Android Virtual Device

Android Virtual Devices (AVDs) are a blueprint that the Android emulator uses to run Android OS. The following documentation is a quick way to get the Android emulator set up. For more detailed instructions and information, see <a href="https://developer.android.com/studio/run/managing-avds" target="_blank">the Android documentation</a>.

AVDs are managed with the AVD Manager. The AVD Manager must be accessed inside an Android project in the **Tools** &raquo; **AVD Manager** menu. The **Tools** menu may not be accessible in the main screen. Create an Android project to access the full menu.

![AVD Setup](/docs/assets/img/installation/android-studio-avd-setup.png)

Click **Create Virtual Device** and select a suitable device definition. If unsure, choose **Pixel 2 XL**. Then, select a suitable system image. If unsure, choose the latest version. See <a href="https://en.wikipedia.org/wiki/Android_version_history" target="_blank">Android version history</a> for information on Android versions.

Once the AVD is created, launch the AVD into the Android emulator. Keeping the emulator running is the best way to ensure detection while developing Ionic apps for Android.

<figure class="center" style="width: 300px">
    ![Android Emulator Booting](/docs/assets/img/installation/android-emulator-booting.png)
</figure>

### Set up an Android Device

Actual Android hardware can also be used for Ionic app development. But first, the device must be set up for development. The following documentation is a quick way to set up Android devices for development. For more detailed instructions and information, see <a href="https://developer.android.com/studio/run/device" target="_blank">the Android documentation</a>.

1. Enable USB debugging on the device. Open **Settings**, navigate to **Developer options**, and enable **USB debugging**. The **Developer options** menu may need to be enabled first. See <a href="https://developer.android.com/studio/debug/dev-options" target="_blank">the Android documentation</a> for instructions.
1. Ensure the device has permission to connect to the computer. For macOS, no additional setup is required. For Windows, <a href="https://developer.android.com/studio/run/oem-usb" target="_blank">install the OEM USB drivers</a>.

Verify the connection works by connecting the device to the computer with a USB cable and using the following command:

```shell
$ adb devices
```

The device should be listed. See the full <a href="https://developer.android.com/studio/command-line/adb" target="_blank">`adb` documentation</a> for troubleshooting and detailed information.
