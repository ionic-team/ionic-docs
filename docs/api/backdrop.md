---
title: "ion-backdrop"
---
import Props from '@ionic-internal/component-api/v8/backdrop/props.md';
import Events from '@ionic-internal/component-api/v8/backdrop/events.md';
import Methods from '@ionic-internal/component-api/v8/backdrop/methods.md';
import Parts from '@ionic-internal/component-api/v8/backdrop/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/backdrop/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/backdrop/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Backdrops are full screen components that overlay other components. They are useful behind components that transition in on top of other content and can be used to dismiss that component.

## Basic Usage

The backdrop prevents clicking or tapping on the content behind it. It is transparent by default, so the below demo includes CSS to make it visible.

import Basic from '@site/static/usage/v8/backdrop/basic/index.md';

<Basic />

## Styling

The backdrop can be customized by assigning CSS properties directly to the backdrop element. Common properties include `background-color`, `background` and `opacity`. 

Content can be displayed above the backdrop by setting a `z-index` on the content, higher than the backdrop (defaults to `2`).

import Styling from '@site/static/usage/v8/backdrop/styling/index.md';

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