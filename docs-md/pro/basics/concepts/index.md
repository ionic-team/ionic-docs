---
layout: fluid/pro_docs_base
category: pro-basics
id: pro-concepts
title: Channels - Ionic Pro Documentation
body_class: 'pro-docs'
hide_header_search: true
dark_header: true
---

# Ionic Pro Concepts

Ionic Pro is a git-based mobile app development lifecycle suite that makes it easy to build, test, and deploy mobile and web apps faster than ever before.

Ionic Pro introduces a few new concepts and gives some familiar concepts new names.

## Builds

The [Git Workflow](/docs/pro/basics/git/) at the core of Ionic Pro takes commits of your app code, builds them in the cloud, and then makes it possible to distribute and manage those builds through a simple Dashboard interface and CLI tools.

A `Build` in Ionic Pro is triggered when running `git push ionic master` with new changes to your app. Each build goes through a CI system that triggers a full build of your app (much like running `npm run build`), and the completed build is stored for later use through one of the core Ionic Pro services.

If you'd like to customize your builds, please see our [Customizing Builds](/docs/pro/basics/concepts/customizing-builds.html) documentation.

## Channels

A Channel **points to a specific Build of your app** that will be shared with specific testers and users. You can change which build a Channel points to whenever you'd like, and can rollback changes as well. Channels are used for both Ionic View and Ionic Deploy.

When you share your App with Ionic View, you're sharing a specific Channel. Whenever you update that Channel (by clicking Deploy next to a Build), users with access to that Channel in View will receive the update.

When you integrate Deploy with your App (by clicking Set Up Deploy on a Channel), the native binary set up with that Channel will poll that Channel for updates whenever it is loaded.

### Setting Up a Channel

Navigate to the **Code** tab in your App, then click on **Channels**. Here you'll be able to create a new Channel.

### Deploying to a Channel

Once you have created a Channel, go back to the **Builds** section of your app. Next to each Build, you'll see a "Deploy" button. Click this to set the Build as active for a Channel.

Once a Build is set as active for a Channel a few things will happen:

Anyone who has access to this Channel (through the Share App Private or Public features) will receive the new Build and be able to look at it in View.

Any native binaries that have been set up with Ionic Deploy for this Channel will receive the new update next time they check in.

### Using Public Channels

In order to share your App publicly in Ionic View, you need to have at least one Channel set to public. Click on a Channel and then click the **Settings** tab, then check "Public in Ionic View" and click Save.

### Automating Deployment from a Git Branch

Instead of clicking Deploy on a Build to set it as active for a Channel, you can also automate your Deployments using Git Branches. By default, we've set up a **Master** Channel for you that automatically deploys from the Master git branch.

To set up a Channel for automatic git->Channel deployments, open that Channel and click on the **Settings** tab. Then type the name of the Channel you want to update from and click Save.

The next time you `git push ionic that-channel` it will automatically deploy to your Channel.
