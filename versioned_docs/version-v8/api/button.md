---
title: "ion-button"
---
import Props from '@ionic-internal/component-api/v8/button/props.md';
import Events from '@ionic-internal/component-api/v8/button/events.md';
import Methods from '@ionic-internal/component-api/v8/button/methods.md';
import Parts from '@ionic-internal/component-api/v8/button/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/button/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/button/slots.md';

<head>
  <title>ion-button: Style Buttons with Custom CSS Properties</title>
  <meta name="description" content="ion-button provides a clickable element for use anywhere needing standard button functionality. Design and style button elements with custom CSS properties." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Buttons provide a clickable element, which can be used in forms, or anywhere that needs simple, standard button functionality. They may display text, icons, or both. Buttons can be styled with several attributes to look a specific way.

## Basic Usage

import Basic from '@site/static/usage/v8/button/basic/index.md';

<Basic />

## Expand

This property lets you specify how wide the button should be. By default, buttons have `display: inline-block`, but setting this property will change the button to a full-width element with `display: block`.

import Expand from '@site/static/usage/v8/button/expand/index.md';

<Expand />

## Shape

This property lets you specify the shape of the button. By default, buttons are rectangular with a small border radius, but setting this to `"round"` will change the button to a rounded element.

import Shape from '@site/static/usage/v8/button/shape/index.md';

<Shape />


## Fill

This property determines the background and border color of the button. By default, buttons have a solid background unless the button is inside of a toolbar, in which case it has a transparent background.

import Fill from '@site/static/usage/v8/button/fill/index.md';

<Fill />

## Size

This property specifies the size of the button. Setting this property will change the height and padding of a button.

import Size from '@site/static/usage/v8/button/size/index.md';

<Size />

## Icons

import Icons from '@site/static/usage/v8/button/icons/index.md';

<Icons />

## Theming

### Colors

import Colors from '@site/static/usage/v8/button/theming/colors/index.md';

<Colors />

### CSS Custom Properties

import CSSProps from '@site/static/usage/v8/button/theming/css-properties/index.md';

<CSSProps />

## Accessibility

Buttons are built to be accessible, but may need some adjustments depending on their content. The button component renders a native [button element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) which allows it to take advantage of the functionality that a native button provides.

### Overflowing Text Content

There are many cases where a button's text content may overflow the container. It is recommended to wrap the text inside of the button when this happens so that all of the text can still be read. The button component will automatically adjust its height to accommodate the extra lines of text.

The button text does not automatically wrap to the next line when the text is too long to fit. In order to make the text wrap, the `ion-text-wrap` class can be added, which will set the `white-space` property to `"normal"`. This will become the default in a future major release.

:::info
The `max-width` style is set on the button below for demo purposes only. Text wrapping will work with a dynamic button width.
:::

import TextWrapping from '@site/static/usage/v8/button/text-wrapping/index.md';

<TextWrapping />

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
