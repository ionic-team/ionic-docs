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

Let's walk through these files to understand the app's structure.

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

Replace the contents of `src/main.js` with the following:

```js
import { initialize } from '@ionic/core/components';

// Component imports
import { defineCustomElement as defineIonApp } from '@ionic/core/components/ion-app.js';

// Router imports
import { defineCustomElement as defineIonRoute } from '@ionic/core/components/ion-route.js';
import { defineCustomElement as defineIonRouter } from '@ionic/core/components/ion-router.js';
import { defineCustomElement as defineIonRouterOutlet } from '@ionic/core/components/ion-router-outlet.js';

// Initialize Ionic core features
initialize();

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

// Core Components
defineIonApp();

// Router Components
defineIonRoute();
defineIonRouter();
defineIonRouterOutlet();
```

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

Add a `<script>` tag which will contain the Home page in the `index.html` file after the `<ion-app>` component, before the `main.js` import:

```html
<script>
  // Define the Home Page component
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

  // Register the custom element
  customElements.define('home-page', HomePage);
</script>
```

This creates a custom element called `home-page` that contains the layout for your Home page. The page uses Ionic's layout components to create a header with a toolbar and scrollable content area.

Add the necessary component imports to the `main.js` file:

```js
import { initialize } from '@ionic/core/components';

// Component imports
import { defineCustomElement as defineIonApp } from '@ionic/core/components/ion-app.js';
import { defineCustomElement as defineIonContent } from '@ionic/core/components/ion-content.js';
import { defineCustomElement as defineIonHeader } from '@ionic/core/components/ion-header.js';
import { defineCustomElement as defineIonTitle } from '@ionic/core/components/ion-title.js';
import { defineCustomElement as defineIonToolbar } from '@ionic/core/components/ion-toolbar.js';

// ...Router imports

// ...Initialization and CSS imports

// Core Components
defineIonApp();
defineIonContent();
defineIonHeader();
defineIonTitle();
defineIonToolbar();

// ...Router Components
```

At this point your browser should be displaying the Home page.

:::tip Learn More
For detailed information about Ionic layout components, see the [Header](/docs/api/header), [Toolbar](/docs/api/toolbar), [Title](/docs/api/title), and [Content](/docs/api/content) documentation.
:::

## Add an Ionic Component

You can enhance your Home page with more Ionic UI components. For example, add a [Button](/docs/api/button) to navigate to another page. Update the `HomePage` component in `src/main.js`:

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
```

Then, include the imports for the button in `src/main.js`:

```js
import { initialize } from '@ionic/core/components';

// Component imports
import { defineCustomElement as defineIonApp } from '@ionic/core/components/ion-app.js';
import { defineCustomElement as defineIonButton } from '@ionic/core/components/ion-button.js';
import { defineCustomElement as defineIonContent } from '@ionic/core/components/ion-content.js';
import { defineCustomElement as defineIonHeader } from '@ionic/core/components/ion-header.js';
import { defineCustomElement as defineIonTitle } from '@ionic/core/components/ion-title.js';
import { defineCustomElement as defineIonToolbar } from '@ionic/core/components/ion-toolbar.js';

// Router imports
import { defineCustomElement as defineIonRoute } from '@ionic/core/components/ion-route.js';
import { defineCustomElement as defineIonRouter } from '@ionic/core/components/ion-router.js';
import { defineCustomElement as defineIonRouterOutlet } from '@ionic/core/components/ion-router-outlet.js';

// ...Initialization and CSS imports

// Core Components
defineIonApp();
defineIonButton();
defineIonContent();
defineIonHeader();
defineIonTitle();
defineIonToolbar();

// Router Components
defineIonRoute();
defineIonRouter();
defineIonRouterOutlet();
```

## Add a New Page

Add a new page component to your `index.html` file. Add this code in the `<script>` block after the `HomePage` component:

```js
// Define the New Page component
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

// Register the custom element
customElements.define('new-page', NewPage);
```

Then, include the imports for the buttons and back button in `src/main.js`:

```js
import { initialize } from '@ionic/core/components';

// Component imports
import { defineCustomElement as defineIonApp } from '@ionic/core/components/ion-app.js';
import { defineCustomElement as defineIonBackButton } from '@ionic/core/components/ion-back-button.js';
import { defineCustomElement as defineIonButton } from '@ionic/core/components/ion-button.js';
import { defineCustomElement as defineIonButtons } from '@ionic/core/components/ion-buttons.js';
import { defineCustomElement as defineIonContent } from '@ionic/core/components/ion-content.js';
import { defineCustomElement as defineIonHeader } from '@ionic/core/components/ion-header.js';
import { defineCustomElement as defineIonTitle } from '@ionic/core/components/ion-title.js';
import { defineCustomElement as defineIonToolbar } from '@ionic/core/components/ion-toolbar.js';

// ...Router imports

// ...Initialization and CSS imports

// Core Components
defineIonApp();
defineIonBackButton();
defineIonButton();
defineIonButtons();
defineIonContent();
defineIonHeader();
defineIonTitle();
defineIonToolbar();

// ...Router Components
```

This creates a page with a [Back Button](/docs/api/back-button) in the [Toolbar](/docs/api/toolbar). The back button will automatically handle navigation back to the previous page, or to `/` if there is no history.

## Navigate to the New Page

To navigate to the new page, update the button in the `index.html` file's `HomePage` component to be inside of an `ion-router-link`:

```html
<ion-router-link href="/new">
  <ion-button>Navigate</ion-button>
</ion-router-link>
```

Then, import and call `defineIonRouterLink` in `src/main.js`:

```js
import { initialize } from '@ionic/core/components';

// ...Component imports

