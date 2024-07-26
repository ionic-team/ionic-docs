---
sidebar_label: 'ion-action-sheet'
demoUrl: '/docs/demos/api/action-sheet/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/action-sheet/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/action-sheet/props.md';
import Events from '@ionic-internal/component-api/v5/action-sheet/events.md';
import Methods from '@ionic-internal/component-api/v5/action-sheet/methods.md';
import Parts from '@ionic-internal/component-api/v5/action-sheet/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/action-sheet/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/action-sheet/slots.md';

# ion-action-sheet

An Action Sheet is a dialog that displays a set of options. It appears on top of the app's content, and must be manually dismissed by the user before they can resume interaction with the app. Destructive options are made obvious in `ios` mode. There are multiple ways to dismiss the action sheet, including tapping the backdrop or hitting the escape key on desktop.

## Buttons

A button's `role` property can either be `destructive` or `cancel`. Buttons without a role property will have the default look for the platform. Buttons with the `cancel` role will always load as the bottom button, no matter where they are in the array. All other buttons will be displayed in the order they have been added to the `buttons` array. Note: We recommend that `destructive` buttons are always the first button in the array, making them the top button. Additionally, if the action sheet is dismissed by tapping the backdrop, then it will fire the handler from the button with the cancel role.

## Customization

Action Sheet uses scoped encapsulation, which means it will automatically scope its CSS by appending each of the styles with an additional class at runtime. Overriding scoped selectors in CSS requires a [higher specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) selector.

