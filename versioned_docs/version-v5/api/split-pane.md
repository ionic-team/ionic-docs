---
title: 'ion-split-pane: Split Plane View for Menus and Multi-View Layouts'
description: 'ion-split-pane is useful when creating multi-view app layouts. It allows UI elements, like menus, to be displayed as the viewport width increases.'
sidebar_label: 'ion-split-pane'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ion-split-pane

A split pane is useful when creating multi-view layouts. It allows UI elements, like menus, to be
displayed as the viewport width increases.

If the device's screen width is below a certain size, the split pane will collapse and the menu will be hidden. This is ideal for creating an app that will be served in a browser and deployed through the app store to phones and tablets.

## Setting Breakpoints

By default, the split pane will expand when the screen is larger than 992px. To customize this, pass a breakpoint in the `when` property. The `when` property can accept a boolean value, any valid media query, or one of Ionic's predefined sizes.

```html
<!-- can be "xs", "sm", "md", "lg", or "xl" -->
<ion-split-pane when="md"></ion-split-pane>

<!-- can be any valid media query https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries -->
<ion-split-pane when="(min-width: 40px)"></ion-split-pane>
```

| Size | Value                 | Description                                                           |
| ---- | --------------------- | --------------------------------------------------------------------- |
| `xs` | `(min-width: 0px)`    | Show the split-pane when the min-width is 0px (meaning, always)       |
| `sm` | `(min-width: 576px)`  | Show the split-pane when the min-width is 576px                       |
| `md` | `(min-width: 768px)`  | Show the split-pane when the min-width is 768px                       |
| `lg` | `(min-width: 992px)`  | Show the split-pane when the min-width is 992px (default break point) |
| `xl` | `(min-width: 1200px)` | Show the split-pane when the min-width is 1200px                      |

## Usage

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-split-pane contentId="main">
  <!--  the side menu  -->
  <ion-menu contentId="main">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
  </ion-menu>

  <!-- the main content -->
  <ion-router-outlet id="main"></ion-router-outlet>
</ion-split-pane>
```

</TabItem>

<TabItem value="javascript">

```html
<ion-split-pane content-id="main">
  <!--  the side menu  -->
  <ion-menu content-id="main">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
  </ion-menu>

  <!-- the main content -->
  <ion-content id="main">
    <h1>Hello</h1>
  </ion-content>
</ion-split-pane>
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import {
  IonSplitPane,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonRouterOutlet,
  IonContent,
  IonPage,
} from '@ionic/react';

export const SplitPlaneExample: React.SFC<{}> = () => (
  <IonContent>
    <IonSplitPane contentId="main">
      {/*--  the side menu  --*/}
      <IonMenu contentId="main">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonMenu>

      {/*-- the main content --*/}
      <IonPage id="main" />
    </IonSplitPane>
  </IonContent>
);
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'split-pane-example',
  styleUrl: 'split-pane-example.css',
})
export class SplitPaneExample {
  render() {
    return [
      <ion-split-pane content-id="main">
        {/*  the side menu */}
        <ion-menu content-id="main">
          <ion-header>
            <ion-toolbar>
              <ion-title>Menu</ion-title>
            </ion-toolbar>
          </ion-header>
        </ion-menu>

        {/* the main content */}
        <ion-router-outlet id="main"></ion-router-outlet>
      </ion-split-pane>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <ion-split-pane content-id="main">
    <!--  the side menu  -->
    <ion-menu content-id="main">
      <ion-header>
        <ion-toolbar>
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>
    </ion-menu>

    <!-- the main content -->
    <ion-router-outlet id="main"></ion-router-outlet>
  </ion-split-pane>
</template>

<script>
  import { IonHeader, IonMenu, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      IonHeader,
      IonMenu,
      IonRouterOutlet,
      IonSplitPane,
      IonTitle,
      IonToolbar,
    },
  });
</script>
```

</TabItem>

</Tabs>

## Properties

### contentId

|                 |                                                                                                                                                                                                                                                            |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The `id` of the main content. When using<br />a router this is typically `ion-router-outlet`.<br />When not using a router, this is typically<br />your main view's `ion-content`. This is not the<br />id of the `ion-content` inside of your `ion-menu`. |
| **Attribute**   | `content-id`                                                                                                                                                                                                                                               |
| **Type**        | `string \| undefined`                                                                                                                                                                                                                                      |
| **Default**     | `undefined`                                                                                                                                                                                                                                                |

### disabled

|                 |                                           |
| --------------- | ----------------------------------------- |
| **Description** | If `true`, the split pane will be hidden. |
| **Attribute**   | `disabled`                                |
| **Type**        | `boolean`                                 |
| **Default**     | `false`                                   |

### when

|                 |                                                                                                                                                 |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | When the split-pane should be shown.<br />Can be a CSS media query expression, or a shortcut expression.<br />Can also be a boolean expression. |
| **Attribute**   | `when`                                                                                                                                          |
| **Type**        | `boolean \| string`                                                                                                                             |
| **Default**     | `QUERY['lg']`                                                                                                                                   |

## Events

| Name                  | Description                                                        |
| --------------------- | ------------------------------------------------------------------ |
| `ionSplitPaneVisible` | Expression to be called when the split-pane visibility has changed |

## CSS Custom Properties

| Name               | Description                                                                  |
| ------------------ | ---------------------------------------------------------------------------- |
| `--border`         | Border between panes                                                         |
| `--side-max-width` | Maximum width of the side pane. Does not apply when split pane is collapsed. |
| `--side-min-width` | Minimum width of the side pane. Does not apply when split pane is collapsed. |
| `--side-width`     | Width of the side pane. Does not apply when split pane is collapsed.         |
