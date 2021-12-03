---
sidebar_label: 'ion-route'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ion-route

The route component takes a component and renders it when the Browser URL matches the url property.

> Note: this component should only be used with vanilla and Stencil JavaScript projects. For Angular projects, use [`ion-router-outlet`](router-outlet.md) and the Angular router.

## Navigation Hooks

Navigation hooks can be used to perform tasks or act as navigation guards. Hooks are used by providing functions to the `beforeEnter` and `beforeLeave` properties on each `ion-route`. Returning `true` allows navigation to proceed, while returning `false` causes it to be cancelled. Returning an object of type `NavigationHookOptions` allows you to redirect navigation to another page.

## Interfaces

```tsx
interface NavigationHookOptions {
  /**
   * A valid path to redirect navigation to.
   */
  redirect: string;
}
```

## Usage

<Tabs groupId="framework" defaultValue="javascript" values={[{ value: 'javascript', label: 'JAVASCRIPT' }, { value: 'stencil', label: 'STENCIL' }, { value: 'vue', label: 'VUE' }]}>

<TabItem value="javascript">

```html
<ion-router>
  <ion-route url="/home" component="page-home"></ion-route>
  <ion-route url="/dashboard" component="page-dashboard"></ion-route>
  <ion-route url="/new-message" component="page-new-message"></ion-route>
  <ion-route url="/login" component="page-login"></ion-route>
</ion-router>
```

```javascript
const dashboardPage = document.querySelector('ion-route[url="/dashboard"]');
dashboardPage.beforeEnter = isLoggedInGuard;

const newMessagePage = document.querySelector('ion-route[url="/dashboard"]');
newMessagePage.beforeLeave = hasUnsavedDataGuard;

const isLoggedInGuard = async () => {
  const isLoggedIn = await UserData.isLoggedIn(); // Replace this with actual login validation

  if (isLoggedIn) {
    return true;
  } else {
    return { redirect: '/login' }; // If a user is not logged in, they will be redirected to the /login page
  }
};

const hasUnsavedDataGuard = async () => {
  const hasUnsavedData = await checkData(); // Replace this with actual validation

  if (hasUnsavedData) {
    return await confirmDiscardChanges();
  } else {
    return true;
  }
};

const confirmDiscardChanges = async () => {
  const alert = document.createElement('ion-alert');
  alert.header = 'Discard Unsaved Changes?';
  alert.message = 'Are you sure you want to leave? Any unsaved changed will be lost.';
  alert.buttons = [
    {
      text: 'Cancel',
      role: 'Cancel',
    },
    {
      text: 'Discard',
      role: 'destructive',
    },
  ];

  document.body.appendChild(alert);

  await alert.present();

  const { role } = await alert.onDidDismiss();

  return role === 'Cancel' ? false : true;
};
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';
import { alertController } from '@ionic/core';

@Component({
  tag: 'router-example',
  styleUrl: 'router-example.css',
})
export class RouterExample {
  render() {
    return (
      <ion-router>
        <ion-route url="/home" component="page-home"></ion-route>
        <ion-route url="/dashboard" component="page-dashboard" beforeEnter={isLoggedInGuard}></ion-route>
        <ion-route url="/new-message" component="page-new-message" beforeLeave={hasUnsavedDataGuard}></ion-route>
        <ion-route url="/login" component="page-login"></ion-route>
      </ion-router>
    );
  }
}

const isLoggedInGuard = async () => {
  const isLoggedIn = await UserData.isLoggedIn(); // Replace this with actual login validation

  if (isLoggedIn) {
    return true;
  } else {
    return { redirect: '/login' }; // If a user is not logged in, they will be redirected to the /login page
  }
};

const hasUnsavedDataGuard = async () => {
  const hasUnsavedData = await checkData(); // Replace this with actual validation

  if (hasUnsavedData) {
    return await confirmDiscardChanges();
  } else {
    return true;
  }
};

const confirmDiscardChanges = async () => {
  const alert = await alertController.create({
    header: 'Discard Unsaved Changes?',
    message: 'Are you sure you want to leave? Any unsaved changed will be lost.',
    buttons: [
      {
        text: 'Cancel',
        role: 'Cancel',
      },
      {
        text: 'Discard',
        role: 'destructive',
      },
    ],
  });

  await alert.present();

  const { role } = await alert.onDidDismiss();

  return role === 'Cancel' ? false : true;
};
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <ion-router>
    <ion-route url="/home" component="page-home"></ion-route>
    <ion-route url="/dashboard" component="page-dashboard" :beforeEnter="isLoggedInGuard"></ion-route>
    <ion-route url="/new-message" component="page-new-message" :beforeLeave="hasUnsavedDataGuard"></ion-route>
    <ion-route url="/login" component="page-login"></ion-route>
  </ion-router>
</template>

<script>
  import { alertController } from '@ionic/vue';

  const isLoggedInGuard = async () => {
    const isLoggedIn = await UserData.isLoggedIn(); // Replace this with actual login validation

    if (isLoggedIn) {
      return true;
    } else {
      return { redirect: '/login' }; // If a user is not logged in, they will be redirected to the /login page
    }
  };

  const hasUnsavedDataGuard = async () => {
    const hasUnsavedData = await checkData(); // Replace this with actual validation

    if (hasUnsavedData) {
      return await confirmDiscardChanges();
    } else {
      return true;
    }
  };

  const confirmDiscardChanges = async () => {
    const alert = await alertController.create({
      header: 'Discard Unsaved Changes?',
      message: 'Are you sure you want to leave? Any unsaved changed will be lost.',
      buttons: [
        {
          text: 'Cancel',
          role: 'Cancel',
        },
        {
          text: 'Discard',
          role: 'destructive',
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();

    return role === 'Cancel' ? false : true;
  };
</script>
```

