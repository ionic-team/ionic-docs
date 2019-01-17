# Using Ionic Deploy

Ionic Appflow's Deploy feature makes it easy to deploy app updates in real time without going through a
traditional app store submission process for the vast majority of business logic, UI, and style changes.

The Deploy feature works with the Ionic Appflow [Git Workflow](/docs/appflow/basics/git/) to deploy new code updates
in production (or testing) apps.

*Note: The Deploy feature only works on binary compatible changes (HTML, CSS, JS),
meaning if you rely on native code updates you must resubmit to the app store first before using Deploy.*

## Installation

In order to use Ionic Appflow's Deploy feature you'll need to at a minimum
[install and configure the Deploy Plugin](#installing-ionic-deploy-plugin).


### Installing Ionic Deploy Plugin

The Ionic Deploy plugin comes with Ionic Appflow's Deploy feature for detecting and syncing
your app with updates that you've pushed to channels.

To install the plugin, we recommend following the automatic instructions after clicking "Set Up Deploy"
on the channels list:

To install the plugin manually, run the following command in the root of your Ionic app,
making sure to substitute the correct values for your app:

```bash
cordova plugin add cordova-plugin-ionic --save --variable APP_ID="YOUR_APP_ID" --variable CHANNEL_NAME="YOUR_CHANNEL_NAME" --variable UPDATE_METHOD="background|auto|none" --variable MAX_STORE="3"
```

Where `YOUR_APP_ID` is the ID of the app in Ionic Appflow, and `YOUR_CHANNEL_NAME`
is the name of a [channel](/docs/appflow/deploy/channels). Make sure to use the exact
name of your channel, including the exact casing. [MAX_STORE](/docs/appflow/deploy/api/#max_store)
tells us how many previous versions of code to keep inside your app, this enables you to revert
to those versions quickly, or swap between versions. [UPDATE_METHOD](/docs/appflow/deploy/api/#update_method)
is one of `background | auto | none`. You can read about all the available
[plugin variables in our api docs](/docs/appflow/deploy/api/#plugin-variables).

## Usage

After you have installed and configured the Deploy Plugin you can begin receiving updates in your app.
To push new updates to your app, first send Appflow the version of your app you'd like to build from
by making a change to your app committing it to version control and pushing the changes to Ionic Appflow.
You can then triggering a new build from the commit in the *Deploy* > *Builds* are of the Ionic Appflow dashboard.
You can set the build to automatically be deployed to a channel when it is done or
[manually assign the build to a channel](/docs/appflow/deploy/channels/#assigning-a-build-to-a-channel) later.

![Deploy builds create location](/docs/assets/img/appflow/deploy-builds-create-location.png)

## Advanced Usage

Want to do something sweet, like allow users to [subscribe to a special Beta Channel](/docs/appflow/deploy/tutorials/#setting-up-a-beta-channel) instead of the default Production one?
Do some split testing? Customize the way updates are applied (like checking every 30 minutes, or on login/logout)?
Check out our detailed [Deploy API Documentation](/docs/appflow/deploy/api)!