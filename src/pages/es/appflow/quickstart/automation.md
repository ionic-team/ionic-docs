---
title: 'Create an Automation'
previousText: 'Build a Native Binary'
previousUrl: '/docs/appflow/quickstart/package'
nextText: 'Create an Environment'
nextUrl: '/docs/appflow/quickstart/environment'
---

<blockquote>
  <p><b>Note:</b> This feature is only available on our <a href="/pricing">Growth plans</a> and above.</p>
</blockquote>

[Automations](/docs/appflow/automation/intro) enable you and your team to utilize the full CI/CD powers of Appflow. You can create automations that trigger [Package builds](/docs/appflow/package/builds) and [Deploy builds](/docs/appflow/deploy/builds) every time your team commits new code to a given branch, and you can even configure the automations to use different [environments](/docs/appflow/automation/environments#custom-environments) and [native configurations](/docs/appflow/package/native-configs) for building different versions of your app for development, staging, QA and production.

Note that we are only creating a single automation here, but you can create multiple automations for different branches or workflows and customize them to fit your needs.

## Create an Automation for the Android Development branch

Since we were able to [successfully build an Android binary using Package](/docs/appflow/quickstart/package), we can now create an automation that triggers an Android `Debug` build every time a developer pushes code to the `development` git branch. This way the entire team can easily see when the builds break and track down the exact commit for fast and efficient debugging.

To get started, navigate to the `Automate` tab within the desired app and click the `New Automation` button in the top right.

![New Automation](/docs/assets/img/appflow/ss-new-automation.png)

Next, fill in the configuration options:

* **Name:** The name of the automation.
* **Git Branch:** The branch you'd like to trigger the automation from. **Note: The asterisk (*) is a wildcard and will match anything.**
* **Automation Type:** Decide whether you'd like to build a [Package build](/docs/appflow/package) (binary) or a [Deploy build](/docs/appflow/deploy) (live update).
* Add any additional configuration details associated with the automation type

![New Automation Form](/docs/assets/img/appflow/gif-new-automation.gif)

## Test the Automation

Now that the automation is created, any time a developer pushes to the `development` branch for that application, a new Android `Debug` type build will automatically start. Simply push a new commit to your `development` branch to try out the automation.

You can view all the builds associated with a particular automation by navigating to the `Automations` page in the Appflow Dashboard and clicking the automation from the list. 🚀

![Automation Detail](/docs/assets/img/appflow/ss-automation-detail.png)