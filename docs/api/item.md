---
title: "ion-item"
---
import Props from '@site/static/auto-generated/item/props.md';
import Events from '@site/static/auto-generated/item/events.md';
import Methods from '@site/static/auto-generated/item/methods.md';
import Parts from '@site/static/auto-generated/item/parts.md';
import CustomProps from '@site/static/auto-generated/item/custom-props.md';
import Slots from '@site/static/auto-generated/item/slots.md';

<head>
  <title>ion-item: Input, Edit, or Delete iOS and Android Item Elements</title>
  <meta name="description" content="ion-item elements for iOS/Android contain text, icons, images, and other custom elements. They're placed in a list and can be input, deleted, edited, and more." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';
import APITOCInline from '@components/page/api/APITOCInline';

<EncapsulationPill type="shadow" />

Items are elements that can contain text, icons, avatars, images, inputs, and any other native or custom elements. Generally they are placed in a [list](./list) with other items. Items can be swiped, deleted, reordered, edited, and more.

## Basic Usage

import Basic from '@site/static/usage/item/basic/index.md';

<Basic />

## Clickable Items

An item is considered "clickable" if it has an `href` or `button` property set. Clickable items have a few visual differences that indicate they can be interacted with. For example, a clickable item receives the ripple effect upon activation in `md` mode, has a highlight when activated in `ios` mode, and has a [detail arrow](#detail-arrows) by default in `ios` mode.

import Clickable from '@site/static/usage/item/clickable/index.md';

<Clickable />

## Detail Arrows

By default [clickable items](#clickable-items) will display a right arrow icon on `ios` mode. To hide the right arrow icon on clickable elements, set the `detail` property to `false`. To show the right arrow icon on an item that doesn't display it naturally, set the `detail` property to `true`.

import DetailArrows from '@site/static/usage/item/detail-arrows/index.md';

<DetailArrows />


<!--

TODO add this functionality back as a css variable

This feature is not enabled by default on clickable items for the `md` mode, but it can be enabled by setting the following CSS variable:

```css
--item-detail-push-show: true;
```

See the [theming documentation](/docs/theming/css-variables) for more information.

-->


## Item Lines

Items show an inset bottom border by default. The border has padding on the left and does not appear under any content that is slotted in the `"start"` slot. The `lines` property can be modified to `"full"` or `"none"` which will show a full width border or no border, respectively.

import Lines from '@site/static/usage/item/lines/index.md';

<Lines />


## Item Placement

### Slotted Content

Item uses named [slots](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) in order to position content. This logic makes it possible to write a complex item with simple, understandable markup without having to worry about styling and positioning the elements.

The below chart details the item slots and where it will place the element inside of the item:

| Slot    | Description                                                                 |
|---------|-----------------------------------------------------------------------------|
| `start` | Placed to the left of all other content in LTR, and to the `right` in RTL.  |
| `end`   | Placed to the right of all other content in LTR, and to the `left` in RTL.  |
| none    | Placed inside of the input wrapper.                                         |

### Text Alignment

Items left align text and add an ellipsis when the text is wider than the item. See the [CSS Utilities Documentation](/docs/layout/css-utilities) for classes that can be added to `<ion-item>` to transform the text.


## Media Items

[Avatars](./avatar) and [Thumbnails](./thumbnail) can be slotted inside of an item. This is useful when making lists of images and text.

import Media from '@site/static/usage/item/media/index.md';

<Media />


## Buttons in Items

Buttons are styled smaller inside of items than when they are outside of them. To make the button size match buttons outside of an item, set the `size` attribute to `"default"`.

import Buttons from '@site/static/usage/item/buttons/index.md';

<Buttons />

## Icons in Items

import Icons from '@site/static/usage/item/icons/index.md';

<Icons />

## Item Inputs

import Inputs from '@site/static/usage/item/inputs/index.md';

<Inputs />


## Input Highlight

### Highlight Height

Items containing an input will highlight the bottom border of the input with a different color when focused, valid, or invalid. By default, `md` items have a highlight with a height set to `2px` and `ios` has no highlight (technically the height is set to `0`). The height can be changed using the `--highlight-height` CSS property. To turn off the highlight, set this variable to `0`. For more information on setting CSS properties, see the [theming documentation](/docs/theming/css-variables).

### Highlight Color

The highlight color changes based on the item state, but all of the states use Ionic colors by default. When focused, the input highlight will use the `primary` color. If the input is valid it will use the `success` color, and invalid inputs will use the `danger` color. See the [CSS Custom Properties](#css-custom-properties) section below for the highlight color variables.

### Counter Formatter

When using `counter`, the default behavior is to format the value that gets displayed as `itemLength / maxLength`. This behavior can be customized by passing in a formatter function to the `counterFormatter` property. See the [Usage](#usage) section for an example.


## Helper & Error Text

Helper & error text can be used inside of an item with an input by slotting a note in the `"helper"` and `"error"` slots. The error slot will not be displayed unless the `ion-invalid` class is added to the `ion-item`. In Angular, this is done automatically through form validation. In JavaScript, React and Vue, the class needs to be manually added based on your own validation.

import HelperError from '@site/static/usage/item/helper-error/index.md';

<HelperError />


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
