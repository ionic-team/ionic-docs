---
sidebar_label: 'ion-input'
demoUrl: '/docs/demos/api/input/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/input/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/input/props.md';
import Events from '@ionic-internal/component-api/v5/input/events.md';
import Methods from '@ionic-internal/component-api/v5/input/methods.md';
import Parts from '@ionic-internal/component-api/v5/input/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/input/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/input/slots.md';

# ion-input

The input component is a wrapper to the HTML input element with custom styling and additional functionality. It accepts most of the same properties as the HTML input, but works great on desktop devices and integrates with the keyboard on mobile devices.

It is meant for text `type` inputs only, such as `"text"`, `"password"`, `"email"`, `"number"`, `"search"`, `"tel"`, and `"url"`. It supports all standard text input events including `keyup`, `keydown`, `keypress`, and more.

## Usage

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<!-- Default Input -->
<ion-input></ion-input>

<!-- Input with value -->
<ion-input value="custom"></ion-input>

<!-- Input with placeholder -->
<ion-input placeholder="Enter Input"></ion-input>

<!-- Input with clear button when there is a value -->
<ion-input clearInput value="clear me"></ion-input>

<!-- Number type input -->
<ion-input type="number" value="333"></ion-input>

<!-- Disabled input -->
<ion-input value="Disabled" disabled></ion-input>

<!-- Readonly input -->
<ion-input value="Readonly" readonly></ion-input>

<!-- Inputs with labels -->
<ion-item>
  <ion-label>Default Label</ion-label>
  <ion-input></ion-input>
</ion-item>

<ion-item>
  <ion-label position="floating">Floating Label</ion-label>
  <ion-input></ion-input>
</ion-item>

<ion-item>
  <ion-label position="fixed">Fixed Label</ion-label>
  <ion-input></ion-input>
</ion-item>

<ion-item>
  <ion-label position="stacked">Stacked Label</ion-label>
  <ion-input></ion-input>
</ion-item>
```

</TabItem>

<TabItem value="javascript">

```html
<!-- Default Input -->
<ion-input></ion-input>

<!-- Input with value -->
<ion-input value="custom"></ion-input>

<!-- Input with placeholder -->
<ion-input placeholder="Enter Input"></ion-input>

<!-- Input with clear button when there is a value -->
<ion-input clear-input value="clear me"></ion-input>

<!-- Number type input -->
<ion-input type="number" value="333"></ion-input>

<!-- Disabled input -->
<ion-input value="Disabled" disabled></ion-input>

<!-- Readonly input -->
<ion-input value="Readonly" readonly></ion-input>

<!-- Inputs with labels -->
<ion-item>
  <ion-label>Default Label</ion-label>
  <ion-input></ion-input>
</ion-item>

<ion-item>
  <ion-label position="floating">Floating Label</ion-label>
  <ion-input></ion-input>
</ion-item>

<ion-item>
  <ion-label position="fixed">Fixed Label</ion-label>
  <ion-input></ion-input>
</ion-item>

<ion-item>
  <ion-label position="stacked">Stacked Label</ion-label>
  <ion-input></ion-input>
</ion-item>
```

</TabItem>

<TabItem value="react">

```tsx
import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonItemDivider,
} from '@ionic/react';

export const InputExamples: React.FC = () => {
  const [text, setText] = useState<string>();
  const [number, setNumber] = useState<number>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>IonInput Examples</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItemDivider>Default Input with Placeholder</IonItemDivider>
          <IonItem>
            <IonInput value={text} placeholder="Enter Input" onIonChange={(e) => setText(e.detail.value!)}></IonInput>
          </IonItem>

          <IonItemDivider>Input with clear button when there is a value</IonItemDivider>
          <IonItem>
            <IonInput
              value={text}
              placeholder="Enter Input"
              onIonChange={(e) => setText(e.detail.value!)}
              clearInput
            ></IonInput>
          </IonItem>

          <IonItemDivider>Number type input</IonItemDivider>
          <IonItem>
            <IonInput
              type="number"
              value={number}
              placeholder="Enter Number"
              onIonChange={(e) => setNumber(parseInt(e.detail.value!, 10))}
            ></IonInput>
          </IonItem>

          <IonItemDivider>Disabled input</IonItemDivider>
          <IonItem>
            <IonInput value={text} disabled></IonInput>
          </IonItem>

          <IonItemDivider>Readonly input</IonItemDivider>
          <IonItem>
            <IonInput value={text} readonly></IonInput>
          </IonItem>

          <IonItemDivider>Inputs with labels</IonItemDivider>

          <IonItem>
            <IonLabel>Default Label</IonLabel>
            <IonInput></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Floating Label</IonLabel>
            <IonInput value={text}></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="fixed">Fixed Label</IonLabel>
            <IonInput value={text}></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Stacked Label</IonLabel>
            <IonInput value={text}> </IonInput>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'input-example',
  styleUrl: 'input-example.css',
})
export class InputExample {
  render() {
    return [
      // Default Input
      <ion-input></ion-input>,

      // Input with value
      <ion-input value="custom"></ion-input>,

      // Input with placeholder
      <ion-input placeholder="Enter Input"></ion-input>,

      // Input with clear button when there is a value
      <ion-input clearInput value="clear me"></ion-input>,

      // Number type input
      <ion-input type="number" value="333"></ion-input>,

      // Disabled input
      <ion-input value="Disabled" disabled></ion-input>,

      // Readonly input
      <ion-input value="Readonly" readonly></ion-input>,

      // Inputs with labels
      <ion-item>
        <ion-label>Default Label</ion-label>
        <ion-input></ion-input>
      </ion-item>,

      <ion-item>
        <ion-label position="floating">Floating Label</ion-label>
        <ion-input></ion-input>
      </ion-item>,

      <ion-item>
        <ion-label position="fixed">Fixed Label</ion-label>
        <ion-input></ion-input>
      </ion-item>,

      <ion-item>
        <ion-label position="stacked">Stacked Label</ion-label>
        <ion-input></ion-input>
      </ion-item>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <!-- Default Input -->
  <ion-input></ion-input>

  <!-- Input with value -->
  <ion-input value="custom"></ion-input>

  <!-- Input with placeholder -->
  <ion-input placeholder="Enter Input"></ion-input>

  <!-- Input with clear button when there is a value -->
  <ion-input clear-input value="clear me"></ion-input>

  <!-- Number type input -->
  <ion-input type="number" value="333"></ion-input>

  <!-- Disabled input -->
  <ion-input value="Disabled" disabled></ion-input>

  <!-- Readonly input -->
  <ion-input value="Readonly" readonly></ion-input>

  <!-- Inputs with labels -->
  <ion-item>
    <ion-label>Default Label</ion-label>
    <ion-input></ion-input>
  </ion-item>

  <ion-item>
    <ion-label position="floating">Floating Label</ion-label>
    <ion-input></ion-input>
  </ion-item>

  <ion-item>
    <ion-label position="fixed">Fixed Label</ion-label>
    <ion-input></ion-input>
  </ion-item>

  <ion-item>
    <ion-label position="stacked">Stacked Label</ion-label>
    <ion-input></ion-input>
  </ion-item>
</template>

<script>
  import { IonLabel, IonInput, IonItem } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonLabel, IonInput, IonItem },
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
