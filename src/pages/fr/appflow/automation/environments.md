---
previousText: 'Create Automations'
previousUrl: '/docs/appflow/automation/create'
nextText: 'Webhooks'
nextUrl: '/docs/appflow/automation/webhooks'
---

# Build Environments

## Introduction

Environments give you a way to customize the build process for your application in order to produce different versions of your applications for different environments from the same code base. All environment variables are accessible to any build scripts that run during the `npm run install` and `npm run build` portion of your builds.

There are two types of Enviornment variables available to use:

* [Predefined Environments](#predefined-environments) (Available on all Builds)
* [Custom Environments](#custom-environments) (Available on select plans)

## Predefined Environments

Every time a Build occurs, it's done in a secure environment where we provide some predefined variables which are key/value pairs that are made available in the environment and are available by using [process.env.MY_VAR](https://nodejs.org/docs/latest-v8.x/api/process.html#process_process_env) syntax in NodeJS or via `$MY_VAR` syntax in a standard shell script. These variables can be leveraged to [customize the build and outputs](#usage).

The following environment variables are provided in every build, which can be accessed in build scripts:

* `CI_APP_ID` **(string):** Your Ionic app's unique ID.
* `CI_APP_NAME` **(string):** Your Ionic app's name.
* `CI_AUTOMATED_BUILD` **(int):** Whether this build occurred as a result of an automation (`0` for `false`, `1` for `true`).
* `CI_AUTOMATION_ID` **(optional int):** The unique ID of the automation which created this build.
* `CI_AUTOMATION_NAME` **(optional string):** The name of the automation which created this build.
* `CI_GIT_COMMIT_SHA` **(string):** The SHA for the commit on which the build was run.
* `CI_GIT_COMMIT_MSG` **(string):** The message for the commit on which the build was run.
* `CI_GIT_REF` **(string):** The git ref from which the build was created (i.e. `master`).
* `CI_GIT_REF_TYPE` **(string):** The git ref type (i.e. `branch`).

## Custom Environments

<blockquote>
  <p><b>Note:</b>This feature is only available on our <a href="/pricing">Growth plans</a> and above.</p>
</blockquote>

In addition to the [predefined environments](#predefined-environments), customers on the [plans with access to automations](/pricing) will have access to create custom environments. With custom environments it's easy to create and manage custom sets of key/value pairs to further customize builds on Ionic Appflow. Common use cases include customizing your build process in order to build staging & QA versions of your app that connect to different APIs or to build different white labeled versions of your application. To get started with custom environments, open the app you wish to work on and navigate in the sidebar to **Automate -> Environments**, then click **New Environment** on the top right. You should see a form like this:

![Create Environment Form](/docs/assets/img/appflow/ss-environments-create.png)

As can be noticed, there are 2 different sets of environment variables sections that can be utilized:

* Secrets
* Variables

The only difference is that the secrets are hidden and never shown in the dashboard after they have been added, while the variables are always available to be read.

The environments dashboard also lists available custom environments along with their configured key/value pairs and secrets keys.

![Environments List View](/docs/assets/img/appflow/ss-environments-list.png)

## Usage

For example you could replace your `build` script in the `package.json` with a custom shell script that reads the branch and triggers a custom build.

```json
// customize the build script in the package.json
{
...
    "scripts": {
        "start": "ionic-app-scripts serve",
        "clean": "ionic-app-scripts clean",
        "build": "./mybuild.sh",
        "lint": "ionic-app-scripts lint"
    },
...
```

    #!/bin/bash
    if [ "$CI_GIT_REF" = "master" ]; then
        npx ionic build --prod
    else
        npx ionic build
    fi
    

As of `@ionic/app-scripts@3.2.0` you can also use [environment variables directly in your source code](https://github.com/ionic-team/ionic-app-scripts#environments) and they will be replaced at build time so that you can customize your code based on the environment.

<blockquote>
  <p><b>Note:</b>`@ionic/app-scripts` is only for use with Ionic Framework v3 applications. The above does not apply to other versions.</p>
</blockquote>

For example:

```typescript
productionConfig = {
  api: 'https://my.production.api.com',
  analyticsKey: 'my-production-key'
}
stagingConfig = {
  api: 'https://my.staging.api.com',
  analyticsKey: 'my-staging-key'
}

localConfig = {
  api: 'https://localhost:7000'
  analyticsKey: 'my-local-key'
}

switch (process.env.CI_GIT_REF) {
  case 'master':
    return productionConfig;
  case 'staging':
    return stagingConfig;
  default:
    return localConfig;
}
```