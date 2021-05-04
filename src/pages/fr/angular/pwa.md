---
title: "Applications Web Progressives dans Angular"
---


## Faire de votre application Angular une AWP


Les deux principales exigences d'une AWP sont un <a href="https://developers.google.com/web/fundamentals/primers/service-workers/" target="_blank">Service Worker</a> et un <a href="https://developers.google.com/web/fundamentals/web-app-manifest/" target="_blank">Manifeste Web</a>. S'il est possible d'ajouter ces deux éléments manuellement à une application, l'équipe d'Angular a un paquet `@angular/pwa` qui peut être utilisé pour automatiser cela.

Le paquet `@angular/pwa` ajoutera automatiquement un service worker et un manifeste d'application à l'application. Pour ajouter ce paquet à l'application, exécutez :

```shell
$ ng add @angular/pwa
```

Une fois ce paquet ajouté, exécutez `ionic build --prod` et le répertoire `www` sera prêt à être déployé en tant que AWP.

> Par défaut, le paquet `@angular/pwa` est fourni avec le logo d'Angular pour les icônes de l'application. Assurez-vous de mettre à jour le manifeste pour utiliser le nom correct de l'application et aussi remplacer les icônes.


> Remarque : les fonctionnalités comme les Service Workers et de nombreuses API JavaScript (comme la géolocalisation) nécessitent que l'application soit hébergée dans un contexte sécurisé. Lors du déploiement d'une application via un service d'hébergement, sachez que HTTPS sera nécessaire pour tirer pleinement parti des Service Workers.

## Configuration du Service Worker

Après l'ajout de `@angular/pwa` , un nouveau fichier `ngsw-config.json` sera créé à la racine du projet. Ce fichier est responsable de la configuration du mécanisme de Service Worker d'Angular pour gérer les ressources de mise en cache. Par défaut, les données suivantes seront fournies :

```json
{
  "$schema": "./node_modules/@angular/service-worker/config/schema.json",
  "index": "/index.html",
  "assetGroups": [
    {
      "name": "app",
      "installMode": "prefetch",
      "resources": {
        "files": [
          "/favicon.ico",
          "/index.html",
          "/*.css",
          "/*.js"
        ]
      }
    }, {
      "name": "assets",
      "installMode": "lazy",
      "updateMode": "prefetch",
      "resources": {
        "files": [
          "/assets/**",
          "/*.(eot|svg|cur|jpg|png|webp|gif|otf|ttf|woff|woff2|ani)"
        ]
      }
    }
  ]
}
```

Il y a deux sections ici, une pour les ressources spécifiques à l'application (JS, CSS, HTML) et une autre pour les ressources que l'application chargera à la demande. Selon votre application, ces options peuvent être personnalisées. Pour un guide plus détaillé, lisez [le guide officiel de l'équipe Angular.](https://angular.io/guide/service-worker-config)


## Déploiement

### Firebase

L'hébergement Firebase offre de nombreux avantages pour les applications Web progressives, y compris des temps de réponse rapides grâce aux CDN, HTTPS activé par défaut, et le support de [HTTP2 push](https://firebase.googleblog.com/2016/09/http2-comes-to-firebase-hosting.html).

Tout d'abord, s'il n'est pas déjà disponible, [créez le projet](https://console.firebase.google.com) dans Firebase.

Ensuite, dans un Terminal, installez l'ILC de Firebase :

```shell
$ npm install -g firebase-tools
```

Avec l'ILC Firebase installé, exécutez `firebase init` dans votre projet Ionic. L'ILC affiche :

**"Which Firebase CLI features do you want to set up for this folder?"** Choisissez "Hosting: Configure and deploy Firebase Hosting sites."

**"Select a default Firebase project for this directory:"** Choisissez le projet que vous avez créé sur le site Web de Firebase.

**"What do you want to use as your public directory?"** Entrez "www".

> Remarque : Répondre à ces deux questions garantira que le routage, le hard reload et le deep linking fonctionnent dans l'application :

**Configure as a single-page app (rewrite all urls to /index.html)?"** Entrez "Yes".

**"File www/index.html already exists. Overwrite?"** Entrez "No".

Un fichier de configuration `firebase.json` est généré, configurant l'application pour le déploiement.

La dernière chose nécessaire est de s'assurer que les en-têtes de cache sont correctement définis. Pour ce faire, ajoutez un snippet `headers` au fichier `firebase.json`. Le fichier `firebase.json` complet ressemble à :

```json
{
  "hosting": {
    "public": "www",
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
        "source": "/build/app/**",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=31536000"
          }
        ]
      },
      {
        "source": "ngsw-worker.js",
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

Pour plus d'informations sur les propriétés dans `firebase.json` , voir la documentation [Firebase](https://firebase.google.com/docs/hosting/full-config#section-firebase-json).

Ensuite, construisez une version optimisée de l'application en exécutant :

```shell
$ ionic build --prod
```

Enfin, déployez l'application en exécutant :

```shell
$ firebase deploy
```

Une fois cette opération terminée, l'application démarrera.
