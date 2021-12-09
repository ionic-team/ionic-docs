---
title: Ionicのインストール
sidebar_label: CLIインストール
---

import AppWizard from '@components/page/intro/AppWizard';

<head>
  <title>How to Install The Ionic Framework CLI to Build Mobile Apps</title>
  <meta
    name="description"
    content="The Ionic CLI is the preferred method of installation—offering a wide range of dev tools and help options. Learn how to install Ionic and begin building apps."
  />
</head>

Ionicアプリは、主にIonic CLI（[command-line](../reference/glossary.md#cli)）を利用して作成・開発します。Ionic CLIは、幅広い開発ツールと開発を手助けするオプションを提供している、Ionic teamが推奨しているインストール方法です。Ionic CLIは、アプリの実行や、Appflowといった他のサービスに接続などができる重要なツールです。

<AppWizard />

## Ionic CLIをインストール

続行する前に、コンピュータに [Node.js](../reference/glossary.md#node) がインストールされているかを確認ください。[この説明で](environment.md)でIonicをセットアップできる環境を説明しています。

npmを使って Ionic CLI をインストールします:

```shell
$ npm install -g @ionic/cli
```

Ionic CLIが以前にインストールされていた場合は、パッケージ名が変更されているため、アンインストールする必要があります。

```shell
$ npm uninstall -g ionic
$ npm install -g @ionic/cli

```

:::note
`-g` オプションは、 _グローバルにインストール_ することを意味しています。パッケージをグローバルにインストールすると `EACCES` パーミッションエラーが起きる可能性があります。
管理権限なしでnpmがグローバルで動作するように設定することを検討してください。詳細については [Resolving Permission Errors](../developing/tips.md#resolving-permission-errors) をご覧ください。
:::

## アプリケーションの起動

Ionicアプリを作成するには、スターターテンプレートを利用するか、まっさらな状態からつくるための`blank`テンプレートを利用して作成します。汎用的な3つのスターターテンプレートは、`blank`、`tabs`、`sidemenu`があります。`ionic start`コマンドで作成を開始できます。

```shell
$ ionic start
```

![start app thumbnails](/img/installation/start-app-thumbnails.png)

Ionicアプリのはじめ方をもっと知りたい方は、[スタートガイド](../developing/starting.md)を参照してください。

## アプリケーションを実行する

ほとんどのIonicアプリは、`ionic serve`コマンドを利用することによってブラウザですぐに利用することができます。

```shell
$ cd myApp
$ ionic serve
```

There are a number of other ways to run an app, it's recommended to start with this workflow. To develop and test apps on devices and emulators, see the [Running an App Guide](../developing/previewing.md).
