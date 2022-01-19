---
title: Vueナビゲーション
sidebar_label: ナビゲーション/ルーティング
---

<head>
  <title>Vue Navigation: Use Ionic + Vue Router to Create Multi-Page Apps</title>
  <meta
    name="description"
    content="This Vue Navigation guide covers how routing works in Vue apps. Learn how to create multi-page apps with rich page transitions using Ionic and Vue Router."
  />
</head>

このガイドでは、IonicとVueで構築されたアプリでルーティングがどのように機能するかについて説明します。

`IonRouterOutlet` コンポーネントは、内部で一般的な [Vue Router](https://router.vuejs.org/) ライブラリを使用します。IonicとVue Routerを使えば、リッチなページ遷移を持つマルチページアプリを作ることができます。

Vue Routerを使ったルーティングについて知っていることはすべてIonic Vueに引き継がれます。Ionic Vueアプリの基本とルーティングの仕組みを見てみましょう。

## 簡単なメモ

このガイドを読むと、これらの概念のほとんどが、Ionic Frameworkを使用しないVueルータに見られる概念と非常によく似ていることがわかります。あなたの意見は正しいでしょう!Ionic VueはVue Routerの長所を活用して、Ionic Frameworkを使ったアプリ構築への移行を可能な限りシームレスにしています。そのため、独自のルーティングソリューションを構築するよりも、可能な限りVueルータの機能に依存することをお勧めします。

## 簡単なRoute

次に示すのは、 "/home" URLへの単一のルートを定義するルーティング設定の例です。 "/home" にアクセスすると、ルートによって `HomePage`  コンポーネントがレンダリングされます。

**router/index.ts**

```tsx
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '@/views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
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

アプリケーションが最初にロードされると、 `HomePage` コンポーネントがここで設定したとおりに表示されます。

## リダイレクトの設定

最初ロードされたパスに別のパスを設定したい場合はどうすればよいでしょうか。これには、ルータリダイレクトを使用できます。リダイレクトは通常のルートオブジェクトと同じように機能しますが、いくつかの異なるキーが含まれています。

```tsx
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
```

このリダイレクトでは、最初にインデックスのパスが参照されます。そして、 `home` routeにリダイレクトしてロードを行います。

## 異なるRoutesへのナビゲーション

これは素晴らしいことですが、実際にルートにナビゲートするにはどうすればよいのでしょうか。これには、 `router-link` プロパティを使用できます。新しいルーティング設定を作成します:

```tsx
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
    path: '/detail',
    name: 'Detail',
    component: DetailPage,
  },
];
```

`home` routeで開始し、`detail` routeに移動するボタンを追加するとします。`detail` routeに移動するには、次のHTMLを使用します:

```html
<ion-button router-link="/detail">Go to detail</ion-button>
```

また、ルーターAPIを使用して、プログラムでアプリケーション内を移動することもできます:

```html
<template>
  <ion-page>
    <ion-content>
      <ion-button @click="() => router.push('/detail')">Go to detail</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { IonButton, IonContent, IonPage } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import { useRouter } from 'vue-router';

  export default defineComponent({
    name: 'HomePage',
    components: {
      IonButton,
      IonContent,
      IonPage,
    },
    setup() {
      const router = useRouter();
      return { router };
    },
  });
