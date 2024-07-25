---
sidebar_label: 'ion-refresher'
demoUrl: '/docs/demos/api/refresher/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/refresher/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/refresher/props.md';
import Events from '@ionic-internal/component-api/v5/refresher/events.md';
import Methods from '@ionic-internal/component-api/v5/refresher/methods.md';
import Parts from '@ionic-internal/component-api/v5/refresher/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/refresher/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/refresher/slots.md';

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
