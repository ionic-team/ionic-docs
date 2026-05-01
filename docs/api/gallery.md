---
title: "ion-gallery"
---

import Props from '@ionic-internal/component-api/v9/gallery/props.md';
import Events from '@ionic-internal/component-api/v9/gallery/events.md';
import Methods from '@ionic-internal/component-api/v9/gallery/methods.md';
import Parts from '@ionic-internal/component-api/v9/gallery/parts.md';
import CustomProps from '@ionic-internal/component-api/v9/gallery/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v9/gallery/slots.md';

<head>
  <title>ion-gallery: Responsive Uniform and Masonry Gallery Layouts</title>
  <meta
    name="description"
    content="The gallery arranges images, cards, and other content in responsive uniform or masonry layouts with configurable column counts and masonry ordering modes."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The gallery arranges images, cards, and other content in a responsive grid. It supports uniform and masonry layouts, configurable column counts (fixed or breakpoint-based), and multiple masonry ordering modes.

## Basic Usage

import Basic from '@site/static/usage/v9/gallery/basic/index.md';

<Basic />

## Uniform

Uniform is the default layout. It creates a consistent grid where items appear at the same visual size with a `1 / 1` aspect ratio. This layout is ideal when visual alignment is more important than preserving each item's natural height.

import Uniform from '@site/static/usage/v9/gallery/uniform/index.md';

<Uniform />

## Masonry

Masonry preserves each item's natural height and stacks items vertically within each column, creating a staggered layout with minimal gaps. Masonry supports two ordering modes: sequential and best fit.

:::important
Avoid adding margin to top-level items in a masonry layout, as it can cause incorrect item placement. To add spacing, wrap the content in a child element and apply margin to that wrapper instead.
:::

### Sequential

Sequential is the default masonry ordering mode. Items are placed in DOM order, filling columns from left to right.

import MasonrySequential from '@site/static/usage/v9/gallery/masonry-sequential/index.md';

<MasonrySequential />

### Best Fit

Best fit places each item in the column with the most available space, helping balance column heights.

import MasonryBestFit from '@site/static/usage/v9/gallery/masonry-best-fit/index.md';

<MasonryBestFit />

### Images

In masonry layouts, top-level `img` elements are given default styles to ensure consistent rendering. These styles make images fill their container while preserving their aspect ratio and keeping them centered.

:::note
Images wrapped in other elements (for example, inside a `figure`) do not inherit these defaults. Apply the same styles to the nested `img` if you want matching behavior.
:::

import Images from '@site/static/usage/v9/gallery/images/index.md';

<Images />

## Columns

Columns can be configured with the `columns` property using either a single number for a fixed column count, or a breakpoint map to change columns across screen sizes.

If no value is provided, or if an invalid value is used, the gallery falls back to its default responsive column behavior.

import Columns from '@site/static/usage/v9/gallery/columns/index.md';

<Columns />

## Interfaces

### GalleryBreakpointColumns

```typescript
interface GalleryBreakpointColumns {
  xs?: string | number;
  sm?: string | number;
  md?: string | number;
  lg?: string | number;
  xl?: string | number;
  xxl?: string | number;
}
```

## Types

### GalleryColumns

```typescript
type GalleryColumns = GalleryBreakpointColumns | string | number;
```

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
