---
title: "ion-back-button"
---
import Props from '@ionic-internal/component-api/v7/back-button/props.md';
import Events from '@ionic-internal/component-api/v7/back-button/events.md';
import Methods from '@ionic-internal/component-api/v7/back-button/methods.md';
import Parts from '@ionic-internal/component-api/v7/back-button/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/back-button/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/back-button/slots.md';

<head>
  <title>Back Button | ion-back-button: Custom Menu Icon for Applications</title>
  <meta name="description" content="The ion-back-button is a custom menu icon for Android, iOS, and Progressive Web Apps. Use Ionic Framework components to easily build applications." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


The back button navigates back in the app's history when clicked. It is only displayed when there is history in the navigation stack, unless [`defaultHref`](#default-back-history) is set. The back button displays different text and icon based on the mode, but this can be customized.

## Basic Usage

import Basic from '@site/static/usage/v7/back-button/basic/index.md';

<Basic />

## Custom Back Button

By default, the back button will display the text `"Back"` with a `"chevron-back"` icon on `ios`, and an `"arrow-back-sharp"` icon on `md`. This can be customized per back button component by setting the `icon` or `text` properties. Alternatively, it can be set globally using the `backButtonIcon` or `backButtonText` properties in the global config. See the [Config docs](../developing/config) for more information.

import Custom from '@site/static/usage/v7/back-button/custom/index.md';

<Custom />

## Default Back History

Occasionally an app may need to show the back button and navigate back when there is no history. This can be done by setting the `defaultHref` on the back button to a path. In order to use `defaultHref`, the app must contain a router with paths set.

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
