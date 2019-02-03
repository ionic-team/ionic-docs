---
previousText: 'Scaffolding'
previousUrl: '/docs/building/scaffolding'
nextText: 'Cross Platform'
nextUrl: '/docs/building/cross-platform'
---

# v4への移行ガイド

## 概要

既存のアプリケーションをIonic 3から4に移行するときは、次の一般的なプロセスをお勧めします。

1. `blank` スターターを使用して新しいプロジェクトを作成します ([アプリ開発をはじめる](/docs/building/starting)を参照)
1. AngularのServiceを `src/providers` から `src/app/services`にコピーする
   - サービスの`@Injectable()` デコレーターに`{ providedIn: 'root' }`を含まなければなりません。詳しくは、Angularの[プロバイダー](https://angular.jp/guide/providers)をご覧ください。
1. ディレクトリ構成が変化することを念頭に置いて（`src/components`が`src/app/components`になるなど）、rootに置かれている他のアイテム（Pipe、Componentなど）をコピーします。
1. グローバルに適用しているSassのスタイルシートを `src/app/app.scss` から `src/global.scss` に移動します。
1. 次の点に注意しながら、ページごと、または機能ごとにアプリケーションの残りをコピーします。
   - Shadow DOMはデフォルトで有効になっています。
   - PageとComponentのSassは、Page/Component名でくくられなくなり、Angularの`@Component`デコレーターのオプションである[`styleUrls`](https://angular.io/api/core/Component#styleUrls)を利用します。
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

アプリの移行中に、`ionic-angular`から`@ionic/angular`にアップデートします。

## プロジェクト構成

Ionic 3アプリとIonic 4アプリの大きな違いの1つは、プロジェクト全体のレイアウトと構造です。v3では、Ionicアプリにはアプリの設定方法とフォルダ構造の外観に関するオリジナルのやり方がありました。v4では、サポートされている各フレームワークの推奨設定に従うように変更されました。

たとえば、アプリがAngularを使用している場合、そのプロジェクト構造はAngular CLIアプリとまったく同じになります。この変更は、対応するのはそれほど難しくありませんが、共通パターンとドキュメントの一貫性を保つのに役立ちます。

<div style="display: flex;">
    <figure style="display: flex; flex-direction: column; width: 50%; margin-right: 5px;">
        <file-tree style="flex: 1">
            <file-tree-directory name="src">
                <file-tree-directory name="app">
                    <file-tree-directory name="about" collapsed></file-tree-directory>
                    <file-tree-directory name="home" collapsed></file-tree-directory>
                    <file-tree-file name="app-routing.module.ts"></file-tree-file>
                    <file-tree-file name="app.component.html"></file-tree-file>
                    <file-tree-file name="app.component.spec.ts"></file-tree-file>
                    <file-tree-file name="app.component.ts"></file-tree-file>
                    <file-tree-file name="app.module.ts"></file-tree-file>
                </file-tree-directory>
                <file-tree-directory name="assets" collapsed></file-tree-directory>
                <file-tree-directory name="environments" collapsed></file-tree-directory>
                <file-tree-directory name="theme" collapsed></file-tree-directory>
                <file-tree-file name="global.scss"></file-tree-file>
                <file-tree-file name="index.html"></file-tree-file>
                <file-tree-file name="karma.conf.js"></file-tree-file>
                <file-tree-file name="main.ts"></file-tree-file>
                <file-tree-file name="polyfills.ts"></file-tree-file>
                <file-tree-file name="test.ts"></file-tree-file>
                <file-tree-file name="tsconfig.app.json"></file-tree-file>
                <file-tree-file name="tsconfig.spec.json"></file-tree-file>
            </file-tree-directory>
            <file-tree-file name=".gitignore"></file-tree-file>
            <file-tree-file name="angular.json"></file-tree-file>
            <file-tree-file name="ionic.config.json"></file-tree-file>
            <file-tree-file name="package.json"></file-tree-file>
            <file-tree-file name="tsconfig.json"></file-tree-file>
            <file-tree-file name="tslint.json"></file-tree-file>
        </file-tree>
        <figcaption>Ionic 4</figcaption>
    </figure>
    <figure style="display: flex; flex-direction: column; width: 50%; margin-left: 5px;">
        <file-tree style="flex: 1">
            <file-tree-directory name="src">
                <file-tree-directory name="app">
                    <file-tree-file name="app.component.html"></file-tree-file>
                    <file-tree-file name="app.html"></file-tree-file>
                    <file-tree-file name="app.module.ts"></file-tree-file>
                    <file-tree-file name="app.scss"></file-tree-file>
                    <file-tree-file name="main.ts"></file-tree-file>
                </file-tree-directory>
                <file-tree-directory name="assets" collapsed></file-tree-directory>
                <file-tree-directory name="pages">
                    <file-tree-directory name="about" collapsed></file-tree-directory>
                    <file-tree-directory name="home" collapsed></file-tree-directory>
                </file-tree-directory>
                <file-tree-directory name="theme" collapsed></file-tree-directory>
                <file-tree-file name="index.html"></file-tree-file>
                <file-tree-file name="manifest.json"></file-tree-file>
                <file-tree-file name="service-worker.js"></file-tree-file>
            </file-tree-directory>
            <file-tree-file name=".gitignore"></file-tree-file>
            <file-tree-file name="ionic.config.json"></file-tree-file>
            <file-tree-file name="package.json"></file-tree-file>
            <file-tree-file name="tsconfig.json"></file-tree-file>
            <file-tree-file name="tslint.json"></file-tree-file>
        </file-tree>
        <figcaption>Ionic 3</figcaption>
    </figure>
</div>

上記の比較は、v4アプリのプロジェクト構造の例です。一般的なAngularプロジェクト開発の経験を持つ開発者にとっては、これはとてもなじみがあるはずです。

`src/`が、アプリのホームディレクトリとなっています。これには`index.html`と画像など、環境設定やアプリ固有の設定ファイルが入っています。

この新しいレイアウトを利用するために、アプリを移行する時は、まずCLIを使用してベースとなる新しいプロジェクトを作成することをお勧めします。次に、新しいプロジェクトのレイアウトを使用して、アプリの機能を1つずつ移行します。Page/Componentなどを`src/app/`フォルダに移動する必要があります。

あなたのIonic設定ファイルにある`type`が適切であることを確認してください。v3のプロジェクトタイプは`ionic-angular`です。v4のプロジェクトタイプは`angular`です。この値が正しくない場合、CLIは正しくないビルドスクリプトを呼び出すことがあります。

以下を例として、`ionic.config.json`をご覧ください。

```json
{
  "name": "my-app",
  "type": "angular"
}
```

## RxJSの変更

v3からv4で、RxJSはバージョン6に更新されました。これは、オペレーターとコアのRxJSの関数のインポートパスのほとんどが変更になります。詳細は<a href="https://github.com/ReactiveX/rxjs/blob/master/MIGRATION.md" target="_blank">RxJS Migration Guide</a>をご覧ください。

## ライフサイクルイベント

v4では、[Angular](https://angular.io/guide/lifecycle-hooks)が提供する一般的なイベントを利用できるようになりました。しかし、場合によっては、遷移してComponentのアニメーションが終了してから発生するイベントを使うことをお勧めします。v3から、`ionViewWillEnter`, `ionViewDidEnter`, `ionViewWillLeave`, `ionViewDidLeave`が移植されました。これらのイベントを利用してして、Ionicの独自のアニメーションシステムとアクションを調整します。

ルート変更中にコンポーネントのアニメーション化が完了したときに発生するイベントにアクセスすることをお勧めします。この場合には、ionViewWillEnter、ionViewDidEnter、ionViewWillLeave、およびionViewDidLeaveV3から移植されてきました。これらのイベントを使用して、Ionicのアニメーションシステムと調整します。

古いイベント`ionViewDidLoad`、`ionViewCanLeave`、`ionViewCanEnter`は削除されました。適切なAngularの選択肢を利用する必要があります。詳細については、[router-outlet docs](/docs/api/router-outlet)のドキュメントをチェックしてください。

## オーバーレイコンポーネント

Ionicの以前のバージョンでは、Loading、Toast、Alertなどのオーバーレイコンポーネントは同期的に生成されていました。Ionic v4では、これらのコンポーネントはすべて非同期に作成されています。この結果、APIはPromiseベースになりました。

```typescript
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

```typescript
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

v4では、ナビゲーションが最も多くの変更がありました。`NavController`はオリジナルのものを使わずに、公式のAngular Routerと統合しました。これは、アプリケーション間で一貫したルーティング体験を提供するだけでなく、はるかに信頼性が高くなります。Angularチームのdocsサイトには、ルーターの詳細を網羅した<a href="http://angular.io/guide/router" target="_blank">excellent guide</a>があります。

ユーザーが慣れ親しんでいるプラットフォーム固有のアニメーションを提供するために、`ion-router-outlet`をAngularアプリ用に作成しました。これはAngularの場合と同様に`router-outlet`機能しますが、スタックベースのナビゲーション（tabs）とアニメーションを提供します。

v4プロジェクトでのナビゲーション機能の詳細な説明は、[Angular navigation guide](/docs/navigation/angular)をご覧ください。


## Lazy Loading

ナビゲーションを変更したため、v4ではLazy Loadingの仕組みも変更となりました。

v3では、一般的にLazy Loadingの設定は次の通りでした。

```typescript
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

```typescript
// home.module.ts
@NgModule({
  imports: [
    IonicModule,
    RouterModule.forChild([{ path: '', component: HomePage }])
  ],
  declarations: [HomePage]
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
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

v4プロジェクトでのLazy Loadingの詳細な説明は、[Angular navigation guide](docs/navigation/angular#lazy-loading-routes)を調べてください。

## マークアップの変更

v4でCustom Elementsに移行したため、各コンポーネントのマークアップに大きな変更があります。これらの変更はすべてCustom Elementsの仕様に準拠しており、ドキュメント化して<a href="https://github.com/ionic-team/ionic/blob/master/angular/BREAKING.md#breaking-changes" target="_blank">GitHubで公開しています。</a>

これらのマークアップの変更を支援するために、TSLintベースの<a href="https://github.com/ionic-team/v4-migration-tslint" target="_blank">移行ツール</a>をリリースしました。これは、問題を検出し、それらのいくつかを自動的に修正することもできます。

## Migrating from Ionic 1.0 to Ionic 4.0 - Overview

### Ionic 1.0 to Ionic 4.0: What’s Involved?

Migrating from Ionic 1 to Ionic 4.0 involves moving from AngularJS (aka Angular 1) to Angular 7+. There are many architectural differences between these versions, so some of the app code will have to be rewritten. The amount of work involved depends on the complexity and size of your app.

One upside is that for the most part, the Ionic UI components you know and love from V1 haven’t changed much. 

Here are some considerations to review before beginning the upgrade:
- **App complexity**: Naturally, the larger and more complex the app is, the longer it will take to migrate.
- **Framework support**: In 2019, Ionic will release full support for React and Vue. You can also use Ionic Framework components [without a framework](/docs/installation/cdn/). Since these are not production ready yet, we recommend sticking with Angular or waiting until the other framework support is available.
- **Budget and team makeup**: The length of a migration project will vary based on the size of your team, the complexity of the app, and the amount of time allotted to make the transition.

### Suggested Strategy
Once your development team has identified a good time frame for beginning the migration, Ionic recommends feature-freezing the Ionic 1 application and getting the code in order: Fix any major bugs, eliminate tech debt, and reorganize as you see fit. Then, identify which features to migrate over and which to abandon. 

Once the Ionic 1 app is stable, create a new Ionic 4.0 project. The majority of the dev team’s attention should be given to the new project; only bugs should be fixed in the Ionic 1 app to ensure that the transition happens as quickly and smoothly as possible.

Once the team is comfortable that the Ionic 4.0 app has become stable and has fulfilled a core set of features, you can then shut down the Ionic 1 app.

### Moving From AngularJS to Angular
Please reference official [Angular upgrade guide](https://angular.io/guide/upgrade) information.

### Ionic Changes
Our Ionic 3.0 to Ionic 4.0 migration sections above may prove to be a useful reference. Generate a new Ionic 4.0 project using the blank starter (see [Starting an App](/docs/building/starting). Spend time getting familiar with Ionic 4.0 components. Happy building!

### Need Assistance?
If your team would like assistance with the migration, please [reach out to us](https://ionicframework.com/enterprise-engine)! Ionic offers Advisory Services, which includes Ionic 4.0 training, architecture reviews, and migration assistance.
