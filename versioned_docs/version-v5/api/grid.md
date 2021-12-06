---
title: 'Ion-Grid: Display Grids to Build Mobile-First Custom App Layout'
description: 'Ion-Grid is a mobile-first flexbox system to build custom application display layouts with a 12 column layout and different breakpoints based on screen size.'
sidebar_label: 'ion-grid'
demoUrl: '/docs/demos/api/grid/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/grid/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ion-grid

The grid is a powerful mobile-first flexbox system for building custom layouts.

It is composed of three units — a grid, [row(s)](row.md) and [column(s)](col.md). Columns will expand to fill the row, and will resize to fit additional columns. It is based on a 12 column layout with different breakpoints based on the screen size. The number of columns can be customized using CSS.

See the [Responsive Grid documentation](../layout/grid.md) for more information.

## Usage

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-grid>
  <ion-row>
    <ion-col> ion-col </ion-col>
    <ion-col> ion-col </ion-col>
    <ion-col> ion-col </ion-col>
    <ion-col> ion-col </ion-col>
  </ion-row>

  <ion-row>
    <ion-col size="6"> ion-col [size="6"] </ion-col>
    <ion-col> ion-col </ion-col>
    <ion-col> ion-col </ion-col>
  </ion-row>

  <ion-row>
    <ion-col size="3"> ion-col [size="3"] </ion-col>
    <ion-col> ion-col </ion-col>
    <ion-col size="3"> ion-col [size="3"] </ion-col>
  </ion-row>

  <ion-row>
    <ion-col size="3"> ion-col [size="3"] </ion-col>
    <ion-col size="3" offset="3"> ion-col [size="3"] [offset="3"] </ion-col>
  </ion-row>

  <ion-row>
    <ion-col> ion-col </ion-col>
    <ion-col>
      ion-col
      <br />#
    </ion-col>
    <ion-col>
      ion-col
      <br /># <br />#
    </ion-col>
    <ion-col>
      ion-col
      <br /># <br /># <br />#
    </ion-col>
  </ion-row>

  <ion-row>
    <ion-col class="ion-align-self-start"> ion-col [start] </ion-col>
    <ion-col class="ion-align-self-center"> ion-col [center] </ion-col>
    <ion-col class="ion-align-self-end"> ion-col [end] </ion-col>
    <ion-col>
      ion-col
      <br /># <br />#
    </ion-col>
  </ion-row>

  <ion-row class="ion-align-items-start">
    <ion-col> [start] ion-col </ion-col>
    <ion-col> [start] ion-col </ion-col>
    <ion-col class="ion-align-self-end"> [start] ion-col [end] </ion-col>
    <ion-col>
      ion-col
      <br /># <br />#
    </ion-col>
  </ion-row>

  <ion-row class="ion-align-items-center">
    <ion-col> [center] ion-col </ion-col>
    <ion-col> [center] ion-col </ion-col>
    <ion-col> [center] ion-col </ion-col>
    <ion-col>
      ion-col
      <br /># <br />#
    </ion-col>
  </ion-row>

  <ion-row class="ion-align-items-end">
    <ion-col> [end] ion-col </ion-col>
    <ion-col class="ion-align-self-start"> [end] ion-col [start] </ion-col>
    <ion-col> [end] ion-col </ion-col>
    <ion-col>
      ion-col
      <br /># <br />#
    </ion-col>
  </ion-row>

  <ion-row>
    <ion-col size="12" size-sm> ion-col [size="12"] [size-sm] </ion-col>
    <ion-col size="12" size-sm> ion-col [size="12"] [size-sm] </ion-col>
    <ion-col size="12" size-sm> ion-col [size="12"] [size-sm] </ion-col>
    <ion-col size="12" size-sm> ion-col [size="12"] [size-sm] </ion-col>
  </ion-row>

  <ion-row>
    <ion-col size="12" size-md> ion-col [size="12"] [size-md] </ion-col>
    <ion-col size="12" size-md> ion-col [size="12"] [size-md] </ion-col>
    <ion-col size="12" size-md> ion-col [size="12"] [size-md] </ion-col>
    <ion-col size="12" size-md> ion-col [size="12"] [size-md] </ion-col>
  </ion-row>

  <ion-row>
    <ion-col size="6" size-lg offset="3"> ion-col [size="6"] [size-lg] [offset="3"] </ion-col>
    <ion-col size="3" size-lg> ion-col [size="3"] [size-lg] </ion-col>
  </ion-row>
