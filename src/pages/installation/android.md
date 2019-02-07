---
previousText: 'iOS Setup'
previousUrl: '/docs/installation/ios'
nextText: 'Starting an App '
nextUrl: '/docs/building/starting'
---

# Androidセットアップ

Androidアプリを開発するためには、追加の環境設定が必要です。Androidアプリは、Windows、macOS、およびLinux上で作成できます。

## Java

ネイティブAndroidアプリは<a href="https://java.com/en/" target="_blank">Java</a>でコンパイルされています。<a href="https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html" target="_blank">ダウンロードページ</a>からJDK 8をダウンロードしてください。

<blockquote>
  <p>Java 11はまだ新しく、Cordovaではうまく動きません。JDK8をご利用ください。</p>
</blockquote>

## Gradle

<a href="https://gradle.org/" target="_blank">Gradle</a>はAndroidアプリで使用するビルドツールで個別にインストールすることができます。詳しくは<a href="https://gradle.org/install/" target="_blank">インストールページ</a>をご覧ください。

## Android Studio

<a href="https://developer.android.com/studio/" target="_blank">Android Studio</a>はNativeなAndroidアプリを開発するためのIDEです。これには[Android SDK](/docs/faq/glossary#android-sdk)が含まれています。これをコマンドラインで利用するためには、設定が必要です。

Android Studioは、PC上での[Androidデバイス](/docs/installation/android#creating-an-android-virtual-device)のエミュレーションにも利用されます。Ionicアプリは[デバイス](/docs/installation/android#set-up-an-android-device)で起動することもできます。

### Android Studioのインストール

<a href="https://developer.android.com/studio/" target="_blank">Android website<a>からAndroid Studioをダウンロードします。より詳しいインストール手順は<a href="https://developer.android.com/studio/install" target="_blank">User Guide</a>をご覧ください。

### Android SDKのインストール

Android Studioをインストールしたら起動します。IDEは、Android SDKのインストールが必要であることを検出するはずです。**SDK Components Setup**の画面で、SDKのインストールを完了して、**Android SDKのパス**のをメモしておいてください。

![Android Studio SDK Setup](/docs/assets/img/installation/android-studio-sdk-setup.png)

Android SDKをインストールしたら、Android Studioを終了できます。

なお、Android SDKは、Android Studioの**Configure** &raquo; **SDK Manager**で管理することができます。

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
     <p>`apksigner`と`zipalign`のために, `$ANDROID_SDK_ROOT/build-tools/<version>`は必ず`PATH`に追加する必要があります。</p>
   </blockquote>

### Android仮想デバイスの作成

Android仮想デバイス（AVD）は、AndroidエミュレータがAndroid OSを実行するために利用する設計図です。以下のドキュメントはAndroidエミュレータをセットアップするための簡単な方法です。詳細な手順と情報は、<a href="https://developer.android.com/studio/run/managing-avds" target="_blank">Android のドキュメント</a>を参照ください。

AVDはAVD Managerで管理されます。AVD Managerは、Androidのプロジェクト内の**Tools** &raquo; **AVD Manager**からアクセスしなければいけません。メインメニューから**Tools**メニューにアクセスできない場合があります。すべてのメニューにアクセスするためのAndroidプロジェクトを作成します。

![AVD Setup](/docs/assets/img/installation/android-studio-avd-setup.png)

**Create Virtual Device**をクリックして、適切なデバイス定義を選択します。よくわからない場合は、**Pixel 2 XL**を選択してください。次に、適切なシステムイメージを選択してください。よくわからない場合は、最新のバージョンを選択してください。Androidのバージョンについては<a href="https://en.wikipedia.org/wiki/Android_version_history" target="_blank">Android version history</a>をご確認ください。

AVDが作成されたら、AndroidエミュレータでAVDを起動します。エミュレータを実行し続けることは、Android用のIonicアプリケーションを開発しながら検出を確実にするための最良の方法です。

<figure class="center" style="width: 300px">
    ![Android Emulator Booting](/docs/assets/img/installation/android-emulator-booting.png)
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
