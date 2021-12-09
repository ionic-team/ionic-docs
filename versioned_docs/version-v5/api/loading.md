---
title: 'Loading | Application Loading Indicator Overlay | ion-loading'
description: "The ion-loading overlay indicates activity while blocking user interaction. The loading indicator appears on top of the app's content, and can be dismissed."
sidebar_label: 'ion-loading'
demoUrl: '/docs/demos/api/loading/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/loading/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ion-loading

An overlay that can be used to indicate activity while blocking user interaction. The loading indicator appears on top of the app's content, and can be dismissed by the app to resume user interaction with the app. It includes an optional backdrop, which can be disabled by setting `showBackdrop: false` upon creation.

## Dismissing

The loading indicator can be dismissed automatically after a specific amount of time by passing the number of milliseconds to display it in the `duration` of the loading options. To dismiss the loading indicator after creation, call the `dismiss()` method on the loading instance. The `onDidDismiss` function can be called to perform an action after the loading indicator is dismissed.

## Customization

Loading uses scoped encapsulation, which means it will automatically scope its CSS by appending each of the styles with an additional class at runtime. Overriding scoped selectors in CSS requires a [higher specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) selector.

We recommend passing a custom class to `cssClass` in the `create` method and using that to add custom styles to the host and inner elements. This property can also accept multiple classes separated by spaces. View the [Usage](#usage) section for an example of how to pass a class using `cssClass`.

```css
/* DOES NOT WORK - not specific enough */
ion-loading {
  color: green;
}

/* Works - pass "my-custom-class" in cssClass to increase specificity */
.my-custom-class {
  color: green;
}
```

Any of the defined [CSS Custom Properties](#css-custom-properties) can be used to style the Loading without needing to target individual elements:

```css
.my-custom-class {
  --background: #222;
  --spinner-color: #fff;

  color: #fff;
}
```

> If you are building an Ionic Angular app, the styles need to be added to a global stylesheet file. Read [Style Placement](#style-placement) in the Angular section below for more information.

## Usage

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```tsx
import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'loading-example',
  templateUrl: 'loading-example.html',
  styleUrls: ['./loading-example.css'],
})
export class LoadingExample {
  constructor(public loadingController: LoadingController) {}

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 5000,
      message: 'Click the backdrop to dismiss early...',
      translucent: true,
      cssClass: 'custom-class custom-loading',
      backdropDismiss: true,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role:', role);
  }
}
```

### Style Placement

In Angular, the CSS of a specific page is scoped only to elements of that page. Even though the Loading can be presented from within a page, the `ion-loading` element is appended outside of the current page. This means that any custom styles need to go in a global stylesheet file. In an Ionic Angular starter this can be the `src/global.scss` file or you can register a new global style file by [adding to the `styles` build option in `angular.json`](https://angular.io/guide/workspace-config#style-script-config).

</TabItem>

<TabItem value="javascript">

```javascript
async function presentLoading() {
  const loading = document.createElement('ion-loading');

  loading.cssClass = 'my-custom-class';
  loading.message = 'Please wait...';
  loading.duration = 2000;

  document.body.appendChild(loading);
  await loading.present();

  const { role, data } = await loading.onDidDismiss();
  console.log('Loading dismissed!');
}

async function presentLoadingWithOptions() {
  const loading = document.createElement('ion-loading');

  loading.spinner = null;
  loading.duration = 5000;
  loading.message = 'Click the backdrop to dismiss early...';
  loading.translucent = true;
  loading.cssClass = 'custom-class custom-loading';
  loading.backdropDismiss = true;

  document.body.appendChild(loading);
  await loading.present();

  const { role, data } = await loading.onDidDismiss();
  console.log('Loading dismissed with role:', role);
}
```

</TabItem>

<TabItem value="react">

```tsx
/* Using with useIonLoading Hook */

import React from 'react';
import { IonButton, IonContent, IonPage, useIonLoading } from '@ionic/react';

interface LoadingProps {}

const LoadingExample: React.FC<LoadingProps> = () => {
  const [present] = useIonLoading();
  return (
    <IonPage>
      <IonContent>
        <IonButton
          expand="block"
          onClick={() =>
            present({
              duration: 3000,
            })
          }
        >
          Show Loading
        </IonButton>
        <IonButton expand="block" onClick={() => present('Loading', 2000, 'dots')}>
          Show Loading using params
        </IonButton>
      </IonContent>
    </IonPage>
  );
};
```

```tsx
/* Using with IonLoading Component */

import React, { useState } from 'react';
import { IonLoading, IonButton, IonContent } from '@ionic/react';

export const LoadingExample: React.FC = () => {
  const [showLoading, setShowLoading] = useState(true);

  setTimeout(() => {
    setShowLoading(false);
  }, 2000);

  return (
    <IonContent>
      <IonButton onClick={() => setShowLoading(true)}>Show Loading</IonButton>
      <IonLoading
        cssClass="my-custom-class"
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={'Please wait...'}
        duration={5000}
      />
    </IonContent>
  );
};
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

import { loadingController } from '@ionic/core';

@Component({
  tag: 'loading-example',
  styleUrl: 'loading-example.css',
})
export class LoadingExample {
  async presentLoading() {
    const loading = await loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!', role, data);
  }

  async presentLoadingWithOptions() {
    const loading = await loadingController.create({
      spinner: null,
      duration: 5000,
      message: 'Click the backdrop to dismiss early...',
      translucent: true,
      cssClass: 'custom-class custom-loading',
      backdropDismiss: true,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role:', role, data);
  }

  render() {
    return [
      <ion-content>
        <ion-button onClick={() => this.presentLoading()}>Present Loading</ion-button>
        <ion-button onClick={() => this.presentLoadingWithOptions()}>Present Loading: Options</ion-button>
      </ion-content>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <ion-button @click="presentLoading">Show Loading</ion-button>
  <br />
  <ion-button @click="presentLoadingWithOptions">Show Loading</ion-button>
</template>

<script>

  <script>
  import { IonButton, loadingController } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    props: {
      timeout: { type: Number, default: 1000 },
    },
    methods: {
      async presentLoading() {
        const loading = await loadingController
          .create({
            cssClass: 'my-custom-class',
            message: 'Please wait...',
            duration: this.timeout,
          });

        await loading.present();

        setTimeout(function() {
          loading.dismiss()
        }, this.timeout);
      },
      async presentLoadingWithOptions() {
        const loading = await loadingController
          .create({
            spinner: null,
            duration: this.timeout,
            message: 'Click the backdrop to dismiss early...',
            translucent: true,
            cssClass: 'custom-class custom-loading',
            backdropDismiss: true
          });

        await loading.present();

        setTimeout(function() {
          loading.dismiss()
        }, this.timeout);
      },
    },
    components: { IonButton }
  });
</script>
```

Developers can also use this component directly in their template:

```html
<template>
  <ion-button @click="setOpen(true)">Show Loading</ion-button>
  <ion-loading
    :is-open="isOpenRef"
    cssClass="my-custom-class"
    message="Please wait..."
    :duration="timeout"
    @didDismiss="setOpen(false)"
  >
  </ion-loading>
</template>

<script>
  import { IonLoading, IonButton } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    props: {
      timeout: { type: Number, default: 1000 },
    },
    components: { IonLoading, IonButton },
    setup() {
      const isOpenRef = ref(false);
      const setOpen = (state: boolean) => (isOpenRef.value = state);

      return { isOpenRef, setOpen };
    },
  });
</script>
```

</TabItem>

</Tabs>

## Properties

### animated

|                 |                                                |
| --------------- | ---------------------------------------------- |
| **Description** | If `true`, the loading indicator will animate. |
| **Attribute**   | `animated`                                     |
| **Type**        | `boolean`                                      |
| **Default**     | `true`                                         |

### backdropDismiss

|                 |                                                                                  |
| --------------- | -------------------------------------------------------------------------------- |
| **Description** | If `true`, the loading indicator will be dismissed when the backdrop is clicked. |
| **Attribute**   | `backdrop-dismiss`                                                               |
| **Type**        | `boolean`                                                                        |
| **Default**     | `false`                                                                          |

### cssClass

|                 |                                                                                                                       |
| --------------- | --------------------------------------------------------------------------------------------------------------------- |
| **Description** | Additional classes to apply for custom CSS. If multiple classes are<br />provided they should be separated by spaces. |
| **Attribute**   | `css-class`                                                                                                           |
| **Type**        | `string \| string[] \| undefined`                                                                                     |
| **Default**     | `undefined`                                                                                                           |

### duration

|                 |                                                                         |
| --------------- | ----------------------------------------------------------------------- |
| **Description** | Number of milliseconds to wait before dismissing the loading indicator. |
| **Attribute**   | `duration`                                                              |
| **Type**        | `number`                                                                |
| **Default**     | `0`                                                                     |

### enterAnimation

|                 |                                                           |
| --------------- | --------------------------------------------------------- |
| **Description** | Animation to use when the loading indicator is presented. |
| **Attribute**   | `undefined`                                               |
| **Type**        | `((baseEl: any, opts?: any) => Animation) \| undefined`   |
| **Default**     | `undefined`                                               |

### keyboardClose

|                 |                                                                                        |
| --------------- | -------------------------------------------------------------------------------------- |
| **Description** | If `true`, the keyboard will be automatically dismissed when the overlay is presented. |
| **Attribute**   | `keyboard-close`                                                                       |
| **Type**        | `boolean`                                                                              |
| **Default**     | `true`                                                                                 |

### leaveAnimation

|                 |                                                           |
| --------------- | --------------------------------------------------------- |
| **Description** | Animation to use when the loading indicator is dismissed. |
| **Attribute**   | `undefined`                                               |
| **Type**        | `((baseEl: any, opts?: any) => Animation) \| undefined`   |
| **Default**     | `undefined`                                               |

### message

|                 |                                                            |
| --------------- | ---------------------------------------------------------- |
| **Description** | Optional text content to display in the loading indicator. |
| **Attribute**   | `message`                                                  |
| **Type**        | `IonicSafeString \| string \| undefined`                   |
| **Default**     | `undefined`                                                |

### mode

|                 |                                                   |
| --------------- | ------------------------------------------------- |
| **Description** | The mode determines which platform styles to use. |
| **Attribute**   | `mode`                                            |
| **Type**        | `"ios" \| "md"`                                   |
| **Default**     | `undefined`                                       |

### showBackdrop

|                 |                                                                       |
| --------------- | --------------------------------------------------------------------- |
| **Description** | If `true`, a backdrop will be displayed behind the loading indicator. |
| **Attribute**   | `show-backdrop`                                                       |
| **Type**        | `boolean`                                                             |
| **Default**     | `true`                                                                |

### spinner

|                 |                                                                                                                 |
| --------------- | --------------------------------------------------------------------------------------------------------------- |
| **Description** | The name of the spinner to display.                                                                             |
| **Attribute**   | `spinner`                                                                                                       |
| **Type**        | `"bubbles" \| "circles" \| "circular" \| "crescent" \| "dots" \| "lines" \| "lines-small" \| null \| undefined` |
| **Default**     | `undefined`                                                                                                     |

### translucent

|                 |                                                                                                                                                                                                                                            |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | If `true`, the loading indicator will be translucent.<br />Only applies when the mode is `"ios"` and the device supports<br />[`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility). |
| **Attribute**   | `translucent`                                                                                                                                                                                                                              |
| **Type**        | `boolean`                                                                                                                                                                                                                                  |
| **Default**     | `false`                                                                                                                                                                                                                                    |

## Events

| Name                    | Description                               |
| ----------------------- | ----------------------------------------- |
| `ionLoadingDidDismiss`  | Emitted after the loading has dismissed.  |
| `ionLoadingDidPresent`  | Emitted after the loading has presented.  |
| `ionLoadingWillDismiss` | Emitted before the loading has dismissed. |
| `ionLoadingWillPresent` | Emitted before the loading has presented. |

## Methods

### dismiss

|                 |                                                                       |
| --------------- | --------------------------------------------------------------------- |
| **Description** | Dismiss the loading overlay after it has been presented.              |
| **Signature**   | `dismiss(data?: any, role?: string \| undefined) => Promise<boolean>` |

### onDidDismiss

|                 |                                                               |
| --------------- | ------------------------------------------------------------- |
| **Description** | Returns a promise that resolves when the loading did dismiss. |
| **Signature**   | `onDidDismiss<T = any>() => Promise<OverlayEventDetail<T>>`   |

### onWillDismiss

|                 |                                                                |
| --------------- | -------------------------------------------------------------- |
| **Description** | Returns a promise that resolves when the loading will dismiss. |
| **Signature**   | `onWillDismiss<T = any>() => Promise<OverlayEventDetail<T>>`   |

### present

|                 |                                                        |
| --------------- | ------------------------------------------------------ |
| **Description** | Present the loading overlay after it has been created. |
| **Signature**   | `present() => Promise<void>`                           |

## CSS Custom Properties

| Name                 | Description                          |
| -------------------- | ------------------------------------ |
| `--backdrop-opacity` | Opacity of the backdrop              |
| `--background`       | Background of the loading dialog     |
| `--height`           | Height of the loading dialog         |
| `--max-height`       | Maximum height of the loading dialog |
| `--max-width`        | Maximum width of the loading dialog  |
| `--min-height`       | Minimum height of the loading dialog |
| `--min-width`        | Minimum width of the loading dialog  |
| `--spinner-color`    | Color of the loading spinner         |
| `--width`            | Width of the loading dialog          |
