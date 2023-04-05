---
title: 用語集
---

<head>
  <title>API Glossary: Terminology and Definitions | Ionic Framework</title>
  <meta
    name="description"
    content="Ionic is the platform for web developers. View our API Glossary for app-building terminology and keyword definitions to better understand Ionic's capabilities."
  />
</head>

<div id="what-is">

<section id="android-sdk">
  <a href="#android-sdk">
    <h3>Android SDK</h3>
  </a>
  <p>
    The{' '}
    <a href="http://developer.android.com/sdk/index.html" target="_blank">
      Android SDK
    </a>{' '}
    は、Google の Android Platform の開発をする開発者向けに作られたソフトウェア開発キットです。
    Android アプリケーションのビルド、テスト、デバッグ用のツールが含まれています。
  </p>
</section>

<section id="android-studio">
  <a href="#android-studio">
    <h3>Android Studio</h3>
  </a>
  <p>
    <a href="https://developer.android.com/studio/" target="_blank">
      Android Studio
    </a>{' '}
    は、ネイティブ Android アプリ開発のための正式な統合開発環境（IDE）である。
  </p>
</section>

<section id="autoprefixer">
  <a href="#autoprefixer">
    <h3>Autoprefixer</h3>
  </a>
  <p>
    <a href="https://github.com/postcss/autoprefixer" target="_blank">
      Autoprefixer
    </a>{' '}
    は、ベンダー固有のプレフィックスを手書きの Sass/CSS コードに追加するツールです。
    これにより、作成する標準化された CSS ルールが、サポートするすべてのブラウザに確実に適用されます。
    たとえば、autoprefixer を使用すると、さまざまなブラウザで使用されるすべての flexbox 構文を知る必要がなく、
    <code>display: flex;</code> と記述するだけで済み、かつ自動的に正しくCSSに差し込まれます。
  </p>
</section>

<section id="bundling">
  <a href="#bundling">
    <h3>Bundling</h3>
  </a>
  <p>
    バンドルとは、アプリケーションの依存関係（自分で書いたコードと任意にインストールされている npm モジュール）を取得し、
    コンパイル/トランスパイルすることで一つのファイルに落とし込むプロセスです。
  </p>
</section>

<section id="capacitor">
  <a href="#capacitor">
    <h3>Capacitor</h3>
  </a>
  <p>
    <a href="https://capacitorjs.com/" target="_blank">
      Capacitor
    </a>{' '}
    は、web ベースのアプリケーションをネイティブの iOS、Android、Electron、web上で実行できるようにするオープンソースの
    クロスプラットフォームアプリランタイムです。
    「ネイティブのプログレッシブ Web アプリケーション」を示すこれらのアプリはとても参考になり、
    それらは従来のハイブリッドアプリの考え方を超えた次の進化を表しています。Capacitor は Ionic 社によって作られ、活発に開発/サポートされています。
  </p>
</section>

<section id="cli">
  <a href="#cli">
    <h3>CLI</h3>
  </a>
  <p>
    CLI、または <strong>C</strong>ommand-<strong>L</strong>ine <strong>I</strong>nterface はプログラムと互いに作用し合う、
    テキストベースのインターフェースです。Mac ユーザの共通のコマンドラインアプリケーションは
    Terminal アプリケーションであり、Windows ユーザによく使われるものはコマンドプロンプトです。
    Ionic コミュニティでよく使われるものは、次に示すこの{' '}
    <a href="https://ionicframework.com/docs/v1/cli/">Ionic's CLI</a> というターミナルです。Ionic's CLI は、
    アプリケーションのプロダクションビルドの生成や、開発用のサーバーの起動、
    <a href="https://ionic.io/appflow" target="_blank">Ionic の商用サービス</a>
    へのアクセス{' '}など、様々なことに使われています
    。
  </p>
</section>

<section id="commonjs">
  <a href="#commonjs">
    <h3>CommonJS</h3>
  </a>
  <p>
    <a href="https://webpack.github.io/docs/commonjs.html" target="_blank">
      CommonJS
    </a>{' '}
    は JavaScript の標準化団体が定義した API の集合です。彼らは JavaScript のモジュールと
    パッケージの標準を定義しました。
  </p>