</script>
```

どちらのオプションも同じナビゲーション機構を提供し、異なるユースケースに対応します。

### Navigating using `router-link`

The `router-link` attribute can be set on any Ionic Vue component, and the router will navigate to the route specified when the component is clicked. The `router-link` attribute accepts string values as well as named routes, just like `router.push` from Vue Router. For additional control, the `router-direction` and `router-animation` attributes can be set as well.

The `router-direction` attribute accepts values of `forward`, `back`, or `none` and is used to control the direction of the page transition.

The `router-animation` attribute accepts an `AnimationBuilder` function and is used to provide a custom page transition that is only used when clicking the component it is provided on. The `AnimationBuilder` type is a function that returns an Ionic Animation instance. See the [Animations documentation](../utilities/animations) for more information on using animations in Ionic Vue.

```html
<ion-button router-link="/page2" router-direction="back" :router-animation="myAnimation">Click Me</ion-button>
```

### Navigating using `useIonRouter`

One downside of using `router-link` is that you cannot run custom code prior to navigating. This makes tasks such as firing off a network request prior to navigation difficult. You could use Vue Router directly, but then you lose the ability to control the page transition. This is where the `useIonRouter` utility is helpful.

The `useIonRouter` utility is a function that provides methods for programmatic navigation while having full control over the page transitions. This makes it easy to run custom code before navigating.

This first example lets us push a new page onto the stack with a custom page transition:

```js
import { defineComponent } from 'vue';
import { useIonRouter } from '@ionic/vue';
import { customAnimation } from '@/animations/customAnimation';

export default defineComponent({
  ...,
  setup() {
    const ionRouter = useIonRouter();

    router.push('/page2', customAnimation);
  }
});
```

`useIonRouter` provides convenience `push`, `replace`, `back`, and `forward` methods to make it easy to use common navigation actions. It also provides a `navigate` method which can be used in more complex navigation scenarios:

```js
import { defineComponent } from 'vue';
import { useIonRouter } from '@ionic/vue';
import { customAnimation } from '@/animations/customAnimation';

