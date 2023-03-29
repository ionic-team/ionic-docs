---
title: "ion-route"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v7/route/props.md';
import Events from '@ionic-internal/component-api/v7/route/events.md';
import Methods from '@ionic-internal/component-api/v7/route/methods.md';
import Parts from '@ionic-internal/component-api/v7/route/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/route/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/route/slots.md';

<head>
  <title>ion-route: API Route Component for Ionic Framework Apps</title>
  <meta name="description" content="ion-routeコンポーネントは、コンポーネントを受け取り、Browser URLがURLプロパティに一致したときにレンダリングします。Ionic AppsのAPIルートコンポーネントの詳細はこちら。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';


The route component takes a component and renders it when the Browser URL matches the url property.

:::note
 Note: このコンポーネントは、バニラおよびステンシルJavaScriptプロジェクトでのみ使用してください。Angularプロジェクトでは、[`ion-router-outlet`](router-outlet.md) と Angularルータを使用してください。
:::


## ナビゲーションフック

ナビゲーションフックは、タスクを実行したり、ナビゲーションガードとして動作させるために使用することができます。フックは、各 `ion-route` の `beforeEnter` と `beforeLeave` プロパティに関数を提供することで使用します。`true` を返すとナビゲーションを進めることができ、`false` を返すとナビゲーションがキャンセルされる。NavigationHookOptions` 型のオブジェクトを返すと、ナビゲーションを別のページにリダイレクトすることができます。

## Interfaces

```typescript
interface NavigationHookOptions {
  /**
   * A valid path to redirect navigation to.
   */
  redirect: string;
}
```




## 使い方

<Tabs groupId="framework" defaultValue="javascript" values={[{ value: 'javascript', label: 'Javascript' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

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
}

const hasUnsavedDataGuard = async () => {
  const hasUnsavedData = await checkData(); // Replace this with actual validation
  
  if (hasUnsavedData) {
    return await confirmDiscardChanges();
  } else {
    return true;
  }
}

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
    }
  ];
  
  document.body.appendChild(alert);
  
  await alert.present();
  
  const { role } = await alert.onDidDismiss();
  
  return (role === 'Cancel') ? false : true;
}
```


</TabItem>


<TabItem value="stencil">

```typescript
import { Component, h } from '@stencil/core';
import { alertController } from '@ionic/core';

@Component({
  tag: 'router-example',
  styleUrl: 'router-example.css'
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
    )
  }
}

const isLoggedInGuard = async () => {
  const isLoggedIn = await UserData.isLoggedIn(); // Replace this with actual login validation
  
  if (isLoggedIn) {
    return true;
  } else {
    return { redirect: '/login' }; // If a user is not logged in, they will be redirected to the /login page
  }
}

const hasUnsavedDataGuard = async () => {
  const hasUnsavedData = await checkData(); // Replace this with actual validation
  
  if (hasUnsavedData) {
    return await confirmDiscardChanges();
  } else {
    return true;
  }
}

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
      }
    ]
  });
  
  await alert.present();
  
  const { role } = await alert.onDidDismiss();
  
  return (role === 'Cancel') ? false : true;
}
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
  }
  
  const hasUnsavedDataGuard = async () => {
    const hasUnsavedData = await checkData(); // Replace this with actual validation
    
    if (hasUnsavedData) {
      return await confirmDiscardChanges();
    } else {
      return true;
    }
  }
  
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
        }
      ]
    });
    
    await alert.present();
    
    const { role } = await alert.onDidDismiss();
    
    return (role === 'Cancel') ? false : true;
  }
</script>
```

</TabItem>

</Tabs>

## プロパティ
<Props />

## イベント
<Events />

## メソッド
<Methods />

## CSS Shadow Parts
<Parts />

## CSSカスタムプロパティ
<CustomProps />

## Slots
<Slots />