---
title: "ion-tab-button"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v7/tab-button/props.md';
import Events from '@ionic-internal/component-api/v7/tab-button/events.md';
import Methods from '@ionic-internal/component-api/v7/tab-button/methods.md';
import Parts from '@ionic-internal/component-api/v7/tab-button/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/tab-button/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/tab-button/slots.md';



import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


tab buttonは、[tab bar](tab-bar.md)の内部に配置されるUIコンポーネントです。tab buttonを使用すると、iconとlabelのレイアウトを指定し、[tab view](tab.md)に接続できます。

タブの設定の詳細については、[tabs documentation](tabs.md)を参照してください。




## 使い方

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-tabs>
  <!-- Tab bar -->
  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="schedule">
      <ion-icon name="calendar" aria-hidden="true"></ion-icon>
      <ion-label>Schedule</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="speakers">
      <ion-icon name="person-circle" aria-hidden="true"></ion-icon>
      <ion-label>Speakers</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="map">
      <ion-icon name="map" aria-hidden="true"></ion-icon>
      <ion-label>Map</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="about">
      <ion-icon name="information-circle" aria-hidden="true"></ion-icon>
      <ion-label>About</ion-label>
    </ion-tab-button>
  </ion-tab-bar>
</ion-tabs>
```


</TabItem>


<TabItem value="javascript">

```html
<ion-tabs>
  <!-- Tab views -->
  <ion-tab tab="schedule">
    <ion-router-outlet name="schedule"></ion-router-outlet>
  </ion-tab>

  <ion-tab tab="speakers">
    <ion-router-outlet name="speakers"></ion-router-outlet>
  </ion-tab>

  <ion-tab tab="map">
    <ion-router-outlet name="map"></ion-router-outlet>
  </ion-tab>

  <ion-tab tab="about">
    <ion-router-outlet name="about"></ion-router-outlet>
  </ion-tab>

  <!-- Tab bar -->
  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="schedule" href="/app/tabs/(schedule:schedule)">
      <ion-icon name="calendar" aria-hidden="true"></ion-icon>
      <ion-label>Schedule</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="speakers" href="/app/tabs/(speakers:speakers)">
      <ion-icon name="person-circle" aria-hidden="true"></ion-icon>
      <ion-label>Speakers</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="map" href="/app/tabs/(map:map)">
      <ion-icon name="map" aria-hidden="true"></ion-icon>
      <ion-label>Map</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="about" href="/app/tabs/(about:about)">
      <ion-icon name="information-circle" aria-hidden="true"></ion-icon>
      <ion-label>About</ion-label>
    </ion-tab-button>
  </ion-tab-bar>
</ion-tabs>
```


</TabItem>


<TabItem value="react">

```tsx
import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonContent } from '@ionic/react';
import { calendar, personCircle, map, informationCircle } from 'ionicons/icons';

export const TabButtonExample: React.FC = () => (
  <IonContent>
    <IonTabs>
      {/*-- Tab bar --*/}
      <IonTabBar slot="bottom">
        <IonTabButton tab="schedule">
          <IonIcon icon={calendar} aria-hidden="true" />
          <IonLabel>Schedule</IonLabel>
        </IonTabButton>

        <IonTabButton tab="speakers">
          <IonIcon icon={personCircle} aria-hidden="true" />
          <IonLabel>Speakers</IonLabel>
        </IonTabButton>

        <IonTabButton tab="map">
          <IonIcon icon={map} aria-hidden="true" />
          <IonLabel>Map</IonLabel>
        </IonTabButton>

        <IonTabButton tab="about">
          <IonIcon icon={informationCircle} aria-hidden="true" />
          <IonLabel>About</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </IonContent>
);
```


</TabItem>


<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'tab-button-example',
  styleUrl: 'tab-button-example.css'
})
export class TabButtonExample {
  render() {
    return [
      <ion-tabs>
        {/* Tab views */}
        <ion-tab tab="schedule">
          <ion-router-outlet name="schedule"></ion-router-outlet>
        </ion-tab>

        <ion-tab tab="speakers">
          <ion-router-outlet name="speakers"></ion-router-outlet>
        </ion-tab>

        <ion-tab tab="map">
          <ion-router-outlet name="map"></ion-router-outlet>
        </ion-tab>

        <ion-tab tab="about">
          <ion-router-outlet name="about"></ion-router-outlet>
        </ion-tab>

        {/* Tab bar */}
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="schedule" href="/app/tabs/(schedule:schedule)">
            <ion-icon name="calendar" aria-hidden="true"></ion-icon>
            <ion-label>Schedule</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="speakers" href="/app/tabs/(speakers:speakers)">
            <ion-icon name="person-circle" aria-hidden="true"></ion-icon>
            <ion-label>Speakers</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="map" href="/app/tabs/(map:map)">
            <ion-icon name="map" aria-hidden="true"></ion-icon>
            <ion-label>Map</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="about" href="/app/tabs/(about:about)">
            <ion-icon name="information-circle" aria-hidden="true"></ion-icon>
            <ion-label>About</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    ];
  }
}
```


</TabItem>


<TabItem value="vue">

```html
<template>
  <ion-tabs>
    <!-- Tab bar -->
    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="schedule" href="/tabs/schedule">
        <ion-icon :icon="calendar" aria-hidden="true"></ion-icon>
        <ion-label>Schedule</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="speakers" href="/tabs/speakers">
        <ion-icon :icon="person-circle" aria-hidden="true"></ion-icon>
        <ion-label>Speakers</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="map" href="/tabs/map">
        <ion-icon :icon="map" aria-hidden="true"></ion-icon>
        <ion-label>Map</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="about" href="/tabs/about">
        <ion-icon :icon="informationCircle" aria-hidden="true"></ion-icon>
        <ion-label>About</ion-label>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</template>

<script>
import { 
  IonIcon, 
  IonLabel, 
  IonTabBar, 
  IonTabButton, 
  IonTabs
} from '@ionic/vue';
import { calendar, informationCircle, map, personCircle } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    IonIcon, 
    IonLabel, 
    IonTabBar, 
    IonTabButton, 
    IonTabs
  },
  setup() {
    return { calendar, informationCircle, map, personCircle }
  }
});
</script>
```


</TabItem>

</Tabs>

## プロパティ
<Props />

## イベント
<Events />

## メソッド
<Methods />

## CSS Shadow Parts
<Parts />

## CSSカスタムプロパティ
<CustomProps />

## Slots
<Slots />
