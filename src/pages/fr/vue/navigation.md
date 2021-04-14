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

Lorsque vous ajoutez des itinéraires supplémentaires aux onglets, vous devez les écrire comme des itinéraires frères avec l'onglet parent comme préfixe du chemin. L'exemple ci-dessous définit la route `/tabs/tab1/view` comme un frère de la route `/tabs/tab1`. Puisque cette nouvelle route a le préfixe `tab1`, elle sera rendue à l'intérieur du composant `Tabs`, et l'onglet 1 sera toujours sélectionné dans la `ion-tab-bar`.

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

Le composant `IonRouterOutlet` fournit un conteneur pour le rendu de vos vues. Il est similaire au composant `RouterView` que l'on trouve dans d'autres applications Vue, sauf que le `IonRouterOutlet` peut rendre plusieurs pages du DOM dans le même outlet. Lorsqu'un composant est rendu dans `IonRouterOutlet`, nous considérons qu'il s'agit d'une "page" Ionic Framework. Le conteneur de sortie du routeur contrôle l'animation de transition entre les pages ainsi que le moment où une page est créée et détruite. Cela permet de maintenir l'état entre les vues lorsque l'on passe de l'une à l'autre.

Rien ne doit être fourni à l'intérieur de `IonRouterOutlet` lors de sa mise en place dans votre modèle. Bien que le `IonRouterOutlet` puisse être imbriqué dans des composants enfants, nous le déconseillons car il rend généralement la navigation dans les applications confuse. Voir [Les URL partagées par rapport aux routes imbriquées](#shared-urls-versus-nested-routes) pour plus d'informations.

## IonPage

Le composant `IonPage` enveloppe chaque vue dans une application Ionic Vue et permet aux transitions de page et à la navigation en pile de fonctionner correctement. Chaque vue vers laquelle on navigue à l'aide du routeur doit inclure un composant `IonPage`.

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

Les composants présentés via `IonModal` ou `IonPopover` n'ont généralement pas besoin d'un composant `IonPage`, sauf si vous avez besoin d'un élément d'habillage. Dans ce cas, nous recommandons d'utiliser le `IonPage` afin que les dimensions du composant soient toujours calculées correctement.

## Accès à l'instance IonRouter

Il peut y avoir quelques cas d'utilisation où vous devez avoir accès à l'instance `IonRouter` à partir de votre application Vue. Par exemple, vous pourriez vouloir savoir si vous êtes à la page racine de l'application lorsqu'un utilisateur appuie sur le bouton de retour du matériel sur Android. Pour de tels cas d'utilisation, vous pouvez injecter la dépendance `IonRouter` dans votre composant :

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

## Les Paramètres d'URL

Développons notre exemple de routage initial pour montrer comment utiliser les paramètres URL :

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

Remarquez que nous avons maintenant ajouté `:id` à la fin de notre chaîne de chemin `detail`. Les paramètres URL sont des parties dynamiques de nos chemins d'accès. Lorsque l'utilisateur navigue vers une URL telle que `/details/1`, le "1" est enregistré dans un paramètre nommé "id" auquel on peut accéder dans le composant lors du rendu de la route.

Voyons comment l'utiliser dans notre composant :

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

Notre variable `route` contient une instance de la route actuelle. Il contient également tous les paramètres que nous avons passés. Nous pouvons obtenir le paramètre `id` à partir d'ici et l'afficher à l'écran.

## Historique du routeur

Vue Router est livré avec un mode historique configurable. Examinons les différentes options et pourquoi vous pourriez vouloir utiliser chacune d'entre elles.

* `createWebHistory` : Cette option crée un historique HTML5. Il exploite l'API d'historique pour réaliser la navigation URL sans rechargement de la page. Il s'agit du mode d'historique le plus courant pour les applications à page unique. Dans le doute, utilisez `createWebHistory`.

* `createWebHashHistory` : Cette option ajoute un hash (`#`) à votre URL. Ceci est utile pour les applications web sans hôte ou lorsque vous n'avez pas le contrôle total des routes du serveur. Les moteurs de recherche ignorent parfois les fragments de hachage, vous devriez donc utiliser `createWebHistory` à la place si le référencement est important pour votre application.

* `createMemoryHistory` : Cette option crée un historique basé sur la mémoire. Il est principalement utilisé pour gérer le rendu côté serveur (SSR).

## En savoir plus

Pour plus d'informations sur le routage de Vue à l'aide de Vue Router, consultez leur documentation sur http://router.vuejs.org/.