---
title: "ion-button"
hide_table_of_contents: true
demoUrl: "/docs/demos/api/button/index.html"
demoSourceUrl: "https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/button/index.html"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TOCInline from '@theme/TOCInline';

import Props from '@ionic-internal/component-api/v6/button/props.md';
import Events from '@ionic-internal/component-api/v6/button/events.md';
import Methods from '@ionic-internal/component-api/v6/button/methods.md';
import Parts from '@ionic-internal/component-api/v6/button/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/button/custom-props.md';
import Slots from '@ionic-internal/component-api/v6/button/slots.md';

<head>
  <title>ion-button: Design and Style Buttons with Custom CSS Properties</title>
  <meta name="description" content="ion-button は、標準的なボタン機能が必要な場所で使用するためのクリック可能な要素を提供します。カスタム CSS プロパティを使用して、ボタン要素をデザインし、スタイルを設定します。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

<h2 className="table-of-contents__title">コンテンツ</h2>

<TOCInline
  toc={toc}
  maxHeadingLevel={2}
/>



Buttonはクリック可能な要素を提供し、Form内や、標準の単機能なButton機能を必要とする任意の場所で使用できます。text、icon、またはその両方を表示できます。Buttonは、いくつかの属性を利用して特定の外観になるようにスタイル設定できます。

## Expand

この属性では、Buttonの横幅を指定します。デフォルトでは、ボタンはinline-blockですが、Expandを設定すると、Buttonは横幅100%のblock要素になります。

| Value          | Details                                                                      |
|----------------|------------------------------------------------------------------------------|
| `block`        | Full-width button with rounded corners.                                      |
| `full`         | Full-width button with square corners and no border on the left or right.    |

## Fill

この属性は、Buttonのbackgroundとborder-colorを設定します。デフォルトでは、Buttonはtoolbar内にない限り、backgroundは塗りつぶされます。toolbar内にある場合は、backgroundは透明になります。

| Value          | Details                                                                      |
|----------------|------------------------------------------------------------------------------|
| `clear`        | Button with a transparent background that resembles a flat button.           |
| `outline`      | Button with a transparent background and a visible border.                   |
| `solid`        | Button with a filled background. Useful for buttons in a toolbar.            |

## Size

この属性は、Buttonのサイズを指定します。この属性を設定すると、Buttonの高さとpaddingが変更されます。

| Value          | Details                                                                      |
|----------------|------------------------------------------------------------------------------|
| `small`        | Button with less height and padding. Default for buttons in an item.         |
| `default`      | Button with the default height and padding. Useful for buttons in an item.   |
| `large`        | Button with more height and padding.                                         |




## 使い方

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">


```html
<!-- Default -->
<ion-button>Default</ion-button>

<!-- Anchor -->
<ion-button href="#">Anchor</ion-button>

<!-- Colors -->
<ion-button color="primary">Primary</ion-button>
<ion-button color="secondary">Secondary</ion-button>
<ion-button color="tertiary">Tertiary</ion-button>
<ion-button color="success">Success</ion-button>
<ion-button color="warning">Warning</ion-button>
<ion-button color="danger">Danger</ion-button>
<ion-button color="light">Light</ion-button>
<ion-button color="medium">Medium</ion-button>
<ion-button color="dark">Dark</ion-button>

<!-- Expand -->
<ion-button expand="full">Full Button</ion-button>
<ion-button expand="block">Block Button</ion-button>

<!-- Round -->
<ion-button shape="round">Round Button</ion-button>

<!-- Fill -->
<ion-button expand="full" fill="outline">Outline + Full</ion-button>
<ion-button expand="block" fill="outline">Outline + Block</ion-button>
<ion-button shape="round" fill="outline">Outline + Round</ion-button>

<!-- Icons -->
<ion-button>
  <ion-icon slot="start" name="star"></ion-icon>
  Left Icon
</ion-button>

<ion-button>
  Right Icon
  <ion-icon slot="end" name="star"></ion-icon>
</ion-button>

<ion-button>
  <ion-icon slot="icon-only" name="star"></ion-icon>
</ion-button>

<!-- Sizes -->
<ion-button size="large">Large</ion-button>
<ion-button>Default</ion-button>
<ion-button size="small">Small</ion-button>
```


</TabItem>


<TabItem value="javascript">


```html
<!-- Default -->
<ion-button>Default</ion-button>

<!-- Anchor -->
<ion-button href="#">Anchor</ion-button>

<!-- Colors -->
<ion-button color="primary">Primary</ion-button>
<ion-button color="secondary">Secondary</ion-button>
<ion-button color="tertiary">Tertiary</ion-button>
<ion-button color="success">Success</ion-button>
<ion-button color="warning">Warning</ion-button>
<ion-button color="danger">Danger</ion-button>
<ion-button color="light">Light</ion-button>
<ion-button color="medium">Medium</ion-button>
<ion-button color="dark">Dark</ion-button>

<!-- Expand -->
<ion-button expand="full">Full Button</ion-button>
<ion-button expand="block">Block Button</ion-button>

<!-- Round -->
<ion-button shape="round">Round Button</ion-button>

<!-- Fill -->
<ion-button expand="full" fill="outline">Outline + Full</ion-button>
<ion-button expand="block" fill="outline">Outline + Block</ion-button>
<ion-button shape="round" fill="outline">Outline + Round</ion-button>

<!-- Icons -->
<ion-button>
  <ion-icon slot="start" name="star"></ion-icon>
  Left Icon
</ion-button>

<ion-button>
  Right Icon
  <ion-icon slot="end" name="star"></ion-icon>
</ion-button>

<ion-button>
  <ion-icon slot="icon-only" name="star"></ion-icon>
</ion-button>

<!-- Sizes -->
<ion-button size="large">Large</ion-button>
<ion-button>Default</ion-button>
<ion-button size="small">Small</ion-button>
```


