---
title: 'Page Footer | Ionic App Footer: Wrapper Root Page Component'
description: 'A footer is a root component that sits at the bottom of a page. Ionic footers can be a wrapper for ion-toolbar to make sure the content area is sized correctly.'
sidebar_label: 'ion-footer'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ion-footer

Footer is a root component of a page that sits at the bottom of the page.
Footer can be a wrapper for ion-toolbar to make sure the content area is sized correctly.

## Usage

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-content></ion-content>

<!-- Footer without a border -->
<ion-footer class="ion-no-border">
  <ion-toolbar>
    <ion-title>Footer - No Border</ion-title>
  </ion-toolbar>
</ion-footer>

<ion-footer>
  <ion-toolbar>
    <ion-title>Footer</ion-title>
  </ion-toolbar>
</ion-footer>
```

</TabItem>

<TabItem value="javascript">

```html
<ion-content></ion-content>

<!-- Footer without a border -->
<ion-footer class="ion-no-border">
  <ion-toolbar>
    <ion-title>Footer - No Border</ion-title>
  </ion-toolbar>
</ion-footer>

<ion-footer>
  <ion-toolbar>
    <ion-title>Footer</ion-title>
  </ion-toolbar>
</ion-footer>
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import { IonContent, IonFooter, IonToolbar, IonTitle } from '@ionic/react';

export const FooterExample: React.FC = () => (
  <>
    <IonContent />

    {/*-- Footer without a border --*/}
    <IonFooter className="ion-no-border">
      <IonToolbar>
        <IonTitle>Footer - No Border</IonTitle>
      </IonToolbar>
    </IonFooter>

    <IonFooter>
      <IonToolbar>
        <IonTitle>Footer</IonTitle>
      </IonToolbar>
    </IonFooter>
  </>
);
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'footer-example',
  styleUrl: 'footer-example.css',
})
export class FooterExample {
  render() {
    return [
      <ion-content></ion-content>,

      // Footer without a border
      <ion-footer class="ion-no-border">
        <ion-toolbar>
          <ion-title>Footer - No Border</ion-title>
        </ion-toolbar>
      </ion-footer>,

      <ion-footer>
        <ion-toolbar>
          <ion-title>Footer</ion-title>
        </ion-toolbar>
      </ion-footer>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <ion-content></ion-content>

  <!-- Footer without a border -->
  <ion-footer class="ion-no-border">
    <ion-toolbar>
      <ion-title>Footer - No Border</ion-title>
    </ion-toolbar>
  </ion-footer>

  <ion-footer>
    <ion-toolbar>
      <ion-title>Footer</ion-title>
    </ion-toolbar>
  </ion-footer>
</template>

<script>
  import { IonContent, IonFooter, IonTitle, IonToolbar } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonContent, IonFooter, IonTitle, IonToolbar },
  });
</script>
```

</TabItem>

</Tabs>

## Properties

### mode

|                 |                                                   |
| --------------- | ------------------------------------------------- |
| **Description** | The mode determines which platform styles to use. |
| **Attribute**   | `mode`                                            |
| **Type**        | `"ios" \| "md"`                                   |
| **Default**     | `undefined`                                       |

### translucent

|                 |                                                                                                                                                                                                                                                                                                                                                                |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | If `true`, the footer will be translucent.<br />Only applies when the mode is `"ios"` and the device supports<br />[`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).<br /><br />Note: In order to scroll content behind the footer, the `fullscreen`<br />attribute needs to be set on the content. |
| **Attribute**   | `translucent`                                                                                                                                                                                                                                                                                                                                                  |
| **Type**        | `boolean`                                                                                                                                                                                                                                                                                                                                                      |
| **Default**     | `false`                                                                                                                                                                                                                                                                                                                                                        |
