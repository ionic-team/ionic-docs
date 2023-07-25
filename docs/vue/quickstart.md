---
title: Ionic Vueクイックスタート
sidebar_label: クイックスタート
---

<head>
  <title>Vue QuickStart Global Component for Generating Ionic Vue Apps</title>
  <meta
    name="description"
    content="Our QuickStart guide covers the basics of both Vue and Ionic Framework global components to get apps up and running. Read how to easily generate Ionic Vue apps."
  />
</head>

## Ionic Framework とは

まず、ここに来たばかりの人を歓迎します！Ionic Framework は、 iOS, Android, Electron, Web 上で動作するアプリを構築するための、無償でオープンソースのコンポーネントライブラリです。使い慣れたテクノロジ(HTML、CSS、JavaScript)を使用してアプリケーションを一度作成したら、任意のプラットフォームに展開することができます。

UI コンポーネントに加えて、Ionic Framework は新しいアプリを作るためのコマンドラインツールを提供し、サポートしている様々なプラットフォームにデプロイすることができます。

このガイドでは、Ionic Framework 特有の機能を含め、Vue と Ionic Framework の基本について説明します。Vue に精通している方は、ガイドを楽しみ、Ionic Framework について新しいことを学んでください。どちらにも詳しくない方はご安心ください!このガイドでは、基本的なことを説明し、アプリケーションを起動して実行するのに十分な情報を提供します。

## Ionic CLI を使ったプロジェクト新規作成

はじめに、Ionic CLI の最新版をインストールしましょう。

```shell
npm install -g @ionic/cli@latest
```

これによって使えるようになった、グローバルコマンド `ionic` によって、Ionic Framework と他の依存関係を持つ Vue プロジェクトを作成することができます。新しいプロジェクトを作成するには、次のコマンドを実行します。

```shell
ionic start myApp blank --type vue
cd myApp
```

これで、 `ionic serve` を実行することによって、プロジェクトをブラウザで実行することができます。

## TypeScript と JavaScript のどちらで構築するかを選べます

私たちは TypeScript が大好きで、スケールさせるアプリを構築するための素晴らしいツールだと確信しています。とはいえ、Vue コミュニティがいかにシンプルさを重視しているかは、ツールや言語などでわかっています。実際、そもそも Vue に興味を持ったのはそのおかげかもしれません。シンプルに開始し、必要に応じてスケールアップします。

したがって、TypeScript の代わりに JavaScript を使うことができます。Ionic Vue アプリケーションを生成したら、次の手順を実行してください。

1. TypeScript の依存を削除:

```shell
npm uninstall --save typescript @types/jest @typescript-eslint/eslint-plugin @typescript-eslint/parser @vue/cli-plugin-typescript @vue/eslint-config-typescript vue-tsc
```

2. Change all `.ts` files to `.js`. In a blank Ionic Vue app, this should only be `src/router/index.ts` and `src/main.ts`. If you're using tests, also change the extension of files in the `tests` directory.

3. In `index.html`, change the imported `<script>` file from `/src/main.ts` to `/src/main.js`.

4. Remove `@vue/typescript/recommended` and `@typescript-eslint/no-explicit-any: ‘off’, `from `.eslintrc.js`.

5. Remove `Array<RouteRecordRaw>` and the import of `RouteRecordRaw` from `src/router/index.js`.

6. Delete the `src/shims-vue.d.ts` file if it exists. This is only needed when using the Vue CLI.

7. Remove `lang="ts"` from the `script` tags in any of your Vue components that have them. In a blank Ionic Vue app, this should only be `src/App.vue` and `src/views/HomePage.vue`.

8. Delete the `tsconfig.json` file.

9. In package.json, change the build script from `"build": "vue-tsc && vite build"` to `"build": "vite build"`

10. Install terser `npm i -D terser`.

## Vue コンポーネントの確認

アプリケーションのベースは `src` ディレクトリにあり、メインのエントリポイントは `main.ts` になります。エディタでプロジェクトを開き、`main.ts` を確認すると、次のように表示されます:

```ts
import { createApp } from 'vue';
import { IonicVue } from '@ionic/vue';

import App from './App.vue';
import router from './router';

const app = createApp(App).use(IonicVue).use(router);

router.isReady().then(() => {
  app.mount('#app');
});
```

