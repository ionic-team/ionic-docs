---
sidebar_label: CLI Installation
contributors:
  - rtpHarry
  - dwieeb
---

# CLIのインストール

Ionicアプリは、主にIonic CLI（[command-line](/docs/reference/glossary#cli)）を利用して作成・開発します。Ionic CLIは、幅広い開発ツールと開発を手助けするオプションを提供している、Ionic teamが推奨しているインストール方法です。Ionic CLIは、アプリの実行や、Appflowといった他のサービスに接続などができる重要なツールです。

<aside id="ionic-wizard">
  <div class="heading-group">
    <header>アプリウィザードを試してください</header>
    <p>アプリウィザードを使用して、Ionicプロジェクトを視覚的に生成します。テンプレート、カスタムカラー、アプリアイコン、JavaScriptフレームワークを選択して、ビルドをすばやく行います。</p>
  </div>
  <div>
    <a href="/start" class="wizard-button">ウィザードを開く <ion-icon name="arrow-forward-outline"/></a>
  </div>
</aside>

## Ionic CLIをインストール

続行する前に、コンピュータに [Node.js](/docs/reference/glossary#node) がインストールされているかを確認ください。[この説明で](/docs/intro/environment)でIonicをセットアップできる環境を説明しています。

npmを使って Ionic CLI をインストールします:

```shell
$ npm install -g @ionic/cli
```

Ionic CLIが以前にインストールされていた場合は、パッケージ名が変更されているため、アンインストールする必要があります。

```shell
$ npm uninstall -g ionic
$ npm install -g @ionic/cli

```

> `-g` オプションは、 _グローバルにインストール_ することを意味しています。パッケージをグローバルにインストールすると `EACCES` パーミッションエラーが起きる可能性があります。
> 管理権限なしでnpmがグローバルで動作するように設定することを検討してください。詳細については [Resolving Permission Errors](/docs/developing/tips#resolving-permission-errors) をご覧ください。

## アプリケーションの起動

Ionicアプリを作成するには、スターターテンプレートを利用するか、まっさらな状態からつくるための`blank`テンプレートを利用して作成します。汎用的な3つのスターターテンプレートは、`blank`、`tabs`、`sidemenu`があります。`ionic start`コマンドで作成を開始できます。

```shell
$ ionic start myApp tabs
```

![start app thumbnails](/img/installation/start-app-thumbnails.png)

Ionicアプリのはじめ方をもっと知りたい方は、[スタートガイド](/docs/developing/starting)を参照してください。

## アプリケーションを実行する

ほとんどのIonicアプリは、`ionic serve`コマンドを利用することによってブラウザですぐに利用することができます。

```shell
$ cd myApp
$ ionic serve
```

アプリケーションを実行するにはいくつかの方法がありますが、この方法ではじめることをおすすめします。デバイスとエミュレータでアプリケーションを開発してテストする方法については、[Running an App Guide](/docs/developing/previewing)を参照してください。

<!-- TODO
<style scoped>
  #ionic-wizard {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0;
    float: none;
    
    border-radius: 16px;
    padding: 32px 64px 32px 64px;

    margin-inline-start: -64px;
    margin-inline-end: -64px;

    background: #486fff url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iMTc2IiBmaWxsPSJub25lIiB2aWV3Qm94PSIxNyAwIDk2IDE3NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxjaXJjbGUgY3g9IjMyIiBjeT0iODgiIHI9IjY0IiBmaWxsPSIjNkM5REZGIiBvcGFjaXR5PSIuMyIvPgogICAgPGNpcmNsZSBjeD0iMzIiIGN5PSI4OCIgcj0iNTIiIGZpbGw9IiM2QzlERkYiIG9wYWNpdHk9Ii4zIi8+CiAgICA8Y2lyY2xlIGN4PSIzMiIgY3k9Ijg4IiByPSIzOCIgZmlsbD0iIzZDOURGRiIvPgogICAgPHBhdGggZD0iTTQ5LjUgODIuNzVoNS4yNWExLjc1IDEuNzUgMCAwMDAtMy41SDQ5LjVhMS43NSAxLjc1IDAgMDAwIDMuNXpNNDYuNDIgNzUuMzNhMS43NCAxLjc0IDAgMDAxLjIzLS41bDMuNzItMy43MmExLjc1IDEuNzUgMCAwMC0yLjQ4LTIuNDhsLTMuNzEgMy43MmExLjc1IDEuNzUgMCAwMDEuMjQgMi45OHpNMzkgNzIuMjVhMS43NSAxLjc1IDAgMDAxLjc1LTEuNzV2LTUuMjVhMS43NSAxLjc1IDAgMDAtMy41IDB2NS4yNUExLjc1IDEuNzUgMCAwMDM5IDcyLjI1ek0zMS41NiA3NS4zM2ExLjc1IDEuNzUgMCAwMDEuMjQtMi45OGwtMy43MS0zLjcyYTEuNzUgMS43NSAwIDEwLTIuNDggMi40OGwzLjcyIDMuNzFhMS43NCAxLjc0IDAgMDAxLjIzLjUxek01MC4xMyA5My45YTEuNzUgMS43NSAwIDAwMS4yNC0zbC0zLjcyLTMuN2ExLjc1IDEuNzUgMCAwMC0yLjQ3IDIuNDdsMy43MSAzLjcxYy4zMy4zMy43Ny41MSAxLjI0LjUxek0zNi4wNSA3Ni42YTIuODQgMi44NCAwIDAxNC4wMiAwbDMuMzMgMy4zM2EyLjg0IDIuODQgMCAwMTAgNC4wM2wtNi4yMyA2LjIzYS40NC40NCAwIDAxLS42MiAwbC02Ljc0LTYuNzRhLjQ0LjQ0IDAgMDEwLS42Mmw2LjI0LTYuMjJ6TTguMzQgMTA0LjNsMTguMzgtMTguMzhhLjQ0LjQ0IDAgMDEuNjIgMGw2Ljc0IDYuNzRhLjQ0LjQ0IDAgMDEwIC42MmwtMTguMzkgMTguMzhhMi44NCAyLjg0IDAgMDEtNC4wMiAwbC0zLjMzLTMuMzNhMi44NSAyLjg1IDAgMDEwLTQuMDJ6IiBmaWxsPSIjRDlGMUZGIi8+Cjwvc3ZnPgo=")
     left center no-repeat;
  }

  #ionic-wizard .heading-group {
    flex-basis: 420px;
  }

  #ionic-wizard .heading-group header {
    font-weight: bold;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    color: #fff;
  }
  #ionic-wizard .heading-group p {
    color: #fff;
    max-width: 620px;
    opacity: .8;
    margin-block-start: .5rem;
    line-height: 160%;
  }

  #ionic-wizard .wizard-button {
    display: inline-flex;
    align-items: center;
    border-radius: 8px;
    padding: 8px 12px;
    border: none;
    background: #6c9dff;

    transition: all .3s ease-out;

    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: .08em;
    white-space: nowrap;
    color: #fff;
  }

  #ionic-wizard .wizard-button:hover,
  #ionic-wizard .wizard-button:focus {
    background: #80aaff;
    transition: all 0.3s;
    text-decoration: none;
  }

  #ionic-wizard .wizard-button ion-icon {
    font-size: 16px;
    margin-left: 4px;
  }

</style>
-->
