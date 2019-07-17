---
initialTab: 'preview'
inlineHtmlPreviews: true
previousText: 'CSS Variables'
previousUrl: '/docs/theming/css-variables'
nextText: 'Themes'
nextUrl: '/docs/theming/themes'
---

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

Each color consists of the following properties: a `base`, `contrast`, `shade`, and `tint`. The `base` and `contrast` colors also require a `rgb` property which is the same color, just in <a href="https://developer.mozilla.org/en-US/docs/Glossary/RGB" target="_blank">rgb format</a>. See [The Alpha Problem](./advanced#the-alpha-problem) for an explanation of why the `rgb` property is also needed. Select from the dropdown below to see all of the default colors Ionic provides and their variations.

<layered-colors-select mode="md" no-prerender></layered-colors-select>

## Modifying Colors

To change the default values of a color, all of the listed variations for that color should be set. For example, to change the secondary color to <code-color mode="md" value="#006600"></code-color>, set the following CSS properties:

```css
:root {
  --ion-color-secondary: #006600;
  --ion-color-secondary-rgb: 0,102,0;
  --ion-color-secondary-contrast: #ffffff;
  --ion-color-secondary-contrast-rgb: 255,255,255;
  --ion-color-secondary-shade: #005a00;
  --ion-color-secondary-tint: #1a751a;
}
```

When `secondary` is applied to a button, not only is the base color <code-color mode="md" value="#006600"></code-color> used, but the contrast color <code-color mode="md" value="#ffffff"></code-color> is used for the text, along with shade <code-color mode="md" value="#005a00"></code-color> and tint <code-color mode="md" value="#1a751a"></code-color> colors for the different states of the button.

> Not sure how to get the variation colors from the base color? Try out our [Color Generator](/docs/theming/color-generator) that calculates all of the variations and provides code to copy/paste into an app!

See the [CSS Variables documentation](/docs/theming/css-variables) for more information on CSS variables.

## Adding Colors

To add a new color, create a class that defines all of the variations using CSS variables for that color. The class should be written in the format `.ion-color-{COLOR}` where `{COLOR}` is the name of the color to add. For example, to add a color called `favorite`, the following class could be added:

```css
.ion-color-favorite {
  --ion-color-base: #69bb7b;
  --ion-color-base-rgb: 105,187,123;
  --ion-color-contrast: #ffffff;
  --ion-color-contrast-rgb: 255,255,255;
  --ion-color-shade: #5ca56c;
  --ion-color-tint: #78c288;
}
```

Once the class is added, the color can be used on any Ionic component that supports the `color` property. An example of using the `favorite` color on an Ionic button is below.

```html
<ion-button color="favorite">Favorite</ion-button>
```

It's important to note that adding the class above does not automatically create the Ionic CSS variables for use in an application's stylesheets. This means that the variations beginning with `--ion-color-favorite` **do not exist** by adding the `.ion-color-favorite` class. These should be declared separately for use in an application:

```css
:root {
  --ion-color-favorite: #69bb7b;
  --ion-color-favorite-rgb: 105,187,123;
  --ion-color-favorite-contrast: #ffffff;
  --ion-color-favorite-contrast-rgb: 255,255,255;
  --ion-color-favorite-shade: #5ca56c;
  --ion-color-favorite-tint: #78c288;
}
```

Now the `favorite` color can be used in CSS like below to set the `background` and `color` on a `div`.

```css
div {
  background: var(--ion-color-favorite);
  color: var(--ion-color-favorite-contrast);
}
```

See the [CSS Variables documentation](/docs/theming/css-variables) for more information on CSS variables.