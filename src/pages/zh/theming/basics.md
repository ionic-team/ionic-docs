---
previousText: 'Layout'
previousUrl: '/docs/layout/structure'
nextText: 'Platform Styles'
nextUrl: '/docs/theming/platform-styles'
contributors:
  - brandyscarney
---

# Theming Basics

Ionic Framework is built to be a blank slate that can easily be customized and modified to fit a brand, while still following the standards of the different platforms. Theming Ionic apps is now easier than ever. Because the framework is built with CSS, it comes with pre-baked default styles which are extremely easy to change and modify.

## Colors

Ionic has nine default colors that can be used to change the color of many components. Each color is actually a collection of multiple properties, including a `shade` and `tint`, used throughout Ionic.

When changing a color, it is important to set all of the related properties. This can be done easily with the [Color Generator](/docs/theming/color-generator) tool, but these can also be manually written if desired. For more information on Ionic colors, see [Advanced Colors](/docs/theming/advanced#colors).

<color-accordion></color-accordion>

## Platform Standards

Ionic components adapt their look and behavior based on the platform the app is running on. We call this **Platform Continuity**. This allows developers to build apps that use the same codebase for multiple platforms, while still looking "native" to those particular platforms.

Ionic has two **modes** that are used to customize the look of components based on the **platform**: `ios` and `md`. Each platform has a default mode, but this can easily be configured. For more information on customizing an application based on the platform, see [Platform Styles](/docs/theming/platform-styles).

## CSS Variables

All of the Ionic components are themed using <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables" target="_blank">CSS properties (variables)</a>. CSS variables add dynamic values to an otherwise static language. This is something that has traditionally required a CSS preprocessor like Sass. The look of an application can easily be changed by changing the value of any of the [Ionic Variables](/docs/theming/css-variables#ionic-variables).

## Branding

Ionic provides application colors that can be used to theme an application to match a brand or color scheme. The default theme uses a light background, but everything from the background color to the text color is fully customizable. For more information on branding, see [Advanced Theming](/docs/theming/advanced).