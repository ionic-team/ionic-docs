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

Après l'ajout de `@angular/pwa` , un nouveau fichier `ngsw-config.json` sera créé à la racine du projet. This file is responsible for configuring how Angular's service worker mechanism will handle caching assets. By default, the following will be provided:

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

There are two sections in here, one for app specific resources (JS, CSS, HTML) and assets the app will load on demand. Depending on your app, these options can be customized. For a more detailed guide, read [the official guide from the Angular Team.](https://angular.io/guide/service-worker-config)


## Deploying

### Firebase

Firebase hosting provides many benefits for Progressive Web Apps, including fast response times thanks to CDNs, HTTPS enabled by default, and support for [HTTP2 push](https://firebase.googleblog.com/2016/09/http2-comes-to-firebase-hosting.html).

First, if not already available, [create the project](https://console.firebase.google.com) in Firebase.

Next, in a Terminal, install the Firebase CLI:

```shell
$ npm install -g firebase-tools
```

With the Firebase CLI installed, run `firebase init` within your Ionic project. The CLI prompts:

**"Which Firebase CLI features do you want to set up for this folder?"**  Choose "Hosting: Configure and deploy Firebase Hosting sites."

**"Select a default Firebase project for this directory:"** Choose the project you created on the Firebase website.

**"What do you want to use as your public directory?"** Enter "www".

> Note: Answering these next two questions will ensure that routing, hard reload, and deep linking work in the app:

**Configure as a single-page app (rewrite all urls to /index.html)?"** Enter "Yes".

**"File www/index.html already exists. Overwrite?"** Enter "No".

A `firebase.json` config file is generated, configuring the app for deployment.

The last thing needed is to make sure caching headers are being set correctly. To do this, add a `headers` snippet to the `firebase.json` file. The complete `firebase.json` looks like:

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

For more information about the `firebase.json` properties, see the [Firebase documentation](https://firebase.google.com/docs/hosting/full-config#section-firebase-json).

Next, build an optimized version of the app by running:

```shell
$ ionic build --prod
```

Last, deploy the app by running:

```shell
$ firebase deploy
```

After this completes, the app will be live.
