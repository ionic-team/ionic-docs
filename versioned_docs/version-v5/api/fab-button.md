---
title: 'Floating Action Button | Ionic FAB Button Icon for Primary Action'
description: 'Floating Action Buttons (FABs) represent the primary action in an app. The icons are circular and, when pressed, the button may open more related actions.'
sidebar_label: 'ion-fab-button'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ion-fab-button

Floating Action Buttons (FABs) represent the primary action in an application. By default, they have a circular shape. When pressed, the button may open more related actions. As the name suggests, FABs generally float over the content in a fixed position. This is not achieved exclusively by using an `<ion-fab-button>FAB</ion-fab-button>`. They need to be wrapped with an `<ion-fab>` component in order to be fixed over the content.

If the FAB button is not wrapped with `<ion-fab>`, it will scroll with the content. FAB buttons have a default size, a mini size and can accept different colors:

## Usage

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-content>
  <!-- Fixed Floating Action Button that does not scroll with the content -->
  <ion-fab slot="fixed">
    <ion-fab-button>Button</ion-fab-button>
  </ion-fab>

  <!-- Default Floating Action Button that scrolls with the content.-->
  <ion-fab-button>Default</ion-fab-button>

  <!-- Mini -->
  <ion-fab-button size="small">Mini</ion-fab-button>

  <!-- Colors -->
  <ion-fab-button color="primary">Primary</ion-fab-button>
  <ion-fab-button color="secondary">Secondary</ion-fab-button>
  <ion-fab-button color="danger">Danger</ion-fab-button>
  <ion-fab-button color="light">Light</ion-fab-button>
  <ion-fab-button color="dark">Dark</ion-fab-button>
</ion-content>
```

</TabItem>

<TabItem value="javascript">

```html
<ion-content>
  <!-- Fixed Floating Action Button that does not scroll with the content -->
  <ion-fab slot="fixed">
    <ion-fab-button>Button</ion-fab-button>
  </ion-fab>

  <!-- Default Floating Action Button that scrolls with the content.-->
  <ion-fab-button>Default</ion-fab-button>

  <!-- Mini -->
  <ion-fab-button size="small">Mini</ion-fab-button>

  <!-- Colors -->
  <ion-fab-button color="primary">Primary</ion-fab-button>
  <ion-fab-button color="secondary">Secondary</ion-fab-button>
  <ion-fab-button color="danger">Danger</ion-fab-button>
  <ion-fab-button color="light">Light</ion-fab-button>
  <ion-fab-button color="dark">Dark</ion-fab-button>
</ion-content>
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import { IonContent, IonFab, IonFabButton } from '@ionic/react';

export const FabButtonExample: React.FC = () => (
  <IonContent>
    {/*-- Fixed Floating Action Button that does not scroll with the content --*/}
    <IonFab slot="fixed">
      <IonFabButton>Button</IonFabButton>
    </IonFab>

    {/*-- Default Floating Action Button that scrolls with the content.--*/}
    <IonFabButton>Default</IonFabButton>

    {/*-- Mini --*/}
    <IonFabButton size="small">Mini</IonFabButton>

    {/*-- Colors --*/}
    <IonFabButton color="primary">Primary</IonFabButton>
    <IonFabButton color="secondary">Secondary</IonFabButton>
    <IonFabButton color="danger">Danger</IonFabButton>
    <IonFabButton color="light">Light</IonFabButton>
    <IonFabButton color="dark">Dark</IonFabButton>
  </IonContent>
);
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'fab-button-example',
  styleUrl: 'fab-button-example.css',
})
export class FabButtonExample {
  render() {
    return [
      <ion-content>
        {/* Fixed Floating Action Button that does not scroll with the content */}
        <ion-fab slot="fixed">
          <ion-fab-button>Button</ion-fab-button>
        </ion-fab>

        {/* Default Floating Action Button that scrolls with the content */}
        <ion-fab-button>Default</ion-fab-button>

        {/* Mini */}
        <ion-fab-button size="small">Mini</ion-fab-button>

        {/* Colors */}
        <ion-fab-button color="primary">Primary</ion-fab-button>
        <ion-fab-button color="secondary">Secondary</ion-fab-button>
        <ion-fab-button color="danger">Danger</ion-fab-button>
        <ion-fab-button color="light">Light</ion-fab-button>
        <ion-fab-button color="dark">Dark</ion-fab-button>
      </ion-content>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <ion-content>
    <!-- Fixed Floating Action Button that does not scroll with the content -->
    <ion-fab slot="fixed">
      <ion-fab-button>Button</ion-fab-button>
    </ion-fab>

    <!-- Default Floating Action Button that scrolls with the content.-->
    <ion-fab-button>Default</ion-fab-button>

    <!-- Mini -->
    <ion-fab-button size="small">Mini</ion-fab-button>

    <!-- Colors -->
    <ion-fab-button color="primary">Primary</ion-fab-button>
    <ion-fab-button color="secondary">Secondary</ion-fab-button>
    <ion-fab-button color="danger">Danger</ion-fab-button>
    <ion-fab-button color="light">Light</ion-fab-button>
    <ion-fab-button color="dark">Dark</ion-fab-button>
  </ion-content>
</template>

<script>
  import { IonContent, IonFab, IonFabButton } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonContent, IonFab, IonFabButton },
  });
