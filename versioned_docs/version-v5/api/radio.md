---
sidebar_label: 'ion-radio'
demoUrl: '/docs/demos/api/radio/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/radio/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ion-radio

Radios should be used inside of an [`ion-radio-group`](radio-group.md). Pressing on a radio will check it. They can also be checked programmatically by setting the value property of the parent `ion-radio-group` to the value of the radio.

When radios are inside of a radio group, only one radio in the group will be checked at any time. Pressing a radio will check it and uncheck the previously selected radio, if there is one. If a radio is not in a group with another radio, then both radios will have the ability to be checked at the same time.

## Usage

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-list>
  <ion-radio-group value="biff">
    <ion-list-header>
      <ion-label>Name</ion-label>
    </ion-list-header>

    <ion-item>
      <ion-label>Biff</ion-label>
      <ion-radio slot="start" value="biff"></ion-radio>
    </ion-item>

    <ion-item>
      <ion-label>Griff</ion-label>
      <ion-radio slot="start" value="griff"></ion-radio>
    </ion-item>

    <ion-item>
      <ion-label>Buford</ion-label>
      <ion-radio slot="start" value="buford"></ion-radio>
    </ion-item>
  </ion-radio-group>
</ion-list>
```

</TabItem>

<TabItem value="javascript">

```html
<ion-list>
  <ion-radio-group value="biff">
    <ion-list-header>
      <ion-label>Name</ion-label>
    </ion-list-header>

    <ion-item>
      <ion-label>Biff</ion-label>
      <ion-radio slot="start" value="biff"></ion-radio>
    </ion-item>

    <ion-item>
      <ion-label>Griff</ion-label>
      <ion-radio slot="start" value="griff"></ion-radio>
    </ion-item>

    <ion-item>
      <ion-label>Buford</ion-label>
      <ion-radio slot="start" value="buford"></ion-radio>
    </ion-item>
  </ion-radio-group>
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
  IonList,
  IonRadioGroup,
  IonListHeader,
  IonLabel,
  IonItem,
  IonRadio,
  IonItemDivider,
} from '@ionic/react';

export const RadioExamples: React.FC = () => {
  const [selected, setSelected] = useState<string>('biff');
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Radio Examples</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonRadioGroup value={selected} onIonChange={(e) => setSelected(e.detail.value)}>
            <IonListHeader>
              <IonLabel>Name</IonLabel>
            </IonListHeader>

            <IonItem>
              <IonLabel>Biff</IonLabel>
              <IonRadio slot="start" value="biff" />
            </IonItem>

            <IonItem>
              <IonLabel>Griff</IonLabel>
              <IonRadio slot="start" value="griff" />
            </IonItem>

            <IonItem>
              <IonLabel>Buford</IonLabel>
              <IonRadio slot="start" value="buford" />
            </IonItem>
          </IonRadioGroup>
          <IonItemDivider>Your Selection</IonItemDivider>
          <IonItem>{selected ?? '(none selected'}</IonItem>
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
  tag: 'radio-example',
  styleUrl: 'radio-example.css',
})
export class RadioExample {
  render() {
    return [
      <ion-list>
        <ion-radio-group value="biff">
          <ion-list-header>
            <ion-label>Name</ion-label>
          </ion-list-header>

          <ion-item>
            <ion-label>Biff</ion-label>
            <ion-radio slot="start" value="biff"></ion-radio>
          </ion-item>

          <ion-item>
            <ion-label>Griff</ion-label>
            <ion-radio slot="start" value="griff"></ion-radio>
          </ion-item>

          <ion-item>
            <ion-label>Buford</ion-label>
            <ion-radio slot="start" value="buford"></ion-radio>
          </ion-item>
        </ion-radio-group>
      </ion-list>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <ion-list>
    <ion-radio-group value="biff">
      <ion-list-header>
        <ion-label>Name</ion-label>
      </ion-list-header>

      <ion-item>
        <ion-label>Biff</ion-label>
        <ion-radio slot="start" value="biff"></ion-radio>
      </ion-item>

      <ion-item>
        <ion-label>Griff</ion-label>
        <ion-radio slot="start" value="griff"></ion-radio>
      </ion-item>

      <ion-item>
        <ion-label>Buford</ion-label>
        <ion-radio slot="start" value="buford"></ion-radio>
      </ion-item>
    </ion-radio-group>
  </ion-list>
</template>

<script>
  import { IonItem, IonLabel, IonList, IonListHeader, IonRadio, IonRadioGroup } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      IonItem,
      IonLabel,
      IonList,
      IonListHeader,
      IonRadio,
      IonRadioGroup,
    },
  });
</script>
```

</TabItem>

</Tabs>

## Properties

### color

|                 |                                                                                                                                                                                                                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The color to use from your application's color palette.<br />Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.<br />For more information on colors, see [theming](../theming/basics.md). |
| **Attribute**   | `color`                                                                                                                                                                                                                                                                          |
| **Type**        | `string \| undefined`                                                                                                                                                                                                                                                            |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                      |

### disabled

|                 |                                                     |
| --------------- | --------------------------------------------------- |
| **Description** | If `true`, the user cannot interact with the radio. |
| **Attribute**   | `disabled`                                          |
| **Type**        | `boolean`                                           |
| **Default**     | `false`                                             |

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

|                 |                         |
| --------------- | ----------------------- |
| **Description** | the value of the radio. |
| **Attribute**   | `value`                 |
| **Type**        | `any`                   |
| **Default**     | `undefined`             |

## Events

| Name       | Description                                |
| ---------- | ------------------------------------------ |
| `ionBlur`  | Emitted when the radio button loses focus. |
| `ionFocus` | Emitted when the radio button has focus.   |

## CSS Shadow Parts

| Name        | Description                                              |
| ----------- | -------------------------------------------------------- |
| `container` | The container for the radio mark.                        |
| `mark`      | The checkmark or dot used to indicate the checked state. |

## CSS Custom Properties

| Name                    | Description                              |
| ----------------------- | ---------------------------------------- |
| `--border-radius`       | Border radius of the radio               |
| `--color`               | Color of the radio                       |
| `--color-checked`       | Color of the checked radio               |
| `--inner-border-radius` | Border radius of the inner checked radio |
