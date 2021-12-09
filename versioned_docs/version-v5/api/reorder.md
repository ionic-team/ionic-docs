---
sidebar_label: 'ion-reorder'
demoUrl: '/docs/demos/api/reorder/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/reorder/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ion-reorder

Reorder is a component that allows an item in a group of items to be dragged to change its order within that group. It must be used within an `ion-reorder-group` to provide a visual drag and drop interface.

`ion-reorder` is the anchor used to drag and drop the items inside of the `ion-reorder-group`. See the [Reorder Group](reorder-group.md) for more information on how to complete the reorder operation.

## Usage

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<!-- The reorder gesture is disabled by default, enable it to drag and drop items -->
<ion-reorder-group disabled="false">
  <!-- Default reorder icon, end aligned items -->
  <ion-item>
    <ion-label> Item 1 </ion-label>
    <ion-reorder slot="end"></ion-reorder>
  </ion-item>

  <ion-item>
    <ion-label> Item 2 </ion-label>
    <ion-reorder slot="end"></ion-reorder>
  </ion-item>

  <!-- Default reorder icon, start aligned items -->
  <ion-item>
    <ion-reorder slot="start"></ion-reorder>
    <ion-label> Item 3 </ion-label>
  </ion-item>

  <ion-item>
    <ion-reorder slot="start"></ion-reorder>
    <ion-label> Item 4 </ion-label>
  </ion-item>

  <!-- Custom reorder icon end items -->
  <ion-item>
    <ion-label> Item 5 </ion-label>
    <ion-reorder slot="end">
      <ion-icon name="pizza"></ion-icon>
    </ion-reorder>
  </ion-item>

  <ion-item>
    <ion-label> Item 6 </ion-label>
    <ion-reorder slot="end">
      <ion-icon name="pizza"></ion-icon>
    </ion-reorder>
  </ion-item>

  <!-- Items wrapped in a reorder, entire item can be dragged -->
  <ion-reorder>
    <ion-item>
      <ion-label> Item 7 </ion-label>
    </ion-item>
  </ion-reorder>

  <ion-reorder>
    <ion-item>
      <ion-label> Item 8 </ion-label>
    </ion-item>
  </ion-reorder>
</ion-reorder-group>
```

</TabItem>

<TabItem value="javascript">

```html
<!-- The reorder gesture is disabled by default, enable it to drag and drop items -->
<ion-reorder-group disabled="false">
  <!-- Default reorder icon, end aligned items -->
  <ion-item>
    <ion-label> Item 1 </ion-label>
    <ion-reorder slot="end"></ion-reorder>
  </ion-item>

  <ion-item>
    <ion-label> Item 2 </ion-label>
    <ion-reorder slot="end"></ion-reorder>
  </ion-item>

  <!-- Default reorder icon, start aligned items -->
  <ion-item>
    <ion-reorder slot="start"></ion-reorder>
    <ion-label> Item 3 </ion-label>
  </ion-item>

  <ion-item>
    <ion-reorder slot="start"></ion-reorder>
    <ion-label> Item 4 </ion-label>
  </ion-item>

  <!-- Custom reorder icon end items -->
  <ion-item>
    <ion-label> Item 5 </ion-label>
    <ion-reorder slot="end">
      <ion-icon name="pizza"></ion-icon>
    </ion-reorder>
  </ion-item>

  <ion-item>
    <ion-label> Item 6 </ion-label>
    <ion-reorder slot="end">
      <ion-icon name="pizza"></ion-icon>
    </ion-reorder>
  </ion-item>

  <!-- Items wrapped in a reorder, entire item can be dragged -->
  <ion-reorder>
    <ion-item>
      <ion-label> Item 7 </ion-label>
    </ion-item>
  </ion-reorder>

  <ion-reorder>
    <ion-item>
      <ion-label> Item 8 </ion-label>
    </ion-item>
  </ion-reorder>
</ion-reorder-group>
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import { IonIcon, IonItem, IonLabel, IonReorder, IonReorderGroup, IonContent } from '@ionic/react';
import { pizza } from 'ionicons/icons';