</ion-grid>
```

</TabItem>

<TabItem value="javascript">

```html
<ion-grid>
  <ion-row>
    <ion-col> ion-col </ion-col>
    <ion-col> ion-col </ion-col>
    <ion-col> ion-col </ion-col>
    <ion-col> ion-col </ion-col>
  </ion-row>

  <ion-row>
    <ion-col size="6"> ion-col [size="6"] </ion-col>
    <ion-col> ion-col </ion-col>
    <ion-col> ion-col </ion-col>
  </ion-row>

  <ion-row>
    <ion-col size="3"> ion-col [size="3"] </ion-col>
    <ion-col> ion-col </ion-col>
    <ion-col size="3"> ion-col [size="3"] </ion-col>
  </ion-row>

  <ion-row>
    <ion-col size="3"> ion-col [size="3"] </ion-col>
    <ion-col size="3" offset="3"> ion-col [size="3"] [offset="3"] </ion-col>
  </ion-row>

  <ion-row>
    <ion-col> ion-col </ion-col>
    <ion-col>
      ion-col
      <br />#
    </ion-col>
    <ion-col>
      ion-col
      <br /># <br />#
    </ion-col>
    <ion-col>
      ion-col
      <br /># <br /># <br />#
    </ion-col>
  </ion-row>

  <ion-row>
    <ion-col class="ion-align-self-start"> ion-col [start] </ion-col>
    <ion-col class="ion-align-self-center"> ion-col [center] </ion-col>
    <ion-col class="ion-align-self-end"> ion-col [end] </ion-col>
    <ion-col>
      ion-col
      <br /># <br />#
    </ion-col>
  </ion-row>

  <ion-row class="ion-align-items-start">
    <ion-col> [start] ion-col </ion-col>
    <ion-col> [start] ion-col </ion-col>
    <ion-col class="ion-align-self-end"> [start] ion-col [end] </ion-col>
    <ion-col>
      ion-col
      <br /># <br />#
    </ion-col>
  </ion-row>

  <ion-row class="ion-align-items-center">
    <ion-col> [center] ion-col </ion-col>
    <ion-col> [center] ion-col </ion-col>
    <ion-col> [center] ion-col </ion-col>
    <ion-col>
      ion-col
      <br /># <br />#
    </ion-col>
  </ion-row>

  <ion-row class="ion-align-items-end">
    <ion-col> [end] ion-col </ion-col>
    <ion-col class="ion-align-self-start"> [end] ion-col [start] </ion-col>
    <ion-col> [end] ion-col </ion-col>
    <ion-col>
      ion-col
      <br /># <br />#
    </ion-col>
  </ion-row>

  <ion-row>
    <ion-col size="12" size-sm> ion-col [size="12"] [size-sm] </ion-col>
    <ion-col size="12" size-sm> ion-col [size="12"] [size-sm] </ion-col>
    <ion-col size="12" size-sm> ion-col [size="12"] [size-sm] </ion-col>
    <ion-col size="12" size-sm> ion-col [size="12"] [size-sm] </ion-col>
  </ion-row>

  <ion-row>
    <ion-col size="12" size-md> ion-col [size="12"] [size-md] </ion-col>
    <ion-col size="12" size-md> ion-col [size="12"] [size-md] </ion-col>
    <ion-col size="12" size-md> ion-col [size="12"] [size-md] </ion-col>
    <ion-col size="12" size-md> ion-col [size="12"] [size-md] </ion-col>
  </ion-row>

  <ion-row>
    <ion-col size="6" size-lg offset="3"> ion-col [size="6"] [size-lg] [offset="3"] </ion-col>
    <ion-col size="3" size-lg> ion-col [size="3"] [size-lg] </ion-col>
  </ion-row>
