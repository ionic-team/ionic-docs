---
sidebar_label: 'ion-backdrop'
demoUrl: '/docs/demos/api/backdrop/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/backdrop/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/backdrop/props.md';
import Events from '@ionic-internal/component-api/v5/backdrop/events.md';
import Methods from '@ionic-internal/component-api/v5/backdrop/methods.md';
import Parts from '@ionic-internal/component-api/v5/backdrop/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/backdrop/custom-props.md';
import Slots from '@ionic-internal/component-api/v5/backdrop/slots.md';

# ion-backdrop

Backdrops are full screen components that overlay other components. They are useful behind components that transition in on top of other content and can be used to dismiss that component.

## Usage

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<!-- Default backdrop -->
<ion-backdrop></ion-backdrop>

<!-- Backdrop that is not tappable -->
<ion-backdrop tappable="false"></ion-backdrop>

<!-- Backdrop that is not visible -->
<ion-backdrop visible="false"></ion-backdrop>

<!-- Backdrop with propagation -->
<ion-backdrop stopPropagation="false"></ion-backdrop>

<!-- Backdrop that sets dynamic properties -->
<ion-backdrop [tappable]="enableBackdropDismiss" [visible]="showBackdrop" [stopPropagation]="shouldPropagate">
</ion-backdrop>
```

```tsx
import { Component } from '@angular/core';

@Component({
  selector: 'backdrop-example',
  templateUrl: 'backdrop-example.html',
  styleUrls: ['./backdrop-example.css'],
})
export class BackdropExample {
  enableBackdropDismiss = false;
  showBackdrop = false;
  shouldPropagate = false;
}
```

</TabItem>

<TabItem value="javascript">

```html
<!-- Default backdrop -->
<ion-backdrop></ion-backdrop>

<!-- Backdrop that is not tappable -->
<ion-backdrop tappable="false"></ion-backdrop>

<!-- Backdrop that is not visible -->
<ion-backdrop visible="false"></ion-backdrop>

<!-- Backdrop with propagation -->
<ion-backdrop stop-propagation="false"></ion-backdrop>

<!-- Backdrop that sets dynamic properties -->
<ion-backdrop id="customBackdrop"></ion-backdrop>
```

```javascript
var backdrop = document.getElementById('customBackdrop');
backdrop.visible = false;
backdrop.tappable = false;
backdrop.stopPropagation = false;
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import { IonBackdrop, IonContent } from '@ionic/react';

export const BackdropExample: React.FC = () => (
  <IonContent>
    {/*-- Default backdrop --*/}
    <IonBackdrop />

    {/*-- Backdrop that is not tappable --*/}
    <IonBackdrop tappable={false} />

    {/*-- Backdrop that is not visible --*/}
    <IonBackdrop visible={false} />

    {/*-- Backdrop with propagation --*/}
    <IonBackdrop stopPropagation={false} />

    <IonBackdrop tappable={true} visible={true} stopPropagation={true} />
  </IonContent>
);
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'backdrop-example',
  styleUrl: 'backdrop-example.css',
})
export class BackdropExample {
  render() {
    const enableBackdropDismiss = false;
    const showBackdrop = false;
    const shouldPropagate = false;

    return [
      // Default backdrop
      <ion-backdrop></ion-backdrop>,

      // Backdrop that is not tappable
      <ion-backdrop tappable={false}></ion-backdrop>,

      // Backdrop that is not visible
      <ion-backdrop visible={false}></ion-backdrop>,

      // Backdrop with propagation
      <ion-backdrop stopPropagation={false}></ion-backdrop>,

      // Backdrop that sets dynamic properties
      <ion-backdrop
        tappable={enableBackdropDismiss}
        visible={showBackdrop}
        stopPropagation={shouldPropagate}
      ></ion-backdrop>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <!-- Default backdrop -->
  <ion-backdrop></ion-backdrop>

  <!-- Backdrop that is not tappable -->
  <ion-backdrop tappable="false"></ion-backdrop>

  <!-- Backdrop that is not visible -->
  <ion-backdrop visible="false"></ion-backdrop>

  <!-- Backdrop with propagation -->
  <ion-backdrop stop-propagation="false"></ion-backdrop>

  <!-- Backdrop that sets dynamic properties -->
  <ion-backdrop :tappable="enableBackdropDismiss" :visible="showBackdrop" :stop-propagation="shouldPropagate">
  </ion-backdrop>
</template>

<script>
  import { IonBackdrop } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonBackdrop },
    setup() {
      return {
        enableBackdropDismiss: true,
        showBackdrop: true,
        shouldPropagate: true,
      };
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
