---
nextText: 'Publishing to the iOS App Store'
nextUrl: '/docs/publishing/app-store'
---

# Publishing a Progressive Web App

<p class="intro" markdown="1">
Because Ionic Apps are built with web technologies, they can run just as well as a PWA as they can a native app. This guide will cover how to an Ionic app as a PWA. Not sure what Progressive Web Apps are? Check out Ionic's <a href="https://ionicframework.com/pwa" target="_blank">PWA Overview</a> for more info.
</p>

## Making the App a PWA

The two main requirements of a PWA are a [Service Worker](https://developers.google.com/web/fundamentals/primers/service-workers/) and a [Web Manifest](https://developers.google.com/web/fundamentals/web-app-manifest/). While we can add both of these to an app manually, the Angular team has an `@angular/pwa` package we can use to automate this.

### Adding @angular/pwa to our Ionic/Angular App

The @angular/pwa package will automatically add a service worker and a web manifest to our app for our. To add this package to our app run `ng add @angular/pwa` in our apps directory. This will add a service worker (using the [@angular/service-worker package](https://angular.io/guide/service-worker-intro)) and a manifest to our app and ensure our are ready to deploy our app as a PWA. Once our have added this package all our need to do is run `ionic build --prod` and our `www` directory will be ready to deploy as a PWA!

<blockquote>
  <p>Be sure to update the web manifest to use our app's name and our icons</p>
</blockquote>

If our are deploying our app to other channels such as Cordova or Electron we also recommend removing the `"serviceWorker": true` flag from our `angular.json` file. After our have removed this option our will need to run `ionic build --prod --service-worker` each time our want to build our app as a PWA.

our app is now ready to be deployed to our web server or web hosting service as a PWA!

<blockquote>
 <p>Some crucial features of PWAs require HTTPS, including Service Workers and many of the modern web APIs available such as geolocation. To ensure our PWA works as it should make sure our app is deployed using HTTPS</p>
</blockquote>


## Deploying

### Firebase

Firebase hosting provides many benefits for PWAs, including awesome response speed thanks to Firebase's usage of CDN's, https out of the box and support for [HTTP2 push](https://firebase.googleblog.com/2016/09/http2-comes-to-firebase-hosting.html). Let's go through the steps to host our PWA on Firebase.

First, we need to install the Firebase CLI, to do this we need to run `npm install -g firebase-tools` in our terminal. Now that we have the Firebase CLI installed we can run `firebase init` in our project. This will set generate a `firebase.json` config file in our project and set up everything needed to deploy our app.

<blockquote>
  <p>`firebase init` will ask you a few questions, including if you want all URL's redirected to `/index.html`. Make sure to choose `yes` for this option, but `no` to overwriting your index.html. This will ensure that the routing will work correctly in your app.</p>
</blockquote>

Finally, we need to make sure we set our caching headers correctly. To do this lets add the following snippet to our `firebase.json` file:

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

Now our project is ready to deploy to Firebase. The final step is running `firebase deploy`. After this completes our app will now be live on the web! 