So what is going on here? The first four lines are pulling in some dependencies. The `createApp` function lets us initialize our Vue application, while `IonicVue` is a plugin that allows us to use Ionic Framework in a Vue environment.

The third import is the root component for our app, simply named `App`. This is our first Vue component and will be used in the bootstrapping process for our Vue app.

The fourth import gets our routing configuration. We will look at this more in depth later.

`App.vue` を開くと、次のように表示されます:

```html
<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
  import { IonApp, IonRouterOutlet } from '@ionic/vue';
</script>
```

script に書かれている import のグループを分解してみていきましょう。

```html
<script setup lang="ts">
  import { IonApp, IonRouterOutlet } from '@ionic/vue';
</script>
```

To use a component in Vue, you must first import it. So for Ionic Framework, this means anytime we want to use a Button or a Card, it must be added to our imports. In the case of our `App` component, we are using `IonApp` and `IonRouterOutlet`. Vue's [`script setup` syntax](https://vuejs.org/api/sfc-script-setup.html) gives the template access to those components as `<ion-app>` and `<ion-router-outlet>`.

You can also register components globally if you find yourself importing the same components repeatedly. This comes with performance tradeoffs that we cover in [Optimizing Your Build](#optimizing-your-build).

次に、テンプレートを見てみましょう。

```html
<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>
```

すべての Vue コンポーネントには `<template>` が必要です。その中に `IonApp` と `IonRouterOutlet` のコンポーネントを配置します。

## Initializing the router

## ルーターのインストール

Ionic Vue は内部的に [vue-router](https://router.vuejs.org/) を使用しているため、Vue Router にすでに慣れている場合は、これまでの知識を Ionic Vue のナビゲーションに適用できます。先ほど述べたルータの設定を見てみましょう。`router/index.ts` で次のように表示されます。

```tsx
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '@/views/HomePage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
```

:::note
この例では、Ionic Vue の Blank starter を使っているので、実際にみる route は少し違うかもしれません
:::

ここでの設定は `vue-router` を直接使用する場合と同じですが、代わりに `@ionic/vue-router` パッケージから `createRouter` や `createWebHistory` などの依存関係をインポートする必要があります。

依存関係をインポートした後、 `routes` 配列に route を宣言できます。そこから、 router インスタンスを作成し、route と使用する history のタイプを提供できます。

Ionic Vue では、遅延ローディングはすぐに使うことができます。 `Home` コンポーネントをインポートする代わりに、次の操作を実行することもできます:

```tsx
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/HomePage.vue'),
  },
];
```

Now, you might be wondering: Why do we use `@` when describing the path to our components? The `@` symbol is a shortcut we can use to describe paths relative to the `src` directory. This is useful if we are trying to reference a component while in a file several folders deep. Instead of doing `'../../../views/HomePage.vue'`, we could simply do `'@/views/HomePage.vue'`.

## コンポーネントのスタイル

ここでは、 `App` コンポーネントを変更する必要はあまりありません。コンテナコンポーネントの基本的な例です。ルータロジックを設定すると、指定された URL ルートに一致するコンポーネントをレンダリングするだけで済みます。すでに 1 つのコンポーネント/ルータが設定されているので、 `Home` コンポーネントを変更しましょう。

現在、 `Home` コンポーネントはこうなっています:

![Vue home component](/img/guides/vue/first-app/home-route.png)

```html
<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Blank</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <strong>Ready to create an app?</strong>
        <p>
          Start with Ionic
          <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components"
            >UI Components</a
          >
        </p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
</script>

<style scoped>
  #container {
    text-align: center;

    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  #container strong {
    font-size: 20px;
    line-height: 26px;
  }

  #container p {
    font-size: 16px;
    line-height: 22px;

    color: #8c8c8c;

    margin: 0;
  }

  #container a {
    text-decoration: none;
  }
</style>
```

最初に確認した `App` コンポーネントと同様に、特定の Ionic Framework コンポーネントのインポート、Vue からのインポート、Vue コンポーネント、そして私たちのコンポーネントに合わせたスタイルがあります。

スタイルに `scoped` を指定していることに注目してください。つまり、ここで記述するスタイルは、このコンポーネントにのみ適用されます。これは、スタイルがコンポーネントから漏れてアプリケーションの他の部分に影響するのを防ぐのに役立ちます。Ionic Vue アプリケーションでは、 `scoped` のついたスタイルを使用することを強くお勧めします。

`IonPage` はすべてのページ(route/URL を持つコンポーネント)の基本コンポーネントであり、header, title, content コンポーネントなど、フルスクリーンコンポーネントの一般的な構成要素がいくつか含まれています。

:::note
独自のページを作成する場合は、 `IonPage` をそのルート・コンポーネントにすることを忘れないでください。 `IonPage` をルートコンポーネントにすることは、Ionic Framework コンポーネントが依存するベース CSS を提供するだけでなく、トランジションが適切に動作することを保証するために重要です。
:::

`IonHeader` は、ページの先頭に配置されるコンポーネントです。これは、フレックスボックスベースのレイアウトを処理する以外には、単独ではあまり機能しません。これは、`IonToolbar` や `IonSearchbar`などのコンポーネントを保持するためのものです。

`IonContent` は、その名前が示すように、ページのメインコンテンツ領域です。ユーザーが操作するスクロール可能なコンテンツと、アプリで使用できるスクロールイベントを提供する役割を担っています。

現在のコンテンツは比較的シンプルで実際のアプリで使えるものは何も入っていないので、それを変えましょう。

:::note
簡潔に表記するために、関数宣言や他のコンポーネントからのインポート文など、コンポーネントの繰り返し部分を除外します。
:::

```html
<template>
  <ion-page>
    ...
    <ion-content>
      <ion-list>
        <ion-item>
          <ion-checkbox slot="start"></ion-checkbox>
          <ion-label>
            <h1>Create Idea</h1>
            <ion-note>Run Idea By Brandy</ion-note>
          </ion-label>
          <ion-badge color="success" slot="end"> 5 Days </ion-badge>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import {
    IonBadge,
    IonCheckbox,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonList,
    IonNote,
    IonPage,
    IonTitle,
    IonToolbar,
  } from '@ionic/vue';
</script>
```

ここでは、 `IonContent` に `IonList` と `IonItem` コンポーネントを追加します。ここでは `IonItem` を中心に説明します。

```html
<ion-item>
  <ion-checkbox slot="start"></ion-checkbox>
  <ion-label>
    <h1>Create Idea</h1>
    <ion-note>Run Idea By Brandy</ion-note>
  </ion-label>
  <ion-badge color="success" slot="end"> 5 Days </ion-badge>
</ion-item>
```

コードを見ると、 `slot` という特殊な属性があります。これは、レンダリング時に `IonCheckbox` を配置する場所を `IonItem` に知らせるためのキーです。これは Vue API ではなく、Web 標準 API です。また、Vue 2 の slot API とは異なります。

Ionic Framework の別のコンポーネントである FAB（フローティング・アクション・ボタン）を見てみましょう。FAB は、アプリケーションの他の部分よりも上位のメイン・アクションを提供する優れた方法です。この FAB には、FAB、FAB ボタンおよびアイコンの 3 つのコンポーネントが必要です。

```html
<template>
  <ion-page>
    <ion-content>
      <ion-list> ... </ion-list>

      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button>
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script setup>
  import {
    IonBadge,
    IonCheckbox,
    IonContent,
    IonFab,
    IonFabButton,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonNote,
    IonPage,
    IonTitle,
    IonToolbar,
  } from '@ionic/vue';
  import { add } from 'ionicons/icons';
</script>
```

メインの `IonFab` では、縦方向と横方向の属性（vertical/horizontal）で表示位置を設定しています。また、slot 属性を使用して、レンダー位置を"fixed"に設定します。これにより、 `IonContent` 内のスクロール可能なコンテンツの外側でレンダリングするよう `IonFab` に指示します。

次に、これにクリックハンドラを設定します。FAB ボタンをクリックすると、新しいページ(この後、すぐに作成します)に移動します。これを行うには、Vue Router のナビゲーション API にアクセスする必要があります。これは `useRouter` パッケージから `vue-router` をインポートすることで実現できます。

```html
<template>
  <ion-page>
    <ion-content>
      <ion-list> ... </ion-list>

      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button @click="() => router.push('/new')">
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script setup>
  import { add } from 'ionicons/icons';
  import { useRouter } from 'vue-router';
  const router = useRouter();
</script>
```

このコンポーネントファイルでは、 `useRouter` 関数をインポートしています。この関数を呼び出すと、コンポーネントからルーティングを操作することができます。つまり、Vue Router から履歴 API にアクセスし、新しい route をナビゲーションスタックにプッシュすることができます。利用方法は `IonFabButton` にクリックイベントを追加し、`router.push` を呼び出すだけです。この場合、私たちは `/new` という route にナビゲーションします。

```html
<ion-fab-button @click="() => router.push('/new')"> ... </ion-fab-button>
```

## 新しい route を作成する

これで、アプリケーション内をナビゲートするための環境が整ったので、新しいコンポーネントを作成し、新しい route をルーターの宣言に追加する必要があります。 `router/index.ts` を開いて、 `new` の route を追加します。

```tsx
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import NewItem from '@/views/NewItem.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/new',
    name: 'NewItem',
    component: NewItem,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
```

route に `/new` を追加したので、該当するコンポーネントとなる `NewItem` を作成します。これは `views/NewItem.vue` に作成します。

新しく `NewItem.vue` ファイルを作成します。

```html
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>New Item</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content></ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
</script>
```

:::note
Each view must contain an `IonPage` component. Page transitions will not work correctly without it. See the [IonPage Documentation](navigation.md#ionpage) for more information.
:::

ここでの内容は、 `Home` コンポーネントに似ています。異なるのは、 `IonBackButton` コンポーネントです。これは、前の route に戻るために使用されます。簡単でしょ?わかりました、でもページをリロードしたらどうなりますか?

この場合、インメモリ内から履歴は失われるため、 戻るボタンは表示されません。この問題を解決するには、 `default-href` 属性値を、履歴がない場合にナビゲートする URL に設定します。

```html
<ion-back-button default-href="/home"></ion-back-button>
```

これで、アプリの履歴がない場合も、home route に戻るための戻るボタンを表示することができます。

## Calling Methods on Components

In order to call a method on any of the Ionic Vue components, you will first need to get a reference to the component instance. Next, you will need to access the underlying Web Component using `$el` and call the method.

In other framework integrations such as Ionic React, this is not needed as any `ref` you provide is automatically forwarded to the underlying Web Component instance. We are unable to do the same thing here due to limitations in how Vue manages refs.

```html
<template>
  <ion-content ref="content">
    <ion-button @click="scrollToBottom">Scroll to Bottom</ion-button>

    ...
  </ion-content>
</template>

<script setup lang="ts">
  import { IonButton, IonContent } from '@ionic/vue';
  import { ref } from 'vue';

  const content = ref();
  const scrollToBottom = () => {
    content.value.$el.scrollToBottom(300);
  };
</script>
```

## Adding Icons

Ionic Vue には [Ionicons](https://ionic.io/ionicons/) がプリインストールされています。開発者がアプリケーションで使用できるオプションはいくつかあります。

### Per-Component Imports

Per-Component Imports is the recommended approach to using Ionicons. This involves importing the icon of your choice from the `ionicons` package and passing it to your template:

```html
<template>
  <ion-page>
    <ion-content>
      <ion-icon :icon="heart"></ion-icon>
    </ion-content>
  </ion-page>
</template>

<script setup>
  import { heart } from 'ionicons/icons';
  import { IonContent, IonIcon, IonPage } from '@ionic/vue';
</script>
```

ここでやっていることを詳しく説明しましょう。まず、 `heart` のアイコンを `ionicons/icons` からインポートします。これにより、アイコンの適切な SVG データがロードされます。

Then we pass the icon data into the `ion-icon` component via the `icon` property.

開発者は、モードに応じて異なるアイコンを設定することもできます:

```html
<template>
  <ion-page>
    <ion-content>
      <ion-icon :ios="logoApple" :md="logoAndroid"></ion-icon>
    </ion-content>
  </ion-page>
</template>

<script setup>
  import { logoAndroid, logoApple } from 'ionicons/icons';
  import { IonContent, IonIcon, IonPage } from '@ionic/vue';
</script>
```

> Note: これらのアイコン名は、読み込み時にはキャメルケースで読み込む必要があります。

### グローバルインポート

もう 1 つのオプションは、特定のアイコンをグローバルにインポートすることです。アプリケーションを起動するたびにアイコンが強制的にロードされ、アプリケーションの初期チャンク・サイズが大きくなる可能性があるため、通常は推奨しません。

とはいえ、特定のアイコンをグローバルにロードすることに意味があるユースケースがあるかもしれません:

**main.ts**

```tsx
import { addIcons } from 'ionicons';
import { heart } from 'ionicons/icons';

addIcons({
  heart: heart,
});
```

**HomePage.vue**

```html
<template>
  <ion-page>
    <ion-content>
      <ion-icon icon="heart"></ion-icon>
    </ion-content>
  </ion-page>
</template>

<script setup>
  import { IonContent, IonIcon, IonPage } from '@ionic/vue';
</script>
```

`main.ts` で `addIcons` 関数を利用すると、アイコンをグローバルに登録し、キーとして文字列で指定することができます。この場合、 `Home` コンポーネントでキーでアイコンを参照します。

## ビルドの最適化

Vue には、アプリケーションを調整するためのツールがいくつか用意されています。このセクションでは、Ionic Framework に最も関連するオプションについて説明します。

### ローカルコンポーネント登録 (推奨)

デフォルトでは、Ionic Framework コンポーネントはローカルに登録されます。ローカルでの登録では、これらのコンポーネントはそれぞれの Vue コンポーネントにインポートされ、提供されます。これは、遅延読み込みとツリーの共有が Ionic Framework コンポーネントで正しく動作するため、推奨される方法です。

この方法の 1 つの欠点は、Ionic Framework コンポーネントを何度もインポートし直すのが面倒なことです。しかし、その見返りとして得られるパフォーマンス上のメリットには価値があると考えています。

また、ローカルに登録されたコンポーネントはサブコンポーネントでは使用できません。サブコンポーネントで使用するためには、Ionic Framework コンポーネントを再インポートする必要があります。

ローカルコンポーネント登録の仕組みを見てみましょう:

```html
<template>
  <ion-page>
    <ion-content>
      <SubComponent></SubComponent>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonContent, IonPage } from '@ionic/vue';
  import SubComponent from '@/components/SubComponent.vue';
</script>
```

In the example above, we are using the `IonPage` and `IonContent` components. To use them, we import them from `@ionic/vue`. From there, we can use the components in our template.

Note that since we are registering these components locally, neither `IonPage` nor `IonContent` will be available in `SubComponent` unless we register them there as well.

詳細については、<a href="https://v3.vuejs.org/guide/component-registration.html#local-registration" target="_blank" rel="noopener noreferrer">Local Registration Vue Documentation</a> のマニュアルを参照してください。

### グローバルコンポーネント登録

コンポーネントを登録するためのもう 1 つのオプションは、グローバル登録を使用することです。グローバル登録には、 `main.ts` で使用するコンポーネントをインポートし、Vue アプリインスタンスで`component` メソッドを呼び出すことが含まれます。

これにより、Vue アプリに Ionic Framework コンポーネントを追加するのは簡単になりますが、グローバル登録は理想的ではありません。Vue のドキュメントを引用すると、「Webpack などのビルドシステムを使用している場合、すべてのコンポーネントをグローバルに登録すると、コンポーネントの使用を停止しても、最終ビルドに含めることができます。これにより、ユーザーがダウンロードしなければならない JavaScript の量が不必要に増加します」とあります。

グローバルコンポーネント登録の仕組みを見てみましょう:

**main.ts**

```tsx
import { IonContent, IonicVue, IonPage } from '@ionic/vue';

const app = createApp(App).use(IonicVue).use(router);

app.component('ion-content', IonContent);
app.component('ion-page', IonPage);
```

**MyComponent.vue**

```html
<template>
  <ion-page>
    <ion-content>
      <SubComponent></SubComponent>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import SubComponent from '@/components/SubComponent.vue';
</script>
```

上の例では、 `IonPage` コンポーネントと `IonPage` コンポーネントを使用しています。これらを使用するには、まず `main.ts` の `@ionic/vue` からインポートします。次に、app インスタンスで `component` メソッドを呼び出し、タグ名とコンポーネント定義を渡します。これを行うと、各 Vue コンポーネントにコンポーネントをインポートしなくても、アプリケーションの残りの部分でコンポーネントを使用できます。

詳細については、<a href="https://v3.vuejs.org/guide/component-registration.html#global-registration" target="_blank" rel="noopener noreferrer">Global Registration Vue Documentation</a> のドキュメントを参照してください。

### JavaScript のプリフェッチ

デフォルトでは、Vue CLI はアプリケーション内の JavaScript のプリフェッチ・ヒントを自動的に生成します。プリフェッチでは、ブラウザのアイドル時間を利用して、ユーザーが近い将来にアクセスする可能性のある文書をダウンロードします。ユーザーがプリフェッチされたドキュメントを必要とするページにアクセスすると、ブラウザのキャッシュからすぐに提供できます。

プリフェッチは帯域幅を消費するため、大規模なアプリケーションを使用している場合は無効にすることをお勧めします。これを行うには、`vue.config.js`ファイルを変更または作成します:

**vue.config.js**

```js
module.exports = {
  chainWebpack: (config) => {
    config.plugins.delete('prefetch');
  },
};
```

The configuration above will prevent all files from being prefetched and, instead, will be loaded when they are needed. You can also select certain chunks to prefetch. Check out the <a href="https://cli.vuejs.org/guide/html-and-static-assets.html#prefetch" target="_blank" rel="noopener noreferrer">Vue CLI Docs on Prefetching</a> for more examples.

## Build a Native App

We now have the basics of an Ionic Vue app down, including some UI components and navigation. The great thing about Ionic Framework’s components is that they work anywhere, including iOS, Android, and PWAs. To deploy to mobile, desktop, and beyond, we use Ionic’s cross-platform app runtime [Capacitor](https://capacitorjs.com). It provides a consistent, web-focused set of APIs that enable an app to stay as close to web-standards as possible while accessing rich native device features on platforms that support them.

Adding native functionality is easy. First, add Capacitor to your project:

```shell
ionic integrations enable capacitor
```

次に、プロジェクトをビルドしてから利用するプラットフォームを選択します:

```shell
ionic build
ionic cap add ios
ionic cap add android
```

iOS と Android のプロジェクトを開いたり、ビルド、実行するのに、ネイティブの IDE(Xcode と Android Studio)を使います:

```shell
ionic cap open ios
ionic cap open android
```

詳細は [こちら](https://capacitorjs.com/docs/getting-started/with-ionic) をご覧ください。

次に、 [すべての利用可能な APIs](https://capacitorjs.com/docs/apis) を確認します。[Camera API](https://capacitorjs.com/docs/apis/camera) を含むすばらしい機能があります。以下の数行のコードでカメラ機能を実装することができます￥:

```html
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Ionic Blank</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <img :src="imageSrc" />
      <ion-button @click="takePhoto()">Take Photo</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonButton, IonContent, IonHeader, IonPage, IonTitle } from '@ionic/vue';
  import { ref } from 'vue';
  import { Camera, CameraResultType } from '@capacitor/camera';

  const imageSrc = ref('');
  const takePhoto = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
    });

    imageSrc.value = image.webPath;
  };
</script>
```

## 次にすること

このガイドでは、Ionic Vue アプリの作成の基本、基本的なナビゲーションの追加、ネイティブアプリを構築する方法としての Capacitor の紹介について説明した。Vue と Capacitor を使って完全な Ionic Framework アプリを構築するには、我々の [First App guide](your-first-app.md) をご覧ください。

Ionic Frameworks のコンポーネントの詳細については、 [component API pages](https://ionicframework.com/docs/components) を参照してください。Vue の詳細については、 [Vue Docs](https://v3.vuejs.org/) を参照のこと。ネイティブ機能の構築を続けるには、[Capacitor docs](https://capacitorjs.com/docs/) を参照してください。

アプリ構築をお楽しみください! 🎉
