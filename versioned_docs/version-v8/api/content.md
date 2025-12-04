---
title: "ion-content"
---
import Props from '@ionic-internal/component-api/v8/content/props.md';
import Events from '@ionic-internal/component-api/v8/content/events.md';
import Methods from '@ionic-internal/component-api/v8/content/methods.md';
import Parts from '@ionic-internal/component-api/v8/content/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/content/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/content/slots.md';

<head>
  <title>ion-content: Scrollable Component for Ionic App Content</title>
  <meta name="description" content="ion-content provides an easy to use content area with useful methods to control the scrollable area. Learn more about this CSS component for Ionic apps." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


The content component provides an easy to use content area with some useful methods
to control the scrollable area. There should only be one content in a single
view.

Content, along with many other Ionic components, can be customized to modify its padding, margin, and more using the global styles provided in the [CSS Utilities](/docs/layout/css-utilities) or by individually styling it using CSS and the available [CSS Custom Properties](#css-custom-properties).


## Basic Usage

import Basic from '@site/static/usage/v8/content/basic/index.md';

<Basic />


## Header & Footer

Content can be the only top-level component in a page, or it can be used alongside a [header](./header), [footer](./footer), or both. When used with a header or footer, it will adjust its size to fill the remaining height.

import HeaderFooter from '@site/static/usage/v8/content/header-footer/index.md';

<HeaderFooter />


## Fullscreen Content

By default, content fills the space between a [header](./header) and [footer](./footer) but does not go behind them. In certain cases, it may be desired to have the content scroll behind the header and footer, such as when the `translucent` property is set on either of them, or `opacity` is set on the toolbar. This can be achieved by setting the `fullscreen` property on the content to `true`.

import Fullscreen from '@site/static/usage/v8/content/fullscreen/index.md';

<Fullscreen />


## Fixed Content

To place elements outside of the scrollable area, assign them to the `fixed` slot. Doing so will [absolutely position](https://developer.mozilla.org/en-US/docs/Web/CSS/position#absolute_positioning) the element to the top left of the content. In order to change the position of the element, it can be styled using the [top, right, bottom, and left](https://developer.mozilla.org/en-US/docs/Web/CSS/position) CSS properties.

The `fixedSlotPlacement` property is used to determine if content in the `fixed` slot is placed before or after the main content in the DOM. When set to `before`, fixed slot content will be placed before the main content and will therefore receive keyboard focus before the main content receives keyboard focus. This can be useful when the main content contains an infinitely-scrolling list, preventing a [FAB](./fab) or other fixed content from being reachable by pressing the tab key.

import Fixed from '@site/static/usage/v8/content/fixed/index.md';

<Fixed />

## Scroll Methods

Content provides [methods](#methods) that can be called to scroll the content to the bottom, top, or to a specific point. They can be passed a `duration` in order to smoothly transition instead of instantly changing the position.

import ScrollMethods from '@site/static/usage/v8/content/scroll-methods/index.md';

<ScrollMethods />

## Scroll Events

Scroll events are disabled by default for content due to performance. However, they can be enabled by setting `scrollEvents` to `true`. This is necessary before listening to any of the scroll [events](#events).

import ScrollEvents from '@site/static/usage/v8/content/scroll-events/index.md';

<ScrollEvents />


## Theming

### Colors

import Colors from '@site/static/usage/v8/content/theming/colors/index.md';

<Colors />

### CSS Shadow Parts

import CSSParts from '@site/static/usage/v8/content/theming/css-shadow-parts/index.md';

<CSSParts />

### CSS Custom Properties

import CSSProps from '@site/static/usage/v8/content/theming/css-properties/index.md';

<CSSProps />

### Safe Area Padding

The content component will not automatically apply padding to any of its sides to account for the [safe area](/docs/theming/advanced#safe-area-padding). This is because the content component is often used in conjunction with other components that apply their own padding, such as [headers](./header) and [footers](./footer). However, if the content component is being used on its own, it may be desired to apply padding to the safe area. This can be done through CSS by using the `--ion-safe-area-(dir)` variables described in [Application Variables](../theming/advanced.md#application-variables).

The most common use case for this is to apply padding to the top of the content to account for the status bar. This can be done by setting the `padding-top` property to the value of the `--ion-safe-area-top` variable.

```css
ion-content::part(scroll) {
  padding-top: var(--ion-safe-area-top, 0);
}
```

Another common use case is to apply padding to the left side of the content to account for the notch when the device is in landscape mode and the notch is on the left side. This can be done by setting the `padding-left` property to the value of the `--ion-safe-area-left` variable.

```css
ion-content::part(scroll) {
  padding-left: var(--ion-safe-area-left, 0);
}
```

import SafeArea from '@site/static/usage/v8/content/theming/safe-area/index.md';

<SafeArea />

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
