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
/* CSS de base requis pour que les composants Ionic fonctionnent correctement */
importent '@ionic/react/css/core. ss';

/* CSS de base pour les applications construites avec Ionic */
importez '@ionic/react/css/normalize. ss';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography. ss';

/* Utilitaires CSS optionnels qui peuvent être commentés */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment. ss';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
```


## Ionic + Vue

Pour ajouter Ionic Framework à un projet Vue existant, installez les paquets `@ionic/vue` et `@ionic/vue-router`.

```shell
$ npm install @ionic/vue @ionic/vue-router
```

Après cela, vous devrez installer le plugin `IonicVue` dans votre application Vue.

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

Assurez-vous de monter votre application une fois que `router.isReady()` a été résolu.

### Routing

Lors de la mise en place du routage dans votre application Vue, vous devrez importer vos dépendances depuis `@ionic/vue-router` au lieu de `vue-router`.

**router/index.js**

```javascript
import { createRouter, createWebHistory } from '@ionic/vue-router';

const routes = [
  // les routes vont ici
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
```

### CSS

Pour inclure le CSS nécessaire dans un projet Vue, ajoutez ce qui suit à votre fichier `main.js`.

```javascript
/* CSS de base requis pour que les composants Ionic fonctionnent correctement */
import '@ionic/vue/css/core.css';

/* CSS de base pour les applications construites avec Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Utilitaires CSS optionnels qui peuvent être commentés */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';
```

À partir de là, vous pouvez apprendre à développer avec Ionic Framework dans notre [Guide de démarrage rapide de Ionic Vue](https://ionicframework.com/docs/vue/quickstart).

## Le CDN Ionicons

Ionicons est emballé par défaut avec le cadre Ionic, donc aucune installation n'est nécessaire si vous utilisez Ionic. Pour utiliser Ionicons sans Ionic Framework, placez le `<script>` suivant vers la fin de votre page, juste avant la balise de fermeture `</body>`.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/ionicons/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/ionicons/dist/ionicons/ionicons.js"></script>
```

> See [Ionicons usage](https://ionic.io/ionicons/usage) for more information on using Ionicons.
