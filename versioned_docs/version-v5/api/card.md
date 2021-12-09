---
sidebar_label: 'ion-card'
demoUrl: '/docs/demos/api/card/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/card/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ion-card

Cards are a standard piece of UI that serves as an entry point to more detailed
information. A card can be a single component, but is often made up of some
header, title, subtitle, and content. `ion-card` is broken up into several
sub-components to reflect this. Please see `ion-card-content`,
`ion-card-header`, `ion-card-title`, `ion-card-subtitle`.

## Usage

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-card>
  <ion-card-header>
    <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
    <ion-card-title>Card Title</ion-card-title>
  </ion-card-header>

  <ion-card-content>
    Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the
    woods. Wash your spirit clean.
  </ion-card-content>
</ion-card>

<ion-card>
  <ion-item>
    <ion-icon name="pin" slot="start"></ion-icon>
    <ion-label>ion-item in a card, icon left, button right</ion-label>
    <ion-button fill="outline" slot="end">View</ion-button>
  </ion-item>

  <ion-card-content>
    This is content, without any paragraph or header tags, within an ion-card-content element.
  </ion-card-content>
</ion-card>

<ion-card>
  <ion-item href="#" class="ion-activated">
    <ion-icon name="wifi" slot="start"></ion-icon>
    <ion-label>Card Link Item 1 activated</ion-label>
  </ion-item>

  <ion-item href="#">
    <ion-icon name="wine" slot="start"></ion-icon>
    <ion-label>Card Link Item 2</ion-label>
  </ion-item>

  <ion-item class="ion-activated">
    <ion-icon name="warning" slot="start"></ion-icon>
    <ion-label>Card Button Item 1 activated</ion-label>
  </ion-item>

  <ion-item>
    <ion-icon name="walk" slot="start"></ion-icon>
    <ion-label>Card Button Item 2</ion-label>
  </ion-item>
</ion-card>
```

</TabItem>

<TabItem value="javascript">

```html
<ion-card>
  <ion-card-header>
    <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
    <ion-card-title>Card Title</ion-card-title>
  </ion-card-header>

  <ion-card-content>
    Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the
    woods. Wash your spirit clean.
  </ion-card-content>
</ion-card>

<ion-card>
  <ion-item>
    <ion-icon name="pin" slot="start"></ion-icon>
    <ion-label>ion-item in a card, icon left, button right</ion-label>
    <ion-button fill="outline" slot="end">View</ion-button>
  </ion-item>

  <ion-card-content>
    This is content, without any paragraph or header tags, within an ion-card-content element.
  </ion-card-content>
</ion-card>

<ion-card>
  <ion-item href="#" class="ion-activated">
    <ion-icon name="wifi" slot="start"></ion-icon>
    <ion-label>Card Link Item 1 activated</ion-label>
  </ion-item>

  <ion-item href="#">
    <ion-icon name="wine" slot="start"></ion-icon>
    <ion-label>Card Link Item 2</ion-label>
  </ion-item>

  <ion-item class="ion-activated">
    <ion-icon name="warning" slot="start"></ion-icon>
    <ion-label>Card Button Item 1 activated</ion-label>
  </ion-item>

  <ion-item>
    <ion-icon name="walk" slot="start"></ion-icon>
    <ion-label>Card Button Item 2</ion-label>
  </ion-item>
</ion-card>
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
} from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';

