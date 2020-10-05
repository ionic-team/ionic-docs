---
title: 'Native Builds 101 (Android)'
previousText: 'Web Build and Web Previews'
previousUrl: '/docs/appflow/tutorial/web-preview'
nextText: 'Advanced Native Builds (iOS)'
nextUrl: '/docs/appflow/tutorial/ios'
tableOfContents: false
---


This part of the exploring Appflow exercise consists of the following topics

1. Building for native 101(android debug)
      1. Build starter app
      2. Package for native
      3. Trigger a Native build using Appflow

## Building for native 101

In this starter exercise let's build an **Android debug** build, which is the simplest with no security profile needed.

### Build starter app

You must build your Ionic project at least once before adding any native platforms.<br>To build the web assets of your starter app use the command below

```
ionic build
```

This creates the `www` folder that Capacitor has been automatically configured to use as the `webDir` in **`capacitor.config.json`**

Learn more about [Building your Ionic App](https://capacitorjs.com/docs/getting-started/with-ionic#build-your-ionic-app)

### Package for Native

To package your Starter app for android native using Capacitor, use the command below accordingly.

```
npx cap add android
```

This creates an `android/` directory in the root of the project.

* Capacitor projects include the native platform as a source artifact.These are entirely separate native project artifacts that should be considered part of your Ionic app (i.e., check them  into source control, edit them in their own IDEs, etc.).

Learn more about [Adding platforms](https://capacitorjs.com/docs/getting-started/with-ionic#add-platforms)

### Building a Native Binary using Appflow

Make sure you commit your project with the latest changes to your Git for Appflow to access.

> You can also select from various different combinations of native builds available on Appflow. Refer the docs to know about all the [available build types.](https://ionicframework.com/docs/appflow/package/build-types)

Now, with the latest commit that you can see in Appflow, Click the Start build icon from the Commits tab

  1. Select Android and Debug
  2. Select the `latest` build stack
  3. Click build

![Appflow-create-android-build](/docs/assets/img/appflow/tutorial/create-android-build.png)

Once the build starts, you should be able to see the logs from the build instance.

### Download the Starter App

Your Starter App is built and you can download the .apk file file to load it onto your device/simulator of choice to see how it works.

![Appflow-android-build-log](/docs/assets/img/appflow/tutorial/android-build-log.png)




To download the build artifact, click on the above highlighted build artifact link and your download starts.
You can also install the `.apk` file on your simulator or device with development mode on.


You can use the repository [HERE]() to compare your starter project and make changes if necessary.

<hr>

You can use this [repository](https://github.com/ionic-team/tutorial-appflow/tree/part-2_Build_android) to compare your starter project and make changes if necessary.

If you are facing any issues or need help understanding any of these concepts [contact support](https://ionic.zendesk.com/hc/en-us)
