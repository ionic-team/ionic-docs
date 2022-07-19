---
title: "ion-datetime-button"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@site/static/auto-generated/datetime-button/props.md';
import Events from '@site/static/auto-generated/datetime-button/events.md';
import Methods from '@site/static/auto-generated/datetime-button/methods.md';
import Parts from '@site/static/auto-generated/datetime-button/parts.md';
import CustomProps from '@site/static/auto-generated/datetime-button/custom-props.md';
import Slots from '@site/static/auto-generated/datetime-button/slots.md';

<head>
  <title>ion-datetime-button: Ionic API Input for interacting with Datetime picker</title>
  <meta name="description" content="Datetime button links with a datetime instance to easily a datetime in a popover, modal, and more." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';
import APITOCInline from '@components/page/api/APITOCInline';

<EncapsulationPill type="shadow" />

Datetime Button links with a [Datetime](./datetime) component to display the formatted date and time. It also provides buttons to present the datetime in a modal, popover, and more.

## Overview

Datetime Button should be used when space is constrained. This component displays buttons which show the current date and time values. When the buttons are tapped, the date or time pickers open in the overlay.

When using Datetime Button with a JavaScript framework such as Angular, React, or Vue be sure to use the [keepContentsMounted property on ion-modal](./modal#keepcontentsmounted) or the [keepContentsMounted property on ion-popover](./popover#keepcontentsmounted). This allows the linked datetime instance to be mounted even if the overlay has not been presented yet.

## Basic Usage

import Basic from '@site/static/usage/datetime-button/basic/index.md';

<Basic />

## Localization

TODO

## Usage with Modal

TODO

## Usage with Popover

TODO

## Customization

TODO

### Buttons

TODO

### Theming

TODO

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
