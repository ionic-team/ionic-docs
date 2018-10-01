# Using Ionic Deploy

Ionic Pro's Deploy feature makes it easy to deploy app updates in real time without going through a
traditional app store submission process for the vast majority of business logic, UI, and style changes.

The Deploy feature works with the Ionic Pro [Git Workflow](/docs/pro/basics/git/) to deploy new code updates
in production (or testing) apps.

*Note: The Deploy feature only works on binary compatible changes (HTML, CSS, JS),
meaning if you rely on native code updates you must resubmit to the app store first before using Deploy.*

## Installation

In order to use Ionic Pro's Deploy feature you'll need to at a minimum
[install and configure the Pro Plugin](#installing-ionic-pro-plugin).
Additionally we recommend [install the Pro Client](#pro-client-setup) which is configured to be injectable in
Angular projects and will provide access to both the Deploy API as well as the Monitoring API.

### Pro Client Setup

The Ionic Pro Client gives you access to the Monitoring and Deploy APIs inside of your app.

The first thing you have to do is set up the Pro Client (or update it to the latest version) in your project. Inside of your app directory, make sure you are on the latest version of the Pro Client and App Scripts:

```bash
npm install @ionic/app-scripts@latest @ionic/pro@latest
```

You'll want to initialize Pro Client with your App ID and App Version from Ionic Pro inside of `app.module.ts`.

```typescript
// All of your imports that are already there
// import { ... } from '...';

// These are all imports required for Pro Client with Monitoring & Deploy,
// feel free to merge into existing imports above.
import { Pro } from '@ionic/pro';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { IonicErrorHandler } from 'ionic-angular';

Pro.init('YOUR_APP_ID', {
  appVersion: 'APP_VERSION'
})

@Injectable()
export class MyErrorHandler implements ErrorHandler {
  ionicErrorHandler: IonicErrorHandler;

  constructor(injector: Injector) {
    try {
      this.ionicErrorHandler = injector.get(IonicErrorHandler);
    } catch(e) {
      // Unable to get the IonicErrorHandler provider, ensure
      // IonicErrorHandler has been added to the providers list below
    }
  }

  handleError(err: any): void {
    Pro.monitoring.handleNewError(err);
    // Remove this if you want to disable Ionic's auto exception handling
    // in development mode.
    this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
  }
}

@NgModule({
    // ...
    // Modify your providers to include the following
    providers: [
        // ...
        IonicErrorHandler,
        [{ provide: ErrorHandler, useClass: MyErrorHandler }]
    ]
})
export class AppModule {}
```

`YOUR_APP_ID` is the Ionic Pro App ID found on the dashboard for your app.

`APP_VERSION` is the version of the code running for the purposes of tracking code changes. We strongly recommend that this mirrors the version in `package.json` or `config.xml`.

<div class="alert alert-warning" role="alert">It's important to keep the app version up to date because that is how the Error tracking
service will know when regressions have happened, as well as mapping your code to any
Source Maps you've provided.</div>

### Installing Ionic Pro Plugin

The Ionic Pro plugin comes with Ionic Pro's Deploy feature for detecting and syncing your app with updates that you've pushed to channels.

To install the plugin, we recommend following the automatic instructions after clicking "Set Up Deploy" on the channels list:

To install the plugin manually, run the following command in the root of your Ionic app, making sure to substitute the correct values for your app:

```bash
cordova plugin add cordova-plugin-ionic --save --variable APP_ID="YOUR_APP_ID" --variable CHANNEL_NAME="YOUR_CHANNEL_NAME" --variable UPDATE_METHOD="background|auto|none" --variable MAX_STORE="2"
```

Where `YOUR_APP_ID` is the ID of the app in Ionic Pro, and `YOUR_CHANNEL_NAME` is the name of a [channel](/docs/pro/deploy/channels).
Make sure to use the exact name of your channel, including the exact casing.
[MAX_STORE](/docs/pro/deploy/api/#max_store) tells us how many previous versions of code to keep inside your app,
this enables you to revert to those versions quickly, or swap between versions.
[UPDATE_METHOD](/docs/pro/deploy/api/#update_method) is one of `background | auto | none`. You can read about all the
available [plugin variables in our api docs](/docs/pro/deploy/api/#plugin-variables).

## Usage

After you have installed and configured the Pro Plugin & Client libraries you can begin receiving updates in your app.
To push new updates to your app, first trigger a [build](/docs/pro/builds/intro) by making a change to your app
committing it to version control and pushing the changes to Ionic Pro. The triggered build will be viewable in the
Ionic Pro dashboard.

Once the build is available you can deploy it live in your app by either
[manually assigning the build to the channel](/docs/pro/deploy/channels/#assigning-a-build-to-a-channel)
the plugin is configured to listen to, or, if you have specified a
[specific git branch channel to auto-deploy](/docs/pro/deploy/channels/#automating-deployment-from-a-git-branch),
the plugin will auto update once the build has completed.
