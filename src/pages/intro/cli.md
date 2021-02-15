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

> The `-g` option means _install globally_. When packages are installed globally, `EACCES` permission errors can occur.
> Consider setting up npm to operate globally without elevated permissions. See [Resolving Permission Errors](/docs/developing/tips#resolving-permission-errors) for more information.

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
    padding: 32px 64px 32px 64px;

    margin-inline-start: -64px;
    margin-inline-end: -64px;

    background: #486fff url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iMTc2IiBmaWxsPSJub25lIiB2aWV3Qm94PSIxNyAwIDk2IDE3NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxjaXJjbGUgY3g9IjMyIiBjeT0iODgiIHI9IjY0IiBmaWxsPSIjNkM5REZGIiBvcGFjaXR5PSIuMyIvPgogICAgPGNpcmNsZSBjeD0iMzIiIGN5PSI4OCIgcj0iNTIiIGZpbGw9IiM2QzlERkYiIG9wYWNpdHk9Ii4zIi8+CiAgICA8Y2lyY2xlIGN4PSIzMiIgY3k9Ijg4IiByPSIzOCIgZmlsbD0iIzZDOURGRiIvPgogICAgPHBhdGggZD0iTTQ5LjUgODIuNzVoNS4yNWExLjc1IDEuNzUgMCAwMDAtMy41SDQ5LjVhMS43NSAxLjc1IDAgMDAwIDMuNXpNNDYuNDIgNzUuMzNhMS43NCAxLjc0IDAgMDAxLjIzLS41bDMuNzItMy43MmExLjc1IDEuNzUgMCAwMC0yLjQ4LTIuNDhsLTMuNzEgMy43MmExLjc1IDEuNzUgMCAwMDEuMjQgMi45OHpNMzkgNzIuMjVhMS43NSAxLjc1IDAgMDAxLjc1LTEuNzV2LTUuMjVhMS43NSAxLjc1IDAgMDAtMy41IDB2NS4yNUExLjc1IDEuNzUgMCAwMDM5IDcyLjI1ek0zMS41NiA3NS4zM2ExLjc1IDEuNzUgMCAwMDEuMjQtMi45OGwtMy43MS0zLjcyYTEuNzUgMS43NSAwIDEwLTIuNDggMi40OGwzLjcyIDMuNzFhMS43NCAxLjc0IDAgMDAxLjIzLjUxek01MC4xMyA5My45YTEuNzUgMS43NSAwIDAwMS4yNC0zbC0zLjcyLTMuN2ExLjc1IDEuNzUgMCAwMC0yLjQ3IDIuNDdsMy43MSAzLjcxYy4zMy4zMy43Ny41MSAxLjI0LjUxek0zNi4wNSA3Ni42YTIuODQgMi44NCAwIDAxNC4wMiAwbDMuMzMgMy4zM2EyLjg0IDIuODQgMCAwMTAgNC4wM2wtNi4yMyA2LjIzYS40NC40NCAwIDAxLS42MiAwbC02Ljc0LTYuNzRhLjQ0LjQ0IDAgMDEwLS42Mmw2LjI0LTYuMjJ6TTguMzQgMTA0LjNsMTguMzgtMTguMzhhLjQ0LjQ0IDAgMDEuNjIgMGw2Ljc0IDYuNzRhLjQ0LjQ0IDAgMDEwIC42MmwtMTguMzkgMTguMzhhMi44NCAyLjg0IDAgMDEtNC4wMiAwbC0zLjMzLTMuMzNhMi44NSAyLjg1IDAgMDEwLTQuMDJ6IiBmaWxsPSIjRDlGMUZGIi8+Cjwvc3ZnPgo=")
     left center no-repeat;
  }

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
    background: #6c9dff;

    transition: all .3s ease-out;

    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: .08em;
    white-space: nowrap;
    color: #fff;
  }

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
