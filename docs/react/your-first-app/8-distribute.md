---
sidebar_label: Distribute
---

# Build and Deploy your App

Now that you have built your first app, you are going to want to get it distributed so everyone can start using it. The mechanics of building and deploying your application can be quite cumbersome. That is where [Appflow](https://ionic.io/docs/appflow/) comes into play. Appflow allows you to effectively generate web and native builds, push out live app updates, publish your app to the app stores, and automate the whole process. The entire Quickstart guide can be found [here](https://ionic.io/docs/appflow/quickstart).

Below we will run through an overview of the steps.

## Connect Your Repo

Appflow works directly with Git version control and uses your existing code base as the source of truth for Deploy and Package builds. You will first need to integrate with your hosting service, such as GitHub or Bitbucket, or you can push your code directly to Appflow. Once this is completed, Appflow will have access to your code.

For more on connecting your code repository to Appflow, checkout the [Connect your Repo](https://ionic.io/docs/appflow/quickstart/connect) section inside the Appflow docs.

## Install the Appflow SDK

The Appflow SDK (also known as Ionic Deploy plugin) will allow you to take advantage of arguably two of the best Appflow features: deploying live updates to your app and bypassing the app stores. Ionic Appflow's Live Update feature is shipped with Appflow SDK and features the capabilities of detecting and syncing the updates for your app that you have pushed to your identified channels within the dashboard.

To get the Appflow SDK plugin added to your project, you can follow the install instructions within the Appflow Dashboard by clicking on "Install Instructions" inside of the `Deploy > Destinations` section. Alternatively, you can install the plugin manually by excuting the following command in your app's root directory:

```shell
ionic deploy add  \
    --app-id="YOUR_APP_ID" \
    --channel-name="YOUR_CHANNEL_NAME" \
    --update-method="background|auto|none" \
```

For prerequisite and additional instructions on installing the Appflow SDK, visit the [Install the Appflow SDK](https://ionic.io/docs/appflow/quickstart/installation) section inside the Appflow docs.

## Push a Commit

In order for Appflow to access the latest and greatest changes to your code, you will need to push a commit via the version control integration of your choosing. For those that use GitHub or Bitbucket, this would look as follows:

```shell
git add . # stage any changes
git commit -m "added appflow sdk" #  commit staged changes
git push origin main # push the changes from the main branch to your git host
```

After the push is made, you will then see your commit under the `Commits` tab of the Appflow Dashboard. For more on this, take a look at the [Push a Commit](https://ionic.io/docs/appflow/quickstart/push) section inside the Appflow docs.

## Deploy a Live Update

With the Appflow SDK installed and your commit pushed up to the Dashboard, you are ready to deploy a live update to a device. The Live Update feature uses the installed Appflow SDK with your native application to listen to a particular Deploy Channel Destination. When a live update is assigned to a Channel Distination, that update will be deployed to user devices running binaries that are configured to listen to that specific Channel Destination.

To get the live update deployed, a Web build will need to be created. This can be done through the `Start build` icon from the `Commits` tab or by clicking the `New build` button in the top right corner of the `Build > Builds` tab. After selecting the correct commit to deploy, select the `Web` target platform and the `Latest` build stack. Depending on your Appflow plan, you will then be able to include custom environments, if any are configured. Finally, you can enable `Live Update` and pick the Channel to automatically assign the build to once it successfully completes.

Upon completion of the Web Build, additional versioning options are available to you. After completing this section and you have a successful Deploy build, you can then assign it to the same Channel you configured the Appflow SDK to listen to when you installed it by clicking the `Deploy live updates` button in the build detail page. The same can be done by clicking the `Deploy live updates` icon on the build in the `Build > Builds` tab and select the Channel from the dropdown.

To receive this live update, you will need to run the app on a device or an emulator. The quickest and easiest way to do this is through the following command:

```shell
ionic cordova run [ios | android] [options]
```

Assuming the app is configured correctly to listen to the channel you deployed too, the app should immediately update on startup if you have chosen the auto update method during setup. If the background update method was chosen, be sure to stay in the app for about 30 seconds to ensure the update was downloaded. Then, close the application, reopen it, and you will see the updates applied!

To dive into more details on the steps to deploy a live update, as well as additional information such as disabling deploy for development, check out the [Deploy a Live Update](https://ionic.io/docs/appflow/quickstart/deploy) section inside the Appflow docs.

## Build a Native Binary

Next up is a native binary for your app build and deploy process. This is done via the [Ionic Package](https://ionic.io/docs/appflow/package/intro) service. First things first, you will need to create a [Package build](https://ionic.io/docs/appflow/package/builds). This can be done by clicking the `Start build` icon from the `Commits` tab or by clicking the `New build` button in the top right from the `Build > Builds` tab. Then you will select the proper commit for your build and fill in all of the several required fields and any optional fields that you want to specify. After filling in all of the information and the build begins, you can check out it's progress and review the logs if you encounter any errors.

Given a successful Package build, and iOS binary (`.ipa` or IPA) or and Android binary (`.apk` or APK) file becomes available to you. The file can subsequently be downloaded so you can install it on a device by clicking the file name in the `Artifacts` section in the right of the build detail page or clicking the `Download IPA/APK` icon on the build in the `Build > Builds` tab.

Further information regarding building native binaries can be found inside of the [Build a Native Binary](https://ionic.io/docs/appflow/quickstart/package) section inside the Appflow docs.

## Create an Automation

[Automations](https://ionic.io/docs/appflow/automation/intro) enable you and your team to utilize the full CI/CD powers of Appflow. You can create automations that trigger [Package builds](https://ionic.io/docs/appflow/package/builds) and [Deploy builds](https://ionic.io/docs/appflow/deploy/builds) every time your team commits new code to a given branch. The automations can also be configured to use different environments and native configurations for building different versions of your app for development, staging, QA and production.

For more information, visit the [Create an Automation](https://ionic.io/docs/appflow/quickstart/automation) section within the Appflow docs. There you will see details on creating a single automation. However, you can create multiple automations for different branches or workflows and customize them to fit your needs. An important note is that the ability to create an automation is available for those on our [Basic plans](https://ionic.io/pricing) and above.

## Create an Environment

[Package builds](https://ionic.io/docs/appflow/package/builds) and [Deploy builds](https://ionic.io/docs/appflow/deploy/builds) can be futher customized via [Environments](https://ionic.io/docs/appflow/automation/environments). This powerful feature allows you to create different configurations based on the environment variables passed in at build time. When combined with the [Automation](https://ionic.io/docs/appflow/automation/intro) feature, development teams can easily configure development, staging, and production build configurations, allowing them to embrace DevOps best practices and ship better quality updates faster than ever.

Creating an Environment is available for those on our [Basic plans](https://ionic.io/pricing) and above. More information on this can be found in the [Create an Environment](https://ionic.io/docs/appflow/quickstart/environment) section within the Appflow docs.

## Create a Native Configuration

[Native Configurations](https://ionic.io/docs/appflow/package/native-configs) allow you to easily modify common configuration values that can change between different environments (development, production, staging, etc.) so you do not need to use extra logic or manually commit them to version control. Native configurations can be attached to any [Package build](https://ionic.io/docs/appflow/package/intro) or [Automation](https://ionic.io/docs/appflow/automation/intro).

Native configs can be used to:

- Overwrite the unique bundle identifier or [id attribute](https://cordova.apache.org/docs/en/latest/config_ref/#widget) in `config.xml`
- Overwrite the App Name as it will appear on the home screen of a device
- Overwrite the [Appflow SDK (Deploy Plugin) variables and preferences](https://ionic.io/docs/appflow/deploy/api#plugin-variables)

For access to the ability to create a Native Configuration, you will need to be on our [Basic plans](https://ionic.io/pricing) and above. Additional details of this feature can be found in the [Create a Native Configuration](https://ionic.io/docs/appflow/quickstart/native-config) section within the Appflow docs.

## What’s Next?

Congratulations! You developed a complete cross-platform Photo Gallery app that runs on the web, iOS, and Android. Not only that, you have also then built the app and deployed it to you users devices!

There are many paths to follow from here. Try adding another [Ionic UI component](https://ionicframework.com/docs/components) to the app, or more [native functionality](https://capacitor.ionicframework.com/docs/apis). The sky’s the limit. Once you have added another feature run the the build and deploy process again through Appflow to get it out to your users.

Happy app building! 💙
