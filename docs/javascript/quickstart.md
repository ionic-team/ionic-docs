---
title: Ionic JavaScript Quickstart
sidebar_label: Quickstart
---

<head>
  <title>Ionic JavaScript Quickstart: JavaScript Basics</title>
  <meta
    name="description"
    content="Ionic JavaScript Quickstart covers the basics of JavaScript and Ionic, including any Ionic-specific features. Learn how to build JavaScript apps."
  />
</head>

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

Welcome! This guide will walk you through the basics of Ionic JavaScript development using Vite. You'll learn how to set up your development environment, create a simple project, explore the project structure, and understand how Ionic components work. This is perfect for getting familiar with Ionic JavaScript before building your first real app.

If you're looking for a high-level overview of what Ionic JavaScript is and how it fits into the web development ecosystem, see the [Ionic JavaScript Overview](overview).

## Prerequisites

Before you begin, make sure you have Node.js and npm installed on your machine.
You can check by running:

```shell
node -v
npm -v
```

If you don't have Node.js and npm, [download Node.js here](https://nodejs.org/en/download) (which includes npm).

## Create a Project with Vite

First, create a new Vite project with vanilla JavaScript:

```shell
npm create vite@latest my-app -- --template vanilla

cd my-app
```

Install the project dependencies and Ionic Core:

```shell
npm install
npm install @ionic/core
```

After installation, start the development server:

```shell
npm run dev
```

Open your browser and visit the URL shown in the console.

## Explore the Project Structure

Your new app's directory will look like this:

```shell
├── index.html
└── src/
    ├── counter.js
    ├── main.js
    └── style.css
```

:::warning Delete files
The `counter.js` and `style.css` files can be deleted. We will not be using them.
:::

:::info
All file paths in the examples below are relative to the project root directory.
:::

Let's configure the project, initialize Ionic, and add components to create our app.

## Configure Vite

Install the `vite-plugin-static-copy` package:

```shell
npm install vite-plugin-static-copy --save-dev
```

Add a `vite.config.js` file at the project root with the following:

```js
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  optimizeDeps: {
    exclude: ['@ionic/core'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
      external: ['/ionic.esm.js'],
    },
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/@ionic/core/dist/ionic/*',
          dest: '',
        },
      ],
    }),
  ],
});
```

This copies the necessary Ionic files that Capacitor will need to work with lazy loaded Ionic components.

## Initialize Ionic

Replace the contents of `src/main.js` with the following:

```js
// Determine if the app is running in Capacitor
const isCapacitor = location.protocol === 'capacitor:' || (window.Capacitor && window.Capacitor.platform !== 'web');

// Load Ionic
if (isCapacitor) {
  // In Capacitor, import Ionic directly from copied dist files
  import(/* @vite-ignore */ location.origin + '/ionic.esm.js');
} else {
  // In the browser, use the normal loader
  import('@ionic/core/loader').then((m) => m.defineCustomElements(window));
}

// Core CSS required for Ionic components to work properly
import '@ionic/core/css/core.css';

// Basic CSS for apps built with Ionic
import '@ionic/core/css/normalize.css';
import '@ionic/core/css/structure.css';
import '@ionic/core/css/typography.css';

// Optional CSS utils that can be commented out
import '@ionic/core/css/padding.css';
import '@ionic/core/css/float-elements.css';
import '@ionic/core/css/text-alignment.css';
import '@ionic/core/css/text-transformation.css';
import '@ionic/core/css/flex-utils.css';
import '@ionic/core/css/display.css';
```

This initializes Ionic based on the environment and then imports all of the available CSS files.

## Add the App Component

Update your `index.html` to configure the metadata and use Ionic components:

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta
      name="viewport"
      content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
    />
    <title>my-app</title>
  </head>
  <body>
    <ion-app>
      <ion-router>
        <ion-route url="/" component="home-page"></ion-route>
        <ion-route url="/new" component="new-page"></ion-route>
      </ion-router>
      <ion-router-outlet></ion-router-outlet>
    </ion-app>

    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```

This sets up the root of your application, using Ionic's `ion-app`, `ion-router`, and `ion-router-outlet` components. The key change is replacing the default `<div id="app">` with Ionic's routing and layout components. The router outlet is where your pages will be displayed.

## View Routes

Routes are defined in the `index.html` using `ion-route` components inside the `ion-router`:

```html
<ion-router>
  <ion-route url="/" component="home-page"></ion-route>
  <ion-route url="/new" component="new-page"></ion-route>
