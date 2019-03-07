---
previousText: 'What is Ionic Framework'
previousUrl: '/docs/intro'
nextText: 'Packages & CDN'
nextUrl: '/docs/installation/cdn'
contributors:
  - rtpHarry
  - dwieeb
---

# CLIのインストール

Ionicアプリは、主にIonic CLI（[command-line-interface](/docs/faq/glossary#cli)）を利用して作成・開発します。Ionic CLIは、幅広い開発ツールと開発を手助けするオプションを提供している、Ionic teamが推奨しているインストール方法です。Ionic CLIは、アプリの実行や、Ionic Appflowといった他のサービスに接続などができる重要なツールです。

## Ionic CLIをインストール

先に進む前に、[Node.js](/docs/faq/glossary#node)と[npm](/docs/faq/glossary#npm)の最新バージョンがインストールされていることを確認してください。詳細については、[環境構築](/docs/installation/environment)をご覧ください。npmでIonic CLIをグローバルにインストールします。

```shell
$ npm install -g ionic
```

<blockquote>
  <p>`-g`のオプションは、グローバルインストールを意味します。Windowの場合は、コマンドプロンプトで実行することをお勧めします。Mac/Linuxの場合は、`sudo` コマンドをつけて実行してください。</p>
</blockquote>

## アプリケーションの起動

Ionicアプリを作成するには、スターターテンプレートを利用するか、まっさらな状態からつくるための`blank`テンプレートを利用して作成します。汎用的な3つのスターターテンプレートは、`blank`、`tabs`、`sidemenu`があります。`ionic start`コマンドで作成を開始できます。

```shell
$ ionic start myApp tabs
```

![start app thumbnails](/docs/assets/img/installation/start-app-thumbnails.png)


Ionicアプリのはじめ方をもっと知りたい方は、[「スタートガイド」](/docs/building/starting)を参照してください。

## アプリケーションを実行する

ほとんどのIonicアプリは、`ionic serve`コマンドを利用することによってブラウザですぐに利用することができます。

```shell
$ cd myApp
$ ionic serve
```

アプリケーションを実行するにはいくつかの方法がありますが、この方法ではじめることをおすすめします。デバイスとエミュレータでアプリケーションを開発してテストする方法については、[Running an App Guide](/docs/building/running)を参照してください。
