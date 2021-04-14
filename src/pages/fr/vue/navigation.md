---
previousText: 'Cycle de Vie'
previousUrl: '/docs/vue/lifecycle'
nextText: 'Configuration'
nextUrl: '/docs/vue/config'
---

# Navigation de Vue

Ce guide couvre le fonctionnement du routage dans une application construite avec Ionic et Vue.

Le composant `IonRouterOutlet` utilise la populaire bibliothèque [Vue Router](https://router.vuejs.org/) sous le capot. Avec Ionic et Vue Router, vous pouvez créer des applications multi-pages avec des transitions de page riche.

Tout ce que vous savez sur le routage avec Vue Router est transféré dans Ionic Vue. Regardons les bases d'une application Ionic Vue et comment le routage fonctionne avec elle.

## Une brève note

En lisant ce guide, vous remarquerez peut-être que la plupart de ces concepts sont très similaires à ceux que l'on trouve dans Vue Router sans Ionic Framework. Votre observation serait correcte! Ionic Vue exploite les meilleures parties de Vue Router pour rendre la transition vers la construction d'applications avec Ionic Framework aussi transparente que possible. Par conséquent, nous vous recommandons de vous appuyer autant que possible sur les fonctionnalités de Vue Router plutôt que d'essayer de construire vos propres solutions de routage.

## Une simple route

Voici un exemple de configuration de routage qui définit une seule route vers l'URL "/home". Lorsque vous visitez "/home", l'itinéraire affiche le composant `Page d'accueil`.

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

Au chargement initial de l'application, l'application rendra le composant `HomePage` car c'est ce qui est configuré ici.

## Gestion des redirections

Et si nous voulions atterrir un chemin différent sur notre charge initiale? Pour cela, nous pouvons utiliser les redirections du routeur. Les redirections fonctionnent de la même manière qu'un objet de route typique, mais comprennent simplement quelques clés différentes :

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

Dans notre redirection, nous cherchons le chemin d'index de notre application. Ensuite, si nous le chargeons, nous redirigeons vers la route `home`.

## Naviguer vers différentes routes

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

We can also programmatically navigate in our app by using the router API:

```html
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

## Shared URLs versus Nested Routes

A common point of confusion when setting up routing is deciding between shared URLs or nested routes. This part of the guide will explain both and help you decide which one to use.

### Shared URLs

Shared URLs is a route configuration where routes have pieces of the URL in common. The following is an example of a shared URL configuration:

```typescript
const routes: Array<RouteRecordRaw> = [
  {
    path: '/dashboard', 
    component: DashboardMainPage,
  },
  {
    path: '/dashboard/stats',
    component: DashboardStatsPage
  }
];
```

The above routes are considered "shared" because they reuse the `dashboard` piece of the URL.

### Nested Routes

Nested Routes is a route configuration where routes are listed as children of other routes. The following is an example of a nested route configuration:

```typescript
const routes: Array<RouteRecordRaw> = [
  {
    path: '/dashboard/:id', 
    component: DashboardRouterOutlet,
    children: [
      {
        path: '',
        component: DashboardMainPage
      },
      { 
        path: 'stats', 
        component: DashboardStatsPage
      },
    ]
  }
];
```

The above routes are nested because they are in the `children` array of the parent route. Notice that the parent route renders the `DashboardRouterOutlet` component. When you nest routes, you need to render another instance of `ion-router-outlet`.

### Which one should I choose?

Shared URLs are great when you want to transition from page A to page B while preserving the relationship between the two pages in the URL. In our previous example, a button on the `/dashboard` page could transition to the `/dashboard/stats` page. The relationship between the two pages is preserved because of a) the page transition and b) the url.

Nested routes are mostly useful when you need to render content in outlet A while also rendering sub-content inside of a nested outlet B. The most common use case you will run into is tabs. When you load up a tabs Ionic starter application, you will see `ion-tab-bar` and `ion-tabs` components rendered in the first `ion-router-outlet`. The `ion-tabs` component renders another `ion-router-outlet` which is responsible for rendering the contents of each tab.

There are very few use cases in which nested routes make sense in mobile applications. When in doubt, use the shared URL route configuration. We strongly caution against using nested routing in contexts other than tabs as it can quickly make navigating your app confusing.

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

```html
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

### Child Routes within Tabs

When adding additional routes to tabs you should write them as sibling routes with the parent tab as the path prefix. The example below defines the `/tabs/tab1/view` route as a sibling of the `/tabs/tab1` route. Since this new route has the `tab1` prefix, it will be rendered inside of the `Tabs` component, and Tab 1 will still be selected in the `ion-tab-bar`.

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
        path: 'tab1/view',
        component: () => import('@/views/Tab1View.vue')
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

## IonRouterOutlet

The `IonRouterOutlet` component provides a container to render your views in. It is similar to the `RouterView` component found in other Vue applications except that `IonRouterOutlet` can render multiple pages in the DOM in the same outlet. When a component is rendered in `IonRouterOutlet` we consider this to be an Ionic Framework "page". The router outlet container controls the transition animation between the pages as well as controls when a page is created and destroyed. This helps maintain the state between the views when switching back and forth between them.

Nothing should be provided inside of `IonRouterOutlet` when setting it up in your template. While `IonRouterOutlet` can be nested in child components, we caution against it as it typically makes navigation in apps confusing. See [Shared URLs versus Nested Routes](#shared-urls-versus-nested-routes) for more information.

## IonPage

The `IonPage` component wraps each view in an Ionic Vue app and allows page transitions and stack navigation to work properly. Each view that is navigated to using the router must include an `IonPage` component.

```html
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">Hello World</ion-content>
  </ion-page>
</template>

<script lang="ts">
import { 
  IonContent, 
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    IonContent, 
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  }
});
</script>
```

Components presented via `IonModal` or `IonPopover` do not typically need an `IonPage` component unless you need a wrapper element. In that case, we recommend using `IonPage` so that the component dimensions are still computed properly.

## Accessing the IonRouter Instance

There may be a few use cases where you need to get access to the `IonRouter` instance from within your Vue application. For example, you might want to know if you are at the root page of the application when a user presses the hardware back button on Android. For use cases like these, you can inject the `IonRouter` dependency into your component:

```typescript
import { useIonRouter } from '@ionic/vue';

...

export default {
  setup() {
    const ionRouter = useIonRouter();
    if (ionRouter.canGoBack()) {
      // Perform some action here
    }
  }
}
```

## URL Parameters

Let's expand upon our original routing example to show how we can use URL parameters:

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
    path: '/detail/:id',
    name: 'Detail',
    component: DetailPage
  }
]
```

Notice that we have now added `:id` to the end of our `detail` path string. URL parameters are dynamic portions of our route paths. When the user navigates to a URL such as `/details/1` the "1" is saved to a parameter named "id" which can be accessed in the component when the route renders.

Let's look at how to use it in our component:

```html
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Details</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      Detail ID: {{ id }}
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'Detail',
  components: {
    IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar
  },
  setup() {
    const route = useRoute();
    const { id } = route.params;
    return { id };
  }
})
</script>
```

Our `route` variable contains an instance of the current route. It also contains any parameters we have passed in. We can obtain the `id` parameter from here and display it on the screen.

## Router History

Vue Router ships with a configurable history mode. Let's look at the different options and why you might want to use each one.

* `createWebHistory`: This option creates an HTML5 history. It leverages the History API to achieve URL navigation without a page reload. This is the most common history mode for single page applications. When in doubt, use `createWebHistory`.

* `createWebHashHistory`: This option adds a hash (`#`) to your URL. This is useful for web applications with no host or when you do not have full control over the server routes. Search engines sometimes ignore hash fragments, so you should use `createWebHistory` instead if SEO is important for your application.

* `createMemoryHistory`: This option creates an in-memory based history. This is mainly used to handle server-side rendering (SSR).

## More Information

For more info on routing in Vue using Vue Router, check out their docs at http://router.vuejs.org/.