---
layout: fluid/pro_docs_base
category: pro-basics
id: pro-getting-started
title: Getting Started with Ionic Pro - Ionic Pro Documentation
body_class: 'pro-docs'
hide_header_search: true
dark_header: true
---

# Getting Started with Ionic Pro

If you're new to Ionic Pro, please read the [Welcome](/docs/pro/basics/welcome/) introduction for a quick overview of Ionic pro and instructions on creating an account.

## Install Ionic CLI

Ionic Pro uses the latest version of the Ionic CLI to interface between your local code and our tools and services. To make sure you're using the latest CLI, upgrade using the following command:

```bash
npm install -g ionic
```

Note: you may need to add `sudo` to this command on Mac/Linux.

## Starting a New App

<script src="https://fast.wistia.com/embed/medias/5mpnif6345.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_embed wistia_async_5mpnif6345" style="height:400px;width:640px">&nbsp;</div>

If you are looking to create a brand new App to use with Ionic Pro, you can either start the process in [your dashboard](https://dashboard.ionicjs.com) or use the CLI locally. If you already have an App you'd like to link, skip this step.

To create a new app, run the `ionic start` command, or follow the official [Ionic Framework Getting Started](/getting-started) guide.

If this is your first time create an App on Pro, you may have to perform some additional steps that the CLI will walk you through such as logging into your account and setting up SSH keys.

Once the command finishes, you'll be prompted to create a new Ionic Pro app or link to an existing one. Go ahead and choose the option you'd like to do.

## Linking an Existing app

<script src="https://fast.wistia.com/embed/medias/fnfuwtyenb.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_embed wistia_async_fnfuwtyenb" style="height:400px;width:640px">&nbsp;</div>

Already have an existing Ionic app you'd like to link? No problem. Run `ionic link` in the directory of that app to connect it to Ionic Pro:

```bash
cd myApp
ionic link
```

The command will prompt you to create a new Ionic Pro app or link to an existing app.

If this is your first time running `ionic link` you may be prompted to perform additional steps such as logging in to your Pro account and setting up your SSH keys.

## git push ionic master

Now that you are logged into your Ionic Pro account from the CLI and have an app you'd like to use, the next
step is to push commits to your Ionic Pro account.

Follow the [Git Workflow](/docs/pro/basics/git/) to learn more about the workflow you should use while developing your App with Ionic Pro.
