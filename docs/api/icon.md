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

Icon is a simple component made available through the <a href="https://ionic.io/ionicons">Ionicons</a> library, which comes pre-packaged by default with all Ionic Framework applications. It can be used to display any icon from the Ionicons set, or a custom SVG. It also has support for styling such as size and color.

For a list of all available icons, see <a href="https://ionic.io/ionicons">ionic.io/ionicons</a>. For more information including styling and custom SVG usage, see <a href="https://ionic.io/ionicons/usage">the Usage page</a>.

## Basic Usage

import Basic from '@site/static/usage/v7/icon/basic/index.md';

<Basic />


## Accessibility

Icons that are purely decorative content should have <code>aria-hidden="true"</code>. This will not visually hide the icon, but it will hide the element from assistive technology.

```html
<ion-icon name="heart" aria-hidden="true"></ion-icon>
```


If the icon is interactive, it should have alternate text defined by adding an <code>aria-label</code>.

```html
<ion-icon name="heart" aria-label="Favorite"></ion-icon>
```

Alternatively, if the icon is inside of another element that it is describing, that element should have the <code>aria-label</code> added to it, and the icon should be hidden using <code>aria-hidden</code>.

```html
<ion-button aria-label="Favorite">
  <ion-icon name="heart" aria-hidden="true"></ion-icon>
</ion-button>
```
