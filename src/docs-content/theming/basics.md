# Theming Basics

Ionic components can be themed at runtime using CSS properties. For more advanced theming, check out the **Theming with Sass** section of this guide. For a more in depth look at CSS theming, head over to the **Theming with CSS** section. To change the look of your application you can simply set any CSS properties you would like to change. Currently, Ionic's runtime theming is restricted to color changes. For layout changes you will need to dive into Sass theming. To begin, lets talk about the basic color concepts.

#### The Color Map

```
primary
secondary
tertiary
success
warning
danger
light
medium
dark
```

These colors can then be used by setting the color attribute of a component.

```html
<ion-button color="primary">Primary</ion-button>
```

#### Layered Colors

Colors from the Color Map are actually collections of colors. Each color consists of 5 separate values. For example, primary color will translate into the following CSS properties.

```css
--ion-color-primary: #488aff;
--ion-color-primary-rgb: 72, 138, 255;
--ion-color-primary-contrast: #ffffff;
--ion-color-primary-shade: #3f79e0;
--ion-color-primary-tint: #5a96ff;
```

When changing the primary color, it is important to set all of the corresponding layers. For example, when you use `primary` as a button color, not only is the base color (`#488aff`) used, but the contrast colors for the text, along with shade and tint colors for other states of the button, are used as well.

* Contrast: Should be visible against the base color
* Shade: Should be a slightly darker version of the base color
* Tint: Should be a slightly lighter version of the base color
* RGB: A RGB List representation of the base color. This allows the color to have alpha levels applied.

#### Application Colors

Ionic also provides application colors. These colors are named to match their usage. For example, `--ion-text-color` will change the primary text color used throughout the app. It is worth noting that `--ion-text-color` and `--ion-background-color` are both stepped colors and, when updating one, steps should be generated. You can read more about color steps in the "Theming with CSS" Section of this guide.

Ionic provides the following application colors:

```css
--ion-backdrop-color
--ion-overlay-background-color
--ion-background-color
--ion-border-color
--ion-box-shadow-color
--ion-text-color
--ion-tabbar-background-color
--ion-tabbar-border-color
--ion-tabbar-text-color
--ion-tabbar-text-color-active
--ion-toolbar-background-color
--ion-toolbar-border-color
--ion-toolbar-color-active
--ion-toolbar-color-inactive
--ion-toolbar-text-color
--ion-item-background-color
--ion-item-background-color-active
--ion-item-border-color
--ion-item-text-color
--ion-placeholder-text-color
```

## Setting CSS Properties

The easiest way to apply application-wide properties is to load a CSS file that applies variables to the root.

```css
:root {
  --ion-color-primary: #00ff00;
}
```

CSS properties can also be applied to any selector to theme a specific component.

```css
.my-button {
  --ion-color-primary: #00ff00;
}
```

CSS Properties can also be changed via javascript using setProperty.

```js
const el = document.querySelector('.my-fancy-button');
el.style.setProperty('--ion-primary-color', '#ff0000');
```
