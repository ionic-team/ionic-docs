---
title: Angular ナビゲーション
sidebar_label: ナビゲーション/ルーティング
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<head>
  <title>Angular Navigation: How Routing & Redirects Work in Angular Apps</title>
  <meta
    name="description"
    content="Our Angular Navigation guide covers how routing works in an app built with Ionic and Angular. Read to learn more about basic routing and redirects in Angular."
  />
</head>

このガイドでは、IonicとAngularを使用して構築されたアプリでのルーティングのしくみについて説明します。


Angular Routerは、Angularアプリケーションで最も重要なライブラリの1つです。これがなければ、アプリはシングルビュー/シングルコンテキストアプリになるか、ブラウザのリロード時にナビゲーションのステートを維持できなくなります。Angular Routerを使用すると、リンク可能でリッチなアニメーションを持つリッチなアプリを作成できます（もちろん、Ionicと組み合わせると！）。Angular Routerの基本と、それをIonicアプリケーション用に設定する方法を見てみましょう。

## シンプルなRoute

ほとんどのアプリでは、some sort of route を持つことがしばしば必要になります。最も基本的な設定はこのようになります：

```tsx

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
  ...
  RouterModule.forRoot([
    { path: '', component: LoginComponent },
    { path: 'detail', component: DetailComponent },
  ])
  ],
})
```

URL path と Component の組み合わせを確認する最も簡単な方法は、ここをみるすることです。アプリがロードされると、ルーターはユーザーがロードしようとしているURLを読むことで動作を開始します。私たちのサンプルでは、Routeは `''` を参照します。これは本質的に私たちのインデックスルートとなります。そうすると、一致するエントリを探し出して、 `LoginComponent` がロードされます。かなり簡単です。この処理は `path` が一致するまで、設定されているすべてのRouteのエントリを参照します。しかし、初期ロードと異なるパスをロードしたい場合はどうなりますか？

## リダイレクトの処理

そういう場合には、ルーターリダイレクトを使用できます。リダイレクトは通常のルートオブジェクトと同じように書くことができますが、いくつかの異なるキーが含まれます。

```tsx
[
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'detail', component: DetailComponent },
];
```

このリダイレクトでは、アプリのインデックス（`''`）を探しはじめると、`login` にリダイレクトします。最後の `pathMatch` キーは、ルータにパスの検索方法を指示するために必要です。

`full` を使用すると、たとえ最後まで `/route1/route2/route3` と一致するpathがなかったとしても、フルパスを比較する必要があることをルータに伝えることができます。つまり、次のようになります。

```tsx
{ path: '/route1/route2/route3', redirectTo: 'login', pathMatch: 'full' },
{ path: 'login', component: LoginComponent },
```

このように書くと `/route1/route2/route3` をロードすると、リダイレクトを行います。けれど仮に `/route1/route2/route4` であれば、すべてのpathが一致しないのでリダイレクトを行いません。

あるいは、こういう書き方もできます:

```tsx
{ path: '/route1/route2', redirectTo: 'login', pathMatch: 'prefix' },
{ path: 'login', component: LoginComponent },
```

`/route1/route2/route3` と `/route1/route2/route4` の両方を読み込んだとおき, どちらの場合もリダイレクトします。 `pathMatch: 'prefix'` によって、一部でも一致したら該当するからです。

## routesへのナビゲーション

routesについて説明してきましたが、それではどのようにしてそのルートにナビゲーションしたらいいのでしょうか。これには、 `routerLink` directiveを利用します。先ほどの簡単なrouter設定でこれを確認してみましょう:

```ts
RouterModule.forRoot([
  { path: '', component: LoginComponent },
  { path: 'detail', component: DetailComponent },
]);
```

わたしたちは、次のHTMLを利用することで、`LoginComponent` から `detail` routeに遷移することができます。

```html
<ion-header>
  <ion-toolbar>
    <ion-title>Login</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding">
  <ion-button [routerLink]="['/detail']">Go to detail</ion-button>
</ion-content>
```

ここで重要なのは`ion-button` と `routerLink` directiveです。RouterLinkは典型的な `href` と同様の考えで動作しますが、URLを文字列として構築する代わりに配列として構築することができ、それによってより複雑なパスを書くこともできます。

Router APIを使用して、プログラムで遷移することもできます。

```tsx
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  ...
})
export class LoginComponent {

  constructor(private router: Router){}

  navigate(){
    this.router.navigate(['/detail'])
  }
}
```

どちらのオプションも同様のナビゲーションメカニズムを提供し、異なるユースケースで利用することができます。

:::note
相対URLを使用したナビゲーションに関するメモ：現在、複数のナビゲーションスタックをサポートするために、相対URLはサポートされていません。
:::

## Lazy loading routes

現在のルート設定では、すべてのComponentが、ルートとなる `app.module` と同じ `chunk` に含まれているので理想的ではありません。代わりに、ルータにはコンポーネントを独自の `chunk` に分離できるように設定されています。

```tsx

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
  ...
  RouterModule.forRoot([
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
    { path: 'detail', loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule) }
  ])
  ],
})
```

`loadChildren` プロパティはコンポーネントの代わりにネイティブインポートを直接仕様してモジュールを参照する方法です。ただしこれを行うには、コンポーネントごとにモジュールを作成する必要があります。

```tsx
...
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
  ...
  RouterModule.forChild([
    { path: '', component: LoginComponent },
  ])
  ],
})
```

:::note
一部のコードを省略して紹介しています
:::

ここでは、`RouterModule` のインポートとともに、典型的な `Angular Module` の設定がありますが、`RouterModule` では `forChild` によってコンポーネントを使用することを宣言しています。この設定では、ビルドを実行するときに、`App Component`（Root）、 `login Component` 、および `detail Component` において別々のチャンクを作成します。

