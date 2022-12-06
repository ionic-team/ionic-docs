---
title: "ion-backdrop"
---
import Props from '@site/static/auto-generated/backdrop/props.md';
import Events from '@site/static/auto-generated/backdrop/events.md';
import Methods from '@site/static/auto-generated/backdrop/methods.md';
import Parts from '@site/static/auto-generated/backdrop/parts.md';
import CustomProps from '@site/static/auto-generated/backdrop/custom-props.md';
import Slots from '@site/static/auto-generated/backdrop/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Backdrops are full screen components that overlay other components. They are useful behind components that transition in on top of other content and can be used to dismiss that component.

## Basic Usage

The backdrop is transparent by default. The backdrop will prevent clicking or tapping on the content behind it.

import Basic from '@site/static/usage/backdrop/basic/index.md';

<Basic />

## Styling

The backdrop can be customized by assigning CSS properties directly to the backdrop element. Common properties include `background-color`, `background` and `opacity`. 

Content can be displayed above the backdrop by setting a `z-index` on the content, higher than the backdrop (defaults to `2`).

import Styling from '@site/static/usage/backdrop/styling/index.md';

<Styling />

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