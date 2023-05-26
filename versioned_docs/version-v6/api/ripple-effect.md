---
title: 'ion-ripple-effect'
---

import Props from '@ionic-internal/component-api/v6/ripple-effect/props.md';
import Events from '@ionic-internal/component-api/v6/ripple-effect/events.md';
import Methods from '@ionic-internal/component-api/v6/ripple-effect/methods.md';
import Parts from '@ionic-internal/component-api/v6/ripple-effect/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/ripple-effect/custom-props.md';
import Slots from '@ionic-internal/component-api/v6/ripple-effect/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<head>
  <title>ion-ripple-effect | Ripple Effect Button Component for Ionic Apps</title>
  <meta
    name="description"
    content="The ripple effect button component adds the Material Design ink ripple interaction effect. It can only be used in an ion-app and can be added to any component."
  />
</head>

<EncapsulationPill type="shadow" />

The ripple effect component adds the [Material Design ink ripple interaction effect](https://material.io/develop/web/supporting/ripple). This component can only be used inside of an `<ion-app>` and can be added inside of any element.

It's important to set [relative positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/position) on the parent element because the ripple effect is absolutely positioned and will cover its closest parent that has relative positioning. The parent element should also be given the `ion-activatable` class, which tells the ripple effect that the element is clickable. It's recommended to add `overflow: hidden` to the parent element if the ripple is overflowing its container.

## Basic Usage

import Basic from '@site/static/usage/v6/ripple-effect/basic/index.md';

<Basic />

## Type

There are two types of ripple effects: `"bounded"` and `"unbounded"`. The default type, `"bounded"`, will expand the ripple effect from the click position outwards. To add a ripple effect that always starts in the center of the element and expands in a circle, set the type to `"unbounded"`.

import Type from '@site/static/usage/v6/ripple-effect/type/index.md';

<Type />

## Customizing

The ripple can be customized to a different color through CSS. By default the ripple color is set to inherit the text color, which is generally the body color. This can be changed by setting the CSS `color` on the parent or the ripple effect itself.

import Customizing from '@site/static/usage/v6/ripple-effect/customizing/index.md';

<Customizing />

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
