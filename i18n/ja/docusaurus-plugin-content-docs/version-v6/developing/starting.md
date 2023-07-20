---
title: アプリをはじめよう
sidebar_label: はじめ方
---

<head>
  <title>アプリをはじめよう: スタートガイド | Ionic Documentation</title>
  <meta
    name="description"
    content="Starting a new Ionic app is incredibly simple. Learn how to run the ionic start command from the command line and let the CLI handle the rest."
  />
</head>

新しいIonicアプリの起動は、驚くほど簡単です。コマンドラインから `ionic start` コマンドを実行すれば、あとはCLIが処理してくれる。

```shell-session
$ ionic start

Every great app needs a name! 😍

Please enter the full name of your app. You can change this at any time.
To bypass this prompt next time, supply name,
the first argument to ionic start.

? Project name: █
```

Ionic CLIでは、新しいプロジェクトの名前と使用するテンプレートの入力を求めるプロンプトが表示されます。これらの詳細は、コマンドの引数として提供することができます。

```shell-session
$ ionic start myApp tabs
```

ここでは、 `myApp` がプロジェクト名、 `tabs` がスターターテンプレート、そしてプロジェクトの種類は `angular` です。

利用できるプロジェクトテンプレートは `tabs` だけではありません。すべてのプロジェクトタイプの間で、3つのテンプレートが利用可能です。

- `tabs`: タブベースのレイアウト
- `sidemenu`: サイドメニューレイアウト
- `blank`: 単一ページで構成された空のプロジェクト

以下のコマンドで利用可能なすべてのテンプレートを見ることができます。

```shell-session
$ ionic start --list
```

これらのテンプレートは、どんなアプリにも素晴らしい出発点を提供し、コードベースを拡張するためのすべてのベストプラクティスを含んでいます。
