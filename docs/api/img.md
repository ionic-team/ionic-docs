---
title: "ion-img"
hide_table_of_contents: true
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v6/img/props.md';
import Events from '@ionic-internal/component-api/v6/img/events.md';
import Methods from '@ionic-internal/component-api/v6/img/methods.md';
import Parts from '@ionic-internal/component-api/v6/img/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/img/custom-props.md';
import Slots from '@ionic-internal/component-api/v6/img/slots.md';

<head>
  <title>Img Tag to Lazy Load Images in Viewport | ion-img Tag</title>
  <meta name="description" content="Imgタグは、タグがビューポートにあるときに、画像を遅延して読み込みます。大きなリストを作成する際にこのコンポーネントを利用すると、画像が表示されているときだけ読み込まれます。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';
import TOCInline from '@theme/TOCInline';

<EncapsulationPill type="shadow" />

<h2 className="table-of-contents__title">コンテンツ</h2>

<TOCInline
  toc={toc}
  maxHeadingLevel={2}
/>



Img は、タグがビューポートに表示されているときに画像をLazy Loadするタグです。これは、画像が表示されているときにのみロードされるため、巨大なリストを生成する場合に非常に便利です。このコンポーネントは [Intersection Observer](https://caniuse.com/#feat=intersectionobserver) を内部的に使用します。Intersection Observerは、最近のほとんどのブラウザでサポートされていますが、サポートされていない場合は `setTimeout` で処理されます。




## 使い方

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-list>
  <ion-item *ngFor="let item of items">
    <ion-thumbnail slot="start">
      <ion-img [src]="item.src"></ion-img>
    </ion-thumbnail>
    <ion-label>{{item.text}}</ion-label>
  </ion-item>
</ion-list>
```


</TabItem>


<TabItem value="react">

```tsx
import React from 'react';
import { IonList, IonItem, IonThumbnail, IonImg, IonLabel, IonContent } from '@ionic/react';

type Item = {
  src: string;
  text: string;
};
const items: Item[] = [{ src: 'http://placekitten.com/g/200/300', text: 'a picture of a cat' }];

export const ImgExample: React.FC = () => (
  <IonContent>
    <IonList>
      {items.map((image, i) => (
        <IonItem key={i}>
          <IonThumbnail slot="start">
            <IonImg src={image.src} />
          </IonThumbnail>
          <IonLabel>{image.text}</IonLabel>
        </IonItem>
      ))}
    </IonList>
  </IonContent>
);
```

</TabItem>


<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'img-example',
  styleUrl: 'img-example.css'
})
export class ImgExample {
  private items = [{
    'text': 'Item 1',
    'src': '/path/to/external/file.png'
  }, {
    'text': 'Item 2',
    'src': '/path/to/external/file.png'
  }, {
    'text': 'Item 3',
    'src': '/path/to/external/file.png'
  }];

  render() {
    return [
      <ion-list>
        {this.items.map(item =>
          <ion-item>
            <ion-thumbnail slot="start">
              <ion-img src={item.src}></ion-img>
            </ion-thumbnail>
            <ion-label>{item.text}</ion-label>
          </ion-item>
        )}
      </ion-list>
    ];
  }
}
```

</TabItem>


<TabItem value="vue">

```html
<template>
  <ion-list>
    <ion-item v-for="item in items" :key="item.src">
      <ion-thumbnail slot="start">
        <ion-img :src="item.src"></ion-img>
      </ion-thumbnail>
      <ion-label>{{item.text}}</ion-label>
    </ion-item>
  </ion-list>
</template>

<script>
import { IonImg, IonItem, IonLabel, IonList, IonThumbnail } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonImg, IonItem, IonLabel, IonList, IonThumbnail },
  setup() {
    const items = [{
      'text': 'Item 1',
      'src': '/path/to/external/file.png'
    }, {
      'text': 'Item 2',
      'src': '/path/to/external/file.png'
    }, {
      'text': 'Item 3',
      'src': '/path/to/external/file.png'
    }];
    return { items }
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