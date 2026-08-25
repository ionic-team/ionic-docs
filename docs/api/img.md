---
title: "ion-img"
---

import Props from '@ionic-internal/component-api/v9/img/props.mdx';
import Events from '@ionic-internal/component-api/v9/img/events.mdx';
import Methods from '@ionic-internal/component-api/v9/img/methods.mdx';
import Parts from '@ionic-internal/component-api/v9/img/parts.mdx';
import CustomProps from '@ionic-internal/component-api/v9/img/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v9/img/slots.mdx';

<head>
  <title>ion-img: Img Tag to Lazy Load Images in Viewport</title>
  <meta name="description" content="The ion-img component lazily loads images as they enter the viewport. It is deprecated in favor of a native img tag with lazy loading." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

:::warning[Deprecated]
`ion-img` is deprecated and will be removed in Ionic 10. Use a native `<img>` tag with [loading="lazy"](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img#loading) instead. Refer to the [migration guide](../updating/9-0.md#img) for details on replacing events and styling.
:::

Img is a tag that will lazily load an image whenever the tag is in the viewport. This is extremely useful when generating a large list as images are only loaded when they're visible. The component uses [Intersection Observer](https://caniuse.com/#feat=intersectionobserver) internally, which is supported in most modern browsers, but falls back to a `setTimeout` when it is not supported.

## Basic Usage

import Basic from '@site/static/usage/v9/img/basic/index.md';

<Basic />

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
