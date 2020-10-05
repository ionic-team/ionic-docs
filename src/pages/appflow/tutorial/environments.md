---
title: 'Environments'
previousText: 'Native Configs'
previousUrl: '/docs/appflow/tutorial/native-configs'
nextText: 'Native Configs'
nextUrl: '/docs/appflow/tutorial/native-configs'
tableOfContents: false
---


Environments give you a way to customize the build process for your application in order to produce different versions of your applications for different environments from the same code base. All environment variables are accessible to any build scripts that run during the npm run install and npm run build portion of your builds. There are [predefined environment](https://ionicframework.com/docs/appflow/automation/environments#predefined-environments) variables that are available for every build in Appflow.


### Custom environments and scripting


<blockquote>
  <p><b>Note:</b>This feature is only available on our <a href="https://ionicframework.com/pricing">Growth plans</a> and above.</p>
</blockquote>

With custom environments it's easy to create and manage custom sets of key/value pairs
to further customize builds on Ionic Appflow. Common use cases include customizing your build process
in order to build staging & QA versions of your app that connect to different APIs
or to build different white labeled versions of your application.
To get started with custom environments, open the app you wish to work on and navigate in the sidebar to
`Automate -> Environments`, then click `New Environment` on the top right. You should see a form like this:

![Appflow-new-environment](/docs/assets/img/appflow/tutorial/new-environment.png)<br><br>

enter the name and key/value pair as shown above.

As can be noticed, there are 2 different sets of environment variables sections that can be utilized:
* Secrets
* Variables

The only difference is that the secrets are hidden and never shown in the dashboard after they have been added, while
the variables are always available to be read.

The environments dashboard also lists available custom environments along with their configured key/value pairs and secrets keys.

![Appflow-environments-dashboard](/docs/assets/img/appflow/tutorial/environments-dashboard.png)<br><br>

Now, let's try modifying the build script in your package.json file to build for production only when a certain environment is passed.

```
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

Commit the changes made to your package.json file and trigger a new build with the environment added. This should result in a production build of your app.

![Appflow-automation-environment](/docs/assets/img/appflow/tutorial/automation-environment.png)<br><br>

* You can also add the same environment in your automations and in addition to Native configurations as well to further enhance your CI/CD capabilities.
* You can also try replacing the build script with your own bash script that triggers builds based on pre-defined environments. Refer [here](https://ionicframework.com/docs/appflow/automation/environments#usage)

If you are facing any issues or need help understanding any of these concepts [contact support](https://ionic.zendesk.com/hc/en-us)
