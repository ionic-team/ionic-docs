---
sidebar_label: 'ion-refresher'
demoUrl: '/docs/demos/api/refresher/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/refresher/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ion-refresher

The refresher provides pull-to-refresh functionality on a content component.
The pull-to-refresh pattern lets a user pull down on a list of data using touch
in order to retrieve more data.

Data should be modified during the refresher's output events. Once the async
operation has completed and the refreshing should end, call `complete()` on the
refresher.

## Native Refreshers

Both iOS and Android platforms provide refreshers that take advantage of properties exposed by their respective devices that give pull to refresh a fluid, native-like feel.

Certain properties such as `pullMin` and `snapbackDuration` are not compatible because much of the native refreshers are scroll-based. See [Refresher Properties](#properties) for more information.

### iOS Usage

Using the iOS native `ion-refresher` requires setting the `pullingIcon` property on `ion-refresher-content` to the value of one of the available spinners. See the [Spinner Documentation](spinner.md#properties) for accepted values. The `pullingIcon` defaults to the `lines` spinner on iOS. The spinner tick marks will be progressively shown as the user pulls down on the page.

The iOS native `ion-refresher` relies on rubber band scrolling in order to work properly and is only compatible with iOS devices as a result. We provide a fallback refresher for apps running in iOS mode on devices that do not support rubber band scrolling.

### Android Usage

Using the MD native `ion-refresher` requires setting the `pullingIcon` property on `ion-refresher-content` to the value of one of the available spinners. See the [ion-spinner Documentation](spinner.md#properties) for accepted values. `pullingIcon` defaults to the `circular` spinner on MD.

## Usage

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<!-- Default Refresher -->
<ion-content>
  <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">
    <ion-refresher-content></ion-refresher-content>
  </ion-refresher>
</ion-content>

<!-- Custom Refresher Properties -->
<ion-content>
  <ion-refresher slot="fixed" pullFactor="0.5" pullMin="100" pullMax="200">
    <ion-refresher-content></ion-refresher-content>
  </ion-refresher>
</ion-content>

<!-- Custom Refresher Content -->
<ion-content>
  <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">
    <ion-refresher-content
      pullingIcon="chevron-down-circle-outline"
      pullingText="Pull to refresh"
      refreshingSpinner="circles"
      refreshingText="Refreshing..."
    >
    </ion-refresher-content>
  </ion-refresher>
</ion-content>
```

```tsx
import { Component } from '@angular/core';

@Component({
  selector: 'refresher-example',
  templateUrl: 'refresher-example.html',
  styleUrls: ['./refresher-example.css'],
})
export class RefresherExample {
  constructor() {}

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
```

</TabItem>

<TabItem value="javascript">

```html
<!-- Default Refresher -->
<ion-content>
  <ion-refresher slot="fixed">
    <ion-refresher-content></ion-refresher-content>
  </ion-refresher>
</ion-content>

<!-- Custom Refresher Properties -->
<ion-content>
  <ion-refresher slot="fixed" pull-factor="0.5" pull-min="100" pull-max="200">
    <ion-refresher-content></ion-refresher-content>
  </ion-refresher>
</ion-content>

<!-- Custom Refresher Content -->
<ion-content>
  <ion-refresher slot="fixed">
    <ion-refresher-content
      pulling-icon="chevron-down-circle-outline"
      pulling-text="Pull to refresh"
      refreshing-spinner="circles"
      refreshing-text="Refreshing..."
    >
    </ion-refresher-content>
  </ion-refresher>
</ion-content>
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import { IonContent, IonRefresher, IonRefresherContent } from '@ionic/react';
import { RefresherEventDetail } from '@ionic/core';
import { chevronDownCircleOutline } from 'ionicons/icons';

function doRefresh(event: CustomEvent<RefresherEventDetail>) {
  console.log('Begin async operation');

  setTimeout(() => {
    console.log('Async operation has ended');
    event.detail.complete();
  }, 2000);
}

export const RefresherExample: React.FC = () => (
  <IonContent>
    {/*-- Default Refresher --*/}
    <IonContent>
      <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
        <IonRefresherContent></IonRefresherContent>
      </IonRefresher>
    </IonContent>

    {/*-- Custom Refresher Properties --*/}
    <IonContent>
      <IonRefresher slot="fixed" onIonRefresh={doRefresh} pullFactor={0.5} pullMin={100} pullMax={200}>
        <IonRefresherContent></IonRefresherContent>
      </IonRefresher>
    </IonContent>

    {/*-- Custom Refresher Content --*/}
    <IonContent>
      <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
        <IonRefresherContent
          pullingIcon={chevronDownCircleOutline}
          pullingText="Pull to refresh"
          refreshingSpinner="circles"
          refreshingText="Refreshing..."
        ></IonRefresherContent>
      </IonRefresher>
    </IonContent>
  </IonContent>
);
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'refresher-example',
  styleUrl: 'refresher-example.css',
})
export class RefresherExample {
  doRefresh(ev: any) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      ev.target.complete();
    }, 2000);
  }

  render() {
    return [
      // Default Refresher
      <ion-content>
        <ion-refresher slot="fixed" onIonRefresh={(ev) => this.doRefresh(ev)}>
          <ion-refresher-content></ion-refresher-content>
        </ion-refresher>
      </ion-content>,

      // Custom Refresher Properties
      <ion-content>
        <ion-refresher slot="fixed" pullFactor={0.5} pullMin={100} pullMax={200}>
          <ion-refresher-content></ion-refresher-content>
        </ion-refresher>
      </ion-content>,

      // Custom Refresher Content
      <ion-content>
        <ion-refresher slot="fixed" onIonRefresh={(ev) => this.doRefresh(ev)}>
          <ion-refresher-content
            pullingIcon="chevron-down-circle-outline"
            pullingText="Pull to refresh"
            refreshingSpinner="circles"
            refreshingText="Refreshing..."
          ></ion-refresher-content>
        </ion-refresher>
      </ion-content>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <!-- Default Refresher -->
  <ion-content>
    <ion-refresher slot="fixed" @ionRefresh="doRefresh($event)">
      <ion-refresher-content></ion-refresher-content>
    </ion-refresher>
  </ion-content>

  <!-- Custom Refresher Properties -->
  <ion-content>
    <ion-refresher slot="fixed" pull-factor="0.5" pull-min="100" pull-max="200">
      <ion-refresher-content></ion-refresher-content>
    </ion-refresher>
  </ion-content>

  <!-- Custom Refresher Content -->
  <ion-content>
    <ion-refresher slot="fixed" @ionRefresh="doRefresh($event)">
      <ion-refresher-content
        :pulling-icon="chevronDownCircleOutline"
        pulling-text="Pull to refresh"
        refreshing-spinner="circles"
        refreshing-text="Refreshing..."
      >
      </ion-refresher-content>
    </ion-refresher>
  </ion-content>
</template>

<script lang="ts">
  import { IonContent, IonRefresher, IonRefresherContent } from '@ionic/vue';
  import { chevronDownCircleOutline } from 'ionicons/icons';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonContent, IonRefresher, IonRefresherContent },
    setup() {
      const doRefresh = (event: CustomEvent) => {
        console.log('Begin async operation');

        setTimeout(() => {
          console.log('Async operation has ended');
          event.target.complete();
        }, 2000);
      };
      return { chevronDownCircleOutline, doRefresh };
    },
  });
