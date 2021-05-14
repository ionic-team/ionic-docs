---
title: 'Environments'
previousText: 'Native Configs'
previousUrl: '/docs/appflow/tutorial/native-configs'
nextText: 'Explore more from Appflow'
nextUrl: '/docs/appflow/'
tableOfContents: true
---

Environments give you a way to customize the app build process, producing different versions of your applications for different environments, all from the same codebase. All environment variables are accessible to any build scripts that run during the `npm run install` and `npm run build` portion of your builds. There are [predefined environment](/docs/appflow/automation/environments#predefined-environments) variables that are available for every build in Appflow.

> This feature is only available on our <a href="https://ionicframework.com/pricing" target="_blank">Growth plan</a> and above.

## Production Angular Builds

With custom environments, it's easy to create and manage custom sets of key/value pairs to further customize builds on Ionic Appflow. Common use cases include customizing your build process in order to build staging & QA versions of your app that connect to different APIs or to build different white labeled versions of your application.

To get started with custom environments, navigate in the sidebar to `Automate -> Environments`, then click `New Environment` on the top right. You should see a form like this:

![Appflow-new-environment](/docs/assets/img/appflow/tutorial/new-environment.png)

Enter the name and key/value pair as shown above.

There are 2 different types of environment variables: **Secrets** and **Variables**.

The only difference between them is that the secrets, being hidden/never shown in the dashboard, are for sensitive data that should be protected, such as API keys or user tokens, while variables are always visible and can be used for all sorts of config data.

The environments dashboard also lists available custom environments along with their configured key/value pairs and secrets keys.

![Appflow-environments-dashboard](/docs/assets/img/appflow/tutorial/environments-dashboard.png)

Now, let's try modifying the build script in your `package.json` file to build for production only when a certain environment is passed.

```json
// customize the build script in the package.json
{
...
     "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build --configuration=$BUILD_ENV",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },
...
```

Commit the changes made to your `package.json` file and trigger a new build with the environment added. This should result in a production build of your app.

![Appflow-automation-environment](/docs/assets/img/appflow/tutorial/automation-environment.png)<br /><br />

### Additional Tips

* You can also add the same environment in your automations and Native configurations as well to further enhance your CI/CD capabilities.
* You can also try replacing the build script with your own bash script that triggers builds based on pre-defined environments. [See details here](https://ionicframework.com/docs/appflow/automation/environments#usage).

Congrats on completing the Exploring Appflow tutorial! You can explore the rest of Appflow's automation options [here](/docs/appflow).
