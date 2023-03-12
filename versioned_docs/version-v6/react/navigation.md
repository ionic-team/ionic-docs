---
title: React Navigation
sidebar_label: Navigation/Routing
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<head>
  <title>React Navigation: Router Link Redirect to Navigate to Another Page</title>
  <meta
    name="description"
    content="The React Navigation guide covers routing in an app built with Ionic and React. Learn to define a redirect path for router links to navigate to another page."
  />
</head>

This guide covers how routing works in an app built with Ionic and React.

`IonReactRouter` uses the popular [React Router](https://github.com/ReactTraining/react-router) library under the hood. With Ionic and React Router, you can create multi-page apps with rich page transitions.

Everything you know about routing using React Router carries over into Ionic React. Let's take a look at the basics of an Ionic React app and how routing works with it.

## Routing in Ionic React

Here is a sample `App` component that defines a single route to the "/dashboard" URL. When you visit "/dashboard", the route renders the `DashboardPage` component.

**App.tsx**

```tsx
const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/dashboard" component={DashboardPage} />
        <Redirect exact from="/" to="/dashboard" />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);
```

Directly after the `Route`, we define our default `Redirect`, which, when a user visits the root URL of the app ("/"), it redirects them to the "/dashboard" URL.

The redirect also has the `exact` prop set, which means the URL has to match the `from` prop (or the `path` prop if `exact` was used on a `Route`) precisely for this route to be a match. Without it, this redirect would render for every route, since every route begins with "/".

You can also programmatically redirect from a Route's render method based on a condition, like checking if a user is authed or not:

```tsx
<Route
  exact
  path="/dashboard"
  render={(props) => {
    return isAuthed ? <DashboardPage {...props} /> : <LoginPage />;
  }}
/>
```

## IonReactRouter

The `IonReactRouter` component wraps the traditional [`BrowserRouter`](https://reacttraining.com/react-router/web/api/BrowserRouter) component from React Router, and sets the app up for routing. Therefore, use `IonReactRouter` in place of `BrowserRouter`. You can pass in any props to `IonReactRouter` and they will be passed down to the underlying `BrowserRouter`.

## Nested Routes

Inside the Dashboard page, we define more routes related to this specific section of the app:

**DashboardPage.tsx**

```tsx
const DashboardPage: React.FC = () => {
  return (
    <IonPage>
      <IonRouterOutlet>
        <Route exact path="/dashboard" component={UsersListPage} />
        <Route path="/dashboard/users/:id" component={UserDetailPage} />
      </IonRouterOutlet>
    </IonPage>
  );
};
```

Here, there are a couple more routes defined to point to pages from within the dashboard portion of the app. Note, that we need to define the whole route in the path, and we can't leave off "/dashboard" even though we arrived to this page from that URL. React Router requires full paths, and relative paths are not supported.

However, we can use the [`match`](https://reacttraining.com/react-router/web/api/match) objects `url` property to provide the URL that was matched to render a component, which helps when working with nested routes:

```tsx
const DashboardPage: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <IonPage>
      <IonRouterOutlet>
        <Route exact path={match.url} component={UsersListPage} />
        <Route path={`${match.url}/users/:id`} component={UserDetailPage} />
      </IonRouterOutlet>
    </IonPage>
  );
};
```

Here, `match.url` contains the value of "/dashboard", since that was the URL used to render the `DashboardPage`.

These routes are grouped in an `IonRouterOutlet`, let's discuss that next.

## IonRouterOutlet

The `IonRouterOutlet` component provides a container for Routes that render Ionic "pages". When a page is in an `IonRouterOutlet`, the container controls the transition animation between the pages as well as controls when a page is created and destroyed, which helps maintain the state between the views when switching back and forth between them.

The `DashboardPage` above shows a users list page and a details page. When navigating between the two pages, the `IonRouterOutlet` provides the appropriate platform page transition and keeps the state of the previous page intact so that when a user navigates back to the list page, it appears in the same state as when it left.

An `IonRouterOutlet` should only contain `Route`s or `Redirect`s. Any other component should be rendered either as a result of a `Route` or outside of the `IonRouterOutlet`.

## Fallback Route

A common routing use case is to provide a "fallback" route to be rendered in the event the location navigated to does not match any of the routes defined.

We can define a fallback route by placing a `Route` component without a `path` property as the last route defined within an `IonRouterOutlet`.

**DashboardPage.tsx**

```tsx
const DashboardPage: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <IonRouterOutlet>
      <Route exact path={match.url} component={UsersListPage} />
      <Route path={`${match.url}/users/:id`} component={UserDetailPage} />
      <Route render={() => <Redirect to={match.url} />} />
    </IonRouterOutlet>
  );
};
```

Here, we see that in the event a location does not match the first two `Route`s the `IonRouterOutlet` will redirect the Ionic React app to the `match.url` path.

You can alternatively supply a component to render instead of providing a redirect.

```tsx
const DashboardPage: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <IonRouterOutlet>
      <Route exact path={match.url} component={UsersListPage} />
      <Route path={`${match.url}/users/:id`} component={UserDetailPage} />
      <Route component={NotFoundPage} />
    </IonRouterOutlet>
  );
};
```

## IonPage

The `IonPage` component wraps each view in an Ionic React app and allows page transitions and stack navigation to work properly. Each view that is navigated to using the router must include an `IonPage` component.

```tsx
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">Hello World</IonContent>
    </IonPage>
  );
};
export default Home;
```

## Navigation

There are several options available when routing to different views in an Ionic React app. Here, the `UsersListPage` uses `IonItem`'s `routerLink` prop to specify the route to go to when the item is tapped/clicked:

**UsersListPage.tsx**

```tsx
const UsersListPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Users</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem routerLink="/dashboard/users/1">
            <IonLabel>User 1</IonLabel>
          </IonItem>
          <IonItem routerLink="/dashboard/users/2">
            <IonLabel>User 2</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};
```

Other components that have the `routerLink` prop are `IonButton`, `IonCard`, `IonRouterLink`, `IonFabButton`, and `IonItemOption`.

Each of these components also have a `routerDirection` prop to explicitly set the type of page transition to use ("back", "forward", or "none").

Outside of these components that have the `routerLink` prop, you can also use React Routers [`Link`](https://reacttraining.com/react-router/web/api/Link) component to navigate between views:

```html
<Link to="/dashboard/users/1">User 1</Link>
```

We recommend using one of the above methods whenever possible for routing. The advantage to these approaches is that they both render an anchor (`<a>`)tag, which is suitable for overall app accessibility.

A programmatic option for navigation is using the [`history`](https://reacttraining.com/react-router/web/api/history) prop that React Router provides to the components it renders via routes.

```tsx
<IonButton
  onClick={(e) => {
    e.preventDefault();
    history.push('/dashboard/users/1');
  }}
>
  Go to User 1
</IonButton>
```

:::note
`history` is a prop.
:::

### Navigating using `history.go`

React Router uses the `history` package which has a [history.go](https://github.com/remix-run/history/blob/dev/docs/api-reference.md#history.go) method that allows developers to move forward or backward through the application history. Let's take a look at an example.

Say you have the following application history:

`/pageA` --> `/pageB` --> `/pageC`

If you were to call `router.go(-2)` on `/pageC`, you would be brought back to `/pageA`. If you then called `router.go(2)`, you would be brought to `/pageC`.

Using `history.go()` in Ionic React is not supported at the moment. Interested in seeing support for this get added to Ionic React? [Let us know on GitHub](https://github.com/ionic-team/ionic-framework/issues/23775)!

## URL Parameters

The second route defined in the Dashboard Page has a URL parameter defined (the ":id" portion in the path). URL parameters are dynamic portions of the `path`, and when the user navigates to a URL such as "/dashboard/users/1", the "1" is saved to a parameter named "id", which can be accessed in the component the route renders. Let's see how that's done.

**UserDetailPage.tsx**

```tsx
interface UserDetailPageProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const UserDetailPage: React.FC<UserDetailPageProps> = ({ match }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>User Detail</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>User {match.params.id}</IonContent>
    </IonPage>
  );
};
```

The [`match`](https://reacttraining.com/react-router/web/api/match) prop contains information about the matched route, including the URL params. We obtain the `id` param here and display it on the screen.

Note how we use a TypeScript interface to strongly type the props object. The interface gives us type safety and code completion inside of the component.

## Linear Routing versus Non-Linear Routing

### Linear Routing

If you have built a web app that uses routing, you likely have used linear routing before. Linear routing means that you can move forward or backward through the application history by pushing and popping pages.

The following is an example of linear routing in a mobile app:

<video
  style={{
    'margin': '40px auto',
    'display': 'flex'
  }}
  width="400"
  src={useBaseUrl('video/linear-routing-demo.mp4')} 
  controls
></video>

The application history in this example has the following path:

`Accessibility` --> `VoiceOver` --> `Speech`

When we press the back button, we follow that same routing path except in reverse. Linear routing is helpful in that it allows for simple and predictable routing behaviors.

The downside of linear routing is that it does not allow for complex user experiences such as tab views. This is where non-linear routing comes into play.

### Non-Linear Routing

Non-linear routing is a concept that may be new to many web developers learning to build mobile apps with Ionic.

Non-linear routing means that the view that the user should go back to is not necessarily the previous view that was displayed on the screen.

The following is an example of non-linear routing:

<video
  style={{
    'margin': '40px auto',
    'display': 'flex'
  }}
  width="400"
  src={useBaseUrl('video/non-linear-routing-demo.mp4')} 
  controls
></video>

In the example above, we start on the `Originals` tab. Tapping a card brings us to the `Ted Lasso` view within the `Originals` tab.

From here, we switch to the `Search` tab. Then, we tap the `Originals` tab again and are brought back to the `Ted Lasso` view. At this point, we have started using non-linear routing.

Why is this non-linear routing? The previous view we were on was the `Search` view. However, pressing the back button on the `Ted Lasso` view should bring us back to the root `Originals` view. This happens because each tab in a mobile app is treated as its own stack. The [Working with Tabs](#working-with-tabs) sections goes over this in more detail.

If tapping the back button simply called `history.go(-1)` from the `Ted Lasso` view, we would be brought back to the `Search` view which is not correct.

Non-linear routing allows for sophisticated user flows that linear routing cannot handle. However, certain linear routing APIs such as `history.go()` cannot be used in this non-linear environment. This means that `history.go()` should not be used when using tabs or nested outlets.

### Which one should I choose?

We recommend keeping your application as simple as possible until you need to add non-linear routing. Non-linear routing is very powerful, but it also adds a considerable amount of complexity to mobile applications.

The two most common uses of non-linear routing is with tabs and nested `IonRouterOutlets`. We recommend only using non-linear routing if your application meets the tabs or nested router outlet use cases.

For more on tabs, please see [Working with Tabs](#working-with-tabs).

For more on nested router outlets, please see [Nested Routes](#nested-routes).

## Shared URLs versus Nested Routes

A common point of confusion when setting up routing is deciding between shared URLs or nested routes. This part of the guide will explain both and help you decide which one to use.

### Shared URLs

Shared URLs is a route configuration where routes have pieces of the URL in common. The following is an example of a shared URL configuration:

```tsx
const App: React.FC = () => {
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/dashboard" exact={true}>
          <DashboardMainPage />
        </Route>
        <Route path="/dashboard/stats" exact={true}>
          <DashboardStatsPage />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
}
```

The above routes are considered "shared" because they reuse the `dashboard` piece of the URL.

### Nested Routes

Nested Routes is a route configuration where routes are listed as children of other routes. The following is an example of a nested route configuration:

```tsx
const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/dashboard/:id">
          <DashboardRouterOutlet />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
)

const DashboardRouterOutlet: React.FC = () => (
  <IonRouterOutlet>
    <Route path="/dashboard" exact={true}>
      <DashboardMainPage />
    </Route>
    <Route path="/dashboard/stats" exact={true}>
      <DashboardStatsPage />
    </Route>
  </IonRouterOutlet>
)
```

The above routes are nested because they are in the `children` array of the parent route. Notice that the parent route renders the `DashboardRouterOutlet` component. When you nest routes, you need to render another instance of `IonRouterOutlet`.

### Which one should I choose?

Shared URLs are great when you want to transition from page A to page B while preserving the relationship between the two pages in the URL. In our previous example, a button on the `/dashboard` page could transition to the `/dashboard/stats` page. The relationship between the two pages is preserved because of a) the page transition and b) the url.

Nested routes should be used when you want to render content in outlet A while also rendering sub-content inside of a nested outlet B. The most common use case you will run into is tabs. When you load up a tabs Ionic starter application, you will see `IonTabBar` and `IonTabs` components rendered in the first `IonRouterOutlet`. The `IonTabs` component renders another `IonRouterOutlet` which is responsible for rendering the contents of each tab.

There are very few use cases in which nested routes make sense in mobile applications. When in doubt, use the shared URL route configuration. We strongly caution against using nested routing in contexts other than tabs as it can quickly make navigating your app confusing.

## Working with Tabs

When working with tabs, Ionic needs a way to know which view belongs to which tab. The `IonTabs` component comes in handy here, but let's look at what the routing setup for this looks like:

```tsx
<IonApp>
  <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/tabs" render={() => <Tabs />} />
        <Route exact path="/">
          <Redirect to="/tabs" />
        </Route>
      </IonRouterOutlet>
    </IonSplitPane>
  </IonReactRouter>
</IonApp>
```

Here, our `tabs` path loads a `Tabs` component. We provide each tab as a route object inside of this component. In this example, we call the path `tabs`, but this can be customized.

Let's start by taking a look at our `Tabs` component:

```tsx
import { Redirect, Route } from 'react-router-dom';
import {
  IonContent,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

const Tabs: React.FC = () => (
  <IonContent>
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path="/tabs" to="/tabs/tab1" />
        <Route exact path="/tabs/tab1">
          <Tab1 />
        </Route>
        <Route exact path="/tabs/tab2">
          <Tab2 />
        </Route>
        <Route path="/tabs/tab3">
          <Tab3 />
        </Route>
        <Route exact path="/tabs">
          <Redirect to="/tabs/tab1" />
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/tabs/tab1">
          <IonIcon icon={triangle} />
          <IonLabel>Tab 1</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/tabs/tab2">
          <IonIcon icon={ellipse} />
          <IonLabel>Tab 2</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/tabs/tab3">
          <IonIcon icon={square} />
          <IonLabel>Tab 3</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </IonContent>
);

export default Tabs;
```

If you have worked with Ionic Framework before, this should feel familiar. We create an `IonTabs` component and provide an `IonTabBar`. The `IonTabBar` provides `IonTabButton` components, each with a `tab` property that is associated with its corresponding tab in the router config. We also provide an `IonRouterOutlet` to give `IonTabs` an outlet to render the different tab views in.

### How Tabs in Ionic Work

Each tab in Ionic is treated as an individual navigation stack. This means if you have three tabs in your application, each tab has its own navigation stack. Within each stack you can navigate forwards (push a view) and backwards (pop a view).

This behavior is important to note as it is different than most tab implementations that are found in other web based UI libraries. Other libraries typically manage tabs as one single history stack.
 
Since Ionic is focused on helping developers build mobile apps, the tabs in Ionic are designed to match native mobile tabs as closely as possible. As a result, there may be certain behaviors in Ionic's tabs that differ from tabs implementations you have seen in other UI libraries. Read on to learn more about some of these differences.

### Child Routes within Tabs

When adding additional routes to tabs you should write them as sibling routes with the parent tab as the path prefix. The example below defines the `/tabs/tab1/view` route as a sibling of the `/tabs/tab1` route. Since this new route has the `tab1` prefix, it will be rendered inside of the `Tabs` component, and Tab 1 will still be selected in the `IonTabBar`.

```tsx
<IonTabs>
  <IonRouterOutlet>
    <Redirect exact path="/tabs" to="/tabs/tab1" />
    <Route exact path="/tabs/tab1">
      <Tab1 />
    </Route>
    <Route exact path="/tabs/tab1/view">
      <Tab1View />
    </Route>
    <Route exact path="/tabs/tab2">
      <Tab2 />
    </Route>
    <Route path="/tabs/tab3">
      <Tab3 />
    </Route>
    <Route exact path="/tabs">
      <Redirect to="/tabs/tab1" />
    </Route>
  </IonRouterOutlet>
  <IonTabBar slot="bottom">
    <IonTabButton tab="tab1" href="/tabs/tab1">
      <IonIcon icon={triangle} />
      <IonLabel>Tab 1</IonLabel>
    </IonTabButton>
    <IonTabButton tab="tab2" href="/tabs/tab2">
      <IonIcon icon={ellipse} />
      <IonLabel>Tab 2</IonLabel>
    </IonTabButton>
    <IonTabButton tab="tab3" href="/tabs/tab3">
      <IonIcon icon={square} />
      <IonLabel>Tab 3</IonLabel>
    </IonTabButton>
  </IonTabBar>
</IonTabs>
```

### Switching Between Tabs

Since each tab is its own navigation stack, it is important to note that these navigation stacks should never interact. This means that there should never be a button in Tab 1 that routes a user to Tab 2. In other words, tabs should only be changed by the user tapping a tab button in the tab bar.

A good example of this in practice is the iOS App Store and Google Play Store mobile applications. These apps both provide tabbed interfaces, but neither one ever routes the user across tabs. For example, the "Games" tab in the iOS App Store app never directs users to the "Search" tab and vice versa.

Let's take a look at a couple common mistakes that are made with tabs.

**A Settings Tab That Multiple Tabs Reference**

A common practice is to create a Settings view as its own tab. This is great if developers need to present several nested settings menus. However, other tabs should never try to route to the Settings tab. As we mentioned above, the only way that the Settings tab should be activated is by a user tapping the appropriate tab button.

If you find that your tabs need to reference the Settings tab, we recommend making the Settings view a modal by using `ion-modal`. This is a practice found in the iOS App Store app. With this approach, any tab can present the modal without breaking the mobile tabs pattern of each tab being its own stack.

The example below shows how the iOS App Store app handles presenting an "Account" view from multiple tabs. By presenting the "Account" view in a modal, the app can work within the mobile tabs best practices to show the same view across multiple tabs.

<video
  style={{
    'margin': '40px auto',
    'display': 'flex'
  }}
  width="400"
  src={useBaseUrl('video/tabs-account-demo.mp4')} 
  controls
></video>

**Reusing Views Across Tabs**

Another common practice is to present the same view in multiple tabs. Developers often try to do this by having the view contained in a single tab, with other tabs routing to that tab. As we mentioned above, this breaks the mobile tabs pattern and should be avoided.

Instead, we recommend having routes in each tab that reference the same component. This is a practice done in popular apps like Spotify. For example, you can access an album or podcast from the "Home", "Search", and "Your Library" tabs. When accessing the album or podcast, users stay within that tab. The app does this by creating routes per tab and sharing a common component in the codebase.

The example below shows how the Spotify app reuses the same album component to show content in multiple tabs. Notice that each screenshot shows the same album but from a different tab.

| Home Tab | Search Tab |
| :------: | :--------: |
| <img src={useBaseUrl('img/usage/tabs-home.jpg')} /> | <img src={useBaseUrl('img/usage/tabs-search.jpg')} /> |

## Live Example

If you would prefer to get hands on with the concepts and code described above, please checkout our [live example](https://stackblitz.com/edit/ionic-react-routing?file=src/index.tsx) of the topics above on StackBlitz.

### IonRouterOutlet in a Tabs View

When working in a tabs view, Ionic React needs a way to determine what views belong to which tabs. We accomplish this by taking advantage of the fact that the paths provided to a `Route` are regular expressions.

While the syntax looks a bit strange, it is reasonably straightforward once you understand it.

For example, the routes for a view with two tabs (sessions and speakers) can be set up as such:

```tsx
<IonRouterOutlet>
  <Route path="/:tab(sessions)" component={SessionsPage} exact={true} />
  <Route path="/:tab(sessions)/:id" component={SessionDetail} />
  <Route path="/:tab(speakers)" component={SpeakerList} exact={true} />
</IonRouterOutlet>
```

If the navigated URL were "/sessions", it would match the first route and add a URL parameter named "tab" with the value of "sessions" to the resulting `match` object passed into `SessionsPage`.

When a user navigates to a session detail page ("/sessions/1" for instance), the second route adds a URL parameter named "tab" with a value of "sessions". When `IonRouterOutlet` sees that both pages are in the same "sessions" tab, it provides an animated page transition to the new view. If a user navigates to a new tab ("speakers" in this case), `IonRouterOutlet` knows not to provide the animation.

### Switches in IonRouterOutlet

Since `IonRouterOutlet` takes over the job in determining which routes get rendered, using a `Switch` from React Router has no effect when used inside of an `IonRouterOutlet`. Switches still function as expected when used outside an `IonRouterOutlet`.

## More Information

For more info on routing in React using React Router, check out their docs at [https://reacttraining.com/react-router/web](https://reacttraining.com/react-router/web).

## From the Community

[Ionic 4 and React: Navigation](https://alligator.io/ionic/ionic-4-react-navigation) - Paul Halliday
