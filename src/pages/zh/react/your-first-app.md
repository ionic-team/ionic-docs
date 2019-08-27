---
previousText: 'Overview'
previousUrl: '/docs/react/overview'
nextText: 'Lifecycle'
nextUrl: '/docs/react/lifecycle'
---

# Ionic React

## What is Ionic Framework?

First off, if you're new here, welcome! Ionic is a free and open source component library for building apps that run on iOS, Android, Electron, and the Web. You write your app once using familiar technologies (HTML, CSS, JavaScript) and deploy to any platform.

Along with the UI components, Ionic also provides a command line tool for creating new apps, as well as deploying to the various platforms we support.

In this guide, we'll go over the basics of both React and Ionic, including any Ionic specific features. If you're familiar already with React, enjoy the guide and learn something new about Ionic. If you're not familiar with either, no worries! This guide will cover the basics and provide enough information to get an app up and running.

## Creating a project with the Ionic CLI

To begin, let's install the latest version of the Ionic CLI.

```shell
npm install -g ionic@latest
```

From here, the global command `ionic` will allow for the creation of a React project with Ionic and any other dependencies. To create a new project, run the following command:

```shell
ionic start myApp blank --type=react
cd myApp
```

From here, we run `ionic serve` and have our project running in the browser.

## A look at a React Component

The base of our app will be in the `src` directory, and the main entry point will be our `index.tsx`. If we open our project in a code editor and open `src/index.tsx`, we should see the following:

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

So what's going on here? Well, the first three lines are pulling in some dependencies. The first being React itself. This allows us to write components in an HTML-like syntax called JSX. We'll talk about JSX a bit more later on.

The second import is for ReactDOM. The `ReactDOM.render` method is the browser/DOM specific way of taking our components and rendering it to a specified DOM node.

The last import is the root component for our app, simply named `App`. This is our first React component and will be used in the bootstrapping process for our React app.

If we open `App.tsx`, we should see the following.

```typescript
import React from 'react';
import { Route } from 'react-router-dom';
import { IonApp, IonPage, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/core/css/core.css';

const App: React.FunctionComponent = () => (
  <IonApp>
    <IonReactRouter>
      <IonPage>
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact={true} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
        </IonRouterOutlet>
      </IonPage>
    </IonReactRouter>
  </IonApp>
);
```

At first glance it may look like there's a lot going on, so let's break it down, starting with the first group of imports.

```typescript
import React from 'react';
import { Route } from 'react-router-dom';
import { IonApp, IonPage, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
```

Similar to `index.tsx`, we first must import React in order to use JSX.

The next import is from `react-router-dom`. We're importing Route, which is how we’ll match the app’s URL with the components we want to render

Following ReactRouter, we next have our first imports for Ionic. To use a component in React, you must first import it. So for Ionic, this means anytime we want to use a Button or a Card, it must be added to our imports. In the case of our App component, we're only using `IonApp`, `IonPage`, `IonRouterOutlet`, and `IonReactRouter`.

`IonReactRouter` is a component that wraps ReactRouter’s BrowserRouter component. It more or less behaves the same as BrowserRouter with a few differences. We have deeper guide that goes over these differences in our [React Navigation Docs](/docs/react/navigation).

The last important import is the `Home` component import. This is a component that we will be able to navigate to in our app. We'll look at the navigation part a bit later.

The CSS import is pulling in the utility styles from Ionic for things like padding, typography, etc.

After reviewing all of the imports, we now get to our first look at a React Component:

```typescript
const App: React.FunctionComponent = () => (
  <IonApp>
    <IonReactRouter>
      <IonPage>
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact={true} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
        </IonRouterOutlet>
      </IonPage>
    </IonReactRouter>
  </IonApp>
);
```

This React component sets up the initial routing for our app, as well as include some core Ionic components for animations and layout (IonRouterOutlet and IonApp). One thing that stands out is that in React, to do data-binding, the value is passed in curly braces (`{}`). So in the `Route` component, we can set the value of `component` to the `Home` component from earlier. This is how React will know that that value is not a string, but a reference to a component.

> What's important to note here is that these are all standard React DOM libraries, meaning there's no custom integration layer or transpilation step.

## A component with style

Now the `App` does not really have a lot to modify here. It's a basic example of a container component. With the Router logic set, all it's responsible for is to render a component that matches the given URL route. Since we already have one component/router setup, let's go ahead and modify our `Home` component.

Currently, the `Home` component looks like so:

![React home component](/docs/assets/img/guides/react/first-app/home-route.png)

```typescript
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Home: React.FunctionComponent = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        The world is your oyster.
        <p>
          If you get lost, the{' '}
          <a
            target="_blank"
            rel="noopener"
            href="https://ionicframework.com/docs/"
          >
            docs
          </a>{' '}
          will be your guide.
        </p>
      </IonContent>
    </>
  );
};
```

Much like the `App` component we started off with, we have some imports for specific Ionic components, an import for React, and then our React component itself. This component represents what Ionic considers a page (a component with a route/URL), and includes some common building blocks of a full screen component, like header, title, and content components.

