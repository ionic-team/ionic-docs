---
title: Add to Existing Vue Project
sidebar_label: Add to Existing
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>Add Ionic Vue to Existing Project: Integration Guide</title>
  <meta
    name="description"
    content="Learn how to add Ionic Vue to your existing Vue project. Step-by-step guide for integrating Ionic components and features into an existing Vue application."
  />
</head>

This guide covers how to add Ionic Vue to an existing Vue project. If you're looking to start a new project from scratch, check out the [Ionic Vue Quickstart](/docs/vue/quickstart.md) guide. For an overview of how Ionic Vue works with Vue, including version support and tooling, check out the [Ionic Vue Overview](/docs/vue/overview.md).

:::tip

This guide uses JavaScript examples. If you're using TypeScript, the setup process is the same, but you'll use `.ts` file extensions instead of `.js`.

:::

## Setup

:::info

This guide follows the structure of a Vue app created with `create-vue` (which uses Vite). If you started your Vue app using a different tool (such as Vue CLI), your file structure and setup may differ.

:::

Follow these steps to add Ionic Vue to your existing Vue project:

#### 1. Install the Packages

```bash
npm install @ionic/vue @ionic/vue-router vue-router
```

#### 2. Configure Ionic Vue

Update `src/main.js` to include `IonicVue` and import the required Ionic Framework stylesheets:

```javascript title="src/main.js"
import { createApp } from 'vue';
import { IonicVue } from '@ionic/vue';

import App from './App.vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

createApp(App).use(IonicVue).mount('#app');
```

:::info

While `core.css` is required, `normalize.css`, `structure.css`, and `typography.css` are recommended but not required. They normalize cross-browser differences, ensure proper scrolling behavior, and provide consistent typography and form styling. Without them, you may need to handle these concerns yourself. For more details, see [Global Stylesheets](/docs/layout/global-stylesheets.md).

:::

## Using Individual Components

After completing the setup above, you can start using Ionic components in your existing Vue app. Here's an example of how to use them:

Update `src/App.vue` to the following:

```vue title="src/App.vue"
<template>
  <ion-button>Button</ion-button>
  <ion-datetime></ion-datetime>
</template>

<script setup lang="ts">
import { IonButton, IonDatetime } from '@ionic/vue';
</script>
```

Visit the [components](/docs/components.md) page for all of the available Ionic components.

## Using Ionic Pages

If you want to use Ionic pages with full navigation and page transitions, follow these additional setup steps.

#### 1. Add Additional Ionic Framework Stylesheets

Update the imported stylesheets in `src/main.js`:

```javascript title="src/main.js"
/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';
```

These stylesheets set up the overall page structure and provide [CSS utilities](/docs/layout/css-utilities.md) for faster development. Some stylesheets are optional. For details on which stylesheets are required, check out [Global Stylesheets](/docs/layout/global-stylesheets.md).

#### 2. Set up Theming

Create a `src/theme/variables.css` file with the following content:

```css title="src/theme/variables.css"
/* For information on how to create your own theme, please refer to:
http://ionicframework.com/docs/theming/ */
```

Then, import the file and the dark palette stylesheet in `src/main.js`:

```javascript title="src/main.js"
import { createApp } from 'vue';
import App from './App.vue';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please refer to:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* @import '@ionic/vue/css/palettes/dark.always.css'; */
/* @import '@ionic/vue/css/palettes/dark.class.css'; */
import '@ionic/vue/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

createApp(App).use(IonicVue).mount('#app');
```

The `variables.css` file can be used to create custom Ionic Framework themes. The `dark.system.css` import enables [dark mode support](/docs/theming/dark-mode.md) for your Ionic app when the system is set to prefer a dark appearance. You can customize the theming behavior by uncommenting different dark palette imports or adding custom CSS variables to `theme/variables.css`.

#### 3. Update the App Component

Update `src/App.vue` to the following:

```vue title="src/App.vue"
<template>
  <ion-app>
    <ion-router-outlet></ion-router-outlet>
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
</script>
```

#### 4. Create a Home Page

Create a new file at `src/views/HomePage.vue` with the following:

```vue title="src/views/HomePage.vue"
<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Home</ion-title>
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

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
```

#### 5. Set up Routing

Add a file at `src/router/index.js` defining the routes:

```javascript title="src/router/index.js"
import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue';

const routes = [
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

Update `src/main.js` to include the router:

```javascript title="src/main.js"
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please refer to:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* @import '@ionic/vue/css/palettes/dark.always.css'; */
/* @import '@ionic/vue/css/palettes/dark.class.css'; */
import '@ionic/vue/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

const app = createApp(App).use(IonicVue).use(router);

router.isReady().then(() => {
  app.mount('#app');
});
```

You're all set! Your Ionic Vue app is now configured with full Ionic page support. Run `npm run dev` to start your development server and view your app.

## Next Steps

Now that you have Ionic Vue integrated into your project, check out:

<DocsCards>

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
