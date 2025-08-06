---
title: Ionic Vue Quickstart
sidebar_label: Quickstart
---

<head>
  <title>Ionic Vue Quickstart Using Ionic CLI: Vue Basics</title>
  <meta
    name="description"
    content="Ionic Vue Quickstart covers the basics of Vue and Ionic, including any Ionic-specific features. Learn how to build Vue apps using the Ionic CLI."
  />
</head>

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

Welcome! This guide will walk you through the basics of Ionic Vue development. You'll learn how to set up your development environment, generate a simple project, explore the project structure, and understand how Ionic components work. This is perfect for getting familiar with Ionic Vue before building your first real app.

If you're looking for a high-level overview of what Ionic Vue is and how it fits into the Vue ecosystem, see the [Ionic Vue Overview](overview).

## Prerequisites

Before you begin, make sure you have Node.js and npm installed on your machine.
You can check by running:

```shell
node -v
npm -v
```

If you don't have Node.js and npm, [download Node.js here](https://nodejs.org/en/download) (which includes npm).

## Create a Project with the Ionic CLI

First, install the latest [Ionic CLI](../cli):

```shell
npm install -g @ionic/cli
```

Then, run the following commands to create and run a new project:

```shell
ionic start myApp blank --type vue

cd myApp
ionic serve
```

After running `ionic serve`, your project will open in the browser.

![Screenshot of the Ionic Vue Home page](/img/guides/quickstart/home-page.png 'Ionic Vue Home Component')

## Explore the Project Structure

Your new app's `src` directory will look like this:

```shell
├── App.vue
├── main.ts
├── router
│   └── index.ts
└── views
    └── HomePage.vue
```

Let's walk through these files to understand the app's structure.

## View the App Component

The root of your app is defined in `App.vue`:

```tsx
<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
</script>
```

This sets up the root of your application, using Ionic's `ion-app` and `ion-router-outlet` components. The router outlet is where your pages will be displayed.

## View Routes

Routes are defined in `router/index.ts`:

```ts
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
```

When you visit the root URL (`/`), the `HomePage` component will be loaded.

## View the Home Page

The Home page component, defined in `Views/HomePage.vue`, imports the Ionic components and defines the page template:

```html
<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Blank</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <strong>Ready to create an app?</strong>
        <p>
          Start with Ionic
          <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components"
            >UI Components</a
          >
        </p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
</script>

<!-- ...styles... -->
```

