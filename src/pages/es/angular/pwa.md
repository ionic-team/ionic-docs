---
title: "Aplicaciones web progresivas en Angular"
---


## Hacer de tu aplicación Angular un PWA


Los dos requisitos principales de un PWA son un <a href="https://developers.google.com/web/fundamentals/primers/service-workers/" target="_blank">Service Worker</a> y un <a href="https://developers.google.com/web/fundamentals/web-app-manifest/" target="_blank">Web Manifest</a>. Mientras sea posible añadir ambos a una aplicación manualmente, el equipo de Angular tiene un paquete `@angular/pwa` que puede ser usado para automatizar esto.

El paquete `@angular/pwa` añadirá automáticamente un service worker y el app manifest de la aplicación. Para añadir este paquete a la aplicación, ejecute:

```shell
$ ng add @angular/pwa
```

Una vez añadido este paquete, ejecute `ionic build --prod` y el directorio `www` estará listo para ser implementado como un PWA.

> Por defecto, el paquete `@angular/pwa` viene con el logo de Angular para los iconos de la aplicación. Asegúrese de actualizar el archivo manifest para usar el nombre de la aplicación correcta y también reemplazar los iconos.


> Nota: Características como (como la geolocalización) de los Service Workers y  muchas API JavaScript requieren que la aplicación se aloje en un contexto seguro. Al desplegar una aplicación en un servicio de hosting, tenga en cuenta que HTTPS será requerido para aprovechar al máximo los del Service Workers.

## Configuración del Service Worker

Después de que `@angular/pwa` haya sido añadido, se creará un nuevo archivo `ngsw-config.json` en la raíz del proyecto. Este archivo es responsable de configurar cómo el mecanismo del Sevices Worker de Angular manejará los activos de caché. De forma predeterminada, se proporcionará lo siguiente:

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

Hay dos secciones aquí, una para recursos específicos de la aplicación (JS, CSS, HTML) y assets que la aplicación cargará bajo demanda. Dependiendo de tu aplicación, estas opciones pueden ser personalizadas. Para una guía más detallada, lee [la guía oficial del equipo Angular.](https://angular.io/guide/service-worker-config)


## Desplegando

### Firebase

El alojamiento Firebase proporciona muchos beneficios para las aplicaciones web progresivas, incluyendo tiempos de respuesta rápidos gracias a los CDNs, HTTPS habilitado por defecto, y soporte para [HTTP2 push](https://firebase.googleblog.com/2016/09/http2-comes-to-firebase-hosting.html).

Primero, si no está disponible, [cree el projecto](https://console.firebase.google.com) en Firebase.

A continuación, en una terminal, instale la CLI de Firebase:

```shell
$ npm install -g firebase-tools
```

> Nota: Si es la primera vez que utilizas herramientas de firebase, inicia sesión en tu cuenta de Google con el comando `firebase login`.

Con el CLI de Firebase instalado, ejecuta `firebase init` dentro de tu proyecto de Ionic. El CLI indica:

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