</TabItem>

</Tabs>

## Properties

### beforeEnter

|                 |                                                                                                                                                                                                                                                                                     |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | A navigation hook that is fired when the route tries to enter.<br />Returning `true` allows the navigation to proceed, while returning<br />`false` causes it to be cancelled. Returning a `NavigationHookOptions`<br />object causes the router to redirect to the path specified. |
| **Attribute**   | `undefined`                                                                                                                                                                                                                                                                         |
| **Type**        | `(() => NavigationHookResult \| Promise<NavigationHookResult>) \| undefined`                                                                                                                                                                                                        |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                         |

### beforeLeave

|                 |                                                                                                                                                                                                                                                                                     |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | A navigation hook that is fired when the route tries to leave.<br />Returning `true` allows the navigation to proceed, while returning<br />`false` causes it to be cancelled. Returning a `NavigationHookOptions`<br />object causes the router to redirect to the path specified. |
| **Attribute**   | `undefined`                                                                                                                                                                                                                                                                         |
| **Type**        | `(() => NavigationHookResult \| Promise<NavigationHookResult>) \| undefined`                                                                                                                                                                                                        |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                         |

### component

|                 |                                                                                                                                                                                                                                                                                            |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | Name of the component to load/select in the navigation outlet (`ion-tabs`, `ion-nav`)<br />when the route matches.<br /><br />The value of this property is not always the tagname of the component to load,<br />in `ion-tabs` it actually refers to the name of the `ion-tab` to select. |
| **Attribute**   | `component`                                                                                                                                                                                                                                                                                |
| **Type**        | `string`                                                                                                                                                                                                                                                                                   |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                                |

### componentProps

|                 |                                                                                                                                   |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | A key value `{ 'red': true, 'blue': 'white'}` containing props that should be passed<br />to the defined component when rendered. |
| **Attribute**   | `undefined`                                                                                                                       |
| **Type**        | `undefined \| { [key: string]: any; }`                                                                                            |
| **Default**     | `undefined`                                                                                                                       |

### url

|                 |                                                                                                                                                                                                                               |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Relative path that needs to match in order for this route to apply.<br /><br />Accepts paths similar to expressjs so that you can define parameters<br />in the url /foo/:bar where bar would be available in incoming props. |
| **Attribute**   | `url`                                                                                                                                                                                                                         |
| **Type**        | `string`                                                                                                                                                                                                                      |
| **Default**     | `''`                                                                                                                                                                                                                          |

## Events

| Name                  | Description                                                         |
| --------------------- | ------------------------------------------------------------------- |
| `ionRouteDataChanged` | Used internally by `ion-router` to know when this route did change. |
