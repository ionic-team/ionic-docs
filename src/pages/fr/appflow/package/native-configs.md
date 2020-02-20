---
previousText: 'Adding Credentials'
previousUrl: '/docs/appflow/package/adding-credentials'
nextText: 'Using Ionic CLI'
nextUrl: '/docs/appflow/package/cli'
---

# Native Configurations

<blockquote>
  <p><b>Note:</b>This feature is only available on our <a href="/pricing">Growth plans</a> and above.</p>
</blockquote>

Native configs allow you overwrite certain configurations without having to commit changes to version control on a per build/automation basis such as:

* overwrite the unique bundle identifier or [id attribute](https://cordova.apache.org/docs/en/latest/config_ref/#widget) in the `config.xml`
* overwrite the App Name as it will appear on the home screen
* overwrite the [Appflow SDK or Deploy Plugin variables and preferences](/docs/appflow/deploy/api#plugin-variables)

This makes it easy to build your app for multiple environments from the same version of the code. If using an [Automation](/docs/appflow/automation/intro), you can trigger multiple automations from the same branch that will produce different builds.

Common use cases are:

* Making Staging, QA, and Production versions of you app with different Bundle IDs, App names, and Deploy Channels so that you can install all the environments on a single device and easily tell the apart
* Leaving the [DisableDeploy](/docs/appflow/deploy/api#disabledeploy) `true` for development and automatically setting it back to `false` when building binaries for release

<blockquote>
  <b>Note:</b> If you plan to use Native Configurations to modify Bundle IDs with your iOS Package builds, you will need to setup code signing credentials using those alternate Bundle IDs. See our section on <a href="/docs/appflow/package/credentials">Generating Credentials</a> for more information.
</blockquote>

To create one go to the `Package > Native Configs` tab in the sidebar and click `New native config`.

![Native configs](/docs/assets/img/appflow/ss-native-configs.png)