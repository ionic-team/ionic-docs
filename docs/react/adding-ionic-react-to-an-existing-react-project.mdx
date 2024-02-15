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

To customize the look and feel of the components, Ionic has CSS variables you can override to provide a theme for your components. Set these in your main CSS file:

```css title="main.css"
:root {
  --ion-color-primary: #3880ff;
  --ion-color-primary-rgb: 56, 128, 255;
  --ion-color-primary-contrast: #ffffff;
  --ion-color-primary-contrast-rgb: 255, 255, 255;
  --ion-color-primary-shade: #3171e0;
  --ion-color-primary-tint: #4c8dff;

  --ion-color-secondary: #0cd1e8;
  --ion-color-secondary-rgb: 12, 209, 232;
  --ion-color-secondary-contrast: #ffffff;
  --ion-color-secondary-contrast-rgb: 255, 255, 255;
  --ion-color-secondary-shade: #0bb8cc;
  --ion-color-secondary-tint: #24d6ea;

  --ion-color-tertiary: #7044ff;
  --ion-color-tertiary-rgb: 112, 68, 255;
  --ion-color-tertiary-contrast: #ffffff;
  --ion-color-tertiary-contrast-rgb: 255, 255, 255;
  --ion-color-tertiary-shade: #633ce0;
  --ion-color-tertiary-tint: #7e57ff;

  --ion-color-success: #10dc60;
  --ion-color-success-rgb: 16, 220, 96;
  --ion-color-success-contrast: #ffffff;
  --ion-color-success-contrast-rgb: 255, 255, 255;
  --ion-color-success-shade: #0ec254;
  --ion-color-success-tint: #28e070;

  --ion-color-warning: #ffce00;
  --ion-color-warning-rgb: 255, 206, 0;
  --ion-color-warning-contrast: #ffffff;
  --ion-color-warning-contrast-rgb: 255, 255, 255;
  --ion-color-warning-shade: #e0b500;
  --ion-color-warning-tint: #ffd31a;

  --ion-color-danger: #f04141;
  --ion-color-danger-rgb: 245, 61, 61;
  --ion-color-danger-contrast: #ffffff;
  --ion-color-danger-contrast-rgb: 255, 255, 255;
  --ion-color-danger-shade: #d33939;
  --ion-color-danger-tint: #f25454;

  --ion-color-dark: #222428;
  --ion-color-dark-rgb: 34, 34, 34;
  --ion-color-dark-contrast: #ffffff;
  --ion-color-dark-contrast-rgb: 255, 255, 255;
  --ion-color-dark-shade: #1e2023;
  --ion-color-dark-tint: #383a3e;

  --ion-color-medium: #989aa2;
  --ion-color-medium-rgb: 152, 154, 162;
  --ion-color-medium-contrast: #ffffff;
  --ion-color-medium-contrast-rgb: 255, 255, 255;
  --ion-color-medium-shade: #86888f;
  --ion-color-medium-tint: #a2a4ab;

  --ion-color-light: #f4f5f8;
  --ion-color-light-rgb: 244, 244, 244;
  --ion-color-light-contrast: #000000;
  --ion-color-light-contrast-rgb: 0, 0, 0;
  --ion-color-light-shade: #d7d8da;
  --ion-color-light-tint: #f5f6f9;
}
```

For more info on theming your Ionic app, see the guide [here](/docs/theming/themes).

### Wrapping up

Adding Ionic React to an existing React project is fairly simple and can be done in just a few minutes.

The great thing about using individual components from Ionic React is that you only import the component you need. This makes Ionic React ideal for adding it to existing projects that need to look and work great on mobile devices.
