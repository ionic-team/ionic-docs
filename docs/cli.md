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

The Ionic command-line interface ([CLI](/docs/reference/glossary#cli)) は、Ionicアプリを開発する時に頼りになるツールです。

## インストール

Ionic CLI はnpmでグローバルにインストールできます:

```shell
$ npm install -g @ionic/cli
```

## Help

Ionic CLIでは `--help` フラグをつけることでコマンドのドキュメントを利用できます。

```shell
$ ionic --help
$ ionic <command> --help
$ ionic <command> <subcommand> --help
```

:::note
Be sure to run `ionic <command> --help` in your project directory.

For some commands, such as `ionic serve`, the help documentation is contextual to the type of your project, e.g. React vs Angular.
:::

<!-- TODO: image? -->

## 構成

Ionic CLI は、[TypeScript](/docs/reference/glossary#typescript)と [Node.js](/docs/reference/glossary#node)で構築されています。Node 10.3+をサポートしていますが、最新のNode LTSが推奨です。Follow development on the open source <a href="https://github.com/ionic-team/ionic-cli" target="_blank">Github repository</a>.

## トラブルシューティング

Ionic CLIの問題をトラブルシューティングするには、以下の方法が役立ちます:

- Make sure the latest version of the Ionic CLI is installed. Get the installed version by running `ionic --version`.
- Make sure the latest Node LTS is installed. See [Node & npm](/docs/intro/environment#node-npm) environment setup.
- The `--verbose` flag prints debugging messages, which may narrow down the issue.
- Connection issues may be due to improperly configured proxy settings. See [Using a Proxy](/docs/cli/using-a-proxy) to configure request proxying.
- The global Ionic CLI configuration directory is `~/.ionic` on all platforms. It can safely be deleted and the Ionic CLI will repopulate it, but all configuration (including user sessions) will be lost. Configure this directory with [CLI environment variables](/docs/cli/configuration#environment-variables).
