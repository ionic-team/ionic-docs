---
sidebar_label: 'ion-checkbox'
demoUrl: '/docs/demos/api/checkbox/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/checkbox/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/checkbox/props.md';
import Events from '@ionic-internal/component-api/v5/checkbox/events.md';
import Methods from '@ionic-internal/component-api/v5/checkbox/methods.md';
import Parts from '@ionic-internal/component-api/v5/checkbox/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/checkbox/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/checkbox/slots.md';

# ion-checkbox

Checkboxes allow the selection of multiple options from a set of options. They appear as checked (ticked) when activated. Clicking on a checkbox will toggle the `checked` property. They can also be checked programmatically by setting the `checked` property.

## Usage

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<!-- Default Checkbox -->
<ion-checkbox></ion-checkbox>

<!-- Disabled Checkbox -->
<ion-checkbox disabled="true"></ion-checkbox>

<!-- Checked Checkbox -->
<ion-checkbox checked="true"></ion-checkbox>

<!-- Checkbox Colors -->
<ion-checkbox color="primary"></ion-checkbox>
<ion-checkbox color="secondary"></ion-checkbox>
<ion-checkbox color="danger"></ion-checkbox>
<ion-checkbox color="light"></ion-checkbox>
<ion-checkbox color="dark"></ion-checkbox>

<!-- Checkboxes in a List -->
<ion-list>
  <ion-item *ngFor="let entry of form">
    <ion-label>{{entry.val}}</ion-label>
    <ion-checkbox slot="end" [(ngModel)]="entry.isChecked"></ion-checkbox>
  </ion-item>
</ion-list>
```

```tsx
import { Component } from '@angular/core';

@Component({
  selector: 'app-page-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public form = [
    { val: 'Pepperoni', isChecked: true },
    { val: 'Sausage', isChecked: false },
    { val: 'Mushroom', isChecked: false },
  ];
}
```

</TabItem>

<TabItem value="javascript">

```html
<!-- Default Checkbox -->
<ion-checkbox></ion-checkbox>

<!-- Disabled Checkbox -->
<ion-checkbox disabled></ion-checkbox>

<!-- Checked Checkbox -->
<ion-checkbox checked></ion-checkbox>

<!-- Checkbox Colors -->
<ion-checkbox color="primary"></ion-checkbox>
<ion-checkbox color="secondary"></ion-checkbox>
<ion-checkbox color="danger"></ion-checkbox>
<ion-checkbox color="light"></ion-checkbox>
<ion-checkbox color="dark"></ion-checkbox>

<!-- Checkboxes in a List -->
<ion-list>
  <ion-item>
    <ion-label>Pepperoni</ion-label>
    <ion-checkbox slot="end" value="pepperoni" checked></ion-checkbox>
  </ion-item>

  <ion-item>
    <ion-label>Sausage</ion-label>
    <ion-checkbox slot="end" value="sausage" disabled></ion-checkbox>
  </ion-item>

  <ion-item>
    <ion-label>Mushrooms</ion-label>
    <ion-checkbox slot="end" value="mushrooms"></ion-checkbox>
  </ion-item>
</ion-list>
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
  IonCheckbox,
  IonList,
  IonItem,
  IonLabel,
  IonItemDivider,
} from '@ionic/react';

const checkboxList = [
  { val: 'Pepperoni', isChecked: true },
  { val: 'Sausage', isChecked: false },
  { val: 'Mushroom', isChecked: false },
];

export const CheckboxExamples: React.FC = () => {
  const [checked, setChecked] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>CheckboxExamples</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItemDivider>Default Checkbox</IonItemDivider>
          <IonItem>
            <IonLabel>Checked: {JSON.stringify(checked)}</IonLabel>
            <IonCheckbox checked={checked} onIonChange={(e) => setChecked(e.detail.checked)} />
          </IonItem>

          <IonItemDivider>Disabled Checkbox</IonItemDivider>
          <IonItem>
            <IonCheckbox slot="end" disabled={true} />
          </IonItem>

          <IonItemDivider>Checkbox Colors</IonItemDivider>
          <IonItem>
            <IonCheckbox slot="end" color="primary" />
            <IonCheckbox slot="end" color="secondary" />
            <IonCheckbox slot="end" color="danger" />
            <IonCheckbox slot="end" color="light" />
            <IonCheckbox slot="end" color="dark" />
          </IonItem>
          <IonItemDivider>Checkboxes in a List</IonItemDivider>

          {checkboxList.map(({ val, isChecked }, i) => (
            <IonItem key={i}>
              <IonLabel>{val}</IonLabel>
              <IonCheckbox slot="end" value={val} checked={isChecked} />
            </IonItem>
          ))}
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
  tag: 'checkbox-example',
  styleUrl: 'checkbox-example.css',
})
export class CheckboxExample {
  private form = [
    { val: 'Pepperoni', isChecked: true },
    { val: 'Sausage', isChecked: false },
    { val: 'Mushroom', isChecked: false },
  ];

  render() {
    return [
      // Default Checkbox
      <ion-checkbox></ion-checkbox>,

      // Disabled Checkbox
      <ion-checkbox disabled={true}></ion-checkbox>,

      // Checked Checkbox
      <ion-checkbox checked={true}></ion-checkbox>,

      // Checkbox Colors
      <ion-checkbox color="primary"></ion-checkbox>,
      <ion-checkbox color="secondary"></ion-checkbox>,
      <ion-checkbox color="danger"></ion-checkbox>,
      <ion-checkbox color="light"></ion-checkbox>,
      <ion-checkbox color="dark"></ion-checkbox>,

      // Checkboxes in a List
      <ion-list>
        {this.form.map((entry) => (
          <ion-item>
            <ion-label>{entry.val}</ion-label>
            <ion-checkbox slot="end" checked={entry.isChecked}></ion-checkbox>
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
  <!-- Default Checkbox -->
  <ion-checkbox></ion-checkbox>

  <!-- Disabled Checkbox -->
  <ion-checkbox disabled="true"></ion-checkbox>

  <!-- Checked Checkbox -->
  <ion-checkbox checked="true"></ion-checkbox>

  <!-- Checkbox Colors -->
  <ion-checkbox color="primary"></ion-checkbox>
  <ion-checkbox color="secondary"></ion-checkbox>
  <ion-checkbox color="danger"></ion-checkbox>
  <ion-checkbox color="light"></ion-checkbox>
  <ion-checkbox color="dark"></ion-checkbox>

  <!-- Checkboxes in a List -->
  <ion-list>
    <ion-item v-for="entry in form">
      <ion-label>{{entry.val}}</ion-label>
      <ion-checkbox slot="end" @update:modelValue="entry.isChecked = $event" :modelValue="entry.isChecked">
      </ion-checkbox>
    </ion-item>
  </ion-list>
</template>

<script>
  import { IonCheckbox, IonItem, IonLabel, IonList } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonCheckbox, IonItem, IonLabel, IonList },
    setup() {
      const form = [
        { val: 'Pepperoni', isChecked: true },
        { val: 'Sausage', isChecked: false },
        { val: 'Mushroom', isChecked: false },
      ];

      return { form };
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
