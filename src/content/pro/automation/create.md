# Managing Automations

Creating new automations is simple.  To get started, simply navigate to the `Automate` tab within the desired app.

## Creating Automations

To create a new automation, click the `New Automation` button on the top right of the `Automate` dashboard.

<img src="/docs/assets/img/pro/ss-automations-dashboard-new.png" class="browser" />

Upon clicking, the automation customization form will appear (seen below), which has several fields available to customize the automation:


## Editing Automations

To edit an automation, click the three dots next to the one you'd like to modify.

<img src="/docs/assets/img/pro/ss-automations-dashboard-settings.png" class="browser" />

## Customizing Automations

There are a number of customizations available to specify the specific behavior of a given automation. They are shown on the create/edit automation form below.

<img src="/docs/assets/img/pro/ss-automations-automate-form.png" class="browser" />

### Fields

* **Name:** A name to remember your automation by.
* **Git Branch:** The branch which will trigger your automation.  This will run your build any time someone makes a `git push` to the specified branch.
* **Environment:** The [custom build environment](/docs/pro/builds/environments#custom-environments) (if any) to use when this automations is triggered.
* **Target Platform:** The platform you're targeting, can be Android or iOS (for either Xcode 8 or 9)
* **Build Type:** The type of build you'd like to create. Options depend on the selected platform.
* **Security Profile:** Which security profile you'd like to use. If you have no profiles set up, you can learn more about them [here](/docs/pro/package/profiles.html).
* **Webhook:** (optional) If specified, we'll send a POST with information about completed builds to a webhook of your choice.  You can learn more about their content [here](/docs/pro/automation/webhooks).
