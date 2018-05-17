---
nextText: 'Publishing to the iOS App Store'
nextUrl: '/docs/publishing/app-store'
---

# Publishing a Progressive Web App

<p class="intro" markdown="1">
Because Ionic Apps are built with web technologies, they can run just as well as a Progressive Web App as they can a native app. Not sure what PWA are? Check out Ionic's <a href="https://ionicframework.com/pwa" target="_blank">PWA Overview</a> for more info.
</p>

## Making the App a PWA

The two main requirements of a PWA are a <a href="https://developers.google.com/web/fundamentals/primers/service-workers/" target="_blank">Service Worker</a> and a <a href="https://developers.google.com/web/fundamentals/web-app-manifest/" target="_blank">Web Manifest</a>. While it's possible to add both of these to an app manually, the Angular team has an `@angular/pwa` package that can be used to automate this.

### Adding @angular/pwa to our Ionic/Angular App

The `@angular/pwa` package will automatically add a **service worker** and a **web manifest** to the app. To add this package to the app run:

```shell
ng add @angular/pwa
```

This will add a service worker (using the [@angular/service-worker package](https://angular.io/guide/service-worker-intro)) and a manifest to the app. Once this package has been added run `ionic build --prod` and the `www` directory will be ready to deploy as a PWA.

> Be sure to update the web manifest to use the correct app name and icons

If an app is being deployed to other channels such as Cordova or Electron, it's recommended to remove `"serviceWorker": true` flag from the `angular.json` file. The service worker can be generated though by running:

```shell
ionic build --prod --service-worker
```

> Note: Features like Service Workers and many JavaScript APIs (such as geolocation) require the app be hosted in a secure context. When deploying an app through a hosting service, be aware they HTTPS will be required to take full advantage of Service Workers.

## Deploying

### Firebase

Firebase hosting provides many benefits for Progressive Web Apps, including fast response times thanks to CDN's, HTTPS enabled by default, and support for [HTTP2 push](https://firebase.googleblog.com/2016/09/http2-comes-to-firebase-hosting.html).

First, install the Firebase CLI:

```shell
npm install -g firebase-tools
```

With the Firebase CLI installed run `firebase init` in the project.
This will set generate a `firebase.json` config file and configure the app for deployment.

> `firebase init` will present a few question, including one about redirecting URLs to `/index.html`.
> Make sure to choose **yes** for this option, but **no** to overwriting your index.html.
> This will ensure that routing, hard reload, and deeplinking work in the app.

The last thing needed is to make sure caching headers are being set correctly.
To do this, add the following snippet to the `firebase.json` file:

```json
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
    "source": "sw.js",
    "headers": [
      {
        "key": "Cache-Control",
        "value": "no-cache"
      }
    ]
  }
]
```

The app can no be deployed by running

```shell
firebase deploy
```

After this completes the app will be live.
