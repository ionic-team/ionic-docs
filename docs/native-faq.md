---
sidebar_label: よくある質問
slug: /native/faq
---

# Ionic Native FAQ

## Cordova の管理に関するヒント

**1) プラグインの追加・更新・削除は[Ionic CLI](cli.md)を利用する**

プラグインの追加・更新・削除には、[Ionic CLI](cli.md) を使用します。Cordovaコマンドの前に`ionic`を使用すると、より良い経験と追加機能が得られます（`cordova build ios`の代わりに`ionic cordova build ios`）。

**2) プラグインを削除し、再追加することによるアップグレード**

```shell
$ ionic cordova plugin remove cordova-plugin-camera
$ ionic cordova plugin add cordova-plugin-camera
```

**3) 明示的なバージョンのインストール**

`npm install`で常に同じバージョンのプラグインをインストールするようにするには、バージョン番号を指定します。

```shell
ionic cordova plugin add cordova-plugin-camera@4.3.2
```

**4) 既存のIonicプロジェクトでCordovaを復活させる**

プロジェクトに新しい開発者を追加するときに便利です。`ionic cordova prepare` は `package.json` と `config.xml` からプラットフォームとプラグインをリストアします。インストールされるバージョンは、 `package.json` や `config.xml` に含まれていれば、そこから取得されます。競合する場合は、`package.json` が `config.xml` よりも優先されます。

**5) Ionic CLIコマンドでCordovaの問題をトラブルシュートする**

- `ionic doctor list`: [よくある問題](cli/commands/doctor-list.md) を検出し、修正するためのステップを提案します。
- `ionic repair`: [すべての依存関係を削除し、再生成する](cli/commands/repair.md)

## バージョン番号の理解

あるIonic Nativeプラグインについて、Ionic Native（TypeScriptコード）とCordova（ネイティブコード）のバージョン番号は一致しません。Ionic Nativeのバージョン番号は `package.json` に記載されています。

```json
"@awesome-cordova-plugins/camera": "^5.3.0",
```

Cordovaプラグインのバージョン番号は `package.json` と `config.xml` の両方で確認することができます。

```json
"cordova-plugin-camera": "4.0.3",
```

```xml
<plugin name="cordova-plugin-camera" spec="4.0.3" />
```

ネイティブの新機能やバグフィックスを確認する場合は、CordovaプラグインのGitHubページ自体で新バージョンを探します（例えばこちらは [Camera one](https://github.com/apache/cordova-plugin-camera) です）。

Ionic Nativeの新しいリリース（Cordovaプラグインによって最近追加されたメソッドの公開などが含まれる場合があります）を確認するには、 [こちら](https://github.com/ionic-team/ionic-native/releases) を参照してください。

## ビルドに失敗したときのトラブルシューティング

ビルドエラーを調査するために、以下のリソースをチェックしてください。

- Google と [StackOverflow](https://stackoverflow.com)。多くの問題がオンラインで文書化されています。
- [Ionic Community Ionic Forum](https://forum.ionicframework.com) で質問する (Ionic Native カテゴリを参照)
- Ionic Customer Success [ナレッジベース](https://ionic.zendesk.com) を参照してください。

### Cordova プラグインのコンフリクト

プラグインが同じネイティブ依存関係を共有するとき、あるいは複数のプラグインが一度に同じネイティブコードにアクセスしようとするとき、プラグイン同士が競合することがあります。たとえば、Google Play Services のバージョン (Google Maps は GPS v24.2 を使用していますが、Firebase は GPS v27.1 を必要としています) のような一般的なライブラリです。これらのプラグインを定期的に更新しておくと、この問題を解決できます。

もうひとつのコツは、アプリが特定の機能ごとにひとつのプラグインしか使わないようにすることです（例：Push Notifications）。

## 推奨されるアップグレード戦略

最もIonicが安定しているアプリは、特にネイティブ層が定期的にアップデートされています。ネイティブプラグインを最新の状態に保つことで、プロジェクトに最新のセキュリティ修正、新機能、パフォーマンス向上がもたらされます。

プロジェクトのプラグインは一度にひとつずつ、理想的には別々のコードブランチでアップデートしてください。これにより、問題が発生する可能性のある領域を減らすことができます。プロジェクトのすべてを一度にアップデートすると、問題がどこから発生しているのかがわからなくなることがあります。

### いつアップデートすればよいですか？

- 新しい機能/バグがリリースされたときです。npm outdated` を実行すると、利用可能なアップデートのリストが表示されます。
- 新しいメジャーバージョンがリリースされたとき。Cordova blog](https://cordova.apache.org/blog/) や [Ionic blog](https://ionicframework.com/blog/) などの公式ブログでアナウンスやニュースが公開されます。
- アップデートの内容: 新機能なのか、それとも重要なセキュリティ修正なのかを見極める。
- タイミング。チームのプロジェクト目標に対して、どのような位置づけにあるか？
