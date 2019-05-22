---
previousText: 'iOS Setup'
previousUrl: '/docs/installation/ios'
nextText: 'Starting an App '
nextUrl: '/docs/building/starting'
contributors:
  - rtpHarry
---

# Androidセットアップ

Androidアプリを開発するためには、追加の環境設定が必要です。Androidアプリは、Windows、macOS、およびLinux上で作成できます。

## Java

ネイティブAndroidアプリは<a href="https://java.com/en/" target="_blank">Java</a>でコンパイルされています。<a href="https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html" target="_blank">ダウンロードページ</a>からJDK 8をダウンロードしてください。

<blockquote>
  <p>Cordova は最新のJavaでは動きません。Androidアプリをビルドするために、JDK8をインストールする必要があります。</p>
</blockquote>

## Gradle

<a href="https://gradle.org/" target="_blank">Gradle</a>はAndroidアプリで使用するビルドツールで個別にインストールしなければなりません。詳しくは<a href="https://gradle.org/install/" target="_blank">インストールページ</a>をご覧ください。

## Android Studio

<a href="https://developer.android.com/studio/" target="_blank">Android Studio</a>はNativeなAndroidアプリを開発するためのIDEです。これには[Android SDK](/docs/faq/glossary#android-sdk)が含まれています。これをコマンドラインで利用するためには、設定が必要です。

Android Studioは、PC上での[Androidデバイス](/docs/installation/android#creating-an-android-virtual-device)のエミュレーションにも利用されます。Ionicアプリは[デバイス](/docs/installation/android#set-up-an-android-device)で起動することもできます。

### Android Studioのインストール

<a href="https://developer.android.com/studio/" target="_blank">Android website<a>からAndroid Studioをダウンロードします。より詳しいインストール手順は<a href="https://developer.android.com/studio/install" target="_blank">User Guide</a>をご覧ください。

### Android SDKのインストール

Android Studioをインストールしたら起動します。IDEは、Android SDKのインストールが必要であることを検出するはずです。**SDK Components Setup**の画面で、SDKのインストールを完了して、**Android SDKのパス**のをメモしておいてください。

![Android Studio SDK Setup](/docs/assets/img/installation/android-studio-sdk-setup.png)

By default, the latest stable SDK Platform is installed, which includes a collection of packages required to target that version of Android.

<blockquote>
    📝 <strong>Note</strong>: To install system images and other minor SDK platform packages, you may need to ensure <strong>Show Package Details</strong> is checked at the bottom of the SDK Manager.
    <img alt="Android Studio SDK Manager" src="/docs/assets/img/installation/android-studio-sdk.png" />
</blockquote>

For future reference, the Android SDK can be managed with Android Studio in the **Configure** &raquo; **SDK Manager** menu of the Android Studio welcome screen or **Tools** &raquo; **SDK Manager** inside Android projects.

### コマンドラインツールの設定

Android SDKには<a href="https://developer.android.com/studio/command-line/" target="_blank">便利なコマンドラインツール</a>が付属しています。これは利用する前に、いくつかの環境変数を設定する必要があります。以下のドキュメントは、macOSとLinuxのものです。WIndowsの場合は、ターミナルセッションでの環境変数の設定と保存に関するドキュメントを確認ください。

`~/.bashrc`もしくは`~/.bash_profile`、または同様のシェル起動スクリプトを、次のように変更します。s:

1. `ANDROID_SDK_ROOT`環境変数を設定します。このパスは、前のセクションでメモした**Android SDKのパス**です。

   ```shell
   $ export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
   ```

1. `PATH`にAndroid SDK コマンドラインのディレクトリを追加します。それぞれのディレクトリは、<a href="https://developer.android.com/studio/command-line/" target="_blank">コマンドラインツール</a>のカテゴリに対応しています。.

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
     <p><code>apksigner</code>と<code>zipalign</code>のために, <code>$ANDROID_SDK_ROOT/build-tools/<version></code>は必ず<code>PATH</code>に追加する必要があります。</p>
   </blockquote>

### Android仮想デバイスの作成

Android仮想デバイス（AVD）は、AndroidエミュレータがAndroid OSを実行するために利用する設計図です。以下のドキュメントはAndroidエミュレータをセットアップするための簡単な方法です。詳細な手順と情報は、<a href="https://developer.android.com/studio/run/managing-avds" target="_blank">Android のドキュメント</a>を参照ください。

AVDs are managed with the AVD Manager. In the Android Studio welcome screen, click **Configure** &raquo; **AVD Manager**. The AVD Manager can also be opened inside Android projects in the **Tools** &raquo; **AVD Manager** menu.

![AVD Setup](/docs/assets/img/installation/android-studio-avd-setup.png)

Click **Create Virtual Device** and select a suitable device definition. If unsure, choose **Pixel 2**. Then, select a suitable system image. If unsure, choose **Pie** (API 28) with Google Play services. See <a href="https://en.wikipedia.org/wiki/Android_version_history" target="_blank">Android version history</a> for information on Android versions.

AVDが作成されたら、AndroidエミュレータでAVDを起動します。エミュレータを実行し続けることは、Android用のIonicアプリケーションを開発しながら検出を確実にするための最良の方法です。

<figure style="width: 300px; margin: 0 auto;">
    <img alt="Android Emulator Booting" src="/docs/assets/img/installation/android-emulator-booting.png" />
</figure>

### Androidデバイスを設定する

Androidハードウェアの実物は、Ionicアプリ開発でも使用できます。しかし、最初に、デバイスを開発用にセットアップする必要があります。以下のドキュメントは開発用にAndroidデバイスを設定する簡単な方法です。詳細な手順と情報については、<a href="https://developer.android.com/studio/run/device" target="_blank">the Android documentation</a>を参照してください。

1. デバイスのUSBデバッグを有効にします。**Settings**を開き、**Developer options**に移動し、**USB debugging**を有効にします。**Developer options**のメニューを最初に有効にする必要があるかもしれません。手順については<a href="https://developer.android.com/studio/debug/dev-options" target="_blank">the Android documentation</a>をご確認ください。
1. デバイスにコンピュータへの接続許可があることを確認してください。macOSの場合、追加の設定は不要です。Windowsの場合は<a href="https://developer.android.com/studio/run/oem-usb" target="_blank">OEM USB drivers</a>をインストールしてください。

USBケーブルでデバイスをコンピュータに接続し、次のコマンドを使用して接続が機能することを確認します。

```shell
$ adb devices
```

デバイスが一覧表示されます。トラブルシューティングや詳細情報については、<a href="https://developer.android.com/studio/command-line/adb" target="_blank">`adb` documentation</a>をご確認ください。
