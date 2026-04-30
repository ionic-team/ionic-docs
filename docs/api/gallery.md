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
    content="A gallery displays slotted content in responsive uniform or masonry layouts with configurable column counts and item ordering."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Gallery is a container for displaying images, cards, and other content in a responsive CSS grid. It supports `uniform` and `masonry` layouts, configurable column counts (fixed or breakpoint-based), and masonry ordering with `sequential` or `best-fit`.

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
