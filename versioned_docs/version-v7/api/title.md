---
title: 'ion-title'
---

import Props from '@ionic-internal/component-api/v7/title/props.md';
import Events from '@ionic-internal/component-api/v7/title/events.md';
import Methods from '@ionic-internal/component-api/v7/title/methods.md';
import Parts from '@ionic-internal/component-api/v7/title/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/title/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/title/slots.md';

<head>
  <title>ion-title: Ionic Framework App Title Component for Toolbars</title>
  <meta
    name="description"
    content="ion-title is a component that sets the title of the toolbar. Read to learn more about title and collapsible title components and usage for Ionic Framework Apps."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Title is a text component that sets the title for a [toolbar](./toolbar). It can be used to describe the screen or section a user is currently on or the app being used.

## Basic

import Basic from '@site/static/usage/v7/title/basic/index.md';

<Basic />

## Collapsible Large Titles

The large title will display when the [content](./content) is scrolled to the start of the scroll container. When the title is scrolled behind the header, the condensed title will fade in.

:::info

This feature is only available for iOS.

:::

import CollapsibleLargeTitle from '@site/static/usage/v7/title/collapsible-large-title/basic/index.md';

<CollapsibleLargeTitle />

### Collapsible Buttons

The [buttons](./buttons.md) component can be used with the [`collapse`](./buttons.md#collapse) property to additionally display in the header as the toolbar is collapsed.

import CollapsibleLargeTitleButtons from '@site/static/usage/v7/title/collapsible-large-title/buttons/index.md';

<CollapsibleLargeTitleButtons />

## Accessibility

### Headings

When creating headings, we typically recommend using [semantic heading elements (h1-h6)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements). However, there may be instances where you need to update Title to be treated as a particular heading by assistive technologies. For example, if you have a Title at the top of a view, you may want this to be considered a level 1 heading.

To achieve this, developers should use the [`heading` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/heading_role) on Title. This will indicate to assistive technologies that Title is a type of heading. From there, developers should use the [`aria-level` attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-level) to set the heading level.

For example, if we wanted to make a Title behave like an `h1` element, we would set `role="heading"` and `aria-level="1"` on the Title.

Since multiple Title elements can be used on a view in conjunction with semantic heading elements, Ionic does not automatically set the Title's `role` or `aria-level`. It is the responsibility of the developer to handle this.

## Theming

The collapsible large title should appear seamless in relation to the rest of your content. This means that the background color of the toolbar containing the collapsible large title should always match the background color of the content.

By default, the toolbar that contains the standard title is hidden using `opacity: 0` and is progressively shown as you collapse the large title by scrolling. As a result, the background color that you see behind the standard title is actually the background color of the content.

You can change the background color of the toolbar with the standard title by setting the `--background` CSS variable. This will give the effect of the header changing color as you collapse the large title.

When styling the text color of the large title, you should target the large title globally as opposed to within the context of a particular page or tab, otherwise its styles will not be applied during the navigation animation.

### CSS Custom Properties

import CSSCustomProperties from '@site/static/usage/v7/title/theming/css-properties/index.md';

<CSSCustomProperties />

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