</ion-grid>
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import { IonGrid, IonRow, IonCol, IonContent } from '@ionic/react';

export const GridExample: React.FC = () => (
  <IonContent>
    <IonGrid>
      <IonRow>
        <IonCol>ion-col</IonCol>
        <IonCol>ion-col</IonCol>
        <IonCol>ion-col</IonCol>
        <IonCol>ion-col</IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="6">ion-col size="6"</IonCol>
        <IonCol>ion-col</IonCol>
        <IonCol>ion-col</IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="3">ion-col size="3"</IonCol>
        <IonCol>ion-col</IonCol>
        <IonCol size="3">ion-col size="3"</IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="3">ion-col size="3"</IonCol>
        <IonCol size="3" offset="3">
          ion-col size="3" offset="3"
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol>ion-col</IonCol>
        <IonCol>
          ion-col
          <br />#
        </IonCol>
        <IonCol>
          ion-col
          <br />#
          <br />#
        </IonCol>
        <IonCol>
          ion-col
          <br />#
          <br />#
          <br />#
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol className="ion-align-self-start">ion-col start</IonCol>
        <IonCol className="ion-align-self-center">ion-col center</IonCol>
        <IonCol className="ion-align-self-end">ion-col end</IonCol>
        <IonCol>
          ion-col
          <br />#
          <br />#
        </IonCol>
      </IonRow>

      <IonRow className="ion-align-items-start">
        <IonCol>start ion-col</IonCol>
        <IonCol>start ion-col</IonCol>
        <IonCol className="ion-align-self-end">start ion-col end</IonCol>
        <IonCol>
          ion-col
          <br />#
          <br />#
        </IonCol>
      </IonRow>

      <IonRow className="ion-align-items-center">
        <IonCol>center ion-col</IonCol>
        <IonCol>center ion-col</IonCol>
        <IonCol>center ion-col</IonCol>
        <IonCol>
          ion-col
          <br />#
          <br />#
        </IonCol>
      </IonRow>

      <IonRow className="ion-align-items-end">
        <IonCol>end ion-col</IonCol>
        <IonCol className="ion-align-self-start">end ion-col start</IonCol>
        <IonCol>end ion-col</IonCol>
        <IonCol>
          ion-col
          <br />#
          <br />#
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="12" size-sm>
          ion-col size="12" size-sm
        </IonCol>
        <IonCol size="12" size-sm>
          ion-col size="12" size-sm
        </IonCol>
        <IonCol size="12" size-sm>
          ion-col size="12" size-sm
        </IonCol>
        <IonCol size="12" size-sm>
          ion-col size="12" size-sm
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="12" size-md>
          ion-col size="12" size-md
        </IonCol>
        <IonCol size="12" size-md>
          ion-col size="12" size-md
        </IonCol>
        <IonCol size="12" size-md>
          ion-col size="12" size-md
        </IonCol>
        <IonCol size="12" size-md>
          ion-col size="12" size-md
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="6" size-lg offset="3">
          ion-col size="6" size-lg offset="3"
        </IonCol>
        <IonCol size="3" size-lg>
          ion-col size="3" size-lg
        </IonCol>
      </IonRow>
    </IonGrid>
  </IonContent>
);
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'grid-example',
  styleUrl: 'grid-example.css',
})
export class GridExample {
  render() {
    return [
      <ion-grid>
        <ion-row>
          <ion-col>ion-col</ion-col>
          <ion-col>ion-col</ion-col>
          <ion-col>ion-col</ion-col>
          <ion-col>ion-col</ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="6">ion-col [size="6"]</ion-col>
          <ion-col>ion-col</ion-col>
          <ion-col>ion-col</ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="3">ion-col [size="3"]</ion-col>
          <ion-col>ion-col</ion-col>
          <ion-col size="3">ion-col [size="3"]</ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="3">ion-col [size="3"]</ion-col>
          <ion-col size="3" offset="3">
            ion-col [size="3"] [offset="3"]
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col>ion-col</ion-col>
          <ion-col>
            ion-col
            <br />#
          </ion-col>
          <ion-col>
            ion-col
            <br />#
            <br />#
          </ion-col>
          <ion-col>
            ion-col
            <br />#
            <br />#
            <br />#
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col class="ion-align-self-start">ion-col [start]</ion-col>
          <ion-col class="ion-align-self-center">ion-col [center]</ion-col>
          <ion-col class="ion-align-self-end">ion-col [end]</ion-col>
          <ion-col>
            ion-col
            <br />#
            <br />#
          </ion-col>
        </ion-row>

        <ion-row class="ion-align-items-start">
          <ion-col>[start] ion-col</ion-col>
          <ion-col>[start] ion-col</ion-col>
          <ion-col class="ion-align-self-end">[start] ion-col [end]</ion-col>
          <ion-col>
            ion-col
            <br />#
            <br />#
          </ion-col>
        </ion-row>

        <ion-row class="ion-align-items-center">
          <ion-col>[center] ion-col</ion-col>
          <ion-col>[center] ion-col</ion-col>
          <ion-col>[center] ion-col</ion-col>
          <ion-col>
            ion-col
            <br />#
            <br />#
          </ion-col>
        </ion-row>

        <ion-row class="ion-align-items-end">
          <ion-col>[end] ion-col</ion-col>
          <ion-col class="ion-align-self-start">[end] ion-col [start]</ion-col>
          <ion-col>[end] ion-col</ion-col>
          <ion-col>
            ion-col
            <br />#
            <br />#
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="12" sizeSm="">
            ion-col [size="12"] [sizeSm]
          </ion-col>
          <ion-col size="12" sizeSm="">
            ion-col [size="12"] [sizeSm]
          </ion-col>
          <ion-col size="12" sizeSm="">
            ion-col [size="12"] [sizeSm]
          </ion-col>
          <ion-col size="12" sizeSm="">
            ion-col [size="12"] [sizeSm]
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="12" sizeMd="">
            ion-col [size="12"] [sizeMd]
          </ion-col>
          <ion-col size="12" sizeMd="">
            ion-col [size="12"] [sizeMd]
          </ion-col>
          <ion-col size="12" sizeMd="">
            ion-col [size="12"] [sizeMd]
          </ion-col>
          <ion-col size="12" sizeMd="">
            ion-col [size="12"] [sizeMd]
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="6" sizeLg="" offset="3">
            ion-col [size="6"] [sizeLg] [offset="3"]
          </ion-col>
          <ion-col size="3" sizeLg="">
            ion-col [size="3"] [sizeLg]
          </ion-col>
        </ion-row>
      </ion-grid>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <ion-grid>
    <ion-row>
      <ion-col> ion-col </ion-col>
      <ion-col> ion-col </ion-col>
      <ion-col> ion-col </ion-col>
      <ion-col> ion-col </ion-col>
    </ion-row>

    <ion-row>
      <ion-col size="6"> ion-col [size="6"] </ion-col>
      <ion-col> ion-col </ion-col>
      <ion-col> ion-col </ion-col>
    </ion-row>

    <ion-row>
      <ion-col size="3"> ion-col [size="3"] </ion-col>
      <ion-col> ion-col </ion-col>
      <ion-col size="3"> ion-col [size="3"] </ion-col>
    </ion-row>

    <ion-row>
      <ion-col size="3"> ion-col [size="3"] </ion-col>
      <ion-col size="3" offset="3"> ion-col [size="3"] [offset="3"] </ion-col>
    </ion-row>

    <ion-row>
      <ion-col> ion-col </ion-col>
      <ion-col>
        ion-col
        <br />#
      </ion-col>
      <ion-col>
        ion-col
        <br /># <br />#
      </ion-col>
      <ion-col>
        ion-col
        <br /># <br /># <br />#
      </ion-col>
    </ion-row>

    <ion-row>
      <ion-col class="ion-align-self-start"> ion-col [start] </ion-col>
      <ion-col class="ion-align-self-center"> ion-col [center] </ion-col>
      <ion-col class="ion-align-self-end"> ion-col [end] </ion-col>
      <ion-col>
        ion-col
        <br /># <br />#
      </ion-col>
    </ion-row>

    <ion-row class="ion-align-items-start">
      <ion-col> [start] ion-col </ion-col>
      <ion-col> [start] ion-col </ion-col>
      <ion-col class="ion-align-self-end"> [start] ion-col [end] </ion-col>
      <ion-col>
        ion-col
        <br /># <br />#
      </ion-col>
    </ion-row>

    <ion-row class="ion-align-items-center">
      <ion-col> [center] ion-col </ion-col>
      <ion-col> [center] ion-col </ion-col>
      <ion-col> [center] ion-col </ion-col>
      <ion-col>
        ion-col
        <br /># <br />#
      </ion-col>
    </ion-row>

    <ion-row class="ion-align-items-end">
      <ion-col> [end] ion-col </ion-col>
      <ion-col class="ion-align-self-start"> [end] ion-col [start] </ion-col>
      <ion-col> [end] ion-col </ion-col>
      <ion-col>
        ion-col
        <br /># <br />#
      </ion-col>
    </ion-row>

    <ion-row>
      <ion-col size="12" size-sm> ion-col [size="12"] [size-sm] </ion-col>
      <ion-col size="12" size-sm> ion-col [size="12"] [size-sm] </ion-col>
      <ion-col size="12" size-sm> ion-col [size="12"] [size-sm] </ion-col>
      <ion-col size="12" size-sm> ion-col [size="12"] [size-sm] </ion-col>
    </ion-row>

    <ion-row>
      <ion-col size="12" size-md> ion-col [size="12"] [size-md] </ion-col>
      <ion-col size="12" size-md> ion-col [size="12"] [size-md] </ion-col>
      <ion-col size="12" size-md> ion-col [size="12"] [size-md] </ion-col>
      <ion-col size="12" size-md> ion-col [size="12"] [size-md] </ion-col>
    </ion-row>

    <ion-row>
      <ion-col size="6" size-lg offset="3"> ion-col [size="6"] [size-lg] [offset="3"] </ion-col>
      <ion-col size="3" size-lg> ion-col [size="3"] [size-lg] </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script>
  import { IonCol, IonGrid, IonRow } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonCol, IonGrid, IonRow },
  });
