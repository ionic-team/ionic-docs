---
title: iOSでの開発
sidebar_label: iOSでの開発
skipIntros: true
---

<head>
  <title>iOSアプリ開発ガイド: Xcode Setup to Build and Run iOS Apps</title>
  <meta
    name="description"
    content="Ionic's iOS development guide covers how to build and run Ionic apps on iOS simulators and devices. iOS apps can only be developed on macOS with Xcode setup."
  />
</head>

このガイドでは、 [Capacitor](../reference/glossary.md#capacitor) または [Cordova](../reference/glossary.md#cordova) を使用して、iOSシミュレータおよびデバイス上でIonicアプリケーションを実行およびデバッグする方法について説明します。iOSアプリは、XcodeがインストールされているmacOS上でのみ開発できます。

iOS上でIonicアプリを実行するためのワークフローは2つあります:

* [Xcodeで実行](#running-with-xcode)
* [Ionic CLIでの実行](#running-with-the-ionic-cli)

Xcodeアプローチの方が一般的に安定していますが、Ionic CLIを使ったアプローチでは、 [ライブリロード](../reference/glossary.md#livereload) 機能が提供されています。

## Xcodeのセットアップ

[Xcode](https://developer.apple.com/xcode/) はネイティブなiOSアプリを作るためのIDEです。これにはiOS SDKとXcodeコマンドラインツールが含まれている。XcodeはAppleアカウントで無料で[ダウンロード](https://developer.apple.com/download/)できるし、App Storeからインストールすることもできます。

Xcodeをインストールしたら、使用するコマンドラインツールが選択されていることを確認します:

```shell
xcode-select --install
```

### Development Teamの設定

すべてのiOSアプリは、開発用であってもコード署名されていなければならない。幸いなことに、Xcodeは自動コード署名によってこれを簡単にしてくれます。唯一の前提条件はApple IDです。

Xcodeを開き、 **Xcode** &raquo; **Preferences** &raquo; **Accounts** に移動します。Apple IDが表示されない場合は、追加します。ログインすると、Personal TeamがApple IDのチームリストに表示されます。

![Xcode Accounts](/img/installation/ios-xcode-accounts.png)

### iOS Simulatorの作成

iOSシミュレータは、Mac上のiOSデバイスをエミュレートする。次のドキュメントは、iOSシミュレータを簡単にセットアップする方法です。詳細については、 [Appleのドキュメンテーション](https://developer.apple.com/library/content/documentation/IDEs/Conceptual/simulator_help_topics/Chapter/Chapter.html) を参照してください。

Xcodeを開き、**Window** &raquo; **Devices and Simulators** に移動します。iPhone 11シミュレータが存在しない場合は作成します。

![iOS Simulators](/img/installation/ios-xcode-simulators-setup.png)

## Cordova のセットアップ

Cordovaがプログラムビルドをサポートするには、追加のセットアップが必要です。 Capacitorには不要です。

### ios-sim & ios-deploy

 [`ios-sim`](https://github.com/ios-control/ios-sim) と [`ios-deploy`](https://github.com/ios-control/ios-deploy) は、開発中にiOSシミュレータとiOSデバイスにアプリをデプロイするユーティリティです。これらは [npm](../reference/glossary.md#npm) を使ってグローバルにインストールすることができます。

```shell
$ npm install -g ios-sim
$ brew install ios-deploy
```

## プロジェクト設定

アプリをiOSシミュレータやデバイスにデプロイする前に、ネイティブのプロジェクトを設定する必要があります。

1. **ネイティブのプロジェクトが存在しない場合は、以下を実行します。**

   Capacitorの場合は、以下を実行します。

   ```shell
   $ ionic capacitor add ios
   ```

   Cordovaの場合は、以下を実行します。

   ```shell
   $ ionic cordova prepare ios
   ```

   1. **[Package ID](/reference/glossary.md#package-id)を設定**

       Capacitorの場合は、`capacitor.config.json` ファイルを開き、`appId`プロパティを変更します。

       Cordovaの場合は、`config.xml`ファイルを開き、`id`を変更し`<widget>`でルートを設定します。要素の属性を変更します。詳しくは [the Cordova documentation](https://cordova.apache.org/docs/en/latest/config_ref/#widget) をご覧ください。

   1. **<b>Xcode</b>でプロジェクトを開きます**

       Capacitorの場合は、次のコマンドを実行してXcodeでアプリを開きます。

   ```shell
   $ ionic capacitor open ios
   ```

    Cordovaの場合は、Xcodeを起動したあと、**File** &raquo; **Open**からアプリを探します。アプリのディレクトリ`platforms/ios`を開きます。

1. **<b>Projectのナビゲーション</b>から、プロジェクトのrootにあるproject editorを開きます。**Identity**で、設定されている Package ID は Bundle Identifier と一致していることを確認します。**

   ![Xcode Identity Setup](/img/running/ios-xcode-identity-setup.png)

1. **同じproject editorの<b>Signing</b>で、セクションで、<b>Automatically manage signing</b>が有効になっていることを確認します。** 次に、Development Teamを選択してください。Development Teamを選択すると、Xcodeは自動的にプロビジョニングと署名を準備しようとします。

   ![Xcode Signing Setup](/img/running/ios-xcode-signing-setup.png)

## Xcodeで実行する

このワークフローでは、Xcodeは一般的なコンパイルと署名の問題を自動的に修正できます。

1. **Ionicアプリを開発し、それをネイティブプロジェクトと同期させます。**

    変更が検知がある度に、iOSシミュレータやデバイスが変更を検知するより前に、IonicアプリをWebアセットにビルドする必要があります。その後、Webアセットをネイティブプロジェクトにコピーします。幸いなことに、このプロセスはIonic CLIコマンドひとつで簡単にできます。

    Capacitorの場合は、以下を実行します。

   ```shell
   $ ionic capacitor copy ios
   $ ionic capacitor update
   ```

   Cordovaの場合は、以下を実行します。

   ```shell
   $ ionic cordova prepare ios
   ```

1. **Xcodeで、目的のシミュレータまたはデバイスを選択して再生ボタンをクリックします。**

   ![Xcode Play Button Area](/img/running/ios-xcode-play-button-area.png)

## Ionic CLIを使用して実行する

Ionic CLIは、コマンドひとつで、Ionicアプリを作成、コピーし、iOSシミュレータやデバイスにデプロイできます。　`ionic serve`のような[ライブリロード](../reference/glossary.md#livereload) 機能を利用するために、開発用のサーバを遅延することもできます。

ライブリロードを使うと、アプリのソースファイルに加えられた変更がウェブアセットの再構築を引き起こし、その変更は再デプロイすることなくシミュレータやデバイスに反映されます。

:::caution
iOSデバイスでは、デバイスとコンピュータが同じWi-Fiネットワーク上にある必要があります。デバイスが接続できるように、devサーバーの外部URLも必要です。外部アドレスにバインドするには、--external (または--host=0.0.0.0)を使用します。
:::

### Capacitorを使ったライブリロード

CapacitorにはXcodeを利用してアプリケーションバイナリの構築とデプロイを行います。Ionic CLIで、ライブリロードサーバを起動し、Capacitorを設定して1つのコマンドで使用できます。

以下を実行し、ターゲットシミュレータまたはデバイスを選択し、Xcodeの再生ボタンをクリックします:

```shell
ionic capacitor run ios -l --external
```

### Cordovaを使ったライブリロード

Cordovaはネイティブプロジェクトをプログラムでビルドしてデプロイすることができます。

ライブリロードサーバを起動し、アプリをビルドしてデプロイするには、以下を実行します:

```shell
ionic cordova run ios -l --external
```

## iOSアプリのデバッグ

アプリがiOSデバイスやシミュレーター上で動くようになったら、Safariでデバッグできます。

### Safari Web Inspectorを使う

SafariはiOSシミュレータとデバイスのWeb Inspectorをサポートしています。Developメニューを開いてシミュレータまたはデバイスを選択し、Ionic Appを選択してWeb Inspectorを開きます。

:::note
*Develop** メニューが非表示になってる場合は、**Safari** &raquo; **Preferences** &raquo; **Advanced** &raquo; **Show Develop menu in menu bar** から有効にします。

アプリがリストにない場合は、 **Settings** &raquo; **Safari** &raquo; **Advanced** &raquo; **Web Inspector** からデバイスのWeb Inspectorを有効にする必要があります。
:::

![Safari Web Inspector](/img/running/ios-safari-web-inspector-timelines.png)

## ネイティブログの表示

Xcodeで実行している場合、ネイティブログはXcodeの **Console** にあります。

:::note
**Console** が表示されない場合, **View** &raquo; **Debug Area** &raquo; **Activate Console**を有効化してください。
:::

![Xcode Console](/img/running/ios-xcode-console.png)