</script>
```

</TabItem>

</Tabs>

## Properties

### closeDuration

|                 |                                                                                                                                          |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Time it takes to close the refresher.<br />Does not apply when the refresher content uses a spinner,<br />enabling the native refresher. |
| **Attribute**   | `close-duration`                                                                                                                         |
| **Type**        | `string`                                                                                                                                 |
| **Default**     | `'280ms'`                                                                                                                                |

### disabled

|                 |                                          |
| --------------- | ---------------------------------------- |
| **Description** | If `true`, the refresher will be hidden. |
| **Attribute**   | `disabled`                               |
| **Type**        | `boolean`                                |
| **Default**     | `false`                                  |

### pullFactor

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | How much to multiply the pull speed by. To slow the pull animation down,<br />pass a number less than `1`. To speed up the pull, pass a number greater<br />than `1`. The default value is `1` which is equal to the speed of the cursor.<br />If a negative value is passed in, the factor will be `1` instead.<br /><br />For example: If the value passed is `1.2` and the content is dragged by<br />`10` pixels, instead of `10` pixels the content will be pulled by `12` pixels<br />(an increase of 20 percent). If the value passed is `0.8`, the dragged amount<br />will be `8` pixels, less than the amount the cursor has moved.<br /><br />Does not apply when the refresher content uses a spinner,<br />enabling the native refresher. |
| **Attribute**   | `pull-factor`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **Type**        | `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| **Default**     | `1`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

