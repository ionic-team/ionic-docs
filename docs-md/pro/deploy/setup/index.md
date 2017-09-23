---
layout: fluid/pro_docs_base
category: pro-deploy
id: pro-live-deploy-setup
title: Live Deploy Setup - Ionic Pro Documentation
body_class: 'pro-docs'
hide_header_search: true
dark_header: true
---

# Deploying

Ionic Pro's Deploy feature makes it easy to deploy app updates in real time without going through a traditional app store submission process for the vast majority of business logic, UI, and style changes.

The Deploy feature works with the Ionic Pro [Git Workflow](/docs/pro/basics/git/) to deploy new code updates in production (or testing) apps.

*Note: The Deploy feature only works on binary compatible changes, meaning if you rely on native code updates you must resubmit to the app store first before using Deploy.*

## Installation

<script src="https://fast.wistia.com/embed/medias/2702mkf530.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_embed wistia_async_2702mkf530" style="height:400px;width:640px">&nbsp;</div>

The Ionic Plugin manages fetching and applying remote app updates. To use Ionic Pro's Deploy feature, you must first [Set up a Channel](/docs/pro/channels.html) to poll for updates from.

### Setting up a Channel

Every app comes with two default channels: **Master**, and **Production**.

Common use cases are using a **Production** Channel for your App Store binaries, and the **Master** channel to run a native binary on your phone during development that gets automatically updated.

Once you've set up a Channel, just click **Set Up Deploy** next to that Channel and it will walk you through the options available and generate the Command Line command that you should run.

To create new channels beyond these two, you must be a member of an organization with a Business plan subscription. To add new channels, simply view the channels list by going to Code -> Channels, and then click the New Channel button.

### Installing Ionic Pro Plugin

The Ionic Pro plugin comes with Ionic Pro's Deploy feature for detecting and syncing your app with updates that you've pushed to channels.

To install the plugin, we recommend following the automatic instructions after clicking "Set Up Deploy" on the channels list:

To install the plugin manually, run the following command in the root of your Ionic app, making sure to substitute the correct values for your app:

```bash
cordova plugin add cordova-plugin-ionic --save --variable APP_ID="YOUR_APP_ID" --variable CHANNEL_NAME="YOUR_CHANNEL_NAME" --variable UPDATE_METHOD="background"
```

Where `YOUR_APP_ID` is the ID of the app in Ionic Pro, and `YOUR_CHANNEL_NAME` is the name of a channel. Make sure to use the exact name of your channel, including the exact casing.

## Usage

To push new updates to your app, first push a new build using the [Git Workflow](/docs/pro/basics/git/). This will create a new build viewable in the Ionic Pro dashboard.

To get that new build live in your app using Deploy, there are two options. Either [manually deploy the build to the channel](/docs/pro/channels.html#deploying-to-a-channel) defined in the plugin above (the "Production" channel, by default), or, if you have specified a [specific git branch channel to auto-deploy](/docs/pro/channels.html#automating-deployment-from-a-git-branch), the Deploy plugin will auto update once the build has completed.

<script src="https://fast.wistia.com/embed/medias/00mgfso2ak.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_embed wistia_async_00mgfso2ak" style="height:400px;width:640px">&nbsp;</div>