</section>

<section id="cordova">
  <a href="#cordova">
    <h3>Cordova</h3>
  </a>
  <p>
    <a href="https://cordova.apache.org" target="_blank">
      Apache Cordova
    </a>{' '}
    は、標準の HTML/CSS/JS を本格的なネイティブアプリケーションに変換する、オープンソースのモバイルアプリケーション開発用フレームワークです。
    実機のカメラや加速度計などのネイティブの機能にアクセスする JavaScript API を提供します。
    Cordova は、ウェブアプリケーションを iOS、Android、Windows Phone にパッケージングするために必要なビルドツールを含みます。
  </p>
</section>

<section id="cors">
  <a href="#cors">
    <h3>CORS</h3>
  </a>
  <p>
    <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS" target="_blank">
      CORS
    </a>{' '}
    (Cross-Origin Resource Sharing) は、サーバがクライアントから Web 資産へのアクセスを制御するメカニズムです。 See the{' '}
    <a href="../troubleshooting/cors">CORS FAQs</a> for more information.
  </p>
</section>

<section id="css-variables">
  <a href="#css-variables">
    <h3>CSS Variables</h3>
  </a>
  <p>
    You may be familiar with variables from Sass.{' '}
    <a href="https://developers.google.com/web/updates/2016/02/css-variables-why-should-you-care" target="_blank">
      CSS Variables
    </a>{' '}
    enable the same functionality but are built into the browser. CSS Variables are available in all evergreen browsers.
  </p>
</section>

<section id="decorators">
  <a href="#decorators">
    <h3>Decorators</h3>
  </a>
  <p>
    デコレータは、関数を返す式です。既存の関数を使用して、その動作を拡張できます。
    TypeScript では、<i>クラス</i> や <i>パラメータ</i> を装飾することもできます。
    <strong>クラス</strong> を装飾すると、そのコンストラクタの動作がラップおよび拡張されます。
    つまり、デコレータはコンストラクタが呼び出されるといくつかの機能を追加し、独自のコンストラクタを返します。
    <strong>パラメータ</strong> を修飾すると、
    そのパラメータに渡される引数がラップされます。
    デコレータは、引数がメソッドに渡されると機能を追加し、独自の引数を返します。
  </p>
</section>

<section id="es5">
  <a href="#es5">
    <h3>ES5</h3>
  </a>
  <p>
    ES5 とは EcmaScript 5th Edition のことです。
    簡単に言えば、ES5 は今日開発者が最もよく知っている JavaScript のバージョンのことです。
  </p>
</section>

<section id="es2015-es6">
  <a href="#es2015-es6">
    <h3>ES2015/ES6</h3>
  </a>
  <p>
    このバージョンの JavaScript には、クラス、モジュール、イテレーター、Promise など、
    広範囲の新機能が導入されています。Evergreen のブラウザ(Chrome、Safari、Firefox、Edge)は
    ES6 を完全にサポートしていますが、古いブラウザで ES6 の機能を使うには、<a href="#babel">Babel</a> や
    <a href="#typescript">TypeScript</a> のようなツールが ES6 のコードを ES5 に<a href="#transpiler">変換</a>する必要があります。
  </p>
</section>

<section id="es2016-es7">
  <a href="#es2016-es7">
    <h3>ES2016/ES7</h3>
  </a>
  <p>
    このバージョンの JavaScript は、<code>Array.includes</code> や
    指数演算子を含む多くの新機能を言語に追加した。このバージョンのJavaScriptは、すべてのEvergreenのブラウザ(Chrome、Safari、Firefox、Edge)で
    完全にサポートされています。
  </p>
</section>

<section id="es2017-es8">
  <a href="#es2017-es8">
    <h3>ES2017/ES8</h3>
  </a>
  <p>
    このバージョンの JavaScript は最新の標準です。これは新しい公式規格になる前の最終段階にある。
    この仕様には、Async/Await(既に全ての Evergreen のブラウザ上で可)と共有メモリ/アトミックが含まれています。
  </p>
</section>

