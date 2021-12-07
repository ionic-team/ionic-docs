---
sidebar_label: 'ion-tab-bar'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ion-tab-bar

The tab bar is a UI component that contains a set of [tab buttons](tab-button.md). A tab bar must be provided inside of [tabs](tabs.md) to communicate with each [tab](tab.md).

## Usage

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

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

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'tab-bar-example',
  styleUrl: 'tab-bar-example.css',
})
export class TabBarExample {
  render() {
    return [
      <ion-tabs>
        {/* Tab views */}
        <ion-tab tab="account" component="page-account"></ion-tab>
        <ion-tab tab="contact" component="page-contact"></ion-tab>
        <ion-tab tab="settings" component="page-settings"></ion-tab>

        {/* Tab bar */}
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
      </ion-tabs>,
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

### color

|                 |                                                                                                                                                                                                                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The color to use from your application's color palette.<br />Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.<br />For more information on colors, see [theming](../theming/basics.md). |
| **Attribute**   | `color`                                                                                                                                                                                                                                                                          |
| **Type**        | `string \| undefined`                                                                                                                                                                                                                                                            |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                      |

### mode

|                 |                                                   |
| --------------- | ------------------------------------------------- |
| **Description** | The mode determines which platform styles to use. |
| **Attribute**   | `mode`                                            |
| **Type**        | `"ios" \| "md"`                                   |
| **Default**     | `undefined`                                       |

### selectedTab

|                 |                            |
| --------------- | -------------------------- |
| **Description** | The selected tab component |
| **Attribute**   | `selected-tab`             |
| **Type**        | `string \| undefined`      |
| **Default**     | `undefined`                |

### translucent

|                 |                                                                                                                                                                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | If `true`, the tab bar will be translucent.<br />Only applies when the mode is `"ios"` and the device supports<br />[`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility). |
| **Attribute**   | `translucent`                                                                                                                                                                                                                    |
| **Type**        | `boolean`                                                                                                                                                                                                                        |
| **Default**     | `false`                                                                                                                                                                                                                          |

## CSS Custom Properties

| Name           | Description               |
| -------------- | ------------------------- |
| `--background` | Background of the tab bar |
| `--border`     | Border of the tab bar     |
| `--color`      | Color of the tab bar      |
