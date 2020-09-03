---
previousText: 'Lifecycle'
previousUrl: '/docs/vue/lifecycle'
nextText: 'Config'
nextUrl: '/docs/vue/config'
---

# Vue Navigation

This guide covers how routing works in an app built with Ionic and Vue.

The `IonRouterOutlet` component uses the popular [Vue Router](https://router.vuejs.org/) library under the hood. With Ionic and Vue Router, you can create multi-page apps with rich page transitions.

Everything you know about routing using Vue Router carries over into Ionic Vue. Let's take a look at the basics of an Ionic Vue app and how routing works with it.

## A Brief Note

While reading this guide, you may notice that most of these concepts are very similar to the concepts found in Vue Router without Ionic Framework. You observation would be correct! Ionic Vue leverages the best parts of Vue Router to make the transition to building apps with Ionic Framework as seamless as possible. As a result, we recommend relying on Vue Router features as much as possible rather than trying to build your own routing solutions.

## A Simple Route

Here is a sample routing configuration that defines a single route to the "/home" URL. When you visit "/home", the route renders the `HomePage` component.

**router/index.ts**

```typescript
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '@/views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
```

On the app's initial load, the app will render the `HomePage` component as that is what is configured here.

## Handling Redirects

What if we wanted to land a different path on our initial load? For this, we can use router redirects. Redirects work the same way that a typical route object does, but just includes some different keys:

```typescript
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
]
```

In our redirect, we look for the index path of our app. Then if we load that, we redirect to the `home` route.

## Navigating to Different Routes

This is all great, but how does one actually navigate to a route? For this, we can use the `router-link` property. Let's create a new routing setup:

```typescript
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/detail',
    name: 'Detail',
    component: DetailPage
  }
]
```

Say we start on the `home` route, and we want to add a button that takes us to the `detail` route. We can do this using the following HTML to navigate to the `detail` route:
```html
<ion-button router-link="/detail">Go to detail</ion-button>
```

We can also programatically navigate in our app by using the router API:

```typescript
<template>
  <ion-page>
    <ion-content>
      <ion-button @click="() => router.push('/detail')">Go to detail</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { IonButton, IonContent, IonPage } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default defineComponent({
    name: 'HomePage',
    components: {
      IonButton, 
      IonContent, 
      IonPage
    },
    setup() {
      const router = useRouter();
      return { router };
    }
  })
</script>
```

Both options provide the same navigation mechanism, just fitting different use cases.

## Lazy Loading Routes

The current way our routes are setup makes it so they are included in the same initial chunk when loading the app, which is not always ideal. Instead, we can set up our routes so that components are loaded as they are needed:

```typescript
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('@/views/DetailPage.vue')
  }
]
```

Here, we have the same setup as before only this time `DetailPage` has been replaced with an import call. This will result in the `DetailPage` component no longer being part of the chunk that is requested on application load.

## Working with Tabs

When working with tabs, Ionic Vue needs a way to know which view belongs to which tab. The `IonTabs` component comes in handy here, but let's look at what the routing setup for this looks like:

```typescript
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: 'tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3.vue')
      }
    ]
  }
]
```

Here, our `tabs` path loads a `Tabs` component. We provide each tab as a route object inside of the `children` array. In this example, we call the path `tabs`, but this can be customized. 

Let's start by taking a look at our `Tabs` component:

```typescript
<template>
  <ion-page>
    <ion-content>
      <ion-tabs>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="tab1" href="/tabs/tab1">
            <ion-icon :icon="triangle" />
            <ion-label>Tab 1</ion-label>
          </ion-tab-button>
            
          <ion-tab-button tab="tab2" href="/tabs/tab2">
            <ion-icon :icon="ellipse" />
            <ion-label>Tab 2</ion-label>
          </ion-tab-button>
          
          <ion-tab-button tab="tab3" href="/tabs/tab3">
            <ion-icon :icon="square" />
            <ion-label>Tab 3</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonContent, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonContent, IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      ellipse, 
      square, 
      triangle,
    }
  }
}
</script>
```

If you have worked with Ionic Framework before, this should feel familiar. We create an `ion-tabs` component, and provide an `ion-tab-bar`. The `ion-tab-bar` provides and `ion-tab-button` components, each with a `tab` property that is associated with its corresponding tab in the router config.


## IonRouterOutlet

The `IonRouterOutlet` component provides a container to render your views in. It is similar to the `RouterView` component found in other Vue applications except that `IonRouterOutlet` can render multiple pages in the DOM in the same outlet. When a component is rendered in `IonRouterOutlet` we consider this to be an Ionic Framework "page". The router outlet container controls the transition animation between the pages as well as controls when a page is created and destroyed. This helps maintain the state between the views when switching back and forth between them.

Nothing should be provided inside of `IonRouterOutlet` when setting it up in your template. While `IonRouterOutlet` can be nested in child components, we caution against it as it typically makes navigation in apps confusing.

## URL Parameters

## More Information

