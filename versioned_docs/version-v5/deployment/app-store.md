---
sidebar_label: iOS App Store
---

# iOS App Store Deployment

## Requirements

Submitting an App to the iOS App store requires a few things:

- Xcode
- A Paid Apple Developers account
- A valid provisioning profile
- App Development and Distribution certificates

To enroll in the Apple Developer Program, follow the instructions [listed here](https://developer.apple.com/programs/).

## Generating a release build

If the iOS platform is not already added, be sure to add it:

```shell
$ ionic cordova platform add ios
```

With the platform added, run the build command with the `--prod` flag:

```shell
$ ionic cordova build ios --prod
```

This will generate the minified code for the web portion of an app and copy it over the iOS code base.

From here, open the `.xcworkspace` file in `./platforms/ios/` to start Xcode.

## Generating Signing Certs

Generating certificates for iOS is a bit of an involved process, so be sure to check [Apple's official documentation](https://help.apple.com/xcode/mac/current/#/dev3a05256b8) on what certificates are and how to generate them.

To create the certificates and profiles needed, visit [Apple's member center](https://developer.apple.com/membercenter) and follow the links described in Apple's documentation.

There are two types of certificates that matter here, Development, and Distribution. Development Certificates are just that, meant for development time. They are meant to sign an app and deploy it to devices that the certificate has access to.

Distribution certs are meant for distributing an app to the store. When an app is signed with a Distribution cert, it can be installed on any device.

## Signing the App in Xcode.

After generating the correct certificates, there are options to either have Xcode automatically manage certificates or manually manage them. It's suggested to let Xcode automatically manage certificates. This will make sure that the correct Development and Distribution certs are used, based on the build type selected.

With this option selected, select `Archive` from the `Product > Archive` menu. This will build a version of the app that is ready for distribution in the app stores. After archive has been created, Xcode Organizer is opened.

Xcode Organizer displays a list with builds of the current app. Pick the last build and click 'Upload to App Store'.
There should be a place to select the team followed by some more information on the app and a "Upload" button to click.

If the upload successfully, the app should be listed on [iTunes Connect](https://itunesconnect.apple.com) and listed in 'Activities'.
From there, TestFlight can be enabled for beta testing, or the App can be sent for approval from Apple.

## Updating an app

As an app grows, it will need to be updated with new features and fixes.
An app can be updated by either submitting a new version to Apple, or by using a live update service like Appflow's <a href="https://ionic.io/docs/appflow/deploy/intro" target="_blank">live update feature</a>.

With <strong>Live Updates</strong>, app changes can be pushed in realtime directly to users from the Appflow dashboard, without waiting for App Store approvals.

:::note
In order for the iOS App Store to accept the updated build, the config.xml file will need to be edited to increment the version value, then rebuild the app for release following the same instructions above.
:::
