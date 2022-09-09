---
title: "ion-footer"
hide_table_of_contents: true
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@site/static/auto-generated/footer/props.md';
import Events from '@site/static/auto-generated/footer/events.md';
import Methods from '@site/static/auto-generated/footer/methods.md';
import Parts from '@site/static/auto-generated/footer/parts.md';
import CustomProps from '@site/static/auto-generated/footer/custom-props.md';
import Slots from '@site/static/auto-generated/footer/slots.md';

<head>
  <title>Page Footer | Ionic App Footer: Wrapper Root Page Component</title>
  <meta name="description" content="footerはページの下部に配置されるルートコンポーネントのことです。Ionicのfooterはion-toolbarのラッパーとして、コンテンツ領域が正しいサイズであることを確認することができます。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';
import TOCInline from '@theme/TOCInline';



<h2 className="table-of-contents__title">コンテンツ</h2>

<TOCInline
  toc={toc}
  maxHeadingLevel={2}
/>



Footerは、ページの最下部にあるページのルートコンポーネントです。
Footerは、コンテンツ領域が正しくサイズ設定されていることを確認するために、`ion-toolbar` のラッパーとして使用できます。

## フェードフッター

ページの `ion-footer` で `collapse` プロパティを `'fade'` に設定すると、ユーザがスクロールするたびにツールバーの背景色がフェードインしていくようになります。これは、多くのネイティブ iOS アプリケーションで見られるのと同じフェード効果を提供します。

### 仮想スクロールでの使用方法

フェードフッターを機能させるには、スクロールコンテナが必要です。仮想スクロールを使用する場合は、`ion-content` のスクロールを無効にし、`.ion-content-scroll-host` クラスターゲットで、どの要素コンテナがスクロールコンテナを担当するのかを指定する必要があります。

```html
<ion-content scroll-y="false">
  <virtual-scroll-element class="ion-content-scroll-host">
    <!-- Your virtual scroll content -->
  </virtual-scroll-element>
</ion-content>
<ion-footer collapse="fade">
  <ion-toolbar>
    <ion-title>Footer</ion-title>
  </ion-toolbar>
</ion-footer>
```



## 使い方

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-content></ion-content>

<!-- Footer without a border -->
<ion-footer class="ion-no-border">
  <ion-toolbar>
    <ion-title>Footer - No Border</ion-title>
  </ion-toolbar>
</ion-footer>

<ion-footer>
  <ion-toolbar>
    <ion-title>Footer</ion-title>
  </ion-toolbar>
</ion-footer>

<!-- Fade Footer -->
<ion-footer collapse="fade">
  <ion-toolbar>
    <ion-title>Footer</ion-title>
  </ion-toolbar>
</ion-footer>
```


</TabItem>


<TabItem value="javascript">

```html
<ion-content></ion-content>

<!-- Footer without a border -->
<ion-footer class="ion-no-border">
  <ion-toolbar>
    <ion-title>Footer - No Border</ion-title>
  </ion-toolbar>
</ion-footer>

<ion-footer>
  <ion-toolbar>
    <ion-title>Footer</ion-title>
  </ion-toolbar>
</ion-footer>

<!-- Fade Footer -->
<ion-footer collapse="fade">
  <ion-toolbar>
    <ion-title>Footer</ion-title>
  </ion-toolbar>
</ion-footer>
```


</TabItem>


<TabItem value="react">

```tsx
import React from 'react';
import { IonContent, IonFooter, IonToolbar, IonTitle } from '@ionic/react';

export const FooterExample: React.FC = () => (
  <>
    <IonContent />
    
    {/*-- Footer without a border --*/}
    <IonFooter className="ion-no-border">
      <IonToolbar>
        <IonTitle>Footer - No Border</IonTitle>
      </IonToolbar>
    </IonFooter>

    <IonFooter>
      <IonToolbar>
        <IonTitle>Footer</IonTitle>
      </IonToolbar>
    </IonFooter>
    
    {/*-- Fade Footer --*/}
    <IonFooter collapse="fade">
      <IonToolbar>
        <IonTitle>Footer</IonTitle>
      </IonToolbar>
    </IonFooter>
  </>
);
```


</TabItem>


<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'footer-example',
  styleUrl: 'footer-example.css'
})
export class FooterExample {
  render() {
    return [
      <ion-content></ion-content>,

      {/*-- Footer without a border --*/}
      <ion-footer class="ion-no-border">
        <ion-toolbar>
          <ion-title>Footer - No Border</ion-title>
        </ion-toolbar>
      </ion-footer>,

      <ion-footer>
        <ion-toolbar>
          <ion-title>Footer</ion-title>
        </ion-toolbar>
      </ion-footer>,
      
      {/*-- Fade Footer --*/}
      <ion-footer collapse="fade">
        <ion-toolbar>
          <ion-title>Footer</ion-title>
        </ion-toolbar>
      </ion-footer>
    ];
  }
}
```


</TabItem>


<TabItem value="vue">

```html
<template>
  <ion-content></ion-content>
  
  <!-- Footer without a border -->
  <ion-footer class="ion-no-border">
    <ion-toolbar>
      <ion-title>Footer - No Border</ion-title>
    </ion-toolbar>
  </ion-footer>
  
  <ion-footer>
    <ion-toolbar>
      <ion-title>Footer</ion-title>
    </ion-toolbar>
  </ion-footer>
  
  <!-- Fade Footer -->
  <ion-footer collapse="fade">
    <ion-toolbar>
      <ion-title>Footer</ion-title>
    </ion-toolbar>
  </ion-footer>
</template>

<script>
import { IonContent, IonFooter, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonContent, IonFooter, IonTitle, IonToolbar }
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