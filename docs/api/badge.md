---
title: "ion-badge"
hide_table_of_contents: true
demoUrl: "/docs/demos/api/badge/index.html"
demoSourceUrl: "https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/badge/index.html"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TOCInline from '@theme/TOCInline';

import Props from '@ionic-internal/component-api/v6/badge/props.md';
import Events from '@ionic-internal/component-api/v6/badge/events.md';
import Methods from '@ionic-internal/component-api/v6/badge/methods.md';
import Parts from '@ionic-internal/component-api/v6/badge/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/badge/custom-props.md';
import Slots from '@ionic-internal/component-api/v6/badge/slots.md';

<head>
  <title>Badges | ion-badge: iOS & Android App Notification Badge Icons</title>
  <meta name="description" content="BadgesはiOS/Androidアプリで他の要素の近くに表示されるインラインブロック要素で、アイテムの数を示す通知として使用します。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

<h2 className="table-of-contents__title">コンテンツ</h2>

<TOCInline
  toc={toc}
  maxHeadingLevel={2}
/>



Badgeは、通常は別の要素の近くに表示されるinline-block要素です。通常は、数字またはその他の文字とともに利用します。これらは、要素に関連付けられた未読のアイテムがあることの通知として使用でき、アイテムの数を示します。




## 使い方

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<!-- Default -->
<ion-badge>99</ion-badge>

<!-- Colors -->
<ion-badge color="primary">11</ion-badge>
<ion-badge color="secondary">22</ion-badge>
<ion-badge color="tertiary">33</ion-badge>
<ion-badge color="success">44</ion-badge>
<ion-badge color="warning">55</ion-badge>
<ion-badge color="danger">66</ion-badge>
<ion-badge color="light">77</ion-badge>
<ion-badge color="medium">88</ion-badge>
<ion-badge color="dark">99</ion-badge>

<!-- Item with badge on left and right -->
<ion-item>
  <ion-badge slot="start">11</ion-badge>
  <ion-label>My Item</ion-label>
  <ion-badge slot="end">22</ion-badge>
</ion-item>
```

</TabItem>


<TabItem value="javascript">

```html
<!-- Default -->
<ion-badge>99</ion-badge>

<!-- Colors -->
<ion-badge color="primary">11</ion-badge>
<ion-badge color="secondary">22</ion-badge>
<ion-badge color="tertiary">33</ion-badge>
<ion-badge color="success">44</ion-badge>
<ion-badge color="warning">55</ion-badge>
<ion-badge color="danger">66</ion-badge>
<ion-badge color="light">77</ion-badge>
<ion-badge color="medium">88</ion-badge>
<ion-badge color="dark">99</ion-badge>

<!-- Item with badge on left and right -->
<ion-item>
  <ion-badge slot="start">11</ion-badge>
  <ion-label>My Item</ion-label>
  <ion-badge slot="end">22</ion-badge>
</ion-item>
```

</TabItem>


<TabItem value="react">

```tsx
import React from 'react';
import { IonBadge, IonItem, IonLabel, IonContent } from '@ionic/react';

export const BadgeExample: React.FC = () => (
  <IonContent>
    {/*-- Default --*/}
    <IonBadge>99</IonBadge>

    {/*-- Colors --*/}
    <IonBadge color="primary">11</IonBadge>
    <IonBadge color="secondary">22</IonBadge>
    <IonBadge color="tertiary">33</IonBadge>
    <IonBadge color="success">44</IonBadge>
    <IonBadge color="warning">55</IonBadge>
    <IonBadge color="danger">66</IonBadge>
    <IonBadge color="light">77</IonBadge>
    <IonBadge color="medium">88</IonBadge>
    <IonBadge color="dark">99</IonBadge>

    {/*-- Item with badge on left and right --*/}
    <IonItem>
      <IonBadge slot="start">11</IonBadge>
      <IonLabel>My Item</IonLabel>
      <IonBadge slot="end">22</IonBadge>
    </IonItem>
  </IonContent>
);
```


</TabItem>


<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'badge-example',
  styleUrl: 'badge-example.css'
})
export class BadgeExample {
  render() {
    return [
      // Default
      <ion-badge>99</ion-badge>,

      // Colors
      <ion-badge color="primary">11</ion-badge>,
      <ion-badge color="secondary">22</ion-badge>,
      <ion-badge color="tertiary">33</ion-badge>,
      <ion-badge color="success">44</ion-badge>,
      <ion-badge color="warning">55</ion-badge>,
      <ion-badge color="danger">66</ion-badge>,
      <ion-badge color="light">77</ion-badge>,
      <ion-badge color="medium">88</ion-badge>,
      <ion-badge color="dark">99</ion-badge>,

      // Item with badge on left and right
      <ion-item>
        <ion-badge slot="start">11</ion-badge>
        <ion-label>My Item</ion-label>
        <ion-badge slot="end">22</ion-badge>
      </ion-item>
    ];
  }
}
```

</TabItem>


<TabItem value="vue">

```html
<template>
  <!-- Default -->
  <ion-badge>99</ion-badge>

  <!-- Colors -->
  <ion-badge color="primary">11</ion-badge>
  <ion-badge color="secondary">22</ion-badge>
  <ion-badge color="tertiary">33</ion-badge>
  <ion-badge color="success">44</ion-badge>
  <ion-badge color="warning">55</ion-badge>
  <ion-badge color="danger">66</ion-badge>
  <ion-badge color="light">77</ion-badge>
  <ion-badge color="medium">88</ion-badge>
  <ion-badge color="dark">99</ion-badge>

  <!-- Item with badge on left and right -->
  <ion-item>
    <ion-badge slot="start">11</ion-badge>
    <ion-label>My Item</ion-label>
    <ion-badge slot="end">22</ion-badge>
  </ion-item>
</template>

<script>
import { IonBadge, IonItem, IonLabel } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonBadge, IonItem, IonLabel }
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