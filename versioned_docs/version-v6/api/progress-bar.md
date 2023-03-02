---
title: 'ion-progress-bar'
---

import Props from '@ionic-internal/component-api/v6/progress-bar/props.md';
import Events from '@ionic-internal/component-api/v6/progress-bar/events.md';
import Methods from '@ionic-internal/component-api/v6/progress-bar/methods.md';
import Parts from '@ionic-internal/component-api/v6/progress-bar/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/progress-bar/custom-props.md';
import Slots from '@ionic-internal/component-api/v6/progress-bar/slots.md';

<head>
  <title>Progress Bar | Horizontal App Progress Bar for Loading Indicator</title>
  <meta
    name="description"
    content="ion-progress-bars are horizontal loading indicators that inform users about the status of ongoing app processes—such as submitting a form or saving updates."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Progress bars inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates. There are two types of progress bars: `determinate` and `indeterminate`.

## Determinate

Determinate is the default type. It should be used when the percentage of an operation is known. The progress is represented by setting the `value` property. This can be used to show the progress increasing from 0 to 100% of the track.

import Determinate from '@site/static/usage/v6/progress-bar/determinate/index.md';

<Determinate />

### Buffer

If the `buffer` property is set, a buffer stream will show with animated circles to indicate activity. The value of the `buffer` property will also be represented by how much visible track there is. If the value of `buffer` is less than the `value` property, there will be no visible track. If `buffer` is equal to `1` then the buffer stream will be hidden.

import Buffer from '@site/static/usage/v6/progress-bar/buffer/index.md';

<Buffer />

## Indeterminate

The indeterminate type should be used when it is unknown how long the process will take. The progress bar is not tied to the `value`, instead it continually slides along the track until the process is complete.

import Indeterminate from '@site/static/usage/v6/progress-bar/indeterminate/index.md';

<Indeterminate />

## Progress Bars in Toolbars

<!-- Reuse the playground from the Toolbar directory -->

import Toolbar from '@site/static/usage/v6/toolbar/progress-bars/index.md';

<Toolbar />

## Theming

### Colors

import Colors from '@site/static/usage/v6/progress-bar/theming/colors/index.md';

<Colors />

### CSS Custom Properties

import CSSProps from '@site/static/usage/v6/progress-bar/theming/css-properties/index.md';

<CSSProps />

### CSS Shadow Parts

import CSSParts from '@site/static/usage/v6/progress-bar/theming/css-shadow-parts/index.md';

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