export default defineComponent({
  ...,
  setup() {
    const ionRouter = useIonRouter();

    router.navigate('/page2', 'forward', 'replace', customAnimation);
  }
});
```

The example above has the app navigate to `/page2` with a custom animation that uses the forward direction. In addition, the `replace` value ensures that the app replaces the current history entry when navigating.

:::note
`useIonRouter` uses the Vue `inject()` function and should only be used inside of your `setup()` function.
:::

See the [useIonRouter documentation](./utility-functions#router) for more details as well as type information.

## Lazy Loading Routes

現在のrouteの設定方法では、アプリをロードするときに同じ初期チャンクに含まれるようになっているが、これは必ずしも理想的ではありません。代わりに、必要に応じてコンポーネントがロードされるようにrouteを設定できます。

```tsx
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
    path: '/detail',
    name: 'Detail',
    component: () => import('@/views/DetailPage.vue'),
  },
];
```

Here, we have the same setup as before only this time `DetailPage` has been replaced with an import call. This will result in the `DetailPage` component no longer being part of the chunk that is requested on application load.

## Shared URLs versus Nested Routes

A common point of confusion when setting up routing is deciding between shared URLs or nested routes. This part of the guide will explain both and help you decide which one to use.

### 共有URL

共有URLは、ルートが共通のURLの一部を持つルート設定です。共有URL設定の例を次に示します:

```tsx
const routes: Array<RouteRecordRaw> = [
  {
    path: '/dashboard',
    component: DashboardMainPage,
  },
  {
    path: '/dashboard/stats',
    component: DashboardStatsPage,
  },
];
```

上記のルートは、URLの `dashboard` 部分を再利用するため、 "shared" と見なされます。

### ネストされたRoute

Nested Routesは、ルートが他のルートの子としてリストされるルート設定です。ネストされたルート設定の例を次に示します:

```tsx
const routes: Array<RouteRecordRaw> = [
  {
    path: '/dashboard/:id',
    component: DashboardRouterOutlet,
    children: [
      {
        path: '',
        component: DashboardMainPage,
      },
      {
        path: 'stats',
        component: DashboardStatsPage,
      },
    ],
  },
];
```

上記のルートは、親ルートの `children` 配列にあるため、ネストされています。親ルートが `DashboardRouterOutlet` コンポーネントをレンダリングしていることに注目してください。ルートをネストする場合は、 `ion-router-outlet` の別のインスタンスをレンダリングする必要があります。

### どちらを選ぶべきか

共有URLは、URLの2つのページ間の関係を維持しながら、ページAからページBに遷移する場合に便利です。前述の例では、 `/dashboard` ページのボタンで `/dashboard/stats` ページに移行できます。2つのページ間の関係は、a) ページの遷移とb) URLによって維持されます。

ネストされたルートは、コンセントAのコンテンツをレンダリングする必要がある場合、およびネストされたコンセントBの内部のサブコンテンツをレンダリングする必要がある場合に便利です。最も一般的な使用例は、タブです。Ionicスターターアプリのタブをロードすると、最初の `ion-router-outlet` で `ion-tab-bar`  および `ion-tabs` コンポーネントがレンダリングされます。`ion-tabs` コンポーネントは、各タブの内容をレンダリングする別の 「イオンルータ出力」 をレンダリングします。

モバイルアプリケーションでネストされたルートが意味をなすユースケースはほとんどありません。疑わしい場合は、共有URLルート設定を使用します。ネストされたルーティングをタブ以外のコンテキストで使用すると、アプリのナビゲーションが混乱する可能性があるため、使用しないように強く注意しています。


## タブの操作

タブを操作する場合、Ionic Vueはどのビューがどのタブに属しているかを知る方法を必要とします。ここでは `IonTabs` コンポーネントが便利ですが、この場合のルーティング設定を見てみましょう:

```tsx
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1',
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: 'tab1',
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1.vue'),
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2.vue'),
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3.vue'),
      },
    ],
  },
];
```

ここで、 `tabs` パスは `Tabs` コンポーネントをロードします。各タブは、 `children` 配列内のルートオブジェクトとして提供されます。この例では、パスを `tabs` としていますがこれはカスタマイズできます。

まず、 `Tabs` コンポーネントをみていきましょう:

```html
<template>
  <ion-page>
    <ion-content>
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="tab1" href="/tabs/tab1">
            <ion-icon :icon="triangle" />
            <ion-label>Tab 1</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="tab2" href="/tabs/tab2">
            <ion-icon :icon="ellipse" />
            <ion-label>Tab 2</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="tab3" href="/tabs/tab3">
            <ion-icon :icon="square" />
            <ion-label>Tab 3</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import {
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonContent,
    IonLabel,
    IonIcon,
    IonPage,
    IonRouterOutlet,
  } from '@ionic/vue';
  import { ellipse, square, triangle } from 'ionicons/icons';

  export default {
    name: 'Tabs',
    components: {
      IonContent,
      IonLabel,
      IonTabs,
      IonTabBar,
      IonTabButton,
      IonIcon,
      IonPage,
      IonRouterOutlet,
    },
    setup() {
      return {
        ellipse,
        square,
        triangle,
      };
    },
  };
