---
title: 'Item Label Color and Properties for Applications | ion-label'
description: 'Label is a wrapper element that can be used in combination with other Ionic components. Easily design item label colors and other properties with ion-label.'
sidebar_label: 'ion-label'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/label/props.md';
import Events from '@ionic-internal/component-api/v5/label/events.md';
import Methods from '@ionic-internal/component-api/v5/label/methods.md';
import Parts from '@ionic-internal/component-api/v5/label/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/label/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/label/slots.md';

# ion-label

Label is a wrapper element that can be used in combination with `ion-item`, `ion-input`, `ion-toggle`, and more. The position of the label inside of an item can be inline, fixed, stacked, or floating.

## Usage

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<!-- Default Label -->
<ion-label>Label</ion-label>

<!-- Label Colors -->
<ion-label color="primary">Primary Label</ion-label>
<ion-label color="secondary">Secondary Label</ion-label>
<ion-label color="danger">Danger Label</ion-label>
<ion-label color="light">Light Label</ion-label>
<ion-label color="dark">Dark Label</ion-label>

<!-- Item Labels -->
<ion-item>
  <ion-label>Default Item</ion-label>
</ion-item>

<ion-item>
  <ion-label class="ion-text-wrap">
    Multi-line text that should wrap when it is too long to fit on one line in the item.
  </ion-label>
</ion-item>

<!-- Input Labels -->
<ion-item>
  <ion-label>Default Input</ion-label>
  <ion-input></ion-input>
</ion-item>

<ion-item>
  <ion-label position="fixed">Fixed</ion-label>
  <ion-input></ion-input>
</ion-item>

<ion-item>
  <ion-label position="floating">Floating</ion-label>
  <ion-input></ion-input>
</ion-item>

<ion-item>
  <ion-label position="stacked">Stacked</ion-label>
  <ion-input></ion-input>
</ion-item>

<ion-item>
  <ion-label>Toggle</ion-label>
  <ion-toggle slot="end" checked></ion-toggle>
</ion-item>

<ion-item>
  <ion-checkbox slot="start" checked></ion-checkbox>
  <ion-label>Checkbox</ion-label>
</ion-item>
```

</TabItem>

<TabItem value="javascript">

```html
<!-- Default Label -->
<ion-label>Label</ion-label>

<!-- Label Colors -->
<ion-label color="primary">Primary Label</ion-label>
<ion-label color="secondary">Secondary Label</ion-label>
<ion-label color="danger">Danger Label</ion-label>
<ion-label color="light">Light Label</ion-label>
<ion-label color="dark">Dark Label</ion-label>

<!-- Item Labels -->
<ion-item>
  <ion-label>Default Item</ion-label>
</ion-item>

<ion-item>
  <ion-label class="ion-text-wrap">
    Multi-line text that should wrap when it is too long to fit on one line in the item.
  </ion-label>
</ion-item>

<!-- Input Labels -->
<ion-item>
  <ion-label>Default Input</ion-label>
  <ion-input></ion-input>
</ion-item>

<ion-item>
  <ion-label position="fixed">Fixed</ion-label>
  <ion-input></ion-input>
</ion-item>

<ion-item>
  <ion-label position="floating">Floating</ion-label>
  <ion-input></ion-input>
</ion-item>

<ion-item>
  <ion-label position="stacked">Stacked</ion-label>
  <ion-input></ion-input>
</ion-item>

<ion-item>
  <ion-label>Toggle</ion-label>
  <ion-toggle slot="end" checked></ion-toggle>
</ion-item>

<ion-item>
  <ion-checkbox slot="start" checked></ion-checkbox>
  <ion-label>Checkbox</ion-label>
</ion-item>
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import { IonLabel, IonItem, IonInput, IonToggle, IonCheckbox, IonContent } from '@ionic/react';

