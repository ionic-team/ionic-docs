---
title: 'Web Build and Web Previews'
previousText: 'Project Creation and Git'
previousUrl: '/docs/appflow/tutorial/start'
nextText: 'Building for Native 101'
nextUrl: '/docs/appflow/tutorial/android'
tableOfContents: false
---

This part explores Web Previews which allow you to quickly share the web version of your App to see how all of your web components come together.

## Preparing a web build and Web Preview

Now, that you have created a new App and have commits visible in your Appflow Dashboard.

<br> You can get started with Preparing a web build and view it on Web Previews.<br>

1. To prepare a web build, There are two ways:
	1. Click the Start build icon from the Commits tab
	![Appflow-build-from-commits](/docs/assets/img/appflow/tutorial/build-from-commit.png)
	OR,
	2.  Click the New build button in the top right from the Build > Builds tab
	![Appflow-build-new-build](/docs/assets/img/appflow/tutorial/new-build.png)

2. Select the Initial Commit and then select the Target platform as Web and enable Destinations as web preview to enable preview for this particular build as shown below. <br> Select the `latest` build stack which is most preferred. <br>
	![Appflow-trigger-web-build](/docs/assets/img/appflow/tutorial/trigger-web-build.png)
3. Click build and the logs for your build instance should show up.
Once, the build is successful you can click the preview button to view the preview of your first Starter Application. <br>

  ![Appflow-build-success-preview](/docs/assets/img/appflow/tutorial/build-success-preview.png)


Now, you can see the web preview of your starter project.

![Appflow-starter-web-preview](/docs/assets/img/appflow/tutorial/starter-web-preview.png)

***additional Features***

* You can share your web-preview with ease using the share feature (top-right) with anyone. This can help expedite the process of development and design reviews.

* For better UI Interaction using a device, you scan the QR code (bottom-right) with any android/iphone camera to view the same web preview in your device browser.


* You can also download the artifact for this build by clicking on the build artifact on the right side.

* To know more about the Web Previews and related concepts refer [Docs](https://ionicframework.com/docs/appflow/web-previews)

<hr>

You can use this [repository](https://github.com/ionic-team/tutorial-appflow/tree/part-1_web_builds) to compare your starter project and make changes if necessary.

If you are facing any issues or need help understanding any of these concepts [contact support](https://ionic.zendesk.com/hc/en-us)