</ion-router>
```

When you visit the root URL (`/`), the `home-page` component will be loaded. When you visit the `/new` URL, the `new-page` component will be loaded. We will define these components next.

## Add the Home Page

Create a new directory called `pages` inside the `src` folder, then add a file called `HomePage.js` in that directory with the following content:

```js
class HomePage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <ion-header>
        <ion-toolbar>
          <ion-title>Blank</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <div id="container">
          <strong>Ready to create an app?</strong>
          <p>
            Start with Ionic
            <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a>
          </p>
        </div>
      </ion-content>
    `;
  }
}

customElements.define('home-page', HomePage);
```

This creates a custom element called `home-page` that contains the layout for your Home page. The page uses Ionic's layout components to create a header with a toolbar and scrollable content area.

:::tip Learn More
For detailed information about Ionic layout components, see the [Header](/docs/api/header), [Toolbar](/docs/api/toolbar), [Title](/docs/api/title), and [Content](/docs/api/content) documentation.
:::

Next, add a `<script>` tag before the `src/main.js` import in `index.html` to import the Home page:

```html
<script type="module">
  import './src/pages/HomePage.js';
</script>

<script type="module" src="/src/main.js"></script>
```

At this point your browser should be displaying the Home page.

![Screenshot of the Ionic Core Home page](/img/guides/quickstart/unstyled-home-page.png 'Ionic Core Home Component')

## Add an Ionic Component

You can enhance your Home page with more Ionic UI components. For example, add a [Button](/docs/api/button) to navigate to another page. Update the `HomePage` component in `src/pages/HomePage.js`:

```js
class HomePage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <ion-header>
        <ion-toolbar>
          <ion-title>Blank</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <div id="container">
          <strong>Ready to create an app?</strong>
          <p>
            Start with Ionic
            <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a>
          </p>
        </div>

        <ion-button>Navigate</ion-button>
      </ion-content>
    `;
  }
}

customElements.define('home-page', HomePage);
```

## Add a New Page

Add a new file named `NewPage.js` to `src/pages` with the following content:

```js
class NewPage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button default-href="/"></ion-back-button>
          </ion-buttons>
          <ion-title>New</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <h2>Welcome to the new page!</h2>
      </ion-content>
    `;
  }
}

customElements.define('new-page', NewPage);
```

This creates a page with a [Back Button](/docs/api/back-button) in the [Toolbar](/docs/api/toolbar). The back button will automatically handle navigation back to the previous page, or to `/` if there is no history.

Next, update the `<script>` tag which imports the Home page in the `index.html` file to also import the New page:

```html
<script type="module">
  import './src/pages/HomePage.js';
  import './src/pages/NewPage.js';
</script>
```

## Navigate to the New Page

To navigate to the new page, update the button in `src/pages/HomePage.js` to be inside of an `ion-router-link`:

```html
<ion-router-link href="/new">
  <ion-button>Navigate</ion-button>
</ion-router-link>
```

When the button is clicked, Ionic's router will automatically navigate to the `/new` route and display the `new-page` component.

:::info
Navigating can also be performed programmatically using `document.querySelector('ion-router').push('/new')`. See the [Ionic Router documentation](/docs/api/router) for more information.
:::

## Add Icons to the New Page

Ionic JavaScript comes with [Ionicons](https://ionic.io/ionicons/) support. To use icons, you need to import them, register them with `addIcons`, and then use them with the `ion-icon` component.

Add the necessary imports and register the icons in `src/main.js`:

```js
// ...Ionic initialization

// Icon imports
import { addIcons } from 'ionicons';
import { heart, logoIonic } from 'ionicons/icons';

addIcons({ heart, logoIonic });

// ...CSS imports
```

Next, update `src/pages/NewPage.js` to include the icons:

```js
class NewPage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button default-href="/"></ion-back-button>
          </ion-buttons>
          <ion-title>New</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <h2>Welcome to the new page!</h2>

        <ion-icon name="heart"></ion-icon>
        <ion-icon name="logo-ionic"></ion-icon>
      </ion-content>
    `;
  }
}

