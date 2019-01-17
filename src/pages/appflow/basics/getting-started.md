# Getting Started with Ionic Appflow

If you're new to Ionic Appflow, please read the [Welcome](/docs/appflow/basics/welcome/)
introduction for a quick overview of Ionic Appflow and instructions on creating an account.

## Install Ionic CLI

Ionic Appflow uses the latest version of the Ionic CLI to interface between your local code and our tools and services.
To make sure you're using the latest CLI, upgrade using the following command:

```bash
npm install -g ionic
```

Note: you may need to add `sudo` to this command on Mac/Linux.

## Starting a New App

If you are looking to create a brand new App to use with Ionic Appflow, you can either start the process in
[your dashboard](https://dashboard.ionicframework.com) or use the CLI locally.
If you already have an App you'd like to link, skip this step.

To create a new app, run the `ionic start` command, or follow the official
[Ionic Framework Getting Started](/getting-started) guide.

If this is your first time create an App on Appflow, you may have to perform some
additional steps that the CLI will walk you through such as logging into your account and setting up SSH keys.

Once the command finishes, you'll be prompted to create a new Ionic Appflow app or link to an existing one.
Go ahead and choose the option you'd like to do.

## Linking an Existing app

Already have an existing Ionic app you'd like to link?
No problem. Run `ionic link` in the directory of that app to connect it to Ionic Appflow:

```bash
cd myApp
ionic link
```

The command will prompt you to create a new Ionic Appflow app or link to an existing app.

If this is your first time running `ionic link` you may be prompted to perform
additional steps such as logging in to your Appflow account and setting up your SSH keys.

## Pushing your Code to Ionic

Now that you are logged into your Ionic Appflow account from the CLI and have an app you'd like to use, the next
step is to push commits to your Ionic Appflow account.

Follow the [Git Workflow](/docs/appflow/basics/git/) to learn more about the workflow you should
use while developing your App with Ionic Appflow.