<section id="genymotion">
  <a href="#genymotion">
    <h3>Genymotion</h3>
  </a>
  <p>
    Genymotion はサードパーティーの Android エミュレータです。
    非常に高速で、Android 上でアプリを素早くテストするのに便利だ。
    詳しくは、Genymotion の<a href="../developing/tips#using-genymotion-android">リソースのセクション</a>を参照してください。
  </p>
</section>

<section id="git">
  <a href="#git">
    <h3>Git</h3>
  </a>
  <p>
    <a href="https://git-scm.com/" target="_blank">
      Git
    </a>{' '}
    は、コードを管理するための分散バージョン管理システムです。これにより、開発チームはコードの競合を引き起こすことなく、
    同じプロジェクトのコードに貢献できます。
  </p>
</section>

<section id="gulp">
  <a href="#gulp">
    <h3>Gulp</h3>
  </a>
  <p>
    <a href="http://gulpjs.com/" target="_blank">
      Gulp
    </a>{' '}
    は、アプリケーションをビルドするためのタスクを実行するために使用されるツールです。一般的なビルドタスクには、{' '}
    <a href="#es2015-es6">ES6</a> から <a href="#es5">ES5</a>, <a href="#sass">Sass</a> から CSSへの変換、
    コードの縮小、ファイルの連結などがあります。
  </p>
</section>

<section id="es-modules">
  <a href="#es-modules">
    <h3>ES Modules</h3>
  </a>
  <p>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import" target="_blank">
      ES Modules
    </a>{' '}
    はモジュールの概念を JavaScript にそのまま持ち込んだものになります。
    モジュールでは、クラスと変数はグローバルスコープ内にないため、使用するには明示的にプロジェクトにインポートする必要があります。
    これにより、コードがどこから来ているのかを理解しやすくなり、機能のモジュール化と区分化が進みます。
  </p>
</section>

<section id="ionicons">
  <a href="#ionicons">
    <h3>Ionicons</h3>
  </a>
  <p>
    <a href="https://ionic.io/ionicons/" target="_blank">
      Ionicons
    </a>{' '}
    は Ionic社によって作成・利用されているオープンソースのアイコンのセットです。
    1:1 で iOS とマテリアルデザインのアイコンと、よく使われるソーシャル/アプリケーションのアイコンを含みます。
    Ionicons はデフォルトで Ionic ディストリビューションに含まれますが、任意のプロジェクトでも使うことが出来ます。
  </p>
</section>

<section id="karma">
  <a href="#karma">
    <h3>Karma</h3>
  </a>
  <p>
    <a href="https://karma-runner.github.io/latest/index.html" target="_blank">
      Karma
    </a>{' '}
    は、実際にブラウザ上でアプリケーションのテストを実行するテストランナーです。任意のテストフレームワークで書かれたテストケースを、
    実際にブラウザで実行します。Karma はもともと Angular 1 用に書かれたものです。
  </p>
</section>

<section id="module">
  <a href="#module">
    <h3>Module</h3>
  </a>
  <p>
    JavaScript のモジュールは、小さく独立しており、再利用可能なピースか互いに分離したコードであり、
    グローバルスコープです。
  </p>
</section>

<section id="monorepo">
  <a href="#monorepo">
    <h3>Monorepo</h3>
  </a>
  <p>
    A <strong>monorepo</strong> は複数のプロジェクトを持つ単一のgit リポジトリです。利点としては、よりシンプルな構成、
    ツールと依存関係の共有、チームメイトとのより良いコラボレーションが挙げられます。
  </p>
</section>

<section id="livereload">
  <a href="#livereload">
    <h3>Live Reload</h3>
  </a>
  <p>
    <strong>Live Reload</strong> (or <strong>live-reload</strong>) は、アプリケーションの変更を検出すると、
    自動的にブラウザまたは{' '} <a href="../core-concepts/webview">Web View</a> をリロードするツールです。場合によっては、ウィンドウ全体をリロードしなくても、
    アプリケーションの一部を置き換えることができます。ライブリロード には実行中の開発サーバーが必要なので、Web View にはデプロイされたファイルを単に読むのではなく、URLをロードする必要があるため、別のデバイスでライブリロードを使用するのは難しいかもしれません。詳しくは{' '}
    <a href="../cli/livereload">Live Reload docs</a> を御覧ください。
  </p>
</section>

