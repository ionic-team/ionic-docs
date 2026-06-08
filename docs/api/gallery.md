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

The Gallery arranges images, cards, and other content in a responsive grid. It supports uniform and masonry layouts, configurable column counts (fixed or breakpoint-based), and multiple masonry ordering modes.

Each [Gallery Item](./gallery-item.md) is a single cell of the grid and can contain plain text or any element, such as an `img`, a `figure` with a caption, or a [Card](./card.md).

## Basic Usage

import Basic from '@site/static/usage/v9/gallery/basic/index.md';

<Basic />

## Uniform

Uniform is the default layout. It creates a consistent grid where items appear at the same visual size with a `1 / 1` aspect ratio. This layout is ideal when visual alignment is more important than preserving each item's natural height.

import Uniform from '@site/static/usage/v9/gallery/uniform/index.md';

<Uniform />

## Masonry

Masonry preserves each item's natural height and stacks items vertically within each column, creating a staggered layout with minimal gaps. Masonry supports two ordering modes: sequential and best fit.

### Sequential

Sequential is the default masonry ordering mode. Items are placed in DOM order, filling columns from left to right.

import MasonrySequential from '@site/static/usage/v9/gallery/masonry-sequential/index.md';

<MasonrySequential />

### Best Fit

Best fit places each item in the column with the most available space, helping balance column heights.

import MasonryBestFit from '@site/static/usage/v9/gallery/masonry-best-fit/index.md';

<MasonryBestFit />

### Images

An `img` placed directly inside a Gallery Item is given default styles to ensure consistent rendering. These styles make images fill their cell while preserving their aspect ratio and keeping them centered.

:::tip
Images wrapped in another element (for example, inside a `figure`) do not receive these defaults. Apply the same styles to the nested `img` if you want matching behavior, for example:

```css
figure img {
  display: block;

  object-fit: cover;
  object-position: center;

  aspect-ratio: inherit;
}
```
:::

import Images from '@site/static/usage/v9/gallery/images/index.md';

<Images />

## Columns

Columns can be configured with the `columns` property using either a single number for a fixed column count, or a breakpoint map to change columns across screen sizes.

If no value is provided, or if an invalid value is used, the Gallery falls back to its default responsive column behavior. The default column counts by breakpoint are:

| Breakpoint | Min Width | Default Columns |
| --- | --- | ---|
| `xs` | `0` | `2` |
| `sm` | `576px` | `3` |
| `md` | `768px` | `4` |
| `lg` | `992px` | `6` |
| `xl` | `1200px` | `8` |
| `xxl` | `1400px` | `10` |

import Columns from '@site/static/usage/v9/gallery/columns/index.md';

<Columns />

## Gap

Gap can be configured with the `gap` property using either a single value for a fixed gap, or a breakpoint map to change gap across screen sizes.

Whether provided as a single value or as a value inside a breakpoint map, each gap value can be either a **string** or a **number**:

- A **string** can be any valid CSS [length-percentage](https://developer.mozilla.org/en-US/docs/Web/CSS/length-percentage) (such as `16px`, `1rem`, or `20%`), a math function (such as `calc(1rem + 8px)`), or a CSS variable (such as `var(--app-gallery-gap)`).
- A **number** is treated as a pixel value, so `16` is equivalent to `"16px"`.

If no value is provided, or if an invalid value is used, the Gallery falls back to its default gap value. The default value is `16px`.

:::tip
Use the `gap` property to space items apart rather than CSS margins. Margins set on item content are reset so they cannot disrupt the layout calculations, so they will not produce the spacing you expect. Use `gap` for the space _between_ items, and `padding` on your content to inset it _within_ an item.
:::

import Gap from '@site/static/usage/v9/gallery/gap/index.md';

<Gap />

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
