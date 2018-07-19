---
layout: fluid/pro_docs_base
category: pro-deploy
id: pro-deploy-builds
title: Deploy Builds - Ionic Pro Documentation
body_class: 'pro-docs'
hide_header_search: true
dark_header: true
---

## Builds

The [Git Workflow](/docs/pro/basics/git/) at the core of Ionic Pro allows you to push commits of your app code,
and trigger JavaScript builds for deploying live updates.

A build in Ionic Pro is triggered when running `git push ionic master` with new changes to your app.
Each build goes through a CI system that triggers a full build of your app by running `npm install` and followed by
`npm run build` if a build script is detected in your `package.json`. The built app is expected to be contained in the
`www` directory after the build. If you prefer to build locally you can commit your `www` directory to version control
and remove the build script from your `package.json` and Ionic Pro will use the committed `www` direcory. The
completed build in the `www` directory is stored and available to [assign to a channel as a live update](#channels).

If you'd like to customize your builds, please see our
[Customizing Builds](#customizing-builds) documentation.

## Customizing your Builds

When you push code up to Ionic, we run `npm run build` in the root directory of your repository. This means you have full control over the build process. By default, we recommend commiting the Ionic Project directory at the root level, which comes default with a `package.json` file with the following:

```bash
{
...
    "scripts": {
        "clean": "ionic-app-scripts clean",
        "build": "ionic-app-scripts build",
        "lint": "ionic-app-scripts lint",
        "ionic:build": "ionic-app-scripts build",
        "ionic:serve": "ionic-app-scripts serve"
    },
...
}
```

`npm run build` is controlled by the `scripts: build` line which defaults to `"build": "ionic-app-scripts build"`.

A common change people like to make is making sure that Ionic Pro builds with production output. To make this change, simply change the `package.json` file to include the `--prod` flag like so:

```bash
{
...
    "scripts": {
        "clean": "ionic-app-scripts clean",
        "build": "ionic-app-scripts build --prod",
        "lint": "ionic-app-scripts lint",
        "ionic:build": "ionic-app-scripts build",
        "ionic:serve": "ionic-app-scripts serve"
    },
...
}
```

You could commit different `package.json` files to different branches if you'd like different build setups run.

## Using Different Repository structures

If your repository includes the Ionic app as a sub-folder or a different special structure, you just need to make sure you set up `npm run build` to perform the right actions. The requirements are:

1. `npm install` needs to install the dependencies inside of your app directory
2. `npm run build` needs to execute a build of your code when run from the root of your repository
3. A `www` built directory must exist at the root folder after performing `npm run build`

For example, if we commited a repository where the Ionic app was actually located in `path-to/your-app`, you could add a `package.json` file at the root level of our repository with the following contents in order to achieve the 3 requirements from above:

```json
{
    "scripts": {
        "install": "cd path-to/your-app && npm install",
        "build": "cd path-to/your-app && ./node_modules/.bin/ionic-app-scripts build --prod --wwwDir ./../../www"
    }
}
```

If you also require `npm install` to run at the root directory, you can change the `"install"` script to instead be `"postInstall"` which will run both.

