---
previousText: '设置iOS环境'
previousUrl: '/docs/installation/ios'
nextText: 'Starting an App'
nextUrl: '/docs/building/starting'
contributors:
  - rtpHarry
---

# 设置Android环境

要在Android平台使用，需要进行一些额外的设置。 可以在Windows, macOS, 和Linux系统上创建Android应用。

## Java

原生Android应用是由 <a href="https://java.com/en/" target="_blank">Java</a>语言编译产生的。 从 <a href="https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html" target="_blank">此处</a>下载JDK8.

<blockquote>
  <p>Cordova与最新的Java版本不兼容。 你必须安装JDK8来使用Cordova构建Android应用。</p>
</blockquote>

## Gradle

<a href="https://gradle.org/" target="_blank">Gradle</a> 是构建Android应用的工具，必须要单独安装。 详情请查看 <a href="https://gradle.org/install/" target="_blank">安装说明</a>。

## Android Studio

<a href="https://developer.android.com/studio/" target="_blank">Android Studio</a> 是创建原生 Android 应用的 IDE。 它包含 <a href="/docs/faq/glossary#android-sdk">Android SDK</a>, 需要配置才能在命令行中使用。

Android Studio 也用于 [创建Android 虚拟设备](/docs/installation/android#creating-an-android-virtual-device)，这是安卓模拟器所需要的。 Ionic应用也可以 [在虚拟设备上运行](/docs/installation/android#set-up-an-android-device)。

> 我们不建议使用 Android Studio *开发* 的 Ionic 应用。 相反，它应只用于为构建和运行原生 Android应用，并管理 Android SDK 和虚拟设备。

### 安装 Android Studio

从 <a href="https://developer.android.com/studio/" target="_blank">Android 网站</a> 下载Android Studio。 更多详细的安装说明可以在 <a href="https://developer.android.com/studio/install" target="_blank">用户指南</a> 中找到。

### 安装 Android SDK

安装后，打开 Android Studio。 IDE 应该检测到 Android SDK 需要安装。 在 **SDK 组件设置** 界面，进行SDK的安装。 记下 **Android SDK 的位置**。

![Android Studio SDK Setup](/docs/assets/img/installation/android-studio-sdk-setup.png)

默认情况下，安装了最新的稳定版 Android SDK，其中包括了对应版本所需的一系列软件包。

> 要安装SDK系统镜像和其他次要的SDK包，您可能需要确保勾选了在 SDK 管理器底部的 **显示软件包详细信息** 选项框。 ![Android Studio SDK Manager](/docs/assets/img/installation/android-studio-sdk.png)

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