</script>
```

</TabItem>

</Tabs>

## Properties

### fixed

|                 |                                                                       |
| --------------- | --------------------------------------------------------------------- |
| **Description** | If `true`, the grid will have a fixed width based on the screen size. |
| **Attribute**   | `fixed`                                                               |
| **Type**        | `boolean`                                                             |
| **Default**     | `false`                                                               |

## CSS Custom Properties

| Name                    | Description                           |
| ----------------------- | ------------------------------------- |
| `--ion-grid-padding`    | Padding for the Grid                  |
| `--ion-grid-padding-lg` | Padding for the Grid on lg screens    |
| `--ion-grid-padding-md` | Padding for the Grid on md screens    |
| `--ion-grid-padding-sm` | Padding for the Grid on sm screens    |
| `--ion-grid-padding-xl` | Padding for the Grid on xl screens    |
| `--ion-grid-padding-xs` | Padding for the Grid on xs screens    |
| `--ion-grid-width`      | Width of the fixed Grid               |
| `--ion-grid-width-lg`   | Width of the fixed Grid on lg screens |
| `--ion-grid-width-md`   | Width of the fixed Grid on md screens |
| `--ion-grid-width-sm`   | Width of the fixed Grid on sm screens |
| `--ion-grid-width-xl`   | Width of the fixed Grid on xl screens |
| `--ion-grid-width-xs`   | Width of the fixed Grid on xs screens |
