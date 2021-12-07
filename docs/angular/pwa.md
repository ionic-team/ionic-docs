---
title: Progressive Web Apps in Angular
sidebar_label: Progressive Web Apps
---

<head>
  <title>Make Progressive Web Apps (PWA) in Angular - Ionic Tutorial</title>
  <meta
    name="description"
    content="When Making an Angular app a Progressive Web App, the two main requirements are a Service Worker and a Web Manifest. Read to learn more in Ionic's PWA tutorial."
  />
</head>

## Making your Angular app a PWA

The two main requirements of a PWA are a <a href="https://developers.google.com/web/fundamentals/primers/service-workers/" target="_blank">Service Worker</a> and a <a href="https://developers.google.com/web/fundamentals/web-app-manifest/" target="_blank">Web Manifest</a>. While it's possible to add both of these to an app manually, the Angular team has an `@angular/pwa` package that can be used to automate this.

The `@angular/pwa` package will automatically add a service worker and an app manifest to the app.
To add this package to the app, run:

```shell
$ ng add @angular/pwa
```

Once this package has been added run `ionic build --prod` and the `www` directory will be ready to deploy as a PWA.

:::note
By default, the `@angular/pwa` package comes with the Angular logo for the app icons. Be sure to update the manifest to use the correct app name and also replace the icons.
:::

:::note
Features like Service Workers and many JavaScript APIs (such as geolocation) require the app be hosted in a secure context. When deploying an app through a hosting service, be aware that HTTPS will be required to take full advantage of Service Workers.
:::

## Service Worker configuration

After `@angular/pwa` has been added, a new `ngsw-config.json` file will be created at the root of the project. This file is responsible for configuring how Angular's service worker mechanism will handle caching assets. By default, the following will be provided:

```json
{
  "$schema": "./node_modules/@angular/service-worker/config/schema.json",
  "index": "/index.html",
  "assetGroups": [
    {
      "name": "app",
      "installMode": "prefetch",
      "resources": {
        "files": ["/favicon.ico", "/index.html", "/*.css", "/*.js"]
      }
    },
    {
      "name": "assets",
      "installMode": "lazy",
      "updateMode": "prefetch",
      "resources": {
        "files": ["/assets/**", "/*.(eot|svg|cur|jpg|png|webp|gif|otf|ttf|woff|woff2|ani)"]
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

:::note
If it's the first time you use firebase-tools, login to your Google account with `firebase login` command.
:::

With the Firebase CLI installed, run `firebase init` within your Ionic project. The CLI prompts:

**"Which Firebase CLI features do you want to set up for this folder?"** Choose "Hosting: Configure and deploy Firebase Hosting sites."

**"Select a default Firebase project for this directory:"** Choose the project you created on the Firebase website.

**"What do you want to use as your public directory?"** Enter "www".

:::note
Answering these next two questions will ensure that routing, hard reload, and deep linking work in the app:
:::

**Configure as a single-page app (rewrite all urls to /index.html)?"** Enter "Yes".

**"File www/index.html already exists. Overwrite?"** Enter "No".

A `firebase.json` config file is generated, configuring the app for deployment.

The last thing needed is to make sure caching headers are being set correctly. To do this, add a `headers` snippet to the `firebase.json` file. The complete `firebase.json` looks like:

```json
{
  "hosting": {
    "public": "www",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
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
