---
title: 'Native Configs'
previousText: 'Automations'
previousUrl: '/docs/appflow/tutorial/automations'
nextText: 'Environments'
nextUrl: '/docs/appflow/tutorial/environments'
tableOfContents: true
---

Native configs allow you overwrite certain configurations without having to commit changes to version control on a per build/automation basis.

 A few things you can leverage Native Configs for include:
* Overwrite the unique bundle ID or App ID in [Capacitor configuration](https://capacitorjs.com/docs/basics/configuring-your-app#native-configuration).
* Overwrite the App Name as it will appear on the home screen.
* Overwrite the [Appflow SDK or Deploy Plugin variables and preferences](/docs/appflow/deploy/api#plugin-variables)
* Set the [DisableDeploy](https://ionicframework.com/docs/appflow/quickstart/deploy#disabling-deploy-for-development) `true` for development and automatically set it back to `false` when building binaries for release.

> This feature is only available on our <a href="https://ionicframework.com/pricing" target="_blank">Growth plan</a> and above.

## Create a QA version of your app

With Native Configs, you can make Staging, QA, and Production versions of your app, all installable on the same device and with the ability to easily tell them apart. This makes it easy to build your app for multiple environments from the same version of the code.

1. To create a native configuration, go to the `Build > Native Configs` tab in the sidebar and click `New native config`.

![Appflow-new-native-config](/docs/assets/img/appflow/tutorial/new-native-config.png)

2. For the QA version of your app, we need a different Bundle ID, App name, and Deploy Channel so that you can install it on a single device and easily tell it apart from the development version.

![Appflow-native-config](/docs/assets/img/appflow/tutorial/native-config.png)

3. Now you can use this Native Configuration in conjunction with an Automation to create a QA build each time you push a commit to a specific branch. To create the automation, enter the branch as "QA" and select QA native config from the drop down.

![Appflow-automation-native-config](/docs/assets/img/appflow/tutorial/automation-native-config.png)<br /><br />

4. You can also use Native configuration when triggering a build manually.

<b>Note:</b> If you plan to use Native Configurations to modify Bundle IDs with your iOS Package builds, you will need to setup code signing credentials using those alternate Bundle IDs. See our section on <a href="/docs/appflow/package/credentials">Generating Credentials</a> for more information.
