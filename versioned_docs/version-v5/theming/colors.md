---
initialTab: 'preview'
inlineHtmlPreviews: true
---

import LayeredColorsSelect from '@components/page/theming/LayeredColorsSelect';
import NewColorGenerator from '@components/page/theming/NewColorGenerator';
import CodeColor from '@components/page/theming/CodeColor';

# Colors

Ionic has nine default colors that can be used to change the color of many components. Each color is actually a collection of multiple properties, including a `shade` and `tint`, used throughout Ionic.

A color can be applied to an Ionic component in order to change the default colors using the `color` attribute. Notice in the buttons below that the text and background changes based on the `color` set. When there is no `color` set on the button it uses the `primary` color by default.

```html
<ion-button>Default</ion-button>
<ion-button color="primary">Primary</ion-button>
<ion-button color="secondary">Secondary</ion-button>
<ion-button color="tertiary">Tertiary</ion-button>
<ion-button color="success">Success</ion-button>
<ion-button color="warning">Warning</ion-button>
<ion-button color="danger">Danger</ion-button>
<ion-button color="light">Light</ion-button>
<ion-button color="medium">Medium</ion-button>
<ion-button color="dark">Dark</ion-button>
```

## Layered Colors

Each color consists of the following properties: a `base`, `contrast`, `shade`, and `tint`. The `base` and `contrast` colors also require a `rgb` property which is the same color, just in <a href="https://developer.mozilla.org/en-US/docs/Glossary/RGB" target="_blank">rgb format</a>. See [The Alpha Problem](advanced.md#the-alpha-problem) for an explanation of why the `rgb` property is also needed. Select from the dropdown below to see all of the default colors Ionic provides and their variations.

<LayeredColorsSelect />

## Modifying Colors

To change the default values of a color, all of the listed variations for that color should be set. For example, to change the secondary color to <CodeColor color="#006600">#006600</CodeColor>, set the following CSS properties:

```css
:root {
  --ion-color-secondary: #006600;
  --ion-color-secondary-rgb: 0, 102, 0;
  --ion-color-secondary-contrast: #ffffff;
  --ion-color-secondary-contrast-rgb: 255, 255, 255;
  --ion-color-secondary-shade: #005a00;
  --ion-color-secondary-tint: #1a751a;
}
```

When `secondary` is applied to a button, not only is the base color <CodeColor color="#006600">#006600</CodeColor> used, but the contrast color <CodeColor color="#ffffff">#ffffff</CodeColor> is used for the text, along with shade <CodeColor color="#005a00">#005a00</CodeColor> and tint <CodeColor color="#1a751a">#1a751a</CodeColor> colors for the different states of the button.

:::note
Not sure how to get the variation colors from the base color? Try out our [Color Generator](color-generator.md) that calculates all of the variations and provides code to copy/paste into an app!
:::

See the [CSS Variables documentation](css-variables.md) for more information on CSS variables.

## Adding Colors

Colors can be added for use throughout an application by setting the `color` property on an Ionic component, or by styling with CSS. Read on to see how to manually add a new color, or use the [New Color Creator](#new-color-creator) below for a quick way to generate the code of a new color to be copy and pasted into an application.

To add a new color, first define the CSS variables for all of the variations of the color at the root. For example, to add a new color called `favorite`, we can define the following variables:

```css
:root {
  --ion-color-favorite: #69bb7b;
  --ion-color-favorite-rgb: 105, 187, 123;
  --ion-color-favorite-contrast: #ffffff;
  --ion-color-favorite-contrast-rgb: 255, 255, 255;
  --ion-color-favorite-shade: #5ca56c;
  --ion-color-favorite-tint: #78c288;
}
```

Then, create a new class that uses these CSS variables. The class **must** be written in the format `.ion-color-{COLOR}` where `{COLOR}` is the name of the color to add:

```css
.ion-color-favorite {
  --ion-color-base: var(--ion-color-favorite);
  --ion-color-base-rgb: var(--ion-color-favorite-rgb);
  --ion-color-contrast: var(--ion-color-favorite-contrast);
  --ion-color-contrast-rgb: var(--ion-color-favorite-contrast-rgb);
  --ion-color-shade: var(--ion-color-favorite-shade);
  --ion-color-tint: var(--ion-color-favorite-tint);
}
```

After the class is added, the color can be used on any Ionic component that supports the `color` property. An example of using the `favorite` color on an Ionic button is below.

```html
<ion-button color="favorite">Favorite</ion-button>
```

The CSS variables defined at the root can also be used to style any element using CSS:

```css
div {
  background: var(--ion-color-favorite);
  color: var(--ion-color-favorite-contrast);
}
```

See the [CSS Variables documentation](css-variables.md) for more information on setting and using CSS variables.

## New Color Creator

Create a new color below by changing the name and value, then copy and paste the code below into your project.

<NewColorGenerator />
