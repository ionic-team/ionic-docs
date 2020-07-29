---
initialTab: 'preview'
inlineHtmlPreviews: true
previousText: 'CSS Shadow Parts'
previousUrl: '/docs/theming/css-shadow-parts'
nextText: 'Themes'
nextUrl: '/docs/theming/themes'
---

# Couleurs

Ionic a neuf couleurs par défaut qui peuvent être utilisées pour modifier la couleur de vos composants. Chaque couleur est en fait une collection de différentes propriétés, y compris un `nuance` et `teintes`, utilisé dans Ionic.

Une couleur peut être appliquée à un composant Ionic afin de changer les couleurs par défaut en utilisant l'attribut `couleur`. Remarquez dans les boutons ci-dessous que le texte et l'arrière-plan changent en fonction de la couleur `de` définie. Quand il n'y a pas de `couleur` définie sur le bouton, il utilise par défaut la `couleur primaire`.

```html
<ion-button>Défaut</ion-button>
<ion-button color="primary">Primaire</ion-button>
<ion-button color="secondary">Secondaire</ion-button>
<ion-button color="tertiary">Tertiaire</ion-button>
<ion-button color="success">Succès</ion-button>
<ion-button color="warning">Alerte</ion-button>
<ion-button color="danger">Danger</ion-button>
<ion-button color="light">Lumière</ion-button>
<ion-button color="medium">Moyen</ion-button>
Noir<ion-button color="dark">Noir</ion-button>
```

## Layered Colors

Each color consists of the following properties: a `base`, `contrast`, `shade`, and `tint`. The `base` and `contrast` colors also require a `rgb` property which is the same color, just in <a href="https://developer.mozilla.org/en-US/docs/Glossary/RGB" target="_blank">rgb format</a>. See [The Alpha Problem](./advanced#the-alpha-problem) for an explanation of why the `rgb` property is also needed. Select from the dropdown below to see all of the default colors Ionic provides and their variations.

<layered-colors-select mode="md" no-prerender></layered-colors-select>

## Modifying Colors

To change the default values of a color, all of the listed variations for that color should be set. For example, to change the secondary color to <code-color mode="md" value="#006600">&lt;/code-color>, set the following CSS properties:&lt;/p>

&lt;pre>&lt;code class="css">:root {
  --ion-color-secondary: #006600;
  --ion-color-secondary-rgb: 0,102,0;
  --ion-color-secondary-contrast: #ffffff;
  --ion-color-secondary-contrast-rgb: 255,255,255;
  --ion-color-secondary-shade: #005a00;
  --ion-color-secondary-tint: #1a751a;
}
</code></pre> 

When `secondary` is applied to a button, not only is the base color <code-color mode="md" value="#006600">&lt;/code-color> used, but the contrast color &lt;code-color mode="md" value="#ffffff">&lt;/code-color> is used for the text, along with shade &lt;code-color mode="md" value="#005a00">&lt;/code-color> and tint &lt;code-color mode="md" value="#1a751a">&lt;/code-color> colors for the different states of the button.&lt;/p>

&lt;blockquote>
  &lt;p>Not sure how to get the variation colors from the base color? Try out our &lt;a href="/docs/theming/color-generator">Color Generator&lt;/a> that calculates all of the variations and provides code to copy/paste into an app!&lt;/p>
&lt;/blockquote>

&lt;p>See the &lt;a href="/docs/theming/css-variables">CSS Variables documentation&lt;/a> for more information on CSS variables.&lt;/p>

&lt;h2>Adding Colors&lt;/h2>

&lt;p>Colors can be added for use throughout an application by setting the &lt;code>color</code> property on an Ionic component, or by styling with CSS. Read on to see how to manually add a new color, or use the [New Color Creator](#new-color-creator) below for a quick way to generate the code of a new color to be copy and pasted into an application.

To add a new color, first define the CSS variables for all of the variations of the color at the root. For example, to add a new color called `favorite`, we can define the following variables:

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

See the [CSS Variables documentation](/docs/theming/css-variables) for more information on setting and using CSS variables.

## New Color Creator

Create a new color below by changing the name and value, then copy and paste the code below into your project.

<new-color-generator mode="md" no-prerender></new-color-generator>