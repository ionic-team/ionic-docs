---
previousText: "Environment Setup"
previousUrl: "/docs/intro/environment"
nextText: "Packages & CDN"
nextUrl: "/docs/intro/cdn"
contributors:
  - rtpHarry
  - dwieeb
---

# Installing Ionic

Ionic apps are created and developed primarily through the Ionic [command-line](/docs/reference/glossary#cli) utility. The Ionic CLI is the preferred method of installation, as it offers a wide range of dev tools and help options along the way. It is also the main tool through which to run the app and connect it to other services, such as Appflow.

<aside id="ionic-wizard">
  <div class="heading-group">
    <header>Try our App Wizard</header>
    <p>Use our App Wizard to generate an Ionic project visually. Choose a template, custom colors, app icon, and JavaScript Framework to get building quicker.</p>
  </div>
  <div>
    <a href="/start" class="wizard-button">Open Wizard <ion-icon name="arrow-forward-outline"/></a>
  </div>
</aside>

## Install the Ionic CLI

Before proceeding, make sure your computer has [Node.js](/docs/reference/glossary#node) installed. See [these instructions](/docs/intro/environment) to set up an environment for Ionic.

Install the Ionic CLI with npm:

```shell
$ npm install -g @ionic/cli
```

If there was a previous installation of the Ionic CLI, it will need to be uninstalled due to a change in package name.

```shell
$ npm uninstall -g ionic
$ npm install -g @ionic/cli

```

> The `-g` option means _install globally_. When packages are installed globally, `EACCES` permission errors can occur. Consider setting up npm to operate globally without elevated permissions. See [Resolving Permission Errors](/docs/developing/tips#resolving-permission-errors) for more information.

## Start an App

Create an Ionic app using one of the pre-made app templates, or a blank one to start fresh. The three most common starters are the `blank` starter, `tabs` starter, and `sidemenu` starter. Get started with the `ionic start` command:

```shell
$ ionic start myApp tabs
```

![start app thumbnails](/docs/assets/img/installation/start-app-thumbnails.png)

To learn more about starting Ionic apps, see the [Starting Guide](/docs/developing/starting).

## Run the App

The majority of Ionic app development can be spent right in the browser using the `ionic serve` command:

```shell
$ cd myApp
$ ionic serve
```

There are a number of other ways to run an app, it's recommended to start with this workflow. To develop and test apps on devices and emulators, see the [Running an App Guide](/docs/developing/previewing).

<style scoped>
  #ionic-wizard {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0;
    float: none;
    
    border-radius: 16px;
    padding: 32px 64px 32px 64px;!!crwd_CB_20_BC_dwrc!!  }

  #ionic-wizard .heading-group {
    flex-basis: 420px;
  }

  #ionic-wizard .heading-group header {
    font-weight: bold;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    color: #fff;
  }
  #ionic-wizard .heading-group p {
    color: #fff;
    max-width: 620px;
    opacity: .8;
    margin-block-start: .5rem;
    line-height: 160%;
  }

  #ionic-wizard .wizard-button {
    display: inline-flex;
    align-items: center;
    border-radius: 8px;
    padding: 8px 12px;
    border: none;
    background: #6c9dff;!!crwd_CB_21_BC_dwrc!!  }

  #ionic-wizard .wizard-button:hover,
  #ionic-wizard .wizard-button:focus {
    background: #80aaff;
    transition: all 0.3s;
    text-decoration: none;
  }

  #ionic-wizard .wizard-button ion-icon {
    font-size: 16px;
    margin-left: 4px;
  }

</style>
