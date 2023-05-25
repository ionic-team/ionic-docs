---
title: "ion-spinner"
---
import Props from '@ionic-internal/component-api/v7/spinner/props.md';
import Events from '@ionic-internal/component-api/v7/spinner/events.md';
import Methods from '@ionic-internal/component-api/v7/spinner/methods.md';
import Parts from '@ionic-internal/component-api/v7/spinner/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/spinner/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/spinner/slots.md';

<head>
  <title>ion-spinner | Animated Spinner Icon Components and Properties</title>
  <meta name="description" content="The ion-spinner component provides a variety of animated SVG spinners. These icons indicate that the app is loading or performing another process to wait on." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


The Spinner component provides a variety of animated SVG spinners. Spinners are visual indicators that the app is loading content or performing another process that the user needs to wait on.


## Basic Usage

The default spinner is based on the mode. When the mode is `ios` the spinner will be `"lines"`, and when the mode is `md` the spinner will be `"circular"`. If the `name` property is set, then that spinner will be used instead of the mode specific spinner.

import Basic from '@site/static/usage/v7/spinner/basic/index.md';

<Basic />

## Theming

### Colors

import Colors from '@site/static/usage/v7/spinner/theming/colors/index.md';

<Colors />

### Styling

You may use custom CSS to style the spinner. For example, you can resize the spinner by setting the width and height.

import Resizing from '@site/static/usage/v7/spinner/theming/resizing/index.md';

<Resizing />

### CSS Custom Properties

import CSSProps from '@site/static/usage/v7/spinner/theming/css-properties/index.md';

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
