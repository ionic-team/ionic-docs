---
title: "ion-segment-button"
---
import Props from '@ionic-internal/component-api/v7/segment-button/props.md';
import Events from '@ionic-internal/component-api/v7/segment-button/events.md';
import Methods from '@ionic-internal/component-api/v7/segment-button/methods.md';
import Parts from '@ionic-internal/component-api/v7/segment-button/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/segment-button/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/segment-button/slots.md';

<head>
  <title>ion-segment-button | Segment Button Icon and Segment Value</title>
  <meta name="description" content="ion-segment-buttons are groups of related buttons inside of a Segment. Learn to use segment button icons and check their values on Ionic Framework Apps." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


Segment buttons are groups of related buttons inside of a [segment](segment.md). They are displayed in a horizontal row. A segment button can be selected by default by setting the `value` of the segment to the `value` of the segment button. Only one segment button can be selected at a time.


## Basic Usage

import Basic from '@site/static/usage/v7/segment-button/basic/index.md';

<Basic />


## Layout

The `layout` property is set to `"icon-top"` by default. When a segment button has both an icon and a label, it will display the icon on top of the label. This behavior can be changed by setting the `layout` property to `"icon-bottom"`, `"icon-start"`, or `"icon-end"` which will show the icon below the label, to the start of the label (left in LTR and right in RTL) or to the end of the label (right in LTR and left in RTL), respectively.

import Layout from '@site/static/usage/v7/segment-button/layout/index.md';

<Layout />


## Theming
### CSS Shadow Parts

import CSSParts from '@site/static/usage/v7/segment-button/theming/css-shadow-parts/index.md';

<CSSParts />


### CSS Custom Properties

import CSSProps from '@site/static/usage/v7/segment-button/theming/css-properties/index.md';

<CSSProps />


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
