---
nextText: 'Publishing to the iOS App Store'
nextUrl: '/docs/publishing/app-store'
---

# Publishing a Progressive Web App

<blockquote>
  <p>Not sure what Progressive Web Apps are? Check out https://ionicframework.com/pwa for more info.</p>
</blockquote>

Because Ionic Apps are built with web technologies your app can run just as well as a PWA as it can a native app. Lets look at how you can deploy your app as a PWA.

## Making your App a PWA

The two main requirements of a PWA are a [Service Worker](https://developers.google.com/web/fundamentals/primers/service-workers/) and a [Web Manifest](https://developers.google.com/web/fundamentals/web-app-manifest/). While we can add both of these to an app manually, the Angular team has an `@angular/pwa` package we can use to automate this.

### Adding @angular/pwa to our Ionic/Angular App

The @angular/pwa package will automatically add a service worker and a web manifest to your app for you. To add this package to your app run `ng add @angular/pwa` in your apps directory. This will add a service worker (using the [@angular/service-worker package](https://angular.io/guide/service-worker-intro)) and a manifest to your app and ensure you are ready to deploy your app as a PWA. Once you have added this package all you need to do is run `ionic build --prod` and your `www` directory will be ready to deploy as a PWA!

<blockquote>
  <p>Be sure to update the web manifest to use your app's name and your icons</p>
</blockquote>

If you are deploying your app to other channels such as Cordova or Electron we also recommend removing the `"serviceWorker": true` flag from your `angular.json` file. After you have removed this option you will need to run `ionic build --prod --service-worker` each time you want to build your app as a PWA.

Your app is now ready to be deployed to your web server or web hosting service as a PWA!

<blockquote>
 <p>Some crucial features of PWAs require HTTPS, including Service Workers and many of the modern web APIs available such as geolocation. To ensure your PWA works as it should make sure your app is deployed using HTTPS</p>
</blockquote>

