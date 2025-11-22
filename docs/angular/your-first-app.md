---
title: 'はじめてのIonicアプリ: Angular'
sidebar_label: はじめてのアプリ
---

<head>
  <title>Angularで最初のIonicモバイルアプリを構築 | Ionic Capacitor Camera</title>
  <meta
    name="description"
    content="このAngularチュートリアルでは、現実的なアプリを段階的に作成することで、Ionicアプリ開発の基礎を学びます。Angularで最初のIonicアプリを実行する方法を学びます。"
  />
</head>

Ionic の素晴らしいところは、1 つのコードベースで、使い慣れた Web ツールと言語を使用して任意のプラットフォーム用にビルドできることです。現実的なアプリを段階的に作成しながら、Ionicアプリ開発の基礎を学びましょう。

3つのプラットフォームすべてで実行されている完成したアプリは次のとおりです：

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/0ASQ13Y1Rk4"
  frameBorder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

:::note
Ionic 4とCordovaをカバーしたこのガイドの以前のバージョンを探していますか？[こちらを参照してください。](../developer-resources/guides/first-app-v4/intro.md)
:::

## 構築するもの

デバイスのカメラで写真を撮影し、グリッドに表示し、デバイスに永続的に保存する機能を提供するPhoto Galleryアプリを作成します。

ハイライトには以下が含まれます：

