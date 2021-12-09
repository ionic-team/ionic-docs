---
sidebar_label: 'ion-button'
demoUrl: '/docs/demos/api/button/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/button/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ion-button

Buttons provide a clickable element, which can be used in forms, or anywhere that needs simple, standard button functionality. They may display text, icons, or both. Buttons can be styled with several attributes to look a specific way.

## Expand

This attribute lets you specify how wide the button should be. By default, buttons are inline blocks, but setting this attribute will change the button to a full-width block element.

| Value   | Details                                                                   |
| ------- | ------------------------------------------------------------------------- |
| `block` | Full-width button with rounded corners.                                   |
| `full`  | Full-width button with square corners and no border on the left or right. |

## Fill

This attributes determines the background and border color of the button. By default, buttons have a solid background unless the button is inside of a toolbar, in which case it has a transparent background.

| Value     | Details                                                            |
| --------- | ------------------------------------------------------------------ |
| `clear`   | Button with a transparent background that resembles a flat button. |
| `outline` | Button with a transparent background and a visible border.         |
| `solid`   | Button with a filled background. Useful for buttons in a toolbar.  |

## Size

This attribute specifies the size of the button. Setting this attribute will change the height and padding of a button.

| Value     | Details                                                                    |
| --------- | -------------------------------------------------------------------------- |
| `small`   | Button with less height and padding. Default for buttons in an item.       |
| `default` | Button with the default height and padding. Useful for buttons in an item. |
| `large`   | Button with more height and padding.                                       |

## Usage

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<!-- Default -->
<ion-button>Default</ion-button>

<!-- Anchor -->
<ion-button href="#">Anchor</ion-button>

<!-- Colors -->
<ion-button color="primary">Primary</ion-button>
<ion-button color="secondary">Secondary</ion-button>
<ion-button color="tertiary">Tertiary</ion-button>
<ion-button color="success">Success</ion-button>
<ion-button color="warning">Warning</ion-button>
<ion-button color="danger">Danger</ion-button>
<ion-button color="light">Light</ion-button>
<ion-button color="medium">Medium</ion-button>
<ion-button color="dark">Dark</ion-button>

<!-- Expand -->
<ion-button expand="full">Full Button</ion-button>
<ion-button expand="block">Block Button</ion-button>

<!-- Round -->
<ion-button shape="round">Round Button</ion-button>

<!-- Fill -->
<ion-button expand="full" fill="outline">Outline + Full</ion-button>
<ion-button expand="block" fill="outline">Outline + Block</ion-button>
<ion-button shape="round" fill="outline">Outline + Round</ion-button>

<!-- Icons -->
<ion-button>
  <ion-icon slot="start" name="star"></ion-icon>
  Left Icon
</ion-button>

<ion-button>
  Right Icon
  <ion-icon slot="end" name="star"></ion-icon>
</ion-button>

<ion-button>
  <ion-icon slot="icon-only" name="star"></ion-icon>
</ion-button>

<!-- Sizes -->
<ion-button size="large">Large</ion-button>
<ion-button>Default</ion-button>
<ion-button size="small">Small</ion-button>
```

</TabItem>

<TabItem value="javascript">

```html
<!-- Default -->
<ion-button>Default</ion-button>

<!-- Anchor -->
<ion-button href="#">Anchor</ion-button>

<!-- Colors -->
<ion-button color="primary">Primary</ion-button>
<ion-button color="secondary">Secondary</ion-button>
<ion-button color="tertiary">Tertiary</ion-button>
<ion-button color="success">Success</ion-button>
<ion-button color="warning">Warning</ion-button>
<ion-button color="danger">Danger</ion-button>
<ion-button color="light">Light</ion-button>
<ion-button color="medium">Medium</ion-button>
<ion-button color="dark">Dark</ion-button>

<!-- Expand -->
<ion-button expand="full">Full Button</ion-button>
<ion-button expand="block">Block Button</ion-button>

<!-- Round -->
<ion-button shape="round">Round Button</ion-button>

