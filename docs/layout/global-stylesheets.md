---
title: Global Stylesheets
initialTab: 'preview'
inlineHtmlPreviews: true
---

<head>
  <title>Global Stylesheet: Styled CSS Component Options for Ionic Apps</title>
  <meta
    name="description"
    content="While Ionic component styles are self-contained, there are several global stylesheets and CSS options to include to utilize all features. Read to learn more."
  />
</head>

While Ionic Framework component styles are self-contained, there are several global stylesheets that should be included in order to use all of Ionic's features. Some of the stylesheets are required in order for an Ionic Framework app to look and behave properly, and others include optional utilities to quickly style your app.

## Available

### Required

The following CSS file must be included in order for Ionic Framework to work properly.

#### core.css

This file is the only stylesheet that is required in order for Ionic components to work properly. It includes app specific styles, and allows the `color` property to work across components. If this file is not included the colors will not show up and some elements may not appear properly.

### Recommended

The following CSS files are recommended to be included in an Ionic Framework app. If they are not included, some elements may have undesired styles. If Ionic Framework components are being used outside of an app, these files may not be necessary.

#### structure.css

Applies styles to `<html>` and defaults `box-sizing` to `border-box`. It ensures scrolling behaves like native in mobile devices.

#### typography.css

Typography changes the font-family of the entire document and modifies the font styles for heading elements. It also applies positioning styles to some native text elements.

#### normalize.css

Makes browsers render all elements more consistently and in line with modern standards. It is based on [Normalize.css](https://necolas.github.io/normalize.css/).

### Optional

The following set of CSS files are optional and can safely be commented out or removed if the application is not using any of the features.

#### padding.css

Adds utility classes to modify the padding or margin on any element, see [CSS Utilities](css-utilities.md#content-space) for usage information.

#### float-elements.css

Adds utility classes to float an element based on the breakpoint and side, see [CSS Utilities](css-utilities.md#element-placement) for usage information.

#### text-alignment.css

Adds utility classes to align the text of an element or adjust the white space based on the breakpoint, see [CSS Utilities](css-utilities.md#text-alignment) for usage information.

#### text-transformation.css

Adds utility classes to transform the text of an element to `uppercase`, `lowercase` or `capitalize` based on the breakpoint, see [CSS Utilities](css-utilities.md#text-transformation) for usage information.

#### flex-utils.css

Adds utility classes to align flex containers and items, see [CSS Utilities](css-utilities.md#flex-properties) for usage information.

#### display.css

Adds utility classes to hide any element based on the breakpoint, see [CSS Utilities](css-utilities.md#element-display) for usage information.

## Usage

Refer to [Ionic Packages](../intro/cdn.md) for how to include the global stylesheets based on the framework and [CSS Utilities](css-utilities.md) for how to use the optional utilities.
