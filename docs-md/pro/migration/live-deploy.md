---
layout: fluid/pro_docs_base
category: pro-advanced
id: pro-migration
title: Cloud Deploy Migration - Ionic Pro Documentation
body_class: 'pro-docs'
hide_header_search: true
dark_header: true
---

# Migrate from Ionic Cloud Deploy to Ionic Pro Deploy

If you're moving your app from the legacy Ionic Cloud dashbaord and want to keep using Ionic Pro Deploy, here's what you need to do.

## Remove the old plugin

`ionic-plugin-deploy` is no longer needed in Ionic Pro, so you can run:

```bash
cordova plugin rm ionic-plugin-deploy
```

## Remove all your old deploy code

Your app probably has code to check for and download updates using the `ionic-cloud-angular` library. You can safely remove all of this code, as the new service works either automatically or directly on the plugin.

## Set up the new plugin

The Ionic Pro services which take advantage of native device features are now centralized in the `cordova-plugin-ionic` plugin.  

You'll install it as part of the setup process **[here](/docs/pro/deploy/)**.

If you'd like to use custom Deploy logic, you can use the new [Deploy API](/docs/pro/deploy/plugin-api.html) after installing the plugin without an automatic setting.

## Deploy a New Native Build to the App Stores

Because some native plugins were changed, you will have to resubmit a new native binary to the App Stores or your MDM solution.

## All set!

Congrats, you're done!