<!-- Fill -->
<ion-button expand="full" fill="outline">Outline + Full</ion-button>
<ion-button expand="block" fill="outline">Outline + Block</ion-button>
<ion-button shape="round" fill="outline">Outline + Round</ion-button>

<!-- Icons -->
<ion-button>
  <ion-icon slot="start" name="star"></ion-icon>
  Left Icon
</ion-button>

<ion-button>
  Right Icon
  <ion-icon slot="end" name="star"></ion-icon>
</ion-button>

<ion-button>
  <ion-icon slot="icon-only" name="star"></ion-icon>
</ion-button>

<!-- Sizes -->
<ion-button size="large">Large</ion-button>
<ion-button>Default</ion-button>
<ion-button size="small">Small</ion-button>
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';

import { IonButton, IonIcon, IonContent } from '@ionic/react';
import { star } from 'ionicons/icons';

export const ButtonExample: React.FC = () => (
  <IonContent>
    {/*-- Default --*/}
    <IonButton>Default</IonButton>

    {/*-- Anchor --*/}
    <IonButton href="#">Anchor</IonButton>

    {/*-- Colors --*/}
    <IonButton color="primary">Primary</IonButton>
    <IonButton color="secondary">Secondary</IonButton>
    <IonButton color="tertiary">Tertiary</IonButton>
    <IonButton color="success">Success</IonButton>
    <IonButton color="warning">Warning</IonButton>
    <IonButton color="danger">Danger</IonButton>
    <IonButton color="light">Light</IonButton>
    <IonButton color="medium">Medium</IonButton>
    <IonButton color="dark">Dark</IonButton>

    {/*-- Expand --*/}
    <IonButton expand="full">Full Button</IonButton>
    <IonButton expand="block">Block Button</IonButton>

    {/*-- Round --*/}
    <IonButton shape="round">Round Button</IonButton>

    {/*-- Fill --*/}
    <IonButton expand="full" fill="outline">
      Outline + Full
    </IonButton>
    <IonButton expand="block" fill="outline">
      Outline + Block
    </IonButton>
    <IonButton shape="round" fill="outline">
      Outline + Round
    </IonButton>

    {/*-- Icons --*/}
    <IonButton>
      <IonIcon slot="start" icon={star} />
      Left Icon
    </IonButton>

    <IonButton>
      Right Icon
      <IonIcon slot="end" icon={star} />
    </IonButton>

    <IonButton>
      <IonIcon slot="icon-only" icon={star} />
    </IonButton>

    {/*-- Sizes --*/}
    <IonButton size="large">Large</IonButton>
    <IonButton>Default</IonButton>
    <IonButton size="small">Small</IonButton>
  </IonContent>
);
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'button-example',
  styleUrl: 'button-example.css',
})
export class ButtonExample {
  render() {
    return [
      // Default
      <ion-button>Default</ion-button>,

      // Anchor
      <ion-button href="#">Anchor</ion-button>,

      // Colors
      <ion-button color="primary">Primary</ion-button>,
      <ion-button color="secondary">Secondary</ion-button>,
      <ion-button color="tertiary">Tertiary</ion-button>,
      <ion-button color="success">Success</ion-button>,
      <ion-button color="warning">Warning</ion-button>,
      <ion-button color="danger">Danger</ion-button>,
      <ion-button color="light">Light</ion-button>,
      <ion-button color="medium">Medium</ion-button>,
      <ion-button color="dark">Dark</ion-button>,

      // Expand
      <ion-button expand="full">Full Button</ion-button>,
      <ion-button expand="block">Block Button</ion-button>,

      // Round
      <ion-button shape="round">Round Button</ion-button>,

      // Fill
      <ion-button expand="full" fill="outline">
        Outline + Full
      </ion-button>,
      <ion-button expand="block" fill="outline">
        Outline + Block
      </ion-button>,
      <ion-button shape="round" fill="outline">
        Outline + Round
      </ion-button>,

      // Icons
      <ion-button>
        <ion-icon slot="start" name="star"></ion-icon>
        Left Icon
      </ion-button>,

      <ion-button>
        Right Icon
        <ion-icon slot="end" name="star"></ion-icon>
      </ion-button>,

      <ion-button>
        <ion-icon slot="icon-only" name="star"></ion-icon>
      </ion-button>,

      // Sizes
      <ion-button size="large">Large</ion-button>,
      <ion-button>Default</ion-button>,
      <ion-button size="small">Small</ion-button>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <!-- Default -->
  <ion-button>Default</ion-button>

  <!-- Anchor -->
  <ion-button href="#">Anchor</ion-button>

  <!-- Colors -->
  <ion-button color="primary">Primary</ion-button>
  <ion-button color="secondary">Secondary</ion-button>
  <ion-button color="tertiary">Tertiary</ion-button>
  <ion-button color="success">Success</ion-button>
  <ion-button color="warning">Warning</ion-button>
  <ion-button color="danger">Danger</ion-button>
  <ion-button color="light">Light</ion-button>
  <ion-button color="medium">Medium</ion-button>
  <ion-button color="dark">Dark</ion-button>

  <!-- Expand -->
  <ion-button expand="full">Full Button</ion-button>
  <ion-button expand="block">Block Button</ion-button>

  <!-- Round -->
  <ion-button shape="round">Round Button</ion-button>

  <!-- Fill -->
  <ion-button expand="full" fill="outline">Outline + Full</ion-button>
  <ion-button expand="block" fill="outline">Outline + Block</ion-button>
  <ion-button shape="round" fill="outline">Outline + Round</ion-button>

  <!-- Icons -->
  <ion-button>
    <ion-icon slot="start" name="star"></ion-icon>
    Left Icon
  </ion-button>

  <ion-button>
    Right Icon
    <ion-icon slot="end" name="star"></ion-icon>
  </ion-button>

  <ion-button>
    <ion-icon slot="icon-only" name="star"></ion-icon>
  </ion-button>

  <!-- Sizes -->
  <ion-button size="large">Large</ion-button>
  <ion-button>Default</ion-button>
  <ion-button size="small">Small</ion-button>
</template>

<script>
  import { IonButton } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonButton },
  });
