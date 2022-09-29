---
title: "ion-radio"
---
import Props from '@site/static/auto-generated/radio/props.md';
import Events from '@site/static/auto-generated/radio/events.md';
import Methods from '@site/static/auto-generated/radio/methods.md';
import Parts from '@site/static/auto-generated/radio/parts.md';
import CustomProps from '@site/static/auto-generated/radio/custom-props.md';
import Slots from '@site/static/auto-generated/radio/slots.md';

<head>
  <title>ion-radio Component: Radio Property for iOS and Android</title>
  <meta name="description" content="Radio components should be used inside of ion-radio-groups on iOS and Android devices. Read to learn more about radio property usage and installation." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


Radios should be used inside of a [radio group](./radio-group). Pressing a radio will check it and uncheck the previously selected radio, if there is one. They can also be checked programmatically by setting the value property of the parent radio group to the value of the radio.

When radios are inside of a radio group, only one radio will be checked at any time. If more than one item should be selected, [checkboxes](./checkbox) should be instead. Radios can be disabled within a group to prevent interaction with them.

## Basic Usage

import Basic from '@site/static/usage/radio/basic/index.md';

<Basic />


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
