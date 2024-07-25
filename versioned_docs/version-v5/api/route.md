---
sidebar_label: 'ion-route'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/route/props.md';
import Events from '@ionic-internal/component-api/v5/route/events.md';
import Methods from '@ionic-internal/component-api/v5/route/methods.md';
import Parts from '@ionic-internal/component-api/v5/route/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/route/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/route/slots.md';

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
  const route = document.createElement('ion-route');
  route.header = 'Discard Unsaved Changes?';
  route.message = 'Are you sure you want to leave? Any unsaved changed will be lost.';
  route.buttons = [
    {
      text: 'Cancel',
      role: 'Cancel',
    },
    {
      text: 'Discard',
      role: 'destructive',
    },
  ];

  document.body.appendChild(route);

  await route.present();

  const { role } = await route.onDidDismiss();

  return role === 'Cancel' ? false : true;
};
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';
import { routeController } from '@ionic/core';

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
  const route = await routeController.create({
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

  await route.present();

  const { role } = await route.onDidDismiss();

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
  import { routeController } from '@ionic/vue';

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
    const route = await routeController.create({
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

    await route.present();

    const { role } = await route.onDidDismiss();

    return role === 'Cancel' ? false : true;
  };
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
