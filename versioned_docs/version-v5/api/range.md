---
title: 'Range Slider | ion-range: Slider Knob Controls with Labels'
description: 'ion-range lets you select from a range of values by moving the slider. It accepts dual knobs but one controls the value and labels can be placed on either side.'
sidebar_label: 'ion-range'
demoUrl: '/docs/demos/api/range/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/range/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ion-range

The Range slider lets users select from a range of values by moving
the slider knob. It can accept dual knobs, but by default one knob
controls the value of the range.

## Range Labels

Labels can be placed on either side of the range by adding the
`slot="start"` or `slot="end"` to the element. The element doesn't have to
be an `ion-label`, it can be added to any element to place it to the
left or right of the range.

## Usage

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-list>
  <ion-item>
    <ion-range color="danger" pin="true"></ion-range>
  </ion-item>

  <ion-item>
    <ion-range min="-200" max="200" color="secondary">
      <ion-label slot="start">-200</ion-label>
      <ion-label slot="end">200</ion-label>
    </ion-range>
  </ion-item>

  <ion-item>
    <ion-range min="20" max="80" step="2">
      <ion-icon size="small" slot="start" name="sunny"></ion-icon>
      <ion-icon slot="end" name="sunny"></ion-icon>
    </ion-range>
  </ion-item>

  <ion-item>
    <ion-range min="1000" max="2000" step="100" snaps="true" color="secondary"></ion-range>
  </ion-item>

  <ion-item>
    <ion-range min="1000" max="2000" step="100" snaps="true" ticks="false" color="secondary"></ion-range>
  </ion-item>

  <ion-item>
    <ion-range dualKnobs="true" min="21" max="72" step="3" snaps="true"></ion-range>
  </ion-item>
</ion-list>
```

</TabItem>

<TabItem value="javascript">

```html
<ion-list>
  <ion-item>
    <ion-range color="danger" pin="true"></ion-range>
  </ion-item>

  <ion-item>
    <ion-range min="-200" max="200" color="secondary">
      <ion-label slot="start">-200</ion-label>
      <ion-label slot="end">200</ion-label>
    </ion-range>
  </ion-item>

  <ion-item>
    <ion-range min="20" max="80" step="2">
      <ion-icon size="small" slot="start" name="sunny"></ion-icon>
      <ion-icon slot="end" name="sunny"></ion-icon>
    </ion-range>
  </ion-item>

  <ion-item>
    <ion-range min="1000" max="2000" step="100" snaps="true" color="secondary"></ion-range>
  </ion-item>

  <ion-item>
    <ion-range min="1000" max="2000" step="100" snaps="true" ticks="false" color="secondary"></ion-range>
  </ion-item>

  <ion-item>
    <ion-range dual-knobs="true" min="21" max="72" step="3" snaps="true"></ion-range>
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
  IonList,
  IonItem,
  IonRange,
  IonLabel,
  IonIcon,
  IonItemDivider,
} from '@ionic/react';
import { sunny } from 'ionicons/icons';
import { RangeValue } from '@ionic/core';

