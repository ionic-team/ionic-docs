# Ionic Native Setup

In order to use the Ionic Native plugins, there's just a few quick steps.

## Install Tooling

First, ensure that you have the latest Ionic CLI installed:

<command-line>
<command-prompt>npm install -g ionic@latest</command-prompt>
</command-line>

Next, install the Ionic Enterprise Cordova CLI. Ionic Native plugins use scoped
packages, which the regular Cordova CLI does not support. All Cordova 
functionality will still work as expected.

<command-line>
<command-prompt>npm uninstall -g cordova</command-prompt>
<command-prompt>npm install -g @ionic-enterprise/cordova</command-prompt>
</command-line>

The Ionic Enterprise Cordova CLI should be installed on each developer's machine.
This is also true for any development build servers that you may use.

## Obtain Your Product Key

In order to use Ionic Native plugins in your application, you need to register one product key
per app.

Log into the [Ionic Hub](https://dashboard.ionicframework.com) and navigate to the `Native Plugin Keys` section.
Assign the Product Key to an App, then copy the entire Key shown.

## Register Your Product Key

Register the product key for your application using the Ionic CLI. This only needs to be run once per application. From within your app's root directory, run 
the following, then paste in the Product Key when prompted:

<command-line>
<command-prompt>ionic enterprise register</command-prompt>
</command-line>

Within the app's directory, a `.npmrc` file is generated and `ionic.config.json` updated. Both of these changes should be committed to version control so that CI/CD systems as well as other team members can restore the plugins from a fresh clone of the app's repository.

## Start Using Plugins

Now you are able to install Ionic Native plugins that you have access to by following the instructions on each plugin's documentation page.
There's just one command to install and configure each plugin.

<command-line>
<command-prompt>ionic cordova plugin add @ionic-enterprise/plugin-name</command-prompt>
</command-line>

That's it! Time to add Ionic Native plugins to your app. There's lots to choose from, including [authentication](/docs/enterprise/auth-connect), 
[biometric security](/docs/enterprise/identity-vault), [offline storage](/docs/enterprise/offline-storage), or one of the [common device features](/docs/enterprise/camera).