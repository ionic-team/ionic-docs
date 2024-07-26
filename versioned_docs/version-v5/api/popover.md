---
sidebar_label: 'ion-popover'
demoUrl: '/docs/demos/api/popover/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/popover/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/popover/props.md';
import Events from '@ionic-internal/component-api/v5/popover/events.md';
import Methods from '@ionic-internal/component-api/v5/popover/methods.md';
import Parts from '@ionic-internal/component-api/v5/popover/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/popover/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/popover/slots.md';

# ion-popover

:::warning
Popovers in Ionic v5 may collide with the [popover](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/popover)
feature on newer versions of browsers which can cause Ionic's popovers to not render. We recommend upgrading to the latest version of Ionic to avoid this issue.
:::

A Popover is a dialog that appears on top of the current page. It can be used for anything, but generally it is used for overflow actions that don't fit in the navigation bar.

## Presenting

To present a popover, call the `present` method on a popover instance. In order to position the popover relative to the element clicked, a click event needs to be passed into the options of the `present` method. If the event is not passed, the popover will be positioned in the center of the viewport.

## Customization

Popover uses scoped encapsulation, which means it will automatically scope its CSS by appending each of the styles with an additional class at runtime. Overriding scoped selectors in CSS requires a [higher specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) selector.

We recommend passing a custom class to `cssClass` in the `create` method and using that to add custom styles to the host and inner elements. This property can also accept multiple classes separated by spaces. View the [Usage](#usage) section for an example of how to pass a class using `cssClass`.

```css
/* DOES NOT WORK - not specific enough */
.popover-content {
  background: #222;
}

/* Works - pass "my-custom-class" in cssClass to increase specificity */
.my-custom-class .popover-content {
  background: #222;
}
```

Any of the defined [CSS Custom Properties](#css-custom-properties) can be used to style the Popover without needing to target individual elements:

```css
.my-custom-class {
  --background: #222;
}
```

> If you are building an Ionic Angular app, the styles need to be added to a global stylesheet file. Read [Style Placement](#style-placement) in the Angular section below for more information.

## Usage

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```tsx
import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../../component/popover/popover.component';

@Component({
  selector: 'popover-example',
  templateUrl: 'popover-example.html',
  styleUrls: ['./popover-example.css'],
})
export class PopoverExample {
  constructor(public popoverController: PopoverController) {}

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
```

### Style Placement

In Angular, the CSS of a specific page is scoped only to elements of that page. Even though the Popover can be presented from within a page, the `ion-popover` element is appended outside of the current page. This means that any custom styles need to go in a global stylesheet file. In an Ionic Angular starter this can be the `src/global.scss` file or you can register a new global style file by [adding to the `styles` build option in `angular.json`](https://angular.io/guide/workspace-config#style-script-config).

</TabItem>

<TabItem value="javascript">

```javascript
class PopoverExamplePage extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <ion-content>
        <ion-list>
          <ion-list-header><ion-label>Ionic</ion-label></ion-list-header>
          <ion-item button><ion-label>Item 0</ion-label></ion-item>
          <ion-item button><ion-label>Item 1</ion-label></ion-item>
          <ion-item button><ion-label>Item 2</ion-label></ion-item>
          <ion-item button><ion-label>Item 3</ion-label></ion-item>
        </ion-list>
      </ion-content>
    `;
  }
}

customElements.define('popover-example-page', PopoverExamplePage);

function presentPopover(ev) {
  const popover = Object.assign(document.createElement('ion-popover'), {
    component: 'popover-example-page',
    cssClass: 'my-custom-class',
    event: ev,
    translucent: true,
  });
  document.body.appendChild(popover);

  await popover.present();

  const { role } = await popover.onDidDismiss();
  console.log('onDidDismiss resolved with role', role);
}
```

</TabItem>

<TabItem value="react">

```tsx
/* Using with useIonPopover Hook */

import React from 'react';
import { IonButton, IonContent, IonItem, IonList, IonListHeader, IonPage, useIonPopover } from '@ionic/react';

const PopoverList: React.FC<{
  onHide: () => void;
}> = ({ onHide }) => (
  <IonList>
    <IonListHeader>Ionic</IonListHeader>
    <IonItem button>Learn Ionic</IonItem>
    <IonItem button>Documentation</IonItem>
    <IonItem button>Showcase</IonItem>
    <IonItem button>GitHub Repo</IonItem>
    <IonItem lines="none" detail={false} button onClick={onHide}>
      Close
    </IonItem>
  </IonList>
);

const PopoverExample: React.FC = () => {
  const [present, dismiss] = useIonPopover(PopoverList, {
    onHide: () => dismiss(),
  });

  return (
    <IonPage>
      <IonContent>
        <IonButton
          expand="block"
          onClick={(e) =>
            present({
              event: e.nativeEvent,
            })
          }
        >
          Show Popover
        </IonButton>
      </IonContent>
    </IonPage>
  );
};
```

```tsx
/* Using with IonPopover Component */

import React, { useState } from 'react';
import { IonPopover, IonButton } from '@ionic/react';

export const PopoverExample: React.FC = () => {
  const [popoverState, setShowPopover] = useState({
    showPopover: false,
    event: undefined,
  });

  return (
    <>
      <IonPopover
        cssClass="my-custom-class"
        event={popoverState.event}
        isOpen={popoverState.showPopover}
        onDidDismiss={() => setShowPopover({ showPopover: false, event: undefined })}
      >
        <p>This is popover content</p>
      </IonPopover>
      <IonButton
        onClick={(e: any) => {
          e.persist();
          setShowPopover({ showPopover: true, event: e });
        }}
      >
        Show Popover
      </IonButton>
    </>
  );
};
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

import { popoverController } from '@ionic/core';

@Component({
  tag: 'popover-example',
  styleUrl: 'popover-example.css',
})
export class PopoverExample {
  async presentPopover(ev: any) {
    const popover = await popoverController.create({
      component: 'page-popover',
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  render() {
    return [
      <ion-content>
        <ion-button onClick={(ev) => this.presentPopover(ev)}>Present Popover</ion-button>
      </ion-content>,
    ];
  }
}
```

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'page-popover',
  styleUrl: 'page-popover.css',
})
export class PagePopover {
  render() {
    return [
      <ion-list>
        <ion-item>
          <ion-label>Documentation</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Feedback</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Settings</ion-label>
        </ion-item>
      </ion-list>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <ion-content class="ion-padding"> Popover Content </ion-content>
</template>

<script>
  import { IonContent } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Popover',
    components: { IonContent },
  });
</script>
```

```html
<template>
  <ion-page>
    <ion-content class="ion-padding">
      <ion-button @click="openPopover">Open Popover</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
  import { IonButton, IonContent, IonPage, popoverController } from '@ionic/vue';
  import Popver from './popover.vue';

  export default {
    components: { IonButton, IonContent, IonPage },
    methods: {
      async openPopover(ev: Event) {
        const popover = await popoverController.create({
          component: Popover,
          cssClass: 'my-custom-class',
          event: ev,
          translucent: true,
        });
        await popover.present();

        const { role } = await popover.onDidDismiss();
        console.log('onDidDismiss resolved with role', role);
      },
    },
  };
</script>
```

Developers can also use this component directly in their template:

```html
<template>
  <ion-button @click="setOpen(true, $event)">Show Popover</ion-button>
  <ion-popover
    :is-open="isOpenRef"
    css-class="my-custom-class"
    :event="event"
    :translucent="true"
    @didDismiss="setOpen(false)"
  >
    <Popover></Popover>
  </ion-popover>
</template>

<script>
  import { IonButton, IonPopover } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';
  import Popver from './popover.vue';

  export default defineComponent({
    components: { IonButton, IonPopover, Popover },
    setup() {
      const isOpenRef = ref(false);
      const event = ref();
      const setOpen = (state: boolean, ev?: Event) => {
        event.value = ev;
        isOpenRef.value = state;
      };
      return { isOpenRef, setOpen, event };
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
