---
title: 'ion-avatar'
---

import Props from './auto-generated/avatar/props.md';
import Events from './auto-generated/avatar/events.md';
import Methods from './auto-generated/avatar/methods.md';
import Parts from './auto-generated/avatar/parts.md';
import CustomProps from './auto-generated/avatar/custom-props.md';
import Slots from './auto-generated/avatar/slots.md';

<head>
  <title>ion-avatar: Circular Application Avatar Icon Component</title>
  <meta
    name="description"
    content="Ion-avatars are circular application components that wrap an image or icon. They can represent a person or an object, by themselves or inside of any element."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Avatars are circular components that usually wrap an image or icon. They can be used to represent a person or an object.

Avatars can be used by themselves or inside of any element. If placed inside of an `ion-chip` or `ion-item`, the avatar will resize to fit the parent component. To position an avatar on the left or right side of an item, set the slot to `start` or `end`, respectively.

## Basic Usage

import Basic from '@site/static/usage/v6/avatar/basic/index.md';

<Basic />

## Chip Avatar

import Chip from '@site/static/usage/v6/avatar/chip/index.md';

<Chip />

## Item Avatar

import Item from '@site/static/usage/v6/avatar/item/index.md';

<Item />

## Theming

### CSS Custom Properties

import CSSProps from '@site/static/usage/v6/avatar/theming/css-properties/index.md';

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
