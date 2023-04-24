---
title: 'ion-title'
---

import Props from '@ionic-internal/component-api/v6/title/props.md';
import Events from '@ionic-internal/component-api/v6/title/events.md';
import Methods from '@ionic-internal/component-api/v6/title/methods.md';
import Parts from '@ionic-internal/component-api/v6/title/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/title/custom-props.md';
import Slots from '@ionic-internal/component-api/v6/title/slots.md';

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

import Basic from '@site/static/usage/v6/title/basic/index.md';

<Basic />

## Collapsible Large Titles

The large title will display when the [content](./content) is scrolled to the start of the scroll container. When the title is scrolled behind the header, the condensed title will fade in.

:::info

This feature is only available for iOS.

:::

import CollapsibleLargeTitle from '@site/static/usage/v6/title/collapsible-large-title/basic/index.md';

<CollapsibleLargeTitle />

### Collapsible Buttons

The [buttons](./buttons.md) component can be used with the [`collapse`](./buttons.md#collapse) property to additionally display in the header as the toolbar is collapsed.

import CollapsibleLargeTitleButtons from '@site/static/usage/v6/title/collapsible-large-title/buttons/index.md';

<CollapsibleLargeTitleButtons />

## Theming

The collapsible large title should appear seamless in relation to the rest of your content. This means that the background color of the toolbar containing the collapsible large title should always match the background color of the content.

By default, the toolbar that contains the standard title is hidden using `opacity: 0` and is progressively shown as you collapse the large title by scrolling. As a result, the background color that you see behind the standard title is actually the background color of the content.

You can change the background color of the toolbar with the standard title by setting the `--background` CSS variable. This will give the effect of the header changing color as you collapse the large title.

When styling the text color of the large title, you should target the large title globally as opposed to within the context of a particular page or tab, otherwise its styles will not be applied during the navigation animation.

### CSS Custom Properties

import CSSCustomProperties from '@site/static/usage/v6/title/theming/css-properties/index.md';

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
