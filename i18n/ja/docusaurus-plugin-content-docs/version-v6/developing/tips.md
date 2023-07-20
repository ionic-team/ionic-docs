---
title: 開発者向けのヒント
---

<head>
  <title>アプリ開発チップ: How to Resolve Permission Errors and Issues</title>
  <meta
    name="description"
    content="If errors occur, npm may need to be set up to operate without elevated permissions. Read our Ionic app Development Tips for more on resolving permission issues."
  />
</head>

## Permission Errors の解決

パッケージをグローバルにインストールすると、 `EACCES` パーミッションエラーが発生する可能性があります。このような場合は、管理者権限なしで動作するようにnpmを設定する必要があります。

:::note
`sudo` とnpmの併用は、さらなる問題を引き起こす可能性があるため、推奨されません。
:::

このガイドには、パーミッションの問題を解決するための2つのオプションがあります。詳細なドキュメントと追加オプションについては、[npm docs](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally) を参照してください。

### Option 1

権限の問題を回避する最善の方法は、 node version manager を使用してNodeJSとnpmを再インストールすることです。

このガイドでは、 [nvm](https://github.com/nvm-sh/nvm) のインストールと使用方法について説明します。完全なドキュメントについては、  [nvm docs](https://github.com/nvm-sh/nvm#installation-and-update) for full documentation. See the [npm docs](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#using-a-node-version-manager-to-install-nodejs-and-npm) を参照してください。Windowsの追加オプションと手順については、npmのドキュメントを参照してください。

1. nvmのインストール

   ```shell
   $ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
   ```

1. 新しい端末はnvmを使うようになります。確認するには、新しいターミナルを開き、次のコマンドを実行します。何かが表示されれば、インストールは成功です。

   ```shell
   $ command -v nvm
   ```

1. NodeJSの最新のLTSリリースをダウンロードしてインストールするには、次のコマンドを実行します:

   ```shell
   $ nvm install --lts
   ```

1. 新しくインストールしたNodeJSをデフォルト環境として設定します:

   ```shell
   $ nvm alias default lts/*
   ```

1. 新しい端末はnvmコントロールのNodeJSを使うようになりました:

   ```shell
   $ node -v  # will print the version installed above
   $ which npm  # will print a path somewhere within the ~/.nvm folder
   ```

グローバルパッケージが `~/.nvm` にインストールされます。 `sudo` なしで `npm` を使用している限り、パーミッションエラーは発生しません。

### Option 2

<small>
  <em>Windowsでは利用できません</em>
</small>

npmのディレクトリの所有者を現在のユーザに変更します:

```shell
$ sudo chown -R $(whoami) /usr/local/{lib/node_modules,bin,share}
$ sudo chown -R $(whoami) ~/.npm ~/.npmrc
```

これらのグローバルディレクトリは `root` が所有しなくなったため、 `sudo` を使用せずにパッケージをグローバルにインストールできます。

## 依存モジュールの更新

[npm](https://www.npmjs.com/) dependencyをアップデートするためには、`<package-name>` をアップデートしたいパッケージ名に変更して以下を実行します:

```shell
npm install <package-name>@<version|latest> --save
```

例えば、`@ionic/angular` パッケージを `最新` リリースのものに更新するには、以下を実行してください:

```shell
npm install @ionic/angular@latest --save
```

npm は最初に `package.lock.json` からパッケージのバージョンを読み込みにいきますので、パッケージを更新する際は CLI を利用することをおすすめします。

## エディタ

選択できるコードエディターはたくさんあります。ここに私たちのお気に入りのいくつかがあります：

- [Visual Studio Code](https://code.visualstudio.com): a popular and free text editor made by Microsoft
- [Atom](https://atom.io): a hackable text editor made by GitHub
- [WebStorm](https://www.jetbrains.com/webstorm/): a powerful non-free editor by JetBrains

## デバッガの利用

`デバッガ` というキーワードはアプリケーションをデバッグするために利用されます。ほとんどのブラウザが`デバッガ`ステートメントに直面する時、 実行中の JavaScript の処理は停止され、ブラウザはデバッガをロードします。これはアプリケーションに"ブレークポイント"をセットするために使用されます。

例えば、ある関数が正しい値を返さない時は、デバッガを使用してコードをステップ実行し、変数を調べることができます。

```javascript
function myBrokenFunction() {
  debugger;
  // do other stuff
}
```

アプリが起動すると、この機能で一時停止します。その後、開発者ツールを使用して、JavaScriptを1行ずつ実行し、関数が正確にどこで中断するかを調べることができます。

## モードの変更

デフォルトでは、アプリケーションがブラウザで表示されると、Ionic は MD モードを適用します。しかし、Ionic コンポーネントはそれぞれのプラットフォームに応じて接続されるため、そのアプリケーションが iOS でどのように見えているか確認できると便利です。そのために、アプリケーションが起動しているURL に `?ionic:mode=ios` を追加します。例えば、アプリが `8100` ポートで起動している場合は、URLはこうなります: `http://localhost:8100/?ionic:mode=ios`

:::note
しかし、どのプラットフォームが現在使用されているかをブラウザがどのように認識するか、ということは変わらないでしょう。プラットフォームはデバイスの検出とユーザーエージェントの検査によって決定されます。そのため、プラットフォームを変更するには、ユーザーエージェントを変更する必要があります。これを行うには、Chrome DevTools を開き、<kbd>Ctrl+Shift+i</kbd>(Mac では <kbd>Cmd+Option+I</kbd>) でデバイスのモードをオンに切り替えでください。デバイスモードの切り替えは、<kbd>Ctrl+Shift+M</kbd>(<kbd>Cmd+Option+M</kbd> on Mac)で行います。
:::

![別のモードのアプリケーション](/img/faq/tips/change-device-platform.png)

デバイスのドロップダウンからデバイスを選択すると viewport の大きさと同様に、ユーザーエージェントも変更されます。

## iOS シミュレータを使用する

iOS シミュレータは実際のデバイスに届く前にアプリケーションのテストとデバッグを可能にします。

シミュレータを利用可能にする前に、[Xcode](https://developer.apple.com/xcode/download/)、アップルの IDE をインストールする必要があります。

[Ionic CLI](../cli.md) を用いて、シミュレータ上の現在のディレクトリでアプリケーションを実行可能にします:

```shell
ionic cordova emulate ios -lc
```

`-lc` フラグを渡すことでライブリロードを有効にし、かつログコンソールををターミナルに出力することができます。

また Xcode を利用することでエミュレータを起動し、アプリケーションをデバッグすることもできます。

Xcode を開き、`../path-to-app/platforms/ios/myApp.xcodeproj` を開きます。

アプリケーションが読み込まれると、コンソール出力とデバイスのログが Xcode の出力ウィンドウに表示されます。

## Genymotion Android エミュレーターを使用する

Android SDKには標準のエミュレーターが付属していますが、速度が遅く、応答しない場合があります。

[Genymotion](https://www.genymotion.com) はより高速な代替エミュレータであり、GPSやカメラなどのネイティブ機能へのアクセスを許可します。
