---
nextText: 'Publishing to the iOS App Store'
nextUrl: '/docs/publishing/app-store'
---

# Publishing a Progressive Web App

Because Ionic Apps are built with web technologies, they can run just as well as a Progressive Web App as they can a native app. Not sure what PWAs are? Check out Ionic's <a href="https://ionicframework.com/pwa" target="_blank">PWA Overview</a> for more info.

## Making an App a PWA

The two main requirements of a PWA are a <a href="https://developers.google.com/web/fundamentals/primers/service-workers/" target="_blank">Service Worker</a> and a <a href="https://developers.google.com/web/fundamentals/web-app-manifest/" target="_blank">Web Manifest</a>. While it's possible to add both of these to an app manually, the Angular team has an `@angular/pwa` package that can be used to automate this.

The `@angular/pwa` package will automatically add a service worker and a app manifest to the app.
To add this package to the app run:

```shell
$ ng add @angular/pwa
```

Once this package has been added run `ionic build --prod` and the `www` directory will be ready to deploy as a PWA.

> By default, the `@angular/pwa` package comes with Angular logo for the app icons. Be sure to update the manifest to use the correct app name and also replace the icons.

If an app is being deployed to other channels such as Cordova or Electron, you can remove the `"serviceWorker": true` flag from the `angular.json` file.
The service worker can be generated though by running:

```shell
$ ionic build --prod --service-worker
```

> Note: Features like Service Workers and many JavaScript APIs (such as geolocation) require the app be hosted in a secure context. When deploying an app through a hosting service, be aware they HTTPS will be required to take full advantage of Service Workers.

## Deploying

### Firebase

Firebase hosting provides many benefits for Progressive Web Apps, including fast response times thanks to CDN's, HTTPS enabled by default, and support for [HTTP2 push](https://firebase.googleblog.com/2016/09/http2-comes-to-firebase-hosting.html).

First, install the Firebase CLI:

```shell
$ npm install -g firebase-tools
```

With the Firebase CLI installed run `firebase init` in the project.
This will generate a `firebase.json` config file and configure the app for deployment.

> `firebase init` will present a few question, including one about redirecting URLs to `/index.html`.
> Make sure to choose **yes** for this option, but **no** to overwriting your index.html.
> This will ensure that routing, hard reload, and deep linking work in the app.

The last thing needed is to make sure caching headers are being set correctly. To do this, add the following snippet to the `firebase.json` file to the hosting property:

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
For more information about the `firebase.json` properties, see the [Firebase documentation](https://firebase.google.com/docs/hosting/full-config#section-firebase-json).

The app can now be deployed by running

```shell
$ firebase deploy
```

After this completes the app will be live.
