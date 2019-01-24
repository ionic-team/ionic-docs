---
title: 'Create an Automation'
previousText: 'Build a Native Binary'
previousUrl: '/docs/appflow/quickstart/package'
nextText: 'Create an Environment'
nextUrl: '/docs/appflow/quickstart/environment'
---

<blockquote>
  <p><b>Note:</b>This feature is only available on our <a href="/pricing">Growth plans</a> and above.</p>
</blockquote>

[Automations](/docs/appflow/automation/intro) enable you and your team to utilize the full CI/CD powers of Appflow. You can create automations
that trigger [package builds](/docs/appflow/package/builds) and [deploy builds](/docs/appflow/deploy/builds)
every time your team checks in new code to a given branch and you can even configure the automations to use different
[environments](/docs/appflow/automation/environments#custom-environments) and [native configurations](/docs/appflow/package/native-configs)
so that you can build different versions of your app for development, staging, and production.


## Create a Development Android Automation
Since we were able to [successfully build an android binary](/docs/appflow/quickstart/package) we can now create
an automation that triggers an Android Debug build every time a developer pushes code to the `development` git branch.
This way the entire team can easily see when the builds break and track down the exact commit quickly for fast debugging. 

To get started, navigate to the `Automate` tab within the desired app and click the `New Automation` button in the top right.

![New Automation](/docs/assets/img/appflow/ss-new-automation.png)

You'll then need to fill in the configuration options:
* <b>Name:</b> - The name you'd like to give to the automation.
* <b>Git Branch:</b> - The branch you'd like to trigger the automation from. <b>Note: * is a wildcard and will match anything</b>
* <b>Automation Type:</b> - Whether you'd like to build a [package build](/docs/appflow/package) (binary) or a [web build](/docs/appflow/deploy) (live update).
* And any configuration details associated with the automation type

![New Automation Form](/docs/assets/img/appflow/gif-new-automation.gif)

Now that the automation is created any time a developer pushes to the `development` branch a new Android `debug` type
build will automatically start and we can view all the builds associated with an automation when viewing the automation
detail page by clicking the automation from the list 🚀.

![Automation Detail](/docs/assets/img/appflow/ss-automation-detail.png)
