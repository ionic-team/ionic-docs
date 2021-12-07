---
sidebar_label: Progressive Web Apps
---

# Progressive Web Apps in Vue

## Making your Vue app a PWA

The two main requirements of a PWA are a <a href="https://developers.google.com/web/fundamentals/primers/service-workers/" target="_blank">Service Worker</a> and a <a href="https://developers.google.com/web/fundamentals/web-app-manifest/" target="_blank">Web Manifest</a>. While it's possible to add both of these to an app manually, the Vue CLI has some utilities for adding this for you.

For existing projects, you can run the `vue add` command to install the PWA plugin for Vue.

```shell
vue add pwa
```

:::note
If you have changes already in place, be sure to commit them in Git.
:::

Once this is completed, Vue's CLI will have created a new `registerServiceWorker.ts` file and imported it into our `main.ts`.

```tsx
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// Added by the CLI
import './registerServiceWorker';

createApp(App).use(router).mount('#app');
```

The `registerServiceWorker.ts` file will point to a service worker that the CLI will create at build time. Inside of here we can customize the experience users will have when the service worker detects an update, change in network connectivity, or receives an error.

```tsx
import { register } from 'register-service-worker';

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log(
        'App is being served from cache by a service worker.\n' + 'For more details, visit https://goo.gl/AFskqB'
      );
    },
    registered() {
      console.log('Service worker has been registered.');
    },
    cached() {
      console.log('Content has been cached for offline use.');
    },
    updatefound() {
      console.log('New content is downloading.');
    },
    updated() {
      console.log('New content is available; please refresh.');
    },
    offline() {
      console.log('No internet connection found. App is running in offline mode.');
    },
    error(error) {
      console.error('Error during service worker registration:', error);
    },
  });
}
```

The service worker that is generated is based on [Workbox's webpack plugin](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin), and by default is setup to use `GenerateSW()`. Meaning that at build time, Workbox will automatically generate a service worker cache for all the files it processes.

If you want to configure this and change the default behavior, checkout the [PWA plugin docs](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa#configuration) on GitHub.

### Manifest

In addition to the service worker, the Vue PWA plugin also is responsible for creating a manifest file for your app as well. By default, the CLI will generate a manifest that contains the following entries.

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

Be sure to update the icons in `public/img/icons` to match your own brand. If you wanted to customize the theme color or name, be sure to read the [PWA plugin docs](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa#configuration) on GitHub.

## Deploying

You can use various hosts like Firebase, Vercel, Netlify, or even Azure Static Web Apps. All will have similar setup processes that need to be completed. For this guide, Firebase will be used as the hosting example. In addition to this guide, the [Vue CLI docs](https://cli.vuejs.org/guide/deployment.html) also have a guide on how to deploy to various providers.

### Firebase

Firebase hosting provides many benefits for Progressive Web Apps, including fast response times thanks to CDNs, HTTPS enabled by default, and support for [HTTP2 push](https://firebase.googleblog.com/2016/09/http2-comes-to-firebase-hosting.html).

First, if not already available, [create the project](https://console.firebase.google.com) in Firebase.

Next, in a Terminal, install the Firebase CLI:

```shell
$ npm install -g firebase-tools
```

With the Firebase CLI installed, run `firebase init` within your Ionic project. The CLI prompts:

**"Which Firebase CLI features do you want to set up for this folder?"** Choose "Hosting: Configure and deploy Firebase Hosting sites."

**"Select a default Firebase project for this directory:"** Choose the project you created on the Firebase website.

**"What do you want to use as your public directory?"** Enter "dist".

:::note
Answering these next two questions will ensure that routing, hard reload, and deep linking work in the app:
:::

**Configure as a single-page app (rewrite all urls to /index.html)?"** Enter "Yes".

**"File dist/index.html already exists. Overwrite?"** Enter "No".

A `firebase.json` config file is generated, configuring the app for deployment.

The last thing needed is to make sure caching headers are being set correctly. To do this, add a `headers` snippet to the `firebase.json` file. The complete `firebase.json` looks like:

```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
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

For more information about the `firebase.json` properties, see the [Firebase documentation](https://firebase.google.com/docs/hosting/full-config#section-firebase-json).

Next, build an optimized version of the app by running:

```shell
$ ionic build
```

Last, deploy the app by running:

```shell
$ firebase deploy
```

After this completes, the app will be live.
