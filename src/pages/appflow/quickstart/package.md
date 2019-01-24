---
title: 'Build a Native Binary'
previousText: 'Deploy a Live Update'
previousUrl: '/docs/appflow/quickstart/deploy'
nextText: 'Create an Automation'
nextUrl: '/docs/appflow/quickstart/automation'
---


Next we'll build an Android `debug` binary using the [Ionic Package](/docs/appflow/package/intro) service.
<blockquote>
<b>Note:</b>If you'd like to build an iOS binary or an Android <b>Release</b> binary you'll need to
<a href="/docs/appflow/package/credentials">generate signing credentials</a>
and <a href="/docs/appflow/package/adding-credentials">add them to a security profile</a>.
</blockquote>

## Start a Package Build

In order to download a binary you will first need to create a [package build](/docs/appflow/package/builds).
there are two ways to do this:
* Click the `Start package build` icon from the `Commits` tab
![Start Package Build from Commits](/docs/assets/img/appflow/ss-start-package-build-commits.png)
* Click the `New package build` button in the top right from the `Package > Builds` tab
![New Web Build](/docs/assets/img/appflow/ss-new-package-build.png)

You will need to make sure you've selected the correct commit to build from, and there are several required and
optional fields you can specify depending on the target platform (Android, iOS)
* <b>Target Platform</b> - the platform you wish to build for (iOS & Xcode version or Android)
* [Build Type](/docs/appflow/package/build-types) - The type of build for the given platform ([iOS build types](/docs/appflow/package/build-types#ios-build-types) or [Android build types](/docs/appflow/package/build-types#android-build-types))
* [Security Profile](/docs/appflow/package/credentials) - The signing credentials for the for the build if required
* [Environment](/docs/appflow/automation/environments#custom-environments) - The environment to use to customize your build process
* [Native Config](/docs/appflow/package/native-configs) - The Native Config to use to customize your app configuration

For the quickstart tutorial we will choose the `Android` platfrom and a `Debug` type build which requires
no other configurations.Once the build begins you will be able to watch it's progress and look at the
logs if you encounter errors.

![Running Web Build](/docs/assets/img/appflow/gif-start-package-build.gif)

## Downloading the Build

<blockquote>
<b>Note:</b> If you have trouble getting a successful build in the previous step you can find answers to common package build errors in
<a href="https://ionic.zendesk.com/hc/en-us/categories/360000410494-Package" target="_blank">this section of our knowledge base</a>.
</blockquote>

Once you've got a successful package build you can download it so that you can install it on a device by 
clicking the `Download IPA/APK` button in the top right of the build detail page or clicking the 
`Download IPA/APK` icon on the build in the `Package > Builds` tab.

![Download Package Build](/docs/assets/img/appflow/ss-download-package-build.png)
