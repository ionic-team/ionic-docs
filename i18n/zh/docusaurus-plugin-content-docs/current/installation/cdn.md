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
<script type="module" src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css"/>
```

With this it's possible to use all of the Ionic Framework core components without having to install a framework. The CSS bundle will include all of the Ionic [Global Stylesheets](../layout/global-stylesheets).

> This does not install Angular or any other frameworks. This allows use of the Ionic Framework core components without a framework.

## Ionic + Angular

When using Ionic Framework in an Angular project, install the latest `@ionic/angular` package from [npm](/docs/faq/glossary#npm). This comes with all of the Ionic Framework components and Angular specific services and features.

```shell
$ npm install @ionic/angular@latest --save
```

Each time there is a new Ionic Framework release, this [version](/docs/intro/versioning) will need to be updated to get the latest features and fixes. The version can be [updated using npm](/docs/faq/tips#updating-dependencies), as well.

For adding Ionic to an already existing Angular project, use the Angular CLI's `ng add` feature.

```shell
$ ng add @ionic/angular
```

This will add the necessary imports to the `@ionic/angular` package as well as add the styles needed.

## Ionic + React

To add Ionic to an already existing React project, install the `@ionic/react` and `@ionic/react-router` package.

```shell
$ npm install @ionic/react
$ npm install @ionic/react-router
```

### CSS

To include the necessary CSS in a React project, add the following to the root App component.

```javascript
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
```

## Ionicons CDN

Ionicons is packaged by default with the Ionic Framework, so no installation is necessary if you're using Ionic. To use Ionicons without Ionic Framework, place the following `<script>` near the end of your page, right before the closing `</body>` tag.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/ionicons@4.7.4/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/ionicons@4.7.4/dist/ionicons/ionicons.js"></script>
```

> See [Ionicons usage](https://ionic.io/ionicons/usage) for more information on using Ionicons.