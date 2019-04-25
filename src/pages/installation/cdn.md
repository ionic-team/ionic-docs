---
previousText: 'Ionic CLI'
previousUrl: '/docs/installation/cli'
nextText: 'Environment Setup'
nextUrl: '/docs/installation/environment'
contributors:
  - brandyscarney
  - rtpHarry
---

# Ionic Packages

Ionicは、テスト環境、Angular、その他のフレームワーク、またはVanilla JSといったすべての状況で、Ionic Frameworkを使い始めるために使用できるさまざまなパッケージを提供しています。

## Ionic Framework CDN

イオンフレームワークは、[Plunker](https://plnkr.co/)、[Codepen](https://codepen.io)、またはその他のオンラインコードエディタですばやくテストするために、CDNから組み込むことができます。。

CDNからフレームワークにアクセスするには、[unpkg](https://unpkg.com)を使用することをお勧めします。最新バージョンを入手するためにはに HTMLファイルの `<head>`  要素、もしくはオンラインコードエディタの呼び出しコードに、次のコードを追加します。

```html
<script src="https://unpkg.com/@ionic/core@latest/dist/ionic.js"></script>
<link href="https://unpkg.com/@ionic/core@latest/css/ionic.bundle.css" rel="stylesheet">
```

これにより、フレームワークをインストールしなくても、すべてのIonic Frameworkのコアコンポーネントを使用することができます。CSSバンドルには、すべてのIonic [Global Stylesheets](../layout/global-stylesheets) が含まれます。

> これはAngularや他のフレームワークをインストールしません。これにより、フレームワークなしでIonic Frameworkのコアコンポーネントを使用できます。


## Angular + Ionic Framework

AngularプロジェクトでIonic Frameworkを使用する場合は、 [npm](/docs/faq/glossary#npm) から最新の `@ionic/angular` をインストールしてください。これによって、すべてのIonic Frameworkコンポーネントと、Angularのサービスおよび機能を使うことができます。

```shell
$ npm install @ionic/angular@latest --save
```

新しいIonic Frameworkのリリースがあるたびに、最新バージョンの機能と修正を入手するために [version](/docs/intro/versioning) を更新する必要があります。


### CSS

グローバルのスタイルシートファイルを作成し、それを [Angular workspace config](https://angular.io/guide/workspace-config) の `styles` のオブジェクトに追加します。そのファイルに次のインポートを追加します:

```css
/* Core CSS required for Ionic components to work properly */
@import "~@ionic/angular/css/core.css";

/* Basic CSS for apps built with Ionic */
@import "~@ionic/angular/css/normalize.css";
@import "~@ionic/angular/css/structure.css";
@import "~@ionic/angular/css/typography.css";

/* Optional CSS utils that can be commented out */
@import "~@ionic/angular/css/padding.css";
@import "~@ionic/angular/css/float-elements.css";
@import "~@ionic/angular/css/text-alignment.css";
@import "~@ionic/angular/css/text-transformation.css";
@import "~@ionic/angular/css/flex-utils.css";
@import "~@ionic/angular/css/display.css";
```

これらの各ファイルに含まれているスタイルについては、 [Global Stylesheets](../layout/global-stylesheets) を参照してください。


## Stencil + Ionic Framework

StencilのプロジェクトでIonic Frameworkを使用する場合は、 [npm](/docs/faq/glossary#npm) から、`@ionic/core` の最新のパッケージをインストールしてください。これは、すべてのIonic Frameworkコンポーネントを内包しています。

```shell
$ npm install @ionic/core@latest --save
```

### JS

`@ionic/core` をアプリのrootファイルでimportしてください:

```typescript
import '@ionic/core';
```

### CSS

グローバルのスタイルシートファイルを作成し、 [Stencil Config](https://stenciljs.com/docs/config) の `config` オブジェクトに以下を追記ください。

```javascript
exports.config = {
  // ...

  globalStyle: 'src/global.css'

  // ...
};
```

そのファイルに次のインポートを追加します:

```css
/* Core CSS required for Ionic components to work properly */
@import "~@ionic/core/css/core.css";

/* Basic CSS for apps built with Ionic */
@import "~@ionic/core/css/normalize.css";
@import "~@ionic/core/css/structure.css";
@import "~@ionic/core/css/typography.css";

/* Optional CSS utils that can be commented out */
@import "~@ionic/core/css/padding.css";
@import "~@ionic/core/css/float-elements.css";
@import "~@ionic/core/css/text-alignment.css";
@import "~@ionic/core/css/text-transformation.css";
@import "~@ionic/core/css/flex-utils.css";
@import "~@ionic/core/css/display.css";
```

これらの各ファイルに含まれているスタイルについては、 [Global Stylesheets](../layout/global-stylesheets) を参照してください。


## Ionicons CDN

IoniconsはデフォルトでIonic Frameworkに同梱されているので、Ionicを使用している場合はインストールは不要です。Ionic Frameworkを使用せずにIoniconsを使用するためには、ページの終わりの近くにある `</body>` の閉じタグの直前に以下の `<script>` タグを配置します。

```html
<script src="https://unpkg.com/ionicons@4.0.0/dist/ionicons.js"></script>
```

> アイコンの使い方については [Ionicons usage](https://ionicons.com/usage) をご覧ください。
