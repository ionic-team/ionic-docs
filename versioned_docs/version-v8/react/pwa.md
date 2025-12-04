---
title: Progressive Web Apps in React
sidebar_label: Progressive Web Apps
---

<head>
  <title>Create Progressive Web Apps (PWA) in React - Ionic Framework</title>
  <meta
    name="description"
    content="Create progressive web apps in React with Ionic. Read our React PWA documentation for information on how to make React PWAs."
  />
</head>

## Making your React app a PWA with Vite

The two main requirements of a PWA are a <a href="https://developers.google.com/web/fundamentals/primers/service-workers/" target="_blank">Service Worker</a> and a <a href="https://developers.google.com/web/fundamentals/web-app-manifest/" target="_blank">Web Application Manifest</a>. While it's possible to add both of these to an app manually, we recommend using the [Vite PWA Plugin](https://vite-pwa-org.netlify.app/) instead.

To get started, install the `vite-plugin-pwa` package:

```shell
npm install -D vite-plugin-pwa
```

Next, update your `vite.config.js` or `vite.config.ts` file and add `vite-plugin-pwa`:

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [react(), VitePWA({ registerType: 'autoUpdate' })],
});
```

This minimal configuration allows your application to generate the Web Application Manifest and Service Worker on build.

For more information on configuring the Vite PWA Plugin, see the [Vite PWA "Getting Started" Guide](https://vite-pwa-org.netlify.app/guide/).

See the [Vite PWA "Deploy" Guide](https://vite-pwa-org.netlify.app/deployment/) for information on how to deploy your PWA.

## Making your React app a PWA with Create React App

:::note
As of Ionic CLI v7, Ionic React starter apps ship with Vite instead of Create React App. See [Making your React app a PWA with Vite](#making-your-react-app-a-pwa-with-vite) for Vite instructions.
:::

The two main requirements of a PWA are a <a href="https://developers.google.com/web/fundamentals/primers/service-workers/" target="_blank">Service Worker</a> and a <a href="https://developers.google.com/web/fundamentals/web-app-manifest/" target="_blank">Web Application Manifest</a>. While it's possible to add both of these to an app manually, a base project from Create React App (CRA) and the Ionic CLI provides this already.

In the `index.ts` for your app, there is a call to a `serviceWorker.unregister()` function. The base that CRA provides has service workers as an opt-in feature, so it must be enabled. To enable, call `serviceWorker.register()`.

```ts
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
```

Once this package has been added, run `ionic build` and the `build` directory will be ready to deploy as a PWA.

:::note
By default, react apps package comes with the Ionic logo for the app icons. Be sure to update the manifest to use the correct app name and also replace the icons.
:::

:::note
Features like Service Workers and many JavaScript APIs (such as geolocation) require the app to be hosted in a secure context. When deploying an app through a hosting service, be aware that HTTPS will be required to take full advantage of Service Workers.
:::

### Service Worker configuration

By default, CRA/React Scripts come with a preconfigured Service Worker setup based on [Workbox's Webpack plugin](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin). This utilizes a cache-first strategy, meaning that your app will load from a cache, even if the network returns a newer version of the app.

Because of the nature of CRA/React Scripts, the configuration for this is internal to React Scripts, meaning that it cannot be customized without ejecting from React Scripts. Currently, the Ionic CLI does not support an ejected React App, so if this action is taken, you'll need to use npm/yarn scripts instead of the Ionic CLI.

### Deploying

#### Firebase

Firebase hosting provides many benefits for Progressive Web Apps, including fast response times thanks to CDNs, HTTPS enabled by default, and support for [HTTP2 push](https://firebase.googleblog.com/2016/09/http2-comes-to-firebase-hosting.html).

First, if not already available, [create the project](https://console.firebase.google.com) in Firebase.

Next, in a Terminal, install the Firebase CLI:

```shell
npm install -g firebase-tools
```

:::note
If it's the first time you use firebase-tools, login to your Google account with `firebase login` command.
:::

With the Firebase CLI installed, run `firebase init` within your Ionic project. The CLI prompts:

**"Which Firebase CLI features do you want to set up for this folder?"** Choose "Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys".

Create a new Firebase project or select an existing one.

**"Select a default Firebase project for this directory:"** Choose the project you created on the Firebase website.

**"What do you want to use as your public directory?"** Enter "build".

:::note
Answering this next question will ensure that routing, hard reload, and deep linking work in the app:
:::

**Configure as a single-page app (rewrite all urls to /index.html)?"** Enter "Yes".

**"File build/index.html already exists. Overwrite?"** Enter "No".

**Set up automatic builds and deploys with Github?** Enter "Yes".

**For which GitHub repository would you like to set up a Github Workflow?** Enter your project name.

**Set up the workflow to run a build script before every deploy?** Enter "Yes".

**What script should be run before every deploy?** Enter `npm ci && npm run build`.

**Set up automatic deployment to your sites live channel when a PR is merged?** Enter "Yes".

**What is the name of the get hooked branch associated with your sites live channel?** Enter your project's main branch name.

A `firebase.json` config file is generated, configuring the app for deployment.

The last thing needed is to make sure caching headers are being set correctly. To do this, add a `headers` snippet to the `firebase.json` file. The complete `firebase.json` looks like:

```json
{
  "hosting": {
    "public": "build",
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
      }
    ]
  }
}
```

For more information about the `firebase.json` properties, see the [Firebase documentation](https://firebase.google.com/docs/hosting/full-config#section-firebase-json).

Next, build an optimized version of the app by running:

```shell
ionic build --prod
```

Last, deploy the app by running:

```shell
firebase deploy
```

After this completes, the app will be live.
