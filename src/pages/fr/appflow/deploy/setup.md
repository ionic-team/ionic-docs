---
previousText: 'Introduction'
previousUrl: '/docs/appflow/deploy/intro'
nextText: 'Live Update Builds'
nextUrl: '/docs/appflow/deploy/builds'
---

# Using Live Update

Ionic Appflow's Live Update feature makes it easy to deploy app updates in real time without going through a traditional app store submission process for the vast majority of business logic, UI, and style changes.

The Deploy feature works with the Ionic Appflow and requires your app is [connected to a git repo](/docs/appflow/quickstart/connect/) in order for Appflow to access your source code and deploy new code updates..

<blockquote>
  
<b>Note:</b> The Live Update feature only works on binary compatible changes (HTML, CSS, JS), meaning if you rely on native code updates you must resubmit to the app store first before using Live Update.
</blockquote>

## Installation

In order to use Ionic Appflow's Live Update feature you'll need to [install and configure the Appflow SDK](/docs/appflow/quickstart/installation).

## Turning off Updates for Local Development

Your code will get overwritten if the local app codebase points to the same channel as a deployed Live Update build. To avoid this situation, you can turn off live updates for local development. Be sure to turn it back on before committing to source control.

### Capacitor

In the `capacitor.config.json` file, set the following then run `npx cap sync`:

    "cordova": {
      "preferences": {
        "DisableDeploy": "true"
      }
    }
    

Alternatively, you can change the Channel name to one currently not in use using `ionic deploy configure --channel-name="NAME"` ([details here](https://ionicframework.com/docs/cli/commands/deploy-configure)). This make changes to the native project files directly (on Android, `android/app/src/main/res/xml/config.xml` and on iOS, `ios/App/App/config.xml`).

### Cordova

Set the [DisableDeploy](/docs/appflow/deploy/api#disabledeploy) preference to `true` in the `config.xml` file during local development. You can then set it back to `false` before building your binary for release by either manually setting it back or using the [native config feature](/docs/appflow/package/native-configs) if you're building your binaries with the [Package](/docs/appflow/package/intro) feature.

## Advanced Usage

Want to do something sweet, like allow users to subscribe to a special Beta Channel instead of the default Production one? Do some split testing? Customize the way updates are applied (like checking every 30 minutes, or on login/logout)? Check out our detailed [Live Update API Documentation](/docs/appflow/deploy/api)!