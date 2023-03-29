---
title: Androidでの開発
sidebar_label: Androidでの開発
---

<head>
  <title>Androidアプリ開発ガイド: Build Ionic Apps in Android Studio</title>
  <meta
    name="description"
    content="This development guide covers how to run and debug Ionic apps on Android emulators and devices. Learn how to install Android Studio to get started building."
  />
</head>

このガイドでは、[Capacitor](../reference/glossary.md#capacitor) または [Cordova](../reference/glossary.md#cordova)を使用して、Androidエミュレータおよびデバイス上でIonicアプリケーションを実行およびデバッグする方法について説明します。AndroidアプリはWindows、macOS、Linux上で開発できます。

## Android Studio

[Android Studio](https://developer.android.com/studio/) はネイティブなAndroidアプリを作るためのIDEです。[Android SDK](../reference/glossary.md#android-sdk)が含まれており、コマンドラインで使用できるように設定する必要があります。

Androidエミュレータに必要な [Android仮想デバイス](android.md#creating-an-android-virtual-device) の作成にもAndroid Studioが使用されます。Ionicアプリは [デバイスに起動](android.md#set-up-an-android-device)することもできます。

:::note
Android Studioを使ってIonicアプリを開発することはお勧めしません。実際には、ネイティブのAndroidプラットフォーム向けにアプリをビルドして実行したり、Android SDKや仮想デバイスを管理するためだけに使うべきです。
:::

### Android Studioのインストール

<a href="https://developer.android.com/studio/" target="_blank">Android website</a> からAndroid Studioをダウンロードします。より詳しいインストール手順は <a href="https://developer.android.com/studio/install" target="_blank">User Guide</a> をご覧ください。

### Android SDKのインストール

Android Studioをインストールしたら起動します。IDEは、Android SDKのインストールが必要であることを検出するはずです。**SDK Components Setup**の画面で、SDKのインストールを完了して、**Android SDKのパス**のをメモしておいてください。

![Android Studio SDK Setup](/img/installation/android-studio-sdk-setup.png)

デフォルトでは、最新の安定版SDKプラットフォームがインストールされ、そのバージョンのAndroidをターゲットにするために必要なパッケージもコレクションされています。

システムイメージやその他のマイナーSDKプラットフォームパッケージをインストールするには、SDK Managerの下部にある **Show Package Details** がオンになっていることを確認する必要があります。
![Android Studio SDK Manager](/img/installation/android-studio-sdk.png)

今後の参考情報ですが、Android SDKはAndroid Studioの起動画面の **Configure** &raquo; **SDK Manager** メニュー、またはAndroidプロジェクト内の **Tools** &raquo; **SDK Manager** で管理することができます。

### コマンドラインツールの設定

Android SDKには<a href="https://developer.android.com/studio/command-line/" target="_blank">便利なコマンドラインツール</a>が付属しています。これは利用する前に、いくつかの環境変数を設定する必要があります。以下のドキュメントは、macOSとLinuxのものです。WIndowsの場合は、ターミナルセッションでの環境変数の設定と保存に関するドキュメントを確認ください。

`~/.bashrc`もしくは`~/.bash_profile`、または同様のシェル起動スクリプトを、次のように変更します。s:

1. `ANDROID_SDK_ROOT`環境変数を設定します。このパスは、前のセクションでメモした**Android SDKのパス**です。

   For Mac:

   ```shell
   $ export ANDROID_SDK_ROOT=$HOME/Android/sdk
   ```

   For Linux/Windows:

   ```shell
   $ export ANDROID_SDK_ROOT=$HOME/Android/Sdk
   ```

2. Add the Android SDK command-line directories to `PATH`. Each directory corresponds to the category of <a href="https://developer.android.com/studio/command-line/" target="_blank">command-line tool</a>.

   ```shell-session
   $ # avdmanager, sdkmanager
   $ export PATH=$PATH:$ANDROID_SDK_ROOT/tools/bin
   $ # adb, logcat
   $ export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools
   $ # emulator
   $ export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
   ```

   :::note
   For `apksigner` and `zipalign`, `$ANDROID_SDK_ROOT/build-tools&lt;version>` must also be added to `PATH`.
   :::

### Android仮想デバイスの作成

Android仮想デバイス（AVD）は、AndroidエミュレータがAndroid OSを実行するために利用する設計図です。以下のドキュメントはAndroidエミュレータをセットアップするための簡単な方法です。詳細な手順と情報は、<a href="https://developer.android.com/studio/run/managing-avds" target="_blank">Android のドキュメント</a>を参照ください。

AVDはAVD Managerで管理します。Android Studioの初期画面で、 **Configure** &raquo; **AVD Manager** をクリックします。AVD Managerは、Androidプロジェクト内で、-**Tools** &raquo; **AVD Manager** メニューから開くこともできます。

![AVD Setup](/img/installation/android-studio-avd-setup.png)

**Create Virtual Device** をクリックし、適切なデバイス定義を選択します。不明な場合は、 **Pixel 2** を選択し、適切なシステムイメージを選択します。よく分からない場合は、**Pie** (API 28) with Google Play servicesを選択してください。Androidのバージョンについては、Androidのバージョン履歴を参照してください。

AVDが作成されたら、AndroidエミュレータでAVDを起動します。エミュレータを実行し続けることは、Android用のIonicアプリケーションを開発しながら検出を確実にするための最良の方法です。

<figure className="device">
  <img alt="Android Emulator Booting" src="/docs/img/installation/android-emulator-booting.png" />
</figure>

### Androidデバイスを設定する

Androidハードウェアの実物は、Ionicアプリ開発でも使用できます。しかし、最初に、デバイスを開発用にセットアップする必要があります。以下のドキュメントは開発用にAndroidデバイスを設定する簡単な方法です。詳細な手順と情報については、<a href="https://developer.android.com/studio/run/device" target="_blank">the Android documentation</a>を参照してください。

1. デバイスのUSBデバッグを有効にします。**Settings**を開き、**Developer options**に移動し、**USB debugging**を有効にします。**Developer options**のメニューを最初に有効にする必要があるかもしれません。手順については<a href="https://developer.android.com/studio/debug/dev-options" target="_blank">the Android documentation</a>をご確認ください。
1. デバイスにコンピュータへの接続許可があることを確認してください。macOSの場合、追加の設定は不要です。Windowsの場合は<a href="https://developer.android.com/studio/run/oem-usb" target="_blank">OEM USB drivers</a>をインストールしてください。

USBケーブルでデバイスをコンピュータに接続し、次のコマンドを使用して接続が機能することを確認します。

```shell
adb devices
```

デバイスがリストされます。トラブルシューティングと詳細情報については、 <a href="https://developer.android.com/studio/command-line/adb" target="_blank">`adb` documentation</a> を参照してください。

## Cordova Setup

Cordovaがプログラムビルドをサポートするには、追加のセットアップが必要です。 Capacitorには不要です。

### Java

ネイティブのAndroidアプリは <a href="https://java.com/en/" target="_blank">Java</a> プログラミング言語でコンパイルされている。ダウンロードページからJDK 8を<a href="https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html" target="_blank">download page</a>します。

:::note
残念ながら、Cordovaは最新バージョンのJavaと互換性がありません。
:::

### Gradle

<a href="https://gradle.org/" target="_blank">
  Gradle
</a> はAndroidアプリで使用されるビルドツールで、別途インストールする必要があります。詳細については、 <a
  href="https://gradle.org/install/"
  target="_blank"
>
  install page
</a> を参照してください。

## プロジェクトのセットアップ

アプリをAndroidシミュレータやデバイスにデプロイする前に、ネイティブプロジェクトを設定する必要があります。

1. **ネイティブプロジェクトが存在しない場合は、生成します。**

   Capacitorでは以下の実行をサポートしています:

   ```shell
   $ ionic capacitor add android
   ```

   Cordovaでは以下のように実行します。

   ```shell
   $ ionic cordova prepare android
   ```

2. **[Package ID](../reference/glossary.md#package-id) を設定します。**

Capacitor の場合は、`capacitor.config.json` ファイルを開き、`appId` プロパティを修正します。

Cordovaの場合は、`config.xml`ファイルを開き、ルート要素である `<widget>` の `id` 属性を変更します。詳しくは、[Cordovaのドキュメント](https://cordova.apache.org/docs/en/latest/config_ref/#widget)を参照してください。

## Capacitorでの実行

CapacitorはAndroid Studioを使って、シミュレータやデバイスへのアプリの構築と実行を行います。

1. **Ionicアプリを開発してネイティブプロジェクトに同期します**

  重要な変更が行われるたびに、変更がAndroidシミュレータやデバイスに表示されるようにするには、WebアセットにIonicアプリを組み込む必要があります。次に、Webアセットをネイティブプロジェクトにコピーする必要があります。幸い、このプロセスはIonic CLIコマンド1つで簡単になります。

   ```shell
   $ ionic capacitor copy android
   ```

2. **Android StudioでRunボタンをクリックして、シュミレーターかデバイスを選択ください。**

![Android Studio Run Button Area](/img/running/android-studio-run-button-area.png)

### ライブリロード

リロードサーバを起動するには、次のコマンドを実行します。

```shell
ionic capacitor run android -l --external
```

デバイス上で実行する場合は、デバイスと開発マシンが同じネットワークに接続されていることを確認してください。

## Cordova で実行する

Ionic CLI は、コマンドひとつで Ionic アプリをビルド、コピー、Android シミュレーターやデバイスにデプロイすることができます。また、`ionic serve`で使用されているような開発サーバーをスピンアップして、[live-reload](../reference/glossary.md#livereload) 機能を提供することが可能です。

次のコマンドを実行すると、live-reload サーバを起動する CLI プロセスが長時間実行されます。

```shell
ionic cordova run android -l
```

これで、アプリのソースファイルに変更があった場合、Web アセットが再構築され、再度デプロイしなくてもシミュレータやデバイスに変更が反映されるようになりました。

## Androidアプリのデバッグ

アプリがAndroidデバイスやエミュレータ上で動作するようになったら、 Chrome DevToolsを使ってデバッグすることができます。

### Chrome DevToolsの利用

Chromeは、AndroidシミュレータとデバイスのためのWeb開発者ツールをサポートしている。シミュレータが動作している間、またはデバイスがコンピュータに接続されている間にChromeで `chrome://inspect` に移動し、デバッグが必要なアプリケーションを **Inspect** します。

:::note
アプリケーションがデバイスまたはシミュレータで実行されていることを確認してください。実行されていない場合は、リストに表示されません。
:::

![Android Chrome DevTools](/img/running/android-chrome-devtools.png)

### Native Logsの表示

Android Studioで実行している場合、ネイティブログは **Logcat** に表示されます。

:::note
**Logcat** ウインドウが非表示の場合は、 **View** &raquo; **Tool Windows** &raquo; **Logcat** から有効にします。
:::

![Android Studio Logcat](/img/running/android-studio-logcat.png)

**Logcat** には [ADB](https://developer.android.com/studio/command-line/adb) を利用してアクセスすることもできます。

```shell
adb logcat
```
