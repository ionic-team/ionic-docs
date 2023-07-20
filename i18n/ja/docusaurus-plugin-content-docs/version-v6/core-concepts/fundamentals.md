---
title: 基本的な考え方
sidebar_label: 基本的な考え方
---

<head>
  <title>App Development Core Concepts and Tools - Ionic Framework API</title>
  <meta
    name="description"
    content="For those new to Ionic app development, a high-level understanding of the core concepts and tools behind the project helps. Read to learn more about Ionic API."
  />
</head>

Ionic アプリの開発に慣れていない人には、Ionic プロジェクトの背景にある基本的な哲学、概念、およびツールについて知ることが、理解を深めることに役立ちます。複雑なトピックに入る前に、Ionic Framework とは何か、そしてそれがどのように機能するかについての基本を説明します。

## UI コンポーネント

Ionic Framework は、アプリケーションの構成要素として機能する、再利用可能な UI コンポーネントのライブラリです。Ionic のコンポーネントは、HTML、CSS、JavaScript を利用した[Web 標準](../reference/glossary.md#web-standards)に基づいて構築されています。コンポーネントは事前に構築されていますが、高度にカスタマイズできるようになるように設計されており、アプリで各コンポーネントを独自に作成できるため、アプリごとにオリジナルの外観を持たせることができます。具体的には、Ionic コンポーネントは、アプリ全体で外観をグローバルに変更するように簡単にテーマを設定できます。外観のカスタマイズの詳細については、[Theming](../theming/basics.md)を参照してください。

## スタイルの適用

スタイルの適用は、アプリ開発者が複数のプラットフォームで共通したベースとなるコードを使用できる Ionic Framework に組み込まれている機能です。すべての Ionic コンポーネントは、自動的にアプリケーションが実行されているプラットフォームに外観を合わせます。たとえば、iPhone や iPad などの Apple デバイスは、Apple 独自の<a href="https://www.apple.com/ios" target="_blank">iOS デザイン</a>を使用します。同様に、Android デバイスは、<a href="https://material.io/guidelines/" target="_blank">Material Design</a>と呼ばれる Google のデザインを使用します。

プラットフォーム間で微妙なデザイン変更を行うことで、ユーザーに使い慣れたアプリの UX を提供します。Apple の App Store からダウンロードした Ionic アプリは iOS テーマを使用し、Android の Play Store からダウンロードした Ionic アプリは Material Design テーマを取得します。ブラウザから Progressive Web Apps（PWA）として表示アプリを表示する場合、Ionic はデフォルトで Material Design テーマを使用します。さらに、特定のシナリオで使用するプラットフォームを決定することはすべて設定可能です。スタイルの適用についてのさらなる情報は[Theming](../theming/basics.md)をご覧ください。

## ナビゲーション

従来の Web アプリケーションは「線形」のナビゲーションを使用します。つまりユーザーは、ページに移動して、戻るボタンを押すと戻ることができます。
この例としては、ユーザが、Wikipedia のようなページで、ブラウザの履歴から「進む」「戻る」をつかっているのが挙げられます。

これとは対照的に、モバイルアプリはしばしば平行な「非線形」ナビゲーションを利用します。たとえば、タブのついたインタフェースでは、タブごとにナビゲーションスタックを個別に設定できるため、ユーザがタブ間を移動したり切り替えたりするときにユーザが自分の場所を失うことはありません。

Ionic アプリは、このモバイルナビゲーションのアプローチを採用しており、Web 開発者が慣れ親しんでいるブラウザスタイルのナビゲーション概念を維持しながら、ネストすることもできる並列ナビゲーション履歴をサポートしています。

Angular と`@ionic/angular`で構築するアプリは、<a href="https://angular.jp/guide/router" target="_blank">Angular Router</a>を使用することをお勧めします。これは Angular と Ionic 4 の組み合わせから使うことができます。

## Native アクセス

Web テクノロジで構築されたアプリ（Ionic アプリなど）の素晴らしい点は、デスクトップコンピュータ、携帯電話、タブレット、自動車、冷蔵庫など、ほとんどすべてのプラットフォームで実行できることです。Ionic アプリ用のベースとなるコードは、Web 標準とこれらのプラットフォーム間で共有される共通の API に基づいているため、多くのプラットフォームで機能します。

Ionic の最も一般的な使用例の 1 つは、 <a href="https://www.apple.com/ios/app-store/" target="_blank">App Store</a> と <a href="https://play.google.com/" target="_blank">Play Store</a> の両方からダウンロードできるアプリを作成することです。iOS と Android の両方のソフトウェア開発キット（SDK）は、完全なネイティブ SDK アクセスを可能にしながら、あらゆる Ionic アプリをレンダリングする [Web Views](webview.md) を提供します。

<a href="https://capacitorjs.com/" target="_blank">
  Capacitor
</a> や <a href="https://cordova.apache.org/" target="_blank">
  Cordova
</a> などのプロジェクトは、IonicアプリにネイティブSDKへのアクセスを与えるためによく使われています。つまり、開発者は一般的なWeb開発ツールを使ってアプリを素早く構築することができ、かつデバイスの加速度センサー、カメラ、GPSなどのネイティブ機能にアクセスすることができるのです。

## テーマ

基本的に、Ionic Framework は<a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">CSS</a>を使用して構築されているので、<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables" target="_blank">CSS プロパティ (variables)</a>の柔軟性を利用することができます。これにより、Web 標準に準拠しながら見栄えのするアプリを設計することがとても簡単になります。デフォルトでもすばらしいものがつくれるように、私たちはテーマカラーのデフォルトセットを提供しますが、ブランド、会社、または希望のカラーパレットに合うデザインにするためにそれらを上書きすることをお勧めします。アプリケーションの背景色からテキストの色まで、すべてカスタマイズ可能です。アプリのテーマに関する詳細は[Theming](../theming/basics.md)をご覧ください。
