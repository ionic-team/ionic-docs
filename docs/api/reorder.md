---
title: "ion-reorder"
---
import Props from '@site/static/auto-generated/reorder/props.md';
import Events from '@site/static/auto-generated/reorder/events.md';
import Methods from '@site/static/auto-generated/reorder/methods.md';
import Parts from '@site/static/auto-generated/reorder/parts.md';
import CustomProps from '@site/static/auto-generated/reorder/custom-props.md';
import Slots from '@site/static/auto-generated/reorder/slots.md';

<head>
  <title>Reorder | ion-reorder: Drag and Drop Icon to Reorder Items</title>
  <meta name="description" content="Ion-reorder is the anchor used to drag and drop the items inside of the ion-reorder-group. Read to learn more about custom reorder icons and items." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


Reorder is a component that allows an item in a group of items to be dragged to change its order within that group. It must be used within a [reorder group](./reorder-group) to provide a visual drag and drop interface.

The reorder is the anchor used to drag and drop the items. Once the reorder is complete, the `complete()` method on the reorder group needs to be called.


## Basic Usage

import Basic from '@site/static/usage/reorder/basic/index.md';

<Basic />


## Custom Reorder Icon

The reorder component uses a reorder icon with three lines on iOS and two lines on Material Design. This can be customized by adding an [Icon](https://ionic.io/ionicons) component inside of the reorder with any of the available Ionicons.

import CustomIcon from '@site/static/usage/reorder/custom-icon/index.md';

<CustomIcon />


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
