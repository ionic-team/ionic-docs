# Managing Automations

Creating new automations is simple.  To get started, simply navigate to the `Automate` tab within the desired app:

<img style="width: 230px" src="/docs/assets/img/pro/ss-automations-automate-tab.png" class="browser" />

## Creating Automations

To create a new automation, click the `New Automation` button on the top right of the `Automate` dashboard.

<img src="/docs/assets/img/pro/ss-automations-dashboard-new.png" class="browser" />

## Editing Automations

To edit an automation, click the three dots next to the one you'd like to modify.

<img src="/docs/assets/img/pro/ss-automations-dashboard-settings.png" class="browser" />

## Automation Fields

<img src="/docs/assets/img/pro/ss-automations-automate-form.png" class="browser" />

### Name

A name to remember your automation by.

### Git Branch

The branch which will trigger your automation.  This will run your build any time someone makes a `git push` to the specified branch.

### Target Platform

The platform you're targeting, can be Android or iOS (for either Xcode 8 or 9)

### Build Type

The type of build you'd like to create. Options depend on the selected platform.

### Security Profile

Which security profile you'd like to use. If you have no profiles set up, you can learn more about them [here](/docs/pro/package/profiles.html).

### Webhook

(optional) If specified, we'll send a POST with information about completed builds to a webhook of your choice.  You can learn more about their content [here](/docs/pro/automation/webhooks).