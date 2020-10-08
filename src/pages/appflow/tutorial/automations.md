---
title: 'Automations'
previousText: 'Live Updates'
previousUrl: '/docs/appflow/tutorial/live_updates'
nextText: 'Native Configs'
nextUrl: '/docs/appflow/tutorial/native-configs'
tableOfContents: true
---

Now that you are well versed in triggering different build types in Appflow, it's time to automate builds.

Automations enable you and your team to utilize Appflow's full CI/CD powers. You can create automations that trigger native builds and web builds each time your team checks in new code to a given branch and you can even configure them to use different environments and native configurations so that you can build different versions of your app for development, staging, and production.

> This feature is only available on our <a href="https://ionicframework.com/pricing" target="_blank">Growth plan</a> and above.

### Creating an Automation
Let's create an automation for Android Debug builds since you know now how to manually trigger them.

The automation will trigger an Android Debug build every time you push code to the master git branch. To get started, navigate to the `Automate` tab within the starter app and click the `New Automation` button in the top right.

![Appflow-new-automation](/docs/assets/img/appflow/tutorial/new-automation.png)

Next, you can customize the automation using the fields below:

* **Name:** The name of the automation, such as "Android - production."
* **Git Branch:** The branch you'd like to trigger the automation from (ex: master). [More info here](https://ionicframework.com/docs/appflow/automation/create#note-about-git-branch-naming).
* **Automation Type:**  Since we are automating an Android app, select Package build.
* **Build Stack:** You can configure your automations to always use the latest stack or a specific stack. [More info](https://ionicframework.com/docs/appflow/build-stacks).
* **Environments:** You can include any environments that can be used by this automation. Do not select any environments for now.
* **Native configuration:** You can include any Native configuration that can be used by this automation. Do not select any Native configuration for now.

![Appflow-automation-config](/docs/assets/img/appflow/tutorial/automation-config.png)

### Triggering an Automation

Now that the automation is active, anytime a developer pushes to the master branch, a new Android Debug type build will automatically start.

Try making a trivial change, push to your Git host, and the automation should trigger a new build.

You can also view all the builds associated with a particular automation by navigating to the Automations page in the Appflow Dashboard and clicking the automation from the list.

![Appflow-automation-history](/docs/assets/img/appflow/tutorial/automation-history.png)

### Web Automations
You can also create Web automations that create web builds (the JavaScript portion of your application) and can be deployed to the Live update service.

![Appflow-web-automation-config](/docs/assets/img/appflow/tutorial/web-automation-config.png)
