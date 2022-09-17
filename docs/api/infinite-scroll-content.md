---
title: "ion-infinite-scroll-content"
hide_table_of_contents: true
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TOCInline from '@theme/TOCInline';

import Props from '@site/static/auto-generated/infinite-scroll-content/props.md';
import Events from '@site/static/auto-generated/infinite-scroll-content/events.md';
import Methods from '@site/static/auto-generated/infinite-scroll-content/methods.md';
import Parts from '@site/static/auto-generated/infinite-scroll-content/parts.md';
import CustomProps from '@site/static/auto-generated/infinite-scroll-content/custom-props.md';
import Slots from '@site/static/auto-generated/infinite-scroll-content/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<h2 className="table-of-contents__title">コンテンツ</h2>

<TOCInline
  toc={toc}
  maxHeadingLevel={2}
/>



`ion-infinite-scroll-content` コンポーネントは、`ion-infinite-scroll` で使用されるデフォルトの子コンポーネントです。無限スクロールのスピナーが表示されます。このスピナーはプラットフォームに応じて最適に表示され、無限スクロールの状態に応じて外観が変化します。`loadingSpinner` and `loadingText` プロパティを設定することにより、既定値のスピナーを変更したり、テキストを追加することができます。



## 使い方

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-content>
  <ion-infinite-scroll>
    <ion-infinite-scroll-content
      loadingSpinner="bubbles"
      loadingText="Loading more data…">
    </ion-infinite-scroll-content>
  </ion-infinite-scroll>
</ion-content>
```


</TabItem>


<TabItem value="javascript">

```html
<ion-content>
  <ion-infinite-scroll>
    <ion-infinite-scroll-content
      loading-spinner="bubbles"
      loading-text="Loading more data…">
    </ion-infinite-scroll-content>
  </ion-infinite-scroll>
</ion-content>
```


</TabItem>


<TabItem value="react">

```tsx
import React from 'react';
import { IonContent, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/react';

export const InfiniteScrollExample: React.FC = () => (
  <IonContent>
    <IonInfiniteScroll>
      <IonInfiniteScrollContent
        loadingSpinner="bubbles"
        loadingText="Loading more data...">
      </IonInfiniteScrollContent>
    </IonInfiniteScroll>
  </IonContent>
);
```

</TabItem>


<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'infinite-scroll-content-example',
  styleUrl: 'infinite-scroll-content-example.css'
})
export class InfiniteScrollContentExample {
  render() {
    return [
      <ion-content>
        <ion-infinite-scroll>
          <ion-infinite-scroll-content
            loadingSpinner="bubbles"
            loadingText="Loading more data...">
          </ion-infinite-scroll-content>
        </ion-infinite-scroll>
      </ion-content>
    ];
  }
}
```

</TabItem>


<TabItem value="vue">

```html
<template>
  <ion-page>
    <ion-content>
      <ion-infinite-scroll>
        <ion-infinite-scroll-content
          loading-spinner="bubbles"
          loading-text="Loading more data…">
        </ion-infinite-scroll-content>
      </ion-infinite-scroll>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonPage
 } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    IonContent,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonPage
  }
});
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