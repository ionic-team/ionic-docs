---
layout: fluid/pro_docs_base
category: pro-advanced
id: pro-migration
title: Cloud Migration - Ionic Pro Documentation
body_class: 'pro-docs'
hide_header_search: true
dark_header: true
---

# Migrate from Ionic Cloud

Below you'll find guides and resources to help you get your app moved over from the Ionic Cloud dashboard to the new Ionic Pro service

<div class="alert alert-warning" role="alert"><h3>Migrating from Ionic Cloud to Ionic Pro is a manual process.</h3>But it's easy! Follow along and we'll make sure you're up to speed in no time.</div>

## Legacy Paid Plans

If you were paying for Ionic Cloud, then your login has been migrated over to the new Ionic Pro dashboard! Send an email to <a href="mailto:help@ionic.io">help@ionic.io</a> to migrate your paid plan to the new Pro service.

To start using your new account, just head over to [dashboard.ionicjs.com](https://dashboard.ionicjs.com/apps) and log in with your existing Cloud credentials.

<p class="paid-notice">
  Ionic Pro is a new service, so once you start using the new dashboard, any changes you make to your account may not be reflected on the legacy dashboard.
</p>

## Moving Apps to the new service

<script src="https://fast.wistia.com/embed/medias/tpqpm4rmfl.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_tpqpm4rmfl videoFoam=true" style="height:100%;width:100%">&nbsp;</div></div></div>

Migrating apps over to the new Ionic Pro service is a manual process and your existing channel/deploy/view data *will not* transfer over to the new system. Essentially you're creating a new app on the Pro dashboard and linking together the new products and services.

First, be sure to log in using your existing credentials in [the Ionic Pro Dashboard](https://dashboard.ionicjs.com). This will ensure your account is ready to go.

To begin the linking process, run the following commands in your project directory:

```bash
ionic config set -g backend pro
ionic link --create
```

`ionic link` will walk you through creating a new app in the Pro dashboard as well as link you to your new git remote. `ionic upload` will **no longer function**, instead, you use the new [git workflow](/docs/pro/basics/git/) to push code up to us. Here's an example:

```bash
git add -p
git commit -m 'My awesome commit'
git push ionic master
```

Even though you may have followed along with the directions above, we recommend giving the [getting started tutorial](/docs/pro/basics/getting-started/#linking-an-existing-app) a watch just to see how everything works.

After you have linked your app, follow the guides below to migrate each individual service. The only service that requires actual migration is Deploy, for Package & Ionic View you'll begin using the new system isntead. If you are using Push or Auth, you'll also have to migrate those to a different service.

## Services to Migrate

Many of the features of Ionic Cloud (along with a whole host of new ones) are integrated into the Pro experience.  Check out these guides to see how they may have changed, and what needs to be done to get set up.

* [Migrating Live Deploy](/docs/pro/migration/live-deploy.html)
* [Migrating to the new Ionic View](/docs/pro/migration/view.html)
* [Using the new Package Service](/docs/pro/migration/package.html)
* [Setting up the new Monitoring Service](/docs/pro/monitoring/)
* [Migrating off of Ionic Push](/docs/pro/migration/push.html) (Shutting down Jan 31st, 2018)
* [Migrating off of Ionic Auth](/docs/pro/migration/auth.html) (Shutting down Jan 31st, 2018)
