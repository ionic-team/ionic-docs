---
previousText: 'Ionic CLI'
previousUrl: '/docs/installation/cli'
nextText: 'Environment Setup'
nextUrl: '/docs/installation/environment'
contributors:
  - brandyscarney
  - rtpHarry
---

# Ionic Packages

Ionic provides different packages that can be used to quickly get started using Ionic Framework or Ionicons in a test environment, Angular, any other framework, or none at all.

## Ionic Framework CDN

Ionic Framework can be included from a CDN for quick testing in a [Plunker](https://plnkr.co/), [Codepen](https://codepen.io), or any other online code editor!

It's recommended to use [jsdelivr](https://www.jsdelivr.com/) to access the Framework from a CDN. To get the latest version, add the following inside the `<head>` element in an HTML file, or where external assets are included in the online code editor:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@ionic/core@4.7.4/dist/ionic/ionic.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@ionic/core@4.7.4/dist/ionic/ionic.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ionic/core@4.7.4/css/ionic.bundle.css"/>
```

With this it's possible to use all of the Ionic Framework core components without having to install a framework. The CSS bundle will include all of the Ionic [Global Stylesheets](../layout/global-stylesheets).

> This does not install Angular or any other frameworks. This allows use of the Ionic Framework core components without a framework.

## Angular + Ionic Framework

When using Ionic Framework in an Angular project, install the latest `@ionic/angular` package from [npm](/docs/faq/glossary#npm). This comes with all of the Ionic Framework components and Angular specific services and features.

```shell
$ npm install @ionic/angular@latest --save
```

Each time there is a new Ionic Framework release, this [version](/docs/intro/versioning) will need to be updated to get the latest features and fixes. The version can be [updated using npm](/docs/faq/tips#updating-dependencies), as well.

### CSS

Create a global stylesheet file and add it to the `styles` object in the [Angular workspace config](https://angular.io/guide/workspace-config). Add the following imports to that file:

```css
/* Core CSS required for Ionic components to work properly */
@import "~@ionic/angular/css/core.css";

/* Basic CSS for apps built with Ionic */
@import "~@ionic/angular/css/normalize.css";
@import "~@ionic/angular/css/structure.css";
@import "~@ionic/angular/css/typography.css";

/* Optional CSS utils that can be commented out */
@import "~@ionic/angular/css/padding.css";
@import "~@ionic/angular/css/float-elements.css";
@import "~@ionic/angular/css/text-alignment.css";
@import "~@ionic/angular/css/text-transformation.css";
@import "~@ionic/angular/css/flex-utils.css";
@import "~@ionic/angular/css/display.css";
```

See [Global Stylesheets](../layout/global-stylesheets) for the styles that each of these files contain.

## Stencil + Ionic Framework

When using Ionic Framework in a Stencil project, install the latest `@ionic/core` package from [npm](/docs/faq/glossary#npm). This comes with all of the Ionic Framework components.

```shell
$ npm install @ionic/core@latest --save
```

### JS

Include an import of `@ionic/core` in the root app file:

```typescript
import '@ionic/core';
```

### CSS

Create a global stylesheet file and add it to the `config` object in the [Stencil Config](https://stenciljs.com/docs/config).

```javascript
exports.config = {
  // ...

  globalStyle: 'src/global.css'

  // ...
};
```

Add the following imports to that file:

```css
/* Core CSS required for Ionic components to work properly */
@import "~@ionic/core/css/core.css";

/* Basic CSS for apps built with Ionic */
@import "~@ionic/core/css/normalize.css";
@import "~@ionic/core/css/structure.css";
@import "~@ionic/core/css/typography.css";

/* Optional CSS utils that can be commented out */
@import "~@ionic/core/css/padding.css";
@import "~@ionic/core/css/float-elements.css";
@import "~@ionic/core/css/text-alignment.css";
@import "~@ionic/core/css/text-transformation.css";
@import "~@ionic/core/css/flex-utils.css";
@import "~@ionic/core/css/display.css";
```

See [Global Stylesheets](../layout/global-stylesheets) for the styles that each of these files contain.

## Ionicons CDN

Ionicons is packaged by default with the Ionic Framework, so no installation is necessary if you're using Ionic. To use Ionicons without Ionic Framework, place the following `<script>` near the end of your page, right before the closing `</body>` tag.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/ionicons@4.7.4/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/ionicons@4.7.4/dist/ionicons/ionicons.js"></script>
```

> See [Ionicons usage](https://ionicons.com/usage) for more information on using Ionicons.