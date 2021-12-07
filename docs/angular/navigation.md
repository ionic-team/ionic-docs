---
title: Angular Navigation
sidebar_label: Navigation/Routing
---

<head>
  <title>Angular Navigation: How Routing & Redirects Work in Angular Apps</title>
  <meta
    name="description"
    content="Our Angular Navigation guide covers how routing works in an app built with Ionic and Angular. Read to learn more about basic routing and redirects in Angular."
  />
</head>

This guide covers how routing works in an app built with Ionic and Angular.

The Angular Router is one of the most important libraries in an Angular application. Without it, apps would be single view/single context apps or would not be able to maintain their navigation state on browser reloads. With Angular Router, we can create rich apps that are linkable and have rich animations (when paired with Ionic of course). Let's look at the basics of the Angular Router and how we can configure it for Ionic apps.

## A simple Route

For most apps, having some sort of route is often required. The most basic configuration looks a bit like this:

```tsx

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
  ...
  RouterModule.forRoot([
    { path: '', component: LoginComponent },
    { path: 'detail', component: DetailComponent },
  ])
  ],
})
```

The simplest breakdown for what we have here is a path/component lookup. When our app loads, the router kicks things off by reading the URL the user is trying to load. In our sample, our route looks for `''`, which is essentially our index route. So for this, we load the `LoginComponent`. Fairly straight forward. This pattern of matching paths with a component continues for every entry we have in the router config. But what if we wanted to load a different path on our initial load?

## Handling Redirects

For this we can use router redirects. Redirects work the same way that a typical route object does, but just includes a few different keys.

```tsx
[
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'detail', component: DetailComponent },
];
```

In our redirect, we look for the index path of our app. Then if we load that, we redirect to the `login` route. The last key of `pathMatch` is required to tell the router how it should look up the path.

Since we use `full`, we're telling the router that we should compare the full path, even if ends up being something like `/route1/route2/route3`. Meaning that if we have:

```tsx
{ path: '/route1/route2/route3', redirectTo: 'login', pathMatch: 'full' },
{ path: 'login', component: LoginComponent },
```

And load `/route1/route2/route3` we'll redirect. But if we loaded `/route1/route2/route4`, we won't redirect, as the paths don't match fully.

Alternatively, if we used:

```tsx
{ path: '/route1/route2', redirectTo: 'login', pathMatch: 'prefix' },
{ path: 'login', component: LoginComponent },
```

Then load both `/route1/route2/route3` and `/route1/route2/route4`, we'll be redirected for both routes. This is because `pathMatch: 'prefix'` will match only part of the path.

## Navigating to different routes

Talking about routes is good and all, but how does one actually navigate to said routes? For this, we can use the `routerLink` directive. Let's go back and take our simple router setup from earlier:

```ts
RouterModule.forRoot([
  { path: '', component: LoginComponent },
  { path: 'detail', component: DetailComponent },
]);
```

Now from the `LoginComponent`, we can use the following HTML to navigate to the detail route.

```html
<ion-header>
  <ion-toolbar>
    <ion-title>Login</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding">
  <ion-button [routerLink]="['/detail']">Go to detail</ion-button>
</ion-content>
```

The important part here is the `ion-button` and `routerLink` directive. RouterLink works on a similar idea as typical `href`s, but instead of building out the URL as a string, it can be built as an array, which can provide more complicated paths.

We also can programmatically navigate in our app by using the router API.

```tsx
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  ...
})
export class LoginComponent {

  constructor(private router: Router){}

  navigate(){
    this.router.navigate(['/detail'])
  }
}
```

Both options provide the same navigation mechanism, just fitting different use cases.

:::note
A note on navigation with relative URLs: Currently, to support multiple navigation stacks, relative URLs are something not supported
:::

## Lazy loading routes

Now the current way our routes are setup makes it so they are included in the same chunk as the root app.module, which is not ideal. Instead, the router has a setup that allows the components to be isolated to their own chunks.

```tsx

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
  ...
  RouterModule.forRoot([
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
    { path: 'detail', loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule) }
  ])
  ],
})
```

While similar, the `loadChildren` property is a way to reference a module by using native import instead of a component directly. In order to do this though, we need to create a module for each of the components.

```tsx
...
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
  ...
  RouterModule.forChild([
    { path: '', component: LoginComponent },
  ])
  ],
})
```

:::note
We're excluding some additional content and only including the necessary parts.
:::

Here, we have a typical Angular Module setup, along with a RouterModule import, but we're now using `forChild` and declaring the component in that setup. With this setup, when we run our build, we will produce separate chunks for both the app component, the login component, and the detail component.

## Live Example

If you would prefer to get hands on with the concepts and code described above, please checkout our [live example](https://stackblitz.com/edit/ionic-angular-routing?file=src/app/app-routing.module.ts) of the topics above on StackBlitz.

## Working with Tabs

With Tabs, the Angular Router provides Ionic the mechanism to know what components should be loaded, but the heavy lifting is actually done by the tabs component. Let's look at a simple example.

```ts
const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () => import('../tab1/tab1.module').then((m) => m.Tab1PageModule),
          },
        ],
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];
```

Here we have a "tabs" path that we load. In this example we call the path "tabs", but the name of the paths can be changed. They can be called whatever fits your app. In that route object, we can define a child route as well. In this example, the top level child route "tab1" acts as our "outlet", and can load additional child routes. For this example, we have a single sub-child-route, which just loads a new component. The markup for the tab is as followed:

```html
<ion-tabs>
  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="tab1">
      <ion-icon name="flash"></ion-icon>
      <ion-label>Tab One</ion-label>
    </ion-tab-button>
  </ion-tab-bar>
</ion-tabs>
```

If you've built apps with Ionic before, this should feel familiar. We create a `ion-tabs` component, and provide a `ion-tab-bar`. The `ion-tab-bar` provides a `ion-tab-button` with a `tab` property that is associated with the tab "outlet" in the router config. Note that the latest version of `@ionic/angular` no longer requires `<ion-tab>`, but instead allows developers to fully customize the tab bar, and the single source of truth lives within the router configuration.
