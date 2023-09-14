---
title: "ion-item"
---
import Props from '@ionic-internal/component-api/v7/item/props.md';
import Events from '@ionic-internal/component-api/v7/item/events.md';
import Methods from '@ionic-internal/component-api/v7/item/methods.md';
import Parts from '@ionic-internal/component-api/v7/item/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/item/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/item/slots.md';

import useBaseUrl from '@docusaurus/useBaseUrl';

<head>
  <title>ion-item: Input, Edit, or Delete iOS and Android Item Elements</title>
  <meta name="description" content="ion-item elements for iOS/Android contain text, icons, images, and other custom elements. They're placed in a list and can be input, deleted, edited, and more." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Items are elements that can contain text, icons, avatars, images, inputs, and any other native or custom elements. Items should only be used as rows in a [list](./list) with other items. Items can be swiped, deleted, reordered, edited, and more.

## Content Types

Items in a list can support 5 different content types:

### Supporting Visuals

These are decorative icons or other adornments for an item. Common examples of supporting visuals are [Avatars](./avatar), [Icons](./icon), and [Thumbnails](./thumbnail). Since this content is not required to understand the intent of the row, it is typically hidden from screen readers using `aria-hidden="true"`.

In the example below, we are creating two lists with supporting visuals. The first list uses icons, and the second list uses avatars. The visuals are decorative, so they all have `aria-hidden="true"`. Additionally, they are presented consistently in the `start` slot.

import SupportingVisuals from '@site/static/usage/v7/item/content-types/supporting-visuals/index.md';

<SupportingVisuals />

The following example shows **incorrect usage** because the icons are not presented in a consistent way.

<img width="300" style={{ margin: '0 auto' }} src={useBaseUrl('img/item/incorrect-usage-visuals.jpg')} />

### Text

The text content type includes form control labels or other visible text. This text serves to indicate the intent of the row. Try to keep the text short and to the point. If you find that you need more than a few sentences, consider moving the item to its own list and adding a [note](./note) at the bottom of the list.

TODO Demo

### Metadata

Metadata provides additional context for a row. Metadata can include information such as counts, badges, and more. Try to limit the amount of metadata you include to only the most relevant information. Adding too much metadata to a single item can overwhelm or confuse the user.

TODO Demo 

### Actions

Actions are interactive elements that do something when you active them. An item can have primary and secondary actions displayed on a line. However, developers should ensure that each action's tap target is large enough to be usable.

Developers should be mindful when using actions and avoid creating [nested interactive](https://dequeuniversity.com/rules/axe/4.4/nested-interactive) which can break the user experience with screen readers. For example, developers should avoid adding a button inside the main content of `ion-item` if the `button` property is set to `true`.

If an item needs more than two actions, consider using the [item-sliding](./item-sliding) component with options.

TODO Demo

### Controls

Controls are form components such as checkboxes, inputs, radios, and more. Each item in a list should have at most two controls due to screen space constraints.

Metadata such as helper text or character counts should not be used on form controls in list views. If such metadata is needed, the form control should be placed outside of a list. If a form control needs additional context, consider adding a [note](./note) at the bottom of the list.

TODO Demo

## Basic Usage

Items left align text and add an ellipsis when the text is wider than the item. We can modify this behavior using the CSS Utilities provided by Ionic Framework, such as using `.ion-text-wrap` in the below example. See the [CSS Utilities Documentation](/docs/layout/css-utilities) for more classes that can be added to an item to transform the text.

import Basic from '@site/static/usage/v7/item/basic/index.md';

<Basic />


## Clickable Items

An item is considered "clickable" if it has an `href` or `button` property set. Clickable items have a few visual differences that indicate they can be interacted with. For example, a clickable item receives the ripple effect upon activation in `md` mode, has a highlight when activated in `ios` mode, and has a [detail arrow](#detail-arrows) by default in `ios` mode.

import Clickable from '@site/static/usage/v7/item/clickable/index.md';

<Clickable />


## Detail Arrows

By default [clickable items](#clickable-items) will display a right arrow icon on `ios` mode. To hide the right arrow icon on clickable elements, set the `detail` property to `false`. To show the right arrow icon on an item that doesn't display it naturally, set the `detail` property to `true`.

import DetailArrows from '@site/static/usage/v7/item/detail-arrows/index.md';

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

import Lines from '@site/static/usage/v7/item/lines/index.md';

<Lines />

## Buttons in Items

Buttons are styled smaller inside of items than when they are outside of them. To make the button size match buttons outside of an item, set the `size` attribute to `"default"`.

import Buttons from '@site/static/usage/v7/item/buttons/index.md';

<Buttons />

## Item Inputs

import Inputs from '@site/static/usage/v7/item/inputs/index.md';

<Inputs />

## Theming

### Colors

import Colors from '@site/static/usage/v7/item/theming/colors/index.md';

<Colors />

### CSS Shadow Parts

import CSSParts from '@site/static/usage/v7/item/theming/css-shadow-parts/index.md';

<CSSParts />

### CSS Custom Properties

import CSSProps from '@site/static/usage/v7/item/theming/css-properties/index.md';

<CSSProps />


### Input Highlight

Items containing an input will highlight the bottom border of the input with a different color when focused, valid, or invalid. By default, `md` items have a highlight with a height set to `2px` and `ios` has no highlight (technically the height is set to `0`). The height can be changed using the `--highlight-height` CSS property. To turn off the highlight, set this variable to `0`.

The highlight color changes based on the item state, but all of the states use Ionic colors by default. When focused, the input highlight will use the `primary` color. If the input is valid it will use the `success` color, and invalid inputs will use the `danger` color. This can be customized using the provided CSS properties.

import InputHighlight from '@site/static/usage/v7/item/theming/input-highlight/index.md';

<InputHighlight />

## Usage Guidelines

The following guidelines will help ensure your list items are easy to understand and use.

1. Items should only be used inside of [lists](./list).
2. Items inside of a list should be presented in a consistent format. For example, if your items present decorative icons, the icons should be positioned in the same way between items.
3. Items should never render [nested interactives](https://dequeuniversity.com/rules/axe/4.4/nested-interactive). Screen readers are unable to select the correct interactive element when nested interactives are used. For example, avoid placing a button inside of an `ion-item` that has `button="true"`.
4. Use [content types](#content-types) correctly. The item component is designed to be a row in a [list](./list) and should not be used as a general purpose container.

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
