---
title: 'Img Tag to Lazy Load Images in Viewport | ion-img Tag'
description: 'Img tag lazy loads images whenever the tag is in the viewport. Utilize this component when generating large lists—as images are only loaded when visible.'
sidebar_label: 'ion-img'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/img/props.md';
import Events from '@ionic-internal/component-api/v5/img/events.md';
import Methods from '@ionic-internal/component-api/v5/img/methods.md';
import Parts from '@ionic-internal/component-api/v5/img/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/img/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/img/slots.md';

# ion-img

Img is a tag that will lazily load an image when ever the tag is in the viewport. This is extremely useful when generating a large list as images are only loaded when they're visible. The component uses [Intersection Observer](https://caniuse.com/#feat=intersectionobserver) internally, which is supported in most modern browser, but falls back to a `setTimeout` when it is not supported.

## Usage

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'ANGULAR' }, { value: 'react', label: 'REACT' }, { value: 'stencil', label: 'STENCIL' }, { value: 'vue', label: 'VUE' }]}>

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
  styleUrl: 'img-example.css',
})
export class ImgExample {
  private items = [
    {
      text: 'Item 1',
      src: '/path/to/external/file.png',
    },
    {
      text: 'Item 2',
      src: '/path/to/external/file.png',
    },
    {
      text: 'Item 3',
      src: '/path/to/external/file.png',
    },
  ];

  render() {
    return [
      <ion-list>
        {this.items.map((item) => (
          <ion-item>
            <ion-thumbnail slot="start">
              <ion-img src={item.src}></ion-img>
            </ion-thumbnail>
            <ion-label>{item.text}</ion-label>
          </ion-item>
        ))}
      </ion-list>,
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
      const items = [
        {
          text: 'Item 1',
          src: '/path/to/external/file.png',
        },
        {
          text: 'Item 2',
          src: '/path/to/external/file.png',
        },
        {
          text: 'Item 3',
          src: '/path/to/external/file.png',
        },
      ];
      return { items };
    },
  });
</script>
```

</TabItem>

</Tabs>

## Properties

<Props />

## Events

<Events />

## Methods

<Methods />

## CSS Shadow Parts

<Parts />

## CSS Custom Properties

<CustomProps />

## Slots

<Slots />
