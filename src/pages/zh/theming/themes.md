---
initialTab: 'preview'
inlineHtmlPreviews: true
previousText: 'Colors'
previousUrl: '/docs/theming/colors'
nextText: 'Dark Mode'
nextUrl: '/docs/theming/dark-mode'
---

# Themes

Ionic provides several global variables that are used throughout components to change the default theme of an entire application. [Application Colors](#application-colors) are useful to change the look of most of the Ionic components, and [Stepped Colors](#stepped-colors) are used as variations in some of the Ionic components.

## Application Colors

The application colors are used in multiple places in Ionic. These are useful for easily creating dark themes or themes that match a brand.

It is important to note that the background and text color variables also require a rgb variable to be set in <a href="https://developer.mozilla.org/en-US/docs/Glossary/RGB" target="_blank">rgb format</a>. See [The Alpha Problem](./advanced#the-alpha-problem) for an explanation of why the `rgb` property is also needed.

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

In some components we use a shade darker than the background or lighter than the text. For example, an item heading text may need to be <code-color mode="md" value="#404040"></code-color>, which is a few shades lighter than our default text color. Meanwhile, the loading component background is a shade darker than white, using <code-color mode="md" value="#f2f2f2"></code-color>. We use stepped colors in order to define these slight variations. It is important to update the stepped colors when updating the background or text color of an application.</p>

<p>By default, the Ionic stepped colors start at the default background color value <code-color mode="md" value="#ffffff"></code-color> and mix with the text color value <code-color mode="md" value="#000000"></code-color> using an increasing percentage. The full list of stepped colors is shown in the generator below.</p>

<h2>Stepped Color Generator</h2>

<p>Create a custom background and text color theme for your app. Update the background or text color’s hex values below, then copy and paste the generated code directly into your Ionic project.</p>

<p><stepped-color-generator mode="md" no-prerender></stepped-color-generator></p>