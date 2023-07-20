---
sidebar_label: PWAとは?
title: Progressive Web Apps
---

<head>
  <title>Progressive Web Applications: PWAとは - Ionic Documentation</title>
  <meta
    name="description"
    content="What is a PWA? A Progressive Web Application uses modern web capabilities to deliver an app-like experience. Read our core concept documentation to learn more."
  />
</head>

<!-- TOC goes here -->

### The web...それよりもいいもの

Progressive Web App (PWA) は、最新の Web 機能を使用して、ユーザーにアプリのようなエクスペリエンスを提供する Web アプリです。
これらのアプリは、特定の要件（下記参照）を満たし、サーバーに展開され、URLからアクセスでき、検索エンジンにインデックスされます。

[Capacitor](https://capacitorjs.com)と連携して、すべてのユーザーに複数のデプロイ対象を提供することができます。
アプリをPWAとしてデプロイするだけでなく、ネイティブアプリとしてデプロイし、両方のチャネルを活用することができます。

Ionicでは、アプリストアへのリリースだけでなく、PWAとしてモバイルWebにデプロイすることも可能です。

### 要求されるもの

Progressive Web App と見なされるには、アプリが以下の要件を満たしている必要があります。

- プログレッシブ - ブラウザの種類に関係なく、すべてのユーザーに対して機能します。これは、プログレッシブ・エンハンスメントを中核として構築されているためです。

- レスポンシブ - デスクトップ、モバイル、タブレットなど、あらゆるフォームファクターに対応。

- 接続に依存しない - オフラインや低品質のネットワークでも動作するように、サービスワーカーが強化されています。

- アプリライク - アプリシェルモデルを使用し、アプリスタイルのナビゲーションとインタラクションを提供します。

- フレッシュ - サービスワーカーの更新プロセスにより、常に最新の情報を提供します。

- 安全 - HTTPS経由で提供され、盗聴を防止し、コンテンツが改ざんされていないことを確認します。

- 発見性 - W3C マニフェストとサービスワーカー登録により、「アプリケーション」として識別可能であり、検索エンジンに見つけてもらうことができます。

- 再エンゲージメント - プッシュ通知などの機能により、再エンゲージメントを容易にします。

- インストール可能 - アプリストアのような煩わしさがなく、ユーザーが最も便利だと思うアプリをホーム画面に置いておくことができます。

- リンク可能 - 複雑なインストールを必要とせず、URLで簡単に共有できます。

<em>
  <a href="https://addyosmani.com/blog/getting-started-with-progressive-web-apps/" target="_blank">
    Addy Osmani: Progressive web apps
  </a>
</em>

たくさんありますが、Ionicアプリの場合はいくつかのポイントに集約されます。

#### オフライン対応

アプリはオフラインで動作する必要があります。適切な「オフライン」メッセージの表示や、表示用にアプリデータをキャッシュすることなどです。

#### <a href="https://developer.mozilla.org/en-US/docs/Web/Manifest" target="_blank">Web App Manifest</a>

App Manifestファイルには、アプリに必要なリソースを記述する必要があります。これには、アプリの表示名、アイコン、スプラッシュ画面などが含まれます。index.html Manifest ファイルにリンクすると、ブラウザがそれを検出し、リソースを読み込むようになります。

#### <a href="https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API" target="_blank">Service Worker</a>

Service Workerについては、オフライン サポートの項でも触れましたが、本当は独自のセクションが必要です。Service Worker は、アプリのリソースをキャッシュするためのプログラム的な方法を提供します。JavaScript ファイルであれ、HTTP リクエストの JSON データであれ、です。プログラム的な API により、開発者はキャッシュをどのように処理するかを決定でき、他の選択肢よりもはるかに柔軟なエクスペリエンスを提供します。
