---
title: ネイティブエラー
---

<head>
  <title>Native App Errors: How to Resolve Native Errors on Ionic Apps</title>
  <meta
    name="description"
    content="Review native app errors including code signing, Xcode build error 65, and clashing Google Play Services versions. Learn to resolve native errors on Ionic apps."
  />
</head>

## コードの署名エラー

```shell
Code Signing Error: Failed to create provisioning profile. The app ID "com.csform.ionic.yellow" cannot be registered to your development team. Change your bundle identifier to a unique string to try again. Code Signing Error: No profiles for 'com.csform.ionic.yellow' were found: Xcode couldn't find any iOS App Development provisioning profiles matching 'com.csform.ionic.yellow'. Code Signing Error: Code signing is required for product type 'Application' in SDK 'iOS 11.1'
```

iOS デバイスでアプリケーションを実行するには、プロビジョニングプロファイルが必要です。プロビジョニングプロファイルが作成されていない場合は、次の手順に従います:

1. **[Package ID](../reference/glossary.md#package-id) を設定します。**

   Capacitor の場合、`capacitor.config.json` ファイルを開き `appId` プロパティを修正します。

Cordova の場合、`config.xml`ファイルを開き、ルート要素`<widget>`の`id`属性を変更します。詳細については[Cordova のドキュメント](https://cordova.apache.org/docs/en/latest/config_ref/#widget)を参照してください。

2. **プロジェクトを<b>Xcode</b>で開きます。**

   Capacitor の場合、以下を実行し Xcode でアプリケーションを開いてください:

   ```shell
   $ ionic capacitor open ios
   ```

   Cordova の場合、Xcode を開きます。**ファイル（File）** &raquo; **開く（Open）** からアプリケーションを見つけます。アプリケーション内の `platforms/ios` ディレクトリを開きます。

3. **<b>プロジェクトナビゲータ</b>でプロジェクトのルートを選択してプロジェクトエディタを開きます。<b>識別情報（Identity）</b>セクションで、設定したパッケージ ID がバンドル識別子と一致していることを確認します。**

![Xcodeで表示されるiOSアプリのIdentityセクションには、表示名、バンドル識別子、バージョン、ビルドのフィールドがあります。](/img/running/ios-xcode-identity-setup.png 'Xcodeの識別情報セクション')

4. **同じプロジェクトエディタの<b>署名（Signing）</b>セクションで、<b>署名を自動管理（Automatically manage signing）</b>が有効になっていることを確認します。** その後、開発チームを選択します。開発チームを設定すると、Xcode はプロビジョニングと署名を自動的に準備しようとします。

![Xcodeで「署名を自動的に管理」を有効にし、開発チームが選択されている署名セクションを表示している。](/img/running/ios-xcode-signing-setup.png 'Xcodeの署名セクション')

## Xcode のビルドエラー 65

```shell
Error: Error code 65 for command: xcodebuild with args: -xcconfig,/Users/ionitron/projects/my-project/platforms/ios/cordova/build-debug.xcconfig,-workspace,SC project.xcworkspace,-scheme,SC project,-configuration,Debug,-sdk,iphonesimulator,-destination,platform=iOS Simulator,name=iPhone X,build,CONFIGURATION_BUILD_DIR=/Users/ionitron/projects/my-project/platforms/ios/build/emulator,SHARED_PRECOMPS_DIR=/Users/ionitron/projects/my-project/platforms/ios/build/sharedpch
```

このエラーは Xcode のエラーコードで、プロビジョニングの問題または古い cordova 依存関係が原因で発生する可能性があります。このエラーを修正するには、まず上記の手順でプロビジョニングプロファイルが生成されていることを確認したのち、[Xcode からアプリケーションを実行します](../developing/ios.md#running-with-xcode)。

もしそれでもエラーが解決しない場合は、次のコマンドを実行してください:

```shell
rm -rf node_modules
rm -rf platform
npm i
ionic cordova platform add ios
ionic cordova prepare ios
ionic cordova build ios --prod
```

Once these commands have been ran a fresh build can be done.

## Google Play Services のバージョンが衝突

```shell
Error: more than one library with package name com.google.android.gms
```

このエラーは、2 つの異なるプラグインが異なるバージョンの `Google Play Services` を使用しようとしたことが原因です。この問題を解決するには、バージョンが `7.1.0` 以上の `cordova` および バージョンが `6.3.0` 以上の `cordova-android` を実行していることを確認してください。最新の `cordova` をインストールするには次を実行してください:

```shell
npm install cordova@latest
```

また、`cordova-android` をアップデートするには次を実行してください:

```shell
cordova platform update android
```

`Google Play Services` に依存するプラグインをアップデートして、同じバージョンを使用できるようになりました。例えば、`pluginA` ではバージョン 11.0 を使用し、`pluginB` では バージョン 15.0 を使用する場合、`config.xml` ファイルでは以下のスニペットで同じバージョンを使用するように更新できます:

```xml
<plugin name="pluginA" spec="npm">
  <variable name="PLAY_SERVICES_VERSION" value="15.0.0"/>
</plugin>
<plugin name="pluginB" spec="npm">
  <variable name="PLAY_SERVICES_VERSION" value="15.0.0" />
</plugin>
```
