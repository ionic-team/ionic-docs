---
layout: fluid/pro_docs_base
category: pro-deploy
id: pro-deploy-channels
title: Deploy Channels - Ionic Pro Documentation
body_class: 'pro-docs'
hide_header_search: true
dark_header: true
---

## Channels

A Channel **points to a specific JavaScript Build or Snapshot of your app**
that will be shared with specific devices listening to that channel for updates.
You can change which build a Channel points to whenever you'd like, and can rollback changes as well.

When you integrate Deploy with your App (by clicking Set Up Deploy on a Channel),
the native binary set up with that Channel will poll that Channel for updates whenever it is loaded.

### Setting up a Channel

Every app comes with two default channels: **Master**, and **Production**.

Common use cases are using a **Production** Channel for your App Store binaries, and the **Master**
channel to run a native binary on your phone during development that gets automatically updated.

Once you've set up a Channel, just click **Set Up Deploy** next to that Channel and it will walk you
through the options available and generate the Command Line command that you should run.

To create new channels beyond these two, you must have a paid Ionic Pro membership. To add new channels,
simply view the channels list by going to Code -> Channels, and then click the New Channel button.


### Assigning a Build to a Channel

Once you have created a Channel, go back to the **Builds** section of your app.
On the right side of each Build, you'll see a "Assign to Channel" icon.

<div style="text-align: center">
  <img style="width: 950px" src="/img/pro/assign-to-channel.png">
</div>

Click this to set the Build as active for a Channel.

Once a Build is set as active for a Channel any native binaries that have been set up with Ionic Deploy
for this Channel will receive the new update next time they check in.

### Automating Deployment from a Git Branch

Instead of clicking "Assign to Channel" on a Build to set it as active for a Channel,
you can also automate your Deployments using Git Branches.
By default, we've set up a **Master** Channel for you that automatically deploys from the Master git branch.

To set up a Channel for automatic deployments, open that Channel and click on the **Settings** tab.
Then type the name of the branch you want to update from and click Save.

The next time you `git push ionic that-branch` it will automatically deploy to your Channel.

Watch this [video tutorial](/docs/pro/deploy/tutorials/#setup-automated-live-deployments) to learn more.
