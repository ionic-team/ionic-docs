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


## Initializing the router

Ionic Vue uses the [vue-router](https://router.vuejs.org/) dependency, so if you are already familiar with Vue Router, you will be able to apply what you know to navigation in Ionic Vue. Let's take a look at the router configuration we mentioned before. In `router/index.ts`, you should see something similar to the following:

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

> This example is using the Ionic Vue Blank starter application, so your actual routes may look a bit different.

The setup here is the same as if you were using `vue-router` directly, but instead you need to import dependencies such as `createRouter` and `createWebHistory` from the `@ionic/vue-router` package.

After importing our dependencies, we can declare our routes in the `routes` array. From there, we can create a router instance and provide it with our routes and the type of history we want to use.

With Ionic Vue, lazy loading works right out of the box. Instead of importing our `Home` component, we could also do:

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

Now, you might be wondering: Why do we use `@` when describing the path to our components? The `@` symbol is a shortcut we can use to describe paths relative to the `src` directory. This is useful if we are trying to reference a component while in a file several folders deep. Instead of doing `'../../../views/Home.vue'`, we could simply do `'@/views/Home.vue'`.

## A component with style

Now the `App` component does not really have a lot to modify here. It is a basic example of a container component. With the router logic set, all it is responsible for is to render a component that matches the given URL route. Since we already have one component/router setup, let's go ahead and modify our `Home` component.

Currently, the `Home` component looks like so:

![Vue home component](/docs/assets/img/guides/vue/first-app/home-route.png)

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

Much like the `App` component we started with, we have some imports for specific Ionic Framework components, an import from Vue, the Vue component, and styles to go along with our component.

For our styles, notice that we have specified our styles to be `scoped`. This means that the styles we  write here will only apply to this component. This is useful for preventing styles from leaking out of a component and affecting other parts of your application. We strongly recommend using `scoped` styles for Ionic Vue applications.

`IonPage` is the base component for all pages (a component with a route/URL), and includes some common building blocks of a full-screen component, like header, title, and content components.

> When creating your own pages, do not forget to have `IonPage` be the root component for them. Having `IonPage` be the root component is important because it helps ensure transitions work properly as well as provides the base CSS the Ionic Framework components rely on.

`IonHeader` is a component meant to exist at the top of the page. It does not do much by itself, aside from handling some flexbox-based layout. It is meant to hold components, like `IonToolbar` or `IonSearchbar`.

`IonContent` is, as its name suggests, the main content area for our page. It is responsible for providing a scrollable content that users will interact with, plus any scroll events that could be used in an app.

Our current content is relatively simple, but does not contain anything that could be used in a real app, so let's change that.

> Note: For brevity, we are excluding repeating parts of our component, like the function declaration or import statements from other components.

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

Here in our `IonContent`, we are adding an `IonList` and a much more involved `IonItem` component. Let's look at `IonItem` as it is the centerpiece here.

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

Looking at our code, we have a special attribute called slot. This is key for letting the `IonItem` know where to place the `IonCheckbox` when it renders. This is not a Vue API, but a web standards API. Additionally, this is different from the slots API you may recall from Vue 2.

Let's look at another component from Ionic Framework, FAB. Floating Action Buttons are a nice way to provide a main action that is elevated from the rest of an app. For this FAB, we will need three components: a FAB, a FAB Button, and an Icon.

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

On our main `IonFab`, we are setting its positioning with the vertical and horizontal attributes. We are also setting the render location to "fixed" with the slot attribute. This will tell `IonFab` to render outside of the scrollable content in `IonContent`.

Now let's wire up a click handler to this. When clicking the FAB button, we want to navigate to a new page (which we will create in a moment). To do this, we will need to get access to Vue Router's navigation API. This can be done by importing `useRouter` from the `vue-router` package.

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

In our component file, we are importing the `useRouter` function. When called, this function injects the router dependency into the component. It gives us access to the history API from Vue Router, allowing us to push a new route onto the navigation stack. On our `IonFabButton`, we can add a click handler, and just call `router.push` and pass in the new route. In this case, we will navigate to `new`.

```html
<ion-fab-button @click="() => router.push('/new')">
  ...
</ion-fab-button>
```

## Creating a new Route

Now that we have the pieces in place to navigate in our app, we need to create a new component and add the new route to our router declaration. Let's open our `router/index.ts` file and add the new route.

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
With our router now having an entry for the route `/new`, we will create the component needed, `NewItem`. This will exist in `views/NewItem.vue`.

Let's fill the `NewItem.vue` file with some placeholder content for the moment.

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

> Each view must contain an `IonPage` component. Page transitions will not work correctly without it. See the [IonPage Documentation](./navigation#ionpage) for more information.

The content here should look similar to the `Home` component. What is different here is the `IonBackButton` component. This is used to navigate back to the previous route. Seems easy enough, right? Ok, but what if we reload the page?

In this case, the in-memory history is lost, so the back button disappears. To address this, we can set the `default-href` attribute value to the URL we want to navigate to if there is no history.

```html
<ion-back-button default-href="/home"></ion-back-button>
```

Now, If there is no app history present, we will be able to navigate back to our home route.

## Calling Methods on Components

In order to call a method on any of the Ionic Vue components, you will first need to get a reference to the component instance. Next, you will need to access the underlying Web Component using `$el` and call the method.

In other framework integrations such as Ionic React, this is not needed as any `ref` you provide is automatically forwarded to the underlying Web Component instance. We are unable to do the same thing here due to limitations in how Vue manages refs.

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

## Adding Icons

Ionic Vue comes with [Ionicons](https://ionicons.com/) pre-installed. There are a couple options developers have for using them in their application.

### Dynamic Imports

Dynamic Imports is the recommended approach to using Ionicons. This involves importing the icon of your choice from the `ionicons` package and passing it to your template:

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

Let's break down what we are doing here. First, we are importing the `heart` icon from `ionicons/icons`. This will load the appropriate SVG data for our icon.

Next, we pass the `heart` data to our template in the `setup` method.

Finally, we pass the icon data into the `ion-icon` component via the `icon` property.

Developers also have the option of setting different icons based upon the mode:

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

Note that any icon names that are hyphenated should be written in camel case when importing.

### Global Imports

The other option is to import specific icons globally. This is not typically recommended as it will force icons to be loaded every time your application starts and can increase your application's initial chunk size.

That being said, there may be use cases when it makes sense to load specific icons globally:

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

In `main.ts`, the `addIcons` function lets us register icons globally and give it a string as a key. We then reference the icon by that key in our `Home` component.

## Optimizing Your Build

Vue gives you several tools to fine tune your application. This section will cover the options that are most relevant to Ionic Framework.

### Local Component Registration (Recommended)

By default, Ionic Framework components are registered locally. With local registration, these components are imported and provided to each Vue component you want to use them in. This is the recommended approach as it allows lazy loading and treeshaking to work properly with Ionic Framework components.

The one downside to this approach is that it may be tedious to re-import your Ionic Framework components multiple times. However, we feel that the performance benefits you receive in exchange are worth it.

Also note that locally registered components are not available in subcomponents. You will need to re-import the Ionic Framework components you would like to use in your subcomponent.

Let's take a look at how local component registration works:

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

In the example above, we are using the `IonPage` and `IonContent` components. To use them, we first import them from `@ionic/vue`. Then, we provide them to our Vue component in the `components` option. From there, we can use the components in our template.

Note that since we are registering these components locally, neither `IonPage` nor `IonContent` will be available in `Subcomponent` unless we register them there as well.

For more information, see the <a href="https://v3.vuejs.org/guide/component-registration.html#local-registration" target="_blank" rel="noopener noreferrer">Local Registration Vue Documentation</a>.

### Global Component Registration

The other option for registering components is to use global registration. Global registration involves importing the components you want to use in `main.ts` and calling the `component` method on your Vue app instance.

While this makes it easier to add Ionic Framework components to your Vue app, global registration often is not ideal. To quote the Vue documentation: "If you're using a build system like Webpack, globally registering all components means that even if you stop using a component, it could still be included in your final build. This unnecessarily increases the amount of JavaScript your users have to download".

Let's take a look at how global component registration works:

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

In the example above, we are using the `IonPage` and `IonContent` components. To use them, we first import them from `@ionic/vue` in `main.ts`. From there, we call the `component` method on our app instance and pass it the tag name as well as the component definition. After we do that, we can use the components in the rest of our application without having to import them into each Vue component.

For more information, see the <a href="https://v3.vuejs.org/guide/component-registration.html#global-registration" target="_blank" rel="noopener noreferrer">Global Registration Vue Documentation</a>.

### Prefetching Application JavaScript

By default, the Vue CLI will automatically generate prefetch hints for the JavaScript in your application. Prefetching utiltizes the browser idle time to download documents that the user might visit in the near future. When the user visits a page that requires the prefetched document, it can be served quickly from the browser's cache.

Prefetching consumes bandwidth, so if you have a large app, you may want to disable it. You can do this by modifying or creating your `vue.config.js` file:

**vue.config.js**
```js
module.exports = {
  chainWebpack: config => {
    config.plugins.delete('prefetch')
  }
}
```

The configuration above will prevent all files from being prefetched and, instead, will be loaded when they are needed. You can also select certain chunks to prefetch. Check out the <a href="https://cli.vuejs.org/guide/html-and-static-assets.html#prefetch" target="_blank" rel="noopener noreferrer">Vue CLI Docs on Prefetching</a> for more examples.

## Build a Native App

We now have the basics of an Ionic Vue app down, including some UI components and navigation. The great thing about Ionic Framework’s components is that they work anywhere, including iOS, Android, and PWAs. To deploy to mobile, desktop, and beyond, we use Ionic’s cross-platform app runtime [Capacitor](https://capacitor.ionicframework.com). It provides a consistent, web-focused set of APIs that enable an app to stay as close to web-standards as possible while accessing rich native device features on platforms that support them.

Adding native functionality is easy. First, add Capacitor to your project:

```shell
ionic integrations enable capacitor
```

Next, build the project, then add your platform of choice:

```shell
ionic build
ionic cap add ios
ionic cap add android
```

We use the standard native IDEs (Xcode and Android Studio) to open, build, and run the iOS and Android projects:

```shell
ionic cap open ios
ionic cap open android
```

Additional details can be found [here](https://capacitor.ionicframework.com/docs/getting-started/with-ionic).

Next, check out [all the APIs](https://capacitor.ionicframework.com/docs/apis) that are available. There is some great features, including the [Camera API](https://capacitor.ionicframework.com/docs/apis/camera). We can implement photo capture functionality in just a few lines of code:

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

## Where to go from here

This guide covered the basics of creating an Ionic Vue app, adding some basic navigation, and introducing Capacitor as a way of building native apps. To dive deeper into building complete Ionic Framework apps with Vue and Capacitor, follow our [First App guide](/docs/vue/your-first-app).

For a more detailed look at Ionic Frameworks’s components, check out the [component API pages](https://ionicframework.com/docs/components). For more details on Vue, review the [Vue Docs](https://v3.vuejs.org/). To keep building native features, see the [Capacitor docs](https://capacitor.ionicframework.com/docs/).

Happy app building! 🎉