- Ionic Frameworkの[UIコンポーネント](../components.md)を使用して、Web、iOS、Androidで実行される1つのAngularベースのコードベース。
- Ionicの公式ネイティブアプリランタイムである[Capacitor](https://capacitorjs.com)を使用して、ネイティブiOSおよびAndroidモバイルアプリとしてデプロイ。
- Capacitorの[Camera](../native/camera.md)、[Filesystem](../native/filesystem.md)、[Preferences](../native/preferences.md) APIによって提供されるPhoto Gallery機能。

このガイドで参照されている[完全なアプリコード](https://github.com/ionic-team/tutorial-photo-gallery-angular)をGitHubで見つけてください。

## 必要なツールのダウンロード

最適なIonic開発体験を確保するために、以下をすぐにダウンロードしてインストールしてください：

- **Node.js** - Ionicエコシステムと対話するため。[LTSバージョンをこちらからダウンロード](https://nodejs.org/en/)。
- **コードエディタ** - コードを書くため！[Visual Studio Code](https://code.visualstudio.com/)をお勧めします。
- **コマンドラインインターフェース/ターミナル（CLI）**：
  - **Windows**ユーザー：最適なIonic体験のために、管理者モードで実行される組み込みコマンドライン（cmd）またはPowershell CLIをお勧めします。
  - **Mac/Linux**ユーザー：事実上、どのターミナルでも動作します。

## Ionicツールのインストール

コマンドラインターミナルで以下を実行して、Ionic CLI（`ionic`）、デバイスやシミュレーター/エミュレーターでネイティブバイナリを実行するために使用される`native-run`、ネイティブアプリのアイコンとスプラッシュスクリーンを生成するために使用される`cordova-res`をインストールします：

:::note
Visual Studio Codeでターミナルを開くには、Terminal -> New Terminalに移動します。
:::

```shell
npm install -g @ionic/cli native-run cordova-res
```

:::note
`-g`オプションは_グローバルにインストール_を意味します。パッケージをグローバルにインストールすると、`EACCES`権限エラーが発生する可能性があります。

昇格された権限なしでnpmをグローバルに操作するように設定することを検討してください。詳細については、[権限エラーの解決](../developing/tips.md#resolving-permission-errors)を参照してください。
:::

## アプリの作成

次に、"Tabs" というアプリテンプレートを使用して Ionic Angular アプリを生成し、Native 機能を使うために Capacitor を追加します。

```shell
ionic start photo-gallery tabs --type=angular
```

:::note

`NgModules` と `Standalone` のどちらかを選択するプロンプトが表示されたら、このチュートリアルは `NgModules` のアプローチに従っているので、`NgModules` を選択する。

:::

このスタータープロジェクトには、Ionic 開発のために事前に構成された 3 つのページとベストプラクティスが用意されています。共通の構成要素がすでに配置されているため、機能を簡単に追加できます！

次に、アプリのフォルダに移動します:

```shell
cd photo-gallery
```

次に、アプリのネイティブ機能を動作させるために必要なCapacitorプラグインをインストールする必要があります：

```shell
npm install @capacitor/camera @capacitor/preferences @capacitor/filesystem
```

### PWA Elements

[Camera API](../native/camera.md)を含む一部のCapacitorプラグインは、Ionicの[PWA Elementsライブラリ](https://github.com/ionic-team/pwa-elements)を介してWebベースの機能とUIを提供します。

これは別の依存関係なので、次にインストールします：

```shell
npm install @ionic/pwa-elements
```

Next, import `@ionic/pwa-elements` by editing `src/main.ts`.

```ts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
// CHANGE: Add the following import
import { defineCustomElements } from '@ionic/pwa-elements/loader';

// CHANGE: Call the element loader before the `bootstrapModule` call
defineCustomElements(window);

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.log(err));
```

これで完了です！それでは、楽しい部分 - アプリの動作を見てみましょう。

## アプリを起動

次のコマンドを実行してください:

```shell
ionic serve
```

そして、完成です！IonicアプリがWebブラウザで実行されています。アプリの大部分はブラウザ内で直接ビルドおよびテストできるため、開発とテストの速度が大幅に向上します。

## Photo Gallery

3つのタブがあります。「Tab2」タブをクリックしてください。これは空白のキャンバス、つまりPhoto Galleryに変換するのに最適な場所です。Ionic CLIにはLive Reload機能があるため、変更を加えて保存すると、アプリがすぐに更新されます！

![Animated GIF showing the live reload feature in an Ionic app, with changes in code immediately updating the app in a web browser.](/img/guides/first-app-cap-ng/email-photogallery.gif 'Live Reload Feature in Ionic App')

`/src/app/tab2/tab2.page.html`を開きます。次のようになっています：

```html
<ion-header [translucent]="true">
  <ion-toolbar>
    <ion-title> Tab 2 </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content [fullscreen]="true">
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">Tab 2</ion-title>
    </ion-toolbar>
  </ion-header>

  <app-explore-container name="Tab 2 page"></app-explore-container>
</ion-content>
```

`ion-header`は上部のナビゲーションとツールバーを表し、「Tab 2」がタイトルです（iOSの[折りたたみ可能な大きなタイトル](../api/title.md#collapsible-large-titles)サポートにより、2つあります）。両方の`ion-title`要素を次のように変更します：

```html
<ion-header [translucent]="true">
  <ion-toolbar>
    <!-- CHANGE: Update title -->
    <ion-title> Photo Gallery </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content [fullscreen]="true">
  <ion-header collapse="condense">
    <ion-toolbar>
      <!-- CHANGE: Update title -->
      <ion-title size="large">Photo Gallery</ion-title>
    </ion-toolbar>
  </ion-header>

  <app-explore-container name="Tab 2 page"></app-explore-container>
</ion-content>
```

アプリの視覚的な側面を`<ion-content>`に配置します。この場合、デバイスのカメラを開くボタンと、カメラでキャプチャした画像を表示する場所を追加します。まず、ページの下部に[フローティングアクションボタン](../api/fab.md)（FAB）を追加し、カメラ画像をアイコンとして設定します。

```html
<ion-header [translucent]="true">
  <ion-toolbar>
    <ion-title>Photo Gallery</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">Photo Gallery</ion-title>
    </ion-toolbar>
  </ion-header>

  <!-- CHANGE: Add the floating action button -->
  <ion-fab vertical="bottom" horizontal="center" slot="fixed">
    <ion-fab-button>
      <ion-icon name="camera"></ion-icon>
    </ion-fab-button>
  </ion-fab>

  <!-- CHANGE: Remove or comment out `app-explore-container` -->
  <!-- <app-explore-container name="Tab 2 page"></app-explore-container> -->
</ion-content>
```

次に、`src/app/tabs/tabs.page.html`を開きます。中央のタブボタンのラベルを「Photos」に変更し、`ellipse`アイコンを`images`に変更します。

```html
<ion-tabs>
  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="tab1" href="/tabs/tab1">
      <ion-icon aria-hidden="true" name="triangle"></ion-icon>
      <ion-label>Tab 1</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="tab2" href="/tabs/tab2">
      <!-- CHANGE: Update icon -->
      <ion-icon aria-hidden="true" name="images"></ion-icon>
      <!-- CHANGE: Update label -->
      <ion-label>Photos</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="tab3" href="/tabs/tab3">
      <ion-icon aria-hidden="true" name="square"></ion-icon>
      <ion-label>Tab 3</ion-label>
    </ion-tab-button>
  </ion-tab-bar>
</ion-tabs>
```

これは、Ionicでできるすべての素晴らしいことの始まりに過ぎません。次に、Webでカメラ撮影機能を実装し、その後iOSとAndroid用にビルドします。
