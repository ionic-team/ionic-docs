---
title: マイグレーションガイド
sidebar_label: Migration
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>App Migration Guide: Documentation to Migrate Ionic 4.x to 5.x</title>
  <meta
    name="description"
    content="The Ionic Migration Guide provides documentation for how to migrate an app from 4.x to 5.x. Read to learn more about what updates this process requires."
  />
</head>

## Migrating from Ionic 5.x to Ionic 6.x

Please see the [Ionic 6 Migration Guide](../intro/upgrading-to-ionic-6).

## Migrating from Ionic 4.x to Ionic 5.x

Migrating an app from 4.x to 5.x requires a few updates to the API properties, CSS utilities, and the installed package dependencies.

### API and CSS Updates

For a complete list of breaking changes from 4.x to 5.x, please refer to [the breaking changes document](https://github.com/ionic-team/ionic/blob/main/BREAKING.md#version-5x) in the Ionic core repo.

### Packages and Dependencies

For Angular based projects, you can simply run:

```shell
npm install @ionic/angular@latest @ionic/angular-toolkit@latest --save
```

For React projects, you can run:

```shell
npm install @ionic/react@latest @ionic/react-router@latest ionicons@latest
```

For Stencil / vanilla JS projects, you can run:

```shell
npm i @ionic/core@latest --save
```

If you would like a fresh project starter, a new project base can be created from the CLI and an existing app can be migrated over manually.

## Migrating from Ionic 3.0 to Ionic 4.0

:::note
For a **complete list of breaking changes** from Ionic 3 to Ionic 4, please refer to [the breaking changes document](https://github.com/ionic-team/ionic/blob/main/angular/BREAKING.md) in the Ionic core repo.
:::

既存のアプリケーションをIonic 3から4に移行するときは、次の一般的なプロセスをお勧めします。

1. `blank` スターターを使用して新しいプロジェクトを作成します ([アプリ開発をはじめる](../developing/starting.md)を参照)
1. AngularのServiceを `src/providers` から `src/app/services`にコピーする
   - サービスの`@Injectable()` デコレーターに`{ providedIn: 'root' }`を含まなければなりません。詳しくは、Angularの[プロバイダー](https://angular.jp/guide/providers)をご覧ください。
1. ディレクトリ構成が変化することを念頭に置いて（`src/components`が`src/app/components`になるなど）、rootに置かれている他のアイテム（Pipe、Componentなど）をコピーします。
1. グローバルに適用しているSassのスタイルシートを `src/app/app.scss` から `src/global.scss` に移動します。
1. 次の点に注意しながら、ページごと、または機能ごとにアプリケーションの残りをコピーします。
   - Shadow DOMはデフォルトで有効になっています。
   - PageとComponentのSassは、Page/Component名でくくられなくなり、Angularの`@Component`デコレーターのオプションである[`styleUrls`](https://angular.jp/api/core/Component#styleUrls)を利用します。
   - RxJSはv5からv6にアップデートされました([RxJSの変更点](#rxjs-changes)を参照)
   - 一部のライフサイクルはAngularのものに置き換える必要があります([ライフサイクルイベント](#lifecycle-events)を参照)
   - マークアップの変更が必要になる場合があります (移行ツールを利用することができます。[マークアップの変更](#markup-changes)をご覧ください)

多くの場合、Ionic CLIを使用して新しいオブジェクトを生成してからコードをコピーするとうまくいきます。例：`ionic g service weather` は`Weather`というServiceとテストを生成します。その後、必要に応じて少し修正を加えて、コードを古いプロジェクトからコピーします。これは、適切な構造に従っていることを確認するのに役立ちます。また、ユニットテストも生成します。

## パッケージ名の変更

Ionic 4のパッケージ名は`@ionic/angular`です。Ionic 3をアンインストールし、新しいパッケージ名を利用してIonic 4をインストールします。

```shell
$ npm uninstall ionic-angular
$ npm install @ionic/angular
```

While migrating an app, update the imports from `ionic-angular` to `@ionic/angular`.

## Project structure

One of the major changes between an Ionic 3 app and an Ionic 4 app is the overall project layout and structure. In v3, Ionic apps had a custom convention for how an app should be set up and what that folder structure should look like. In v4, this has been changed to follow the recommended setup of each supported framework.

For example, if an app is using Angular, that project structure will be exactly what an Angular CLI app would be. This change, while not too difficult to accommodate, helps to keep common patterns and documentation consistent.

````mdx-code-block
<Tabs
  defaultValue="v4"
  values={[
    { value: 'v4', label: 'Ionic 4' },
    { value: 'v3', label: 'Ionic 3' },
  ]
}>
<TabItem value="v4">

```bash
src/
├── app/
│   ├── about/
│   ├── home/
│   ├── app-routing.module.ts
│   ├── app.component.html
│   ├── app.component.spec.ts
│   ├── app.component.ts
│   └── app.module.ts
├── assets/
├── environments/
├── theme/
├── global.scss
├── index.html
├── karma.conf.js
├── main.ts
├── polyfills.ts
├── test.ts
├── tsconfig.app.json
└── tsconfig.spec.json
.gitignore
angular.json
ionic.config.json
package.json
tsconfig.json
tslint.json
```

</TabItem>
<TabItem value="v3">

```bash
src/
├── app/
│   ├── app.component.html
│   ├── app.html
│   ├── app.module.ts
│   ├── app.scss
│   └── main.ts
├── assets/
├── pages/
│   ├── about/
│   ├── home/
├── theme/
├── index.html
├── manifest.json
└── service-worker.js
.gitignore
ionic.config.json
package.json
tsconfig.json
tslint.json
```

</TabItem>
</Tabs>
````

The above comparison is an example of a v4 app's project structure. For developers with experience in a vanilla Angular project, this should feel really familiar.

There is a `src/` directory that acts as the home for the app. This includes the `index.html`, any assets, environment configuration, and any app-specific config files.

While migrating an app to take advantage of this new layout, it is suggested that a new project "base" is made with the CLI. Then, with the new project layout, migrate the features of the app piece by piece. Pages/components/etc. should be moved into the `src/app/` folder.

Ensure your Ionic configuration file has the appropriate `type`. The project type for v3 is `ionic-angular`. The project type for v4 is `angular`. If this value is incorrect, the CLI may invoke the incorrect build scripts.

See the following `ionic.config.json` as an example:

```json
{
  "name": "my-app",
  "type": "angular"
}
```

## RxJSの変更

v3からv4で、RxJSはバージョン6に更新されました。これは、オペレーターとコアのRxJSの関数のインポートパスのほとんどが変更になります。詳細は<a href="https://github.com/ReactiveX/rxjs/blob/6.x/docs_app/content/guide/v6/migration.md" target="_blank">RxJS Migration Guide</a>をご覧ください。

## ライフサイクルイベント

v4では、[Angular](https://angular.jp/guide/lifecycle-hooks)が提供する一般的なイベントを利用できるようになりました。しかし、場合によっては、遷移してComponentのアニメーションが終了してから発生するイベントを使うことをお勧めします。v3から、`ionViewWillEnter`, `ionViewDidEnter`, `ionViewWillLeave`, `ionViewDidLeave`が移植されました。これらのイベントを利用してして、Ionicの独自のアニメーションシステムとアクションを調整します。

ルート変更中にコンポーネントのアニメーション化が完了したときに発生するイベントにアクセスすることをお勧めします。この場合には、ionViewWillEnter、ionViewDidEnter、ionViewWillLeave、およびionViewDidLeaveV3から移植されてきました。これらのイベントを使用して、Ionicのアニメーションシステムと調整します。

詳細については、[router-outlet docs](../api/router-outlet.md)のドキュメントをチェックしてください。

## オーバーレイコンポーネント

Ionicの以前のバージョンでは、Loading、Toast、Alertなどのオーバーレイコンポーネントは同期的に生成されていました。Ionic v4では、これらのコンポーネントはすべて非同期に作成されています。この結果、APIはPromiseベースになりました。

```tsx
// v3
showAlert() {
  const alert = this.alertCtrl.create({
    message: "Hello There",
    subHeader: "I'm a subheader"
  });

  alert.present();
}
```

v4ではPromiseが使われています。

```tsx
showAlert() {
  this.alertCtrl.create({
    message: "Hello There",
    subHeader: "I'm a subheader"
  }).then(alert => alert.present());
}

// Or using async/await

async showAlert() {
  const alert = await this.alertCtrl.create({
    message: "Hello There",
    subHeader: "I'm a subheader"
  });

  await alert.present();
}
```

## ナビゲーション

v4では、ナビゲーションが最も多くの変更がありました。`NavController`はオリジナルのものを使わずに、公式のAngular Routerと統合しました。これは、アプリケーション間で一貫したルーティング体験を提供するだけでなく、はるかに信頼性が高くなります。Angularチームのdocsサイトには、ルーターの詳細を網羅した<a href="http://angular.jp/guide/router" target="_blank">excellent guide</a>があります。

ユーザーが慣れ親しんでいるプラットフォーム固有のアニメーションを提供するために、`ion-router-outlet`をAngularアプリ用に作成しました。これはAngularの場合と同様に`router-outlet`機能しますが、スタックベースのナビゲーション（tabs）とアニメーションを提供します。

v4プロジェクトでのナビゲーション機能の詳細な説明は、[Angular navigation guide](../angular/navigation.md) をご覧ください。

## Lazy Loading

ナビゲーションを変更したため、v4ではLazy Loadingの仕組みも変更となりました。

v3では、一般的にLazy Loadingの設定は次の通りでした。

```tsx
// home.page.ts
@IonicPage({
  segment: 'home'
})
@Component({ ... })
export class HomePage {}

// home.module.ts
@NgModule({
  declarations: [HomePage],
  imports: [IonicPageModule.forChild(HomePage)]
})
export class HomePageModule {}
```

しかしながらv4では、Angular routerのやり方である`loadChildren`を使います。

```tsx
// home.module.ts
@NgModule({
  imports: [IonicModule, RouterModule.forChild([{ path: '', component: HomePage }])],
  declarations: [HomePage],
})
export class HomePageModule {}

// app.module.ts
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    RouterModule.forRoot([
      { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

v4プロジェクトでのLazy Loadingの詳細な説明は、[Angular navigation guide](../angular/navigation.md#lazy-loading-routes)を調べてください。

## マークアップの変更

Since v4 moved to Custom Elements, there's been a significant change to the markup for each component. These changes have all been made to follow the Custom Elements spec, and have been documented in a <a href="https://github.com/ionic-team/ionic/blob/main/angular/BREAKING.md#breaking-changes" target="_blank">dedicated file on GitHub</a>.

これらのマークアップの変更を支援するために、TSLintベースの<a href="https://github.com/ionic-team/v4-migration-tslint" target="_blank">移行ツール</a>をリリースしました。これは、問題を検出し、それらのいくつかを自動的に修正することもできます。

## Migrating from Ionic 1.0 to Ionic 4.0

### Ionic 1.0 to Ionic 4.0: What’s Involved?

Migrating from Ionic 1 to Ionic 4.0 involves moving from AngularJS (aka Angular 1) to Angular 7+. There are many architectural differences between these versions, so some of the app code will have to be rewritten. The amount of work involved depends on the complexity and size of your app.

One upside is that for the most part, the Ionic UI components you know and love from V1 haven’t changed much.

Here are some considerations to review before beginning the upgrade:

- **App complexity**: Naturally, the larger and more complex the app is, the longer it will take to migrate.
- **Framework support**: In 2019, Ionic will release full support for React. You can also use Ionic Framework components [without a framework](../intro/cdn.md). Since these are not production-ready yet, we recommend sticking with Angular or waiting until the other framework support is available.
- **Budget and team makeup**: The length of a migration project will vary based on the size of your team, the complexity of the app, and the amount of time allotted to make the transition.

### Suggested Strategy

Once your development team has identified a good time frame for beginning the migration, Ionic recommends feature-freezing the Ionic 1 application and getting the code in order: Fix any major bugs, eliminate tech debt, and reorganize as you see fit. Then, identify which features to migrate over and which to abandon.

Once the Ionic 1 app is stable, create a new Ionic 4.0 project. The majority of the dev team’s attention should be given to the new project; only bugs should be fixed in the Ionic 1 app to ensure that the transition happens as quickly and smoothly as possible.

Once the team is comfortable that the Ionic 4.0 app has become stable and has fulfilled a core set of features, you can then shut down the Ionic 1 app.

### Moving From AngularJS to Angular

Please reference official [Angular upgrade guide](https://angular.io/guide/upgrade) information.

### Ionic Changes

Our Ionic 3.0 to Ionic 4.0 migration sections above may prove to be a useful reference. Generate a new Ionic 4.0 project using the blank starter (see [Starting an App](../developing/starting.md)). Spend time getting familiar with Ionic 4.0 components. Happy building!

### Need Assistance?

If your team would like assistance with the migration, please [reach out to us](https://ionicframework.com/enterprise-engine)! Ionic offers Advisory Services, which includes Ionic 4.0 training, architecture reviews, and migration assistance.
