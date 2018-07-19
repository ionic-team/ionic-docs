---
layout: fluid/pro_docs_base
category: pro-deploy
id: pro-deploy-setup
title: Live Deploy Setup - Ionic Pro Documentation
body_class: 'pro-docs'
hide_header_search: true
dark_header: true
---

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

### Choose your Integration Type:

<div style="margin-top:15px;">

<!-- Nav tabs -->
<ul class="nav nav-tabs" role="tablist">
<li role="ionic2" class="active"><a href="#ionic2" aria-controls="ionic2" role="tab" data-toggle="tab">Ionic 2/3</a></li>
<li role="ionic1"><a href="#ionic1" aria-controls="ionic1" role="tab" data-toggle="tab">Ionic 1</a></li>
</ul>

<!-- Tab panes -->
<div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="ionic2">

<div markdown="1">

<!-- IONIC 2+ CONTENT STARTS HERE -->

You'll want to initialize Pro Client with your App ID and App Version from Ionic Pro inside of `app.module.ts`.

Modify your `app.module.ts` to include the following code:

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

`YOUR_APP_ID` is the Ionic Pro App ID found on the dashboard for your app:

![App ID Location](/img/docs/pro/app-id-location.png?1)

`APP_VERSION` is the version of the code running for the purposes of tracking code changes. We strongly recommend that this mirrors the version in `package.json` or `config.xml`.

<div class="alert alert-warning" role="alert">It's important to keep the app version up to date because that is how the Error tracking
service will know when regressions have happened, as well as mapping your code to any
Source Maps you've provided.</div>

<!-- END IONIC 2+ CONTENT -->

</div>

</div>
<div role="tabpanel" class="tab-pane" id="ionic1">

<div markdown="1">

<!-- IONIC 1 CONTENT STARTS HERE -->

After installing `@ionic/pro` using NPM, you'll have to copy over the Pro Client files (`node_modules/@ionic/dist`) into `www/lib/ionic-pro`. You can run the following command to do so:

```bash
Mac:
cp -R node_modules/\@ionic/pro/dist www/lib/ionic-pro
Windows:
xcopy node_modules/\@ionic/pro/dist www/lib/ionic-pro
```

After you copy over the files, you'll have to include the Pro Client in your `index.hml` file after `ionic.bundle.js`:

```html
<script src="/lib/ionic-pro/ionic-pro.module.min.js"></script>
```

Then in your main `app.js` file where you set up your app, you should add a `.run` that initializes your app:

```javascript
// This line may be different in your file
angular.module('your-app', ['ionic', 'starter.controllers'])

// add this section:
.run(function(){
    Pro.init('APP_ID', {
        appVersion: 'APP_VERSION'
    });
})
```

`YOUR_APP_ID` is the Ionic Pro App ID found on the dashboard for your app:

![App ID Location](/img/docs/pro/app-id-location.png)

`APP_VERSION` is the version of the code running for the purposes of tracking code changes. We strongly recommend that this mirrors the version in `package.json` or `config.xml`.

<div class="alert alert-warning" role="alert">It's important to keep the app version up to date because that is how the Error tracking
service will know when regressions have happened, as well as mapping your code to any
Source Maps you've provided.</div>

<!-- IONIC 1 CONTENT ENDS HERE -->

</div>

</div>
</div>

</div>

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
To push new updates to your app, first trigger a [build](/docs/pro/deploy/builds/) by making a change to your app
committing it to version control and pushing the changes to Ionic Pro. The triggered build will be viewable in the
Ionic Pro dashboard.

Once the build is available you can deploy it live in your app by either
[manually assigning the build to the channel](/docs/pro/deploy/channels/#assigning-a-build-to-a-channel)
the plugin is configured to listen to, or, if you have specified a
[specific git branch channel to auto-deploy](/docs/pro/deploy/channels/#automating-deployment-from-a-git-branch),
the plugin will auto update once the build has completed.

## Advanced Usage

Want to do something sweet, like allow users to [subscribe to a special Beta Channel](/docs/pro/deploy/tutorials/#setting-up-a-beta-channel) instead of the default Production one?
Do some split testing? Customize the way updates are applied (like checking every 30 minutes, or on login/logout)?
Check out our detailed [Deploy API Documentation](/docs/pro/deploy/api)!
