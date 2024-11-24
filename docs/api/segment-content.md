---
title: "ion-segment-content"
---

import Props from '@ionic-internal/component-api/v8/segment-content/props.md';
import Events from '@ionic-internal/component-api/v8/segment-content/events.md';
import Methods from '@ionic-internal/component-api/v8/segment-content/methods.md';
import Parts from '@ionic-internal/component-api/v8/segment-content/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/segment-content/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/segment-content/slots.md';

<head>
  <title>ion-segment-content: Display control element for swipeable segments</title>
  <meta name="description" content="ion-segment-contents are wrapper elements used to control the display of child elements when using swipeable segments." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Segment content is a wrapper element used to control the display of child elements when using swipeable segments. Segment content elements are children of a single
[segment view](./segment-view.md) instance that is linked to a [segment](./segment.md). See our [swipeable segments](./segment.md#swipeable-segments) documentation
for more information on how to use segment contents.

## Usage

Each `ion-segment-content` needs a unique `id` attribute. This will be used to link the segment content to a segment button via the button's
[contentId property](./segment-button.md#properties).

<!-- Reuse swipeable segments playground -->

import Swipeable from '@site/static/usage/v8/segment/swipeable/index.md';

<Swipeable />

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