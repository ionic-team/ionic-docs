# Track Bugs in Realtime with Ionic Monitoring

Bugs happen, and can be hard to track down - especially with hundreds of possible combinations of mobile devices and operating systems. Appflow Monitoring allows you to track errors in your app on users’ phones and it sends them directly to you instantly, even if your code is minified!

Reducing customer frustration by fixing major issues quickly in your production apps are a substantial part of providing a high quality app experience. Combined with Appflow Deploy, new updates can be rolled out quickly to address problems in real-time.

To begin, let’s add a global error handler that will catch and report all unhandled exceptions that occur in the app. Open `src/app/app.module.ts`, then add two import statements:

```javascript
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { IonicErrorHandler } from 'ionic-angular';
```

Next, create an error handler class calls the Monitoring service’s API whenever any errors have been encountered:

```javascript
@Injectable()
export class MyErrorHandler implements ErrorHandler {
  ionicErrorHandler: IonicErrorHandler;

  constructor(injector: Injector) {
    try {
      this.ionicErrorHandler = injector.get(IonicErrorHandler);
    } catch (e) {
      // Unable to get the IonicErrorHandler provider, ensure
      // IonicErrorHandler has been added to the providers list below
    }
  }

  handleError(err: any): void {
    Pro.monitoring.handleNewError(err);

    this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
  }
}
```

Then, within the providers array, update IonicErrorHandler to MyErrorHandler:

```javascript
{provide: ErrorHandler, useClass: MyErrorHandler},
```

It should then look like:

```javascript
providers: [
  // ...
  IonicErrorHandler,
  [{ provide: ErrorHandler, useClass: MyErrorHandler }],
];
```

Next, let’s intentionally create a bug so we can demonstrate the power of Ionic Monitoring. Open `about.html` and rename the takePicture method to something that doesn’t exist, such as “takePhoto”:

```html
<button ion-fab (click)="photoService.takePhoto()"></button>
```

With this change in place, anytime a user taps on the Camera button, an exception will be thrown and sent to Ionic’s Monitoring service.

Last, we need to need to create a Source Map for your app. This file makes it easy for Monitoring to pinpoint problems by providing stack traces that map back to the original, unminified TypeScript code.

Sync the current version of the app by running the following:

```shell
$ ionic monitoring syncmaps
```

With our intentional error in place, let’s try it out to see what happens. Run your app locally:

```shell
$ ionic serve
```

Tap on the Gallery tab, then the camera button. A runtime error should occur. In a browser, head over to the [Appflow dashboard](https://dashboard.ionicframework.com), then Monitor -> Monitoring. After a few minutes, the error should appear:

![event monitoring](/img/guides/first-app-v3/monitoring-event.png)

Clicking on the event gives us lots of details surrounding what happened, such as a full stack trace. In this instance, we see that the error occurred three times on Mac OS X in the Chrome web browser.

![event details](/img/guides/first-app-v3/monitoring-details.png)

Given the proliferation of mobile devices and operating systems these days, this is immensely powerful. Armed with these details, we can hone in on the problem and fix it quickly.

This is a TypeScript bug, meaning a fix can be released using Live Updates. Give it a try!

- Revert the method back to “takePicture.”
- Push the fix using Git. Remember, “git push ionic master.”
- Roll out the fix using Live Updates from the Ionic dashboard.

Supporting hundreds of mobile device types is so much easier with Appflow Monitoring. [Upgrade to the Appflow Developer plan today](https://dashboard.ionicframework.com/settings/billing) to get instant notification when bugs occur, save error history for sixty days (instead of seven), and unlock 10,000 live Deploy updates per month!