</script>
```

以前にIonic Frameworkを使ったことがある人なら、このことをよく知っているはずです。`ion-tabs` コンポーネントを作成し、 `ion-tab-bar` を提供します。`ion-tab-bar` は `ion-tab-button` コンポーネントを提供し、それぞれにルータの設定の対応するタブに関連付けられた `tab` プロパティがあります。

### タブ内の子ルート

When adding additional routes to tabs you should write them as sibling routes with the parent tab as the path prefix. The example below defines the `/tabs/tab1/view` route as a sibling of the `/tabs/tab1` route. Since this new route has the `tab1` prefix, it will be rendered inside of the `Tabs` component, and Tab 1 will still be selected in the `ion-tab-bar`.

```tsx
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1',
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: 'tab1',
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1.vue'),
      },
      {
        path: 'tab1/view',
        component: () => import('@/views/Tab1View.vue'),
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2.vue'),
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3.vue'),
      },
    ],
  },
];
```

## IonRouterOutlet

`IonRouterOutlet` コンポーネントは、ビューをレンダリングするためのコンテナを提供します。これは他のVueアプリケーションに見られる `RouterView` コンポーネントに似ていますが、 `IonRouterOutlet` は同じアウトレット内のDOMで複数のページをレンダリングできるという点が異なります。コンポーネントが `IonRouterOutlet` でレンダリングされる場合、これはIonic Framework "Page"と見なされます。ルーター・アウトレット・コンテナーは、ページ間の遷移アニメーションを制御するだけでなく、ページがいつ作成および破棄されるかを制御します。これにより、ビューを切り替えるときにビュー間の状態を維持することができます。

テンプレートで設定する際に、 `IonRouterOutlet` の内部には何も指定しないでください。`IonRouterOutlet` は子コンポーネントにネストすることができますが、通常はアプリケーション内のナビゲーションが混乱するため注意が必要です。詳細については、[Shared URLs versus Nested Routes](#shared-urls-versus-nested-routes) を参照してください。

## IonPage

The `IonPage` component wraps each view in an Ionic Vue app and allows page transitions and stack navigation to work properly. Each view that is navigated to using the router must include an `IonPage` component.

```html
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">Hello World</ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      IonContent,
      IonHeader,
      IonPage,
      IonTitle,
      IonToolbar,
    },
  });
</script>
```

Components presented via `IonModal` or `IonPopover` do not typically need an `IonPage` component unless you need a wrapper element. In that case, we recommend using `IonPage` so that the component dimensions are still computed properly.

## Accessing the IonRouter Instance

Vueアプリケーション内から  `IonRouter` インスタンスにアクセスする必要があるユースケースがいくつかあるかもしれません。例えば、Androidでユーザーがハードウェアの 「戻る」 ボタンを押したときに、アプリケーションのルート・ページにいるかどうかを知ることができます。このようなユースケースでは、コンポーネントに `IonRouter` 依存関係を注入できます。

```tsx
import { useIonRouter } from '@ionic/vue';

...

export default {
  setup() {
    const ionRouter = useIonRouter();
    if (ionRouter.canGoBack()) {
      // Perform some action here
    }
  }
}
```

## URLパラメーター

元のルーティング例を拡張して、URLパラメータの使用方法を示します:

```tsx
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
    path: '/detail/:id',
    name: 'Detail',
    component: DetailPage,
  },
];
```

ここで、 `detail` パス文字列の最後に `:id` を追加したことに注意してください。URLパラメータは、ルートパスの動的な部分です。ユーザーが `/details/1` などのURLに移動すると、 "1" が "id" という名前のパラメータに保存され、ルートのレンダリング時にコンポーネントでアクセスできるようになります。

コンポーネントでの使用方法を見てみましょう。

```html
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Details</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content> Detail ID: {{ id }} </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import { useRoute } from 'vue-router';

  export default defineComponent({
    name: 'Detail',
    components: {
      IonContent,
      IonHeader,
      IonPage,
      IonTitle,
      IonToolbar,
    },
    setup() {
      const route = useRoute();
      const { id } = route.params;
      return { id };
    },
  });
</script>
```

Our `route` variable contains an instance of the current route. It also contains any parameters we have passed in. We can obtain the `id` parameter from here and display it on the screen.

## Router History

Vue Router ships with a configurable history mode. Let's look at the different options and why you might want to use each one.

- `createWebHistory`: This option creates an HTML5 history. It leverages the History API to achieve URL navigation without a page reload. This is the most common history mode for single page applications. When in doubt, use `createWebHistory`.

- `createWebHashHistory`: This option adds a hash (`#`) to your URL. This is useful for web applications with no host or when you do not have full control over the server routes. Search engines sometimes ignore hash fragments, so you should use `createWebHistory` instead if SEO is important for your application.

- `createMemoryHistory`: This option creates an in-memory based history. This is mainly used to handle server-side rendering (SSR).

## More Information

For more info on routing in Vue using Vue Router, check out their docs at http://router.vuejs.org/.
