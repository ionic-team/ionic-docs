---
title: 'Builds/Automations'
previousText: 'Deploy To Google Play Store'
previousUrl: '/docs/appflow/destinations/google'
nextText: 'Command-line Deploy'
nextUrl: '/docs/appflow/destinations/cli'
---

A new build, either as the result of a manual build or as a result of an automation, can be deployed to app stores.

Careful selection of build type and signing certificates must be made to produce a build that can be properly uploaded to the app store selected.

![/docs/assets/img/appflow/deploy-to-appstore-builds.png](/docs/assets/img/appflow/deploy-to-appstore-builds.png)

- Build Type
    - Must be `App Store` or `Enterprise` for iOS Xcode builds and `Release` for Android builds.

- Signing Certificate
    - The signing certificate must the one that will sign the build properly for uploading to the correct app store.

- Destinations
    - For Xcode builds you can select Apple App store, for Android builds you can select Google Play Store.
