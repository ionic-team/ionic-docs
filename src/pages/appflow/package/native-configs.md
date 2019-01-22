---
previousText: 'Adding Credentials'
previousUrl: '/docs/appflow/package/adding-credentials'
nextText: 'Using Ionic CLI'
nextUrl: '/docs/appflow/package/cli'
---

# Native Configurations

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
