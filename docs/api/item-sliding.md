---
title: "ion-item-sliding"
---
import Props from '@ionic-internal/component-api/v7/item-sliding/props.md';
import Events from '@ionic-internal/component-api/v7/item-sliding/events.md';
import Methods from '@ionic-internal/component-api/v7/item-sliding/methods.md';
import Parts from '@ionic-internal/component-api/v7/item-sliding/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/item-sliding/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/item-sliding/slots.md';

<head>
  <title>Slide Buttons | Slide Right to Left with ion-item-sliding</title>
  <meta name="description" content="ion-item-sliding component contains items that are dragged to reveal buttons. Options are revealed when the sliding item is swiped from left to right." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';


A sliding item contains an item that can be dragged to reveal option buttons. It requires an [item](./item) component as a child. All options to reveal should be placed in the [item options](./item-options) element.


## Basic Usage

Sliding item options are placed on the `"end"` side of the item by default. This means that options are revealed when the item is swiped from end to start, i.e. from right to left in LTR, but from left to right in RTL. To place them on the opposite side, so that they are revealed when swiping in the opposite direction, set the side attribute to `"start"` on the [item options](./item-options) element. Up to two item options can be used at the same time in order to reveal two different sets of options depending on the swiping direction.

import Basic from '@site/static/usage/v7/item-sliding/basic/index.md';

<Basic />


## Icon Options

When an icon is placed alongside text in the [item option](./item-option), it will display the icon on top of the text by default. The slot on the icon can be changed to any of the available [item option slots](./item-option#slots) to change its position.

import Icons from '@site/static/usage/v7/item-sliding/icons/index.md';

<Icons />


## Expandable Options

Options can be expanded to take up the full width of the item if you swipe past a certain point. This can be combined with the `ionSwipe` event on the [item options](./item-options) to call a method when the item is fully swiped.

import Expandable from '@site/static/usage/v7/item-sliding/expandable/index.md';

<Expandable />


## Interfaces

### ItemSlidingCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface ItemSlidingCustomEvent extends CustomEvent {
  target: HTMLIonItemSlidingElement;
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
