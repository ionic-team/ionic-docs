---
title: "ion-picker"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@site/static/auto-generated/picker/props.md';
import Events from '@site/static/auto-generated/picker/events.md';
import Methods from '@site/static/auto-generated/picker/methods.md';
import Parts from '@site/static/auto-generated/picker/parts.md';
import CustomProps from '@site/static/auto-generated/picker/custom-props.md';
import Slots from '@site/static/auto-generated/picker/slots.md';

<head>
  <title>Picker | Display Buttons and Columns for ion-picker on Ionic Apps</title>
  <meta name="description" content="A Picker is a dialog that displays a row of buttons and columns underneath. Ion-picker appears on top of the app's content, and at the bottom of the viewport." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

A Picker is a dialog that displays a row of buttons and columns underneath. It appears on top of the app's content, and at the bottom of the viewport.

## Inline Pickers (Recommended)

`ion-picker` can be used by writing the component directly in your template. This reduces the number of handlers you need to wire up in order to present the Picker.

import Trigger from '@site/static/usage/v7/picker/inline/trigger/index.md';

<Trigger />

### Using `isOpen`

The `isOpen` property on `ion-picker` allows developers to control the presentation state of the Picker from their application state. This means when `isOpen` is set to `true` the Picker will be presented, and when `isOpen` is set to `false` the Picker will be dismissed.

`isOpen` uses a one-way data binding, meaning it will not automatically be set to `false` when the Picker is dismissed. Developers should listen for the `ionPickerDidDismiss` or `didDismiss` event and set `isOpen` to `false`. The reason for this is it prevents the internals of `ion-picker` from being tightly coupled with the state of the application. With a one way data binding, the Picker only needs to concern itself with the boolean value that the reactive variable provides. With a two way data binding, the Picker needs to concern itself with both the boolean value as well as the existence of the reactive variable itself. This can lead to non-deterministic behaviors and make applications harder to debug.

TODO: playground

## Controller Pickers

The `pickerController` can be used in situations where more control is needed over when the Picker is presented and dismissed.

import Controller from '@site/static/usage/v7/picker/controller/index.md';

<Controller />

## Multiple Columns

The `columns` property can be used to display a Picker with multiple columns of different options.

import MultipleColumn from '@site/static/usage/v7/picker/multiple-column/index.md';

<MultipleColumn />

## Interfaces

### PickerButton

```typescript
interface PickerButton {
  text?: string;
  role?: string;
  cssClass?: string | string[];
  handler?: (value: any) => boolean | void;
}
```

### PickerColumn

```typescript
interface PickerColumn {
  name: string;
  align?: string;
  selectedIndex?: number;
  prevSelected?: number;
  prefix?: string;
  suffix?: string;
  options: PickerColumnOption[];
  cssClass?: string | string[];
  columnWidth?: string;
  prefixWidth?: string;
  suffixWidth?: string;
  optionsWidth?: string;
}
```

### PickerColumnOption

```typescript
interface PickerColumnOption {
  text?: string;
  value?: any;
  disabled?: boolean;
  duration?: number;
  transform?: string;
  selected?: boolean;
}
```

### PickerOptions

```typescript
interface PickerOptions {
  columns: PickerColumn[];
  buttons?: PickerButton[];
  cssClass?: string | string[];
  showBackdrop?: boolean;
  backdropDismiss?: boolean;
  animated?: boolean;

  mode?: Mode;
  keyboardClose?: boolean;
  id?: string;
  htmlAttributes?: { [key: string]: any };

  enterAnimation?: AnimationBuilder;
  leaveAnimation?: AnimationBuilder;
}
```




## Usage

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>


<TabItem value="angular">

```html
<ion-button expand="block" (click)="presentPicker()">Show Picker</ion-button>
```

```ts
import { Component } from '@angular/core';
import { PickerController } from '@ionic/angular';
@Component({
  selector: 'app-picker-example',
  template: 'picker-example.component.html'
})
export class PickerExample {
  private selectedAnimal: string;
  constructor(private pickerController: PickerController) { }
  
  async presentPicker() {
    const picker = await this.pickerController.create({
      buttons: [
        {
          text: 'Confirm',
          handler: (selected) => {
            this.selectedAnimal = selected.animal.value;
          },
        }
      ],
      columns: [
        {
          name: 'animal',
          options: [
            { text: 'Dog', value: 'dog' },
            { text: 'Cat', value: 'cat' },
            { text: 'Bird', value: 'bird' },
          ]
        }
      ]
    });
    await picker.present();
  }
}
```

</TabItem>

<TabItem value="react">

```tsx
/* Using with useIonPicker Hook */

import React, { useState } from 'react';
import { IonButton, IonContent, IonPage, useIonPicker } from '@ionic/react';

const PickerExample: React.FC = () => {
  const [present] = useIonPicker();
  const [value, setValue] = useState('');
  return (
    <IonPage>
      <IonContent>
        <IonButton
          expand="block"
          onClick={() =>
            present({
              buttons: [
                {
                  text: 'Confirm',
                  handler: (selected) => {
                    setValue(selected.animal.value)
                  },
                },
              ],
              columns: [
                {
                  name: 'animal',
                  options: [
                    { text: 'Dog', value: 'dog' },
                    { text: 'Cat', value: 'cat' },
                    { text: 'Bird', value: 'bird' },
                  ],
                },
              ],
            })
          }
        >
          Show Picker
        </IonButton>
        <IonButton
          expand="block"
          onClick={() =>
            present(
              [
                {
                  name: 'animal',
                  options: [
                    { text: 'Dog', value: 'dog' },
                    { text: 'Cat', value: 'cat' },
                    { text: 'Bird', value: 'bird' },
                  ],
                },
                {
                  name: 'vehicle',
                  options: [
                    { text: 'Car', value: 'car' },
                    { text: 'Truck', value: 'truck' },
                    { text: 'Bike', value: 'bike' },
                  ],
                },
              ],
              [
                {
                  text: 'Confirm',
                  handler: (selected) => {
                    setValue(`${selected.animal.value}, ${selected.vehicle.value}`)
                  },
                },
              ]
            )
          }
        >
          Show Picker using params
        </IonButton>
        {value && (
          <div>Selected Value: {value}</div>
        )}
      </IonContent>
    </IonPage>
  );
};
```

</TabItem>


<TabItem value="vue">

```vue
<template>
  <div>
    <ion-button @click="openPicker">SHOW PICKER</ion-button>
    <p v-if="picked.animal">picked: {{ picked.animal.text }}</p>
  </div>
</template>

<script>
import { IonButton, pickerController } from "@ionic/vue";
export default {
  components: {
    IonButton,
  },
  data() {
    return {
      pickingOptions: {
        name: "animal",
        options: [
          { text: "Dog", value: "dog" },
          { text: "Cat", value: "cat" },
          { text: "Bird", value: "bird" },
        ],
      },
      picked: {
        animal: "",
      },
    };
  },
  methods: {
    async openPicker() {
      const picker = await pickerController.create({
        columns: [this.pickingOptions],
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
          },
          {
            text: "Confirm",
            handler: (value) => {
              this.picked = value;
              console.log(`Got Value ${value}`);
            },
          },
        ],
      });
      await picker.present();
    },
  },
};
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