</TabItem>


<TabItem value="react">

```tsx
import React from 'react';

import { IonButton, IonIcon, IonContent } from '@ionic/react';
import { star } from 'ionicons/icons';

export const ButtonExample: React.FC = () => (
  <IonContent>
    {/*-- Default --*/}
    <IonButton>Default</IonButton>

    {/*-- Anchor --*/}
    <IonButton href="#">Anchor</IonButton>

    {/*-- Colors --*/}
    <IonButton color="primary">Primary</IonButton>
    <IonButton color="secondary">Secondary</IonButton>
    <IonButton color="tertiary">Tertiary</IonButton>
    <IonButton color="success">Success</IonButton>
    <IonButton color="warning">Warning</IonButton>
    <IonButton color="danger">Danger</IonButton>
    <IonButton color="light">Light</IonButton>
    <IonButton color="medium">Medium</IonButton>
    <IonButton color="dark">Dark</IonButton>

    {/*-- Expand --*/}
    <IonButton expand="full">Full Button</IonButton>
    <IonButton expand="block">Block Button</IonButton>

    {/*-- Round --*/}
    <IonButton shape="round">Round Button</IonButton>

    {/*-- Fill --*/}
    <IonButton expand="full" fill="outline">Outline + Full</IonButton>
    <IonButton expand="block" fill="outline">Outline + Block</IonButton>
    <IonButton shape="round" fill="outline">Outline + Round</IonButton>

    {/*-- Icons --*/}
    <IonButton>
      <IonIcon slot="start" icon={star} />
      Left Icon
    </IonButton>

    <IonButton>
      Right Icon
      <IonIcon slot="end" icon={star} />
    </IonButton>

    <IonButton>
      <IonIcon slot="icon-only" icon={star} />
    </IonButton>

    {/*-- Sizes --*/}
    <IonButton size="large">Large</IonButton>
    <IonButton>Default</IonButton>
    <IonButton size="small">Small</IonButton>
  </IonContent>
);

```


</TabItem>


<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'button-example',
  styleUrl: 'button-example.css'
})
export class ButtonExample {
  render() {
    return [
      // Default
      <ion-button>Default</ion-button>,

      // Anchor
      <ion-button href="#">Anchor</ion-button>,

      // Colors
      <ion-button color="primary">Primary</ion-button>,
      <ion-button color="secondary">Secondary</ion-button>,
      <ion-button color="tertiary">Tertiary</ion-button>,
      <ion-button color="success">Success</ion-button>,
      <ion-button color="warning">Warning</ion-button>,
      <ion-button color="danger">Danger</ion-button>,
      <ion-button color="light">Light</ion-button>,
      <ion-button color="medium">Medium</ion-button>,
      <ion-button color="dark">Dark</ion-button>,

      // Expand
      <ion-button expand="full">Full Button</ion-button>,
      <ion-button expand="block">Block Button</ion-button>,

      // Round
      <ion-button shape="round">Round Button</ion-button>,

      // Fill
      <ion-button expand="full" fill="outline">Outline + Full</ion-button>,
      <ion-button expand="block" fill="outline">Outline + Block</ion-button>,
      <ion-button shape="round" fill="outline">Outline + Round</ion-button>,

      // Icons
      <ion-button>
        <ion-icon slot="start" name="star"></ion-icon>
        Left Icon
      </ion-button>,

      <ion-button>
        Right Icon
        <ion-icon slot="end" name="star"></ion-icon>
      </ion-button>,

      <ion-button>
        <ion-icon slot="icon-only" name="star"></ion-icon>
      </ion-button>,

      // Sizes
      <ion-button size="large">Large</ion-button>,
      <ion-button>Default</ion-button>,
      <ion-button size="small">Small</ion-button>
    ];
  }
}
```

</TabItem>


<TabItem value="vue">

```html
<template>
  <!-- Default -->
  <ion-button>Default</ion-button>

  <!-- Anchor -->
  <ion-button href="#">Anchor</ion-button>

  <!-- Colors -->
  <ion-button color="primary">Primary</ion-button>
  <ion-button color="secondary">Secondary</ion-button>
  <ion-button color="tertiary">Tertiary</ion-button>
  <ion-button color="success">Success</ion-button>
  <ion-button color="warning">Warning</ion-button>
  <ion-button color="danger">Danger</ion-button>
  <ion-button color="light">Light</ion-button>
  <ion-button color="medium">Medium</ion-button>
  <ion-button color="dark">Dark</ion-button>

  <!-- Expand -->
  <ion-button expand="full">Full Button</ion-button>
  <ion-button expand="block">Block Button</ion-button>

  <!-- Round -->
  <ion-button shape="round">Round Button</ion-button>

  <!-- Fill -->
  <ion-button expand="full" fill="outline">Outline + Full</ion-button>
  <ion-button expand="block" fill="outline">Outline + Block</ion-button>
  <ion-button shape="round" fill="outline">Outline + Round</ion-button>

  <!-- Icons -->
  <ion-button>
    <ion-icon slot="start" name="star"></ion-icon>
    Left Icon
  </ion-button>

  <ion-button>
    Right Icon
    <ion-icon slot="end" name="star"></ion-icon>
  </ion-button>

  <ion-button>
    <ion-icon slot="icon-only" name="star"></ion-icon>
  </ion-button>

  <!-- Sizes -->
  <ion-button size="large">Large</ion-button>
  <ion-button>Default</ion-button>
  <ion-button size="small">Small</ion-button>
</template>

<script>
import { IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonButton }
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