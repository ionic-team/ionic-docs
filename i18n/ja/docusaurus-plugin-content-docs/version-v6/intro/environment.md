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

Ionic Frameworkをはじめるためには、[Node と npm](#node--npm)がインストールされている環境が必要です。

もちろん、エディタも必要でしょう。[Visual Studio Code](https://code.visualstudio.com/) をおすすめします。Visual Studio Codeは
Microsoft製の無料でとてもパワフルなテキストエディタです。

## ターミナル

:::note
Ionic開発の多くは、コマンドラインを利用する必要があります。コマンドラインに慣れていない場合は、[このブログ](https://ionicframework.com/blog/new-to-the-command-line/)で簡単な概要を確認してください。
:::

一般的に、OSに最初からついているターミナルの使用をお勧めします。多くのサードパーティ端末はIonicで正常に動作しますが、サポートされていない場合があります。

- Windowsでは、 **コマンドプロンプト** と **PowerShell** がサポートされています。<a href="https://docs.microsoft.com/en-us/windows/wsl/faq" target="_blank">WSL</a>はIonicで動作することがわかっていますが、サポートされていない可能性があります。
- macOSでは、組み込みの **ターミナル** アプリがサポートされています。

Git Bash（<a href="https://git-scm.com" target="_blank">git-scm.com</a>）はTTY対話機能をサポートしておらず、Ionicはサポートしていません。

## Node と npm

モダンなJavaScriptプロジェクトのほとんどのツールは[Node.js](../reference/glossary.md#node)で作られています。[ダウンロードページ](https://nodejs.org/en/download/)には、すべてのプラットフォームのインストールパッケージが事前に用意されています。互換性を確保するためにLTSバージョンを選択することをお勧めします。

NodeにはJavaScriptパッケージマネージャーである [npm](../reference/glossary.md#npm) がバンドルされています。

インストールできているかを確認するためには、新しいターミナルウィンドウを開いて以下を実行します。

```shell
$ node --version
$ npm --version
```

:::note
`npm` のグローバルパッケージをインストールする時、パーミッションエラーが起きがちです。 もし `EACCES` エラーがでたら、 [Resolving Permission Errors](/docs/developing/tips#resolving-permission-errors) を確認ください。
:::

## Git

必須ではありませんが、バージョン管理システムの[Git](../reference/glossary.md#git)の利用を強くお勧めします。

Gitは [GitHub](https://github.com/) のようなGitホスティングサービスを利用することが多いですが、これらのサービスは最初にサインアップが必要となります。これらのGitホスティングサービスのチュートリアルをご確認ください:

- GitHub: [Set up Git](https://help.github.com/en/articles/set-up-git)
- GitLab: [Installing Git](https://docs.gitlab.com/ee/topics/git/how_to_install_git)
- Bitbucket: [Install Git](https://www.atlassian.com/git/tutorials/install-git)

それ以外の場合は、 [公式のインストール手順](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) をご確認ください。コマンドラインユーティリティは、[download page](https://git-scm.com/downloads) からダウンロードできます。.

インストールできているかを確認するためには、新しいターミナルウィンドウを開いて以下を実行します。

```shell
git --version
```

### Git GUI

Gitはコマンドラインユーティリティですが、利用可能な [GUIクライアント](https://git-scm.com/downloads/guis/) は多数あります。[GitHub Desktop](https://desktop.github.com/)を推奨しており、GitHubとうまく連携します。