customElements.define('new-page', NewPage);
```

For more information, see the [Icon documentation](/docs/api/icon) and the [Ionicons documentation](https://ionic.io/ionicons/).

## Call Component Methods

Let's add a button that can scroll the content area to the bottom. Update `src/pages/NewPage.js` to include scrollable content and a scroll button:

```js
class NewPage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button default-href="/"></ion-back-button>
          </ion-buttons>
          <ion-title>New</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <h2>Welcome to the new page!</h2>

        <ion-icon name="heart"></ion-icon>
        <ion-icon name="logo-ionic"></ion-icon>

        <ion-button id="scroll-btn">Scroll to Bottom</ion-button>

        <!-- Add lots of content to make scrolling possible -->
        <div id="item-list"></div>
      </ion-content>
    `;

    // Generate items and add scroll functionality after the element is connected
    this.setupScrolling();
  }

  setupScrolling() {
    // Wait for ion-content to be ready
    customElements.whenDefined('ion-content').then(() => {
      // Generate items
      const itemList = this.querySelector('#item-list');
      for (let i = 1; i <= 50; i++) {
        const item = document.createElement('ion-item');
        const label = document.createElement('ion-label');
        label.textContent = `Item ${i}`;
        item.appendChild(label);
        itemList.appendChild(item);
      }

      // Add scroll functionality
      const scrollBtn = this.querySelector('#scroll-btn');
      const content = this.querySelector('ion-content');

      if (scrollBtn && content) {
        scrollBtn.addEventListener('click', () => {
          content.scrollToBottom(300);
        });
      }
    });
  }
}

customElements.define('new-page', NewPage);
```

To call methods on Ionic components:

1. Get a reference to the component element using `querySelector`
2. Call the method directly on the element

You can find available methods for each component in the [Methods](/docs/api/content#methods) section of their API documentation.

## Run on a Device

Ionic's components work everywhere: on iOS, Android, and PWAs. To deploy to mobile, use [Capacitor](https://capacitorjs.com):

```shell
npm install @capacitor/core @capacitor/cli @capacitor/ios @capacitor/android
npx cap init

npm run build

npx cap add ios
npx cap add android
```

Open the native projects in their IDEs:

```shell
npx cap open ios
npx cap open android
```

See [Capacitor's Getting Started guide](https://capacitorjs.com/docs/getting-started/with-ionic) for more.

## Framework Integrations

Ionic Core also works with other frameworks and libraries that support custom elements, such as [Alpine.js](https://alpinejs.dev/), [Lit](https://lit.dev/), and [Svelte](https://svelte.dev/). However, when using Ionic Core with these libraries, you won't have the built-in form and routing capabilities that are tightly coupled with Ionic's official Angular, React, and Vue framework integrations, and will need to use their respective routing and form solutions instead.

## Explore More

This guide covered the basics of creating an Ionic JavaScript app with Vite, adding navigation, and introducing Capacitor for native builds. To dive deeper, check out:

<DocsCards>

<DocsCard header="Vite Documentation" href="https://vite.dev/guide/" icon="/icons/logo-vite-icon.png">
  <p>Learn advanced Vite configuration and optimization techniques for Ionic JavaScript apps.</p>
</DocsCard>

<DocsCard
  header="JavaScript Documentation"
  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  icon="/icons/logo-javascript-icon.png"
>
  <p>Learn more about JavaScript's core concepts, tools, and best practices from MDN Web Docs.</p>
</DocsCard>

<DocsCard header="Navigation" href="/docs/api/router" icon="/icons/component-navigation-icon.png">
  <p>Discover how to handle routing and navigation in Ionic JavaScript apps using the Ionic Router.</p>
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
