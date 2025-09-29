---
title: Ionic React Quickstart
sidebar_label: Quickstart
---

<head>
  <title>Ionic React Quickstart Using Ionic CLI: React Basics</title>
  <meta
    name="description"
    content="Ionic React Quickstart covers the basics of React and Ionic, including any Ionic-specific features. Learn how to build React apps using the Ionic CLI."
  />
</head>

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

Welcome! This guide will walk you through the basics of Ionic React development. You'll learn how to set up your development environment, generate a simple project, explore the project structure, and understand how Ionic components work. This is perfect for getting familiar with Ionic React before building your first real app.

If you're looking for a high-level overview of what Ionic React is and how it fits into the React ecosystem, see the [Ionic React Overview](overview).

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
ionic start myApp blank --type react

cd myApp
ionic serve
```

After running `ionic serve`, your project will open in the browser.

![Screenshot of the Ionic React Home page](/img/guides/quickstart/home-page.png 'Ionic React Home Component')

## Explore the Project Structure

Your new app's `src` directory will look like this:

```shell
├── App.tsx
├── components
│   ├── ExploreContainer.css
│   └── ExploreContainer.tsx
├── main.tsx
└──  pages
    ├── Home.css
    └── Home.tsx
```

:::info
All file paths in the examples below are relative to the `src/` directory.
:::

Let's walk through these files to understand the app's structure.

## View the App Component

The root of your app is defined in `App.tsx`:

```tsx
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

// ..CSS imports...

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

This sets up the root of your application, using Ionic's `IonApp` and `IonReactRouter` components. The `IonRouterOutlet` is where your pages will be displayed.

## View Routes

Routes are defined within the `IonRouterOutlet` in `App.tsx`:

```tsx
<IonRouterOutlet>
  <Route exact path="/home">
    <Home />
  </Route>
  <Route exact path="/">
    <Redirect to="/home" />
  </Route>
</IonRouterOutlet>
```

When you visit the root URL (`/`), the `Home` component will be loaded.

## View the Home Page

The Home page component, defined in `pages/Home.tsx`, imports the Ionic components and defines the page template:

```tsx
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
```

This creates a page with a header and scrollable content area. The `IonPage` component provides the basic page structure and must be used on every page. The second header shows a [collapsible large title](/docs/api/title#collapsible-large-titles) that displays when at the top of the content, then condenses to show the smaller title in the first header when scrolling down.

:::tip Learn More
For detailed information about Ionic layout components, see the [Header](/docs/api/header), [Toolbar](/docs/api/toolbar), [Title](/docs/api/title), and [Content](/docs/api/content) documentation.
:::

## Add an Ionic Component

You can enhance your Home page with more Ionic UI components. For example, import and add a [Button](/docs/api/button) at the end of the `IonContent` in `pages/Home.tsx`:

```tsx
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
// ...existing imports...

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* ...existing content... */}

        <IonButton>Navigate</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
```

## Add a New Page

Create a new page at `pages/New.tsx`:

```tsx
import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const New: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>New</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">New</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default New;
```

This creates a page with a [Back Button](/docs/api/back-button) in the [Toolbar](/docs/api/toolbar). The back button will automatically handle navigation back to the previous page, or to `/` if there is no history.

:::warning Important
When creating your own pages, always use `IonPage` as the root component. This is essential for proper transitions between pages, base CSS styling that Ionic components depend on, and consistent layout behavior across your app.
:::

## Navigate to the New Page

To navigate to the new page, create a route for it by first importing it at the top of `App.tsx` after the `Home` import:

```tsx
import New from './pages/New';
```

Then, add its route in `IonRouterOutlet`:

```tsx
<IonRouterOutlet>
  <Route exact path="/home">
    <Home />
  </Route>
  <Route exact path="/new">
    <New />
  </Route>
  <Route exact path="/">
    <Redirect to="/home" />
  </Route>
</IonRouterOutlet>
```

Once that is done, update the button in `pages/Home.tsx`:

```tsx
<IonButton routerLink="/new">Navigate</IonButton>
```

:::info
Navigating can also be performed programmatically using React Router's `history` prop. See the [React Navigation documentation](/docs/react/navigation#navigating-using-history) for more information.
:::

## Add Icons to the New Page

Ionic React comes with [Ionicons](https://ionic.io/ionicons/) pre-installed. You can use any icon by setting the `icon` property of the `IonIcon` component.

Update the imports in `pages/New.tsx` to import `IonIcon` and the `heart` and `logoIonic` icons:

```tsx
import { IonBackButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { heart, logoIonic } from 'ionicons/icons';
```

Then, include them inside of the `IonContent`:

```tsx
<IonIcon icon={heart} />
<IonIcon icon={logoIonic} />
```

Note that we are passing the imported SVG reference, **not** the icon name as a string.

For more information, see the [Icon documentation](/docs/api/icon) and the [Ionicons documentation](https://ionic.io/ionicons/).

## Call Component Methods

Let's add a button that can scroll the content area to the bottom.

Update `pages/New.tsx` to add a `ref` on `IonContent` and a button and some items after the existing icons:

```tsx
<IonContent ref={content}>
  <IonIcon icon={heart} />
  <IonIcon icon={logoIonic} />

  <IonButton onClick={scrollToBottom}>Scroll to Bottom</IonButton>

  {/* Add lots of content to make scrolling possible */}
  {Array.from({ length: 50 }, (_, i) => (
    <IonItem key={i}>
      <IonLabel>Item {i + 1}</IonLabel>
    </IonItem>
  ))}
</IonContent>
```

Then, add the imports for the additional components and define the `scrollToBottom` function:

```tsx
import { useRef } from 'react';
import { IonButton, IonBackButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { heart, logoIonic } from 'ionicons/icons';

const New: React.FC = () => {
  const content = useRef<HTMLIonContentElement>(null);

  const scrollToBottom = () => {
    content.current?.scrollToBottom(300);
  };

  return (
    // ...existing template...
  );
};

export default New;
```

To call methods on Ionic components:

1. Create a `ref` for the component
2. Call the method directly on `ref.current`

This pattern is necessary because React refs store the component instance in the `.current` property.

You can find available methods for each component in the [Methods](/docs/api/content#methods) section of their API documentation.

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

## Explore More

This guide covered the basics of creating an Ionic React app, adding navigation, and introducing Capacitor for native builds. To dive deeper, check out:

<DocsCards>

<DocsCard header="Build Your First App" href="your-first-app" icon="/icons/component-content-icon.png">
  <p>Build a real Photo Gallery app with Ionic React and native device features.</p>
</DocsCard>

<DocsCard header="React Documentation" href="https://react.dev/learn" icon="/icons/logo-react-icon.png">
  <p>Learn more about React's core concepts, tools, and best practices from the official React documentation.</p>
</DocsCard>

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
