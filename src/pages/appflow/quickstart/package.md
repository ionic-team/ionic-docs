---
title: 'Build a Native Binary'
previousText: 'Deploy a Live Update'
previousUrl: '/docs/appflow/quickstart/deploy'
nextText: 'Create an Automation'
nextUrl: '/docs/appflow/quickstart/automation'
---


Next we'll build an Android `Debug` binary using the [Ionic Package](/docs/appflow/package/intro) service.
<blockquote>
<b>Note:</b> If you'd like to build an Android <b>Release</b> binary or <b>any</b> iOS binary, you'll need to
<a href="/docs/appflow/package/credentials">generate signing credentials</a>
and <a href="/docs/appflow/package/adding-credentials">add them to a security profile</a> in the Appflow Dashboard.
</blockquote>

## Start a Package Build

In order to download a binary of your application, you will first need to create a [Package build](/docs/appflow/package/builds).

There are two ways to do this:
* Click the `Start build` icon from the `Commits` tab
![Start Build from Commits](/docs/assets/img/appflow/ss-start-package-build-commits.png)
* Click the `New build` button in the top right from the `Build > Builds` tab
![New Build](/docs/assets/img/appflow/ss-new-package-build.png)

Select the proper commit for your build. There are several required and
optional fields you can specify:
* <b>Target Platform</b> - The platform for your build (iOS or Android)
* <b>Xcode Version (iOS Only)</b> - The Xcode version used to build your iOS binary (use the recommended version if possible)
* [Build Type](/docs/appflow/package/build-types) - The type of build for the given platform (See [iOS build types](/docs/appflow/package/build-types#ios-build-types) or [Android build types](/docs/appflow/package/build-types#android-build-types))
* [Security Profile](/docs/appflow/package/credentials) - The signing credentials for the for the build (if required)
* [Environment](/docs/appflow/automation/environments#custom-environments) - The environment to use to customize your build process
* [Native Config](/docs/appflow/package/native-configs) - The Native Config to use to customize your app configuration

For the quickstart tutorial, select the `Android` platfrom and the `Debug` type build which requires
no other configuration. Once the build begins, you can view the progress and review the
logs if you encounter errors.

![Running Web Build](/docs/assets/img/appflow/gif-start-package-build.gif)

## Downloading the Build

<blockquote>
<b>Note:</b> If you have trouble getting a successful build in the previous step, you can find answers to common Package build errors in
<a href="https://ionic.zendesk.com/hc/en-us/categories/360000410494-Package" target="_blank">this section of our knowledge base</a>.
</blockquote>

A successful Package build yields an iOS binary (`.ipa` or IPA) or an Android binary (`.apk` or APK) file. Once you have a successful build, you can download it so that you can install it on a device by 
clicking the file name in the `Artifacts` section in the right of the build detail page or clicking the 
`Download IPA/APK` icon on the build in the `Build > Builds` tab.

![Download Package Build](/docs/assets/img/appflow/ss-download-package-build.png)
