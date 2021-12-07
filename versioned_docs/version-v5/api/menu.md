---
sidebar_label: 'ion-menu'
demoUrl: '/docs/demos/api/menu/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/menu/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ion-menu

The Menu component is a navigation drawer that slides in from the side of the current view.
By default, it slides in from the left, but the side can be overridden.
The menu will be displayed differently based on the mode, however the display type can be changed to any of the available menu types.
The menu element should be a sibling to the root content element.
There can be any number of menus attached to the content.
These can be controlled from the templates, or programmatically using the MenuController.

## Usage

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-menu side="start" menuId="first" contentId="main">
  <ion-header>
    <ion-toolbar color="primary">
      <ion-title>Start Menu</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-list>
      <ion-item>Menu Item</ion-item>
      <ion-item>Menu Item</ion-item>
      <ion-item>Menu Item</ion-item>
      <ion-item>Menu Item</ion-item>
      <ion-item>Menu Item</ion-item>
    </ion-list>
  </ion-content>
</ion-menu>

<ion-menu side="start" menuId="custom" contentId="main" class="my-custom-menu">
  <ion-header>
    <ion-toolbar color="tertiary">
      <ion-title>Custom Menu</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-list>
      <ion-item>Menu Item</ion-item>
      <ion-item>Menu Item</ion-item>
      <ion-item>Menu Item</ion-item>
      <ion-item>Menu Item</ion-item>
      <ion-item>Menu Item</ion-item>
    </ion-list>
  </ion-content>
</ion-menu>

<ion-menu side="end" type="push" contentId="main">
  <ion-header>
    <ion-toolbar color="danger">
      <ion-title>End Menu</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-list>
      <ion-item>Menu Item</ion-item>
      <ion-item>Menu Item</ion-item>
      <ion-item>Menu Item</ion-item>
      <ion-item>Menu Item</ion-item>
      <ion-item>Menu Item</ion-item>
    </ion-list>
  </ion-content>
</ion-menu>

<ion-router-outlet id="main"></ion-router-outlet>
```

```tsx
import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'menu-example',
  templateUrl: 'menu-example.html',
  styleUrls: ['./menu-example.css'],
})
export class MenuExample {
  constructor(private menu: MenuController) {}

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
}
```

```css
.my-custom-menu {
  --width: 500px;
}
```

</TabItem>

<TabItem value="javascript">

```html
<ion-app>
  <ion-menu side="start" menu-id="first" content-id="main">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Start Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>

  <ion-menu side="start" menu-id="custom" class="my-custom-menu" content-id="main">
    <ion-header>
      <ion-toolbar color="tertiary">
        <ion-title>Custom Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>

  <ion-menu side="end" type="push" content-id="main">
    <ion-header>
      <ion-toolbar color="danger">
        <ion-title>End Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>

  <div class="ion-page" id="main">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu - Basic</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-button expand="block" onclick="openFirst()">Open Start Menu</ion-button>
      <ion-button expand="block" onclick="openEnd()">Open End Menu</ion-button>
      <ion-button expand="block" onclick="openCustom()">Open Custom Menu</ion-button>
    </ion-content>
  </div>
</ion-app>
```

```javascript
<script type="module">
    import { menuController } from '@ionic/core';
    window.menuController = menuController;
</script>

<script>
  function openFirst() {
    menuController.enable(true, 'first');
    menuController.open('first');
  }

  function openEnd() {
    menuController.open('end');
  }

  function openCustom() {
    menuController.enable(true, 'custom');
    menuController.open('custom');
  }
</script>
```

```css
.my-custom-menu {
  --width: 500px;
}
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonRouterOutlet } from '@ionic/react';

export const MenuExample: React.FC = () => (
  <>
    <IonMenu side="start" menuId="first">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Start Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
        </IonList>
      </IonContent>
    </IonMenu>

    <IonMenu side="start" menuId="custom" className="my-custom-menu">
      <IonHeader>
        <IonToolbar color="tertiary">
          <IonTitle>Custom Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
        </IonList>
      </IonContent>
    </IonMenu>

    <IonMenu side="end" type="push">
      <IonHeader>
        <IonToolbar color="danger">
          <IonTitle>End Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
    <IonRouterOutlet></IonRouterOutlet>
  </>
);
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

