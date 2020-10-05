---
title: 'Advanced Native Builds (iOS)'
previousText: 'Native Builds 101 (Android)'
previousUrl: '/docs/appflow/tutorial/android'
nextText: 'Live Updates'
nextUrl: '/docs/appflow/tutorial/live_updates'
tableOfContents: false
---


This part of Exploring Appflow exercise consists of building a development build for iOS

1. Building for native (advanced)
    1. Adding iOS to starter project
    2. Generating App Store Certificate and Provisioning Profile
    3. Creating a security profile in Appflow
    4. iOS native build in Appflow


## Adding iOS to starter project

You need ios directory in your project root to build for iOS native and to addios directory, From the root of your starter project run the command
```
npx cap add ios
```
This would add ios directory in the root of your project folder.

```
npx cap sync
```

The sync command updates dependencies, and copies any web assets to your project.

## Generating App Store Certificate and Provisioning Profile

iOS builds require [generating signing credentials and a provisioning profile. ](https://ionicframework.com/docs/appflow/package/credentials#android-credentials)Code Signing with a development type builds allows your app to run on device through Xcode. <br> You can create a security profile using:
* iOS development provisioning profile
* iOS development signing certificate.



You'll need an Apple Developer account (Individual or Organization). See
[comparing
memberships](https://developer.apple.com/support/compare-memberships/).

If you already have a apple developer account you can follow the guide on [Generating iOS credentials](https://ionicframework.com/docs/appflow/package/credentials#ios-credentials)

Once, you have the certificate and provisioning profile, you can continue to create a security profile in Appflow Dashboard.

## Creating a security profile in Appflow

Security Profiles securely store your credentials so you can easily reference them when building your app in the cloud. After you have generated your Security Profile, you must upload it to Ionic Appflow.

To upload your security credentials:

1. Navigate to your App, then to the Build > Certificates tab on the left hand side.

2. Click the Add Profile button to create a new Profile.

	![Appflow-create-security-profile](/docs/assets/img/appflow/tutorial/create-security-profile.png)
<br> <br>

3. Enter a name for the security profile. (ex: development_iOS)
<br> <br>
	![Appflow-add-security-profile](/docs/assets/img/appflow/tutorial/add-security-profile.png)
<br> <br>
4. Both iOS and Android certifications can be used with one Profile, But for now let's only do iOS credentials. You'll need to choose the certificate files you generated and upload them as well as put in any passwords needed to access the credentials.
<br> <br>
	![Appflow-edit-security-profile](/docs/assets/img/appflow/tutorial/edit-security-profile.png)
<br> <br>

Specifically for iOS, use the generated `.p12` file for the certificate, the `.mobileprovision` file for the Provisioning Profile, and the password used to generate the .p12 file for the password.

Once that Profile has been created, you can click the Edit button to remove and/or upload your iOS and Android certs.

## iOS native build in Appflow

All set to build for iOS using Appflow. You can trigger a new iOS native build just like you did for android earlier, and include the security profile you created.

1. Select the commit
2. Select Target Platform as iOS -Xcode 11
3. Select the latest build Stack
3. Build Type Development
4. select the Security Profile you created earlier (ex:ios_development)

	![Appflow-create-ios-build](/docs/assets/img/appflow/tutorial/create-ios-build.png)

Once you click build, you should see the build logs for your iOS build from the instance.

***Note: Make sure the bundle ID in your app and the Apple developer certificate are matching***

<hr>

You can use this [repository](https://github.com/ionic-team/tutorial-appflow/tree/part-3_Build_ios) to compare your starter project and make changes if necessary.

If you are facing any issues or need help understanding any of these concepts [contact support](https://ionic.zendesk.com/hc/en-us)
