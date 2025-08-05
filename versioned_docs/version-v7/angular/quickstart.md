---
title: Ionic Angular Quickstart
sidebar_label: Quickstart
---

<head>
  <title>Angular QuickStart Global Component for Generating Ionic Angular Apps</title>
  <meta
    name="description"
    content="Our QuickStart guide covers the basics of both Angular and Ionic Framework global components to get apps up and running. Read how to easily generate Ionic Angular apps."
  />
</head>

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

Welcome! This guide will walk you through creating your first Ionic Angular app, step by step. You'll learn how to set up your development environment, generate a new project, explore the project structure, and add your first UI components and navigation.

If you're looking for a high-level overview of what Ionic Angular is and how it fits into the Angular ecosystem, see the [Ionic Angular Overview](overview).

## Prerequisites

Before you begin, make sure you have [Node.js](https://nodejs.org/) (which includes npm) installed on your machine.
You can check by running:

```shell
node -v
npm -v
```

If you don't have Node.js, [download it here](https://nodejs.org/en/download).

## Create a Project with the Ionic CLI

First, install the latest [Ionic CLI](../cli):

```shell
npm install -g @ionic/cli
```

Then, run the following commands to create and run a new project:

```shell
ionic start myApp blank --type angular

cd myApp
ionic serve
```

At the first prompt, choose `Standalone`.

After running `ionic serve`, your project will open in the browser.

![Screenshot of the Ionic Angular Home page](/img/guides/quickstart/home-page.png 'Ionic Angular Home Component')

## Explore the Project Structure

Your new app's `src/app` directory will look like this:

```shell
├── app.component.html
├── app.component.scss
├── app.component.ts
├── app.routes.ts
└── home/
    ├── home.page.html
    ├── home.page.scss
    ├── home.page.spec.ts
    └── home.page.ts
```

Let's walk through these files to understand the app's structure.

## View the App Component

The root of your app is defined in `app.component.ts`:

```ts
import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {}
}
```

And its template in `app.component.html`:

```html
<ion-app>
  <ion-router-outlet></ion-router-outlet>
</ion-app>
```

This sets up the root of your application, using Ionic's `ion-app` and `ion-router-outlet` components. The router outlet is where your pages will be displayed.

## View Routes

Routes are defined in `app.routes.ts`:

```ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
```

When you visit the root URL (`/`), the `HomePage` component will be loaded.

## View the Home Page

The Home page component, defined in `home.page.ts`, imports the Ionic components it uses:

```ts
import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor() {}
}
```

And the template, in the `home.page.html` file, uses those components:

```html
<ion-header [translucent]="true">
  <ion-toolbar>
    <ion-title> Blank </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content [fullscreen]="true">
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">Blank</ion-title>
    </ion-toolbar>
  </ion-header>

  <div id="container">
    <strong>Ready to create an app?</strong>
    <p>
      Start with Ionic
      <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a>
    </p>
  </div>
</ion-content>
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

Then, import the `IonButton` component in `home.page.ts`:

```ts
import { IonButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  // ...existing config...
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar],
})
```

## Add a New Page

To add a new page, generate it with the CLI:

```shell
ionic generate page new
```

A route will be automatically added to `app.routes.ts`.

In your `new.page.html`, you can add a [Back Button](/docs/api/back-button) to the [Toolbar](/docs/api/toolbar):

```html
<ion-header [translucent]="true">
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button defaultHref="/"></ion-back-button>
    </ion-buttons>
    <ion-title>new</ion-title>
  </ion-toolbar>
</ion-header>
```

And import `IonBackButton` and `IonButtons` in `new.page.ts`:

```ts
import { IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  // ...existing config...
  imports: [IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar],
})
```

The `ion-back-button` will automatically handle navigation back to the previous page, or to `/` if there is no history.

## Navigate to the New Page

To navigate to the new page, update the button in `home.page.html`:

```html
<ion-button [routerLink]="['/new']">Navigate</ion-button>
```

Then, import `RouterLink` in `home.page.ts`:

```ts
import { RouterLink } from '@angular/router';

@Component({
  // ...existing config...
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, RouterLink],
})
```

:::info
Navigating can also be performed using Angular's Router service. See the [Angular Navigation documentation](/docs/angular/navigation#navigating-to-different-routes) for more information.
:::

## Add Icons to the New Page

Ionic Angular comes with [Ionicons](https://ionic.io/ionicons/) pre-installed. You can use any icon by setting the `name` property on the `ion-icon` component. Add the following icons to `new.page.html`:

```html
<ion-content>
  <!-- existing content -->

  <ion-icon name="heart"></ion-icon>
  <ion-icon name="logo-ionic"></ion-icon>
</ion-content>
```

You'll also need to import and register these icons in `new.page.ts`:

```ts
// ...existing imports...
import { IonBackButton, IonButtons, IonContent, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heart, logoIonic } from 'ionicons/icons';

@Component({
  // ...existing config...
  imports: [IonBackButton, IonButtons, IonContent, IonHeader, IonIcon, IonTitle, IonToolbar],
})
```

Then, update the constructor of the page to use `addIcons`:

```ts
export class NewPage implements OnInit {
  constructor() {
    addIcons({ heart, logoIonic });
  }
}
```

Alternatively, you can register icons in `app.component.ts` to use them throughout your app.

For more information, see the [Icon documentation](/docs/api/icon) and the [Ionicons documentation](https://ionic.io/ionicons/).

## Run on a Device

Ionic's components work everywhere: iOS, Android, and PWAs. To deploy to mobile, use [Capacitor](https://capacitorjs.com):

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

## Explore More

This guide covered the basics of creating an Ionic Angular app, adding navigation, and introducing Capacitor for native builds. To dive deeper, check out:

<DocsCards>

<DocsCard header="Build Your First App" href="your-first-app" icon="/icons/component-content-icon.png">
  <p>Build a real Photo Gallery app with Ionic Angular and native device features.</p>
</DocsCard>

<DocsCard header="Angular Documentation" href="https://angular.dev/overview" icon="/icons/logo-angular-icon.png">
  <p>Learn more about Angular's core concepts, tools, and best practices from the official Angular documentation.</p>
</DocsCard>

<DocsCard header="Navigation" href="navigation" icon="/icons/component-navigation-icon.png">
  <p>Discover how to handle routing and navigation in Ionic Angular apps using the Angular Router.</p>
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
