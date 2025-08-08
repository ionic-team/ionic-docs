---
title: 'Ionic Core Custom Components'
sidebar_label: Ionic Core
---

# Setting Up an Ionic Core Project with Vite (Vanilla JS)

This guide walks you through integrating [Ionic Core](https://ionicframework.com/docs/components) with a plain JavaScript (Vanilla) project using Vite. You'll get tree-shaking support, efficient bundle sizes, and a solid development experience.

# 1. Navigate to your desired directory and create a new Vite project

Open your terminal and run:

```shell
npm create vite@latest my-vanilla-ionic-app -- --template vanilla
```

# 2. Move into your project folder

```shell
cd my-vanilla-ionic-app
```

# 3. Install project dependencies

Install both Vite's dependencies and Ionic Core:

```shell
npm install
npm install @ionic/core
```

# 5. Link Ionic CSS in `index.html`

Add the following `<link>` inside the `<head>` tag in index.html:

`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css" />`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <title>Ionic Core - Example</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css" />
  </head>
  <body>
    <ion-app>
      <ion-header>
        <ion-toolbar>
          <ion-title>My Ionic App</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <ion-button expand="block">Click Me</ion-button>
      </ion-content>
    </ion-app>
  </body>
</html>
```

# 6. Configure main.js for Tree-Shaking

    - Open your project's main JavaScript entry file, which Vite typically names `main.js` in the project's root.
    - Add the Ionic `defineCustomElements` code to this file:

```js
import { defineCustomElements } from '@ionic/core/loader';

const resourcesUrl = '/';

defineCustomElements(window, {
  components: ['ion-app', 'ion-button', 'ion-card', 'ion-header', 'ion-toolbar', 'ion-title', 'ion-content'],
  resourcesUrl: resourcesUrl,
});
```

# 7. Run the Development Server

Now that we're finally all set-up we can start our development server:

```shell
npm run dev
```

Your app will be available at http://localhost:5173. You should see Ionic-styled components working as expected.

9. Build for Production:

```shell
npm run build
```

The optimized production build will be output to the dist/ directory. Tree-shaking ensures only the components listed in main.js are included.

# Bonus: Framework Integrations

You can use Ionic Web Components in other frameworks that support custom elements.

Live examples below:

- [Svelte](https://stackblitz.com/edit/vitejs-vite-bp6vxnem?file=src%2FApp.svelte)

- [Alpine.JS](https://stackblitz.com/edit/vitejs-vite-kg36bvri?file=index.html)

- [Lit.JS](https://stackblitz.com/edit/vitejs-vite-twfn9ilc?file=package.json)

> Note: When integrating Ionic Core into projects using libraries such as Svelte, Alpine, or Lit, be aware that you won't have the built-in form and routing capabilities that are tightly coupled with Ionic's official Angular, React, and Vue framework integrations. You'll need to handle these aspects using the patterns and tools provided by your chosen library.