// Router imports
import { defineCustomElement as defineIonRoute } from '@ionic/core/components/ion-route.js';
import { defineCustomElement as defineIonRouter } from '@ionic/core/components/ion-router.js';
import { defineCustomElement as defineIonRouterLink } from '@ionic/core/components/ion-router-link.js';
import { defineCustomElement as defineIonRouterOutlet } from '@ionic/core/components/ion-router-outlet.js';

// ...Initialization and CSS imports

// ...Core Components

// Router Components
defineIonRoute();
defineIonRouter();
defineIonRouterLink();
defineIonRouterOutlet();
```

When the button is clicked, Ionic's router will automatically navigate to the `/new` route and display the `new-page` component.

:::info
Navigating can also be performed programmatically using `document.querySelector('ion-router').push('/new')`. See the [Ionic Router documentation](/docs/api/router) for more information.
:::

## Add Icons to the New Page

Ionic JavaScript comes with [Ionicons](https://ionic.io/ionicons/) support. First, you need to register the icons using `addIcons`, add the import for the icon, and then use them with the `ion-icon` component.

Add the necessary imports to `src/main.js`:

```js
import { initialize } from '@ionic/core/components';

// Component imports
import { defineCustomElement as defineIonApp } from '@ionic/core/components/ion-app.js';
import { defineCustomElement as defineIonBackButton } from '@ionic/core/components/ion-back-button.js';
import { defineCustomElement as defineIonButton } from '@ionic/core/components/ion-button.js';
import { defineCustomElement as defineIonButtons } from '@ionic/core/components/ion-buttons.js';
import { defineCustomElement as defineIonContent } from '@ionic/core/components/ion-content.js';
import { defineCustomElement as defineIonHeader } from '@ionic/core/components/ion-header.js';
import { defineCustomElement as defineIonIcon } from '@ionic/core/components/ion-icon.js';
import { defineCustomElement as defineIonTitle } from '@ionic/core/components/ion-title.js';
import { defineCustomElement as defineIonToolbar } from '@ionic/core/components/ion-toolbar.js';

// ...Router imports

// Import Ionicons
import { addIcons } from 'ionicons';
import { heart, logoIonic } from 'ionicons/icons';

// Initialize Ionic core features
initialize();

// Register icons
addIcons({
  heart,
  logoIonic,
});

// ...CSS imports

// Core Components
defineIonApp();
defineIonBackButton();
defineIonButton();
defineIonButtons();
defineIonContent();
defineIonHeader();
defineIonIcon();
defineIonTitle();
defineIonToolbar();

// ...Router Components
```

Then, update the `NewPage` component to include the icons:

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
```

For more information, see the [Icon documentation](/docs/api/icon) and the [Ionicons documentation](https://ionic.io/ionicons/).

## Call Component Methods

Let's add a button that can scroll the content area to the bottom. Update the `NewPage` component to include scrollable content and a scroll button:

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
```

Then, we need to add the imports for the additional components to `src/main.js`. Your final `src/main.js` should look like this:

```js
import { initialize } from '@ionic/core/components';

// Component imports
import { defineCustomElement as defineIonApp } from '@ionic/core/components/ion-app.js';
import { defineCustomElement as defineIonBackButton } from '@ionic/core/components/ion-back-button.js';
import { defineCustomElement as defineIonButton } from '@ionic/core/components/ion-button.js';
import { defineCustomElement as defineIonButtons } from '@ionic/core/components/ion-buttons.js';
import { defineCustomElement as defineIonContent } from '@ionic/core/components/ion-content.js';
import { defineCustomElement as defineIonHeader } from '@ionic/core/components/ion-header.js';
import { defineCustomElement as defineIonIcon } from '@ionic/core/components/ion-icon.js';
import { defineCustomElement as defineIonItem } from '@ionic/core/components/ion-item.js';
import { defineCustomElement as defineIonLabel } from '@ionic/core/components/ion-label.js';
import { defineCustomElement as defineIonTitle } from '@ionic/core/components/ion-title.js';
import { defineCustomElement as defineIonToolbar } from '@ionic/core/components/ion-toolbar.js';

// Router imports
import { defineCustomElement as defineIonRouterOutlet } from '@ionic/core/components/ion-router-outlet.js';
import { defineCustomElement as defineIonRouter } from '@ionic/core/components/ion-router.js';
import { defineCustomElement as defineIonRoute } from '@ionic/core/components/ion-route.js';
import { defineCustomElement as defineIonRouterLink } from '@ionic/core/components/ion-router-link.js';

// Import Ionicons
import { addIcons } from 'ionicons';
import { heart, logoIonic } from 'ionicons/icons';

// Initialize Ionic core features
initialize();

// Register icons
addIcons({
  heart,
  logoIonic,
});

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

// Core Components
defineIonApp();
defineIonBackButton();
defineIonButton();
defineIonButtons();
defineIonContent();
defineIonHeader();
defineIonIcon();
defineIonItem();
defineIonLabel();
defineIonTitle();
defineIonToolbar();

// Router Components
defineIonRouterOutlet();
defineIonRouter();
defineIonRoute();
defineIonRouterLink();
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

Live examples:

- [Alpine.js](https://stackblitz.com/edit/vitejs-vite-kg36bvri?file=index.html)
- [Lit](https://stackblitz.com/edit/vitejs-vite-twfn9ilc?file=package.json)
- [Svelte](https://stackblitz.com/edit/vitejs-vite-bp6vxnem?file=src%2FApp.svelte)

## Explore More

This guide covered the basics of creating an Ionic JavaScript app with Vite, adding navigation, and introducing Capacitor for native builds. To dive deeper, check out:

<DocsCards>

<DocsCard class="disabled" header="Build Your First App" href="" icon="/icons/component-content-icon.png">
  <p>
    <i>Coming soon!</i>
  </p>
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
