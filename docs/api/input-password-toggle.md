---
title: "ion-password-toggle"
---
import Props from '@ionic-internal/component-api/v8/input-password-toggle/props.md';
import Events from '@ionic-internal/component-api/v8/input-password-toggle/events.md';
import Methods from '@ionic-internal/component-api/v8/input-password-toggle/methods.md';
import Parts from '@ionic-internal/component-api/v8/input-password-toggle/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/input-password-toggle/custom-props.md';
import Slots from '@ionic-internal/component-api/v8/input-password-toggle/slots.md';

<head>
  <title>ion-input-password-toggle: Toggle the visibility of a password in Input</title>
  <meta name="description" content="ion-input-password-toggle is a companion component to ion-input. It allows users to toggle the visibility of text in a password input." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


The InputPasswordToggle component is a companion component to [Input](./input). It allows users to toggle the visibility of text in a password input.

## Basic Usage

:::info
InputPasswordToggle must be used with an [Input](./input) that has its [`type`](./input/#type) property set to either `'text'` or `'password'`.

Using any other `type` will cause a warning to be logged.
:::


import Basic from '@site/static/usage/v8/input-password-toggle/basic/index.md';

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
