---
title: Ionic CLI
sidebar_label: 概要
---

<head>
  <title>Ionic CLI Framework: Command-Line Interface to Develop Apps</title>
  <meta
    name="description"
    content="The Ionic command-line interface (CLI) is the go-to tool for developing Ionic apps. Install our framework globally with npm."
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

- 最新バージョンの Ionic CLI がインストールされていることを確認します。インストールされているバージョンは、`ionic --version`を実行することで取得できます。
- 最新の Node LTS がインストールされていることを確認します。[Node & npm](/docs/intro/environment#node-npm) environment setup を参照してください。
- `verbose` フラグは、デバッグメッセージを表示し、問題を絞り込むことができます。
- 接続の問題は、プロキシの設定が適切でないことが原因である可能性があります。リクエストプロキシの設定については、[Using a Proxy](/docs/cli/using-a-proxy) を参照してください。
- Ionic CLI のグローバルな設定ディレクトリは、すべてのプラットフォームで `~/.ionic` です。このディレクトリは安全に削除でき、Ionic CLI が再投入しますが、すべての設定（ユーザーセッションを含む）は失われます。このディレクトリは[CLI 環境変数](/docs/cli/configuration#environment-variables)で設定します。
