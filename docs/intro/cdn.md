---
title: Ionic Packages & CDN
sidebar_label: Packages & CDN
---

<head>
  <title>Ionic Framework Packages: CDN, Angular, Vue, React, and JavaScript</title>
  <meta
    name="description"
    content="View our different packages that can be used to quickly start using Ionic Framework or Ionicons CDN in a test environment, Angular, Vue, React, or JavaScript."
  />
</head>

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

Ionic Framework offers npm packages for Angular, React, Vue, and JavaScript, plus CDN links for quick prototyping. Choose your framework below to get started, or use the CDN to test Ionic Framework components in the browser.

## Ionic Angular

Start a new Ionic Angular app or add Ionic to your existing Angular project.

<DocsCards>

<DocsCard
  header="New Angular Project"
  href="../angular/quickstart"
  iconset="/icons/logo-angular-icon.png,/icons/guide-quickstart-icon.png"
>
  <p>Create a new Ionic Angular app using the Ionic CLI.</p>
</DocsCard>

<DocsCard
  header="Existing Angular Project"
  href="../angular/add-to-existing"
  iconset="/icons/logo-angular-icon.png,/icons/guide-package-icon.png"
>
  <p>Add Ionic Angular to an existing Angular project.</p>
</DocsCard>

</DocsCards>

## Ionic React

Start a new Ionic React app or add Ionic to your existing React project.

<DocsCards>

<DocsCard
  header="New React Project"
  href="../react/quickstart"
  iconset="/icons/logo-react-icon.png,/icons/guide-quickstart-icon.png"
>
  <p>Create a new Ionic React app using the Ionic CLI.</p>
</DocsCard>

<DocsCard
  header="Existing React Project"
  href="../react/add-to-existing"
  iconset="/icons/logo-react-icon.png,/icons/guide-package-icon.png"
>
  <p>Add Ionic React to an existing React project.</p>
</DocsCard>

</DocsCards>

## Ionic Vue

Start a new Ionic Vue app or add Ionic to your existing Vue project.

<DocsCards>

<DocsCard
  header="New Vue Project"
  href="../vue/quickstart"
  iconset="/icons/logo-vue-icon.png,/icons/guide-quickstart-icon.png"
>
  <p>Create a new Ionic Vue app using the Ionic CLI.</p>
</DocsCard>

<DocsCard
  header="Existing Vue Project"
  href="../vue/add-to-existing"
  iconset="/icons/logo-vue-icon.png,/icons/guide-package-icon.png"
>
  <p>Add Ionic Vue to an existing Vue project.</p>
</DocsCard>

</DocsCards>

## Ionic JavaScript

Start a new Ionic JavaScript app.

<DocsCards>

<DocsCard
  header="New JavaScript Project"
  href="../javascript/quickstart"
  iconset="/icons/logo-javascript-icon.png,/icons/guide-quickstart-icon.png"
>
  <p>Create a new Ionic JavaScript app using Vite.</p>
</DocsCard>

</DocsCards>

## Ionic Framework CDN

Ionic Framework can be included from a CDN for quick testing in a [StackBlitz](https://stackblitz.com/), [Plunker](https://plnkr.co/), [Codepen](https://codepen.io), or any other online code editor!

It's recommended to use [jsdelivr](https://www.jsdelivr.com/) to access the Framework from a CDN. To get the latest version, add the following inside the `<head>` element in an HTML file, or where external assets are included in the online code editor:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css" />
```

With this it's possible to use all of the Ionic Framework core components without having to install a framework. The CSS bundle will include all of the Ionic [Global Stylesheets](/docs/layout/global-stylesheets.md).

## Ionicons CDN

Ionicons is packaged by default with the Ionic Framework, so no installation is necessary if you're using Ionic. To use Ionicons without Ionic Framework, place the following `<script>` near the end of your page, right before the closing `</body>` tag.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/ionicons/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/ionicons/dist/ionicons/ionicons.js"></script>
```

For more information on using Ionicons, visit the [Ionicons documentation](https://ionic.io/ionicons/usage).
