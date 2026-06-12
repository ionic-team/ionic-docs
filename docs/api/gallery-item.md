---
title: "ion-gallery-item"
---

import Props from '@ionic-internal/component-api/v9/gallery-item/props.md';
import Events from '@ionic-internal/component-api/v9/gallery-item/events.md';
import Methods from '@ionic-internal/component-api/v9/gallery-item/methods.md';
import Parts from '@ionic-internal/component-api/v9/gallery-item/parts.md';
import CustomProps from '@ionic-internal/component-api/v9/gallery-item/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v9/gallery-item/slots.md';

<head>
  <title>ion-gallery-item: Gallery Cell for Text, Images, and Cards</title>
  <meta
    name="description"
    content="ion-gallery-item wraps the content for a single cell in an ion-gallery, such as an image, card, or text. Read to learn more about gallery item usage."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Gallery Item is a child component of [Gallery](./gallery.md). It wraps the content for a single cell of the grid. The content can be plain text or any element, including an `img`, a `figure` with a caption, or a [Card](./card.md).

Gallery Items must be placed inside a Gallery, which arranges them and applies layout-specific styling to each item, such as a square aspect ratio in the uniform layout.

Refer to the [Gallery](./gallery.md) documentation for more information.

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
