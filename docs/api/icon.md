---
title: 'ion-icon'
---

<head>
  <title>ion-icon: Icon Component for Ionic Framework Apps</title>
  <meta
    name="description"
    content="Ion-icon is a component for displaying premium designed icons with support for SVG and web font."
  />
</head>

Icon is a universal container for displaying icons. While <a href="https://ionic.io/ionicons">Ionicons</a> is included by default with all Ionic Framework applications, the component can display Ionicons, custom SVGs, font-based icon libraries, and other icon systems. It provides consistent styling and sizing regardless of where an icon comes from.

For Ionicons documentation, refer to <a href="https://ionic.io/ionicons">ionic.io/ionicons</a>.

## Basic Usage

import Basic from '@site/static/usage/v9/icon/basic/index.mdx';

<Basic />

## Font Icons

Font-based icons from libraries such as Font Awesome, Bootstrap Icons, Remix Icons, and Phosphor Icons can be displayed by slotting them into Icon.

import FontIcons from '@site/static/usage/v9/icon/font-icons/index.mdx';

<FontIcons />

## Custom SVGs

Custom SVGs can be displayed with Icon in two ways: by loading an external SVG file using the `src` property or by slotting SVG content directly into the component.

import CustomSVGs from '@site/static/usage/v9/icon/custom-svgs/index.mdx';

<CustomSVGs />

## Accessibility

Icons that are purely decorative content should have <code>aria-hidden="true"</code>. This will not visually hide the icon, but it will hide the element from assistive technology.

```html
<!-- Ionicon -->
<ion-icon name="heart" aria-hidden="true"></ion-icon>

<!-- Font-based icon -->
<ion-icon aria-hidden="true">
  <i class="fas fa-heart"></i>
</ion-icon>
```

If the icon is interactive, it should have alternate text defined by adding an <code>aria-label</code>.

```html
<!-- Ionicon -->
<ion-icon name="heart" aria-label="Favorite"></ion-icon>

<!-- Font-based icon -->
<ion-icon aria-label="Favorite">
  <i class="fas fa-heart"></i>
</ion-icon>
```

Alternatively, if the icon is inside of another element that it is describing, that element should have the <code>aria-label</code> added to it, and the icon should be hidden using <code>aria-hidden</code>.

```html
<!-- Ionicon -->
<ion-button aria-label="Favorite">
  <ion-icon name="heart" aria-hidden="true"></ion-icon>
</ion-button>

<!-- Font-based icon -->
<ion-button aria-label="Favorite">
  <ion-icon aria-hidden="true">
    <i class="fas fa-heart"></i>
  </ion-icon>
</ion-button>
```
