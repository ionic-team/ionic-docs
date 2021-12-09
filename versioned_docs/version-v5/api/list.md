---
sidebar_label: 'ion-list'
demoUrl: '/docs/demos/api/list/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/list/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ion-list

Lists are made up of multiple rows of items which can contain text, buttons, toggles,
icons, thumbnails, and much more. Lists generally contain items with similar data content, such as images and text.

Lists support several interactions including swiping items to reveal options, dragging to reorder items within the list, and deleting items.

## Usage

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<!-- List of Text Items -->
<ion-list>
  <ion-item>
    <ion-label>Pokémon Yellow</ion-label>
  </ion-item>
  <ion-item>
    <ion-label>Mega Man X</ion-label>
  </ion-item>
  <ion-item>
    <ion-label>The Legend of Zelda</ion-label>
  </ion-item>
  <ion-item>
    <ion-label>Pac-Man</ion-label>
  </ion-item>
  <ion-item>
    <ion-label>Super Mario World</ion-label>
  </ion-item>
</ion-list>

<!-- List of Input Items -->
<ion-list>
  <ion-item>
    <ion-label>Input</ion-label>
    <ion-input></ion-input>
  </ion-item>
  <ion-item>
    <ion-label>Toggle</ion-label>
    <ion-toggle slot="end"></ion-toggle>
  </ion-item>
  <ion-item>
    <ion-label>Radio</ion-label>
    <ion-radio slot="end"></ion-radio>
  </ion-item>
  <ion-item>
    <ion-label>Checkbox</ion-label>
    <ion-checkbox slot="start"></ion-checkbox>
  </ion-item>
</ion-list>

<!-- List of Sliding Items -->
<ion-list>
  <ion-item-sliding>
    <ion-item>
      <ion-label>Item</ion-label>
    </ion-item>
    <ion-item-options side="end">
      <ion-item-option (click)="unread(item)">Unread</ion-item-option>
    </ion-item-options>
  </ion-item-sliding>

  <ion-item-sliding>
    <ion-item>
      <ion-label>Item</ion-label>
    </ion-item>
    <ion-item-options side="end">
      <ion-item-option (click)="unread(item)">Unread</ion-item-option>
    </ion-item-options>
  </ion-item-sliding>
</ion-list>
```

</TabItem>

<TabItem value="javascript">

```html
<!-- List of Text Items -->
<ion-list>
  <ion-item>
    <ion-label>Pokémon Yellow</ion-label>
  </ion-item>
  <ion-item>
    <ion-label>Mega Man X</ion-label>
  </ion-item>
  <ion-item>
    <ion-label>The Legend of Zelda</ion-label>
  </ion-item>
  <ion-item>
    <ion-label>Pac-Man</ion-label>
  </ion-item>
  <ion-item>
    <ion-label>Super Mario World</ion-label>
  </ion-item>
</ion-list>

<!-- List of Input Items -->
<ion-list>
  <ion-item>
    <ion-label>Input</ion-label>
    <ion-input></ion-input>
  </ion-item>
  <ion-item>
    <ion-label>Toggle</ion-label>
    <ion-toggle slot="end"></ion-toggle>
  </ion-item>
  <ion-item>
    <ion-label>Radio</ion-label>
    <ion-radio slot="end"></ion-radio>
  </ion-item>
  <ion-item>
    <ion-label>Checkbox</ion-label>
    <ion-checkbox slot="start"></ion-checkbox>
  </ion-item>
</ion-list>

<!-- List of Sliding Items -->
<ion-list>
  <ion-item-sliding>
    <ion-item>
      <ion-label>Item</ion-label>
    </ion-item>
    <ion-item-options side="end">
      <ion-item-option onClick="unread(item)">Unread</ion-item-option>
    </ion-item-options>
  </ion-item-sliding>

  <ion-item-sliding>
    <ion-item>
      <ion-label>Item</ion-label>
    </ion-item>
    <ion-item-options side="end">
      <ion-item-option onClick="unread(item)">Unread</ion-item-option>
    </ion-item-options>
  </ion-item-sliding>
</ion-list>
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonToggle,
  IonRadio,
  IonCheckbox,
  IonItemSliding,
  IonItemOption,
  IonItemOptions,
  IonContent,
} from '@ionic/react';

export const ListExample: React.FC = () => (
  <IonContent>
    {/*-- List of Text Items --*/}
    <IonList>
      <IonItem>
        <IonLabel>Pokémon Yellow</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Mega Man X</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>The Legend of Zelda</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Pac-Man</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Super Mario World</IonLabel>
      </IonItem>
    </IonList>

    {/*-- List of Input Items --*/}
    <IonList>
      <IonItem>
        <IonLabel>Input</IonLabel>
        <IonInput></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel>Toggle</IonLabel>
        <IonToggle slot="end"></IonToggle>
      </IonItem>
      <IonItem>
        <IonLabel>Radio</IonLabel>
        <IonRadio slot="end"></IonRadio>
      </IonItem>
      <IonItem>
        <IonLabel>Checkbox</IonLabel>
        <IonCheckbox slot="start" />
      </IonItem>
    </IonList>

    {/*-- List of Sliding Items --*/}
    <IonList>
      <IonItemSliding>
        <IonItem>
          <IonLabel>Item</IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption onClick={() => {}}>Unread</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>

      <IonItemSliding>
        <IonItem>
          <IonLabel>Item</IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption onClick={() => {}}>Unread</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
    </IonList>
  </IonContent>
);
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'list-example',
  styleUrl: 'list-example.css',
})
export class ListExample {
  unread(ev: Event) {
    console.log('Item is unread', ev);
  }

