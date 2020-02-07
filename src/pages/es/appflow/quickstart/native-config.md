---
title: 'Crear una Configuración Nativa'
previousText: 'Crear un entorno'
previousUrl: '/docs/appflow/quickstart/environment'
nextText: 'Despliegue Iónico'
nextUrl: '/docs/appflow/deploy/intro'
---

<blockquote>
  <p><b>Nota:</b> Esta característica solo está disponible en nuestros <a href="/pricing">planes de crecimiento</a> y superiores.</p>
</blockquote>

[Native Configurations](/docs/appflow/package/native-configs) allow you to easily modify common configuration values that can change between different environments (development, production, staging, etc.) so you don't need to use extra logic or manually commit them to version control. Native configurations can be attached to any [Package build](/doc/appflow/package) or [Automation](/doc/appflow/automation).

You can use native configs to:

* Overwrite the unique bundle identifier or [id attribute](https://cordova.apache.org/docs/en/latest/config_ref/#widget) in `config.xml`
* Overwrite the App Name as it will appear on the home screen of a device
* Overwrite the [Appflow SDK (Deploy Plugin) variables and preferences](/docs/appflow/deploy/api#plugin-variables)

In this part of the tutorial, we'll setup a native configuration for `Development` to:

* Use a unique bundle id so that we can install both the development version of the app and the production version of the app on the same device
* Change the App Name so we can tell the two installations apart once they're installed on the device
* We'll also modify the [Deploy Channel](/docs/appflow/deploy/channels) that the development version of the app listens to so that we can assign updates to that channel first to make sure they work (before we assign them to the `production` Channel)

## Create a Native Configuration

To create a native config, go to the `Package > Native Configs` tab in the Appflow Dashboard sidebar and click `New native config` in the top right.

Next:

* Name the configuration `Development`
* Overwrite the unique bundle id with `com.snapcats.demo.development`
* Overwrite the app name with `Snapcats - Dev`
* Overwrite the deploy channel to be `Development`

![Create Native Config](/docs/assets/img/appflow/gif-new-native-configs.gif)

## Add the Native Config to an Automation

To take full advantage of automating your development environment, you'll want to add the native config to the automation we created earlier.

In your `Automations` tab, click `Edit` from the `Options` icon on the right of your automation, select the configuration from the `Native Config` dropdown and click `Save`.

![Add Native Config to Automation](/docs/assets/img/appflow/gif-add-native-config.gif)

Now your apps should automatically have a different `bundle id`, app name, and deploy channel between your development and production builds. This means you can install both your development and production applications on the same device and easily tell them apart! 🔥

<blockquote>
  <b>Note:</b> If you plan to use Native Configurations to modify Bundle IDs with your iOS Package builds, you will need to setup code signing credentials using those alternate Bundle IDs. See our section on <a href="/docs/appflow/package/credentials">Generating Credentials</a> for more information.
</blockquote>

![Multiple Enviroments on a Device](/docs/assets/img/appflow/ss-multiple-envs-device.png)