export const CardExamples: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>CardExamples</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            <IonCardTitle>Card Title</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week
            in the woods. Wash your spirit clean.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonItem>
            <IonIcon icon={pin} slot="start" />
            <IonLabel>ion-item in a card, icon left, button right</IonLabel>
            <IonButton fill="outline" slot="end">
              View
            </IonButton>
          </IonItem>

          <IonCardContent>
            This is content, without any paragraph or header tags, within an ion-cardContent element.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonItem href="#" className="ion-activated">
            <IonIcon icon={wifi} slot="start" />
            <IonLabel>Card Link Item 1 activated</IonLabel>
          </IonItem>

          <IonItem href="#">
            <IonIcon icon={wine} slot="start" />
            <IonLabel>Card Link Item 2</IonLabel>
          </IonItem>

          <IonItem className="ion-activated">
            <IonIcon icon={warning} slot="start" />
            <IonLabel>Card Button Item 1 activated</IonLabel>
          </IonItem>

          <IonItem>
            <IonIcon icon={walk} slot="start" />
            <IonLabel>Card Button Item 2</IonLabel>
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'card-example',
  styleUrl: 'card-example.css',
})
export class CardExample {
  render() {
    return [
      <ion-card>
        <ion-card-header>
          <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
          <ion-card-title>Card Title</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in
          the woods. Wash your spirit clean.
        </ion-card-content>
      </ion-card>,

      <ion-card>
        <ion-item>
          <ion-icon name="pin" slot="start"></ion-icon>
          <ion-label>ion-item in a card, icon left, button right</ion-label>
          <ion-button fill="outline" slot="end">
            View
          </ion-button>
        </ion-item>

        <ion-card-content>
          This is content, without any paragraph or header tags, within an ion-card-content element.
        </ion-card-content>
      </ion-card>,

      <ion-card>
        <ion-item href="#" class="ion-activated">
          <ion-icon name="wifi" slot="start"></ion-icon>
          <ion-label>Card Link Item 1 activated</ion-label>
        </ion-item>

        <ion-item href="#">
          <ion-icon name="wine" slot="start"></ion-icon>
          <ion-label>Card Link Item 2</ion-label>
        </ion-item>

        <ion-item class="ion-activated">
          <ion-icon name="warning" slot="start"></ion-icon>
          <ion-label>Card Button Item 1 activated</ion-label>
        </ion-item>

        <ion-item>
          <ion-icon name="walk" slot="start"></ion-icon>
          <ion-label>Card Button Item 2</ion-label>
        </ion-item>
      </ion-card>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <ion-card>
    <ion-card-header>
      <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
      <ion-card-title>Card Title</ion-card-title>
    </ion-card-header>

    <ion-card-content>
      Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the
      woods. Wash your spirit clean.
    </ion-card-content>
  </ion-card>

  <ion-card>
    <ion-item>
      <ion-icon :icon="pin" slot="start"></ion-icon>
      <ion-label>ion-item in a card, icon left, button right</ion-label>
      <ion-button fill="outline" slot="end">View</ion-button>
    </ion-item>

    <ion-card-content>
      This is content, without any paragraph or header tags, within an ion-card-content element.
    </ion-card-content>
  </ion-card>

  <ion-card>
    <ion-item href="#" class="ion-activated">
      <ion-icon :icon="wifi" slot="start"></ion-icon>
      <ion-label>Card Link Item 1 activated</ion-label>
    </ion-item>

    <ion-item href="#">
      <ion-icon :icon="wine" slot="start"></ion-icon>
      <ion-label>Card Link Item 2</ion-label>
    </ion-item>

    <ion-item class="ion-activated">
      <ion-icon :icon="warning" slot="start"></ion-icon>
      <ion-label>Card Button Item 1 activated</ion-label>
    </ion-item>

    <ion-item>
      <ion-icon :icon="walk" slot="start"></ion-icon>
      <ion-label>Card Button Item 2</ion-label>
    </ion-item>
  </ion-card>
</template>

<script>
  import { IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonIcon, IonItem, IonLabel } from '@ionic/vue';
  import { pin, walk, warning, wifi, wine } from 'ionicons/icons';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonIcon, IonItem, IonLabel }
    setup() {
      return { warning };
    }
  });
</script>
```

</TabItem>

</Tabs>

## Properties

### button

|                 |                                                                         |
| --------------- | ----------------------------------------------------------------------- |
| **Description** | If `true`, a button tag will be rendered and the card will be tappable. |
| **Attribute**   | `button`                                                                |
| **Type**        | `boolean`                                                               |
| **Default**     | `false`                                                                 |

### color

|                 |                                                                                                                                                                                                                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The color to use from your application's color palette.<br />Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.<br />For more information on colors, see [theming](../theming/basics.md). |
| **Attribute**   | `color`                                                                                                                                                                                                                                                                          |
| **Type**        | `string \| undefined`                                                                                                                                                                                                                                                            |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                      |

### disabled

|                 |                                                    |
| --------------- | -------------------------------------------------- |
| **Description** | If `true`, the user cannot interact with the card. |
| **Attribute**   | `disabled`                                         |
| **Type**        | `boolean`                                          |
| **Default**     | `false`                                            |

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

### target

|                 |                                                                                                                                                               |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Specifies where to display the linked URL.<br />Only applies when an `href` is provided.<br />Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`. |
| **Attribute**   | `target`                                                                                                                                                      |
| **Type**        | `string \| undefined`                                                                                                                                         |
| **Default**     | `undefined`                                                                                                                                                   |

### type

|                 |                                                                                      |
| --------------- | ------------------------------------------------------------------------------------ |
| **Description** | The type of the button. Only used when an `onclick` or `button` property is present. |
| **Attribute**   | `type`                                                                               |
| **Type**        | `"button" \| "reset" \| "submit"`                                                    |
| **Default**     | `'button'`                                                                           |

## CSS Shadow Parts

| Name     | Description                                                                   |
| -------- | ----------------------------------------------------------------------------- |
| `native` | The native HTML button, anchor, or div element that wraps all child elements. |

## CSS Custom Properties

| Name           | Description            |
| -------------- | ---------------------- |
| `--background` | Background of the card |
| `--color`      | Color of the card      |
