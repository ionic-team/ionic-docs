---
title: "ion-content"
---
import Props from '@site/static/auto-generated/content/props.md';
import Events from '@site/static/auto-generated/content/events.md';
import Methods from '@site/static/auto-generated/content/methods.md';
import Parts from '@site/static/auto-generated/content/parts.md';
import CustomProps from '@site/static/auto-generated/content/custom-props.md';
import Slots from '@site/static/auto-generated/content/slots.md';

<head>
  <title>ion-content: Scrollable CSS Component for Ionic App Content Areas</title>
  <meta name="description" content="ion-contentは、スクロール可能な領域を制御する便利なメソッドを備えた、使いやすいコンテンツ領域を提供します。このIonicアプリ用CSSコンポーネントの詳細については、こちらをご覧ください。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


Contentコンポーネントは、スクロール可能領域を制御するいくつかの便利なメソッドを備えた、
使いやすいコンテンツ領域を提供します。
1つのビューに表示できるコンテンツは1つだけです。

Contentは、他の多くのIonicコンポーネントと同様に、 [CSS Utilities](/docs/layout/css-utilities) で提供されるグローバルスタイルを使用するか、CSSおよび使用可能な [CSS Custom Properties](#css-custom-properties) を使用して個別にスタイル設定することによって、`padding` や `margin` などを変更するようにカスタマイズできます。


## Basic Usage

import Basic from '@site/static/usage/v7/content/basic/index.md';

<Basic />


## Header & Footer

Content can be the only top-level component in a page, or it can be used alongside a [header](./header), [footer](./footer), or both. When used with a header or footer, it will adjust its size to fill the remaining height.

import HeaderFooter from '@site/static/usage/v7/content/header-footer/index.md';

<HeaderFooter />


## Fullscreen Content

By default, content fills the space between a [header](./header) and [footer](./footer) but does not go behind them. In certain cases, it may be desired to have the content scroll behind the header and footer, such as when the `translucent` property is set on either of them, or `opacity` is set on the toolbar. This can be achieved by setting the `fullscreen` property on the content to `true`.

import Fullscreen from '@site/static/usage/v7/content/fullscreen/index.md';

<Fullscreen />


## Fixed Content

<<<<<<< HEAD
スクロール可能な領域の外側に要素を配置するために、要素に `slot="fixed"` を追加することができます。これは、要素を左上に絶対配置します。それ以外の場所に配置するには、[top, right, bottom, left](https://developer.mozilla.org/en-US/docs/Web/CSS/position) でスタイルを指定します。
=======
To place elements outside of the scrollable area, assign them to the `fixed` slot. Doing so will [absolutely position](https://developer.mozilla.org/en-US/docs/Web/CSS/position#absolute_positioning) the element to the top left of the content. In order to change the position of the element, it can be styled using the [top, right, bottom, and left](https://developer.mozilla.org/en-US/docs/Web/CSS/position) CSS properties.

import Fixed from '@site/static/usage/v7/content/fixed/index.md';

<Fixed />

## Scroll Methods

Content provides [methods](#methods) that can be called to scroll the content to the bottom, top, or to a specific point. They can be passed a `duration` in order to smoothly transition instead of instantly changing the position.

import ScrollMethods from '@site/static/usage/v7/content/scroll-methods/index.md';

<ScrollMethods />

## Scroll Events

Scroll events are disabled by default for content due to performance. However, they can be enabled by setting `scrollEvents` to `true`. This is necessary before listening to any of the scroll [events](#events).

import ScrollEvents from '@site/static/usage/v7/content/scroll-events/index.md';

<ScrollEvents />


## Theming

### Colors

import Colors from '@site/static/usage/v7/content/theming/colors/index.md';

<Colors />

### CSS Shadow Parts

import CSSParts from '@site/static/usage/v7/content/theming/css-shadow-parts/index.md';

<CSSParts />

### CSS Custom Properties

import CSSProps from '@site/static/usage/v7/content/theming/css-properties/index.md';

<CSSProps />

>>>>>>> 99d3f5222ffbfc340f268bf630572d37e9d9586b

## Interfaces

### ScrollBaseDetail

```typescript
interface ScrollBaseDetail {
  isScrolling: boolean;
}
```

### ScrollDetail

```typescript
interface ScrollDetail extends GestureDetail, ScrollBaseDetail {
  scrollTop: number;
  scrollLeft: number;
}
```

### ScrollBaseCustomEvent

必須ではありませんが、`ionScrollStart` と `ionScrollEnd` イベントをより強く型付けするために、`CustomEvent` インターフェースの代わりにこのインターフェースを利用することが可能です。

```typescript
interface ScrollBaseCustomEvent extends CustomEvent {
  detail: ScrollBaseDetail;
  target: HTMLIonContentElement;
}
```

### ScrollCustomEvent

必須ではありませんが、`ionScroll` イベントをより強く型付けするために、`CustomEvent` インターフェースの代わりにこのインターフェースを利用することが可能です。

```typescript
interface ScrollCustomEvent extends ScrollBaseCustomEvent {
  detail: ScrollDetail;
}
```


<<<<<<< HEAD


## 使い方

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-content
  [scrollEvents]="true"
  (ionScrollStart)="logScrollStart()"
  (ionScroll)="logScrolling($event)"
  (ionScrollEnd)="logScrollEnd()">
    <h1>Main Content</h1>

    <div slot="fixed">
      <h1>Fixed Content</h1>
    </div>
</ion-content>
```



</TabItem>


<TabItem value="javascript">

```html
<ion-content>
  <h1>Main Content</h1>

  <div slot="fixed">
    <h1>Fixed Content</h1>
  </div>
</ion-content>
```

```javascript
var content = document.querySelector('ion-content');
content.scrollEvents = true;
content.addEventListener('ionScrollStart', () => console.log('scroll start'));
content.addEventListener('ionScroll', (ev) => console.log('scroll', ev.detail));
content.addEventListener('ionScrollEnd', () => console.log('scroll end'));
```


</TabItem>


<TabItem value="react">

```tsx
import React from 'react';
import { IonContent } from '@ionic/react';

const ContentExample: React.FC = () => (
  <IonContent
    scrollEvents={true}
    onIonScrollStart={() => {}}
    onIonScroll={() => {}}
    onIonScrollEnd={() => {}}>
      <h1>Main Content</h1>

      <div slot="fixed">
        <h1>Fixed Content</h1>
      </div>
  </IonContent>
);
```


</TabItem>


<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'content-example',
  styleUrl: 'content-example.css'
})
export class ContentExample {
  logScrollStart() {
    console.log('Scroll start');
  }

  logScrolling(ev) {
    console.log('Scrolling', ev);
  }

  logScrollEnd() {
    console.log('Scroll end');
  }

  render() {
    return [
      <ion-content
        scrollEvents={true}
        onIonScrollStart={() => this.logScrollStart()}
        onIonScroll={(ev) => this.logScrolling(ev)}
        onIonScrollEnd={() => this.logScrollEnd()}>
          <h1>Main Content</h1>

          <div slot="fixed">
            <h1>Fixed Content</h1>
          </div>
      </ion-content>
    ];
  }
}
```


</TabItem>


<TabItem value="vue">

```html
<template>
  <ion-content
    :scroll-events="true"
    @ionScrollStart="logScrollStart()"
    @ionScroll="logScrolling($event)"
    @ionScrollEnd="logScrollEnd()">
      <h1>Main Content</h1>

      <div slot="fixed">
        <h1>Fixed Content</h1>
      </div>
  </ion-content>
</template>

<script>
import { IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonContent }
});
</script>

```



</TabItem>

</Tabs>

## プロパティ
=======
## Properties
>>>>>>> 99d3f5222ffbfc340f268bf630572d37e9d9586b
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
