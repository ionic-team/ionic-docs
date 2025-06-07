---
title: Ionic CLI
sidebar_label: 概要
---

<head>
  <title>Ionic CLI Framework: Command-Line Interface to Develop Apps</title>
  <meta
    name="description"
    content="Ionicのコマンドラインインターフェイス（CLI）は、Ionicアプリの開発に最適なツールです。npmでフレームワークをグローバルにインストールします。"
  />
</head>

The Ionic command-line interface ([CLI](/docs/reference/glossary#cli)) は、Ionic アプリを開発する時に頼りになるツールです。

## インストール

Ionic CLI は npm でグローバルにインストールできます:

```shell
npm install -g @ionic/cli
```

## Help

Ionic CLI では `--help` フラグをつけることでコマンドのドキュメントを利用できます。

```shell
$ ionic --help
$ ionic <command> --help
$ ionic <command> <subcommand> --help
```

:::note
プロジェクトディレクトリで `ionic <command> --help` を必ず実行してください。

コマンドの中には `ionic serve` のように、React と Angular のように、プロジェクトのタイプに応じたヘルプが表示されるものがあります。
:::

<!-- TODO: image? -->

## 構成

Ionic CLI は、[TypeScript](/docs/reference/glossary#typescript)と [Node.js](/docs/reference/glossary#node)で構築されています。Node 10.3+をサポートしていますが、最新の Node LTS が推奨です。Follow development on the open source <a href="https://github.com/ionic-team/ionic-cli" target="_blank">Github repository</a>.

## トラブルシューティング

Ionic CLI の問題をトラブルシューティングするには、以下の方法が役立ちます:

- Ionic CLIの最新バージョンがインストールされていることを確認します。 `ionic --version` を実行して、インストールされているIonic CLIのバージョンを取得します。Ionic CLIのバージョンはIonic Frameworkのバージョンとは関係ありません。
- 最新のNode LTSがインストールされていることを確認する。 [Node & npm](/docs/intro/environment#node-npm) 環境設定を参照してください。
- `verbose` フラグはデバッグメッセージを表示し、問題を絞り込むことができます。
- 接続の問題は、プロキシの設定が適切でないことが原因かもしれません。リクエストのプロキシ設定については、[プロキシを使う](/docs/cli/using-a-proxy)を参照してください。
- グローバルIonic CLI設定ディレクトリは、すべてのプラットフォームで `~/.ionic` です。このディレクトリは安全に削除でき、Ionic CLIが再作成しますが、すべての設定（ユーザーセッションを含む）は失われます。このディレクトリを[CLI環境変数](/docs/cli/configuration#environment-variables)で設定します。