# Ionic Native Setup

In order to use the Ionic Native plugins, there's just a few quick steps.

## Create an App in the Ionic Hub

First, log into the [Ionic Hub](https://dashboard.ionicframework.com), then navigate to the Native Plugins Keys page. Click `Assign to App`, then `New App`.

Enter a name, then click `Create App`.

Hover over a Native Plugin Key, then click to copy it to your clipboard:

![test](/docs/assets/img/native/native-setup-keys.png)

Next, open up a terminal on your computer.

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

## Setup the Ionic App Locally

Log into CLI

ionic login


ionic start

Follow the prompts to name the app, pick your preferred JavaScript framework, then choose the "blank" template.


## Register Your Product Key

Register the product key for your application. This only needs to be run once per app. From within your app's root directory, paste in the `Product Key`, previously copied from the Ionic Hub site, when prompted:

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