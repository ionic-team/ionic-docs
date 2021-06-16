---
title: 'Web Build and Web Previews'
previousText: 'Project Creation and Git'
previousUrl: '/docs/appflow/tutorial/start'
nextText: 'Building for Native 101'
nextUrl: '/docs/appflow/tutorial/android'
tableOfContents: true
---

Next up, we'll explore Web Previews, which allow you to quickly share the web version of your app with your coworkers, stakeholders, and more.

> Check out [this branch](https://github.com/ionic-team/tutorial-appflow/tree/part-1_web_builds) of this tutorial's app repository to compare your starter project and make changes if necessary.

## Preparing a web build and Web Preview

Now that you have created a new App and have commits visible in your Appflow Dashboard, you can prepare a web build then view it as a Web Preview. There are two ways to create a web build:

- Click the Start build icon from the Commits tab. ![Appflow-build-from-commits](/docs/assets/img/appflow/tutorial/build-from-commit.png)
- Click the New build button in the top right from the Build > Builds tab. ![Appflow-build-new-build](/docs/assets/img/appflow/tutorial/new-build.png)

2. Select the Initial Commit and then select "Web" as the target platform then toggle "Web preview." Next, select the `latest` build stack. ![Appflow-trigger-web-build](/docs/assets/img/appflow/tutorial/trigger-web-build.png)
3. Click build and the logs for the web build will appear. Once the build is successful, you can click the preview button to view the preview of your first Starter Application.

![Appflow-build-success-preview](/docs/assets/img/appflow/tutorial/build-success-preview.png)

Now, you can see the web preview of your starter project.

![Appflow-starter-web-preview](/docs/assets/img/appflow/tutorial/starter-web-preview.png)

**Notable Web Preview Features**

* You can share your Web Preview with ease using the share feature (top-right). This can help expedite the development and design review process.

* For better UI Interaction using a device, scan the QR code (bottom-right) with any Android/iPhone camera to view the same web preview in your device browser.

* To learn about Web Previews, [see here](https://ionicframework.com/docs/appflow/web-previews).
