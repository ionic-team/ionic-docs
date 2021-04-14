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

Tout cela est très bien, mais comment se rendre à un itinéraire ? Pour cela, nous pouvons utiliser la propriété `router-link`. Créons une nouvelle configuration de routage :

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

Disons que nous commençons sur la route `home`, et que nous voulons ajouter un bouton qui nous amène à la route `detail`. Nous pouvons le faire en utilisant le HTML suivant pour naviguer vers la route `detail` :

```html
<ion-button router-link="/detail">Go to detail</ion-button>
```

Nous pouvons également naviguer de manière programmatique dans notre application en utilisant l'API du routeur :

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

Les deux options fournissent le même mécanisme de navigation, mais s'adaptent à des cas d'utilisation différents.

## Les routes chargées à la volée

La configuration actuelle de nos routes fait qu'elles sont incluses dans le même chunk initial lors du chargement de l'application, ce qui n'est pas toujours idéal. Au lieu de cela, nous pouvons configurer nos routes de manière à ce que les composants soient chargés au fur et à mesure de leurs besoins :

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

Ici, nous avons la même configuration que précédemment, mais cette fois-ci, `DetailPage` a été remplacé par un appel à l'importation. Ainsi, le composant `DetailPage` ne fera plus partie du chunk demandé au chargement de l'application.

## URLs Partagées et Routes Imbriquées

Un point de confusion courant lors de la mise en place du routage consiste à choisir entre des URL partagées ou des routes imbriquées. Cette partie du guide explique les deux et vous aide à décider lequel utiliser.

### Les URLs partagées

Les URL partagées sont une configuration de route où les routes ont des morceaux d'URL en commun. Ce qui suit est un exemple de configuration d'URL partagée :

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

Les routes ci-dessus sont considérées comme "partagées" car elles réutilisent la partie `dashboard` de l'URL.

### Les Routes imbriquées

Les routes imbriquées sont une configuration de routes où les routes sont listées comme enfants d'autres routes. L'exemple suivant est un exemple de configuration de route imbriquée :

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

Les routes ci-dessus sont imbriquées car elles se trouvent dans le tableau `children` de la route parent. Remarquez que la route parent rend le composant `DashboardRouterOutlet`. Lorsque vous imbriquez des routes, vous devez rendre une autre instance de `ion-router-outlet`.

### Lequel devrais-je choisir ?

Les URL partagées sont idéales lorsque vous souhaitez passer de la page A à la page B tout en préservant la relation entre les deux pages dans l'URL. Dans notre exemple précédent, un bouton sur la page `/dashboard` pourrait faire la transition vers la page `/dashboard/stats`. La relation entre les deux pages est préservée grâce à a) la transition de page et b) l'url.

Les routes imbriquées sont surtout utiles lorsque vous devez rendre un contenu dans la sortie A tout en rendant un sous-contenu dans une sortie imbriquée B. Le cas d'utilisation le plus courant est celui des onglets. Lorsque vous chargez une application Ionic starter tabs, vous verrez les composants `ion-tab-bar` et `ion-tabs` rendus dans le premier `ion-router-outlet`. Le composant `ion-tabs` rend un autre `ion-router-outlet` qui est chargé de rendre le contenu de chaque onglet.

Il y a très peu de cas d'utilisation dans lesquels les routes imbriquées ont un sens dans les applications mobiles. En cas de doute, utilisez la configuration de route de l'URL partagée. Nous vous déconseillons fortement d'utiliser le routage imbriqué dans des contextes autres que les onglets, car cela peut rapidement rendre la navigation dans votre application confuse.

## Travailler avec les onglets

Lorsque vous travaillez avec des onglets, Ionic Vue a besoin d'un moyen de savoir quelle vue appartient à quel onglet. Le composant `IonTabs` est utile ici, mais regardons à quoi ressemble la configuration du routage pour cela :

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

Ici, notre chemin `tabs` charge un composant `Tabs`. Nous fournissons chaque onglet comme un objet route à l'intérieur du tableau `children`. Dans cet exemple, nous appelons le chemin `tabs`, mais cela peut être personnalisé.

Commençons par jeter un coup d'œil à notre composant `Tabs` :

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

Si vous avez déjà travaillé avec le Framework Ionic, cela devrait vous sembler familier. Nous créons un composant `ion-tabs`, et fournissons une `ion-tab-bar`. Le `ion-tab-bar` fournit et `ion-tab-button` composants, chacun avec une propriété `tab` qui est associée à son onglet correspondant dans la configuration du routeur.

### Routes enfants dans les onglets

Lorsque vous ajoutez des itinéraires supplémentaires aux onglets, vous devez les écrire comme des itinéraires frères avec l'onglet parent comme préfixe du chemin. The example below defines the `/tabs/tab1/view` route as a sibling of the `/tabs/tab1` route. Since this new route has the `tab1` prefix, it will be rendered inside of the `Tabs` component, and Tab 1 will still be selected in the `ion-tab-bar`.

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