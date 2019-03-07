---
previousText: 'Layout'
previousUrl: '/docs/layout/structure'
nextText: 'Platform Styles'
nextUrl: '/docs/theming/platform-styles'
contributors:
  - brandyscarney
---

# Themingの基本

Ionic Frameworkは、さまざまなプラットフォームの標準デザインに準拠しながら、白紙の状態からブランディングに合わせて簡単にカスタマイズおよび変更できるように構築されています。IonicアプリのThemingは今まで以上に簡単です。フレームワークはCSSで構築されているため、事前に用意されているデフォルトスタイルは簡単に変更や修正をすることができます。


## 配色

Ionicには、多くのコンポーネントの配色を変更するために使用できる9つのデフォルトカラーがあります。 それぞれの配色は、 `shade` と `tint` を含む複数のプロパティを持つコレクションであり、Ionic全体で利用されます。

配色を変更するときは、関連するすべてのプロパティを設定することが重要です。[Color Generator](/docs/theming/color-generator) を使えば、これは簡単に設定できますし、必要に応じてこれらを手動で書き込むこともできます。Ionicの配色についての詳細は [Advanced Colors](/docs/theming/advanced#colors) をご覧ください。

<color-accordion></color-accordion>


## プラットフォームの標準

Ionicのコンポーネントは、アプリケーションが実行されているプラ​​ットフォームに基づいて外観と動作を調整します。私たちはこれを <strong>Platformの継続性</strong> と呼んでいます。これにより、開発者は複数のプラットフォームにおいて同じコードベースでアプリケーションを構築することができますが、それでもそれらはプラットフォームにおける「ネイティブ」に見えます。

Ionicは、2つの **modes** をもっており、これらはプラットフォーム: `ios` と `md` に基づいてコンポーネントの外観がカスタマイズされます。各プラットフォームにはデフォルトモードがありますが、簡単に変更できます。プラットフォームに基づいてアプリケーションをカスタマイズする方法の詳細については、[Platform Styles](/docs/theming/platform-styles) をご覧ください。


## CSS変数

すべてのIonicコンポーネントは、<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables" target="_blank">CSSプロパティ（変数）</a>を使ってテーマ化されています。CSS変数は、動的な値を静的なCSSで利用することができます。これは今まではSassのようなCSSプリプロセッサを必要としていたものです。アプリケーションの外観は、[Ionic Variables](/docs/theming/css-variables#ionic-variables)のいずれかの値を変更することで簡単に変更できます。


## ブランディング

Ionicは、ブランディングや配色にあったテーマとなるアプリケーションの配色を提供します。デフォルトのテーマは明るい背景を使用しますが、背景色からテキストの色まですべてカスタマイズ可能です。ブランディングの詳細については、[Advanced Theming](/docs/theming/advanced) をご覧ください。