`IonHeader` is a bit self explanatory. It's a component that is meant to exist at the top of the page. `IonHeader` itself doesn't really do much by itself, aside from handling some flexbox-based layout. It's meant to hold other components, like `IonToolbar` or `IonSearchbar`.

`IonContent` is, as its name suggests, the main content area for our page. It's responsible for providing the scrollable content that users will interact with, plus any scroll events that could be used in an app.

Our current content is fairly simple, but does not contain anything that could be used in a real app, so let's change that.

> Note: For brevity, we're excluding repeating part of our component, like the function declaration or import statements for other components.

```typescript
<>
  ...
  <IonContent>
    <IonList>
      <IonItem>
        <IonCheckbox slot="start" />
        <IonLabel>
          <h1>Create Idea</h1>
          <IonNote>Run Idea by Brandy</IonNote>
        </IonLabel>
        <IonBadge color="success" slot="end">
          5 Days
        </IonBadge>
      </IonItem>
    </IonList>
  </IonContent>
</>
```

Here in our `IonContent`, we're adding an `IonList` and a much more involved `IonItem` component. Let's look at `IonItem`, as it's really the centerpiece here.

```typescript
<IonItem>
  <IonCheckbox slot="start" />
  <IonLabel>
    <h1>Create Idea</h1>
    <IonNote>Run Idea by Brandy</IonNote>
  </IonLabel>
  <IonBadge color="success" slot="end">
    5 Days
  </IonBadge>
</IonItem>
```

Item is important as it clearly shows the mix of React concepts and Web Component concepts. The first clear example of a React concept is self-closing tags for React Components in `IonCheckbox`. This is just a simpler way of writing components that do not contain any child content.

From the Web Components side, we have a special attribute called `slot`. This is key for letting the `IonItem` know where to place the `IonCheckbox` when it renders. This is not a React API, but a web standards API.

Let's look at another component from Ionic, FAB. Floating Action Buttons are a nice way to provide a main action that is elevated from the rest of an app. For this FAB, we'll need 3 components: a FAB, a FAB Button, and an Icon.

```typescript
import { add } from ‘ionicons/icons’;
…

<IonContent>
  <IonList>
  ...
  </IonList>

  <IonFab vertical="bottom" horizontal="end" slot="fixed">
    <IonFabButton>
      <IonIcon icon={add} />
    </IonFabButton>
  </IonFab>

</IonContent>
```

On our main `IonFab`, we're setting its positioning with the vertical and horizontal attributes. We're also setting the render location to "fixed" with the slot attribute. This will tell `IonFab` to render outside of the scrollable content in `IonContent`.

Now let's wire up a click handler to this. What we want to do is when we click the button, we'll navigate to a new page (which we'll create in a moment). To do this, we'll need to get access to React Router's navigation API. Thankfully since this is rendered in a Router/Route context, we have access to React Routers APIs via Props passed to our Home component.

```typescript
export default function Home(props: RouteComponentProps) {
  return (
    <>
      <IonHeader>...</IonHeader>
      <IonContent>
        <IonList>...</IonList>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => props.history.push('/new')}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </>
  );
}
```

So in our function declaration, we're passing in `props` and giving it a type of `RouteComponentProps`. This `props` object gives us access to the history API from React Router, allowing us to push a new route onto the navigation stack. On our `IonFabButton`, we can add a click handler, and just call `props.history.push` and pass in the new route. In this case, we'll navigate to `new`.

```typescript
<IonFabButton onClick={() => props.history.push('/new')} >
```

## Creating a new Route

Now that we have the pieces in place to navigate in our app, we need to create a new component and add the new route to our router declaration. Let's open our `App.tsx` file and add the new route.

```typescript
...
import Home from './pages/Home';

import NewItem from './pages/NewItem';
...
export default function App() {
  return (
    <IonReactRouter>
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <IonPage>
        <IonRouterOutlet>
          <Route path="/home" component={Home}  />

          <Route path="/new" component={NewItem} />

        </IonRouterOutlet>
      </IonPage>
    </IonReactRouter>
  );
}```
```

With our router now having an entry for the route `/new`, we'll create the component needed, `NewItem`. This will exist in `src/pages/NewItem.tsx`

Let's fill the `NewItem.tsx` with some placeholder content for the moment.

```typescript
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import React from 'react';

export default function NewItem(props: any) {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>New Item</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent />
    </>
  );
}
```

The content here is pretty straight forward, and should look familiar to the `Home` component. What is new is the `IonBackButton` component. This is used to navigate back to the previous route. Pretty straight forward? Ok, but what if we reload the page?

Well in this case, the in-memory history is lost, so the back button disappears. To address this, we can set the `defaultHref` attribute value to the URL we want to navigate to if there is no history.

```typescript
return (
  <>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/home" />
        </IonButtons>
        <IonTitle>New Item</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent />
  </>
);
```

Here, when we reload, if there is no app history present, we'll be able to navigate back to our home route.

## Where to go from here

This guide covers the basics of creating an Ionic React app and adding some basic navigation. For a more detailed look at Ionic’s components, check out the [component API pages](/docs/components). For more details on React, review the [React Docs](https://reactjs.org).