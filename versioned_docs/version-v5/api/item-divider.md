---
title: 'Item Divider | List Item Divider Block Element for Ionic Apps'
description: 'Item Dividers are block elements that can be used to separate items in a list. They are similar to list headers, but instead, go in between groups of items.'
sidebar_label: 'ion-item-divider'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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

### color

|                 |                                                                                                                                                                                                                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The color to use from your application's color palette.<br />Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.<br />For more information on colors, see [theming](../theming/basics.md). |
| **Attribute**   | `color`                                                                                                                                                                                                                                                                          |
| **Type**        | `string \| undefined`                                                                                                                                                                                                                                                            |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                      |

### mode

|                 |                                                   |
| --------------- | ------------------------------------------------- |
| **Description** | The mode determines which platform styles to use. |
| **Attribute**   | `mode`                                            |
| **Type**        | `"ios" \| "md"`                                   |
| **Default**     | `undefined`                                       |

### sticky

|                 |                                                                                                                                                                                                                                                        |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | When it's set to `true`, the item-divider will stay visible when it reaches the top<br />of the viewport until the next `ion-item-divider` replaces it.<br /><br />This feature relies in `position:sticky`:<br />https://caniuse.com/#feat=css-sticky |
| **Attribute**   | `sticky`                                                                                                                                                                                                                                               |
| **Type**        | `boolean`                                                                                                                                                                                                                                              |
| **Default**     | `false`                                                                                                                                                                                                                                                |

## CSS Custom Properties

| Name                     | Description                                                                                                     |
| ------------------------ | --------------------------------------------------------------------------------------------------------------- |
| `--background`           | Background of the item divider                                                                                  |
| `--color`                | Color of the item divider                                                                                       |
| `--inner-padding-bottom` | Bottom inner padding of the item divider                                                                        |
| `--inner-padding-end`    | End inner padding of the item divider                                                                           |
| `--inner-padding-start`  | Start inner padding of the item divider                                                                         |
| `--inner-padding-top`    | Top inner padding of the item divider                                                                           |
| `--padding-bottom`       | Bottom padding of the item divider                                                                              |
| `--padding-end`          | Right padding if direction is left-to-right, and left padding if direction is right-to-left of the item divider |
| `--padding-start`        | Left padding if direction is left-to-right, and right padding if direction is right-to-left of the item divider |
| `--padding-top`          | Top padding of the item divider                                                                                 |

## Slots

| Name    | Description                                                                        |
| ------- | ---------------------------------------------------------------------------------- |
| ``      | Content is placed between the named slots if provided without a slot.              |
| `end`   | Content is placed to the right of the divider text in LTR, and to the left in RTL. |
| `start` | Content is placed to the left of the divider text in LTR, and to the right in RTL. |
