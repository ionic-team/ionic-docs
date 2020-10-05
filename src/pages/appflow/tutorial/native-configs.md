---
title: 'Native Configs'
previousText: 'Automations'
previousUrl: '/docs/appflow/tutorial/automations'
nextText: 'Environments'
nextUrl: '/docs/appflow/tutorial/environments'
tableOfContents: false
---

Native configs allow you overwrite certain configurations without having to commit changes to version control on a per build/automation basis
<blockquote>
  <p><b>Note:</b>This feature is only available on our <a href="https://ionicframework.com/pricing">Growth plans</a> and above.</p>
</blockquote>

 Few things you can leverage Native Configs for :
* overwrite the unique bundle ID or App ID in [Capacitor configuration](https://capacitorjs.com/docs/basics/configuring-your-app#native-configuration)
* overwrite the App Name as it will appear on the home screen
* overwrite the [Appflow SDK or Deploy Plugin variables and preferences](/docs/appflow/deploy/api#plugin-variables)
* You can also create a native config to set the [DisableDeploy](https://ionicframework.com/docs/appflow/quickstart/deploy#disabling-deploy-for-development) `true` for development and automatically setting it back to `false` when building binaries for release.

### Sample exercise
* Making Staging, QA, and Production versions of you app with different Bundle IDs, App names, and
Deploy Channels so that you can install all the environments on a single device and easily tell the apart. This makes it easy to build your app for multiple environments from the same version of the code.

1. To create a native configuration go to the `Build > Native Configs` tab in the sidebar and click `New native config`.

![Appflow-new-native-config](/docs/assets/img/appflow/tutorial/new-native-config.png) <br><br>
2. For QA version of your app Let's do a different Bundle ID, App name, and Deploy Channel so that you can install all the environments on a single device and easily tell the apart

![Appflow-native-config](/docs/assets/img/appflow/tutorial/native-config.png)<br><br>

3. Now, you can use this Native Configuration in conjunction with an Automation to create a QA build each and every time you push a commit to a specific branch.To create the automation you can enter the branch and simply select QA native config from the drop down.

![Appflow-automation-native-config](/docs/assets/img/appflow/tutorial/automation-native-config.png)<br><br>

4. You can also use Native configuration when triggering a  build manually.

  <b>Note:</b> If you plan to use Native Configurations to modify Bundle IDs with your iOS Package builds, you will need to setup code signing credentials using those alternate Bundle IDs. See our section on <a href="/docs/appflow/package/credentials">Generating Credentials</a> for more information.

  If you are facing any issues or need help understanding any of these concepts [contact support](https://ionic.zendesk.com/hc/en-us)
