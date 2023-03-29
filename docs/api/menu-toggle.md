---
title: "ion-menu-toggle"
hide_table_of_contents: true
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v6/menu-toggle/props.md';
import Events from '@ionic-internal/component-api/v6/menu-toggle/events.md';
import Methods from '@ionic-internal/component-api/v6/menu-toggle/methods.md';
import Parts from '@ionic-internal/component-api/v6/menu-toggle/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/menu-toggle/custom-props.md';
import Slots from '@ionic-internal/component-api/v6/menu-toggle/slots.md';

<head>
  <title>ion-menu-toggle | MenuToggle Component to Open/Close Active Menus</title>
  <meta name="description" content="MenuToggleコンポーネントは、メニューの開閉を切り替えるために使用します。デフォルトでは、選択されたメニューがアクティブなときにのみ表示されます。使用方法についてもっと読む。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';
import TOCInline from '@theme/TOCInline';

<EncapsulationPill type="shadow" />

<h2 className="table-of-contents__title">コンテンツ</h2>

<TOCInline
  toc={toc}
  maxHeadingLevel={2}
/>



MenuToggleコンポーネントを使用すると、Menuの表示/非表示を切り替えることができます。

デフォルトでは、選択したMenuがアクティブな場合にのみ表示されます。Menuは、開いたり閉じたりできるときにアクティブになります。Menuが無効になっている場合、または分割ペインとして表示されている場合、メニューは非アクティブとしてマークされ、ion-menu-toggleが非表示になります。

`ion-menu-toggle` を常に表示しておきたい場合は、`autoHide`プロパティを`false`に設定できます。



## 使い方

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-app>
  <ion-menu side="start" menuId="first" contentId="main">
    <ion-header>
      <ion-toolbar color="secondary">
        <ion-title>Example Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>Menu Item</ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
  <div class="ion-page" id="main">
    <ion-content class="ion-padding">
      <ion-menu-toggle>
        <ion-button>Toggle Menu</ion-button>
      </ion-menu-toggle>
    </ion-content>
  </div>
</ion-app>
```



</TabItem>


<TabItem value="javascript">

```html
<ion-app>
  <ion-menu side="start" menu-id="first" content-id="main">
    <ion-header>
      <ion-toolbar color="secondary">
        <ion-title>Example Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>Menu Item</ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
  <div class="ion-page" id="main">
    <ion-content class="ion-padding">
      <ion-menu-toggle>
        <ion-button>Toggle Menu</ion-button>
      </ion-menu-toggle>
    </ion-content>
  </div>
</ion-app>
```



</TabItem>


<TabItem value="react">

```tsx
import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonMenuToggle, IonButton, IonPage } from '@ionic/react';

export const MenuExample: React.FC = () => (
  <>
    <IonMenu side="start" menuId="first" contentId="main">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Example Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>Menu Item</IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
    <IonPage id="main">
      <IonContent>
        <IonMenuToggle>
          <IonButton>Toggle Menu</IonButton>
        </IonMenuToggle>
      </IonContent>
    </IonPage>
  </>
);
```

</TabItem>


<TabItem value="vue">

```html
<template>
  <ion-menu side="start" menu-id="first" content-id="main">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Example Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>Menu Item</ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>

  <div class="ion-page" id="main">
    <ion-content>
      <ion-menu-toggle>
        <ion-button>Toggle Menu</ion-button>
      </ion-menu-toggle>
    </ion-content>
  </div>
</template>

<script>
import { 
  IonContent, 
  IonHeader, 
  IonItem, 
  IonList, 
  IonMenu, 
  IonMenuToggle,
  IonButton,
  IonTitle, 
  IonToolbar
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    IonContent, 
    IonHeader, 
    IonItem, 
    IonList, 
    IonMenu, 
    IonMenuToggle,
    IonButton,
    IonTitle, 
    IonToolbar
  }
});
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