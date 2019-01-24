---
title: 'Package Build Types'
previousText: 'Package Builds'
previousUrl: '/docs/appflow/package/builds'
nextText: 'Generating Credentials'
nextUrl: '/docs/appflow/package/credentials'
---

There are a few different types of builds you can choose for each platform (iOS, Android) that have different 
characteristics and requirements.

## Android Build Types
### Debug
Debug type Android builds do not require any signing certificates or security profiles and can be sideloaded directly onto
Android devices.

### Release
Release type Android builds are required if you want to release the `apk` on the Google Play Store. They require creating
[android signing credentials](/docs/appflow/package/credentials#android-credentials) and uploading them to
a `Production` type [security profile](/docs/appflow/package/adding-credentials#uploading-credentials).

## iOS Build Types
### Development
Code Signing with a development type builds allows your app to run on device through Xcode.
Development type iOS builds require [generating signing credentials and a provisioning profile](/docs/appflow/package/credentials#android-credentials) using:
* iOS development provisioning profile
* iOS development signing certificate
and should be stored in a `Development` type [security profile](/docs/appflow/package/adding-credentials#uploading-credentials)

### Ad Hoc
Code Signing with a Ad Hoc type builds allows you to distribute your app to devices specified in the provisioning profile.
And are also needed in order to test push notifications.
Ad Hoc type iOS builds require [generating signing credentials and a provisioning profile](/docs/appflow/package/credentials#android-credentials) using:
* iOS distribution provisioning profile
* iOS production signing certificate
and should be stored in a `Production` type [security profile](/docs/appflow/package/adding-credentials#uploading-credentials)

### App Store
Code Signing with a App Store type builds allows you to distribute you app using Testflight and the App Store.
App Store type iOS builds require [generating signing credentials and a provisioning profile](/docs/appflow/package/credentials#android-credentials) using:
* iOS distribution provisioning profile
* iOS production signing certificate
and should be stored in a `Production` type [security profile](/docs/appflow/package/adding-credentials#uploading-credentials)

### Enterprise
<blockquote>
  <p>Enterprise iOS builds are only available on our scale plan and require you to have an
  <a href="https://developer.apple.com/programs/enterprise/" target="_blank">Apple Developer Enterprise Account</a>
  Please <a href="/sales">contact us</a> if you require this feature.</p>
</blockquote>

Code Signing with Enterprise type builds allows you to distribute your app to devices outside of the App Store if you
are building apps for internal use and distribution.
Enterprise type iOS builds require [generating signing credentials and a provisioning profile](/docs/appflow/package/credentials#android-credentials) using:
* iOS distribution provisioning profile
* iOS production signing certificate
and should be stored in a `Production` type [security profile](/docs/appflow/package/adding-credentials#uploading-credentials)