export const RangeExamples: React.FC = () => {
  const [value, setValue] = useState(0);
  const [rangeValue, setRangeValue] = useState<{
    lower: number;
    upper: number;
  }>({ lower: 0, upper: 0 });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>IonRange Examples</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItemDivider>Default</IonItemDivider>
          <IonItem>
            <IonRange pin={true} value={value} onIonChange={(e) => setValue(e.detail.value as number)} />
          </IonItem>
          <IonItem>
            <IonLabel>Value: {value}</IonLabel>
          </IonItem>

          <IonItemDivider>Min & Max</IonItemDivider>
          <IonItem>
            <IonRange min={-200} max={200} color="secondary">
              <IonLabel slot="start">-200</IonLabel>
              <IonLabel slot="end">200</IonLabel>
            </IonRange>
          </IonItem>

          <IonItemDivider>Icons</IonItemDivider>
          <IonItem>
            <IonRange min={20} max={80} step={2}>
              <IonIcon size="small" slot="start" icon={sunny} />
              <IonIcon slot="end" icon={sunny} />
            </IonRange>
          </IonItem>

          <IonItemDivider>With Snaps & Ticks</IonItemDivider>
          <IonItem>
            <IonRange min={1000} max={2000} step={100} snaps={true} color="secondary" />
          </IonItem>

          <IonItemDivider>With Snaps & No Ticks</IonItemDivider>
          <IonItem>
            <IonRange min={1000} max={2000} step={100} snaps={true} ticks={false} color="secondary" />
          </IonItem>

          <IonItemDivider>Dual Knobs</IonItemDivider>
          <IonItem>
            <IonRange
              dualKnobs={true}
              min={0}
              max={60}
              step={3}
              snaps={true}
              onIonChange={(e) => setRangeValue(e.detail.value as any)}
            />
          </IonItem>
          <IonItem>
            <IonLabel>
              Value: lower: {rangeValue.lower} upper: {rangeValue.upper}
            </IonLabel>
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
  tag: 'range-example',
  styleUrl: 'range-example.css',
})
export class RangeExample {
  render() {
    return [
      <ion-list>
        <ion-item>
          <ion-range color="danger" pin={true}></ion-range>
        </ion-item>

        <ion-item>
          <ion-range min={-200} max={200} color="secondary">
            <ion-label slot="start">-200</ion-label>
            <ion-label slot="end">200</ion-label>
          </ion-range>
        </ion-item>

        <ion-item>
          <ion-range min={20} max={80} step={2}>
            <ion-icon size="small" slot="start" name="sunny"></ion-icon>
            <ion-icon slot="end" name="sunny"></ion-icon>
          </ion-range>
        </ion-item>

        <ion-item>
          <ion-range min={1000} max={2000} step={100} snaps={true} color="secondary"></ion-range>
        </ion-item>

        <ion-item>
          <ion-range min={1000} max={2000} step={100} snaps={true} ticks={false} color="secondary"></ion-range>
        </ion-item>

        <ion-item>
          <ion-range dualKnobs={true} min={21} max={72} step={3} snaps={true}></ion-range>
        </ion-item>
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
    <ion-item>
      <ion-range color="danger" pin="true"></ion-range>
    </ion-item>

    <ion-item>
      <ion-range min="-200" max="200" color="secondary">
        <ion-label slot="start">-200</ion-label>
        <ion-label slot="end">200</ion-label>
      </ion-range>
    </ion-item>

    <ion-item>
      <ion-range min="20" max="80" step="2">
        <ion-icon size="small" slot="start" name="sunny"></ion-icon>
        <ion-icon slot="end" name="sunny"></ion-icon>
      </ion-range>
    </ion-item>

    <ion-item>
      <ion-range min="1000" max="2000" step="100" snaps="true" color="secondary"></ion-range>
    </ion-item>

    <ion-item>
      <ion-range min="1000" max="2000" step="100" snaps="true" ticks="false" color="secondary"></ion-range>
    </ion-item>

    <ion-item>
      <ion-range ref="rangeDualKnobs" dual-knobs="true" min="21" max="72" step="3" snaps="true"></ion-range>
    </ion-item>
  </ion-list>
</template>

<script>
  import { IonItem, IonLabel, IonList, IonRange } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonLabel, IonList, IonRange },
    mounted() {
      // Sets initial value for dual-knob ion-range
      this.$refs.rangeDualKnobs.value = { lower: 24, upper: 42 };
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

### debounce

|                 |                                                                                                                                                                                     |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | How long, in milliseconds, to wait to trigger the<br />`ionChange` event after each change in the range value.<br />This also impacts form bindings such as `ngModel` or `v-model`. |
| **Attribute**   | `debounce`                                                                                                                                                                          |
| **Type**        | `number`                                                                                                                                                                            |
| **Default**     | `0`                                                                                                                                                                                 |

### disabled

|                 |                                                     |
| --------------- | --------------------------------------------------- |
| **Description** | If `true`, the user cannot interact with the range. |
| **Attribute**   | `disabled`                                          |
| **Type**        | `boolean`                                           |
| **Default**     | `false`                                             |

### dualKnobs

|                 |                 |
| --------------- | --------------- |
| **Description** | Show two knobs. |
| **Attribute**   | `dual-knobs`    |
| **Type**        | `boolean`       |
| **Default**     | `false`         |

### max

|                 |                                     |
| --------------- | ----------------------------------- |
| **Description** | Maximum integer value of the range. |
| **Attribute**   | `max`                               |
| **Type**        | `number`                            |
| **Default**     | `100`                               |

### min

|                 |                                     |
| --------------- | ----------------------------------- |
| **Description** | Minimum integer value of the range. |
| **Attribute**   | `min`                               |
| **Type**        | `number`                            |
| **Default**     | `0`                                 |

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
| **Default**     | `''`                                                            |

### pin

|                 |                                                                             |
| --------------- | --------------------------------------------------------------------------- |
| **Description** | If `true`, a pin with integer value is shown when the knob<br />is pressed. |
| **Attribute**   | `pin`                                                                       |
| **Type**        | `boolean`                                                                   |
| **Default**     | `false`                                                                     |

### snaps

|                 |                                                                                              |
| --------------- | -------------------------------------------------------------------------------------------- |
| **Description** | If `true`, the knob snaps to tick marks evenly spaced based<br />on the step property value. |
| **Attribute**   | `snaps`                                                                                      |
| **Type**        | `boolean`                                                                                    |
| **Default**     | `false`                                                                                      |

### step

|                 |                                  |
| --------------- | -------------------------------- |
| **Description** | Specifies the value granularity. |
| **Attribute**   | `step`                           |
| **Type**        | `number`                         |
| **Default**     | `1`                              |

### ticks

|                 |                                                                                                        |
| --------------- | ------------------------------------------------------------------------------------------------------ |
| **Description** | If `true`, tick marks are displayed based on the step value.<br />Only applies when `snaps` is `true`. |
| **Attribute**   | `ticks`                                                                                                |
| **Type**        | `boolean`                                                                                              |
| **Default**     | `true`                                                                                                 |

### value

|                 |                                               |
| --------------- | --------------------------------------------- |
| **Description** | the value of the range.                       |
| **Attribute**   | `value`                                       |
| **Type**        | `number \| { lower: number; upper: number; }` |
| **Default**     | `0`                                           |

## Events

| Name        | Description                                  |
| ----------- | -------------------------------------------- |
| `ionBlur`   | Emitted when the range loses focus.          |
| `ionChange` | Emitted when the value property has changed. |
| `ionFocus`  | Emitted when the range has focus.            |

## CSS Shadow Parts

| Name          | Description                                |
| ------------- | ------------------------------------------ |
| `bar`         | The inactive part of the bar.              |
| `bar-active`  | The active part of the bar.                |
| `knob`        | The handle that is used to drag the range. |
| `pin`         | The counter that appears above a knob.     |
| `tick`        | An inactive tick mark.                     |
| `tick-active` | An active tick mark.                       |

## CSS Custom Properties

| Name                      | Description                        |
| ------------------------- | ---------------------------------- |
| `--bar-background`        | Background of the range bar        |
| `--bar-background-active` | Background of the active range bar |
| `--bar-border-radius`     | Border radius of the range bar     |
| `--bar-height`            | Height of the range bar            |
| `--height`                | Height of the range                |
| `--knob-background`       | Background of the range knob       |
| `--knob-border-radius`    | Border radius of the range knob    |
| `--knob-box-shadow`       | Box shadow of the range knob       |
| `--knob-size`             | Size of the range knob             |
| `--pin-background`        | Background of the range pin        |
| `--pin-color`             | Color of the range pin             |

## Slots

| Name    | Description                                                                        |
| ------- | ---------------------------------------------------------------------------------- |
| `end`   | Content is placed to the right of the range slider in LTR, and to the left in RTL. |
| `start` | Content is placed to the left of the range slider in LTR, and to the right in RTL. |