<section id="node">
  <a href="#node">
    <h3>Node</h3>
  </a>
  <p>
    <a href="https://nodejs.org/" target="_blank">
      Node
    </a>{' '}
    は、サーバサイドで JavaScript を書くことができるランタイム環境です。
    加えて、Node は Web サービスに使用されるだけでなく、<a href="#cli">Ionic CLI</a>などの開発者ツールの構築にもよく使用されます。
  </p>
</section>

<section id="npm">
  <a href="#npm">
    <h3>npm</h3>
  </a>
  <p>
    <a href="https://www.npmjs.com/" target="_blank">
      npm
    </a>{' '}
    は <a href="#node">node</a> のパッケージマネージャです。これにより、開発者はノードモジュールをインストール、
    共有、およびパッケージ化できます。Ionic は npm からいくつかの依存関係と一緒にインストールすることができます。
  </p>
</section>

<section id="observable">
  <a href="#observable">
    <h3>Observable</h3>
  </a>
  <p>
    Observable はイベントを発生(または通知)させるオブジェクトです。
    オブザーバは、これらのイベントを監視し、イベントが受信されたときに何かを実行するオブジェクトです。
    これらが一緒になって、非同期プログラミングに使用できるパターンを作成します。
  </p>
</section>

<section id="package-id">
  <a href="#package-id">
    <h3>Package ID</h3>
  </a>
  <p>
    Apple 社が <strong>Bundle ID</strong> と呼び、Android 社が <strong>Application ID</strong> と呼ぶ
    <strong>Package ID</strong> は、App Store/Play Store に公開されたアプリを識別するために使用されます。
    これは
    <a href="https://en.wikipedia.org/wiki/Reverse_domain_name_notation" target="_blank">
      逆 DNS 表記
    </a>
    でフォーマットされた文字列です。
  </p>
</section>

<section id="polyfill">
  <a href="#polyfill">
    <h3>Polyfill</h3>
  </a>
  <p>
    A{' '}
    <a href="https://remysharp.com/2010/10/08/what-is-a-polyfill" target="_blank">
      polyfill
    </a>{' '}
    は、ブラウザに機能を追加し、ブラウザの違いを標準化する少しのコードです。これは <a href="#shim">shim</a> と似ていますが、
    shim に独自の API がある場合には、ブラウザに実装されていることを期待する API として polyfill を使用します。
  </p>
</section>

<section id="protractor">
  <a href="#protractor">
    <h3>Protractor</h3>
  </a>
  <p>
    <a href="https://angular.github.io/protractor/#/" target="_blank">
      Protractor
    </a>{' '}
     Angular チームが開発したテストフレームワークです。Protractor は、エンドツーエンドのテストのために、
     Karma のようなテストランナーと一緒に使うことができます。テストランナーを使用すると、コードの品質を高速かつプログラム的に検証できます。
  </p>
</section>

<section id="sass">
  <a href="#sass">
    <h3>Sass</h3>
  </a>
  <p>
    Sass は CSS にコンパイルされるスタイルシート言語で、Ionicで使用されています。
    Sass は CSS に似ています: {' '}
    <a href="http://sass-lang.com/documentation/file.SASS_REFERENCE.html#variables_" target="_blank">
      変数
    </a>
    , <a href="http://sass-lang.com/documentation/file.SASS_REFERENCE.html#mixins" target="_blank">
      mixins
    </a>, and <a href="http://sass-lang.com/documentation/file.SASS_REFERENCE.html#_10" target="_blank">
      loops
    </a>.
  </p>
</section>

<section id="scoped">
  <a href="#scoped">
    <h3>Scoped Encapsulation</h3>
  </a>
  <p>
    A component that uses scoped encapsulation will automatically scope its CSS by appending each of the styles with a
    data attribute at run time. Overriding scoped selectors in CSS requires a{' '}
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity" target="_blank">
      higher specificity
    </a>{' '}
    selector. Scoped components can also be styled using{' '}
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables" target="_blank">
      CSS Custom Properties
    </a>
    .
  </p>
</section>

