# Using Automations

## Managing Automations

Creating and customizing automations is simple.  To get started, navigate to the `Automate` tab within the desired app.

To **create a new automation**, click the `New Automation` button on the top right of the `Automate` dashboard. When clicked, the automation customization form will appear, which has several fields available to customize the automation (Read more about these [below](#customizing-automations)). 

To **edit an automation**, click the three dots next to the one you'd like to modify.

## Customizing Automations

There are a number of customizations available to specify the specific behavior of a given automation. They are shown on the create/edit automation form below.

### Basic Automation Info

All automations need a name and git branch to trigger from. Whenever code is pushed to the selected branch, the automation will run.

<img src="/docs/assets/img/pro/ss-automation-create-type.png" class="browser" />

#### Fields

* **Name:** A name to identify the automation task.
* **Git Branch:** The branch which will trigger the automation.  This will run a build any time a `git push` is made to the specified branch.
* **Automation Type:** The type of job this automation will run.

In addition to name and git branches, automations have a number of customizations available depending on the type of job selected.

### Package Automations

Package automations create native builds which can be downloaded and run on devices. They have the following customizations:

<img src="/docs/assets/img/pro/ss-automation-create-package.png" class="browser" />

#### Fields

* **Environment:** The [custom build environment](/docs/pro/builds/environments#custom-environments) (if any) to use when this automations is triggered.
* **Target Platform:** The platform being targeted, can be Android or iOS (for either Xcode 8 or 9)
* **Build Type:** The type of build to create. Options depend on the selected platform.
* **Security Profile:** Which security profile to use. Learn more about them [here](/docs/pro/package/profiles.html).
* **Webhook:** (optional) If specified, a POST with information about completed builds will be sent to the entered URL.  Learn more about their content [here](/docs/pro/automation/webhooks).

### Web Automations

Web automations build the javascript portion of an application and interface with the [Deploy](/docs/pro/deploy) service to enable live app updates.

<img src="/docs/assets/img/pro/ss-automation-create-web.png" class="browser" />

#### Fields

* **Environment:** The [custom build environment](/docs/pro/builds/environments#custom-environments) (if any) to use when this automations is triggered.
* **Channel:** The [Deploy Channel](/docs/pro/deploy/channels) where web builds from this automation will be assigned.
* **Webhook:** (optional) If specified, a POST with information about completed builds will be sent to the entered URL.  Learn more about their content [here](/docs/pro/automation/webhooks).