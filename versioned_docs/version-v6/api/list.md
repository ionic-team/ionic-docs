---
title: 'ion-list'
---

import Props from '@ionic-internal/component-api/v6/list/props.md';
import Events from '@ionic-internal/component-api/v6/list/events.md';
import Methods from '@ionic-internal/component-api/v6/list/methods.md';
import Parts from '@ionic-internal/component-api/v6/list/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/list/custom-props.md';
import Slots from '@ionic-internal/component-api/v6/list/slots.md';

<head>
  <title>ion-list: Item List View Component for iOS and Android Apps</title>
  <meta
    name="description"
    content="ion-lists are made up of multiple rows of items containing text, icons, toggles, and more. Learn about the list view component for iOS and Android Ionic apps."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

Lists are made up of multiple rows of [items](./item) which can contain text, buttons, toggles,
icons, thumbnails, and much more. Lists generally contain items with similar data content, such as images and text.

Lists support several interactions including swiping items to reveal options, dragging to [reorder](./reorder) items within the list, and deleting items.

## Basic Usage

import Basic from '@site/static/usage/v6/list/basic/index.md';

<Basic />

## Inset List

Adding the `inset` property to a list will apply margin around the list. In `ios` mode it will also add rounded corners to the list.

import Inset from '@site/static/usage/v6/list/inset/index.md';

<Inset />

## List Lines

Adding the `lines` property to a list will adjust the bottom borders of all of the items in the list. Setting it to `"full"` will display full width borders, `"inset"` will display borders adjusted with left padding, and `"none"` will show no borders. If the `lines` property is set on an item in a list, that will take priority over the property on the list.

import Lines from '@site/static/usage/v6/list/lines/index.md';

<Lines />

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
