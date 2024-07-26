---
title: 'Badges | ion-badge: iOS & Android App Notification Badge Icons'
description: 'Badges are inline block elements that appear near other elements on iOS & Android apps—use ion-badges as notifications that indicate how many items there are.'
sidebar_label: 'ion-badge'
demoUrl: '/docs/demos/api/badge/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/badge/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/badge/props.md';
import Events from '@ionic-internal/component-api/v5/badge/events.md';
import Methods from '@ionic-internal/component-api/v5/badge/methods.md';
import Parts from '@ionic-internal/component-api/v5/badge/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/badge/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/badge/slots.md';

# ion-badge

Badges are inline block elements that usually appear near another element. Typically they contain a number or other characters. They can be used as a notification that there are additional items associated with an element and indicate how many items there are.

## Usage

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<!-- Default -->
<ion-badge>99</ion-badge>

<!-- Colors -->
<ion-badge color="primary">11</ion-badge>
<ion-badge color="secondary">22</ion-badge>
<ion-badge color="tertiary">33</ion-badge>
<ion-badge color="success">44</ion-badge>
<ion-badge color="warning">55</ion-badge>
<ion-badge color="danger">66</ion-badge>
<ion-badge color="light">77</ion-badge>
<ion-badge color="medium">88</ion-badge>
<ion-badge color="dark">99</ion-badge>

<!-- Item with badge on left and right -->
<ion-item>
  <ion-badge slot="start">11</ion-badge>
  <ion-label>My Item</ion-label>
  <ion-badge slot="end">22</ion-badge>
</ion-item>
```

</TabItem>

<TabItem value="javascript">

```html
<!-- Default -->
<ion-badge>99</ion-badge>

<!-- Colors -->
<ion-badge color="primary">11</ion-badge>
<ion-badge color="secondary">22</ion-badge>
<ion-badge color="tertiary">33</ion-badge>
<ion-badge color="success">44</ion-badge>
<ion-badge color="warning">55</ion-badge>
<ion-badge color="danger">66</ion-badge>
<ion-badge color="light">77</ion-badge>
<ion-badge color="medium">88</ion-badge>
<ion-badge color="dark">99</ion-badge>

<!-- Item with badge on left and right -->
<ion-item>
  <ion-badge slot="start">11</ion-badge>
  <ion-label>My Item</ion-label>
  <ion-badge slot="end">22</ion-badge>
</ion-item>
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import { IonBadge, IonItem, IonLabel, IonContent } from '@ionic/react';

export const BadgeExample: React.FC = () => (
  <IonContent>
    {/*-- Default --*/}
    <IonBadge>99</IonBadge>

    {/*-- Colors --*/}
    <IonBadge color="primary">11</IonBadge>
    <IonBadge color="secondary">22</IonBadge>
    <IonBadge color="tertiary">33</IonBadge>
    <IonBadge color="success">44</IonBadge>
    <IonBadge color="warning">55</IonBadge>
    <IonBadge color="danger">66</IonBadge>
    <IonBadge color="light">77</IonBadge>
    <IonBadge color="medium">88</IonBadge>
    <IonBadge color="dark">99</IonBadge>

    {/*-- Item with badge on left and right --*/}
    <IonItem>
      <IonBadge slot="start">11</IonBadge>
      <IonLabel>My Item</IonLabel>
      <IonBadge slot="end">22</IonBadge>
    </IonItem>
  </IonContent>
);
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'badge-example',
  styleUrl: 'badge-example.css',
})
export class BadgeExample {
  render() {
    return [
      // Default
      <ion-badge>99</ion-badge>,

      // Colors
      <ion-badge color="primary">11</ion-badge>,
      <ion-badge color="secondary">22</ion-badge>,
      <ion-badge color="tertiary">33</ion-badge>,
      <ion-badge color="success">44</ion-badge>,
      <ion-badge color="warning">55</ion-badge>,
      <ion-badge color="danger">66</ion-badge>,
      <ion-badge color="light">77</ion-badge>,
      <ion-badge color="medium">88</ion-badge>,
      <ion-badge color="dark">99</ion-badge>,

      // Item with badge on left and right
      <ion-item>
        <ion-badge slot="start">11</ion-badge>
        <ion-label>My Item</ion-label>
        <ion-badge slot="end">22</ion-badge>
      </ion-item>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <!-- Default -->
  <ion-badge>99</ion-badge>

  <!-- Colors -->
  <ion-badge color="primary">11</ion-badge>
  <ion-badge color="secondary">22</ion-badge>
  <ion-badge color="tertiary">33</ion-badge>
  <ion-badge color="success">44</ion-badge>
  <ion-badge color="warning">55</ion-badge>
  <ion-badge color="danger">66</ion-badge>
  <ion-badge color="light">77</ion-badge>
  <ion-badge color="medium">88</ion-badge>
  <ion-badge color="dark">99</ion-badge>

  <!-- Item with badge on left and right -->
  <ion-item>
    <ion-badge slot="start">11</ion-badge>
    <ion-label>My Item</ion-label>
    <ion-badge slot="end">22</ion-badge>
  </ion-item>
</template>

<script>
  import { IonBadge, IonItem, IonLabel } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonBadge, IonItem, IonLabel },
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
