---
title: 'ion-header: Header Parent Component for Ionic Framework Apps'
description: "Ion-header is a parent component that holds the toolbar. It's important to note that ion-header needs to be the one of the three root elements of a page."
sidebar_label: 'ion-header'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/header/props.md';
import Events from '@ionic-internal/component-api/v5/header/events.md';
import Methods from '@ionic-internal/component-api/v5/header/methods.md';
import Parts from '@ionic-internal/component-api/v5/header/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/header/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/header/slots.md';

# ion-header

Header is a parent component that holds the toolbar component.
It's important to note that ion-header needs to be the one of the three root elements of a page

## Usage

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
  </>
);
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'header-example',
  styleUrl: 'header-example.css',
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

      // Header without a border
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
</template>

<script>
  import { IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      IonBackButton,
      IonButtons,
      IonContent,
      IonHeader,
      IonTitle,
      IonToolbar,
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
