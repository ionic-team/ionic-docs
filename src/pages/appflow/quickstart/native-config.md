---
title: 'Create a Native Configuration'
previousText: 'Create an Environment'
previousUrl: '/docs/appflow/quickstart/environment'
nextText: 'Ionic Deploy'
nextUrl: '/docs/appflow/deploy/intro'
---

<blockquote>
  <p><b>Note:</b>This feature is only available on our <a href="/pricing">Growth plans</a> and above.</p>
</blockquote>

[Native Configurations](/docs/appflow/package/native-configs) can be attached to any [package build](/doc/appflow/package)
or automation in order to easily configure some common configuration values that can change between development, staging, and
production environments so you don't need to write logic to modify them or change them manually and commit them to version
control.

These include the ability to:
* overwrite the unique bundle identifier or [id attribute](https://cordova.apache.org/docs/en/latest/config_ref/#widget) in the `config.xml`
* overwrite the App Name as it will appear on the home screen
* overwrite the [Appflow SDK/Deploy Plugin variables and preferences](/docs/appflow/deploy/api#plugin-variables)

In this part of the tutorial we'll setup our `Development` native config to use a unique bundle id so that we can
install the development version of the app and the production version of the app on the same device and we'll change
the App Name too so we can tell them apart easily. We'll also modify the [deploy channel](/docs/appflow/deploy/channels)
the development version listens to so that we can assign updates to that channel first to make sure they work before we
assign them to the production channel

## Create a Native Configuration

To create a native config go to the `Package > Native Configs` tab in the sidebar and click `New native config` in the top right.

Then we'll:
* Name the configuration `Development`
* Overwrite the unique bundle id with `com.snapcats.demo.development`
* Overwrite the app name with `Snapcats - Dev`
* Overwrite the deploy channel to be `Development`

![Create Native Config](/docs/assets/img/appflow/gif-new-native-configs.gif)


## Add the Native Config to an Automation
To take full advantage of automating your development environment you'll want to add the native config to the automation
we created earlier. Click the `Edit` from the options icon on the right of the automation and select the environment from
the dropdown and click save.

![Add Native Config to Automation](/docs/assets/img/appflow/gif-add-native-config.gif)

Now your apps should automatically use a different bundle id, name, and deploy channel between your development and production
builds meaning you can easily install both environments on the same device and tell them apart! 🔥

![Multiple Enviroments on a Device](/docs/assets/img/appflow/ss-multiple-envs-device.png)