</script>
```

</TabItem>

</Tabs>

## Properties

### activated

|                 |                                                      |
| --------------- | ---------------------------------------------------- |
| **Description** | If `true`, the fab button will be show a close icon. |
| **Attribute**   | `activated`                                          |
| **Type**        | `boolean`                                            |
| **Default**     | `false`                                              |

### closeIcon

|                 |                                                                                                                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The icon name to use for the close icon. This will appear when the fab button<br />is pressed. Only applies if it is the main button inside of a fab containing a<br />fab list. |
| **Attribute**   | `close-icon`                                                                                                                                                                     |
| **Type**        | `string`                                                                                                                                                                         |
| **Default**     | `'close'`                                                                                                                                                                        |

### color

|                 |                                                                                                                                                                                                                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The color to use from your application's color palette.<br />Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.<br />For more information on colors, see [theming](../theming/basics.md). |
| **Attribute**   | `color`                                                                                                                                                                                                                                                                          |
| **Type**        | `string \| undefined`                                                                                                                                                                                                                                                            |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                      |

### disabled

|                 |                                                          |
| --------------- | -------------------------------------------------------- |
| **Description** | If `true`, the user cannot interact with the fab button. |
| **Attribute**   | `disabled`                                               |
| **Type**        | `boolean`                                                |
| **Default**     | `false`                                                  |

### download

|                 |                                                                                                                                                                                                                                                                                                          |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | This attribute instructs browsers to download a URL instead of navigating to<br />it, so the user will be prompted to save it as a local file. If the attribute<br />has a value, it is used as the pre-filled file name in the Save prompt<br />(the user can still change the file name if they want). |
| **Attribute**   | `download`                                                                                                                                                                                                                                                                                               |
| **Type**        | `string \| undefined`                                                                                                                                                                                                                                                                                    |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                                              |

### href

|                 |                                                                                                                              |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Contains a URL or a URL fragment that the hyperlink points to.<br />If this property is set, an anchor tag will be rendered. |
| **Attribute**   | `href`                                                                                                                       |
| **Type**        | `string \| undefined`                                                                                                        |
| **Default**     | `undefined`                                                                                                                  |

### mode

|                 |                                                   |
| --------------- | ------------------------------------------------- |
| **Description** | The mode determines which platform styles to use. |
| **Attribute**   | `mode`                                            |
| **Type**        | `"ios" \| "md"`                                   |
| **Default**     | `undefined`                                       |

### rel

|                 |                                                                                                                                                                                             |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Specifies the relationship of the target object to the link object.<br />The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types). |
| **Attribute**   | `rel`                                                                                                                                                                                       |
| **Type**        | `string \| undefined`                                                                                                                                                                       |
| **Default**     | `undefined`                                                                                                                                                                                 |

### routerAnimation

|                 |                                                                                                               |
| --------------- | ------------------------------------------------------------------------------------------------------------- |
| **Description** | When using a router, it specifies the transition animation when navigating to<br />another page using `href`. |
| **Attribute**   | `undefined`                                                                                                   |
| **Type**        | `((baseEl: any, opts?: any) => Animation) \| undefined`                                                       |
| **Default**     | `undefined`                                                                                                   |

### routerDirection

|                 |                                                                                                               |
| --------------- | ------------------------------------------------------------------------------------------------------------- |
| **Description** | When using a router, it specifies the transition direction when navigating to<br />another page using `href`. |
| **Attribute**   | `router-direction`                                                                                            |
| **Type**        | `"back" \| "forward" \| "root"`                                                                               |
| **Default**     | `'forward'`                                                                                                   |

### show

|                 |                                                         |
| --------------- | ------------------------------------------------------- |
| **Description** | If `true`, the fab button will show when in a fab-list. |
| **Attribute**   | `show`                                                  |
| **Type**        | `boolean`                                               |
| **Default**     | `false`                                                 |

### size

|                 |                                                                                 |
| --------------- | ------------------------------------------------------------------------------- |
| **Description** | The size of the button. Set this to `small` in order to have a mini fab button. |
| **Attribute**   | `size`                                                                          |
| **Type**        | `"small" \| undefined`                                                          |
| **Default**     | `undefined`                                                                     |

### target

|                 |                                                                                                                                                               |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Specifies where to display the linked URL.<br />Only applies when an `href` is provided.<br />Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`. |
| **Attribute**   | `target`                                                                                                                                                      |
| **Type**        | `string \| undefined`                                                                                                                                         |
| **Default**     | `undefined`                                                                                                                                                   |

