---
title: "ion-label"
---
import Props from '@ionic-internal/component-api/v7/label/props.md';
import Events from '@ionic-internal/component-api/v7/label/events.md';
import Methods from '@ionic-internal/component-api/v7/label/methods.md';
import Parts from '@ionic-internal/component-api/v7/label/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/label/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/label/slots.md';

<head>
  <title>ion-label: Item Label Color and Properties for Applications</title>
  <meta name="description" content="Label is a wrapper element that can be used in combination with other Ionic components. Easily design item label colors and other properties with ion-label." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

Label is an element used primarily to give added context to [Item](./item.md) components. The position of the label inside of an item can be inline, fixed, stacked, or floating.

Note that form control components such as [Input](./input.md) or [Radio](./radio.md) have their own labels, so they typically should not be used with `ion-label`. 


## Basic Usage

import Basic from '@site/static/usage/v7/label/basic/index.md';

<Basic />

## Item Labels

import Item from '@site/static/usage/v7/label/item/index.md';

<Item />

## Theming

### Colors

import Colors from '@site/static/usage/v7/label/theming/colors/index.md';

<Colors />


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
