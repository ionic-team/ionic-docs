---
title: 環境設定
---

<head>
  <title>環境設定 | IonicアプリをはじめるためのNode と NPM 環境</title>
  <meta
    name="description"
    content="To get started with Ionic Framework, the only requirement is a Node & npm environment. Learn what environment setup is required for your Ionic apps."
  />
</head>

Ionic Framework をはじめるためには、[Node と npm](#node--npm)がインストールされている環境が必要です。

もちろん、エディタも必要でしょう。[Visual Studio Code](https://code.visualstudio.com/) をおすすめします。Visual Studio Code は
Microsoft 製の無料でとてもパワフルなテキストエディタです。

## ターミナル

:::note
Ionic の開発の多くはコマンドラインに慣れていることが必要です。コマンドラインに慣れていない場合は、[コマンドライン初心者向け](https://ionicframework.com/blog/new-to-the-command-line/)のブログ記事で簡単な紹介を参照してください。
:::

一般的に、OS に最初からついているターミナルの使用をお勧めします。多くのサードパーティ端末は Ionic で正常に動作しますが、サポートされていない場合があります。

- Windows では、 **コマンドプロンプト** と **PowerShell** がサポートされています。<a href="https://docs.microsoft.com/en-us/windows/wsl/faq" target="_blank">WSL</a>は Ionic で動作することがわかっていますが、サポートされていない可能性があります。
- macOS では、組み込みの **ターミナル** アプリがサポートされています。

Git Bash（<a href="https://git-scm.com" target="_blank">git-scm.com</a>）は TTY 対話機能をサポートしておらず、Ionic はサポートしていません。

## Node と npm {/* #node-npm */}

モダンな JavaScript プロジェクトのほとんどのツールは[Node.js](../reference/glossary.md#node)で作られています。[ダウンロードページ](https://nodejs.org/en/download/)には、すべてのプラットフォームのインストールパッケージが事前に用意されています。互換性を確保するために LTS バージョンを選択することをお勧めします。

Node には JavaScript パッケージマネージャーである [npm](../reference/glossary.md#npm) がバンドルされています。

インストールできているかを確認するためには、新しいターミナルウィンドウを開いて以下を実行します。

```shell
$ node --version
$ npm --version
```

:::note
macOS でグローバルパッケージを`npm`を使ってインストールすると、権限エラーが一般的に発生します。`EACCES`エラーが発生した場合は、[権限エラーの解決](../developing/tips.md#resolving-permission-errors)を参照してください。
:::

## Git

必須ではありませんが、バージョン管理システムの[Git](../reference/glossary.md#git)の利用を強くお勧めします。

Git は [GitHub](https://github.com/) のような Git ホスティングサービスを利用することが多いですが、これらのサービスは最初にサインアップが必要となります。これらの Git ホスティングサービスのチュートリアルをご確認ください:

- GitHub: [Set up Git](https://help.github.com/en/articles/set-up-git)
- GitLab: [Installing Git](https://docs.gitlab.com/ee/topics/git/how_to_install_git)
- Bitbucket: [Install Git](https://www.atlassian.com/git/tutorials/install-git)

それ以外の場合は、 [公式のインストール手順](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) をご確認ください。コマンドラインユーティリティは、[download page](https://git-scm.com/downloads) からダウンロードできます。.

インストールできているかを確認するためには、新しいターミナルウィンドウを開いて以下を実行します。

```shell
git --version
```

### Git GUI

Git はコマンドラインユーティリティですが、利用可能な [GUI クライアント](https://git-scm.com/downloads/guis/) は多数あります。[GitHub Desktop](https://desktop.github.com/)を推奨しており、GitHub とうまく連携します。
