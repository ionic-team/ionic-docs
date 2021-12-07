---
sidebar_label: 'ion-checkbox'
demoUrl: '/docs/demos/api/checkbox/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/checkbox/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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

### checked

|                 |                                      |
| --------------- | ------------------------------------ |
| **Description** | If `true`, the checkbox is selected. |
| **Attribute**   | `checked`                            |
| **Type**        | `boolean`                            |
| **Default**     | `false`                              |

### color

|                 |                                                                                                                                                                                                                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The color to use from your application's color palette.<br />Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.<br />For more information on colors, see [theming](../theming/basics.md). |
| **Attribute**   | `color`                                                                                                                                                                                                                                                                          |
| **Type**        | `string \| undefined`                                                                                                                                                                                                                                                            |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                      |

### disabled

|                 |                                                        |
| --------------- | ------------------------------------------------------ |
| **Description** | If `true`, the user cannot interact with the checkbox. |
| **Attribute**   | `disabled`                                             |
| **Type**        | `boolean`                                              |
| **Default**     | `false`                                                |

### indeterminate

|                 |                                                                |
| --------------- | -------------------------------------------------------------- |
| **Description** | If `true`, the checkbox will visually appear as indeterminate. |
| **Attribute**   | `indeterminate`                                                |
| **Type**        | `boolean`                                                      |
| **Default**     | `false`                                                        |

### mode

|                 |                                                   |
| --------------- | ------------------------------------------------- |
| **Description** | The mode determines which platform styles to use. |
| **Attribute**   | `mode`                                            |
| **Type**        | `"ios" \| "md"`                                   |
| **Default**     | `undefined`                                       |

### name

|                 |                                                                 |
| --------------- | --------------------------------------------------------------- |
| **Description** | The name of the control, which is submitted with the form data. |
| **Attribute**   | `name`                                                          |
| **Type**        | `string`                                                        |
| **Default**     | `this.inputId`                                                  |

### value

|                 |                                                                                                                                                                                                                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The value of the checkbox does not mean if it's checked or not, use the `checked`<br />property for that.<br /><br />The value of a checkbox is analogous to the value of an `<input type="checkbox">`,<br />it's only used when the checkbox participates in a native `<form>`. |
| **Attribute**   | `value`                                                                                                                                                                                                                                                                          |
| **Type**        | `string`                                                                                                                                                                                                                                                                         |
| **Default**     | `'on'`                                                                                                                                                                                                                                                                           |

## Events

| Name        | Description                                    |
| ----------- | ---------------------------------------------- |
| `ionBlur`   | Emitted when the checkbox loses focus.         |
| `ionChange` | Emitted when the checked property has changed. |
| `ionFocus`  | Emitted when the checkbox has focus.           |

## CSS Shadow Parts

| Name        | Description                                       |
| ----------- | ------------------------------------------------- |
| `container` | The container for the checkbox mark.              |
| `mark`      | The checkmark used to indicate the checked state. |

## CSS Custom Properties

| Name                     | Description                                    |
| ------------------------ | ---------------------------------------------- |
| `--background`           | Background of the checkbox icon                |
| `--background-checked`   | Background of the checkbox icon when checked   |
| `--border-color`         | Border color of the checkbox icon              |
| `--border-color-checked` | Border color of the checkbox icon when checked |
| `--border-radius`        | Border radius of the checkbox icon             |
| `--border-style`         | Border style of the checkbox icon              |
| `--border-width`         | Border width of the checkbox icon              |
| `--checkmark-color`      | Color of the checkbox checkmark when checked   |
| `--checkmark-width`      | Stroke width of the checkbox checkmark         |
| `--size`                 | Size of the checkbox icon                      |
| `--transition`           | Transition of the checkbox icon                |
