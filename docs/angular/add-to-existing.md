---
title: Add to Existing Angular Project
sidebar_label: Add to Existing
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>Add Ionic Angular to Existing Project: Integration Guide</title>
  <meta
    name="description"
    content="Learn how to add Ionic Angular to your existing Angular project. Step-by-step guide for integrating Ionic components and features into an existing Angular application."
  />
</head>

This guide covers how to add Ionic Angular to an existing Angular project. If you're looking to start a new project from scratch, check out the [Ionic Angular Quickstart](/docs/angular/quickstart.md) guide. For an overview of how Ionic Angular works with Angular, including version support and tooling, check out the [Ionic Angular Overview](/docs/angular/overview.md).

:::tip

This guide uses `.css` file extensions for stylesheets. If you created your Angular app with a different stylesheet format (such as `.scss`, `.sass`, or `.less`), use that extension instead.

:::

## Setup

:::info

This guide follows the structure of an Angular app created with the Angular CLI. If you started your Angular app using a different method, your file structure and setup may differ.

:::

You can add Ionic Angular to your existing Angular project using the Angular CLI's `ng add` feature or by installing it manually.

### Using ng add

The easiest way to add Ionic Angular is to use the Angular CLI's `ng add` feature:

```bash
ng add @ionic/angular
```

This will install the `@ionic/angular` package and automatically configure the necessary imports and styles.

### Manual Installation

If you prefer to install Ionic Angular manually, you can follow these steps:

#### 1. Install the Package

```bash
npm install @ionic/angular
```

#### 2. Add Ionic Framework Stylesheets

Replace the existing `styles` array in `angular.json` with the following:

```json title="angular.json"
"styles": [
  "src/styles.css",
  {
    "input": "node_modules/@ionic/angular/css/core.css"
  },
  {
    "input": "node_modules/@ionic/angular/css/normalize.css"
  },
  {
    "input": "node_modules/@ionic/angular/css/structure.css"
  },
  {
    "input": "node_modules/@ionic/angular/css/typography.css"
  }
]
```

:::info

While `core.css` is required, `normalize.css`, `structure.css`, and `typography.css` are recommended but not required. They normalize cross-browser differences, ensure proper scrolling behavior, and provide consistent typography and form styling. Without them, you may need to handle these concerns yourself. For more details, refer to [Global Stylesheets](/docs/layout/global-stylesheets.md).

:::

#### 3. Configure Ionic Angular

Update `src/app/app.config.ts` to include `provideIonicAngular`:

```typescript title="src/app/app.config.ts"
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideIonicAngular } from '@ionic/angular/standalone';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideIonicAngular({}),
  ],
};
```

## Using Individual Components

After completing the setup above, you can start using Ionic components in your existing Angular app. Here's an example of how to use them:

Update `src/app/app.html` to the following:

```html title="src/app/app.html"
<ion-button>Button</ion-button> <ion-datetime></ion-datetime>
```

Then, import the components in `src/app/app.ts`:

```ts title="src/app/app.ts"
import { Component } from '@angular/core';
import { IonButton, IonDatetime } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  imports: [IonButton, IonDatetime],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
```

Visit the [components](/docs/components.md) page for all of the available Ionic components.

## Using Ionic Pages

If you want to use Ionic pages with full navigation and page transitions, follow these additional setup steps.

#### 1. Add Additional Ionic Framework Stylesheets

Replace the existing `styles` array in `angular.json` with the following:

```json title="angular.json"
"styles": [
  "src/styles.css",
  {
    "input": "node_modules/@ionic/angular/css/core.css"
  },
  {
    "input": "node_modules/@ionic/angular/css/normalize.css"
  },
  {
    "input": "node_modules/@ionic/angular/css/structure.css"
  },
  {
    "input": "node_modules/@ionic/angular/css/typography.css"
  },
  {
    "input": "node_modules/@ionic/angular/css/display.css"
  },
  {
    "input": "node_modules/@ionic/angular/css/padding.css"
  },
  {
    "input": "node_modules/@ionic/angular/css/float-elements.css"
  },
  {
    "input": "node_modules/@ionic/angular/css/text-alignment.css"
  },
  {
    "input": "node_modules/@ionic/angular/css/text-transformation.css"
  },
  {
    "input": "node_modules/@ionic/angular/css/flex-utils.css"
  },
  {
    "input": "src/theme/variables.css"
  }
]
```

These stylesheets set up the overall page structure and provide [CSS utilities](/docs/layout/css-utilities.md) for faster development. Some stylesheets are optional. For details on which stylesheets are required, check out [Global Stylesheets](/docs/layout/global-stylesheets.md).

#### 2. Set up Theming

Create a `src/theme/variables.css` file with the following content:

```css title="src/theme/variables.css"
/**
 * Ionic Dark Theme
 * -----------------------------------------------------
 * For more info, please refer to:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* @import "@ionic/angular/css/palettes/dark.always.css"; */
/* @import "@ionic/angular/css/palettes/dark.class.css"; */
@import '@ionic/angular/css/palettes/dark.system.css';
```

This file enables [dark mode support](/docs/theming/dark-mode.md) for your Ionic app when the system is set to prefer a dark appearance. You can customize the theming behavior by uncommenting different dark palette imports or adding custom CSS variables.

#### 3. Update the App Component

Update `src/app/app.html` to the following:

```html title="src/app/app.html"
<ion-app>
  <ion-router-outlet></ion-router-outlet>
</ion-app>
```

Then, update `src/app/app.ts` to include the component imports:

```ts title="src/app/app.ts"
import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  imports: [IonApp, IonRouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
```

#### 4. Create a Home Page

Start by adding a template at `src/app/home/home.html`:

```html title="src/app/home/home.html"
<ion-header translucent="true">
  <ion-toolbar>
    <ion-title>Home</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content fullscreen="true">
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">Home</ion-title>
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

Then, create `src/app/home/home.ts` with the following:

```ts title="src/app/home/home.ts"
import { Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  imports: [IonContent, IonHeader, IonTitle, IonToolbar],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomePage {}
```

Finally, add a `src/app/home/home.css` file:

```css title="src/app/home/home.css"
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
```

#### 5. Set up Routing

Update `src/app/app.routes.ts` to add a `home` route:

```ts title="src/app/app.routes.ts"
import { Routes } from '@angular/router';
import { HomePage } from './home/home';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePage,
  },
];
```

You're all set! Your Ionic Angular app is now configured with full Ionic page support. Run `ng serve` to start your development server and view your app.

## Next Steps

Now that you have Ionic Angular integrated into your project, check out:

<DocsCards>

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
