---
previousText: 'Vue d''ensemble'
previousUrl: '/docs/vue/overview'
nextText: 'Créez votre première application'
nextUrl: '/docs/vue/your-first-app'
---

# Démarrage rapide Ionic Vue

## Qu'est-ce que Ionic Framework ?

Tout d'abord, si vous êtes nouveau ici, bienvenue ! Ionic Framework est une bibliothèque de composants gratuite et open source permettant de créer des applications fonctionnant sur iOS, Android, Electron et le Web. Rédigez votre application une seule fois en utilisant des technologies familières (HTML, CSS, JavaScript) et déployez-la sur n'importe quelle plateforme.

Outre les composants de l'interface utilisateur, Ionic Framework fournit également un outil en ligne de commande pour créer de nouvelles applications, ainsi que pour les déployer sur les différentes plateformes que nous prenons en charge.

Dans ce guide, nous allons passer en revue les bases de Vue et de Ionic Framework, y compris toutes les fonctionnalités spécifiques à Ionic Framework. Si vous êtes familier avec Vue, profitez de ce guide et apprenez quelque chose de nouveau sur Ionic Framework. Si vous n'êtes pas familier non plus, ne vous inquiétez pas! Ce guide couvre les éléments de base et fournit suffisamment d'informations pour que votre application soit opérationnelle.

## Créer un projet avec la CLI Ionic

Pour commencer, installons la dernière version de Ionic CLI.


```shell
npm install -g @ionic/cli@latest
```

A partir de là, la commande globale `ionic` permettra la création d'un projet Vue avec Ionic Framework et toutes les autres dépendances. Pour créer un nouveau projet, exécutez la commande suivante :

```shell
ionic start myApp blank --type vue
cd myApp
```

A partir de là, nous exécutons `ionic serve` et nous avons notre projet qui tourne dans le navigateur.

## Construisez votre chemin avec TypeScript ou JavaScript

Chez Ionic, nous adorons TypeScript et nous sommes convaincus depuis un certain temps déjà qu'il s'agit d'un outil formidable pour créer des applications évolutives. Cela dit, nous savons à quel point la communauté Vue apprécie la simplicité - dans ses outils, ses langages, etc. En fait, c'est probablement ce qui vous a attiré vers Vue en premier lieu. Démarrez simplement, puis augmentez au besoin.

Donc, si vous préférez utiliser JavaScript au lieu de TypeScript, vous pouvez. Après avoir généré une application Ionic Vue, suivez ces étapes :

1. Supprimer les dépendances TypeScript :

```shell
npm uninstall --save typescript @types/jest @typescript-eslint/eslint-plugin @typescript-eslint/parser @vue/cli-plugin-typescript @vue/eslint-config-typescript
```

2. Changez tous les fichiers `.ts` en `.js`. Dans une application Ionic Vue vierge, cela ne devrait être que `router/index.ts` et `main.ts`.

3. Supprimez `@vue/typescript/recommended` et `@typescript-eslint/no-explicit-any : 'off',`de `.eslintrc.js`.

4. Supprimez `Array<RouteRecordRaw>` de `router/index.js`.

5. Supprimez le fichier `shims-vue.d.ts`.

6. Supprimez `lang="ts"` des balises `script` dans tous vos composants Vue qui en possèdent. Dans une application Ionic Vue vierge, cela ne devrait être que `App.vue` et `views/Home.vue`.


## Un regard sur un composant Vue

La base de notre application sera dans le répertoire `src`, et le point d'entrée principal sera notre fichier `main.ts`. Si nous ouvrons notre projet dans un éditeur de code et ouvrons `main.ts`, nous devrions voir ce qui suit :

```ts
import { createApp } from 'vue';
import { IonicVue } from '@ionic/vue';

import App from './App.vue'
import router from './router';

const app = createApp(App)
  .use(IonicVue)
  .use(router);

router.isReady().then(() => {
  app.mount('#app');
});
```

