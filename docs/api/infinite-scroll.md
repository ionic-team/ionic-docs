---
title: "ion-infinite-scroll"
---

import Props from '@ionic-internal/component-api/v7/infinite-scroll/props.md';
import Events from '@ionic-internal/component-api/v7/infinite-scroll/events.md';
import Methods from '@ionic-internal/component-api/v7/infinite-scroll/methods.md';
import Parts from '@ionic-internal/component-api/v7/infinite-scroll/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/infinite-scroll/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/infinite-scroll/slots.md';

<head>
  <title>Infinite Scroller | ion-infinite-scroll Action Component</title>
  <meta name="description" content="The ion-infinite-scroll component calls an action to be performed when the user scrolls a specified distance from the bottom or top of the page." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';


The Infinite Scroll component calls an action to be performed when the user scrolls a specified distance from the bottom or top of the page.

The expression assigned to the `ionInfinite` event is called when the user reaches that defined distance. When this expression has finished any and all tasks, it should call the `complete()` method on the infinite scroll instance.

import Basic from '@site/static/usage/v7/infinite-scroll/basic/index.md';

<Basic />

## Loading Text and Spinner

The `ion-infinite-scroll-content` is responsible for the visual display of the infinite scroll interaction. By default this component changes its look depending on the infinite scroll's state. It displays a spinner that looks best based on the platform the user is on. Both the spinner and loading text can be customized by setting properties on the `ion-infinite-scroll-content` component.

import InfiniteScrollContent from '@site/static/usage/v7/infinite-scroll/infinite-scroll-content/index.md';

<InfiniteScrollContent />

## Custom Content

Separating the `ion-infinite-scroll` and `ion-infinite-scroll-content` components allows developers to create their own content components, if desired. This content can contain anything, from an SVG element to elements with unique CSS animations.

import CustomContent from '@site/static/usage/v7/infinite-scroll/custom-infinite-scroll-content/index.md';

<CustomContent />

## Usage with Virtual Scroll

Infinite scroll requires a scroll container to function. When using a virtual scrolling solution, you will need to disable scrolling on the `ion-content` and indicate which element container is responsible for the scroll container with the `.ion-content-scroll-host` class target.

```html
<ion-content scroll-y="false">
  <virtual-scroll-element class="ion-content-scroll-host">
    <!-- Your virtual scroll content -->
  </virtual-scroll-element>
  <ion-infinite-scroll>
    <ion-infinite-scroll-content></ion-infinite-scroll-content>
  </ion-infinite-scroll>
</ion-content>
```

## Accessibility

Developers should assign the `role="feed"` attribute to the scrollable list of items that are added to or removed from as the user scrolls.

Individual list items should either have `role="article"` or use the `<article>` element directly.

For example, when rendering a collection of items in an `ion-list`:

```html
<ion-content role="feed">
  <ion-list>
    <ion-item role="article">
      First item
    </ion-item>
    <ion-item role="article">
      Second item
    </ion-item>
    ...
  </ion-list>

  <ion-infinite-scroll>
    <ion-infinite-scroll-content></ion-infinite-scroll-content>
  </ion-infinite-scroll>
</ion-content>
```

Please refer to the [ARIA: feed role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/feed_role) documentation for additional information.

## Interfaces

### InfiniteScrollCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface InfiniteScrollCustomEvent extends CustomEvent {
  target: HTMLIonInfiniteScrollElement;
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