</script>
```

</TabItem>

</Tabs>

## Properties

### buttonType

|                 |                     |
| --------------- | ------------------- |
| **Description** | The type of button. |
| **Attribute**   | `button-type`       |
| **Type**        | `string`            |
| **Default**     | `'button'`          |

### color

|                 |                                                                                                                                                                                                                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The color to use from your application's color palette.<br />Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.<br />For more information on colors, see [theming](../theming/basics.md). |
| **Attribute**   | `color`                                                                                                                                                                                                                                                                          |
| **Type**        | `string \| undefined`                                                                                                                                                                                                                                                            |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                      |

### disabled

|                 |                                                      |
| --------------- | ---------------------------------------------------- |
| **Description** | If `true`, the user cannot interact with the button. |
| **Attribute**   | `disabled`                                           |
| **Type**        | `boolean`                                            |
| **Default**     | `false`                                              |

### download

|                 |                                                                                                                                                                                                                                                                                                          |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | This attribute instructs browsers to download a URL instead of navigating to<br />it, so the user will be prompted to save it as a local file. If the attribute<br />has a value, it is used as the pre-filled file name in the Save prompt<br />(the user can still change the file name if they want). |
| **Attribute**   | `download`                                                                                                                                                                                                                                                                                               |
| **Type**        | `string \| undefined`                                                                                                                                                                                                                                                                                    |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                                              |

### expand

|                 |                                                                                                                      |
| --------------- | -------------------------------------------------------------------------------------------------------------------- |
| **Description** | Set to `"block"` for a full-width button or to `"full"` for a full-width button<br />without left and right borders. |
| **Attribute**   | `expand`                                                                                                             |
| **Type**        | `"block" \| "full" \| undefined`                                                                                     |
| **Default**     | `undefined`                                                                                                          |

### fill

|                 |                                                                                                                                                                                                                         |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Set to `"clear"` for a transparent button, to `"outline"` for a transparent<br />button with a border, or to `"solid"`. The default style is `"solid"` except inside of<br />a toolbar, where the default is `"clear"`. |
| **Attribute**   | `fill`                                                                                                                                                                                                                  |
| **Type**        | `"clear" \| "default" \| "outline" \| "solid" \| undefined`                                                                                                                                                             |
| **Default**     | `undefined`                                                                                                                                                                                                             |

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

### shape

|                 |                        |
| --------------- | ---------------------- |
| **Description** | The button shape.      |
| **Attribute**   | `shape`                |
| **Type**        | `"round" \| undefined` |
| **Default**     | `undefined`            |

### size

|                 |                                                |
| --------------- | ---------------------------------------------- |
| **Description** | The button size.                               |
| **Attribute**   | `size`                                         |
| **Type**        | `"default" \| "large" \| "small" \| undefined` |
| **Default**     | `undefined`                                    |

### strong

|                 |                                                           |
| --------------- | --------------------------------------------------------- |
| **Description** | If `true`, activates a button with a heavier font weight. |
| **Attribute**   | `strong`                                                  |
| **Type**        | `boolean`                                                 |
| **Default**     | `false`                                                   |

### target

|                 |                                                                                                                                                               |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Specifies where to display the linked URL.<br />Only applies when an `href` is provided.<br />Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`. |
| **Attribute**   | `target`                                                                                                                                                      |
| **Type**        | `string \| undefined`                                                                                                                                         |
| **Default**     | `undefined`                                                                                                                                                   |

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

