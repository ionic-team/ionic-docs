---
title: "ion-thumbnail"
---

import Props from '@ionic-internal/component-api/v7/thumbnail/props.md';
import Events from '@ionic-internal/component-api/v7/thumbnail/events.md';
import Methods from '@ionic-internal/component-api/v7/thumbnail/methods.md';
import Parts from '@ionic-internal/component-api/v7/thumbnail/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/thumbnail/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/thumbnail/slots.md';

<head>
  <title>ion-thumbnail | Thumbnail App Component to Wrap Images or Icons</title>
  <meta name="description" content="What is a thumbnail image? Thumbnail app components wrap an image or icon and can be used to display a layout of images or for previews of full-size images." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Thumbnails are square components that usually wrap an image or icon. They can be used to make it easier to display a group of larger images or provide a preview of the full-size image.

Thumbnails can be used by themselves or inside of any element. If placed inside of an `ion-item`, the thumbnail will resize to fit the parent component. To position a thumbnail on the left or right side of an item, set the slot to `start` or `end`, respectively.

## Basic Usage

import Basic from '@site/static/usage/v7/thumbnail/basic/index.md';

<Basic />

## Item Thumbnails

import Item from '@site/static/usage/v7/thumbnail/item/index.md';

<Item />

## Theming

### CSS Custom Properties

import CSSProps from '@site/static/usage/v7/thumbnail/theming/css-properties/index.md';

<CSSProps />

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
