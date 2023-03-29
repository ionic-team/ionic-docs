---
title: "ion-split-pane"
hide_table_of_contents: true
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v6/split-pane/props.md';
import Events from '@ionic-internal/component-api/v6/split-pane/events.md';
import Methods from '@ionic-internal/component-api/v6/split-pane/methods.md';
import Parts from '@ionic-internal/component-api/v6/split-pane/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/split-pane/custom-props.md';
import Slots from '@ionic-internal/component-api/v6/split-pane/slots.md';

<head>
  <title>ion-split-pane: Split Plane View for Menus and Multi-View Layouts</title>
  <meta name="description" content="ion-split-paneは、マルチビューのアプリレイアウトを作成する際に便利です。これにより、メニューなどのUI要素を、ビューポートの幅が広がるにつれて表示することができます。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';
import TOCInline from '@theme/TOCInline';

<EncapsulationPill type="shadow" />

<h2 className="table-of-contents__title">コンテンツ</h2>

<TOCInline
  toc={toc}
  maxHeadingLevel={2}
/>



Split-Paneはマルチビューレイアウトを作成するときに便利です。
ビューポートの幅を広げると、メニューのようなUI要素を表示できます。

デバイスの画面幅が特定のサイズより小さい場合、分割ペインは縮小され、メニューは非表示になります。これは、ブラウザで提供され、アプリストアを通じてスマートフォンやタブレットにデプロイされるアプリを作成するのに理想的な動作です。


## Setting Breakpoints

デフォルトでは、画面が992pxを超えると分割ペインが拡張表示されます。これをカスタマイズするには、 `when` プロパティにブレークポイントを渡します。`when` プロパティには、真偽値、有効なメディア・クエリー、またはIonicの事前定義サイズのいずれかを指定できます。


```html
<!-- can be "xs", "sm", "md", "lg", or "xl" -->
<ion-split-pane when="md"></ion-split-pane>

<!-- can be any valid media query https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries -->
<ion-split-pane when="(min-width: 40px)"></ion-split-pane>
```


 | Size | Value                 | Description                                                           |
 |------|-----------------------|-----------------------------------------------------------------------|
 | `xs` | `(min-width: 0px)`    | Show the split-pane when the min-width is 0px (meaning, always)       |
 | `sm` | `(min-width: 576px)`  | Show the split-pane when the min-width is 576px                       |
 | `md` | `(min-width: 768px)`  | Show the split-pane when the min-width is 768px                       |
 | `lg` | `(min-width: 992px)`  | Show the split-pane when the min-width is 992px (default break point) |
 | `xl` | `(min-width: 1200px)` | Show the split-pane when the min-width is 1200px                      |




## 使い方

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-split-pane contentId="main">
  <!--  the side menu  -->
  <ion-menu contentId="main">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
  </ion-menu>

  <!-- the main content -->
  <ion-router-outlet id="main"></ion-router-outlet>
</ion-split-pane>
```


</TabItem>


<TabItem value="javascript">

```html
<ion-split-pane content-id="main">
  <!--  the side menu  -->
  <ion-menu content-id="main">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
  </ion-menu>

  <!-- the main content -->
  <ion-content id="main">
    <h1>Hello</h1>
  </ion-content>
</ion-split-pane>
```


</TabItem>


<TabItem value="react">

```tsx
import React from 'react';
import {
  IonSplitPane,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonRouterOutlet,
  IonContent,
  IonPage
} from '@ionic/react';

export const SplitPlaneExample: React.SFC<{}> = () => (
  <IonContent>
    <IonSplitPane contentId="main">
      {/*--  the side menu  --*/}
      <IonMenu contentId="main">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonMenu>

      {/*-- the main content --*/}
      <IonPage id="main"/>
    </IonSplitPane>
  </IonContent>
);
```


</TabItem>


<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'split-pane-example',
  styleUrl: 'split-pane-example.css'
})
export class SplitPaneExample {
  render() {
    return [
      <ion-split-pane content-id="main">
        {/*  the side menu */}
        <ion-menu content-id="main">
          <ion-header>
            <ion-toolbar>
              <ion-title>Menu</ion-title>
            </ion-toolbar>
          </ion-header>
        </ion-menu>

        {/* the main content */}
        <ion-router-outlet id="main"></ion-router-outlet>
      </ion-split-pane>
    ];
  }
}
```


</TabItem>


<TabItem value="vue">

```html
<template>
  <ion-split-pane content-id="main">
    <!--  the side menu  -->
    <ion-menu content-id="main">
      <ion-header>
        <ion-toolbar>
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>
    </ion-menu>

    <!-- the main content -->
    <ion-router-outlet id="main"></ion-router-outlet>
  </ion-split-pane>
</template>

<script>
import { 
  IonHeader, 
  IonMenu, 
  IonRouterOutlet, 
  IonSplitPane, 
  IonTitle, 
  IonToolbar
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    IonHeader, 
    IonMenu, 
    IonRouterOutlet, 
    IonSplitPane, 
    IonTitle, 
    IonToolbar
  }
});
</script>
```


</TabItem>

</Tabs>

## プロパティ
<Props />

## イベント
<Events />

## メソッド
<Methods />

## CSS Shadow Parts
<Parts />

## CSSカスタムプロパティ
<CustomProps />

## Slots
<Slots />