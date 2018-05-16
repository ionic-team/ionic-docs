---
nextText: 'Publishing to the iOS App Store'
nextUrl: '/docs/publishing/app-store'
---

# Publishing a Progressive Web App

<p class="intro" markdown="1">
Because Ionic Apps are built with web technologies, they can run just as well as a PWA as they can a native app. This guide will cover how to deploy an Ionic app as a PWA. Not sure what Progressive Web Apps are? Check out Ionic's <a href="https://ionicframework.com/pwa" target="_blank">PWA Overview</a> for more info.
</p>

## Making the App a PWA

The two main requirements of a PWA are a <a href="https://developers.google.com/web/fundamentals/primers/service-workers/" target="_blank">Service Worker</a> and a <a href="https://developers.google.com/web/fundamentals/web-app-manifest/" target="_blank">Web Manifest</a>. While it's possible to add both of these to an app manually, the Angular team has an `@angular/pwa` package that can be used to automate this.

### Adding @angular/pwa to our Ionic/Angular App

The `@angular/pwa` package will automatically add a <strong>service worker</strong> and a <strong>web manifest</strong> to the app. To add this package to the app run `ng add @angular/pwa` in the apps directory. This will add a service worker (using the [@angular/service-worker package](https://angular.io/guide/service-worker-intro)) and a manifest to the app and ensure it is ready to deploy as a PWA. Once this package has been added run `ionic build --prod` and the `www` directory will be ready to deploy as a PWA!

<blockquote>
  <p>Be sure to update the web manifest to use the correct app name and icons</p>
</blockquote>

If this app is being deployed to other channels such as Cordova or Electron we also recommend removing the `"serviceWorker": true` flag from the `angular.json` file. After this option has been removed, run `ionic build --prod --service-worker` each time before the app is deployed as a PWA.

The app is now ready to be deployed to a web server or web hosting service as a PWA!

<blockquote>
 <p>Some crucial features of PWAs require HTTPS, including Service Workers and many of the modern web APIs available such as geolocation. To ensure a PWA works as it should make sure the app is deployed using HTTPS</p>
</blockquote>


## Deploying

### Firebase

Firebase hosting provides many benefits for PWAs, including awesome response times thanks to Firebase's usage of CDN's, https out of the box and support for [HTTP2 push](https://firebase.googleblog.com/2016/09/http2-comes-to-firebase-hosting.html). Let's go through the steps to host a PWA on Firebase.

First, we need to install the Firebase CLI, to do this run `npm install -g firebase-tools` in a terminal. Now that we have the Firebase CLI installed run `firebase init` in the project. This will set generate a `firebase.json` config file and set up everything needed to deploy the app.

<blockquote>
  <p>`firebase init` will ask a few questions, including a prompt about all URL's being redirected to `/index.html`. Make sure to choose `yes` for this option, but `no` to overwriting your index.html. This will ensure that routing will work correctly in the app.</p>
</blockquote>

Finally, we need to make sure we set caching headers correctly. To do this lets add the following snippet to the `firebase.json` file:

```
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

Now the PWA is ready to deploy to Firebase. The final step is running `firebase deploy`. After this completes the app will be live on the web! 
