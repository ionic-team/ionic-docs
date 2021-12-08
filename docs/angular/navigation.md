---
sidebar_label: Navigation/Routing
contributors:
  - mhartington
---

# Angularナビゲーション

このガイドでは、IonicとAngularを使用して構築されたアプリでのルーティングのしくみについて説明します。


Angular Routerは、Angularアプリケーションで最も重要なライブラリの1つです。これがなければ、アプリはシングルビュー/シングルコンテキストアプリになるか、ブラウザのリロード時にナビゲーションのステートを維持できなくなります。Angular Routerを使用すると、リンク可能でリッチなアニメーションを持つリッチなアプリを作成できます（もちろん、Ionicと組み合わせると！）。Angular Routerの基本と、それをIonicアプリケーション用に設定する方法を見てみましょう。

## シンプルなRoute

ほとんどのアプリでは、some sort of route を持つことがしばしば必要になります。最も基本的な設定はこのようになります：

```typescript

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

```typescript
[
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'detail', component: DetailComponent }
];
```

このリダイレクトでは、アプリのインデックス（`''`）を探しはじめると、`login` にリダイレクトします。最後の `pathMatch` キーは、ルータにパスの検索方法を指示するために必要です。

`full` を使用すると、たとえ最後まで `/route1/route2/route3` と一致するpathがなかったとしても、フルパスを比較する必要があることをルータに伝えることができます。つまり、次のようになります。

```typescript
{ path: '/route1/route2/route3', redirectTo: 'login', pathMatch: 'full' },
{ path: 'login', component: LoginComponent },
```

このように書くと `/route1/route2/route3` をロードすると、リダイレクトを行います。けれど仮に `/route1/route2/route4` であれば、すべてのpathが一致しないのでリダイレクトを行いません。

あるいは、こういう書き方もできます:

```typescript
{ path: '/route1/route2', redirectTo: 'login', pathMatch: 'prefix' },
{ path: 'login', component: LoginComponent },
```

`/route1/route2/route3` と `/route1/route2/route4` の両方を読み込んだとおき, どちらの場合もリダイレクトします。 `pathMatch: 'prefix'` によって、一部でも一致したら該当するからです。

## routesへのナビゲーション

routesについて説明してきましたが、それではどのようにしてそのルートにナビゲーションしたらいいのでしょうか。これには、 `routerLink` directiveを利用します。先ほどの簡単なrouter設定でこれを確認してみましょう:

```ts
RouterModule.forRoot([
  { path: '', component: LoginComponent },
  { path: 'detail', component: DetailComponent }
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

```typescript
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

> 相対URLを使用したナビゲーションに関するメモ：現在、複数のナビゲーションスタックをサポートするために、相対URLはサポートされていません。

## Lazy loading routes

現在のルート設定では、すべてのComponentが、ルートとなる `app.module` と同じ `chunk` に含まれているので理想的ではありません。代わりに、ルータにはコンポーネントを独自の `chunk` に分離できるように設定されています。


```typescript

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


```typescript
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

> 一部のコードを省略して紹介しています


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
            loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
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
