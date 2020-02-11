# Ionic Native Setup

In order to use the Ionic Native plugins, there's just a few quick steps.

<wistia-video video-id="7higisvn9t"></wistia-video>

## Create an App in the Ionic Hub

First, log into the [Ionic Hub](https://dashboard.ionicframework.com), then navigate to the Native Plugins Keys page. 

Click `Assign to App`, then `New App`. Enter a name, then click `Create App`.

Hover over a Native Plugin Key, then click to copy it to your clipboard:

![test](/docs/assets/img/native/native-setup-keys.png)

Next, open up a terminal on your computer.

## Install Tooling

Ensure that you have the latest Ionic CLI installed:

<command-line>
<command-prompt>npm install -g @ionic/cli</command-prompt>
</command-line>

Next, install the Ionic Enterprise Cordova CLI (even if you're using Capacitor). Ionic Native plugins use scoped
packages, which the regular Cordova CLI does not support. All Cordova 
functionality will still work as expected.

<command-line>
<command-prompt>npm uninstall -g cordova</command-prompt>
<command-prompt>npm install -g @ionic-enterprise/cordova</command-prompt>
</command-line>

The Ionic Enterprise Cordova CLI should be installed on each developer's machine.
This is also true for any development build servers that you may use.

## Setup the Ionic App Locally

Sign into your Ionic Account using the same login info as the Ionic Hub:

<command-line>
<command-prompt>ionic login</command-prompt>
</command-line>

Next, create a local Ionic app. Follow the prompts to name the app, pick your preferred JavaScript framework, then choose the "blank" template.

<command-line>
<command-prompt>ionic start</command-prompt>
</command-line>

## Register Your Product Key

Change directory into the Ionic app project folder, then register the product key to this app. When prompted, paste in the `Product Key` value previously copied from the Ionic Hub:

<command-line>
<command-prompt>cd myApp</command-prompt>
<command-prompt>ionic enterprise register</command-prompt>
</command-line>

This only needs to be run once per app. Within the app's directory, a `.npmrc` file is generated and `ionic.config.json` updated. Both of these changes should be committed to version control so that CI/CD systems as well as other team members can restore the plugins from a fresh clone of the app's repository.

## Start Using Plugins

Now you are able to install any of the Ionic Native plugins that you have access to by following the instructions on each plugin's documentation page.

### Cordova

Install Cordova into your project by adding the native platform(s) of choice, then install the Ionic Native plugin:

<command-line>
<command-prompt>ionic cordova platform add ios</command-prompt>
<command-prompt>ionic cordova platform add android</command-prompt>
<command-prompt>ionic cordova plugin add @ionic-enterprise/plugin-name</command-prompt>
</command-line>

### Capacitor

If you don't have Capacitor installed into your Ionic project, follow [the instructions here](https://capacitor.ionicframework.com/docs/getting-started/with-ionic) first. Next, install your plugin of choice and sync the project:

<command-line>
<command-prompt>npm install @ionic-enterprise/plugin-name</command-prompt>
<command-prompt>npx cap sync</command-prompt>
</command-line>

#### Update Native Project Configuration

Some Ionic Native solutions require updating the native project configuration file (such as the iOS' [Info.plist](https://capacitor.ionicframework.com/docs/ios/configuration/) or Android's [AndroidManifest.xml](https://capacitor.ionicframework.com/docs/android/configuration)) before they can be used. You'll find these configurations on each solution's Capacitor installation details. 

To make these one-time manual changes, either use the native tools (Xcode, Android Studio) or edit the config files by hand. From the root directory of your Capacitor project: 

- To edit `Info.plist`, navigate to `iOS` -> `App` -> `App` -> `Info.plist`.
- To edit `AndroidManifest.xml`, navigate to `android` -> `app` -> `src` -> `main` -> `AndroidManifest.xml`.

That's it! Time to add Ionic Native plugins to your app. There's lots to choose from, including [authentication](/docs/enterprise/auth-connect), 
[biometric security](/docs/enterprise/identity-vault), [offline storage](/docs/enterprise/offline-storage), or one of the [common device features](/docs/enterprise/camera).

After you've added a plugin or two, continue building your app using Ionic Framework [UI components](/docs/components).
