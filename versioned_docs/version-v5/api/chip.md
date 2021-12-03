---
title: 'ion-chip:  Name, Text, Icon and Avatar for Ionic Framework Apps'
description: 'ion-chips represent complex entities in small blocks, such as a contact. A chip can contain several different elements such as names, avatars, text, and icons.'
sidebar_label: 'ion-chip'
demoUrl: '/docs/demos/api/chip/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/chip/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ion-chip

Chips represent complex entities in small blocks, such as a contact. A chip can contain several different elements such as avatars, text, and icons.

## Usage

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-chip>
  <ion-label>Default</ion-label>
</ion-chip>

<ion-chip>
  <ion-label color="secondary">Secondary Label</ion-label>
</ion-chip>

<ion-chip color="secondary">
  <ion-label color="dark">Secondary w/ Dark label</ion-label>
</ion-chip>

<ion-chip [disabled]="true">
  <ion-label>Disabled Chip</ion-label>
</ion-chip>

<ion-chip>
  <ion-icon name="pin"></ion-icon>
  <ion-label>Default</ion-label>
</ion-chip>

<ion-chip>
  <ion-icon name="heart" color="dark"></ion-icon>
  <ion-label>Default</ion-label>
</ion-chip>

<ion-chip>
  <ion-label>Button Chip</ion-label>
  <ion-icon name="close-circle"></ion-icon>
</ion-chip>

<ion-chip>
  <ion-icon name="pin" color="primary"></ion-icon>
  <ion-label>Icon Chip</ion-label>
  <ion-icon name="close"></ion-icon>
</ion-chip>

<ion-chip>
  <ion-avatar>
    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
  </ion-avatar>
  <ion-label>Avatar Chip</ion-label>
  <ion-icon name="close-circle"></ion-icon>
</ion-chip>
```

</TabItem>

<TabItem value="javascript">

```html
<ion-chip>
  <ion-label>Default</ion-label>
</ion-chip>

<ion-chip>
  <ion-label color="secondary">Secondary Label</ion-label>
</ion-chip>

<ion-chip color="secondary">
  <ion-label color="dark">Secondary w/ Dark label</ion-label>
</ion-chip>

<ion-chip disabled="true">
  <ion-label>Disabled Chip</ion-label>
</ion-chip>

<ion-chip>
  <ion-icon name="pin"></ion-icon>
  <ion-label>Default</ion-label>
</ion-chip>

<ion-chip>
  <ion-icon name="heart" color="dark"></ion-icon>
  <ion-label>Default</ion-label>
</ion-chip>

<ion-chip>
  <ion-label>Button Chip</ion-label>
  <ion-icon name="close-circle"></ion-icon>
</ion-chip>

<ion-chip>
  <ion-icon name="pin" color="primary"></ion-icon>
  <ion-label>Icon Chip</ion-label>
  <ion-icon name="close"></ion-icon>
</ion-chip>

<ion-chip>
  <ion-avatar>
    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
  </ion-avatar>
  <ion-label>Avatar Chip</ion-label>
  <ion-icon name="close-circle"></ion-icon>
</ion-chip>
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonChip,
  IonLabel,
  IonIcon,
  IonAvatar,
} from '@ionic/react';
import { pin, heart, closeCircle, close } from 'ionicons/icons';

