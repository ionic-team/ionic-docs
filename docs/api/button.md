---
title: "ion-button"
---
import Props from '@site/static/auto-generated/button/props.md';
import Events from '@site/static/auto-generated/button/events.md';
import Methods from '@site/static/auto-generated/button/methods.md';
import Parts from '@site/static/auto-generated/button/parts.md';
import CustomProps from '@site/static/auto-generated/button/custom-props.md';
import Slots from '@site/static/auto-generated/button/slots.md';

<head>
  <title>ion-button: Design and Style Buttons with Custom CSS Properties</title>
  <meta name="description" content="ion-button provides a clickable element for use anywhere needing standard button functionality. Design and style button elements with custom CSS properties." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Buttons provide a clickable element, which can be used in forms, or anywhere that needs simple, standard button functionality. They may display text, icons, or both. Buttons can be styled with several attributes to look a specific way.

## Basic Usage

import Basic from '@site/static/usage/button/basic/index.md';

<Basic />

## Expand

This property lets you specify how wide the button should be. By default, buttons are inline blocks, but setting this property will change the button to a full-width block element.

import Expand from '@site/static/usage/button/expand/index.md';

<Expand />

## Shape

This property lets you specify the shape of the button. By default, buttons are rectangular with a small border radius, but setting this to `"round"` will change the button to a rounded element.

import Shape from '@site/static/usage/button/shape/index.md';

<Shape />


## Fill

This property determines the background and border color of the button. By default, buttons have a solid background unless the button is inside of a toolbar, in which case it has a transparent background.

import Fill from '@site/static/usage/button/fill/index.md';

<Fill />

## Size

This property specifies the size of the button. Setting this property will change the height and padding of a button.

import Size from '@site/static/usage/button/size/index.md';

<Size />

## Icons

import Icons from '@site/static/usage/button/icons/index.md';

<Icons />

## Theming

### Colors

import Colors from '@site/static/usage/button/theming/colors/index.md';

<Colors />

### CSS Custom Properties

import CSSProps from '@site/static/usage/button/theming/css-properties/index.md';

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
