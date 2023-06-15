---
title: 'ion-tab-bar'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v6/tab-bar/props.md';
import Events from '@ionic-internal/component-api/v6/tab-bar/events.md';
import Methods from '@ionic-internal/component-api/v6/tab-bar/methods.md';
import Parts from '@ionic-internal/component-api/v6/tab-bar/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/tab-bar/custom-props.md';
import Slots from '@ionic-internal/component-api/v6/tab-bar/slots.md';

<head>
  <title>ion-tab-bar with CSS Custom Properties for Tab Bar Components</title>
  <meta
    name="description"
    content="The tab bar component contains a set of tab buttons and a tab bar must be provided inside of tabs to communicate. Read more about use and CSS custom properties."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The tab bar is a UI component that contains a set of [tab buttons](tab-button.md). A tab bar must be provided inside of [tabs](tabs.md) to communicate with each [tab](tab.md).

## Usage

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-tabs>
  <!-- Tab bar -->
  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="account">
      <ion-icon name="person"></ion-icon>
    </ion-tab-button>
    <ion-tab-button tab="contact">
      <ion-icon name="call"></ion-icon>
    </ion-tab-button>
    <ion-tab-button tab="settings">
      <ion-icon name="settings"></ion-icon>
    </ion-tab-button>
  </ion-tab-bar>
</ion-tabs>
```

</TabItem>

<TabItem value="javascript">

```html
<ion-tabs>
  <!-- Tab views -->
  <ion-tab tab="account"></ion-tab>
  <ion-tab tab="contact"></ion-tab>
  <ion-tab tab="settings"></ion-tab>

  <!-- Tab bar -->
  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="account">
      <ion-icon name="person"></ion-icon>
    </ion-tab-button>
    <ion-tab-button tab="contact">
      <ion-icon name="call"></ion-icon>
    </ion-tab-button>
    <ion-tab-button tab="settings">
      <ion-icon name="settings"></ion-icon>
    </ion-tab-button>
  </ion-tab-bar>
</ion-tabs>
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonContent } from '@ionic/react';
import { call, person, settings } from 'ionicons/icons';

export const TabBarExample: React.FC = () => (
  <IonContent>
    <IonTabs>
      {/*-- Tab bar --*/}
      <IonTabBar slot="bottom">
        <IonTabButton tab="account">
          <IonIcon icon={person} />
        </IonTabButton>
        <IonTabButton tab="contact">
          <IonIcon icon={call} />
        </IonTabButton>
        <IonTabButton tab="settings">
          <IonIcon icon={settings} />
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </IonContent>
);
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <ion-tabs>
    <!-- Tab bar -->
    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="account">
        <ion-icon :icon="person"></ion-icon>
      </ion-tab-button>
      <ion-tab-button tab="contact">
        <ion-icon :icon="call"></ion-icon>
      </ion-tab-button>
      <ion-tab-button tab="settings">
        <ion-icon :icon="settings"></ion-icon>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</template>

<script>
  import { IonIcon, IonTabBar, IonTabButton, IonTabs } from '@ionic/vue';
  import { call, person, settings } from 'ionicons/icons';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonIcon, IonTabBar, IonTabButton, IonTabs },
    setup() {
      return { call, person, settings };
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
