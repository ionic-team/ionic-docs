---
title: "ion-header"
hide_table_of_contents: true
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TOCInline from '@theme/TOCInline';

import Props from '@site/static/auto-generated/header/props.md';
import Events from '@site/static/auto-generated/header/events.md';
import Methods from '@site/static/auto-generated/header/methods.md';
import Parts from '@site/static/auto-generated/header/parts.md';
import CustomProps from '@site/static/auto-generated/header/custom-props.md';
import Slots from '@site/static/auto-generated/header/slots.md';

<head>
  <title>ion-header: Header Parent Component for Ionic Framework Apps</title>
  <meta name="description" content="ion-headerは、ツールバーを保持する親コンポーネントです。ion-headerは、ページの3つのルート要素のうちの1つである必要があることに注意することが重要です。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<h2 className="table-of-contents__title">コンテンツ</h2>

<TOCInline
  toc={toc}
  maxHeadingLevel={2}
/>



Headerは、`toolbar`コンポーネントを保持する親コンポーネントです。
`ion-header` はページの3つのルート要素のうちの1つでなければならないことに注意してください。

## フェードヘッダー

ページのメイン `ion-header` で `collapse` プロパティを `'fade'` に設定すると、ユーザがスクロールするたびにツールバーの背景色がフェードインするようになります。これは、多くのネイティブ iOS アプリケーションで見られるのと同じフェード効果を提供します。

この機能は、 [Collapsible Large Titles](https://ionicframework.com/docs/api/title#collapsible-large-titles) とも組み合わせることができます。 `collapse="condense"` 値は、`ion-content` 内の `ion-header` に設定する必要があります。 `collapse="fade"` 値は、`ion-content` の外側の `ion-header` に設定する必要があります。

### 仮想スクロールの使用方法

フェードや折りたたみ可能なラージタイトルは、機能するためにスクロールコンテナが必要です。仮想スクロールを使用する場合は、`ion-content` のスクロールを無効にして、`.ion-content-scroll-host` クラスターゲットでどの要素コンテナがスクロールコンテナを担当するかを指定する必要があります。

```html
<ion-header collapse="fade">
  <ion-toolbar>
    <ion-title>Header</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content fullscreen="true" scroll-y="false">
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">Header</ion-title>
    </ion-toolbar>
  </ion-header>
  <virtual-scroll-element class="ion-content-scroll-host">
    <!-- Your virtual scroll content -->
  </virtual-scroll-element>
</ion-content>
```



## 使い方

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button></ion-back-button>
    </ion-buttons>
    <ion-title>My Navigation Bar</ion-title>
  </ion-toolbar>

  <ion-toolbar>
    <ion-title>Subheader</ion-title>
  </ion-toolbar>
</ion-header>

<!-- Header without a border -->
<ion-header class="ion-no-border">
  <ion-toolbar>
    <ion-title>Header - No Border</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">My Navigation Bar</ion-title>
    </ion-toolbar>
  </ion-header>
</ion-content>

<!-- Fade Header with collapse header -->
<ion-header collapse="fade" [translucent]="true">
  <ion-toolbar>
    <ion-title>Header</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content [fullscreen]="true">
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">Header</ion-title>
    </ion-toolbar>
  </ion-header>
</ion-content>
```


</TabItem>


<TabItem value="javascript">

```html
<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button></ion-back-button>
    </ion-buttons>
    <ion-title>My Navigation Bar</ion-title>
  </ion-toolbar>

  <ion-toolbar>
    <ion-title>Subheader</ion-title>
  </ion-toolbar>
</ion-header>

<!-- Header without a border -->
<ion-header class="ion-no-border">
  <ion-toolbar>
    <ion-title>Header - No Border</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">My Navigation Bar</ion-title>
    </ion-toolbar>
  </ion-header>
</ion-content>

<!-- Fade Header with collapse header -->
<ion-header collapse="fade" translucent="true">
  <ion-toolbar>
    <ion-title>Header</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content fullscreen="true">
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">Header</ion-title>
    </ion-toolbar>
  </ion-header>
</ion-content>
```


</TabItem>


<TabItem value="react">

```tsx
import React from 'react';
import { IonHeader, IonContent, IonToolbar, IonButtons, IonBackButton, IonTitle } from '@ionic/react';

export const HeaderExample: React.FC = () => (
  <>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/" />
        </IonButtons>
        <IonTitle>My Navigation Bar</IonTitle>
      </IonToolbar>
    
      <IonToolbar>
        <IonTitle>Subheader</IonTitle>
      </IonToolbar>
    </IonHeader>
    
    {/*-- Header without a border --*/}
    <IonHeader className="ion-no-border">
     <IonToolbar>
      <IonTitle>Header - No Border</IonTitle>
     </IonToolbar>
    </IonHeader>
    
    <IonContent>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">My Navigation Bar</IonTitle>
        </IonToolbar>
      </IonHeader>
    </IonContent>
    
    {/*-- Fade Header with collapse header --*/}
    <IonHeader collapse="fade" translucent={true}>
      <IonToolbar>
        <IonTitle>Header</IonTitle>
      </IonToolbar>
    </IonHeader>
    
    <IonContent fullscreen={true}>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Header</IonTitle>
        </IonToolbar>
      </IonHeader>
    </IonContent>
  </>
);
```

</TabItem>


<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'header-example',
  styleUrl: 'header-example.css'
})
export class HeaderExample {
  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button></ion-back-button>
          </ion-buttons>
          <ion-title>My Navigation Bar</ion-title>
        </ion-toolbar>

        <ion-toolbar>
          <ion-title>Subheader</ion-title>
        </ion-toolbar>
      </ion-header>,

      {/*-- Header without a border --*/}
      <ion-header class="ion-no-border">
        <ion-toolbar>
          <ion-title>Header - No Border</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">My Navigation Bar</ion-title>
          </ion-toolbar>
        </ion-header>
      </ion-content>,
      
      {/*-- Fade Header with collapse header --*/}
      <ion-header collapse="fade" translucent={true}>
        <ion-toolbar>
          <ion-title>Header</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ion-content fullscreen={true}>
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Header</ion-title>
          </ion-toolbar>
        </ion-header>
      </ion-content>
    ];
  }
}
```


</TabItem>


<TabItem value="vue">

```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button></ion-back-button>
      </ion-buttons>
      <ion-title>My Navigation Bar</ion-title>
    </ion-toolbar>
  
    <ion-toolbar>
      <ion-title>Subheader</ion-title>
    </ion-toolbar>
  </ion-header>
  
  <!-- Header without a border -->
  <ion-header class="ion-no-border">
    <ion-toolbar>
      <ion-title>Header - No Border</ion-title>
    </ion-toolbar>
  </ion-header>
  
  <ion-content>
    <ion-header collapse="condense">
      <ion-toolbar>
        <ion-title size="large">My Navigation Bar</ion-title>
      </ion-toolbar>
    </ion-header>
  </ion-content>
  
  <!-- Fade Header with collapse header -->
  <ion-header collapse="fade" :translucent="true">
    <ion-toolbar>
      <ion-title>Header</ion-title>
    </ion-toolbar>
  </ion-header>
  
  <ion-content :fullscreen="true">
    <ion-header collapse="condense">
      <ion-toolbar>
        <ion-title size="large">Header</ion-title>
      </ion-toolbar>
    </ion-header>
  </ion-content>
</template>

<script>
import { 
  IonBackButton, 
  IonButtons, 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { 
    IonBackButton, 
    IonButtons, 
    IonContent, 
    IonHeader, 
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