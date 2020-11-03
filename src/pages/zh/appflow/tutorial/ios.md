---
title: 'Advanced Native Builds (iOS)'
previousText: 'Native Builds 101 (Android)'
previousUrl: '/docs/appflow/tutorial/android'
nextText: 'Live Updates'
nextUrl: '/docs/appflow/tutorial/live_updates'
tableOfContents: true
---

Now that's we've learned how to build a native Android app on Appflow, let's do the same for iOS apps. Building for iOS involves a handful of extra steps, including generating App Store certificates and Provisioning Profiles.

> Check out [this branch](https://github.com/ionic-team/tutorial-appflow/tree/part-3_Build_ios) from this tutorial's companion app to compare with your starter project.

## Adding iOS to starter project

Adding iOS to your app is similar to Android - add the `iOS` platform using Capacitor:

```bash
npx cap add ios
```

A native iOS project is created in the root of your project folder.

## Generating App Store Certificate and Provisioning Profile

iOS builds require [generating signing credentials and a provisioning profile](https://ionicframework.com/docs/appflow/package/credentials#android-credentials). Code Signing with a development-type build allows your app to run on a device through Xcode. To create a signing certificate on Appflow, you'll need:
* iOS development provisioning profile
* iOS development signing certificate

You'll also need an Apple Developer account (Individual or Organization). See [comparing memberships](https://developer.apple.com/support/compare-memberships/).

Once you have an Apple developer account, follow the guide on [Generating iOS credentials](https://ionicframework.com/docs/appflow/package/credentials#ios-credentials).

Then, with a certificate and provisioning profile created, you can set up a new signing certificate in Appflow.

## Creating a signing certificate in Appflow

Signing certificates securely store your credentials so you can easily reference them when building your app in the cloud. After you have generated your signing certificate, you must upload it to Ionic Appflow.

To upload your security credentials:

1. Navigate to your App, then to the Build > Certificates tab on the left hand side.

2. Click the Add Profile button to create a new Profile.

![Appflow-create-signing-certificate](/docs/assets/img/appflow/tutorial/create-security-profile.png)

3. Enter a name for the signing certificate. (ex: development_iOS)

![Appflow-add-signing-certificate](/docs/assets/img/appflow/tutorial/add-security-profile.png)

4. Both iOS and Android certifications can be used with one Profile, but for now let's focus on iOS credentials. You'll need to choose the certificate files you generated and upload them as well as put in any passwords needed to access the credentials.

![Appflow-edit-signing-certificate](/docs/assets/img/appflow/tutorial/edit-security-profile.png)

Use the generated `.p12` file for the certificate, the `.mobileprovision` file for the Provisioning Profile, and the password used to generate the .p12 file for the password.

Once that Profile has been created, you can click the Edit button to remove and/or upload your iOS and Android certs.

***Note: Make sure the bundle ID in your app and the Apple developer certificate are matching***

## iOS native build in Appflow

You're now ready to build iOS apps on Appflow! Trigger a new iOS native build just like you did for Android earlier, including the signing certificate you just created.

1. Select the commit.
2. Select Target Platform as `iOS`.
3. Select the latest build Stack.
3. Build Type Development.
4. Select the signing certificate you created earlier (ex: ios_development).

![Appflow-create-ios-build](/docs/assets/img/appflow/tutorial/create-ios-build.png)

Once you click build, you should see the iOS build logs as its created.
