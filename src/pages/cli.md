---

---

# Ionic CLI

The Ionic command-line interface ([CLI](/docs/faq/glossary#cli)) は、Ionicアプリを開発する時に頼りになるツールです。

## Installation

Ionic CLI はnpmでグローバルにインストールできます:

```shell
$ npm install -g ionic
```

## Help

Ionic CLIでは `--help` フラグをつけることでコマンドのドキュメントを利用できます。

```shell
$ ionic <command> --help
```

<!-- TODO: image? -->

## Architecture

Ionic CLI は、[TypeScript](/docs/faq/glossary#typescript)と [Node.js](/docs/faq/glossary#node)で構築されています。Node 6+をサポートしていますが、最新のNode LTSが推奨です。Follow development on the open source <a href="https://github.com/ionic-team/ionic-cli" target="_blank">Github repository</a>.

## Troubleshooting

Ionic CLIの問題をトラブルシューティングするには、以下の方法が役立ちます:

- 最新バージョンのIonic CLIがインストールされていることを確認してください。 `npm install -g ionic@latest` で更新してください。
- 最新のNode LTSがインストールされていることを確認してください。 [Node & npm](/docs/installation/environment#node-npm) の環境設定をご覧ください。
- `--verbose` フラグをつけると、問題を絞り込むためのデバッグメッセージが表示されます。
- 接続の問題は、不適切に設定されたプロキシ設定が原因である可能性があります。必要なプロキシ設定を行うときは、 [Using a Proxy](/docs/cli/configuring#using-a-proxy) をご覧ください。
- グローバルなIonic CLIの設定ディレクトリは、すべてのプラットフォームで `~/.ionic` にあります。これは安全に削除することができ、Ionic CLIはそれを再読込します。しかし、すべての設定（ユーザセッションを含む）は失われます。ディレクトリの設定は [CLI environment variables](/docs/cli/configuration#environment-variables) をご覧ください。
