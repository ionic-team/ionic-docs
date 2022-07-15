---
title: Android Play Storeへの開発
sidebar_label: Android Play Store
---

<head>
  <title>Android Play Storeでのリリース: Publish Your Ionic Apps</title>
  <meta
    name="description"
    content="Ionic documentation for Android Play Store app deployment. Read about how to generate a release build and publish your Ionic apps to the Google Play Store."
  />
</head>

## アプリのリリースビルド作成

Android用のリリースビルドを生成するには、以下のcliコマンドを実行します。

```shell
$ ionic cordova build android --prod --release
```

これは、アプリの `platforms/android/app/build/outputs/apk` ディレクトリにある `config.xml` の設定に基づき、リリースビルドを生成するものです。
Ionicアプリはこのファイルにあらかじめデフォルト値が設定されていますが、ビルドをカスタマイズするために変更することができます。

## APKへの署名

まず、署名されていない APK に署名する必要があります。署名鍵がすでに生成されている場合は、この手順をスキップして、代わりにその鍵を使用します。
Android SDKに付属するkeytoolコマンドを使用して、秘密鍵を生成します。

```shell
$ keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000
```

このコマンドを実行し、プロンプトに答えると、カレントディレクトリに `my-release-key.keystore` という名前のファイルが作成されます。

:::caution
このファイルを保存し、安全な場所に保管してください。このファイルを紛失すると、Google Playストアはこのアプリのアップデートを受け付けません!
:::

署名されていないAPKに署名するには、Android SDKに含まれるjarsignerツールを実行します。

```shell
$ jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore HelloWorld-release-unsigned.apk alias_name
```

最後に、APKを最適化するために、zipalignツールを実行する必要があります。
`zipalign` ツールは `/path/to/Android/sdk/build-tools/VERSION/zipalign` にあります。
例えば、Android StudioがインストールされているmacOSでは、`zipalign`は `~/Library/Android/sdk/build-tools/VERSION/zipalign` の中に入っています。

```shell
$ zipalign -v 4 HelloWorld-release-unsigned.apk HelloWorld.apk
```

これにより、Google Playストアに受け入れられるHelloWorld.apkという最終リリースバイナリが生成されます。

## Google Play Storeにアプリを送信する

リリース用APKが生成されたので、Playストアのリスティングを書き、APKをアップロードすることができるようになりました。

まずは、[Google Play Store Developer Console](https://play.google.com/apps/publish)にアクセスし、開発者アカウントを新規に作成します。

:::note
Google Playで開発者アカウントを作るには、25USドルが必要です。
:::

開発者アカウントを作成したら、「アプリケーションを作成する」ボタン(Create an Application)をクリックします。

![Create an App button](/img/publishing/newAppGPlay.png)

アプリの説明、スクリーンショット、その他の情報を入力してください。
準備ができたら、生成された署名付きリリースAPKをアップロードし、アプリを公開します。

## アプリのアップデート

アプリの進化に伴い、新機能の追加や修正などのアップデートが必要になってきます。アプリのアップデートは、Google Play Storeに新バージョンを提出するか、AppflowのLive Update機能のようなライブアップデートサービスを使用することで行うことができます。ライブアップデートでは、Playストアに変更を送信することなく、Appflowのダッシュボードから直接ユーザーに変更をプッシュすることができます。Live Updateについてもっと知るためには<a href="https://ionic.io/docs/appflow/deploy/intro" target="_blank">こちら</a>にアクセスください。

:::note
Google PlayストアでアップデートされたAPKを受け入れるには、config.xmlファイルを編集してバージョンをあげて、上記の手順に従ってアプリをリリース用に再構築する必要があります。
:::