This creates a page with a header and scrollable content area. The second header shows a [collapsible large title](/docs/api/title#collapsible-large-titles) that displays when at the top of the content, then condenses to show the smaller title in the first header when scrolling down.

:::tip Learn More
For detailed information about Ionic layout components, see the [Header](/docs/api/header), [Toolbar](/docs/api/toolbar), [Title](/docs/api/title), and [Content](/docs/api/content) documentation.
:::

## Add an Ionic Component

You can enhance your Home page with more Ionic UI components. For example, add a [Button](/docs/api/button) at the end of the `ion-content`:

```html
<ion-content>
  <!-- existing content -->

  <ion-button>Navigate</ion-button>
</ion-content>
```

Then, import the `IonButton` component in the `<script>` tag:

```ts
<script setup lang="ts">
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';</script>
```

## Add a New Page

Create a new page at `views/NewPage.vue`:

```html
<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>New</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">New</ion-title>
        </ion-toolbar>
      </ion-header>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
</script>
```

This creates a page with a [Back Button](/docs/api/back-button) in the [Toolbar](/docs/api/toolbar). The back button will automatically handle navigation back to the previous page, or to `/` if there is no history.

:::warning Important
When creating your own pages, always use `ion-page` as the root component. This is essential for proper transitions between pages, base CSS styling that Ionic components depend on, and consistent layout behavior across your app.
:::

## Navigate to the New Page

To navigate to the new page, create a route for it by first importing it at the top of `router/index.ts` after the `HomePage` import:

To navigate to a new page, add the route to `router/index.ts`

```tsx
import NewPage from '../views/NewPage.vue';
```

Then, add its route in the `routes` array:

```tsx
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/new',
    name: 'New',
    component: NewPage,
  },
];
```

Once that is done, update the button in `views/HomePage.vue`:

```tsx
<ion-button router-link="/new">Navigate</ion-button>
```

:::info
Navigating can also be performed programmatically using Vue Router, and routes can be lazy loaded for better performance. See the [Vue Navigation documentation](/docs/vue/navigation) for more information.
:::

## Add Icons to the New Page

Ionic Vue comes with [Ionicons](https://ionic.io/ionicons/) pre-installed. You can use any icon by setting the `icon` property of the `ion-icon` component.

Update the imports in `views/NewPage.vue` to import `IonIcon` and the `heart` and `logoIonic` icons:

```html
<script setup lang="ts">
  import { IonBackButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  import { heart, logoIonic } from 'ionicons/icons';
</script>
```

Then, include them inside of the `ion-content`:

```tsx
<ion-icon :icon="heart"></ion-icon>
<ion-icon :icon="logoIonic"></ion-icon>
```

Note that we are passing the imported SVG reference, **not** the icon name as a string.

For more information, see the [Icon documentation](/docs/api/icon) and the [Ionicons documentation](https://ionic.io/ionicons/).

## Run on a Device

Ionic's components work everywhere: on iOS, Android, and PWAs. To deploy to mobile, use [Capacitor](https://capacitorjs.com):

```shell
ionic build
ionic cap add ios
ionic cap add android
```

Open the native projects in their IDEs:

```shell
ionic cap open ios
ionic cap open android
```

See [Capacitor's Getting Started guide](https://capacitorjs.com/docs/getting-started/with-ionic) for more.

## Build with TypeScript or JavaScript

Ionic Vue projects are created with TypeScript by default, but you can easily convert to JavaScript if you prefer. After generating a blank Ionic Vue app, follow these steps:

1. Remove the TypeScript dependencies:

```shell
npm uninstall --save typescript @types/jest @typescript-eslint/eslint-plugin @typescript-eslint/parser @vue/cli-plugin-typescript @vue/eslint-config-typescript vue-tsc
```

2. Change the extension of all `.ts` files to `.js`. In a blank Ionic Vue app, this will be the `src/router/index.ts`, `src/main.ts`, and files in the `tests` directory.

3. In `index.html`, change the imported `<script>` file from `/src/main.ts` to `/src/main.js`.

4. Remove `@vue/typescript/recommended` and `@typescript-eslint/no-explicit-any: 'off'` from `.eslintrc.js`.

5. Remove `Array<RouteRecordRaw>` and the import of `RouteRecordRaw` from `src/router/index.js`.

6. Remove `lang="ts"` from the `script` tags in any of your Vue components that have them. In a blank Ionic Vue app, this should only be `src/App.vue` and `src/views/HomePage.vue`.

7. Delete `tsconfig.json` and `src/vite-env.d.ts`.

8. In package.json, change the build script from `"build": "vue-tsc && vite build"` to `"build": "vite build"`.

8. Install terser `npm i -D terser`.

## Explore More

This guide covered the basics of creating an Ionic Vue app, adding navigation, and introducing Capacitor for native builds. To dive deeper, check out:

<DocsCards>

<DocsCard header="Build Your First App" href="your-first-app" icon="/icons/component-content-icon.png">
  <p>Build a real Photo Gallery app with Ionic Vue and native device features.</p>
</DocsCard>

<DocsCard header="Vue Documentation" href="https://vuejs.org/guide/introduction.html" icon="/icons/logo-vue-icon.png">
  <p>Learn more about Vue's core concepts, tools, and best practices from the official Vue documentation.</p>
</DocsCard>

<DocsCard header="Navigation" href="navigation" icon="/icons/component-navigation-icon.png">
  <p>Discover how to handle routing and navigation in Ionic Vue apps using the Vue Router.</p>
</DocsCard>

<DocsCard header="Components" href="/docs/components" icon="/icons/guide-components-icon.png">
  <p>Explore Ionic's rich library of UI components for building beautiful apps.</p>
</DocsCard>

<DocsCard header="Theming" href="/docs/theming/basics" icon="/icons/guide-theming-icon.png">
  <p>Learn how to customize the look and feel of your app with Ionic's powerful theming system.</p>
</DocsCard>

<DocsCard header="Capacitor Documentation" href="https://capacitorjs.com/docs/" icon="/icons/guide-capacitor-icon.png">
  <p>Explore how to access native device features and deploy your app to iOS, Android, and the web with Capacitor.</p>
</DocsCard>

</DocsCards>
