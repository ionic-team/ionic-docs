---
title: 'Native Builds 101 (Android)'
previousText: 'Web Build and Web Previews'
previousUrl: '/docs/appflow/tutorial/web-preview'
nextText: 'Advanced Native Builds (iOS)'
nextUrl: '/docs/appflow/tutorial/ios'
tableOfContents: true
---

In this step, we'll create a native Android debug build. This is the easiest option to get started with native builds, since unlike iOS, a signing certificate is not required.

> Check out [this branch](https://github.com/ionic-team/tutorial-appflow/tree/part-2_Build_android) from this tutorial's companion app to compare your starter project.

### Build starter app

You must build your Ionic project at least once before adding any native platforms. To build the web assets of your starter app use the command below:

```
ionic build
```

This creates the `www` folder that Capacitor has been automatically configured to use as the `webDir` in **`capacitor.config.json`**. Learn more about [Building your Ionic App here](https://capacitorjs.com/docs/getting-started/with-ionic#build-your-ionic-app).

### Package for Native

To package your Starter app for Android native using Capacitor, use the command to add the Android platform:

```
npx cap add android
```

This creates an `android/` directory in the root of the project.

Capacitor projects include the native platform as a source artifact. These are entirely separate native project artifacts that should be considered part of your Ionic app (i.e., check them  into source control, edit them in their own IDEs, etc.).

Learn more about [Adding platforms here](https://capacitorjs.com/docs/getting-started/with-ionic#add-platforms).

### Building a Native Binary using Appflow

Make sure you commit your project with the latest changes to your Git for Appflow to access.

> You can build a variety of native build types on Appflow. Refer the docs to [learn more](https://ionicframework.com/docs/appflow/package/build-types).

Now, finding the latest commit in Appflow, click the Start build icon from the Commits tab:

  1. Select Android and Debug
  2. Select the `latest` build stack
  3. Click build

![Appflow-create-android-build](/docs/assets/img/appflow/tutorial/create-android-build.png)

Once the build starts, you should be able to see the logs from the build instance.

### Download the Starter App

After your Starter App build has completed, you can download the .apk file then load it onto your device/simulator of choice to see how it works.

![Appflow-android-build-log](/docs/assets/img/appflow/tutorial/android-build-log.png)

To download the build artifact, click on the above highlighted build artifact link and your download starts. You can also install the `.apk` file on your simulator or device with development mode on.
