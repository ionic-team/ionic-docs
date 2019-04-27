---
previousText: 'Security'
previousUrl: '/docs/faq/security'
contributors:
  - rtpHarry
  - FdezRomero
  - brandyscarney
---

# 開発者向けのヒント

## 依存モジュールの更新

To update a [npm](https://www.npmjs.com/) dependency, run the following, where `<package-name>` is the package to update:

```shell
$ npm install &lt;package-name>@<version|latest&gt; --save
```

例えば、`@ionic/angular` パッケージを最新リリースのものに更新するには、以下を実行してください:

```shell
$ npm install @ionic/angular@latest --save
```

npm は最初に `package.lock.json` からパッケージのバージョンを読み込みにいきますので、パッケージを更新する際は CLI を利用することをおすすめします。

## エディタ

選ぶべきエディタがたくさんあります。

- [VSCode](https://code.visualstudio.com)
- [Atom](https://atom.io)
- [Webstorm](https://www.jetbrains.com/webstorm/)

VSCode は多くの機能やプラグインを含んでいるため強くおすすめします。

## デバッガの利用

`デバッガ` というキーワードはアプリケーションをデバッグするために利用されます。ほとんどのブラウザが`デバッガ`ステートメントに直面する時、 実行中の JavaScript の処理は停止され、ブラウザはデバッガをロードします。これはアプリケーションに"ブレークポイント"をセットするために使用されます。例えば、ある関数が正しい値を返さない時は、デバッガを使用してコードをステップ実行し、変数を調べることができます。

```javascript
function myBrokenFunction() {
  debugger;
  // do other stuff
}
```

When an app runs, it will pause at this function. From there, the developer tools can be used to run pieces of JavaScript, line by line, and inspect where exactly the function breaks.

## モードの変更

デフォルトでは、アプリケーションがブラウザで表示されると、Ionic は MD モードを適用します。しかし、Ionic コンポーネントはそれぞれのプラットフォームに応じて接続されるため、そのアプリケーションが iOS でどのように見えているか確認できると便利です。そのために、アプリケーションが起動しているURL に `?ionic:mode=ios` を追加します: `http://localhost:8100/?ionic:mode=ios<`

> しかし、どのプラットフォームが現在使用されているかをブラウザがどのように認識するか、ということは変わらないでしょう。プラットフォームはデバイスの検出とユーザーエージェントの検査によって決定されます。そのため、プラットフォームを変更するには、ユーザーエージェントを変更する必要があります。これを行うには、Chrome DevTools を開き、<kbd>Ctrl+Shift+i</kbd>(Mac では <kbd>Cmd+Option+I</kbd>) でデバイスのモードをオンに切り替えでください。

![別のモードのアプリケーション](/docs/assets/img/faq/tips/change-device-platform.png)

デバイスのドロップダウンからデバイスを選択すると viewport の大きさと同様に、ユーザーエージェントも変更されます。

## iOS シミュレータを使用する

iOS シミュレータは実際のデバイスに届く前にアプリケーションのテストとデバッグを可能にします。シミュレータを利用可能にする前に、[Xcode](https://developer.apple.com/xcode/download/)、アップルの IDE をインストールする必要があります。[Ionic CLI](/docs/cli) を用いて、シミュレータ上の現在のディレクトリでアプリケーションを実行可能にします:

```shell
$ ionic cordova emulate ios -lc
```

`-lc` フラグを渡すことでライブリロードを有効にし、かつログコンソールををターミナルに出力することができます。

また Xcode を利用することでエミュレータを起動し、アプリケーションをデバッグすることもできます。
Xcode を開き、`../path-to-app/platforms/ios/myApp.xcodeproj` を開きます。
アプリケーションが読み込まれると、コンソール出力とデバイスのログが Xcode の出力ウィンドウに表示されます。

## Genymotion Android エミュレーターを使用する

Android SDKには標準でエミュレータが実装されていますが、動作が遅くて応答しないことがあります。[Genymotion](https://www.genymotion.com) はより高速かつ、GPSやカメラなどのネイティブ機能へのアクセスも可能にする代替のエミュレーターです。

## リモートデバッグ - iOS と Safari

Safari は iOS デバイス上で実行されている Ionic アプリケーションと接続しながらデバッグするために使用できます。
はじめに、接続しているデバイス上で Web インスペクタを有効にする必要があります。
Web インスペクタは `設定 > Safari > 詳細` で見つけることができます。
次に、Mac の Safari に進み、`Safari > 環境設定 > 詳細` から **メニューバーに開発者メニューを表示** を有効にします。
接続されたデバイスが **開発** メニューに表示されます。
以上で、Safari の開発者ツールを用いてアプリケーションの調査とデバッグができます。

## リモートデバッグ - Android と Chrome

Chrome の DevTools は、`ionic serve` というコマンドを介してブラウザ上で実行している時、またはエミュレーターか実機でにデプロイされている時、アプリケーションのデバッグに使用できます。
エミュレーターや実機を調査するには、Chrome で `chrome://inspect` にアクセスし、実行中のアプリケーションをターゲットとして選択してください。

> メモ: 実機では、Chromeからデバッグするために開発者モードを有効にする必要があります。


## リモートデバッグ - VS Code プラグイン

VSCode には Cordova で作られたアプリケーションのデバッグ専用のプラグインがある。
[そのプラグイン](https://marketplace.visualstudio.com/items?itemName=vsmobile.cordova-tools) はデバイスと VSCode の Devtools の間にブリッジを生成し、エディタ内でデバッグを行えるようにします。