## Live Example

If you would prefer to get hands on with the concepts and code described above, please checkout our [live example](https://stackblitz.com/edit/ionic-angular-routing?file=src/app/app-routing.module.ts) of the topics above on StackBlitz.

## タブの利用方法

タブを使用すると、Angular Routerにどのコンポーネントをロードする必要があるかを知るためのメカニズムをIonicが提供しますが、タブコンポーネントでは複雑な作業が行われます。簡単な例を見てみましょう。

```ts
const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () => import('../tab1/tab1.module').then((m) => m.Tab1PageModule),
          },
        ],
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];
```

ロードする `tabs` パスがあります。この例では、`tabs` と設定していますが、`path` の名前は変更可能です。あなたのアプリに合うように何でも設定することができます。この `routes` のオブジェクトでは、`child route`も定義できます。この例では、最上位の`child route`である `tab1` が `outlet` として機能し、追加の `child route` を読み込むことができます。この例では、新しいコンポーネントをロードする単一の `child route` があります。タブのマークアップは次のとおりです。

```html
<ion-tabs>
  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="tab1">
      <ion-icon name="flash"></ion-icon>
      <ion-label>Tab One</ion-label>
    </ion-tab-button>
  </ion-tab-bar>
</ion-tabs>
```

Ionicを使ってアプリを作成したことがあれば、このマークアップはおなじみのはずです。`ion-tabs` コンポーネントを作成し、`ion-tab-bar` を提供します。`ion-tab-bar` は、 `tab`と一緒に`ion-tab-button`を提供します。最新の `@ionic/angular` はもはや `<ion-tab>` を必要とせず、開発者がタブバーを完全にカスタマイズできるようになり、すべての設定はRouterの設定によって行えるようになりました。

### How Tabs in Ionic Work

Each tab in Ionic is treated as an individual navigation stack. This means if you have three tabs in your application, each tab has its own navigation stack. Within each stack you can navigate forwards (push a view) and backwards (pop a view).

This behavior is important to note as it is different than most tab implementations that are found in other web based UI libraries. Other libraries typically manage tabs as one single history stack.

Since Ionic is focused on helping developers build mobile apps, the tabs in Ionic are designed to match native mobile tabs as closely as possible. As a result, there may be certain behaviors in Ionic's tabs that differ from tabs implementations you have seen in other UI libraries. Read on to learn more about some of these differences.

### Child Routes within Tabs

When adding additional routes to tabs you should write them as sibling routes with the parent tab as the path prefix. The example below defines the `/tabs/tab1/view` route as a sibling of the `/tabs/tab1` route. Since this new route has the `tab1` prefix, it will be rendered inside of the `Tabs` component, and Tab 1 will still be selected in the `ion-tab-bar`.

```ts
const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () => import('../tab1/tab1.module').then((m) => m.Tab1PageModule),
          },
        ],
      },
      {
        path: 'tab1/view',
        children: [
          {
            path: '',
            loadChildren: () => import('../tab1/tab1view.module').then((m) => m.Tab1ViewPageModule),
          },
        ],
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () => import('../tab2/tab2.module').then((m) => m.Tab2PageModule),
          },
        ],
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () => import('../tab3/tab3.module').then((m) => m.Tab3PageModule),
          },
        ],
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];
```

### Switching Between Tabs

Since each tab is its own navigation stack, it is important to note that these navigation stacks should never interact. This means that there should never be a button in Tab 1 that routes a user to Tab 2. In other words, tabs should only be changed by the user tapping a tab button in the tab bar.

A good example of this in practice is the iOS App Store and Google Play Store mobile applications. These apps both provide tabbed interfaces, but neither one ever routes the user across tabs. For example, the "Games" tab in the iOS App Store app never directs users to the "Search" tab and vice versa.

Let's take a look at a couple common mistakes that are made with tabs.

**A Settings Tab That Multiple Tabs Reference**

A common practice is to create a Settings view as its own tab. This is great if developers need to present several nested settings menus. However, other tabs should never try to route to the Settings tab. As we mentioned above, the only way that the Settings tab should be activated is by a user tapping the appropriate tab button.

If you find that your tabs need to reference the Settings tab, we recommend making the Settings view a modal by using `ion-modal`. This is a practice found in the iOS App Store app. With this approach, any tab can present the modal without breaking the mobile tabs pattern of each tab being its own stack.

The example below shows how the iOS App Store app handles presenting an "Account" view from multiple tabs. By presenting the "Account" view in a modal, the app can work within the mobile tabs best practices to show the same view across multiple tabs.

<video
  style={{
    'margin': '40px auto',
    'display': 'flex'
  }}
  width="400"
  src={useBaseUrl('video/tabs-account-demo.mp4')}
  controls
></video>

**Reusing Views Across Tabs**

Another common practice is to present the same view in multiple tabs. Developers often try to do this by having the view contained in a single tab, with other tabs routing to that tab. As we mentioned above, this breaks the mobile tabs pattern and should be avoided.

Instead, we recommend having routes in each tab that reference the same component. This is a practice done in popular apps like Spotify. For example, you can access an album or podcast from the "Home", "Search", and "Your Library" tabs. When accessing the album or podcast, users stay within that tab. The app does this by creating routes per tab and sharing a common component in the codebase.

The example below shows how the Spotify app reuses the same album component to show content in multiple tabs. Notice that each screenshot shows the same album but from a different tab.

| Home Tab | Search Tab |
| :------: | :--------: |
| <img src={useBaseUrl('img/usage/tabs-home.jpg')} /> | <img src={useBaseUrl('img/usage/tabs-search.jpg')} /> |
