---
title: 'ion-spinner | Animated Spinner Icon Components and Properties'
description: 'The ion-spinner component provides a variety of animated SVG spinners. These icons indicate that the app is loading or performing another process to wait on.'
sidebar_label: 'ion-spinner'
demoUrl: '/docs/demos/api/spinner/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/spinner/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/spinner/props.md';
import Events from '@ionic-internal/component-api/v5/spinner/events.md';
import Methods from '@ionic-internal/component-api/v5/spinner/methods.md';
import Parts from '@ionic-internal/component-api/v5/spinner/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/spinner/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/spinner/slots.md';

# ion-spinner

The Spinner component provides a variety of animated SVG spinners. Spinners are visual indicators that the app is loading content or performing another process that the user needs to wait on.

The default spinner to use is based on the platform. The default spinner for `ios` is `"lines"`, and the default for `android` is `"crescent"`. If the platform is not `ios` or `android`, the spinner will default to `crescent`. If the `name` property is set, then that spinner will be used instead of the platform specific spinner.

## Usage

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<!-- Default Spinner -->
<ion-spinner></ion-spinner>

<!-- Lines -->
<ion-spinner name="lines"></ion-spinner>

<!-- Lines Small -->
<ion-spinner name="lines-small"></ion-spinner>

<!-- Dots -->
<ion-spinner name="dots"></ion-spinner>

<!-- Bubbles -->
<ion-spinner name="bubbles"></ion-spinner>

<!-- Circles -->
<ion-spinner name="circles"></ion-spinner>

<!-- Crescent -->
<ion-spinner name="crescent"></ion-spinner>

<!-- Paused Default Spinner -->
<ion-spinner paused></ion-spinner>
```

</TabItem>

<TabItem value="javascript">

```html
<!-- Default Spinner -->
<ion-spinner></ion-spinner>

<!-- Lines -->
<ion-spinner name="lines"></ion-spinner>

<!-- Lines Small -->
<ion-spinner name="lines-small"></ion-spinner>

<!-- Dots -->
<ion-spinner name="dots"></ion-spinner>

<!-- Bubbles -->
<ion-spinner name="bubbles"></ion-spinner>

<!-- Circles -->
<ion-spinner name="circles"></ion-spinner>

<!-- Crescent -->
<ion-spinner name="crescent"></ion-spinner>

<!-- Paused Default Spinner -->
<ion-spinner paused></ion-spinner>
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import { IonSpinner, IonContent } from '@ionic/react';

export const SpinnerExample: React.FC = () => (
  <IonContent>
    {/*-- Default Spinner --*/}
    <IonSpinner />

    {/*-- Lines --*/}
    <IonSpinner name="lines" />

    {/*-- Lines Small --*/}
    <IonSpinner name="lines-small" />

    {/*-- Dots --*/}
    <IonSpinner name="dots" />

    {/*-- Bubbles --*/}
    <IonSpinner name="bubbles" />

    {/*-- Circles --*/}
    <IonSpinner name="circles" />

    {/*-- Crescent --*/}
    <IonSpinner name="crescent" />

    {/*-- Paused Default Spinner --*/}
    <IonSpinner paused />
  </IonContent>
);
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'spinner-example',
  styleUrl: 'spinner-example.css',
})
export class SpinnerExample {
  render() {
    return [
      // Default Spinner
      <ion-spinner></ion-spinner>,

      // Lines
      <ion-spinner name="lines"></ion-spinner>,

      // Lines Small
      <ion-spinner name="lines-small"></ion-spinner>,

      // Dots
      <ion-spinner name="dots"></ion-spinner>,

      // Bubbles
      <ion-spinner name="bubbles"></ion-spinner>,

      // Circles
      <ion-spinner name="circles"></ion-spinner>,

      // Crescent
      <ion-spinner name="crescent"></ion-spinner>,

      // Paused Default Spinner
      <ion-spinner paused={true}></ion-spinner>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <!-- Default Spinner -->
  <ion-spinner></ion-spinner>

  <!-- Lines -->
  <ion-spinner name="lines"></ion-spinner>

  <!-- Lines Small -->
  <ion-spinner name="lines-small"></ion-spinner>

  <!-- Dots -->
  <ion-spinner name="dots"></ion-spinner>

  <!-- Bubbles -->
  <ion-spinner name="bubbles"></ion-spinner>

  <!-- Circles -->
  <ion-spinner name="circles"></ion-spinner>

  <!-- Crescent -->
  <ion-spinner name="crescent"></ion-spinner>

  <!-- Paused Default Spinner -->
  <ion-spinner paused></ion-spinner>
</template>

<script>
  import { IonSpinner } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonSpinner },
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