| Name     | Description                                                             |
| -------- | ----------------------------------------------------------------------- |
| `native` | The native HTML button or anchor element that wraps all child elements. |

## CSS Custom Properties

| Name                             | Description                                                                                               |
| -------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `--background`                   | Background of the button                                                                                  |
| `--background-activated`         | Background of the button when pressed. Note: setting this will interfere with the Material Design ripple. |
| `--background-activated-opacity` | Opacity of the button when pressed                                                                        |
| `--background-focused`           | Background of the button when focused with the tab key                                                    |
| `--background-focused-opacity`   | Opacity of the button when focused with the tab key                                                       |
| `--background-hover`             | Background of the button on hover                                                                         |
| `--background-hover-opacity`     | Opacity of the background on hover                                                                        |
| `--border-color`                 | Border color of the button                                                                                |
| `--border-radius`                | Border radius of the button                                                                               |
| `--border-style`                 | Border style of the button                                                                                |
| `--border-width`                 | Border width of the button                                                                                |
| `--box-shadow`                   | Box shadow of the button                                                                                  |
| `--color`                        | Text color of the button                                                                                  |
| `--color-activated`              | Text color of the button when pressed                                                                     |
| `--color-focused`                | Text color of the button when focused with the tab key                                                    |
| `--color-hover`                  | Text color of the button when hover                                                                       |
| `--opacity`                      | Opacity of the button                                                                                     |
| `--padding-bottom`               | Bottom padding of the button                                                                              |
| `--padding-end`                  | Right padding if direction is left-to-right, and left padding if direction is right-to-left of the button |
| `--padding-start`                | Left padding if direction is left-to-right, and right padding if direction is right-to-left of the button |
| `--padding-top`                  | Top padding of the button                                                                                 |
| `--ripple-color`                 | Color of the button ripple effect                                                                         |
| `--transition`                   | Transition of the button                                                                                  |

## Slots

| Name        | Description                                                                       |
| ----------- | --------------------------------------------------------------------------------- |
| ``          | Content is placed between the named slots if provided without a slot.             |
| `end`       | Content is placed to the right of the button text in LTR, and to the left in RTL. |
| `icon-only` | Should be used on an icon in a button that has no text.                           |
| `start`     | Content is placed to the left of the button text in LTR, and to the right in RTL. |