import { menuController } from '@ionic/core';

@Component({
  tag: 'menu-example',
  styleUrl: 'menu-example.css',
})
export class MenuExample {
  openFirst() {
    menuController.enable(true, 'first');
    menuController.open('first');
  }

  openEnd() {
    menuController.open('end');
  }

  openCustom() {
    menuController.enable(true, 'custom');
    menuController.open('custom');
  }

  render() {
    return [
      <ion-menu side="start" menuId="first" contentId="main">
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>Start Menu</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-list>
            <ion-item>Menu Item</ion-item>
            <ion-item>Menu Item</ion-item>
            <ion-item>Menu Item</ion-item>
            <ion-item>Menu Item</ion-item>
            <ion-item>Menu Item</ion-item>
          </ion-list>
        </ion-content>
      </ion-menu>,

      <ion-menu side="start" menuId="custom" contentId="main" class="my-custom-menu">
        <ion-header>
          <ion-toolbar color="tertiary">
            <ion-title>Custom Menu</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-list>
            <ion-item>Menu Item</ion-item>
            <ion-item>Menu Item</ion-item>
            <ion-item>Menu Item</ion-item>
            <ion-item>Menu Item</ion-item>
            <ion-item>Menu Item</ion-item>
          </ion-list>
        </ion-content>
      </ion-menu>,

      <ion-menu side="end" type="push" contentId="main">
        <ion-header>
          <ion-toolbar color="danger">
            <ion-title>End Menu</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-list>
            <ion-item>Menu Item</ion-item>
            <ion-item>Menu Item</ion-item>
            <ion-item>Menu Item</ion-item>
            <ion-item>Menu Item</ion-item>
            <ion-item>Menu Item</ion-item>
          </ion-list>
        </ion-content>
      </ion-menu>,

      // A router outlet can be placed here instead
      <ion-content id="main">
        <ion-button expand="block" onClick={() => this.openFirst()}>
          Open Start Menu
        </ion-button>
        <ion-button expand="block" onClick={() => this.openEnd()}>
          Open End Menu
        </ion-button>
        <ion-button expand="block" onClick={() => this.openCustom()}>
          Open Custom Menu
        </ion-button>
      </ion-content>,
    ];
  }
}
```

```css
.my-custom-menu {
  --width: 500px;
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <ion-menu side="start" menu-id="first" content-id="main">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Start Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>

  <ion-menu side="start" menu-id="custom" class="my-custom-menu" content-id="main">
    <ion-header>
      <ion-toolbar color="tertiary">
        <ion-title>Custom Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>

  <ion-menu side="end" type="push" content-id="main">
    <ion-header>
      <ion-toolbar color="danger">
        <ion-title>End Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>

  <ion-router-outlet id="main"></ion-router-outlet>
</template>
<style>
  .my-custom-menu {
    --width: 500px;
  }
</style>

<script>
  import {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonRouterOutlet,
    IonTitle,
    IonToolbar,
    menuController,
  } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      IonContent,
      IonHeader,
      IonItem,
      IonList,
      IonMenu,
      IonRouterOutlet,
      IonTitle,
      IonToolbar,
    },
    methods: {
      openFirst() {
        menuController.enable(true, 'first');
        menuController.open('first');
      },
      openEnd() {
        menuController.open('end');
      },
      openCustom() {
        menuController.enable(true, 'custom');
        menuController.open('custom');
      },
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

|                 |                                  |
| --------------- | -------------------------------- |
| **Description** | If `true`, the menu is disabled. |
| **Attribute**   | `disabled`                       |
| **Type**        | `boolean`                        |
| **Default**     | `false`                          |

### maxEdgeStart

|                 |                                                                                                                         |
| --------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **Description** | The edge threshold for dragging the menu open.<br />If a drag/swipe happens over this value, the menu is not triggered. |
| **Attribute**   | `max-edge-start`                                                                                                        |
| **Type**        | `number`                                                                                                                |
| **Default**     | `50`                                                                                                                    |

### menuId

|                 |                       |
| --------------- | --------------------- |
| **Description** | An id for the menu.   |
| **Attribute**   | `menu-id`             |
| **Type**        | `string \| undefined` |
| **Default**     | `undefined`           |

### side

|                 |                                                   |
| --------------- | ------------------------------------------------- |
| **Description** | Which side of the view the menu should be placed. |
| **Attribute**   | `side`                                            |
| **Type**        | `"end" \| "start"`                                |
| **Default**     | `'start'`                                         |

### swipeGesture

|                 |                                         |
| --------------- | --------------------------------------- |
| **Description** | If `true`, swiping the menu is enabled. |
| **Attribute**   | `swipe-gesture`                         |
| **Type**        | `boolean`                               |
| **Default**     | `true`                                  |

### type

|                 |                                                                                          |
| --------------- | ---------------------------------------------------------------------------------------- |
| **Description** | The display type of the menu.<br />Available options: `"overlay"`, `"reveal"`, `"push"`. |
| **Attribute**   | `type`                                                                                   |
| **Type**        | `string \| undefined`                                                                    |
| **Default**     | `undefined`                                                                              |

## Events

| Name           | Description                                  |
| -------------- | -------------------------------------------- |
| `ionDidClose`  | Emitted when the menu is closed.             |
| `ionDidOpen`   | Emitted when the menu is open.               |
| `ionWillClose` | Emitted when the menu is about to be closed. |
| `ionWillOpen`  | Emitted when the menu is about to be opened. |

## Methods

### close

|                 |                                                                                                |
| --------------- | ---------------------------------------------------------------------------------------------- |
| **Description** | Closes the menu. If the menu is already closed or it can't be closed,<br />it returns `false`. |
| **Signature**   | `close(animated?: boolean) => Promise<boolean>`                                                |

### isActive

|                 |                                                                                                                                                                       |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Returns `true` is the menu is active.<br /><br />A menu is active when it can be opened or closed, meaning it's enabled<br />and it's not part of a `ion-split-pane`. |
| **Signature**   | `isActive() => Promise<boolean>`                                                                                                                                      |

### isOpen

|                 |                                     |
| --------------- | ----------------------------------- |
| **Description** | Returns `true` is the menu is open. |
| **Signature**   | `isOpen() => Promise<boolean>`      |

### open

|                 |                                                                                             |
| --------------- | ------------------------------------------------------------------------------------------- |
| **Description** | Opens the menu. If the menu is already open or it can't be opened,<br />it returns `false`. |
| **Signature**   | `open(animated?: boolean) => Promise<boolean>`                                              |

### setOpen

|                 |                                                                                                        |
| --------------- | ------------------------------------------------------------------------------------------------------ |
| **Description** | Opens or closes the button.<br />If the operation can't be completed successfully, it returns `false`. |
| **Signature**   | `setOpen(shouldOpen: boolean, animated?: boolean) => Promise<boolean>`                                 |

### toggle

|                 |                                                                                                                                                                                   |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Toggles the menu. If the menu is already open, it will try to close, otherwise it will try to open it.<br />If the operation can't be completed successfully, it returns `false`. |
| **Signature**   | `toggle(animated?: boolean) => Promise<boolean>`                                                                                                                                  |

## CSS Shadow Parts

| Name        | Description                                                            |
| ----------- | ---------------------------------------------------------------------- |
| `backdrop`  | The backdrop that appears over the main content when the menu is open. |
| `container` | The container for the menu content.                                    |

## CSS Custom Properties

| Name           | Description                |
| -------------- | -------------------------- |
| `--background` | Background of the menu     |
| `--height`     | Height of the menu         |
| `--max-height` | Maximum height of the menu |
| `--max-width`  | Maximum width of the menu  |
| `--min-height` | Minimum height of the menu |
| `--min-width`  | Minimum width of the menu  |
| `--width`      | Width of the menu          |
