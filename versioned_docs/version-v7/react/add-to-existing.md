---
title: Add to Existing React Project
sidebar_label: Add to Existing
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>Add Ionic React to Existing Project: Integration Guide</title>
  <meta
    name="description"
    content="Learn how to add Ionic React to your existing React project. Step-by-step guide for integrating Ionic components and features into an existing React application."
  />
</head>

This guide covers how to add Ionic React to an existing React project. If you're looking to start a new project from scratch, check out the [Ionic React Quickstart](/docs/react/quickstart.md) guide. For an overview of how Ionic React works with React, including version support and tooling, check out the [Ionic React Overview](/docs/react/overview.md).

:::tip

This guide uses TypeScript examples. If you're using JavaScript, the setup process is the same, but you'll use `.jsx` file extensions instead of `.tsx`.

:::

## Setup

Follow these steps to add Ionic React to your existing React project:

#### 1. Install the Package

```bash
npm install @ionic/react
```

#### 2. Configure Ionic React

Update `src/App.tsx` to include `setupIonicReact` and import the required Ionic Framework stylesheets:

```tsx title="src/App.tsx"
// ...existing imports...

import { setupIonicReact } from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

setupIonicReact();

// ...existing app function and export...
```

These stylesheets are required for Ionic Framework components to render properly. `setupIonicReact` is a function that sets up the Ionic React components to work with your app. It is required to be called before using any of the Ionic React components.

## Using Individual Components

After completing the setup above, you can start using Ionic components in your existing React app. Here's an example of how to use them:

Update `src/App.tsx` to the following:

```tsx title="src/App.tsx"
import { IonButton, IonDatetime, setupIonicReact } from '@ionic/react';
import './App.css';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

setupIonicReact();

const App: React.FC = () => (
  <>
    <IonButton>Button</IonButton>
    <IonDatetime></IonDatetime>
  </>
);

export default App;
```

Visit the [components](/docs/components.md) page for all of the available Ionic components.

:::tip

If your existing React app imports a global stylesheet (such as `index.css`) in `src/main.tsx`, you may want to remove it or update any styles that conflict with Ionic Framework components. Ionic Framework includes its own CSS reset and normalization, which may conflict with existing global styles.

:::

## Using Ionic Pages

If you want to use Ionic pages with full navigation and page transitions, follow these additional setup steps.

#### 1. Add Additional Ionic Framework Stylesheets

Update the imported stylesheets in `src/App.tsx`:

```tsx title="src/App.tsx"
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

These stylesheets set up the overall page structure and provide [CSS utilities](/docs/layout/css-utilities.md) for faster development. Some stylesheets are optional. For details on which stylesheets are required, check out [Global Stylesheets](/docs/layout/global-stylesheets.md).

#### 2. Set up Theming

Create a `src/theme/variables.css` file with the following content:

```css title="src/theme/variables.css"
/* For information on how to create your own theme, please refer to:
http://ionicframework.com/docs/theming/ */
```

Then, import the file and the dark palette stylesheet in `src/App.tsx`:

```tsx title="src/App.tsx"
// ...existing imports...

// ...existing stylesheets...

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please refer to:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* @import '@ionic/react/css/palettes/dark.always.css'; */
/* @import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

// ...existing app function and export...
```

The `variables.css` file can be used to create custom Ionic Framework themes. The `dark.system.css` import enables [dark mode support](/docs/theming/dark-mode.md) for your Ionic app when the system is set to prefer a dark appearance. You can customize the theming behavior by uncommenting different dark palette imports or adding custom CSS variables to `theme/variables.css`.

#### 3. Update the App Component

Update `src/App.tsx` to the following:

```tsx title="src/App.tsx"
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

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

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please refer to:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* @import '@ionic/react/css/palettes/dark.always.css'; */
/* @import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>{/* Routes will be added here */}</IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
```

#### 4. Create a Home Page

Create a new file at `src/pages/Home.tsx` with the following:

```tsx title="src/pages/Home.tsx"
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import './Home.css';

const Home = () => {
  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div id="container">
          <strong>Ready to create an app?</strong>
          <p>
            Start with Ionic{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">
              UI Components
            </a>
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
```

Then, create `src/pages/Home.css`:

```css title="src/pages/Home.css"
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

:::important

Ionic React Router currently only supports React Router v5. You must install the following specific versions of the router packages to set up routing with Ionic React.

:::

Install the router packages:

```bash
npm install @ionic/react-router react-router@5 react-router-dom@5
npm install @types/react-router-dom --save-dev
```

Then, update `src/App.tsx` to add the routes for the Home page:

```tsx title="src/App.tsx"
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

// ...existing Ionic Framework stylesheet imports...

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
```

You're all set! Your Ionic React app is now configured with full Ionic page support. Run `npm run dev` to start your development server and view your app.

## Next Steps

Now that you have Ionic React integrated into your project, check out:

<DocsCards>

<DocsCard header="Navigation" href="navigation" icon="/icons/component-navigation-icon.png">
  <p>Discover how to handle routing and navigation in Ionic React apps using the React Router.</p>
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
