---
title: "ion-fab-button"
hide_table_of_contents: true
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TOCInline from '@theme/TOCInline';

import Props from '@ionic-internal/component-api/v6/fab-button/props.md';
import Events from '@ionic-internal/component-api/v6/fab-button/events.md';
import Methods from '@ionic-internal/component-api/v6/fab-button/methods.md';
import Parts from '@ionic-internal/component-api/v6/fab-button/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/fab-button/custom-props.md';
import Slots from '@ionic-internal/component-api/v6/fab-button/slots.md';

<head>
  <title>Floating Action Button | Ionic FAB Button Icon for Primary Action</title>
  <meta name="description" content="フローティング・アクション・ボタン（FAB）は、アプリ内の主要なアクションを表します。アイコンは円形で、ボタンを押すと、関連するアクションを開くことができます。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

<h2 className="table-of-contents__title">コンテンツ</h2>

<TOCInline
  toc={toc}
  maxHeadingLevel={2}
/>



Floating Action Buttons (FABs) は、アプリケーションでの主要なアクションを表します。デフォルトでは、円形状になっています。ボタンを押すと、関連するアクションがさらに開きます。名前が示すように、FABは通常、固定された位置で内容の上に浮動します。これは、 `<ion-fab-button>FAB</ion-fab-button>` だけで実装することはできません。コンテンツを固定するには、 `<ion-fab>` コンポーネントでラップする必要があります。

FABボタンが `<ion-fab>` で囲まれていない場合は、`content` とともにスクロールします。FABボタンには、default size と mini size があり、異なるcolorを使用できます:



## 使い方

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-content>

  <!-- Fixed Floating Action Button that does not scroll with the content -->
  <ion-fab slot="fixed">
    <ion-fab-button>Button</ion-fab-button>
  </ion-fab>

  <!-- Default Floating Action Button that scrolls with the content.-->
  <ion-fab-button>Default</ion-fab-button>

  <!-- Mini -->
  <ion-fab-button size="small">Mini</ion-fab-button>

  <!-- Colors -->
  <ion-fab-button color="primary">Primary</ion-fab-button>
  <ion-fab-button color="secondary">Secondary</ion-fab-button>
  <ion-fab-button color="danger">Danger</ion-fab-button>
  <ion-fab-button color="light">Light</ion-fab-button>
  <ion-fab-button color="dark">Dark</ion-fab-button>

</ion-content>
```


</TabItem>


<TabItem value="javascript">

```html
<ion-content>

  <!-- Fixed Floating Action Button that does not scroll with the content -->
  <ion-fab slot="fixed">
    <ion-fab-button>Button</ion-fab-button>
  </ion-fab>

  <!-- Default Floating Action Button that scrolls with the content.-->
  <ion-fab-button>Default</ion-fab-button>

  <!-- Mini -->
  <ion-fab-button size="small">Mini</ion-fab-button>

  <!-- Colors -->
  <ion-fab-button color="primary">Primary</ion-fab-button>
  <ion-fab-button color="secondary">Secondary</ion-fab-button>
  <ion-fab-button color="danger">Danger</ion-fab-button>
  <ion-fab-button color="light">Light</ion-fab-button>
  <ion-fab-button color="dark">Dark</ion-fab-button>

</ion-content>
```


</TabItem>


<TabItem value="react">

```tsx
import React from 'react';
import { IonContent, IonFab, IonFabButton } from '@ionic/react';

export const FabButtonExample: React.FC = () => (
  <IonContent>
    {/*-- Fixed Floating Action Button that does not scroll with the content --*/}
    <IonFab slot="fixed">
      <IonFabButton>Button</IonFabButton>
    </IonFab>

    {/*-- Default Floating Action Button that scrolls with the content.--*/}
    <IonFabButton>Default</IonFabButton>

    {/*-- Mini --*/}
    <IonFabButton size="small">Mini</IonFabButton>

    {/*-- Colors --*/}
    <IonFabButton color="primary">Primary</IonFabButton>
    <IonFabButton color="secondary">Secondary</IonFabButton>
    <IonFabButton color="danger">Danger</IonFabButton>
    <IonFabButton color="light">Light</IonFabButton>
    <IonFabButton color="dark">Dark</IonFabButton>
  </IonContent>
);
```

</TabItem>


<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'fab-button-example',
  styleUrl: 'fab-button-example.css'
})
export class FabButtonExample {
  render() {
    return [
      <ion-content>

        {/* Fixed Floating Action Button that does not scroll with the content */}
        <ion-fab slot="fixed">
          <ion-fab-button>Button</ion-fab-button>
        </ion-fab>

        {/* Default Floating Action Button that scrolls with the content */}
        <ion-fab-button>Default</ion-fab-button>

        {/* Mini */}
        <ion-fab-button size="small">Mini</ion-fab-button>

        {/* Colors */}
        <ion-fab-button color="primary">Primary</ion-fab-button>
        <ion-fab-button color="secondary">Secondary</ion-fab-button>
        <ion-fab-button color="danger">Danger</ion-fab-button>
        <ion-fab-button color="light">Light</ion-fab-button>
        <ion-fab-button color="dark">Dark</ion-fab-button>

      </ion-content>
    ];
  }
}
```

</TabItem>


<TabItem value="vue">

```html
<template>
  <ion-content>

    <!-- Fixed Floating Action Button that does not scroll with the content -->
    <ion-fab slot="fixed">
      <ion-fab-button>Button</ion-fab-button>
    </ion-fab>

    <!-- Default Floating Action Button that scrolls with the content.-->
    <ion-fab-button>Default</ion-fab-button>

    <!-- Mini -->
    <ion-fab-button size="small">Mini</ion-fab-button>

    <!-- Colors -->
    <ion-fab-button color="primary">Primary</ion-fab-button>
    <ion-fab-button color="secondary">Secondary</ion-fab-button>
    <ion-fab-button color="danger">Danger</ion-fab-button>
    <ion-fab-button color="light">Light</ion-fab-button>
    <ion-fab-button color="dark">Dark</ion-fab-button>

  </ion-content>
</template>

<script>
import { IonContent, IonFab, IonFabButton } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonContent, IonFab, IonFabButton }
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