---
title: "ion-title"
---
import Props from '@site/static/auto-generated/title/props.md';
import Events from '@site/static/auto-generated/title/events.md';
import Methods from '@site/static/auto-generated/title/methods.md';
import Parts from '@site/static/auto-generated/title/parts.md';
import CustomProps from '@site/static/auto-generated/title/custom-props.md';
import Slots from '@site/static/auto-generated/title/slots.md';

<head>
  <title>ion-title: Ionic Framework App Title Component for Toolbars</title>
  <meta name="description" content="ion-title is a component that sets the title of the toolbar. Read to learn more about title and collapsible title components and usage for Ionic Framework Apps." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


`ion-title` is a component that sets the title of the `Toolbar`.

## Basic

import Basic from '@site/static/usage/title/basic/index.md';

<Basic />

## Collapsible Large Titles

The Large Title will display when the `ion-content` is scrolled to the start of the scroll container. When the title is scrolled behind the header, the condensed title will fade in.

:::info  

This feature is only available for iOS.

:::

import CollapsibleLargeTitle from '@site/static/usage/title/collapsible-large-title/basic/index.md';

<CollapsibleLargeTitle />

### Collapsible Buttons

The [`ion-buttons`](./buttons.md) component can be used with the [`collapse`](./buttons.md#collapse) property to additionally display in the header as the toolbar is collapsed.


import CollapsibleLargeTitleButtons from '@site/static/usage/title/collapsible-large-title/buttons/index.md';

<CollapsibleLargeTitleButtons />

## Theming

### CSS Custom Properties

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