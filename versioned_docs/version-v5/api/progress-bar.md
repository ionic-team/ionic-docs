---
title: 'Progress Bar | Horizontal App Progress Bar for Loading Indicator'
description: 'ion-progress-bars are horizontal loading indicators that inform users about the status of ongoing app processes—such as submitting a form or saving updates.'
sidebar_label: 'ion-progress-bar'
demoUrl: '/docs/demos/api/progress-bar/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/progress-bar/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/progress-bar/props.md';
import Events from '@ionic-internal/component-api/v5/progress-bar/events.md';
import Methods from '@ionic-internal/component-api/v5/progress-bar/methods.md';
import Parts from '@ionic-internal/component-api/v5/progress-bar/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/progress-bar/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/progress-bar/slots.md';

# ion-progress-bar

Progress bars inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates. There are two types of progress bars: `determinate` and `indeterminate`.

## Progress Type

### Determinate

Determinate is the default type. It should be used when the percentage of an operation is known. The progress is represented by setting the `value` property. This can be used to show the progress increasing from 0 to 100% of the track.

If the `buffer` property is set, a buffer stream will show with animated circles to indicate activity. The value of the `buffer` property will also be represented by how much visible track there is. If the value of `buffer` is less than the `value` property, there will be no visible track. If `buffer` is equal to `1` then the buffer stream will be hidden.

### Indeterminate

The indeterminate type should be used when it is unknown how long the process will take. The progress bar is not tied to the `value`, instead it continually slides along the track until the process is complete.

## Usage

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<!-- Default Progressbar -->
<ion-progress-bar></ion-progress-bar>

<!-- Default Progressbar with 50 percent -->
<ion-progress-bar value="0.5"></ion-progress-bar>

<!-- Colorize Progressbar -->
<ion-progress-bar color="primary" value="0.5"></ion-progress-bar>
<ion-progress-bar color="secondary" value="0.5"></ion-progress-bar>

<!-- Other types -->
<ion-progress-bar value="0.25" buffer="0.5"></ion-progress-bar>
<ion-progress-bar type="indeterminate"></ion-progress-bar>
<ion-progress-bar type="indeterminate" reversed="true"></ion-progress-bar>
```

</TabItem>

<TabItem value="javascript">

```html
<!-- Default Progressbar -->
<ion-progress-bar></ion-progress-bar>

<!-- Default Progressbar with 50 percent -->
<ion-progress-bar value="0.5"></ion-progress-bar>

<!-- Colorize Progressbar -->
<ion-progress-bar color="primary" value="0.5"></ion-progress-bar>
<ion-progress-bar color="secondary" value="0.5"></ion-progress-bar>

<!-- Other types -->
<ion-progress-bar value="0.25" buffer="0.5"></ion-progress-bar>
<ion-progress-bar type="indeterminate"></ion-progress-bar>
<ion-progress-bar type="indeterminate" reversed="true"></ion-progress-bar>
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import { IonProgressBar, IonContent } from '@ionic/react';

export const ProgressbarExample: React.FC = () => (
  <IonContent>
    {/*-- Default Progressbar --*/}
    <IonProgressBar></IonProgressBar>
    <br />

    {/*-- Default Progressbar with 50 percent --*/}
    <IonProgressBar value={0.5}></IonProgressBar>
    <br />

    {/*-- Colorize Progressbar --*/}
    <IonProgressBar color="primary" value={0.5}></IonProgressBar>
    <br />
    <IonProgressBar color="secondary" value={0.5}></IonProgressBar>
    <br />

    {/*-- Other types --*/}
    <IonProgressBar value={0.25} buffer={0.5}></IonProgressBar>
    <br />
    <IonProgressBar type="indeterminate"></IonProgressBar>
    <br />
    <IonProgressBar type="indeterminate" reversed={true}></IonProgressBar>
    <br />
  </IonContent>
);
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'progress-bar-example',
  styleUrl: 'progress-bar-example.css',
})
export class ProgressBarExample {
  render() {
    return [
      // Default Progressbar
      <ion-progress-bar></ion-progress-bar>,

      // Default Progressbar with 50 percent
      <ion-progress-bar value={0.5}></ion-progress-bar>,

      // Colorize Progressbar
      <ion-progress-bar color="primary" value={0.5}></ion-progress-bar>,
      <ion-progress-bar color="secondary" value={0.5}></ion-progress-bar>,

      // Other types
      <ion-progress-bar value={0.25} buffer={0.5}></ion-progress-bar>,
      <ion-progress-bar type="indeterminate"></ion-progress-bar>,
      <ion-progress-bar type="indeterminate" reversed={true}></ion-progress-bar>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <!-- Default Progressbar -->
  <ion-progress-bar></ion-progress-bar>

  <!-- Default Progressbar with 50 percent -->
  <ion-progress-bar value="0.5"></ion-progress-bar>

  <!-- Colorize Progressbar -->
  <ion-progress-bar color="primary" value="0.5"></ion-progress-bar>
  <ion-progress-bar color="secondary" value="0.5"></ion-progress-bar>

  <!-- Other types -->
  <ion-progress-bar value="0.25" buffer="0.5"></ion-progress-bar>
  <ion-progress-bar type="indeterminate"></ion-progress-bar>
  <ion-progress-bar type="indeterminate" reversed="true"></ion-progress-bar>
</template>

<script>
  import { IonProgressBar } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonProgressBar },
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
