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

このガイドでは、 [Capacitor](../reference/glossary.md#capacitor) または [Cordova](../reference/glossary.md#cordova) を使用して、iOS シミュレータおよびデバイス上で Ionic アプリケーションを実行およびデバッグする方法について説明します。iOS アプリは、Xcode がインストールされている macOS 上でのみ開発できます。

iOS 上で Ionic アプリを実行するためのワークフローは 2 つあります:

- [Xcode で実行](#running-with-xcode)
- [Ionic CLI での実行](#running-with-the-ionic-cli)

Xcode アプローチの方が一般的に安定していますが、Ionic CLI を使ったアプローチでは、 [ライブリロード](../reference/glossary.md#livereload) 機能が提供されています。

## Xcode のセットアップ

[Xcode](https://developer.apple.com/xcode/) はネイティブな iOS アプリを作るための IDE です。これには iOS SDK と Xcode コマンドラインツールが含まれている。Xcode は Apple アカウントで無料で[ダウンロード](https://developer.apple.com/download/)できるし、App Store からインストールすることもできます。

Xcode をインストールしたら、使用するコマンドラインツールが選択されていることを確認します:

```shell
xcode-select --install
```

### Development Team の設定

すべての iOS アプリは、開発用であってもコード署名されていなければならない。幸いなことに、Xcode は自動コード署名によってこれを簡単にしてくれます。唯一の前提条件は Apple ID です。

Xcode を開き、 **Xcode** &raquo; **Preferences** &raquo; **Accounts** に移動します。Apple ID が表示されない場合は、追加します。ログインすると、Personal Team が Apple ID のチームリストに表示されます。

![Xcode Accounts](/img/installation/ios-xcode-accounts.png)

### iOS Simulator の作成

iOS シミュレータは、Mac 上の iOS デバイスをエミュレートする。次のドキュメントは、iOS シミュレータを簡単にセットアップする方法です。詳細については、 [Apple のドキュメンテーション](https://developer.apple.com/library/content/documentation/IDEs/Conceptual/simulator_help_topics/Chapter/Chapter.html) を参照してください。

Xcode を開き、**Window** &raquo; **Devices and Simulators** に移動します。iPhone 11 シミュレータが存在しない場合は作成します。

![iOS Simulators](/img/installation/ios-xcode-simulators-setup.png)

## Cordova のセットアップ

Cordova がプログラムビルドをサポートするには、追加のセットアップが必要です。 Capacitor には不要です。

### ios-sim & ios-deploy

[`ios-sim`](https://github.com/ios-control/ios-sim) と [`ios-deploy`](https://github.com/ios-control/ios-deploy) は、開発中に iOS シミュレータと iOS デバイスにアプリをデプロイするユーティリティです。これらは [npm](../reference/glossary.md#npm) を使ってグローバルにインストールすることができます。

```shell
$ npm install -g ios-sim
$ brew install ios-deploy
```

## プロジェクト設定

アプリを iOS シミュレータやデバイスにデプロイする前に、ネイティブのプロジェクトを設定する必要があります。

1. **ネイティブのプロジェクトが存在しない場合は、以下を実行します。**

   Capacitor の場合は、以下を実行します。

   ```shell
   $ ionic capacitor add ios
   ```

   Cordova の場合は、以下を実行します。

   ```shell
   $ ionic cordova prepare ios
   ```

   1. **[Package ID](/reference/glossary.md#package-id)を設定**

      Capacitor の場合は、`capacitor.config.json` ファイルを開き、`appId`プロパティを変更します。

      Cordova の場合は、`config.xml`ファイルを開き、`id`を変更し`<widget>`でルートを設定します。要素の属性を変更します。詳しくは [the Cordova documentation](https://cordova.apache.org/docs/en/latest/config_ref/#widget) をご覧ください。

   1. **<b>Xcode</b>でプロジェクトを開きます**

      Capacitor の場合は、次のコマンドを実行して Xcode でアプリを開きます。

   ```shell
   $ ionic capacitor open ios
   ```

   Cordova の場合は、Xcode を起動したあと、**File** &raquo; **Open**からアプリを探します。アプリのディレクトリ`platforms/ios`を開きます。

1. **<b>Project のナビゲーション</b>から、プロジェクトの root にある project editor を開きます。**Identity**で、設定されている Package ID は Bundle Identifier と一致していることを確認します。**

   ![Xcode Identity Setup](/img/running/ios-xcode-identity-setup.png)

1. **同じ project editor の<b>Signing</b>で、セクションで、<b>Automatically manage signing</b>が有効になっていることを確認します。** 次に、Development Team を選択してください。Development Team を選択すると、Xcode は自動的にプロビジョニングと署名を準備しようとします。

   ![Xcode Signing Setup](/img/running/ios-xcode-signing-setup.png)

## Xcode で実行する

このワークフローでは、Xcode は一般的なコンパイルと署名の問題を自動的に修正できます。

1. **Ionic アプリを開発し、それをネイティブプロジェクトと同期させます。**

   変更が検知がある度に、iOS シミュレータやデバイスが変更を検知するより前に、Ionic アプリを Web アセットにビルドする必要があります。その後、Web アセットをネイティブプロジェクトにコピーします。幸いなことに、このプロセスは Ionic CLI コマンドひとつで簡単にできます。

   Capacitor の場合は、以下を実行します。

   ```shell
   $ ionic capacitor copy ios
   $ ionic capacitor update
   ```

   Cordova の場合は、以下を実行します。

   ```shell
   $ ionic cordova prepare ios
   ```

1. **Xcode で、目的のシミュレータまたはデバイスを選択して再生ボタンをクリックします。**

   ![Xcode Play Button Area](/img/running/ios-xcode-play-button-area.png)

## Ionic CLI を使用して実行する

Ionic CLI は、コマンドひとつで、Ionic アプリを作成、コピーし、iOS シミュレータやデバイスにデプロイできます。　`ionic serve`のような[ライブリロード](../reference/glossary.md#livereload) 機能を利用するために、開発用のサーバを遅延することもできます。

ライブリロードを使うと、アプリのソースファイルに加えられた変更がウェブアセットの再構築を引き起こし、その変更は再デプロイすることなくシミュレータやデバイスに反映されます。

:::caution
iOS デバイスでは、デバイスとコンピュータが同じ Wi-Fi ネットワーク上にある必要があります。デバイスが接続できるように、dev サーバーの外部 URL も必要です。外部アドレスにバインドするには、--external (または--host=0.0.0.0)を使用します。
:::

### Capacitor を使ったライブリロード

Capacitor には Xcode を利用してアプリケーションバイナリの構築とデプロイを行います。Ionic CLI で、ライブリロードサーバを起動し、Capacitor を設定して 1 つのコマンドで使用できます。

以下を実行し、ターゲットシミュレータまたはデバイスを選択し、Xcode の再生ボタンをクリックします:

```shell
ionic capacitor run ios -l --external
```

### Cordova を使ったライブリロード

Cordova はネイティブプロジェクトをプログラムでビルドしてデプロイすることができます。

ライブリロードサーバを起動し、アプリをビルドしてデプロイするには、以下を実行します:

```shell
ionic cordova run ios -l --external
```

## iOS アプリのデバッグ

アプリが iOS デバイスやシミュレーター上で動くようになったら、Safari でデバッグできます。

### Safari Web Inspector を使う

Safari は iOS シミュレータとデバイスの Web Inspector をサポートしています。Develop メニューを開いてシミュレータまたはデバイスを選択し、Ionic App を選択して Web Inspector を開きます。

:::note
\*Develop** メニューが非表示になってる場合は、**Safari** &raquo; **Preferences** &raquo; **Advanced** &raquo; **Show Develop menu in menu bar\*\* から有効にします。

アプリがリストにない場合は、 **Settings** &raquo; **Safari** &raquo; **Advanced** &raquo; **Web Inspector** からデバイスの Web Inspector を有効にする必要があります。
:::

![Safari Web Inspector](/img/running/ios-safari-web-inspector-timelines.png)

## ネイティブログの表示

Xcode で実行している場合、ネイティブログは Xcode の **Console** にあります。

:::note
**Console** が表示されない場合, **View** &raquo; **Debug Area** &raquo; **Activate Console**を有効化してください。
:::

![Xcode Console](/img/running/ios-xcode-console.png)