export const ChipExamples: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ChipExamples</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonChip>
          <IonLabel>Default</IonLabel>
        </IonChip>

        <IonChip>
          <IonLabel color="secondary">Secondary Label</IonLabel>
        </IonChip>

        <IonChip color="secondary">
          <IonLabel color="dark">Secondary w/ Dark label</IonLabel>
        </IonChip>

        <IonChip disabled={true}>
          <IonLabel>Disabled Chip</IonLabel>
        </IonChip>

        <IonChip>
          <IonIcon icon={pin} />
          <IonLabel>Default</IonLabel>
        </IonChip>

        <IonChip>
          <IonIcon icon={heart} color="dark" />
          <IonLabel>Default</IonLabel>
        </IonChip>

        <IonChip>
          <IonLabel>Button Chip</IonLabel>
          <IonIcon icon={closeCircle} />
        </IonChip>

        <IonChip>
          <IonIcon icon={pin} color="primary" />
          <IonLabel>Icon Chip</IonLabel>
          <IonIcon icon={close} />
        </IonChip>

        <IonChip>
          <IonAvatar>
            <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
          </IonAvatar>
          <IonLabel>Avatar Chip</IonLabel>
          <IonIcon icon={closeCircle} />
        </IonChip>
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
  tag: 'chip-example',
  styleUrl: 'chip-example.css',
})
export class ChipExample {
  render() {
    return [
      <ion-chip>
        <ion-label>Default</ion-label>
      </ion-chip>,

      <ion-chip>
        <ion-label color="secondary">Secondary Label</ion-label>
      </ion-chip>,

      <ion-chip color="secondary">
        <ion-label color="dark">Secondary w/ Dark label</ion-label>
      </ion-chip>,

      <ion-chip>
        <ion-icon name="pin"></ion-icon>
        <ion-label>Default</ion-label>
      </ion-chip>,

      <ion-chip>
        <ion-icon name="heart" color="dark"></ion-icon>
        <ion-label>Default</ion-label>
      </ion-chip>,

      <ion-chip>
        <ion-label>Button Chip</ion-label>
        <ion-icon name="close-circle"></ion-icon>
      </ion-chip>,

      <ion-chip>
        <ion-icon name="pin" color="primary"></ion-icon>
        <ion-label>Icon Chip</ion-label>
        <ion-icon name="close"></ion-icon>
      </ion-chip>,

      <ion-chip>
        <ion-avatar>
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
        </ion-avatar>
        <ion-label>Avatar Chip</ion-label>
        <ion-icon name="close-circle"></ion-icon>
      </ion-chip>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <ion-chip>
    <ion-label>Default</ion-label>
  </ion-chip>

  <ion-chip>
    <ion-label color="secondary">Secondary Label</ion-label>
  </ion-chip>

  <ion-chip color="secondary">
    <ion-label color="dark">Secondary w/ Dark label</ion-label>
  </ion-chip>

  <ion-chip :disabled="true">
    <ion-label>Disabled Chip</ion-label>
  </ion-chip>

  <ion-chip>
    <ion-icon :icon="pin"></ion-icon>
    <ion-label>Default</ion-label>
  </ion-chip>

  <ion-chip>
    <ion-icon :icon="heart" color="dark"></ion-icon>
    <ion-label>Default</ion-label>
  </ion-chip>

  <ion-chip>
    <ion-label>Button Chip</ion-label>
    <ion-icon :icon="closeCircle"></ion-icon>
  </ion-chip>

  <ion-chip>
    <ion-icon :icon="pin" color="primary"></ion-icon>
    <ion-label>Icon Chip</ion-label>
    <ion-icon :icon="close"></ion-icon>
  </ion-chip>

  <ion-chip>
    <ion-avatar>
      <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
    </ion-avatar>
    <ion-label>Avatar Chip</ion-label>
    <ion-icon :icon="closeCircle"></ion-icon>
  </ion-chip>
</template>

<script>
  import { IonAvatar, IonChip, IonIcon, IonLabel } from '@ionic/vue';
  import { close, closeCircle, heart, pin } from 'ionicons/icons';

  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonAvatar, IonChip, IonIcon, IonLabel },
    setup() {
      return { close, closeCircle, heart, pin };
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

|                 |                                                    |
| --------------- | -------------------------------------------------- |
| **Description** | If `true`, the user cannot interact with the chip. |
| **Attribute**   | `disabled`                                         |
| **Type**        | `boolean`                                          |
| **Default**     | `false`                                            |

### mode

|                 |                                                   |
| --------------- | ------------------------------------------------- |
| **Description** | The mode determines which platform styles to use. |
| **Attribute**   | `mode`                                            |
| **Type**        | `"ios" \| "md"`                                   |
| **Default**     | `undefined`                                       |

### outline

|                 |                                  |
| --------------- | -------------------------------- |
| **Description** | Display an outline style button. |
| **Attribute**   | `outline`                        |
| **Type**        | `boolean`                        |
| **Default**     | `false`                          |

## CSS Custom Properties

| Name           | Description            |
| -------------- | ---------------------- |
| `--background` | Background of the chip |
| `--color`      | Color of the chip      |