export const ReorderExample: React.FC = () => (
  <IonContent>
    {/*-- The reorder gesture is disabled by default, enable it to drag and drop items --*/}
    <IonReorderGroup disabled={false}>
      {/*-- Default reorder icon, end aligned items --*/}
      <IonItem>
        <IonLabel>Item 1</IonLabel>
        <IonReorder slot="end" />
      </IonItem>

      <IonItem>
        <IonLabel>Item 2</IonLabel>
        <IonReorder slot="end" />
      </IonItem>

      {/*-- Default reorder icon, start aligned items --*/}
      <IonItem>
        <IonReorder slot="start" />
        <IonLabel>Item 3</IonLabel>
      </IonItem>

      <IonItem>
        <IonReorder slot="start" />
        <IonLabel>Item 4</IonLabel>
      </IonItem>

      {/*-- Custom reorder icon end items --*/}
      <IonItem>
        <IonLabel>Item 5</IonLabel>
        <IonReorder slot="end">
          <IonIcon icon={pizza} />
        </IonReorder>
      </IonItem>

      <IonItem>
        <IonLabel>Item 6</IonLabel>
        <IonReorder slot="end">
          <IonIcon icon={pizza} />
        </IonReorder>
      </IonItem>

      {/*-- Items wrapped in a reorder, entire item can be dragged --*/}
      <IonReorder>
        <IonItem>
          <IonLabel>Item 7</IonLabel>
        </IonItem>
      </IonReorder>

      <IonReorder>
        <IonItem>
          <IonLabel>Item 8</IonLabel>
        </IonItem>
      </IonReorder>
    </IonReorderGroup>
  </IonContent>
);
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'reorder-example',
  styleUrl: 'reorder-example.css',
})
export class ReorderExample {
  render() {
    return [
      // The reorder gesture is disabled by default, enable it to drag and drop items
      <ion-reorder-group disabled={false}>
        {/* Default reorder icon, end aligned items */}
        <ion-item>
          <ion-label>Item 1</ion-label>
          <ion-reorder slot="end"></ion-reorder>
        </ion-item>

        <ion-item>
          <ion-label>Item 2</ion-label>
          <ion-reorder slot="end"></ion-reorder>
        </ion-item>

        {/* Default reorder icon, start aligned items */}
        <ion-item>
          <ion-reorder slot="start"></ion-reorder>
          <ion-label>Item 3</ion-label>
        </ion-item>

        <ion-item>
          <ion-reorder slot="start"></ion-reorder>
          <ion-label>Item 4</ion-label>
        </ion-item>

        {/* Custom reorder icon end items */}
        <ion-item>
          <ion-label>Item 5</ion-label>
          <ion-reorder slot="end">
            <ion-icon name="pizza"></ion-icon>
          </ion-reorder>
        </ion-item>

        <ion-item>
          <ion-label>Item 6</ion-label>
          <ion-reorder slot="end">
            <ion-icon name="pizza"></ion-icon>
          </ion-reorder>
        </ion-item>

        {/* Items wrapped in a reorder, entire item can be dragged */}
        <ion-reorder>
          <ion-item>
            <ion-label>Item 7</ion-label>
          </ion-item>
        </ion-reorder>

        <ion-reorder>
          <ion-item>
            <ion-label>Item 8</ion-label>
          </ion-item>
        </ion-reorder>
      </ion-reorder-group>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <!-- The reorder gesture is disabled by default, enable it to drag and drop items -->
  <ion-reorder-group :disabled="false">
    <!-- Default reorder icon, end aligned items -->
    <ion-item>
      <ion-label> Item 1 </ion-label>
      <ion-reorder slot="end"></ion-reorder>
    </ion-item>

    <ion-item>
      <ion-label> Item 2 </ion-label>
      <ion-reorder slot="end"></ion-reorder>
    </ion-item>

    <!-- Default reorder icon, start aligned items -->
    <ion-item>
      <ion-reorder slot="start"></ion-reorder>
      <ion-label> Item 3 </ion-label>
    </ion-item>

    <ion-item>
      <ion-reorder slot="start"></ion-reorder>
      <ion-label> Item 4 </ion-label>
    </ion-item>

    <!-- Custom reorder icon end items -->
    <ion-item>
      <ion-label> Item 5 </ion-label>
      <ion-reorder slot="end">
        <ion-icon name="pizza"></ion-icon>
      </ion-reorder>
    </ion-item>

    <ion-item>
      <ion-label> Item 6 </ion-label>
      <ion-reorder slot="end">
        <ion-icon name="pizza"></ion-icon>
      </ion-reorder>
    </ion-item>

    <!-- Items wrapped in a reorder, entire item can be dragged -->
    <ion-reorder>
      <ion-item>
        <ion-label> Item 7 </ion-label>
      </ion-item>
    </ion-reorder>

    <ion-reorder>
      <ion-item>
        <ion-label> Item 8 </ion-label>
      </ion-item>
    </ion-reorder>
  </ion-reorder-group>
</template>

<script>
  import { IonIcon, IonItem, IonLabel, IonReorder, IonReorderGroup } from '@ionic/vue';
  import { pizza } from 'ionicons/icons';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      IonIcon,
      IonItem,
      IonLabel,
      IonReorder,
      IonReorderGroup,
    },
    setup() {
      return { pizza };
    },
  });
</script>
```

</TabItem>

</Tabs>

## CSS Shadow Parts

| Name   | Description                                     |
| ------ | ----------------------------------------------- |
| `icon` | The icon of the reorder handle (uses ion-icon). |
