---
title: 'ion-radio'
---

import Props from '@ionic-internal/component-api/v6/radio/props.md';
import Events from '@ionic-internal/component-api/v6/radio/events.md';
import Methods from '@ionic-internal/component-api/v6/radio/methods.md';
import Parts from '@ionic-internal/component-api/v6/radio/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/radio/custom-props.md';
import Slots from '@ionic-internal/component-api/v6/radio/slots.md';

<head>
  <title>ion-radio Component: Radio Property for iOS and Android</title>
  <meta
    name="description"
    content="Radio components should be used inside of ion-radio-groups on iOS and Android devices. Read to learn more about radio property usage and installation."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Radios should be used inside of a [radio group](./radio-group). Pressing a radio will check it and uncheck the previously selected radio, if there is one. They can also be checked programmatically by setting the value property of the parent radio group to the value of the radio.

When radios are inside of a radio group, only one radio will be checked at any time. If more than one item should be selected, [checkboxes](./checkbox) should be used instead. Radios can be disabled within a group to prevent interaction with them.

## Basic Usage

import Basic from '@site/static/usage/v6/radio/basic/index.md';

<Basic />

## Deselecting Radios

By default, once a radio is selected it cannot be deselected; pressing it again will keep it selected. This behavior can be modified by using the `allowEmptySelection` property on the parent radio group, which enables the radios to be deselected.

import EmptySelection from '@site/static/usage/v6/radio/empty-selection/index.md';

<EmptySelection />

## Theming

### Colors

import Colors from '@site/static/usage/v6/radio/theming/colors/index.md';

<Colors />

### CSS Custom Properties

import CSSProps from '@site/static/usage/v6/radio/theming/css-properties/index.md';

<CSSProps />

### CSS Shadow Parts

import CSSParts from '@site/static/usage/v6/radio/theming/css-shadow-parts/index.md';

<CSSParts />

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