We recommend passing a custom class to `cssClass` in the `create` method and using that to add custom styles to the host and inner elements. This property can also accept multiple classes separated by spaces. View the [Usage](#usage) section for an example of how to pass a class using `cssClass`.

```css
/* DOES NOT WORK - not specific enough */
.action-sheet-group {
  background: #e5e5e5;
}

/* Works - pass "my-custom-class" in cssClass to increase specificity */
.my-custom-class .action-sheet-group {
  background: #e5e5e5;
}
```

Any of the defined [CSS Custom Properties](#css-custom-properties) can be used to style the Action Sheet without needing to target individual elements:

```css
.my-custom-class {
  --background: #e5e5e5;
}
```

> If you are building an Ionic Angular app, the styles need to be added to a global stylesheet file. Read [Style Placement](#style-placement) in the Angular section below for more information.

## Usage

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```tsx
import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'action-sheet-example',
  templateUrl: 'action-sheet-example.html',
  styleUrls: ['./action-sheet-example.css'],
})
export class ActionSheetExample {
  constructor(public actionSheetController: ActionSheetController) {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Delete clicked');
          },
        },
        {
          text: 'Share',
          icon: 'share',
          handler: () => {
            console.log('Share clicked');
          },
        },
        {
          text: 'Play (open modal)',
          icon: 'caret-forward-circle',
          handler: () => {
            console.log('Play clicked');
          },
        },
        {
          text: 'Favorite',
          icon: 'heart',
          handler: () => {
            console.log('Favorite clicked');
          },
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
```

### Style Placement

In Angular, the CSS of a specific page is scoped only to elements of that page. Even though the Action Sheet can be presented from within a page, the `ion-action-sheet` element is appended outside of the current page. This means that any custom styles need to go in a global stylesheet file. In an Ionic Angular starter this can be the `src/global.scss` file or you can register a new global style file by [adding to the `styles` build option in `angular.json`](https://angular.io/guide/workspace-config#style-script-config).

</TabItem>

<TabItem value="javascript">

```javascript
async function presentActionSheet() {
  const actionSheet = document.createElement('ion-action-sheet');

  actionSheet.header = 'Albums';
  actionSheet.cssClass = 'my-custom-class';
  actionSheet.buttons = [
    {
      text: 'Delete',
      role: 'destructive',
      icon: 'trash',
      handler: () => {
        console.log('Delete clicked');
      },
    },
    {
      text: 'Share',
      icon: 'share',
      handler: () => {
        console.log('Share clicked');
      },
    },
    {
      text: 'Play (open modal)',
      icon: 'caret-forward-circle',
      handler: () => {
        console.log('Play clicked');
      },
    },
    {
      text: 'Favorite',
      icon: 'heart',
      handler: () => {
        console.log('Favorite clicked');
      },
    },
    {
      text: 'Cancel',
      icon: 'close',
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      },
    },
  ];
  document.body.appendChild(actionSheet);
  await actionSheet.present();

  const { role } = await actionSheet.onDidDismiss();
  console.log('onDidDismiss resolved with role', role);
}
```

</TabItem>

<TabItem value="react">

```tsx
/* Using with useIonActionSheet Hook */

import React from 'react';
import { IonButton, IonContent, IonPage, useIonActionSheet } from '@ionic/react';

const ActionSheetExample: React.FC = () => {
  const [present, dismiss] = useIonActionSheet();

  return (
    <IonPage>
      <IonContent>
        <IonButton
          expand="block"
          onClick={() =>
            present({
              buttons: [{ text: 'Ok' }, { text: 'Cancel' }],
              header: 'Action Sheet',
            })
          }
        >
          Show ActionSheet
        </IonButton>
        <IonButton expand="block" onClick={() => present([{ text: 'Ok' }, { text: 'Cancel' }], 'Action Sheet')}>
          Show ActionSheet using params
        </IonButton>
        <IonButton
          expand="block"
          onClick={() => {
            present([{ text: 'Ok' }, { text: 'Cancel' }], 'Action Sheet');
            setTimeout(dismiss, 3000);
          }}
        >
          Show ActionSheet, hide after 3 seconds
        </IonButton>
      </IonContent>
    </IonPage>
  );
};
```

```tsx
/* Using with IonActionSheet Component */

import React, { useState } from 'react';
import { IonActionSheet, IonContent, IonButton } from '@ionic/react';
import { trash, share, caretForwardCircle, heart, close } from 'ionicons/icons';

export const ActionSheetExample: React.FC = () => {
  const [showActionSheet, setShowActionSheet] = useState(false);

  return (
    <IonContent>
      <IonButton onClick={() => setShowActionSheet(true)} expand="block">
        Show Action Sheet
      </IonButton>
      <IonActionSheet
        isOpen={showActionSheet}
        onDidDismiss={() => setShowActionSheet(false)}
        cssClass="my-custom-class"
        buttons={[
          {
            text: 'Delete',
            role: 'destructive',
            icon: trash,
            handler: () => {
              console.log('Delete clicked');
            },
          },
          {
            text: 'Share',
            icon: share,
            handler: () => {
              console.log('Share clicked');
            },
          },
          {
            text: 'Play (open modal)',
            icon: caretForwardCircle,
            handler: () => {
              console.log('Play clicked');
            },
          },
          {
            text: 'Favorite',
            icon: heart,
            handler: () => {
              console.log('Favorite clicked');
            },
          },
          {
            text: 'Cancel',
            icon: close,
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            },
          },
        ]}
      ></IonActionSheet>
    </IonContent>
  );
};
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

import { actionSheetController } from '@ionic/core';

@Component({
  tag: 'action-sheet-example',
  styleUrl: 'action-sheet-example.css',
})
export class ActionSheetExample {
  async presentActionSheet() {
    const actionSheet = await actionSheetController.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Delete clicked');
          },
        },
        {
          text: 'Share',
          icon: 'share',
          handler: () => {
            console.log('Share clicked');
          },
        },
        {
          text: 'Play (open modal)',
          icon: 'caret-forward-circle',
          handler: () => {
            console.log('Play clicked');
          },
        },
        {
          text: 'Favorite',
          icon: 'heart',
          handler: () => {
            console.log('Favorite clicked');
          },
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  render() {
    return [
      <ion-content>
        <ion-button onClick={() => this.presentActionSheet()}>Present Action Sheet</ion-button>
      </ion-content>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <ion-button @click="presentActionSheet">Show Action Sheet</ion-button>
</template>

<script>
  import { IonButton, actionSheetController } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import { caretForwardCircle, close, heart, trash, share } from 'ionicons/icons';

  export default defineComponent({
    components: { IonButton },
    methods: {
      async presentActionSheet() {
        const actionSheet = await actionSheetController.create({
          header: 'Albums',
          cssClass: 'my-custom-class',
          buttons: [
            {
              text: 'Delete',
              role: 'destructive',
              icon: trash,
              handler: () => {
                console.log('Delete clicked');
              },
            },
            {
              text: 'Share',
              icon: share,
              handler: () => {
                console.log('Share clicked');
              },
            },
            {
              text: 'Play (open modal)',
              icon: caretForwardCircle,
              handler: () => {
                console.log('Play clicked');
              },
            },
            {
              text: 'Favorite',
              icon: heart,
              handler: () => {
                console.log('Favorite clicked');
              },
            },
            {
              text: 'Cancel',
              icon: close,
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              },
            },
          ],
        });
        await actionSheet.present();

        const { role } = await actionSheet.onDidDismiss();
        console.log('onDidDismiss resolved with role', role);
      },
    },
  });
</script>
```

Developers can also use this component directly in their template:

```html
<template>
  <ion-button @click="setOpen(true)">Show Action Sheet</ion-button>
  <ion-action-sheet
    :is-open="isOpenRef"
    header="Albums"
    css-class="my-custom-class"
    :buttons="buttons"
    @didDismiss="setOpen(false)"
  >
  </ion-action-sheet>
</template>

<script>
  import { IonActionSheet, IonButton } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';
  import { caretForwardCircle, close, heart, trash, share } from 'ionicons/icons';

  export default defineComponent({
    components: { IonActionSheet, IonButton },
    setup() {
      const isOpenRef = ref(false);
      const setOpen = (state: boolean) => (isOpenRef.value = state);
      const buttons = [
        {
          text: 'Delete',
          role: 'destructive',
          icon: trash,
          handler: () => {
            console.log('Delete clicked');
          },
        },
        {
          text: 'Share',
          icon: share,
          handler: () => {
            console.log('Share clicked');
          },
        },
        {
          text: 'Play (open modal)',
          icon: caretForwardCircle,
          handler: () => {
            console.log('Play clicked');
          },
        },
        {
          text: 'Favorite',
          icon: heart,
          handler: () => {
            console.log('Favorite clicked');
          },
        },
        {
          text: 'Cancel',
          icon: close,
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ];

      return { buttons, isOpenRef, setOpen };
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
