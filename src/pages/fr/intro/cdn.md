---
previousText: 'Installation du CLI'
previousUrl: '/docs/intro/cli'
nextText: 'Prochaines étapes'
nextUrl: '/docs/intro/next'
contributors:
  - brandyscarney
  - rtpHarry
---

# Paquets Ionic

Ionic fournit différents paquets qui peuvent être utilisés pour commencer rapidement à utiliser Ionic Framework ou Ionicons dans un environnement de test, Angular, tout autre framework, ou rien du tout.

## Le CDN du framework Ionic

Ionic Framework peut être inclus depuis un CDN pour un test rapide dans un [Plunker](https://plnkr.co/), [Codepen](https://codepen.io), ou tout autre éditeur de code en ligne !

Il est recommandé d'utiliser [jsdelivr](https://www.jsdelivr.com/) pour accéder au Framework depuis un CDN. Pour obtenir la dernière version, ajoutez ce qui suit à l'intérieur de l'élément `<head>` d'un fichier HTML, ou lorsque des ressources externes sont incluses dans l'éditeur de code en ligne :

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css"/>
```

Avec cela, il est possible d'utiliser tous les composants de base du Framework Ionic sans avoir à installer un framework. Le paquet CSS comprendra toutes les [Global Stylesheets](../layout/global-stylesheets) de Ionic.

> Cela n'installe pas Angular ou d'autres frameworks. Cela permet d'utiliser les composants de base du Ionic Framework sans framework.


## Ionic + Angular

Lorsque vous utilisez Ionic Framework dans un projet Angular, installez le dernier paquet `@ionic/angular` de [npm](/docs/reference/glossary#npm). Il est livré avec tous les composants du Ionic Framework et les services et fonctionnalités spécifiques à Angular.

```shell
$ npm install @ionic/angular@latest --save
```

Chaque fois qu'il y a une nouvelle version de Ionic Framework, cette [version](/docs/reference/versioning) devra être mise à jour pour obtenir les dernières fonctionnalités et corrections. La version peut être [mise à jour en utilisant npm](/docs/developing/tips#updating-dependencies), également.

Pour ajouter Ionic à un projet Angular déjà existant, utilisez la fonction `ng add` du CLI Angular.

```shell
$ ng add @ionic/angular
```

Cela ajoutera les importations nécessaires au paquet `@ionic/angular` ainsi que les styles nécessaires.


## Ionic + React

Pour ajouter Ionic Framework à un projet React déjà existant, installez le paquet `@ionic/react` et `@ionic/react-router`.

```shell
$ npm install @ionic/react
$ npm install @ionic/react-router
```

### CSS

Pour inclure le CSS nécessaire dans un projet React, ajoutez ce qui suit au composant App racine.

```javascript
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

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


## Ionic + Vue

To add Ionic Framework to an existing Vue project, install the `@ionic/vue` and `@ionic/vue-router` packages.

```shell
$ npm install @ionic/vue @ionic/vue-router
```

After that, you will need to install the `IonicVue` plugin in your Vue app.

**main.js**
```javascript
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

Be sure to mount your app once `router.isReady()` has resolved.

### Routing

When setting up routing in your Vue app, you will need to import your dependencies from `@ionic/vue-router` instead of `vue-router`.

**router/index.js**

```javascript
import { createRouter, createWebHistory } from '@ionic/vue-router';

const routes = [
  // routes go here
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
```

### CSS

To include the necessary CSS in a Vue project, add the following to your `main.js` file.

```javascript
/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';
```

From here, you can learn about how to develop with Ionic Framework in our [Ionic Vue Quickstart Guide](https://ionicframework.com/docs/vue/quickstart).

## Ionicons CDN

Ionicons is packaged by default with the Ionic Framework, so no installation is necessary if you're using Ionic. To use Ionicons without Ionic Framework, place the following `<script>` near the end of your page, right before the closing `</body>` tag.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/ionicons/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/ionicons/dist/ionicons/ionicons.js"></script>
```

> See [Ionicons usage](https://ionicons.com/usage) for more information on using Ionicons.
