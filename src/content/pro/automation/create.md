# Using Automations

## Managing Automations

Creating and customizing automations is simple.  To get started, simply navigate to the `Automate` tab within the desired app.

To **create a new automation**, click the `New Automation` button on the top right of the `Automate` dashboard. When clicked, the automation customization form will appear, which has several fields available to customize the automation (Read more about these [below](#customizing-automations)). 

To **edit an automation**, click the three dots next to the one you'd like to modify.

## Customizing Automations

There are a number of customizations available to specify the specific behavior of a given automation. They are shown on the create/edit automation form below.

<img src="/docs/assets/img/pro/ss-automations-automate-form.png" class="browser" />

### Fields

* **Name:** A name to identify the automation task.
* **Git Branch:** The branch which will trigger the automation.  This will run a build any time a `git push` is made to the specified branch.
* **Environment:** The [custom build environment](/docs/pro/builds/environments#custom-environments) (if any) to use when this automations is triggered.
* **Target Platform:** The platform being targeted, can be Android or iOS (for either Xcode 8 or 9)
* **Build Type:** The type of build to create. Options depend on the selected platform.
* **Security Profile:** Which security profile to use. Learn more about them [here](/docs/pro/package/profiles.html).
* **Webhook:** (optional) If specified, a POST with information about completed builds will be sent to the entered URL.  Learn more about their content [here](/docs/pro/automation/webhooks).
