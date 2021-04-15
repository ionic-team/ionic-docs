---
title: "Progressive Web Apps avec Vue"
previousText: 'Utilitaires de la plate-forme'
previousUrl: '/docs/vue/platform'
nextText: 'Le Stockage'
nextUrl: '/docs/vue/storage'
---

## Faire de votre application Vue une PWA

Les deux principales exigences d'une PWA sont un <a href="https://developers.google.com/web/fundamentals/primers/service-workers/" target="_blank">Service Worker</a> et un <a href="https://developers.google.com/web/fundamentals/web-app-manifest/" target="_blank">Web Manifest</a>. Bien qu'il soit possible d'ajouter ces deux éléments à une application manuellement, l'interface CLI de Vue dispose de quelques utilitaires pour les ajouter à votre place.

Pour les projets existants, vous pouvez exécuter la commande `vue add` pour installer le plugin PWA pour Vue.

```shell
vue add pwa
```

> Si vous avez des changements déjà en place, assurez-vous de les valider dans Git.

Une fois cette opération terminée, le CLI de Vue aura créé un nouveau fichier `registerServiceWorker.ts` et l'aura importé dans notre `main.ts`.


```typescript
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Ajouté par le CLI
import './registerServiceWorker'

createApp(App)
  .use(router)
  .mount('#app')
```

Le fichier `registerServiceWorker.ts` pointera vers un service worker que le CLI créera au moment de la construction. À l'intérieur de cette zone, nous pouvons personnaliser l'expérience des utilisateurs lorsque le travailleur de service détecte une mise à jour, un changement dans la connectivité du réseau ou reçoit une erreur.

```typescript
import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
    },
    registered () {
      console.log('Service worker has been registered.')
    },
    cached () {
      console.log('Content has been cached for offline use.')
    },
    updatefound () {
      console.log('New content is downloading.')
    },
    updated () {
      console.log('New content is available; please refresh.')
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })
}
```

Le travailleur de service qui est généré est basé sur [le plugin webpack de Workbox](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin), et par défaut est configuré pour utiliser `GenerateSW()`. Cela signifie qu'au moment de la construction, Workbox génère automatiquement un cache de travailleur de service pour tous les fichiers qu'il traite.

Si vous souhaitez le configurer et modifier le comportement par défaut, consultez la [Documentation du plugin PWA](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa#configuration) sur GitHub.


### Le Manifeste

En plus du travailleur de service, le plugin Vue PWA est également responsable de la création d'un fichier manifeste pour votre application. Par défaut, le CLI générera un manifeste contenant les entrées suivantes.

```json
{
  "name": "pwa-test",
  "short_name": "pwa-test",
  "theme_color": "#4DBA87",
  "icons": [
    {
      "src": "./img/icons/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "./img/icons/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    },
    {
      "src": "./img/icons/android-chrome-maskable-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "maskable"
    },
    {
      "src": "./img/icons/android-chrome-maskable-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "background_color": "#000000"
}
```

Veillez à mettre à jour les icônes dans `public/img/icons` pour qu'elles correspondent à votre propre marque. Si vous souhaitez personnaliser la couleur ou le nom du thème, veillez à lire la [Documentation du plugin PWA](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa#configuration) sur GitHub.

## Le Déploiement

Vous pouvez utiliser différents hôtes comme Firebase, Vercel, Netlify, ou même Azure Static Web Apps. Tous auront des processus de configuration similaires qui devront être complétés. Pour ce guide, Firebase sera utilisé comme exemple d'hébergement. En plus de ce guide, les [documents Vue CLI](https://cli.vuejs.org/guide/deployment.html) contiennent également un guide sur la façon de déployer vers divers fournisseurs.


### Firebase

L'hébergement Firebase offre de nombreux avantages pour les Progressive Web Apps, notamment des temps de réponse rapides grâce aux CDN, le HTTPS activé par défaut et la prise en charge de [HTTP2 push](https://firebase.googleblog.com/2016/09/http2-comes-to-firebase-hosting.html).

Tout d'abord, s'il n'est pas déjà disponible, [créer le projet](https://console.firebase.google.com) dans Firebase.

Ensuite, dans un Terminal, installez le Firebase CLI :

```shell
$ npm install -g firebase-tools
```

Une fois la CLI Firebase installée, exécutez `firebase init` dans votre projet Ionic. Le CLI vous invite à le faire :

**"Quelles fonctionnalités Firebase CLI voulez-vous configurer pour ce dossier ?"** Choisissez "Hébergement : Configurer et déployer les sites d'hébergement Firebase."

**"Sélectionnez un projet Firebase par défaut pour ce répertoire :"** Choisissez le projet que vous avez créé sur le site web de Firebase.

**"Que voulez-vous utiliser comme répertoire public ?"** Saisissez "dist".

> Remarque : en répondant à ces deux questions, vous vous assurez que le routage, le rechargement dur et les liens profonds fonctionnent dans l'application :

**Configurer comme une application à page unique (réécrire toutes les urls vers /index.html) ?"** Saisir "Oui".

**"Le fichier dist/index.html existe déjà. Overwrite (écraser)?"** Entrez "No".

Un fichier de configuration `firebase.json` est généré, configurant l'application pour le déploiement.

La dernière chose à faire est de s'assurer que les en-têtes de mise en cache sont correctement définis. Pour ce faire, ajoutez un extrait de `headers` au fichier `firebase.json`. Le `firebase.json` complet ressemble à :

```json
{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "/**",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=31536000"
          }
        ]
      },
      {
        "source": "precache-manifest.*.js",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "no-cache"
          }
        ]
      },
      {
        "source": "service-worker.js",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "no-cache"
          }
        ]
      }

    ]
  }
}
```

Pour plus d'informations sur les propriétés `firebase.json`, consultez la [Documentation Firebase](https://firebase.google.com/docs/hosting/full-config#section-firebase-json).

Ensuite, construisez une version optimisée de l'application en l'exécutant :

```shell
$ ionic build
```

Enfin, déployez l'application en exécutant :

```shell
$ firebase deploy
```

Une fois cette opération terminée, l'application sera en ligne.
