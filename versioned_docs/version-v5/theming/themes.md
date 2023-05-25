---
title: 'Ionic App Themes | Change Default App Background Themes & Colors'
description: 'Several global variables change the default theme of an entire application. Create a custom background and text color theme for your app with Ionic themes.'
sidebar_label: Themes
initialTab: 'preview'
inlineHtmlPreviews: true
---

import CodeColor from '@components/page/theming/CodeColor';
import SteppedColorGenerator from '@components/page/theming/SteppedColorGenerator';

# Themes

Ionic provides several global variables that are used throughout components to change the default theme of an entire application. [Application Colors](#application-colors) are useful to change the look of most of the Ionic components, and [Stepped Colors](#stepped-colors) are used as variations in some of the Ionic components.

## Application Colors

The application colors are used in multiple places in Ionic. These are useful for easily creating dark themes or themes that match a brand.

It is important to note that the background and text color variables also require a rgb variable to be set in <a href="https://developer.mozilla.org/en-US/docs/Glossary/RGB" target="_blank">rgb format</a>. See [The Alpha Problem](advanced.md#the-alpha-problem) for an explanation of why the `rgb` property is also needed.

| Name                                       | Description                                          |
| ------------------------------------------ | ---------------------------------------------------- |
| `--ion-background-color`                   | Background color of the entire app                   |
| `--ion-background-color-rgb`               | Background color of the entire app, rgb format       |
| `--ion-text-color`                         | Text color of the entire app                         |
| `--ion-text-color-rgb`                     | Text color of the entire app, rgb format             |
| `--ion-backdrop-color`                     | Color of the Backdrop component                      |
| `--ion-backdrop-opacity`                   | Opacity of the Backdrop component                    |
| `--ion-overlay-background-color`           | Background color of the overlays                     |
| `--ion-border-color`                       | Border color                                         |
| `--ion-box-shadow-color`                   | Box shadow color                                     |
| `--ion-tab-bar-background`                 | Background of the Tab Bar                            |
| `--ion-tab-bar-background-focused`         | Background of the focused Tab Bar                    |
| `--ion-tab-bar-border-color`               | Border color of the Tab Bar                          |
| `--ion-tab-bar-color`                      | Color of the Tab Bar                                 |
| `--ion-tab-bar-color-selected`             | Color of the selected Tab Button                     |
| `--ion-toolbar-background`                 | Background of the Toolbar                            |
| `--ion-toolbar-border-color`               | Border color of the Toolbar                          |
| `--ion-toolbar-color`                      | Color of the components in the Toolbar               |
| `--ion-toolbar-segment-color`              | Color of the Segment Buttons in the Toolbar          |
| `--ion-toolbar-segment-color-checked`      | Color of the checked Segment Buttons in the Toolbar  |
| `--ion-toolbar-segment-background`         | Background of the Segment Buttons in the Toolbar     |
| `--ion-toolbar-segment-background-checked` | Background of the Segment Buttons in the Toolbar     |
| `--ion-toolbar-segment-indicator-color`    | Color of the Segment Button indicator in the Toolbar |
| `--ion-item-background`                    | Background of the Item                               |
| `--ion-item-border-color`                  | Border color of the Item                             |
| `--ion-item-color`                         | Color of the components in the Item                  |
| `--ion-placeholder-color`                  | Color of the placeholder in Inputs                   |

## Stepped Colors

After exploring different ways to customize the Ionic theme, we found that we couldn't use just one background or text color. In order to imply importance and depth throughout the design, we need to use different shades of the background and text colors. To accommodate this pattern, we created stepped colors.

While updating the background (`--ion-background-color`) and text (`--ion-text-color`) variables will change the look of the app for most components, there are certain Ionic components where it may look off, or broken. This will be more apparent when applying a darker theme.

In some components we use a shade darker than the background or lighter than the text. For example, an item heading text may need to be <CodeColor color="#404040">#404040</CodeColor>, which is a few shades lighter than our default text color. Meanwhile, the loading component background is a shade darker than white, using <CodeColor color="#f2f2f2">#f2f2f2</CodeColor>. We use stepped colors in order to define these slight variations. It is important to update the stepped colors when updating the background or text color of an application.

By default, the Ionic stepped colors start at the default background color value <CodeColor color="#ffffff">#ffffff</CodeColor> and mix with the text color value <CodeColor color="#000000">#000000</CodeColor> using an increasing percentage. The full list of stepped colors is shown in the generator below.

## Stepped Color Generator

Create a custom background and text color theme for your app. Update the background or text color’s hex values below, then copy and paste the generated code directly into your Ionic project.

<SteppedColorGenerator />