  render() {
    return [
      // List of Text Items
      <ion-list>
        <ion-item>
          <ion-label>Pokémon Yellow</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Mega Man X</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>The Legend of Zelda</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Pac-Man</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Super Mario World</ion-label>
        </ion-item>
      </ion-list>,

      // List of Input Items
      <ion-list>
        <ion-item>
          <ion-label>Input</ion-label>
          <ion-input></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>Toggle</ion-label>
          <ion-toggle slot="end"></ion-toggle>
        </ion-item>
        <ion-item>
          <ion-label>Radio</ion-label>
          <ion-radio slot="end"></ion-radio>
        </ion-item>
        <ion-item>
          <ion-label>Checkbox</ion-label>
          <ion-checkbox slot="start"></ion-checkbox>
        </ion-item>
      </ion-list>,

      // List of Sliding Items
      <ion-list>
        <ion-item-sliding>
          <ion-item>
            <ion-label>Item</ion-label>
          </ion-item>
          <ion-item-options side="end">
            <ion-item-option onClick={(ev) => this.unread(ev)}>Unread</ion-item-option>
          </ion-item-options>
        </ion-item-sliding>

        <ion-item-sliding>
          <ion-item>
            <ion-label>Item</ion-label>
          </ion-item>
          <ion-item-options side="end">
            <ion-item-option onClick={(ev) => this.unread(ev)}>Unread</ion-item-option>
          </ion-item-options>
        </ion-item-sliding>
      </ion-list>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <!-- List of Text Items -->
  <ion-list>
    <ion-item>
      <ion-label>Pokémon Yellow</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Mega Man X</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>The Legend of Zelda</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Pac-Man</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Super Mario World</ion-label>
    </ion-item>
  </ion-list>

  <!-- List of Input Items -->
  <ion-list>
    <ion-item>
      <ion-label>Input</ion-label>
      <ion-input></ion-input>
    </ion-item>
    <ion-item>
      <ion-label>Toggle</ion-label>
      <ion-toggle slot="end"></ion-toggle>
    </ion-item>
    <ion-item>
      <ion-label>Radio</ion-label>
      <ion-radio slot="end"></ion-radio>
    </ion-item>
    <ion-item>
      <ion-label>Checkbox</ion-label>
      <ion-checkbox slot="start"></ion-checkbox>
    </ion-item>
  </ion-list>

  <!-- List of Sliding Items -->
  <ion-list>
    <ion-item-sliding>
      <ion-item>
        <ion-label>Item</ion-label>
      </ion-item>
      <ion-item-options side="end">
        <ion-item-option @click="unread(item)">Unread</ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    <ion-item-sliding>
      <ion-item>
        <ion-label>Item</ion-label>
      </ion-item>
      <ion-item-options side="end">
        <ion-item-option @click="unread(item)">Unread</ion-item-option>
      </ion-item-options>
    </ion-item-sliding>
  </ion-list>
</template>

<script>
  import {
    IonCheckbox,
    IonInput,
    IonItem,
    IonItemOption,
    IonItemOptions,
    IonItemSliding,
    IonList,
    IonLabel,
    IonRadio,
    IonToggle,
  } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      IonCheckbox,
      IonInput,
      IonItem,
      IonItemOption,
      IonItemOptions,
      IonItemSliding,
      IonList,
      IonLabel,
      IonRadio,
      IonToggle,
    },
  });
</script>
```

</TabItem>

</Tabs>

## Properties

### inset

|                 |                                                                     |
| --------------- | ------------------------------------------------------------------- |
| **Description** | If `true`, the list will have margin around it and rounded corners. |
| **Attribute**   | `inset`                                                             |
| **Type**        | `boolean`                                                           |
| **Default**     | `false`                                                             |

### lines

|                 |                                                         |
| --------------- | ------------------------------------------------------- |
| **Description** | How the bottom border should be displayed on all items. |
| **Attribute**   | `lines`                                                 |
| **Type**        | `"full" \| "inset" \| "none" \| undefined`              |
| **Default**     | `undefined`                                             |

### mode

|                 |                                                   |
| --------------- | ------------------------------------------------- |
| **Description** | The mode determines which platform styles to use. |
| **Attribute**   | `mode`                                            |
| **Type**        | `"ios" \| "md"`                                   |
| **Default**     | `undefined`                                       |

## Methods

### closeSlidingItems

|                 |                                                                                                                                                                     |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | If `ion-item-sliding` are used inside the list, this method closes<br />any open sliding item.<br /><br />Returns `true` if an actual `ion-item-sliding` is closed. |
| **Signature**   | `closeSlidingItems() => Promise<boolean>`                                                                                                                           |
