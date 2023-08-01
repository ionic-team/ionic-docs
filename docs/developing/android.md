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

このガイドでは、[Capacitor](../reference/glossary.md#capacitor) または [Cordova](../reference/glossary.md#cordova)を使用して、Android エミュレータおよびデバイス上で Ionic アプリケーションを実行およびデバッグする方法について説明します。Android アプリは Windows、macOS、Linux 上で開発できます。

## Android Studio

[Android Studio](https://developer.android.com/studio/) はネイティブな Android アプリを作るための IDE です。[Android SDK](../reference/glossary.md#android-sdk)が含まれており、コマンドラインで使用できるように設定する必要があります。

Android エミュレータに必要な [Android 仮想デバイス](android.md#creating-an-android-virtual-device) の作成にも Android Studio が使用されます。Ionic アプリは [デバイスに起動](android.md#set-up-an-android-device)することもできます。

:::note
Android Studio を使って Ionic アプリを開発することはお勧めしません。実際には、ネイティブの Android プラットフォーム向けにアプリをビルドして実行したり、Android SDK や仮想デバイスを管理するためだけに使うべきです。
:::

### Android Studio のインストール

<a href="https://developer.android.com/studio/" target="_blank">
  Android website
</a> からAndroid Studioをダウンロードします。より詳しいインストール手順は <a
  href="https://developer.android.com/studio/install"
  target="_blank"
>
  User Guide
</a> をご覧ください。

### Android SDK のインストール

Android Studio をインストールしたら起動します。IDE は、Android SDK のインストールが必要であることを検出するはずです。**SDK Components Setup**の画面で、SDK のインストールを完了して、**Android SDK のパス**のをメモしておいてください。

![Android Studio SDK Setup](/img/installation/android-studio-sdk-setup.png)

デフォルトでは、最新の安定版 SDK プラットフォームがインストールされ、そのバージョンの Android をターゲットにするために必要なパッケージもコレクションされています。

システムイメージやその他のマイナー SDK プラットフォームパッケージをインストールするには、SDK Manager の下部にある **Show Package Details** がオンになっていることを確認する必要があります。
![Android Studio SDK Manager](/img/installation/android-studio-sdk.png)

今後の参考情報ですが、Android SDK は Android Studio の起動画面の **Configure** &raquo; **SDK Manager** メニュー、または Android プロジェクト内の **Tools** &raquo; **SDK Manager** で管理することができます。

### コマンドラインツールの設定

Android SDK には<a href="https://developer.android.com/studio/command-line/" target="_blank">便利なコマンドラインツール</a>が付属しています。これは利用する前に、いくつかの環境変数を設定する必要があります。以下のドキュメントは、macOS と Linux のものです。WIndows の場合は、ターミナルセッションでの環境変数の設定と保存に関するドキュメントを確認ください。

`~/.bashrc`もしくは`~/.bash_profile`、または同様のシェル起動スクリプトを、次のように変更します。s:

1. Set the `ANDROID_SDK_ROOT` environment variable. This path should be the **Android SDK Location** used in the previous section. To find the SDK Location in Android Studio, click **File** > **Project Structure**. Select **SDK Location** in the left pane. The path is shown under **Android SDK location**.

   ```shell
   $ export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
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
   For `apksigner` and `zipalign`, `$ANDROID_SDK_ROOT/build-tools<version>` must also be added to `PATH`.
   :::

### Android 仮想デバイスの作成

Android 仮想デバイス（AVD）は、Android エミュレータが Android OS を実行するために利用する設計図です。以下のドキュメントは Android エミュレータをセットアップするための簡単な方法です。詳細な手順と情報は、<a href="https://developer.android.com/studio/run/managing-avds" target="_blank">Android のドキュメント</a>を参照ください。

AVDs are managed with the Virtual Device Manager. In the Android Studio welcome screen, the context menu at the top right, then **Virtual Device Manager**. The Virtual Device Manager can also be opened inside Android projects in the **Tools** &raquo; **Device Manager** menu.

![AVD Setup](/img/installation/android-studio-avd-setup.png)

**Create Virtual Device** をクリックし、適切なデバイス定義を選択します。不明な場合は、 **Pixel 2** を選択し、適切なシステムイメージを選択します。よく分からない場合は、**Pie** (API 28) with Google Play services を選択してください。Android のバージョンについては、Android のバージョン履歴を参照してください。

AVD が作成されたら、Android エミュレータで AVD を起動します。エミュレータを実行し続けることは、Android 用の Ionic アプリケーションを開発しながら検出を確実にするための最良の方法です。

<figure className="device">
  <img alt="Android Emulator Booting" src="/docs/img/installation/android-emulator-booting.png" />
</figure>

### Android デバイスを設定する

Android ハードウェアの実物は、Ionic アプリ開発でも使用できます。しかし、最初に、デバイスを開発用にセットアップする必要があります。以下のドキュメントは開発用に Android デバイスを設定する簡単な方法です。詳細な手順と情報については、<a href="https://developer.android.com/studio/run/device" target="_blank">the Android documentation</a>を参照してください。

1. デバイスの USB デバッグを有効にします。**Settings**を開き、**Developer options**に移動し、**USB debugging**を有効にします。**Developer options**のメニューを最初に有効にする必要があるかもしれません。手順については<a href="https://developer.android.com/studio/debug/dev-options" target="_blank">the Android documentation</a>をご確認ください。
1. デバイスにコンピュータへの接続許可があることを確認してください。macOS の場合、追加の設定は不要です。Windows の場合は<a href="https://developer.android.com/studio/run/oem-usb" target="_blank">OEM USB drivers</a>をインストールしてください。

USB ケーブルでデバイスをコンピュータに接続し、次のコマンドを使用して接続が機能することを確認します。

```shell
adb devices
```

デバイスがリストされます。トラブルシューティングと詳細情報については、 <a href="https://developer.android.com/studio/command-line/adb" target="_blank">`adb` documentation</a> を参照してください。

## Cordova Setup

Cordova がプログラムビルドをサポートするには、追加のセットアップが必要です。 Capacitor には不要です。

### Java

Native Android apps are compiled with the <a href="https://java.com/en/" target="_blank">Java</a> programming language. Download the <a href="https://www.oracle.com/java/technologies/javase-jdk11-downloads.html" target="_blank">Java Development Kit (JDK) 11</a> if you are using **`cordova-android`** `10.0.0` or greater.

:::note
If you are using any version of **`cordova-android`** below `10.0.0`, install the <a href="https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html" target="_blank">Java Development Kit (JDK) 8</a>.
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

アプリを Android シミュレータやデバイスにデプロイする前に、ネイティブプロジェクトを設定する必要があります。

1. **Perform an Ionic build, if you haven't already.**

   ```
   $ ionic build
   ```

2. **Generate the native project, if it does not already exist.**

   Capacitor では以下の実行をサポートしています:

   ```shell
   $ ionic capacitor add android
   ```

   Cordova では以下のように実行します。

   ```shell
   $ ionic cordova prepare android
   ```

3. **Set the [Package ID](../reference/glossary.md#package-id).**

Capacitor の場合は、`capacitor.config.json` ファイルを開き、`appId` プロパティを修正します。

Cordova の場合は、`config.xml`ファイルを開き、ルート要素である `<widget>` の `id` 属性を変更します。詳しくは、[Cordova のドキュメント](https://cordova.apache.org/docs/en/latest/config_ref/#widget)を参照してください。

## Capacitor での実行

Capacitor は Android Studio を使って、シミュレータやデバイスへのアプリの構築と実行を行います。

1. **Ionic アプリを開発してネイティブプロジェクトに同期します**

重要な変更が行われるたびに、変更が Android シミュレータやデバイスに表示されるようにするには、Web アセットに Ionic アプリを組み込む必要があります。次に、Web アセットをネイティブプロジェクトにコピーする必要があります。幸い、このプロセスは Ionic CLI コマンド 1 つで簡単になります。

```shell
$ ionic capacitor copy android
```

2. **Run the app on a simulator or device.**

   You can open the Android Studio Project using:

   ```shell
   $ ionic capacitor open android
   ```

   In Android Studio, click the Run button and then select the target simulator or device.

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

## Android アプリのデバッグ

アプリが Android デバイスやエミュレータ上で動作するようになったら、 Chrome DevTools を使ってデバッグすることができます。

### Chrome DevTools の利用

Chrome は、Android シミュレータとデバイスのための Web 開発者ツールをサポートしている。シミュレータが動作している間、またはデバイスがコンピュータに接続されている間に Chrome で `chrome://inspect` に移動し、デバッグが必要なアプリケーションを **Inspect** します。

:::note
アプリケーションがデバイスまたはシミュレータで実行されていることを確認してください。実行されていない場合は、リストに表示されません。
:::

![Android Chrome DevTools](/img/running/android-chrome-devtools.png)

### Native Logs の表示

Android Studio で実行している場合、ネイティブログは **Logcat** に表示されます。

:::note
**Logcat** ウインドウが非表示の場合は、 **View** &raquo; **Tool Windows** &raquo; **Logcat** から有効にします。
:::

![Android Studio Logcat](/img/running/android-studio-logcat.png)

**Logcat** には [ADB](https://developer.android.com/studio/command-line/adb) を利用してアクセスすることもできます。

```shell
adb logcat
```
