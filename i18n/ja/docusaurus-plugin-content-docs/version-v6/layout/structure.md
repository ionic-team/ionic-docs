---
title: 構造
initialTab: 'preview'
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>レイアウトの構成 | Structures for Content Layout on Ionic Apps</title>
  <meta
    name="description"
    content="Ionic provides several different layouts that can be used to structure an app and its content—from single page layouts, to split pane views and modals."
  />
</head>

Ionic Frameworkは、アプリを構成するために使用できるいくつかの異なるレイアウトを提供します。シングルページレイアウトから、スプリットペインビューやモーダルまで、さまざまなレイアウトがあります。

## HeaderとFooterのレイアウト

### Header

<aside>
  <DocsCard href="../api/header" header="Learn More" icon="/icons/component-header-icon.png">
    <code>ion-header</code> API docs
  </DocsCard>
</aside>

最もシンプルなレイアウトは、[header](../api/header.md) と [content](../api/content.md) で構成されています。アプリのほとんどのページは、一般にこの両方を持ちますが、contentを使用するためにheaderは必要ありません。

```html
<ion-app>
  <ion-header>
    <ion-toolbar>
      <ion-title>Header</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content class="ion-padding">
    <h1>Main Content</h1>
  </ion-content>
</ion-app>
```

### Footer

<aside>
  <DocsCard href="../api/footer" header="Learn More" icon="/icons/component-footer-icon.png">
    <code>ion-footer</code> API docs
  </DocsCard>
</aside>

ご覧のように、footerのツールバーはコンテンツの上に表示されます。アプリでは、コンテンツの下にツールバーを表示する必要がある場合があり、そのような場合にfooterが使用されます。

```html
<ion-app>
  <ion-content class="ion-padding">
    <h1>Main Content</h1>
  </ion-content>

  <ion-footer>
    <ion-toolbar>
      <ion-title>Footer</ion-title>
    </ion-toolbar>
  </ion-footer>
</ion-app>
```

### Header と Footer

また、これらを1つのページにまとめて、コンテンツの上と下にツールバーを表示させることも可能です。

```html
<ion-app>
  <ion-header>
    <ion-toolbar>
      <ion-title>Header</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content class="ion-padding">
    <h1>Main Content</h1>
  </ion-content>

  <ion-footer>
    <ion-toolbar>
      <ion-title>Footer</ion-title>
    </ion-toolbar>
  </ion-footer>
</ion-app>
```

### ライブでの実装例

この設定のライブ例を、Angularでは [こちら](https://stackblitz.com/edit/ionic-ng-header-footer) 、Reactでは [こちら](https://stackblitz.com/edit/ionic-react-head-foot) で見ることができます。

## タブレイアウト

水平な[tabs](../api/tabs.md)からなるレイアウトを使用すると、ユーザーはコンテンツビュー間をすばやく切り替えることができます。各タブには、静的コンテンツや、`ion-router-outlet` や `ion-nav` を利用したナビゲーションスタックを格納することができます。

```html
<ion-app>
  <ion-tabs>
    <ion-tab tab="home">
      <h1>Home Content</h1>
    </ion-tab>
    <ion-tab tab="settings">
      <h1>Settings Content</h1>
    </ion-tab>

    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="home">
        <ion-label>Home</ion-label>
        <ion-icon name="home"></ion-icon>
      </ion-tab-button>
      <ion-tab-button tab="settings">
        <ion-label>Settings</ion-label>
        <ion-icon name="settings"></ion-icon>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</ion-app>
```

### ライブでの実装例

この設定は、Angularでは [こちら](https://stackblitz.com/edit/ionic-ng-tabs) 、Reactでは [こちら](https://stackblitz.com/edit/ionic-react-tab-layout) で実例を見ることができます。

## メニューレイアウト

モバイルアプリの標準的なレイアウトには、ボタンをクリックするか、横からスワイプして開くことで サイドメニュー [menu](../api/menu.md) を切り替えられる機能が含まれています。サイドメニューは一般的にナビゲーションのために使用されますが、任意のコンテンツを含むことができます。

```html
<ion-app>
  <ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-list-header> Navigate </ion-list-header>
        <ion-menu-toggle auto-hide="false">
          <ion-item button>
            <ion-icon slot="start" name="home"></ion-icon>
            <ion-label> Home </ion-label>
          </ion-item>
        </ion-menu-toggle>
      </ion-list>
    </ion-content>
  </ion-menu>

  <ion-page class="ion-page" id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-toggle>
            <ion-button>
              <ion-icon slot="icon-only" name="menu"></ion-icon>
            </ion-button>
          </ion-menu-toggle>
        </ion-buttons>
        <ion-title>Header</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h1>Main Content</h1>
      <p>Click the icon in the top left to toggle the menu.</p>
    </ion-content>
  </ion-page>
</ion-app>

<ion-menu-controller></ion-menu-controller>
```

### ライブでの実装例

この設定は、Angularでは [こちら](https://stackblitz.com/edit/ionic-ng-menu-layout) 、Reactでは [こちら](https://stackblitz.com/edit/ionic-react-menu)で 実例を見ることができます。

## 分割ペインレイアウト

[split pane](../api/split-pane.md) レイアウトは、前述のレイアウトを組み合わせることができるため、より複雑な構造を持っています。これは、ビューポートが指定されたブレークポイントより上にある場合に、複数のビューを表示することができます。デバイスの画面サイズが一定以下の場合、分割ペインビューは非表示になります。

デフォルトでは、画面が `768px` または `md` ブレークポイントより大きい場合に分割ペインビューが表示されますが、`when` プロパティを設定することで、異なるブレークポイントを使用するようにカスタマイズすることが可能です。以下は、`sm`スクリーン以上、またはビューポートが `576px` より大きい場合に表示されるメニューを分割ペインに含む例です。これよりアプリが小さくなるようにブラウザの水平サイズを変更することで、分割ペインの表示が消えます。

```html
<ion-app>
  <ion-split-pane when="sm" content-id="main-content">
    <ion-menu content-id="main-content">
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content>
        <ion-list>
          <ion-list-header> Navigate </ion-list-header>
          <ion-menu-toggle auto-hide="false">
            <ion-item button>
              <ion-icon slot="start" name="home"></ion-icon>
              <ion-label> Home </ion-label>
            </ion-item>
          </ion-menu-toggle>
        </ion-list>
      </ion-content>
    </ion-menu>

    <div class="ion-page" id="main-content">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-toggle>
              <ion-button>
                <ion-icon slot="icon-only" name="menu"></ion-icon>
              </ion-button>
            </ion-menu-toggle>
          </ion-buttons>
          <ion-title>Header</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <h1>Main Content</h1>
      </ion-content>
    </div>
  </ion-split-pane>
</ion-app>
```

重要なのは、分割ペインで指定した `content-id` に一致する `id` を持つ要素が、常に表示されるメインコンテンツとなることです。これは、[ion-nav](../api/nav.md), [ion-router-outlet](../api/router-outlet.md), または [ion-tabs](../api/tabs.md) など任意の要素にすることが可能です。

### ライブでの実装例

Angularでの実装例は [こちら](https://stackblitz.com/edit/ionic-ng-split-pane) 、Reactでの実装例は [こちら](https://stackblitz.com/edit/ionic-react-split-pane) をご覧ください。
