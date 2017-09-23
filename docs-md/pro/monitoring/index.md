---
layout: fluid/pro_docs_base
category: pro-monitoring
id: pro-error-monitoring
title: Runtime Error Monitoring - Ionic Pro Documentation
body_class: 'pro-docs'
hide_header_search: true
dark_header: true
---

# Error Monitoring

Ionic Pro makes it easy to automatically track runtime errors in your Ionic app, and map it back to your original, non-transpiled source code (TypeScript, ES6, etc.).

## Summary

Tracking runtime errors and crashes in your app helps you respond to issues quickly to reduce customer frustration and major issues with production apps.

Combined with Ionic's Deploy feature, new updates can be rolled out quickly to address problems in real-time.

This lets you:

<div class="condensed" markdown="1">
* See exactly where errors happen in your original source code even through layers of transpiled code and minification
* Detect runtime errors and crashes in real-time with alerts and notifications
* Fix errors immediately even in live app store apps
</div>

## Getting Started

First, in your app's `index.html` file, add the following script include *immediately following cordova.js*. Replace `APP_ID` and `APP_VERSION` with
the id of your app on https://app.ionicjs.com/, along with the version of your app as found in your `config.xml`.

```html
<script src="https://code.ionicframework.com/services/ionic-pro.min.js" data-app-id="APP_ID" data-app-version="APP_VERSION"></script>
```

<div class="callout danger" markdown="1">
It's important to keep the app version up to date because that is how the Error tracking
service will know when regressions have happened, as well as mapping your code to any
Source Maps you've provided.
</div>

## Angular 2.x+ Integration

For Ionic-Angular apps (Ionic 2.x and Angular 2.x and above), to capture errors automatically from Angular, add this snippet in `app.module.ts`:

```typescript
import { ErrorHandler } from '@angular/core';

declare var window;

export class MyErrorHandler implements ErrorHandler {
  handleError(err: any): void {
    window.Ionic.handleNewError(err);
  }
}
```

Then add this entry to the `providers` in `NgModule`:

```
  providers: [
    // ...,
    [{ provide: ErrorHandler, useClass: MyErrorHandler }] // This line
  ]
```


## Source Maps

Source Maps enable the Error service to provide stacktraces that map back
to your original TypeScript code, making it easy to pinpoint problems
in your code, even through highly minified, production code.

#### Automatically adding Source Maps

New releases of Ionic CLI (3.9.0 and greater) come with a built-in command for syncing Source Maps with Ionic Pro. This feature requires Ionic 2 or above using `@ionic/app-scripts` 2.1.4 or greater.

To sync Source Maps, run

```bash
ionic monitoring syncmaps
```

The command will prompt for the version of your app these Source Maps correspond to, and then ask you if you'd like to perform a new build to ensure the Source Maps are up to date.

See the note about versions below, as keeping your Source Maps in sync with your app version is crucial for accurate stack trace context.

#### Manually adding Source Maps

To add a Source Map manually, navigate to your app on the [https://dashboard.ionicjs.com/](Ionic Pro Dashboard), click the "Monitoring" tab,
then click "Source Maps" in the upper right.

You can find your Source Maps after doing a dev or prod build in `YOUR_APP/.tmp/build/`. Upload all `js.map` files
under the same version string (for example, `main.js.map`).

See the note about versions below, as keeping your Source Maps in sync with your app version is crucial for accurate stack trace context.

#### Ensuring Version Accuracy

Keeping your Source Maps in sync with the version of your code running in your app is crucial for accurate stack trace context.

Version numbers _must_ follow [semver](http://semver.org/), which ensures that the error tracking service can accurately detect regressions by comparing errors that occur in one version of your app with future releases of that app.

Before doing a release, ensure you've synced Source Maps and make sure to not send new Source Maps for that version in the future.

Note: we are working on automating the process to make it even easier.
