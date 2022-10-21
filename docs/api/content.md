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
  <meta name="description" content="ion-content provides an easy to use content area with useful methods to control the scrollable area. Learn more about this CSS component for Ionic apps." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


The content component provides an easy to use content area with some useful methods
to control the scrollable area. There should only be one content in a single
view.

Content, along with many other Ionic components, can be customized to modify its padding, margin, and more using the global styles provided in the [CSS Utilities](/docs/layout/css-utilities) or by individually styling it using CSS and the available [CSS Custom Properties](#css-custom-properties).


## Basic Usage

import Basic from '@site/static/usage/content/basic/index.md';

<Basic />


## Header & Footer

import HeaderFooter from '@site/static/usage/content/header-footer/index.md';

<HeaderFooter />


## Fullscreen Content

import Fullscreen from '@site/static/usage/content/fullscreen/index.md';

<Fullscreen />


## Fixed Content

To place elements outside of the scrollable area, assign them to the `fixed` slot. Doing so will [absolutely position](https://developer.mozilla.org/en-US/docs/Web/CSS/position#absolute_positioning) the element to the top left of the content. In order to change the position of the element, it can be styled using the [top, right, bottom, and left](https://developer.mozilla.org/en-US/docs/Web/CSS/position) CSS properties.

import Fixed from '@site/static/usage/content/fixed/index.md';

<Fixed />

## Scroll Methods

import ScrollMethods from '@site/static/usage/content/scroll-methods/index.md';

<ScrollMethods />

## Scroll Events


import ScrollEvents from '@site/static/usage/content/scroll-events/index.md';

<ScrollEvents />


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

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing on the `ionScrollStart` and `ionScrollEnd` events.

```typescript
interface ScrollBaseCustomEvent extends CustomEvent {
  detail: ScrollBaseDetail;
  target: HTMLIonContentElement;
}
```

### ScrollCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing on the `ionScroll` event.

```typescript
interface ScrollCustomEvent extends ScrollBaseCustomEvent {
  detail: ScrollDetail;
}
```


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
