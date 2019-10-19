# Error Monitoring

Ionic Appflow makes it easy to automatically track runtime errors in your Ionic app, and map it back to your original, non-transpiled source code (TypeScript, ES6, etc.).

## Summary

Tracking runtime errors and crashes in your app helps you respond to issues quickly to reduce customer frustration and major issues with production apps.

Combined with Ionic's Deploy feature, new updates can be rolled out quickly to address problems in real-time.

This lets you:

<div class="condensed">
  <ul spaces="0" level="0" marker="*">
    <li level="0">
      See exactly where errors happen in your original source code even through layers of transpiled code and minification
    </li>
    <li level="0">
      Detect runtime errors in real-time with alerts and notifications
    </li>
    <li level="0">
      Fix errors immediately even in live app store apps
    </li>
  </ul>
</div>

## Getting Started

In order to use Ionic Monitoring you must set up the Pro Client inside of your app. Follow along with our [Pro Client Setup Guide](/docs/pro/basics/getting-started/#pro-client-setup). You should be on at least `1.0.19` of `@ionic/pro`.

After the Pro Client is installed, you'll want to [Add a Source Map](#source-maps) You can also use the API below to manually capture errors and more.

## Source Maps

Source Maps enable the Error service to provide stacktraces that map back to your original TypeScript code, making it easy to pinpoint problems in your code, even through highly minified, production code.

#### Automatically adding Source Maps

New releases of Ionic CLI (3.9.0 and greater) come with a built-in command for syncing Source Maps with Ionic Appflow. This feature requires Ionic 2 or above using `@ionic/app-scripts` 3.1.0 or greater.

To sync Source Maps, run

```bash
ionic monitoring syncmaps
```

The command will prompt for the version of your app these Source Maps correspond to, and then ask you if you'd like to perform a new build to ensure the Source Maps are up to date.

See the note about versions below, as keeping your Source Maps in sync with your app version is crucial for accurate stack trace context.

#### Manually adding Source Maps

To add a Source Map manually, navigate to your app on the [https://dashboard.ionicframework.com/](Ionic Appflow Dashboard), click the "Monitoring" tab, then click "Source Maps" in the upper right.

You can find your Source Maps after doing a dev or prod build in `YOUR_APP/.sourcemaps/`. Upload the `main.js.map` sourcemap for Angular/Ionic 2+, and any other sourcemaps that correspond to your code for other Ionic/Angular versions.

See the note about versions below, as keeping your Source Maps in sync with your app version is crucial for accurate stack trace context.

#### Ensuring Version Accuracy

Keeping your Source Maps in sync with the version of your code running in your app is crucial for accurate stack trace context.

Version numbers *must* follow [semver](http://semver.org/), which ensures that the error tracking service can accurately detect regressions by comparing errors that occur in one version of your app with future releases of that app.

Before doing a release, ensure you've synced Source Maps and make sure to not send new Source Maps for that version in the future.

Note: we are working on automating the process to make it even easier.

## Manual Capture using the Monitoring API

Ionic Appflow Monitoring supports manually capturing errors and also sending log messages.

#### `Pro.monitoring.exception(errorObject)`

Manually capture an error. For example

```typescript
Pro.monitoring.exception(new Error('error'))
```

#### `Pro.monitoring.log(msg, options)`

Capture and send a log message. Options takes a `level` (such as 'error' or 'info').

Example:

```typescript
Pro.monitoring.log('This happens sometimes', { level: 'error' })
```

#### `Pro.monitoring.call(fn)`

Call a function and automatically capture any resulting errors. Example:

```typescript
Pro.monitoring.call(() => {
  throw new Error('error');
})
```

#### `Pro.monitoring.wrap(fn)`

Return a function that will automatically track any errors. Example:

```typescript
const newFn = Pro.monitoring.wrap(() => {
  throw new Error('error');
})
newFn();
```