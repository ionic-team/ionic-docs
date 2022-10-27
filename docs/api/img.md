---
title: "ion-img"
---

import Props from '@site/static/auto-generated/img/props.md';
import Events from '@site/static/auto-generated/img/events.md';
import Methods from '@site/static/auto-generated/img/methods.md';
import Parts from '@site/static/auto-generated/img/parts.md';
import CustomProps from '@site/static/auto-generated/img/custom-props.md';
import Slots from '@site/static/auto-generated/img/slots.md';

<head>
  <title>Img Tag to Lazy Load Images in Viewport | ion-img Tag</title>
  <meta name="description" content="Img tag lazy loads images whenever the tag is in the viewport. Utilize this component when generating large lists—as images are only loaded when visible." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


Img is a tag that will lazily load an image whenever the tag is in the viewport. This is extremely useful when generating a large list as images are only loaded when they're visible. The component uses [Intersection Observer](https://caniuse.com/#feat=intersectionobserver) internally, which is supported in most modern browsers, but falls back to a `setTimeout` when it is not supported.

## Basic Usage

import Basic from '@site/static/usage/img/basic/index.md';

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