export const LabelExample: React.FC = () => (
  <IonContent>
    {/*-- Default Label --*/}
    <IonLabel>Label</IonLabel>
    <br />

    {/*-- Label Colors --*/}
    <IonLabel color="primary">Primary Label</IonLabel>
    <br />
    <IonLabel color="secondary">Secondary Label</IonLabel>
    <br />
    <IonLabel color="danger">Danger Label</IonLabel>
    <br />
    <IonLabel color="light">Light Label</IonLabel>
    <br />
    <IonLabel color="dark">Dark Label</IonLabel>
    <br />

    {/*-- Item Labels --*/}
    <IonItem>
      <IonLabel>Default Item</IonLabel>
    </IonItem>

    <IonItem>
      <IonLabel className="ion-text-wrap">
        Multi-line text that should wrap when it is too long to fit on one line in the item.
      </IonLabel>
    </IonItem>

    {/*-- Input Labels --*/}
    <IonItem>
      <IonLabel>Default Input</IonLabel>
      <IonInput></IonInput>
    </IonItem>

    <IonItem>
      <IonLabel position="fixed">Fixed</IonLabel>
      <IonInput></IonInput>
    </IonItem>

    <IonItem>
      <IonLabel position="floating">Floating</IonLabel>
      <IonInput></IonInput>
    </IonItem>

    <IonItem>
      <IonLabel position="stacked">Stacked</IonLabel>
      <IonInput></IonInput>
    </IonItem>

    <IonItem>
      <IonLabel>Toggle</IonLabel>
      <IonToggle slot="end" checked></IonToggle>
    </IonItem>

    <IonItem>
      <IonCheckbox slot="start" checked />
      <IonLabel>Checkbox</IonLabel>
    </IonItem>
  </IonContent>
);
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'label-example',
  styleUrl: 'label-example.css',
})
export class LabelExample {
  render() {
    return [
      // Default Label
      <ion-label>Label</ion-label>,

      // Label Colors
      <ion-label color="primary">Primary Label</ion-label>,
      <ion-label color="secondary">Secondary Label</ion-label>,
      <ion-label color="danger">Danger Label</ion-label>,
      <ion-label color="light">Light Label</ion-label>,
      <ion-label color="dark">Dark Label</ion-label>,

      // Item Labels
      <ion-item>
        <ion-label>Default Item</ion-label>
      </ion-item>,

      <ion-item>
        <ion-label class="ion-text-wrap">
          Multi-line text that should wrap when it is too long to fit on one line in the item.
        </ion-label>
      </ion-item>,

      // Input Labels
      <ion-item>
        <ion-label>Default Input</ion-label>
        <ion-input></ion-input>
      </ion-item>,

      <ion-item>
        <ion-label position="fixed">Fixed</ion-label>
        <ion-input></ion-input>
      </ion-item>,

      <ion-item>
        <ion-label position="floating">Floating</ion-label>
        <ion-input></ion-input>
      </ion-item>,

      <ion-item>
        <ion-label position="stacked">Stacked</ion-label>
        <ion-input></ion-input>
      </ion-item>,

      <ion-item>
        <ion-label>Toggle</ion-label>
        <ion-toggle slot="end" checked={true}></ion-toggle>
      </ion-item>,

      <ion-item>
        <ion-checkbox slot="start" checked={true}></ion-checkbox>
        <ion-label>Checkbox</ion-label>
      </ion-item>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <!-- Default Label -->
  <ion-label>Label</ion-label>

  <!-- Label Colors -->
  <ion-label color="primary">Primary Label</ion-label>
  <ion-label color="secondary">Secondary Label</ion-label>
  <ion-label color="danger">Danger Label</ion-label>
  <ion-label color="light">Light Label</ion-label>
  <ion-label color="dark">Dark Label</ion-label>

  <!-- Item Labels -->
  <ion-item>
    <ion-label>Default Item</ion-label>
  </ion-item>

  <ion-item>
    <ion-label class="ion-text-wrap">
      Multi-line text that should wrap when it is too long to fit on one line in the item.
    </ion-label>
  </ion-item>

  <!-- Input Labels -->
  <ion-item>
    <ion-label>Default Input</ion-label>
    <ion-input></ion-input>
  </ion-item>

  <ion-item>
    <ion-label position="fixed">Fixed</ion-label>
    <ion-input></ion-input>
  </ion-item>

  <ion-item>
    <ion-label position="floating">Floating</ion-label>
    <ion-input></ion-input>
  </ion-item>

  <ion-item>
    <ion-label position="stacked">Stacked</ion-label>
    <ion-input></ion-input>
  </ion-item>

  <ion-item>
    <ion-label>Toggle</ion-label>
    <ion-toggle slot="end" checked></ion-toggle>
  </ion-item>

  <ion-item>
    <ion-checkbox slot="start" checked></ion-checkbox>
    <ion-label>Checkbox</ion-label>
  </ion-item>
</template>

<script>
  import { IonCheckbox, IonInput, IonItem, IonLabel, IonToggle } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      IonCheckbox,
      IonInput,
      IonItem,
      IonLabel,
      IonToggle,
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
