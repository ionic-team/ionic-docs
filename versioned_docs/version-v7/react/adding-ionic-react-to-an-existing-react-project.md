# Adding To An Existing React App

This post has been forked from [Ely Lucas' blog post](https://dev.to/ionic/adding-ionic-react-to-an-existing-react-project-4kib) and updated to the latest version of Ionic.

### Using Individual Ionic Components

Ionic React has around 100 components that you can begin using in your app immediately to help make it more mobile-friendly.

To get started with using components install the `@ionic/react` package:

```bash
npm i @ionic/react
```

Import the stylesheets from Ionic in your main app file:

```tsx title="App.tsx"
import '@ionic/react/css/core.css';
```

Add the `setupIonicReact` function to your app:

```tsx title="App.tsx"
import { setupIonicReact } from '@ionic/react';

setupIonicReact();

const App = () => {
  return (
    ...
  );
}

export default App;
```

:::note

`setupIonicReact` is a function that will set up the Ionic React components to work with your app. It is required to be called before using any of the Ionic React components.

:::

You can import any of the components and begin to use them right away. Here we are importing the `IonButton` and `IonDatetime` components and using them anywhere in our app:

```tsx
import React from 'react';
import { IonButton, IonDatetime } from '@ionic/react';

const MyComponent = () => {
  return (
    <>
      <IonDatetime></IonDatetime>
      <IonButton fill="clear">Start</IonButton>
    </>
  );
};
```

### Using Ionic Pages

If you want to convert part of your app and give it the whole Ionic experience, there are a few additional steps to take to get this setup.

First, import some additional CSS files that help set up the overall structure of the page and some utility helpers:

```js
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

If you are using another CSS framework (like Bootstrap), you might want to isolate the Ionic pages away from them. This will help to ensure there aren't any CSS conflicts between the libraries.

Next, install the `@ionic/react-router` library:

```bash
npm i @ionic/react-router
```

The Ionic React Router library is a small wrapper around the popular React Router library and helps provide the functionality we need for native-like page transitions. The Ionic React Router library is compatible with v5 of React Router.

The main Ionic page will need a couple of base components. First, use a `IonApp` component (from `@ionic/react`) as the root component, and then use `IonReactRouter` (from `@ionic/react-router`).

`IonApp` sets up our main container, with the necessary styling needed for our structural components. `IonReactRouter` is a small wrapper for React Routers `BrowserRouter` and should be used in its place.

Then, wrap all your routes in an `IonRouterOutlet`, which is what manages our Ionic pages.

```tsx
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

...

<IonApp>
  <IonReactRouter>
    <IonRouterOutlet>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
    </IonRouterOutlet>
  </IonReactRouter>
</IonApp>
```

Now you can setup Ionic pages like so:

```tsx
<IonPage>
  <IonHeader>
    <IonToolbar>
      <IonTitle>My Page</IonTitle>
    </IonToolbar>
  </IonHeader>
  <IonContent>
    <IonDatetime></IonDatetime>
    <IonButton fill="clear">Start</IonButton>
  </IonContent>
</IonPage>
```

:::note

`IonPage` is important to have as the base component for your "Ionic" pages. `IonPage` is the element Ionic performs page transitions on.

:::

For more information on routing and navigation in Ionic React, see [here](/docs/react/navigation).

### Customize the Theme

To customize the look and feel of the components, Ionic has CSS variables you can [override](https://ionicframework.com/docs/theming/colors#modifying-colors) to provide a theme for your components. Set these in your main CSS file.

For more info on theming your Ionic app, see the guide [here](/docs/theming/themes).

### Wrapping up

Adding Ionic React to an existing React project is fairly simple and can be done in just a few minutes.

The great thing about using individual components from Ionic React is that you only import the component you need. This makes Ionic React ideal for adding it to existing projects that need to look and work great on mobile devices.
