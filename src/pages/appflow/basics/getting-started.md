---
layout: fluid/pro_docs_base
category: pro-basics
id: pro-getting-started
title: Getting Started with Ionic Pro - Ionic Pro Documentation
body_class: 'pro-docs'
hide_header_search: true
dark_header: true
---

# Getting Started with Ionic Pro

If you're new to Ionic Pro, please read the [Welcome](/docs/pro/) introduction for a quick overview of Ionic pro and instructions on creating an account.

## Install Ionic CLI

Ionic Pro uses the latest version of the Ionic CLI to interface between your local code and our tools and services. To make sure you're using the latest CLI, upgrade using the following command:

```bash
npm install -g ionic
```

Note: you may need to add `sudo` to this command on Mac/Linux.

## Starting a New App

If you are looking to create a brand new App to use with Ionic Pro, you can either start the process in [your dashboard](https://dashboard.ionicframework.com) or use the CLI locally. If you already have an App you'd like to link, skip this step.

To create a new app, run the `ionic start` command, or follow the official [Ionic Framework Getting Started](/getting-started) guide.

If this is your first time create an App on Pro, you may have to perform some additional steps that the CLI will walk you through such as logging into your account and setting up SSH keys.

Once the command finishes, you'll be prompted to create a new Ionic Pro app or link to an existing one. Go ahead and choose the option you'd like to do.

## Linking an Existing app

Already have an existing Ionic app you'd like to link? No problem. Run `ionic link` in the directory of that app to connect it to Ionic Pro:

```bash
cd myApp
ionic link
```

The command will prompt you to create a new Ionic Pro app or link to an existing app.

If this is your first time running `ionic link` you may be prompted to perform additional steps such as logging in to your Pro account and setting up your SSH keys.

## Pushing your Code to Ionic

Now that you are logged into your Ionic Pro account from the CLI and have an app you'd like to use, the next
step is to push commits to your Ionic Pro account.

Follow the [Git Workflow](/docs/pro/basics/git/) to learn more about the workflow you should use while developing your App with Ionic Pro.

## Pro Client Setup

The Ionic Pro Client gives you access to the Monitoring and Deploy APIs inside of your app.

The first thing you have to do is set up the Pro Client (or update it to the latest version) in your project. Inside of your app directory, make sure you are on the latest version of the Pro Client and App Scripts:

```bash
npm install @ionic/app-scripts@latest @ionic/pro@latest
```

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

`APP_VERSION` is the version of the code running for the purposes of tracking code changes. We strongly recommend that this mirrors the version in `package.json` or `config.xml`.
