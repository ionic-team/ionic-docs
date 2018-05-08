---

---

# Android Setup

<p class="intro" markdown="1">
To target the Android platform, some additional environment setup is required. Android apps can be created on Windows, macOS, and Linux.
</p>

## Java

Native Android apps are compiled with the [Java](https://java.com/en/) programming language. Download JDK8 from the [download page](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html).

<blockquote>
  <p>Java 10 is still a bit too new and doesn't work well with Cordova. We recommend JDK8.</p>
</blockquote>

## Gradle

[Gradle](https://gradle.org/) is the build tool used in Android apps and can be installed separately. See the [install page](https://gradle.org/install/) for details.

## Android Studio

[Android Studio](https://developer.android.com/studio/) is the IDE for creating native Android apps. It includes the [Android SDK](/docs/faq/glossary#android-sdk), which will need to be configured for use in the command line.

Android Studio is also used to [create Android virtual devices](/docs/installation/android#creating-an-android-virtual-device), which are required for the Android emulator. Ionic apps can also be [launched to a device](/docs/installation/android#set-up-an-android-device).

### Installing Android Studio

Download Android Studio from the [Android website](https://developer.android.com/studio/). More detailed installation instructions can be found in the [User Guide](https://developer.android.com/studio/install).

### Installing the Android SDK

Once installed, open Android Studio. The IDE should detect that the Android SDK needs to be installed. In the **SDK Components Setup** screen, finish installing the SDK. Keep note of the **Android SDK Location**.

![Android Studio SDK Setup](../assets/img/installation/android-studio-sdk-setup.png)

After the Android SDK is installed, Android Studio can be closed.

For future reference, the Android SDK can be managed with Android Studio in the **Configure** &raquo; **SDK Manager** menu.

### Configuring Command Line Tools

The Android SDK ships with [useful command-line tools](https://developer.android.com/studio/command-line/). Before they can be used, some environment variables must be set. The following instructions are for macOS and Linux. For Windows, check the documentation on setting and persisting environment variables in terminal settings.

In `~/.bashrc`, `~/.bash_profile`, or similar shell startup scripts, make the following modifications:

1. Set the `ANDROID_SDK_ROOT` environment variable. This path should be the **Android SDK Location** used in the previous section.

    ```bash
    export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
    ```

1. Add the Android SDK command-line directories to `PATH`. Each directory corresponds to the category of [command-line tool](https://developer.android.com/studio/command-line/).

    ```bash
    # avdmanager, sdkmanager
    export PATH=$PATH:$ANDROID_SDK_ROOT/tools/bin

    # adb, logcat
    export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools

    # emulator
    export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
    ```

    <blockquote>
      <p>For `apksigner` and `zipalign`, `$ANDROID_SDK_ROOT/build-tools/<version>` must also be added to `PATH`.
    </blockquote>

### Creating an Android Virtual Device

Android Virtual Devices (AVDs) are a blueprint that the Android emulator uses to run Android OS. The following documentation is a quick way to get the Android emulator set up. For more detailed instructions and information, see [the Android documentation](https://developer.android.com/studio/run/managing-avds).

AVDs are managed with the AVD Manager. The AVD Manager must be accessed inside an Android project in the **Tools** &raquo; **AVD Manager** menu. The **Tools** menu may not be accessible in the main screen. Create an Android project to access the full menu.

![AVD Setup](../assets/img/installation/android-studio-avd-setup.png)

Click **Create Virtual Device** and select a suitable device definition. If unsure, choose **Pixel 2 XL**. Then, select a suitable system image. If unsure, choose the latest version. See [Android version history](https://en.wikipedia.org/wiki/Android_version_history) for information on Android versions.

Once the AVD is created, launch the AVD into the Android emulator. Keeping the emulator running is the best way to ensure detection while developing Ionic apps for Android.

<figure style="width: 300px">
    ![Android Emulator Booting](../assets/img/installation/android-emulator-booting.png)
</figure>

### Set up an Android Device

Actual Android hardware can also be used for Ionic app development. But first, the device must be set up for development. The following documentation is a quick way to set up Android devices for development. For more detailed instructions and information, see [the Android documentation](https://developer.android.com/studio/run/device).

1. Enable USB debugging on the device. Open **Settings**, navigate to **Developer options**, and enable **USB debugging**. The **Developer options** menu may need to be enabled first. See [the Android documentation](https://developer.android.com/studio/debug/dev-options) for instructions.
1. Ensure the device has permission to connect to the computer. For macOS, no additional setup is required. For Windows, [install the OEM USB drivers](https://developer.android.com/studio/run/oem-usb).

Verify the connection works by connecting the device to the computer with a USB cable and using the following command:

```shell
adb devices
```

The device should be listed. See the full [`adb` documentation](https://developer.android.com/studio/command-line/adb) for troubleshooting and detailed information.
