# Packaging Native Binaries

Ionic Appflow's Package feature makes it easy to build native app binaries for iOS and Android in the cloud. Perfect for automating binary builds and for developers using Windows that want to build iOS apps.

## Getting Started

To start, you'll need to upload iOS and/or Android certificate profiles to enable Package to build your app in the cloud.

Get started with security profiles [here](/docs/appflow/package/credentials).

## Performing a Build

Click on the **Code** tab of your App, you should be at your **Builds** list. Click on the **Package** button for the Build you'd like to get a Native binary for.

In the Package GUI you'll be able to choose the type of Build you want to perform, and the Cert you'd like to use. You'll then be taken to the History tab while the build completes. After the build completes, click Download and you'll get your native binary!

## Native Configs

If your [plan](/pricing) includes the automation features you will have access to make and use *Native Configs* as part of
you package builds and automations. Native configs allow you to overwrite the Bundle ID and the App Name as well as the
Deploy Plugin configuration without having to commit the changes to version control. That way you can build your app for
diffent environments from the same version of the code. If using the [automation](/docs/appflow/automation/intro) you can
trigger multiple automations from the same branch that will produce different builds.

Common use cases are for making Staging, QA, and Production versions of you app with different Bundle IDs, App names, and
Deploy Channels so that you can install all the environments on a single device and easily tell the apart. To create
one make sure you've upgrade to a plan that includes them and go to the *Package* > *Native Configs* tab in the sidebar
and click `New native config`.

![Native configs](/docs/assets/img/appflow/ss-native-configs.png)