---
title: Ionicパッケージ
sidebar_label: パッケージ & CDN
---

<head>
  <title>Ionic Framework Packages: CDN, Angular, Vue, and React</title>
  <meta
    name="description"
    content="View our different packages that can be used to quickly start using Ionic Framework or Ionicons CDN in a test environment, Angular, Vue, React, or none at all."
  />
</head>

Ionicは、テスト環境、Angular、その他のフレームワーク、またはVanilla JSといったすべての状況で、Ionic Frameworkを使い始めるために使用できるさまざまなパッケージを提供しています。

## Ionic Framework CDN

Ionicフレームワークは、[Plunker](https://plnkr.co/)、[Codepen](https://codepen.io)、またはその他のオンラインコードエディタですばやくテストするために、CDNから組み込むことができます。。

CDNからフレームワークにアクセスするには、 [jsdelivr](https://www.jsdelivr.com/) を使用することをお勧めします。最新バージョンを入手するためには HTMLファイルの `<head>`  要素、もしくはオンラインコードエディタの呼び出しコードに、次のコードを追加します。

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css" />
```

これにより、フレームワークをインストールしなくても、すべてのIonic Frameworkのコアコンポーネントを使用することができます。CSSバンドルには、すべてのIonic [Global Stylesheets](../layout/global-stylesheets) が含まれます。

:::note
これはAngularや他のフレームワークをインストールしません。これにより、フレームワークなしでIonic Frameworkのコアコンポーネントを使用できます。
:::

## Ionic + Angular

AngularプロジェクトでIonic Frameworkを使用する場合は、 [npm](../reference/glossary.md#npm) から最新の `@ionic/angular` をインストールしてください。これによって、すべてのIonic Frameworkコンポーネントと、Angularのサービスおよび機能を使うことができます。

```shell
npm install @ionic/angular@latest --save
```

新しいIonic Frameworkのリリースがあるたびに、最新バージョンの機能と修正を入手するために [バージョン](../reference/versioning.md) を更新する必要があります。最新のバージョンは [npmを使ったアップデート](../developing/tips.md#updating-dependencies) から取得することができます。

Ionicを既存のAngularプロジェクトに追加するには、Angular CLIの `ng add` 機能を使用します。

```shell
ng add @ionic/angular
```

これにより、`@ionic/angular` に必要なパッケージと、必要なスタイルが追加されます。

## Ionic + React

Ionicを既存のReactプロジェクトに追加するには、 `@ionic/react` および `@ionic/react-router` パッケージをインストールします。

```shell
$ npm install @ionic/react
$ npm install @ionic/react-router
```

### CSS

必要なCSSをReactプロジェクトに含めるには、ルートアプリコンポーネントに以下を追加します。

```javascript
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
```

## Ionic + Vue

既存のVueプロジェクトにIonic Frameworkを追加するには、 `@ionic/vue` と `@ionic/vue-router` パッケージをインストールします。

```shell
npm install @ionic/vue @ionic/vue-router
```

その後、Vueアプリに`IonicVue`プラグインをインストールする必要があります。

**main.js**

```javascript
import { IonicVue } from '@ionic/vue';

import App from './App.vue';
import router from './router';

const app = createApp(App).use(IonicVue).use(router);

router.isReady().then(() => {
  app.mount('#app');
});
```

`router.isReady()`が解決したら、必ずアプリをマウントしてください。

### ルーティング

Vueアプリでルーティングを設定する場合、`vue-router`ではなく、`@ionic/vue-router`から依存関係をインポートする必要があります。

**router/index.js**

```javascript
import { createRouter, createWebHistory } from '@ionic/vue-router';

const routes = [
  // routes go here
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
```

### CSS

Vueプロジェクトで必要なCSSをimportするには、`main.js` ファイルに以下を追加します。

```javascript
/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';
```

ここからは、Ionic Frameworkでの開発方法について、 [Ionic Vue Quickstart Guide](https://ionicframework.com/docs/vue/quickstart) でご紹介しています。

## Ionicons CDN

IoniconsはデフォルトでIonic Frameworkに同梱されているので、Ionicを使用している場合はインストールは不要です。Ionic Frameworkを使用せずにIoniconsを使用するためには、ページの終わりの近くにある `</body>` の閉じタグの直前に以下の `<script>` タグを配置します。

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/ionicons/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/ionicons/dist/ionicons/ionicons.js"></script>
```

:::note
アイコンの使い方については [Ionicons usage](https://ionic.io/ionicons/usage) をご覧ください。
:::
