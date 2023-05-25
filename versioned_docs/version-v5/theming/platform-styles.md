---
title: 'Ionic Platform Styles | Platform-Specific Styles for Ionic Apps'
description: "Ionic provides platform-specific styles based on the app's device. Styling the components to match the device guidelines allows the app to feel native to users."
sidebar_label: Platform Styles
disableHtmlPreviews: true
---

# Platform Styles

Ionic provides platform specific styles based on the device the application is running on. Styling the components to match the device guidelines allows the application to be written once but look and feel native to the user depending on where it is accessed.

## Ionic Modes

Ionic uses **modes** to customize the look of components. Each **platform** has a default **mode**, but this can be overridden through the global [config](../angular/config.md). The following chart displays the default **mode** that is added to each **platform**:

| Platform  | Mode  | Description                                                                                                                      |
| --------- | ----- | -------------------------------------------------------------------------------------------------------------------------------- |
| `ios`     | `ios` | Viewing on an iPhone, iPad, or iPod will use the [iOS styles](https://www.apple.com/ios).                                        |
| `android` | `md`  | Viewing on any Android device will use the [Material Design styles](https://material.io/guidelines/).                            |
| `core`    | `md`  | Any platform that doesn't fit any of the above platforms will use the [Material Design styles](https://material.io/guidelines/). |

For example, an app being viewed on an Android platform will use the `md` (Material Design) mode by default. The `<html>` element will have `class="md"` added to it and all of the components will use Material Design styles:

```html
<html class="md"></html>
```

_Note: The **platform** and the **mode** are not the same. The platform can be set to use any mode in the [config](../angular/config.md) of an app._

## Overriding Mode Styles

Each Ionic component can be styled based on the mode. The `html` element has both a `class` and `mode` attribute with a value equal to the current mode. These can be used to override styles for any component. For example, to style an `ion-badge` to have `uppercase` text only in `ios` mode:

```css
.ios ion-badge {
  text-transform: uppercase;
}
```

There are also many global CSS variables that can be used to override the styles. To style the background color for an `ios` app, the following can be written:

```css
.ios {
  --ion-background-color: #222;
}
```

There are many global variables that can be overridden by mode, including [Ionic's color variables](colors.md), [theme variables](themes.md) and [global component variables](advanced.md).