<section id="shadow">
  <a href="#shadow">
    <h3>Shadow DOM</h3>
  </a>
  <p>
    <a href="https://developers.google.com/web/fundamentals/web-components/shadowdom" target="_blank">
      Shadow DOM
    </a>{' '}
    is a native browser solution for DOM and style encapsulation of a component. It shields the component from its
    surrounding environment. To externally style internal elements of a Shadow DOM component you must use{' '}
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables" target="_blank">
      CSS Custom Properties
    </a>{' '}
    or{' '}
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part" target="_blank">
      CSS Shadow Parts
    </a>
    .
  </p>
</section>

<section id="shim">
  <a href="#shim">
    <h3>Shim</h3>
  </a>
  <p>
    Shim は、ブラウザ間で API を正規化するコードです。
    Shim は、エンドユーザーからブラウザ固有の実装を隠すような独自の API を持つことができます。
  </p>
</section>

<section id="transpiler">
  <a href="#transpiler">
    <h3>Transpiler</h3>
  </a>
  <p>
    トランスパイル は、実行前にコードをある言語から別の言語に変換するプロセスです。一般的に、トランスパイルは高級言語を別の高級言語に変換します。
    Ionic Framework の最も一般的な{' '}
    <em>トランスパイル</em>は、<a href="#es2015-es6">ES2015/ES6</a>
    (<a href="#typescript">TypeScript</a>) から <a href="#es5">ES5</a>(従来のJavaScript)への変換です。
  </p>
</section>

<section id="typescript">
  <a href="#typescript">
    <h3>TypeScript</h3>
  </a>
  <p>
    <a href="http://www.typescriptlang.org" target="_blank">
      TypeScript
    </a>{' '}
    は JavaScript のスーパーセットであり、{' '}
    <a href="http://www.typescriptlang.org/Handbook#basic-types" target="_blank">
      型宣言
    </a>{' '}
    and{' '}
    <a href="http://www.typescriptlang.org/Handbook#interfaces" target="_blank">
      インターフェース
    </a>
    などの多くの機能を追加した JavaScript を提供することを意味します。Ionic は TypeScript で構築されていますが、Ionic アプリの構築において TypeScript の使用は完全にオプショナルです。
  </p>
</section>

<section id="unit-tests">
  <a href="#unit-tests">
    <h3>Unit Tests</h3>
  </a>
  <p>
    ユニットテストとその実行は、小さなコードをテストして、それらが期待どおりに動作するかどうかを確認する方法です。
    ユニットテストのフレームワークには、Jasmine、Mocha、QUnit など、数多く存在します。
  </p>
</section>

<section id="webpack">
  <a href="#webpack">
    <h3>Webpack</h3>
  </a>
  <p>
    <a href="https://webpack.github.io/" target="_blank">
      Webpack
    </a>{' '}
    は、JavaScript モジュールとその他のアセットを一緒にバンドルします。
    これを使用して、必要なときにのみ読み込まれる単一の、または複数の「チャンク」を作成できます。
    Webpack を使うと、多くのファイルや依存関係を1つのファイルか、他のタイプにまとめることができます。
  </p>
</section>

<section id="web-standards">
  <a href="#web-standards">
    <h3>Web Standards</h3>
  </a>
  <p>
    The{' '}
    <a href="https://www.w3.org/" target="_blank">
      World Wide Web Consortium
    </a>{' '}
     (W3C) は Web の標準化団体です。業界のリーダーと一般市民が協力して {' '}
     <a href="https://www.w3.org/standards/" target="_blank">
       Web 標準
    </a>を開発します。Web 標準とは、Web プラットフォームを定義するプロトコル、仕様、および技術のセットです。
  </p>
</section>

<section id="xcode">
  <a href="#xcode">
    <h3>Xcode</h3>
  </a>
  <p>
    <a href="https://developer.apple.com/xcode/" target="_blank">
      Xcode
    </a>{' '}
    は Apple 社のオペレーティングシステム(macOS、iOS、watchOS、tvOS) 上でソフトウェア開発を行うための Apple IDE(統合開発環境)であり、
    他の言語やプラットフォーム用の拡張機能を備えています。
    is an Apple IDE (integrated development environment) for software development on Apple operating systems (macOS,
    iOS, watchOS and tvOS), with extensions available for other languages and platforms.
  </p>
</section>

</div>
