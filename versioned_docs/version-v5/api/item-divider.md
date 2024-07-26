---
title: 'Item Divider | List Item Divider Block Element for Ionic Apps'
description: 'Item Dividers are block elements that can be used to separate items in a list. They are similar to list headers, but instead, go in between groups of items.'
sidebar_label: 'ion-item-divider'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/item-divider/props.md';
import Events from '@ionic-internal/component-api/v5/item-divider/events.md';
import Methods from '@ionic-internal/component-api/v5/item-divider/methods.md';
import Parts from '@ionic-internal/component-api/v5/item-divider/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/item-divider/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/item-divider/slots.md';

# ion-item-divider

Item Dividers are block elements that can be used to separate items in a list. They are similar to list headers, but instead of being placed at the top of a list, they should go in between groups of items.

## Usage

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-item-divider>
  <ion-label> Basic Item Divider </ion-label>
</ion-item-divider>

<ion-item-divider color="secondary">
  <ion-label> Secondary Item Divider </ion-label>
</ion-item-divider>

<!-- Item Dividers in a List -->
<ion-list>
  <ion-item-divider>
    <ion-label> Section A </ion-label>
  </ion-item-divider>

  <ion-item><ion-label>A1</ion-label></ion-item>
  <ion-item><ion-label>A2</ion-label></ion-item>
  <ion-item><ion-label>A3</ion-label></ion-item>
  <ion-item><ion-label>A4</ion-label></ion-item>
  <ion-item><ion-label>A5</ion-label></ion-item>

  <ion-item-divider>
    <ion-label> Section B </ion-label>
  </ion-item-divider>

  <ion-item><ion-label>B1</ion-label></ion-item>
  <ion-item><ion-label>B2</ion-label></ion-item>
  <ion-item><ion-label>B3</ion-label></ion-item>
  <ion-item><ion-label>B4</ion-label></ion-item>
  <ion-item><ion-label>B5</ion-label></ion-item>
</ion-list>
```

</TabItem>

<TabItem value="javascript">

```html
<ion-item-divider>
  <ion-label> Basic Item Divider </ion-label>
</ion-item-divider>

<ion-item-divider color="secondary">
  <ion-label> Secondary Item Divider </ion-label>
</ion-item-divider>

<!-- Item Dividers in a List -->
<ion-list>
  <ion-item-divider>
    <ion-label> Section A </ion-label>
  </ion-item-divider>

  <ion-item><ion-label>A1</ion-label></ion-item>
  <ion-item><ion-label>A2</ion-label></ion-item>
  <ion-item><ion-label>A3</ion-label></ion-item>
  <ion-item><ion-label>A4</ion-label></ion-item>
  <ion-item><ion-label>A5</ion-label></ion-item>

  <ion-item-divider>
    <ion-label> Section B </ion-label>
  </ion-item-divider>

  <ion-item><ion-label>B1</ion-label></ion-item>
  <ion-item><ion-label>B2</ion-label></ion-item>
  <ion-item><ion-label>B3</ion-label></ion-item>
  <ion-item><ion-label>B4</ion-label></ion-item>
  <ion-item><ion-label>B5</ion-label></ion-item>
</ion-list>
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import { IonItemDivider, IonLabel, IonList, IonItem, IonContent } from '@ionic/react';

export const ItemDividerExample: React.FC = () => (
  <IonContent>
    <IonItemDivider>
      <IonLabel>Basic Item Divider</IonLabel>
    </IonItemDivider>

    <IonItemDivider color="secondary">
      <IonLabel>Secondary Item Divider</IonLabel>
    </IonItemDivider>

    {/*-- Item Dividers in a List --*/}
    <IonList>
      <IonItemDivider>
        <IonLabel>Section A</IonLabel>
      </IonItemDivider>

      <IonItem>
        <IonLabel>A1</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>A2</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>A3</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>A4</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>A5</IonLabel>
      </IonItem>

      <IonItemDivider>
        <IonLabel>Section B</IonLabel>
      </IonItemDivider>

      <IonItem>
        <IonLabel>B1</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>B2</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>B3</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>B4</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>B5</IonLabel>
      </IonItem>
    </IonList>
  </IonContent>
);
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'item-divider-example',
  styleUrl: 'item-divider-example.css',
})
export class ItemDividerExample {
  render() {
    return [
      <ion-item-divider>
        <ion-label>Basic Item Divider</ion-label>
      </ion-item-divider>,

      <ion-item-divider color="secondary">
        <ion-label>Secondary Item Divider</ion-label>
      </ion-item-divider>,

      //  Item Dividers in a List
      <ion-list>
        <ion-item-divider>
          <ion-label>Section A</ion-label>
        </ion-item-divider>

        <ion-item>
          <ion-label>A1</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>A2</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>A3</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>A4</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>A5</ion-label>
        </ion-item>

        <ion-item-divider>
          <ion-label>Section B</ion-label>
        </ion-item-divider>

        <ion-item>
          <ion-label>B1</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>B2</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>B3</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>B4</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>B5</ion-label>
        </ion-item>
      </ion-list>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <ion-item-divider>
    <ion-label> Basic Item Divider </ion-label>
  </ion-item-divider>

  <ion-item-divider color="secondary">
    <ion-label> Secondary Item Divider </ion-label>
  </ion-item-divider>

  <!-- Item Dividers in a List -->
  <ion-list>
    <ion-item-divider>
      <ion-label> Section A </ion-label>
    </ion-item-divider>

    <ion-item><ion-label>A1</ion-label></ion-item>
    <ion-item><ion-label>A2</ion-label></ion-item>
    <ion-item><ion-label>A3</ion-label></ion-item>
    <ion-item><ion-label>A4</ion-label></ion-item>
    <ion-item><ion-label>A5</ion-label></ion-item>

    <ion-item-divider>
      <ion-label> Section B </ion-label>
    </ion-item-divider>

    <ion-item><ion-label>B1</ion-label></ion-item>
    <ion-item><ion-label>B2</ion-label></ion-item>
    <ion-item><ion-label>B3</ion-label></ion-item>
    <ion-item><ion-label>B4</ion-label></ion-item>
    <ion-item><ion-label>B5</ion-label></ion-item>
  </ion-list>
</template>

<script>
  import { IonItem, IonItemDivider, IonLabel } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonItemDivider, IonLabel },
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