### translucent

|                 |                                                                                                                                                                                                                                     |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | If `true`, the fab button will be translucent.<br />Only applies when the mode is `"ios"` and the device supports<br />[`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility). |
| **Attribute**   | `translucent`                                                                                                                                                                                                                       |
| **Type**        | `boolean`                                                                                                                                                                                                                           |
| **Default**     | `false`                                                                                                                                                                                                                             |

### type

|                 |                                   |
| --------------- | --------------------------------- |
| **Description** | The type of the button.           |
| **Attribute**   | `type`                            |
| **Type**        | `"button" \| "reset" \| "submit"` |
| **Default**     | `'button'`                        |

## Events

| Name       | Description                          |
| ---------- | ------------------------------------ |
| `ionBlur`  | Emitted when the button loses focus. |
| `ionFocus` | Emitted when the button has focus.   |

## CSS Shadow Parts

| Name         | Description                                                             |
| ------------ | ----------------------------------------------------------------------- |
| `close-icon` | The close icon that is displayed when a fab list opens (uses ion-icon). |
| `native`     | The native HTML button or anchor element that wraps all child elements. |

## CSS Custom Properties

| Name                             | Description                                                                                               |
| -------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `--background`                   | Background of the button                                                                                  |
| `--background-activated`         | Background of the button when pressed. Note: setting this will interfere with the Material Design ripple. |
| `--background-activated-opacity` | Opacity of the button background when pressed                                                             |
| `--background-focused`           | Background of the button when focused with the tab key                                                    |
| `--background-focused-opacity`   | Opacity of the button background when focused with the tab key                                            |
| `--background-hover`             | Background of the button on hover                                                                         |
| `--background-hover-opacity`     | Opacity of the button background on hover                                                                 |
| `--border-color`                 | Border color of the button                                                                                |
| `--border-radius`                | Border radius of the button                                                                               |
| `--border-style`                 | Border style of the button                                                                                |
| `--border-width`                 | Border width of the button                                                                                |
| `--box-shadow`                   | Box shadow of the button                                                                                  |
| `--close-icon-font-size`         | Font size of the close icon                                                                               |
| `--color`                        | Text color of the button                                                                                  |
| `--color-activated`              | Text color of the button when pressed                                                                     |
| `--color-focused`                | Text color of the button when focused with the tab key                                                    |
| `--color-hover`                  | Text color of the button on hover                                                                         |
| `--padding-bottom`               | Bottom padding of the button                                                                              |
| `--padding-end`                  | Right padding if direction is left-to-right, and left padding if direction is right-to-left of the button |
| `--padding-start`                | Left padding if direction is left-to-right, and right padding if direction is right-to-left of the button |
| `--padding-top`                  | Top padding of the button                                                                                 |
| `--ripple-color`                 | Color of the button ripple effect                                                                         |
| `--transition`                   | Transition of the button                                                                                  |
