---
title: Ionic Angular Quickstart
sidebar_label: Quickstart
---

<head>
  <title>Ionic CLIを使用したIonic Angularクイックスタート: Angularの基本</title>
  <meta
    name="description"
    content="Ionic Angularクイックスタートでは、Ionic固有の機能を含むAngularとIonicの基本をカバーします。Ionic CLIを使用してAngularアプリを構築する方法を学びます。"
  />
</head>

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

ようこそ！このガイドでは、Ionic Angular開発の基本を説明します。開発環境のセットアップ、シンプルなプロジェクトの生成、プロジェクト構造の探索、Ionicコンポーネントの動作方法を学びます。最初の実際のアプリを構築する前にIonic Angularに慣れるのに最適です。

Ionic Angularとは何か、Angularエコシステムにどのように適合するかの高レベルの概要をお探しの場合は、[Ionic Angularの概要](overview)を参照してください。

## 前提条件

始める前に、マシンにNode.jsとnpmがインストールされていることを確認してください。
次を実行して確認できます：

```shell
node -v
npm -v
```

Node.jsとnpmがない場合は、[こちらからNode.jsをダウンロード](https://nodejs.org/en/download)してください（npmが含まれています）。

## Ionic CLIでプロジェクトを作成

まず、最新の[Ionic CLI](../cli)をインストールします：

```shell
npm install -g @ionic/cli
```

次に、次のコマンドを実行して新しいプロジェクトを作成し、実行します：

```shell
ionic start myApp blank --type angular

cd myApp
ionic serve
```

最初のプロンプトで、`Standalone`を選択します。

`ionic serve`を実行すると、プロジェクトがブラウザで開きます。

![Screenshot of the Ionic Angular Home page](/img/guides/quickstart/home-page.png 'Ionic Angular Home Component')

## Explore the Project Structure

Your new app's directory will look like this:

```shell
└── src/
    └── app
        ├── app.component.html
        ├── app.component.scss
        ├── app.component.ts
        ├── app.routes.ts
        └── home/
            ├── home.page.html
            ├── home.page.scss
            ├── home.page.spec.ts
            └── home.page.ts
```

:::info
以下の例のすべてのファイルパスは、プロジェクトのルートディレクトリを基準にしています。
:::

アプリの構造を理解するために、これらのファイルを見ていきましょう。

## View the App Component

The root of your app is defined in `app.component.ts`:

```ts title="src/app/app.component.ts"
import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {}
}
```

And its template in `app.component.html`:

```html title="src/app/app.component.html"
<ion-app>
  <ion-router-outlet></ion-router-outlet>
</ion-app>
```

これにより、Ionicの`ion-app`と`ion-router-outlet`コンポーネントを使用してアプリケーションのルートが設定されます。ルーターアウトレットは、ページが表示される場所です。

## View Routes

Routes are defined in `app.routes.ts`:

```ts title="src/app/app.routes.ts"
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
```

ルートURL（`/`）にアクセスすると、`HomePage`コンポーネントが読み込まれます。

## View the Home Page

The Home page component, defined in `home.page.ts`, imports the Ionic components it uses:

```ts title="src/app/home/home.page.ts"
import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor() {}
}
```

And the template, in the `home.page.html` file, uses those components:

```html title="src/app/home/home.page.html"
<ion-header [translucent]="true">
  <ion-toolbar>
    <ion-title> Blank </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content [fullscreen]="true">
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">Blank</ion-title>
    </ion-toolbar>
  </ion-header>

  <div id="container">
    <strong>Ready to create an app?</strong>
    <p>
      Start with Ionic
      <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a>
    </p>
  </div>
</ion-content>
```

これにより、ヘッダーとスクロール可能なコンテンツ領域を持つページが作成されます。2番目のヘッダーは、コンテンツの上部にあるときに表示される[折りたたみ可能な大きなタイトル](/docs/api/title.md#collapsible-large-titles)を示し、スクロールダウンすると最初のヘッダーの小さなタイトルを表示するために縮小されます。

:::tip 詳細情報
Ionicレイアウトコンポーネントの詳細については、[Header](/docs/api/header.md)、[Toolbar](/docs/api/toolbar.md)、[Title](/docs/api/title.md)、[Content](/docs/api/content.md)のドキュメントを参照してください。
:::

## Ionicコンポーネントを追加

より多くのIonic UIコンポーネントでHomeページを強化できます。たとえば、`ion-content`の最後に[Button](/docs/api/button.md)を追加します：

```html title="src/app/home/home.page.html"
<ion-content>
  <!-- existing content -->

  <ion-button>Navigate</ion-button>
</ion-content>
```

Then, import the `IonButton` component in `home.page.ts`:

```ts title="src/app/home/home.page.ts"
import { IonButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  // ...existing config...
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar],
})
```

## Add a New Page

To add a new page, generate it with the CLI:

```shell
ionic generate page new
```

A route will be automatically added to `app.routes.ts`.

In `new.page.html`, you can add a [Back Button](/docs/api/back-button.md) to the [Toolbar](/docs/api/toolbar.md):

```html title="src/app/new/new.page.html"
<ion-header [translucent]="true">
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button defaultHref="/"></ion-back-button>
    </ion-buttons>
    <ion-title>new</ion-title>
  </ion-toolbar>
</ion-header>
```

And import `IonBackButton` and `IonButtons` in `new.page.ts`:

```ts title="src/app/new/new.page.ts"
import { IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  // ...existing config...
  imports: [IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar],
})
```

`ion-back-button`は、前のページへのナビゲーション、または履歴がない場合は`/`へのナビゲーションを自動的に処理します。

## Navigate to the New Page

To navigate to the new page, update the button in `home.page.html`:

```html title="src/app/home/home.page.html"
<ion-button [routerLink]="['/new']">Navigate</ion-button>
```

Then, import `RouterLink` in `home.page.ts`:

```ts title="src/app/home/home.page.ts"
import { RouterLink } from '@angular/router';

@Component({
  // ...existing config...
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, RouterLink],
})
```

:::info
AngularのRouterサービスを使用してナビゲーションを実行することもできます。詳細については、[Angular Navigationドキュメント](/docs/angular/navigation.md#navigating-to-different-routes)を参照してください。
:::

## 新しいページにアイコンを追加

Ionic Angularには[Ionicons](https://ionic.io/ionicons/)がプリインストールされています。`ion-icon`コンポーネントの`name`プロパティを設定することで、任意のアイコンを使用できます。次のアイコンを`new.page.html`に追加します：

```html title="src/app/new/new.page.html"
<ion-content>
  <!-- existing content -->

  <ion-icon name="heart"></ion-icon>
  <ion-icon name="logo-ionic"></ion-icon>
</ion-content>
```

You'll also need to import and register these icons in `new.page.ts`:

```ts title="src/app/new/new.page.ts"
// ...existing imports...
import { IonBackButton, IonButtons, IonContent, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heart, logoIonic } from 'ionicons/icons';

@Component({
  // ...existing config...
  imports: [IonBackButton, IonButtons, IonContent, IonHeader, IonIcon, IonTitle, IonToolbar],
})
```

Then, update the constructor of the page to use `addIcons`:

```ts title="src/app/new/new.page.ts"
export class NewPage implements OnInit {
  constructor() {
    addIcons({ heart, logoIonic });
  }

  ngOnInit() {}
}
```

または、`app.component.ts`でアイコンを登録して、アプリ全体で使用することもできます。

詳細については、[Iconドキュメント](/docs/api/icon.md)と[Ioniconsドキュメント](https://ionic.io/ionicons/)を参照してください。

## コンポーネントメソッドを呼び出す

コンテンツ領域を下部にスクロールできるボタンを追加しましょう。

Update the `ion-content` in your `new.page.html` to include a button and some items after the existing icons:

```html title="src/app/new/new.page.html"
<ion-content [fullscreen]="true" #content>
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">new</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-icon name="heart"></ion-icon>
  <ion-icon name="logo-ionic"></ion-icon>

  <ion-button (click)="scrollToBottom()">Scroll to Bottom</ion-button>

  <!-- Add lots of content to make scrolling possible -->
  @for (item of items; track $index; let i = $index) {
  <ion-item>
    <ion-label>Item {{ i + 1 }}</ion-label>
  </ion-item>
  }
</ion-content>
```

In the component, add the `ViewChild` import, the new component imports and define the `scrollToBottom` function:

```ts title="src/app/new/new.page.ts"
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heart, logoIonic } from 'ionicons/icons';

@Component({
  // ...existing config...
  imports: [
    IonBackButton,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonTitle,
    IonToolbar,
  ],
})
export class NewPage implements OnInit {
  @ViewChild(IonContent) content!: IonContent;

  items = Array.from({ length: 50 }, (_, i) => i);

  constructor() {
    addIcons({ heart, logoIonic });
  }

  ngOnInit() {}

  scrollToBottom = () => {
    this.content.scrollToBottom(300);
  };
}
```

Ionicコンポーネントのメソッドを呼び出すには：

1. コンポーネントの`ViewChild`参照を作成します
2. コンポーネントインスタンスでメソッドを直接呼び出します

各コンポーネントの利用可能なメソッドは、APIドキュメントの[Methods](/docs/api/content.md#methods)セクションで見つけることができます。

## デバイスで実行

Ionicのコンポーネントは、iOS、Android、PWAのどこでも動作します。モバイルにデプロイするには、[Capacitor](https://capacitorjs.com)を使用します：

```shell
ionic build
ionic cap add ios
ionic cap add android
```

ネイティブプロジェクトをIDEで開きます：

```shell
ionic cap open ios
ionic cap open android
```

詳細については、[CapacitorのGetting Startedガイド](https://capacitorjs.com/docs/getting-started/with-ionic)を参照してください。

## さらに探索

このガイドでは、Ionic Angularアプリの作成、ナビゲーションの追加、ネイティブビルド用のCapacitorの導入の基本をカバーしました。さらに深く掘り下げるには、以下を確認してください：

<DocsCards>

<DocsCard header="最初のアプリを構築" href="your-first-app" icon="/icons/component-content-icon.png">
  <p>Ionic Angularとネイティブデバイス機能を使用して実際のPhoto Galleryアプリを構築します。</p>
</DocsCard>

<DocsCard header="Angularドキュメント" href="https://angular.dev/overview" icon="/icons/logo-angular-icon.png">
  <p>公式Angularドキュメントから、Angularのコアコンセプト、ツール、ベストプラクティスについて詳しく学びます。</p>
</DocsCard>

<DocsCard header="ナビゲーション" href="navigation" icon="/icons/component-navigation-icon.png">
  <p>Angular Routerを使用してIonic Angularアプリでルーティングとナビゲーションを処理する方法を発見します。</p>
</DocsCard>

<DocsCard header="コンポーネント" href="/docs/components" icon="/icons/guide-components-icon.png">
  <p>美しいアプリを構築するためのIonicの豊富なUIコンポーネントライブラリを探索します。</p>
</DocsCard>

<DocsCard header="テーマ設定" href="/docs/theming/basics" icon="/icons/guide-theming-icon.png">
  <p>Ionicの強力なテーマ設定システムを使用してアプリの外観と操作性をカスタマイズする方法を学びます。</p>
</DocsCard>

<DocsCard header="Capacitorドキュメント" href="https://capacitorjs.com/docs/" icon="/icons/guide-capacitor-icon.png">
  <p>Capacitorを使用してネイティブデバイス機能にアクセスし、アプリをiOS、Android、Webにデプロイする方法を探索します。</p>
</DocsCard>

</DocsCards>