### pullMax

|                 |                                                                                                                                                                                                                                                                |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The maximum distance of the pull until the refresher<br />will automatically go into the `refreshing` state.<br />Defaults to the result of `pullMin + 60`.<br />Does not apply when the refresher content uses a spinner,<br />enabling the native refresher. |
| **Attribute**   | `pull-max`                                                                                                                                                                                                                                                     |
| **Type**        | `number`                                                                                                                                                                                                                                                       |
| **Default**     | `this.pullMin + 60`                                                                                                                                                                                                                                            |

### pullMin

|                 |                                                                                                                                                                                                               |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The minimum distance the user must pull down until the<br />refresher will go into the `refreshing` state.<br />Does not apply when the refresher content uses a spinner,<br />enabling the native refresher. |
| **Attribute**   | `pull-min`                                                                                                                                                                                                    |
| **Type**        | `number`                                                                                                                                                                                                      |
| **Default**     | `60`                                                                                                                                                                                                          |

### snapbackDuration

|                 |                                                                                                                                                                           |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Time it takes the refresher to to snap back to the `refreshing` state.<br />Does not apply when the refresher content uses a spinner,<br />enabling the native refresher. |
| **Attribute**   | `snapback-duration`                                                                                                                                                       |
| **Type**        | `string`                                                                                                                                                                  |
| **Default**     | `'280ms'`                                                                                                                                                                 |

## Events

| Name         | Description                                                                    |
| ------------ | ------------------------------------------------------------------------------ |
| `ionPull`    | Emitted while the user is pulling down the content and exposing the refresher. |
| `ionRefresh` | Emitted when the user lets go of the content and has pulled down               |

further than the `pullMin` or pulls the content down and exceeds the pullMax.
Updates the refresher state to `refreshing`. The `complete()` method should be
called when the async operation has completed. |
| `ionStart` | Emitted when the user begins to start pulling down. |

## Methods

### cancel

|                 |                                                                  |
| --------------- | ---------------------------------------------------------------- |
| **Description** | Changes the refresher's state from `refreshing` to `cancelling`. |
| **Signature**   | `cancel() => Promise<void>`                                      |

### complete

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Call `complete()` when your async operation has completed.<br />For example, the `refreshing` state is while the app is performing<br />an asynchronous operation, such as receiving more data from an<br />AJAX request. Once the data has been received, you then call this<br />method to signify that the refreshing has completed and to close<br />the refresher. This method also changes the refresher's state from<br />`refreshing` to `completing`. |
| **Signature**   | `complete() => Promise<void>`                                                                                                                                                                                                                                                                                                                                                                                                                                  |

### getProgress

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | A number representing how far down the user has pulled.<br />The number `0` represents the user hasn't pulled down at all. The<br />number `1`, and anything greater than `1`, represents that the user<br />has pulled far enough down that when they let go then the refresh will<br />happen. If they let go and the number is less than `1`, then the<br />refresh will not happen, and the content will return to it's original<br />position. |
| **Signature**   | `getProgress() => Promise<number>`                                                                                                                                                                                                                                                                                                                                                                                                                  |