Alors, qu'est-ce qui se passe ici ? Les quatre premières lignes font appel à certaines dépendances. La fonction `createApp` nous permet d'initialiser notre application Vue, tandis que `IonicVue` est un plugin qui nous permet d'utiliser Ionic Framework dans un environnement Vue.

Le troisième import est le composant racine de notre application, simplement nommé `App`. C'est notre premier composant Vue et il sera utilisé dans le processus de démarrage de notre application Vue.


Le quatrième import permet d'obtenir notre configuration de routage. Nous y reviendrons plus en détail ultérieurement.

Si nous ouvrons `App.vue`, nous devrions voir ce qui suit :

```html
<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  }
});
</script>
```

Décomposons le tout, en commençant par le premier groupe d'importations.


```typescript
import { IonApp, IonRouterOutlet } from '@ionic/vue';
```

Pour utiliser un composant dans Vue, vous devez d'abord l'importer. Ainsi, pour Ionic Framework, cela signifie que chaque fois que nous voulons utiliser un bouton ou une carte, il faut l'ajouter à nos importations. Dans le cas de notre composant `App`, nous utilisons `IonApp` et `IonRouterOutlet`. Vous pouvez également enregistrer les composants de manière globale si vous vous retrouvez à importer les mêmes composants à plusieurs reprises. Cela s'accompagne de compromis en matière de performances que nous abordons dans [Optimisation de votre application](#optimizing-your-app).

A partir de là, regardons le modèle.

```html
<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>
```

Tous les composants Vue doivent avoir un `<template>`. A l'intérieur de celle-ci, nous plaçons nos composants `IonApp` et `IonRouterOutlet`.

Enfin, examinons la définition du composant :

```typescript
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  }
});
```

Vue 3 offre une nouvelle fonction `defineComponent` lors de la création de composants pour une meilleure prise en charge des outils, et nous allons l'utiliser ici. Nous définissons d'abord le nom du composant, puis nous fournissons les composants que nous utiliserons dans notre modèle.

Il y a plusieurs arguments que vous pouvez fournir ici tels que `methods`, `setup` et plus encore. Ceci est expliqué dans le cadre de la [Documentation de l'API de composition](https://v3.vuejs.org/guide/composition-api-introduction.html#why-composition-api) de Vue.


## Initialisation du routeur

Ionic Vue utilise la dépendance [vue-router](https://router.vuejs.org/), donc si vous êtes déjà familier avec Vue Router, vous pourrez appliquer ce que vous savez à la navigation dans Ionic Vue. Reprenons la configuration du routeur dont nous avons parlé précédemment. Dans `router/index.ts`, vous devriez voir quelque chose de similaire à ce qui suit :

```typescript
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
```

> Cet exemple utilise l'application de démarrage Ionic Vue Blank, donc vos routes réelles peuvent être un peu différentes.

La configuration ici est la même que si vous utilisiez `vue-router` directement, mais au lieu de cela, vous devez importer des dépendances telles que `createRouter` et `createWebHistory` du paquet `@ionic/vue-router`.

Après avoir importé nos dépendances, nous pouvons déclarer nos routes dans le tableau `routes`. À partir de là, nous pouvons créer une instance de routeur et lui fournir nos routes et le type d'historique que nous voulons utiliser.

Avec Ionic Vue, le chargement à la volée fonctionne dès le départ. Au lieu d'importer notre composant `Home`, nous pourrions également le faire :

```typescript
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  }
]
```

Maintenant, vous vous demandez peut-être : Pourquoi utilisons-nous le `@` pour décrire le chemin d'accès à nos composants ? Le symbole `@` est un raccourci que nous pouvons utiliser pour décrire les chemins relatifs au répertoire `src`. Ceci est utile si nous essayons de faire référence à un composant dans un fichier situé à plusieurs niveaux. Au lieu de faire `'../../../views/Home.vue'`, nous pourrions simplement faire `'@/views/Home.vue'`.

## Un composant avec du style

Maintenant, le composant `App` n'a pas vraiment beaucoup de choses à modifier ici. Il s'agit d'un exemple de base d'un composant de conteneur. Une fois la logique du routeur définie, tout ce dont il est responsable est de rendre un composant qui correspond à la route URL donnée. Puisque nous avons déjà une configuration composant/routeur, allons-y et modifions notre composant `Home`.

Actuellement, le composant `Home` ressemble à ceci :

![Vue du composant d'accueil](/docs/assets/img/guides/vue/first-app/home-route.png)

```html
<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Blank</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <strong>Ready to create an app?</strong>
        <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  }
});
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
```

Tout comme le composant `App` avec lequel nous avons commencé, nous avons quelques importations pour des composants spécifiques de Ionic Framework, une importation de Vue, le composant Vue, et des styles pour accompagner notre composant.

Pour nos styles, remarquez que nous avons spécifié nos styles pour être `scoped`. Cela signifie que les styles que nous écrivons ici ne s'appliqueront qu'à ce composant. Ceci est utile pour éviter que les styles ne s'échappent d'un composant et n'affectent d'autres parties de votre application. Nous recommandons fortement l'utilisation des styles `scoped` pour les applications Ionic Vue.

`IonPage` est le composant de base pour toutes les pages (un composant avec une route/URL), et comprend certains blocs de construction communs d'un composant plein écran, comme les composants d'en-tête, de titre et de contenu.

> Lorsque vous créez vos propres pages, n'oubliez pas de faire en sorte que `IonPage` soit le composant racine de celles-ci. Le fait que `IonPage` soit le composant racine est important car il permet de s'assurer que les transitions fonctionnent correctement ainsi que de fournir le CSS de base sur lequel les composants de Ionic Framework s'appuient.

`IonHeader` est un composant destiné à exister en haut de la page. Il ne fait pas grand-chose par lui-même, à part gérer une mise en page basée sur la méthode Flexbox. Il est destiné à contenir des composants, comme `IonToolbar` ou `IonSearchbar`.

`IonContent` est, comme son nom l'indique, la zone de contenu principale de notre page. Il est chargé de fournir un contenu défilable avec lequel les utilisateurs interagiront, ainsi que tous les événements de défilement qui pourraient être utilisés dans une application.

Notre contenu actuel est relativement simple, mais ne contient rien qui puisse être utilisé dans une application réelle, alors changeons cela.

> Remarque : par souci de concision, nous excluons les parties répétitives de notre composant, comme la déclaration de fonction ou les déclarations d'importation d'autres composants.

```html
<template>
  <ion-page>
    ...
    <ion-content>
      <ion-list>
        <ion-item>
          <ion-checkbox slot="start"></ion-checkbox>
          <ion-label>
            <h1>Create Idea</h1>
            <ion-note>Run Idea By Brandy</ion-note>
          </ion-label>
          <ion-badge color="success" slot="end">
            5 Days
          </ion-badge>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>
```

Ici, dans notre `IonContent`, nous ajoutons un `IonList` et un composant `IonItem` beaucoup plus impliqué. Regardons le `IonItem` car il est la pièce maîtresse ici.

```html
<ion-item>
  <ion-checkbox slot="start"></ion-checkbox>
  <ion-label>
    <h1>Create Idea</h1>
    <ion-note>Run Idea By Brandy</ion-note>
  </ion-label>
  <ion-badge color="success" slot="end">
    5 Days
  </ion-badge>
</ion-item>
```

En regardant notre code, nous avons un attribut spécial appelé slot. C'est essentiel pour permettre au `IonItem` de savoir où placer la `IonCheckbox` lors de son rendu. Il ne s'agit pas d'une API Vue, mais d'une API de normes Web. En outre, elle est différente de l'API des créneaux horaires dont vous vous souvenez peut-être de Vue 2.

Examinons un autre composant de Ionic Framework, FAB. Les boutons d'action flottants (Floating Action Buttons ) sont un bon moyen de fournir une action principale qui est surélevée par rapport au reste de l'application. Pour ce FAB, nous aurons besoin de trois composants : un FAB, un bouton FAB et une icône.

```html
<template>
  <ion-page>
    <ion-content>
      <ion-list>
      ...
      </ion-list>

      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button>
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>

    </ion-content>
  </ion-page>
</template>

<script>
import { add } from 'ionicons/icons';

...

export default defineComponent({
  name: 'Home',
  ...,
  setup() {
    return {
      add
    }
  }
})
</script>
```

Sur notre `IonFab` principal, nous définissons son positionnement avec les attributs vertical et horizontal. Nous définissons également l'emplacement du rendu sur "fixe" avec l'attribut slot. Cela indiquera à `IonFab` d'effectuer le rendu en dehors du contenu défilant dans `IonContent`.

Maintenant, nous allons mettre en place un gestionnaire de clics pour cela. En cliquant sur le bouton FAB, nous voulons naviguer vers une nouvelle page (que nous allons créer dans un instant). Pour ce faire, nous devons avoir accès à l'API de navigation de Vue Router. Cela peut être fait en important `useRouter` du paquet `vue-router`.

```html
<template>
  <ion-page>
    <ion-content>
      <ion-list>
      ...
      </ion-list>

      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button @click="() => router.push('/new')">
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>

    </ion-content>
  </ion-page>
</template>

<script>
import { add } from 'ionicons/icons';
import { useRouter } from 'vue-router';

...

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonFab,
    IonFabButton,
    IonHeader,
    IonIcon,
    IonPage,
    IonTitle,
    IonToolbar
  },
  setup() {
    return {
      router: useRouter(),
      add
    }
  }
});
</script>
```

Dans notre fichier composant, nous importons la fonction `useRouter`. Lorsqu'elle est appelée, cette fonction injecte la dépendance du routeur dans le composant. Il nous donne accès à l'API historique de Vue Router, ce qui nous permet de pousser un nouvel itinéraire sur la pile de navigation. Sur notre `IonFabButton`, nous pouvons ajouter un gestionnaire de clic, et simplement appeler `router.push` et passer la nouvelle route. Dans ce cas, nous allons naviguer vers `new`.

```html
<ion-fab-button @click="() => router.push('/new')">
  ...
</ion-fab-button>
```

## Créer une nouvelle route

Maintenant que nous avons les éléments en place pour naviguer dans notre application, nous devons créer un nouveau composant et ajouter la nouvelle route à notre déclaration de routeur. Ouvrons notre fichier `router/index.ts` et ajoutons la nouvelle route.

```typescript
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue'
import NewItem from '@/views/NewItem.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/new',
    name: 'NewItem',
    component: NewItem
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
```
Notre routeur ayant maintenant une entrée pour la route `/new`, nous allons créer le composant nécessaire, `NewItem`. Cela existera dans `views/NewItem.vue`.

Remplissons le fichier `NewItem.vue` avec un contenu de remplacement pour le moment.

```html
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>New Item</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content></ion-content>
  </ion-page>
</template>

<script>
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NewItem',
  components: {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  }
});
</script>
```

> Chaque vue doit contenir un composant `IonPage`. Les transitions de page ne fonctionneront pas correctement sans elle. Voir la [Documentation IonPage](./navigation#ionpage) pour plus d'informations.

Le contenu ici devrait ressembler au composant `Home`. Ce qui est différent ici est le composant `IonBackButton`. Cette fonction est utilisée pour revenir à l'itinéraire précédent. « Ça me semble assez facile, non? » Ok, mais que faire si nous rechargeons la page?

Dans ce cas, l'historique en mémoire est perdu, et le bouton retour disparaît. Pour remédier à cela, nous pouvons définir la valeur de l'attribut `default-href` à l'URL vers laquelle nous voulons naviguer s'il n'y a pas d'historique.

```html
<ion-back-button default-href="/home"></ion-back-button>
```

Maintenant, s'il n'y a pas d'historique des applications, nous pourrons retourner à notre parcours d'origine.

## Appel de méthodes sur les composants

Afin d'appeler une méthode sur l'un des composants Ionic Vue, vous devrez d'abord obtenir une référence à l'instance du composant. Ensuite, vous devrez accéder au composant Web sous-jacent à l'aide du `$el` et appeler la méthode.

Dans d'autres intégrations de frameworks comme Ionic React, cela n'est pas nécessaire car tout `ref` que vous fournissez est automatiquement transmis à l'instance de composant Web sous-jacente. Nous ne sommes pas en mesure de faire la même chose ici en raison des limitations de la façon dont Vue gère les références.

```html
<template>
  <ion-content ref="content">
    <ion-button @click="scrollToBottom">Scroll to Bottom</ion-button>

    ...
  </ion-content>
</template>

<script lang="ts">
  import { IonButton, IonContent } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    components: { IonButton, IonContent },
    setup() {
      const content = ref();
      const scrollToBottom = () => {
        content.value.$el.scrollToBottom(300);
      }

      return { content, scrollToBottom }
    }
  });
</script>
```

## Ajout d'icônes

Ionic Vue est livré avec [Ionicons](https://ionicons.com/) préinstallé. Les développeurs ont plusieurs possibilités pour les utiliser dans leur application.

### Importation dynamique

L'importation dynamique est l'approche recommandée pour utiliser Ionicons. Il s'agit d'importer l'icône de votre choix depuis le paquet `ionicons` et de la passer à votre modèle :

```html
<template>
  <ion-page>
    <ion-content>
      <ion-icon :icon="heart"></ion-icon>
    </ion-content>
  </ion-page>
</template>

<script>
import { heart } from 'ionicons/icons';
import {
  IonContent,
  IonPage,
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Icon',
  components: {
    IonContent,
    IonPage,
  },
  setup() {
    return { heart }
  }
});
</script>
```

Décomposons ce que nous faisons ici. Tout d'abord, nous importons l'icône `heart` de `ionicons/icons`. Cela va charger les données SVG appropriées pour notre icône.

Ensuite, nous passons les données `heart` à notre modèle dans la méthode `setup`.

Enfin, nous passons les données de l'icône dans le composant `ion-icon` via la propriété `icon`.

Les développeurs ont également la possibilité de définir des icônes différentes en fonction du mode :

```html
<template>
  <ion-page>
    <ion-content>
      <ion-icon :ios="logoApple" :md="logoAndroid"></ion-icon>
    </ion-content>
  </ion-page>
</template>

<script>
import { logoAndroid, logoApple } from 'ionicons/icons';
import {
  IonContent,
  IonPage,
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Icon',
  components: {
    IonContent,
    IonPage,
  },
  setup() {
    return { logoAndroid, logoApple }
  }
});
</script>
```

Notez que tout nom d'icône comportant un trait d'union doit être écrit en minuscules lors de l'importation.

### Importations globales

L'autre option consiste à importer des icônes spécifiques de manière globale. Ce n'est généralement pas recommandé, car cela obligera les icônes à être chargées à chaque fois que votre application démarre et peut augmenter la taille initiale des morceaux de votre application.

Cela dit, il peut y avoir des cas d'utilisation où il est judicieux de charger des icônes spécifiques de manière globale :

**main.ts**
```typescript
import { addIcons } from 'ionicons';
import { heart } from 'ionicons/icons';

addIcons({
  'heart': heart 
});
```

**Home.vue**
```html
<template>
  <ion-page>
    <ion-content>
      <ion-icon icon="heart"></ion-icon>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonPage,
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonPage,
  }
});
</script>
```

Dans `main.ts`, la fonction `addIcons` nous permet d'enregistrer les icônes de manière globale et de lui donner une chaîne de caractères comme clé. We then reference the icon by that key in our `Home` component.

## Optimisation de votre build

Vue vous offre plusieurs outils pour affiner votre application. Cette section couvre les options qui sont les plus pertinentes pour Ionic Framework.

### Inscription du composant local (Recommandé)

Par défaut, les composants Ionic Framework sont enregistrés localement. Avec l'enregistrement local, ces composants sont importés et fournis à chaque composant Vue dans lequel vous souhaitez les utiliser. C'est l'approche recommandée, car elle permet au chargement à la volée et à l'arborescence de fonctionner correctement avec les composants de Ionic Framework.

Le seul inconvénient de cette approche est qu'il peut être fastidieux de réimporter plusieurs fois vos composants Ionic Framework. Cependant, nous estimons que les avantages en termes de performances que vous recevez en échange en valent la peine.

Notez également que les composants enregistrés localement ne sont pas disponibles dans les sous-composants. Vous devrez réimporter les composants Ionic Framework que vous souhaitez utiliser dans votre sous-composant.

Regardons comment fonctionne l'enregistrement des composants locaux :

```html
<template>
  <ion-page>
    <ion-content>
      <Subcomponent></Subcomponent>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonContent, IonPage } from '@ionic/vue';
import Subcomponent from '@/components/Subcomponent.vue';

export default defineComponent({
  components: { IonContent, IonPage, Subcomponent }
});
</script>
```

Dans l'exemple ci-dessus, nous utilisons les composants `IonPage` et `IonContent`. Pour les utiliser, nous les importons d'abord de `@ionic/vue`. Ensuite, nous les fournissons à notre composant Vue dans l'option `components`. À partir de là, nous pouvons utiliser les composants dans notre modèle.

Notez que puisque nous enregistrons ces composants localement, ni `IonPage` ni `IonContent` ne seront disponibles dans `Subcomponent` à moins que nous ne les enregistrions là aussi.

Pour plus d'informations, consultez la <a href="https://v3.vuejs.org/guide/component-registration.html#local-registration" target="_blank" rel="noopener noreferrer">Documentation Vue sur l'enregistrement local</a>.

### Enregistrement global des composants

L'autre option pour enregistrer les composants est d'utiliser l'enregistrement global. L'enregistrement global implique l'importation des composants que vous souhaitez utiliser dans `main.ts` et l'appel de la méthode `component` sur votre instance d'application Vue.

Bien que cela facilite l'ajout de composants Ionic Framework à votre application Vue, l'enregistrement global n'est souvent pas idéal. Pour citer la documentation de Vue : "Si vous utilisez un système de construction comme Webpack, l'enregistrement global de tous les composants signifie que même si vous cessez d'utiliser un composant, il pourrait toujours être inclus dans votre construction finale. Cela augmente inutilement la quantité de JavaScript que vos utilisateurs doivent télécharger".

Voyons comment fonctionne l'enregistrement global des composants :

**main.ts**
```typescript
import { IonContent, IonicVue, IonPage } from '@ionic/vue';

const app = createApp(App)
  .use(IonicVue)
  .use(router);

app.component('ion-content', IonContent);
app.component('ion-page', IonPage);
```

**MyComponent.vue**
```html
<template>
  <ion-page>
    <ion-content>
      <Subcomponent></Subcomponent>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Subcomponent from '@/components/Subcomponent.vue';

export default defineComponent({
  components: { Subcomponent }
});
</script>
```

Dans l'exemple ci-dessus, nous utilisons les composants `IonPage` et `IonContent`. Pour les utiliser, nous les importons d'abord de `@ionic/vue` dans `main.ts`. De là, nous appelons la méthode `component` sur notre instance d'application et lui passons le nom du tag ainsi que la définition du composant. Après avoir fait cela, nous pouvons utiliser les composants dans le reste de notre application sans avoir à les importer dans chaque composant Vue.

Pour plus d'informations, consultez le site <a href="https://v3.vuejs.org/guide/component-registration.html#global-registration" target="_blank" rel="noopener noreferrer">Documentation globale sur l'enregistrement Vue</a>.

### Préchargement de l'application JavaScript

Par défaut, l'interface CLI de Vue génère automatiquement des indices de préextraction pour le JavaScript de votre application. Le préemption utilise le temps d'inactivité du navigateur pour télécharger des documents que l'utilisateur pourrait visiter dans un avenir proche. Lorsque l'utilisateur visite une page qui nécessite le document préenregistré, celui-ci peut être servi rapidement à partir du cache du navigateur.

Le pré-extraction consomme de la bande passante. Par conséquent, si votre application est volumineuse, il est préférable de le désactiver. Vous pouvez le faire en modifiant ou en créant votre fichier `vue.config.js` :

**vue.config.js**
```js
module.exports = {
  chainWebpack: config => {
    config.plugins.delete('prefetch')
  }
}
```

La configuration ci-dessus empêchera tous les fichiers d'être préenregistrés et, à la place, ils seront chargés lorsqu'ils seront nécessaires. Vous pouvez également sélectionner certains morceaux à préextraire. Consultez la <a href="https://cli.vuejs.org/guide/html-and-static-assets.html#prefetch" target="_blank" rel="noopener noreferrer">docs de Vue CLI sur la prélecture</a> pour plus d'exemples.

## Construire une application native

Nous avons maintenant les bases d'une application Ionic Vue, y compris certains composants de l'interface utilisateur et la navigation. Ce qui est formidable avec les composants de Ionic Framework, c'est qu'ils fonctionnent partout, y compris sur iOS, Android et les PWA. Pour déployer sur le mobile, le bureau et au-delà, nous utilisons le moteur d'exécution d'applications multiplateformes de Ionic [Capacitor](https://capacitor.ionicframework.com). Il fournit un ensemble cohérent d'API axées sur le web qui permettent à une application de rester aussi proche que possible des normes web tout en accédant à des fonctionnalités natives riches sur les plateformes qui les prennent en charge.

Il est facile d'ajouter des fonctionnalités natives. Tout d'abord, ajoutez le Capacitor à votre projet :

```shell
ionic integrations enable capacitor
```

Ensuite, construisez le projet, puis ajoutez votre plateforme de choix:

```shell
ionic build
ionic cap add ios
ionic cap add android
```

Nous utilisons les IDE natifs standard (Xcode et Android Studio) pour ouvrir, construire et exécuter les projets iOS et Android :

```shell
ionic cap open ios
ionic cap open android
```

Des détails supplémentaires sont disponibles [ici](https://capacitor.ionicframework.com/docs/getting-started/with-ionic).

Ensuite, consultez [toutes les API](https://capacitor.ionicframework.com/docs/apis) qui sont disponibles. Il existe des fonctionnalités intéressantes, notamment la [Camera API](https://capacitor.ionicframework.com/docs/apis/camera). Nous pouvons mettre en œuvre la fonctionnalité de capture de photos en quelques lignes de code seulement :

```html
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Ionic Blank</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <img :src="photo" />
      <ion-button @click="takePhoto()">Take Photo</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle
} from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import { Plugins, CameraResultType } from '@capacitor/core';
const { Camera } = Plugins;

export default defineComponent({
  name: 'Home',
  components: {
    IonButton,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle
  },
  setup() {
    const imageSrc = ref('');
    const takePhoto = async () => {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri
      });

      imageSrc.value = image.webPath;
    }

    return {
      photo: imageSrc,
      takePhoto
    }
  }
})
</script>
```

## Où aller à partir de maintenant

Ce guide a abordé les bases de la création d'une application Ionic Vue, l'ajout d'une navigation de base et la présentation de Capacitor comme moyen de créer des applications natives. Pour plonger plus profondément dans la construction d'applications Ionic Framework complètes avec Vue et Capacitor, suivez notre [guide First App](/docs/vue/your-first-app).

Pour un aperçu plus détaillé des composants de Ionic Frameworks, consultez les [pages API des composants](https://ionicframework.com/docs/components). Pour plus de détails sur Vue, consultez le [Vue Docs](https://v3.vuejs.org/). Pour continuer à développer des fonctionnalités natives, consultez les [la documentation de Capacitor](https://capacitor.ionicframework.com/docs/).

Bonne construction d'application! 🎉
