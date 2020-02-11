---
title: 'Create an Environment'
previousText: 'Create an Automation'
previousUrl: '/docs/appflow/quickstart/automation'
nextText: 'Create a Native Configuration'
nextUrl: '/docs/appflow/quickstart/native-config'
---

<blockquote>
  <p><b>Note:</b> This feature is only available on our <a href="/pricing">Growth plans</a> and above.</p>
</blockquote>

[Environments](/docs/appflow/automation/environments) are a powerful way to customize your [Package builds](/docs/appflow/package/builds) and [Deploy builds](/docs/appflow/deploy/builds) in order create different configurations based on the environment variables passed in at build time. When combined with the [Automation](/docs/appflow/automation/intro) feature, development teams can easily configure development, staging, and production build configurations, allowing them to embrace DevOps best practices and ship better quality updates faster than ever.

## Create an Environment

To create an environment, simply go to the `Automate > Environments` tab in the sidebar of the Appflow Dashboard and click the `New Environment` button in the top right.

![New Environment](/docs/assets/img/appflow/ss-new-environment.png)

You'll then see a form that allows you to create two types of environment variables:

* **Secrets** - These values are encypted and only available at build time. Once you save a secret, *you will be unable to edit or see it again*.
* **Variables** - These values are available at build time. Variables are visible and editable.

Let's create a new Environment called "Development". For this environment, create a variable named `BUILD_ENV` with the value `development`. This variable will allow us to customize the way our builds are configured.

![New Environment Form](/docs/assets/img/appflow/gif-new-environment.gif)

## Add the Environment to an Automation

To take full advantage of automating your development environment, you'll want to add the environment to the automation we created earlier.

In your `Automations` tab, click `Edit` from the `Options` icon on the right of your automation, select the environment from the `Environment` dropdown and click `Save`.

![Add Environment to Automation](/docs/assets/img/appflow/gif-add-environment.gif)

## Example: Customizing the Build Script

Getting the variable into your builds is one thing, but using them to customize the way your build is configured is just as important.

Here are examples of how you might customize your app using the `BUILD_ENV` variable we created above in order to connect to a different API url to fetch the data for your app when developing locally vs. in your `development` environment.

<docs-tabs> <docs-tab tab="Ionic v4"> First, you can modify the `build` script in your `package.json` to either use the `BUILD_ENV` variable if it exists or to default it to `local` and then choose the configuration from the `angular.json` file that matches the value of `BUILD_ENV` (`development` in Appflow & `local` locally).

```json
...
"scripts": {
  ...
  "build": "BUILD_ENV=${BUILD_ENV:-local} ng build --configuration=$BUILD_ENV"
  ...
}
...
```

Here's what your `angular.json` configurations section might look like.

```json
...
"configurations": {
  ... // other environment configurations
  "development": {
    "fileReplacements": [ // replace default environment.ts file with the environment.development.ts file
      {
        "replace": "src/environments/environment.ts",
        "with": "src/environments/environment.development.ts"
      }
    ],
  },
  "local": {}, // leave this blank to use the default src/environments/environment.ts file
  ...
}

```

Here's what the `environment.ts` and `environment.development.ts` files might look like.

```typescript
// src/environments/environments.development.ts
export const environment = {
  apiUrl: 'https://api.development.com'
};

```

```typescript
// src/environments/environments.ts
export const environment = {
  apiUrl: 'http://localhost:8000'
};

```

</docs-tab> <docs-tab tab="Ionic v3"> First you can modify the `build` script in your `package.json` to either use the `BUILD_ENV` variable if it exists or default to `local`.

```json
...
"scripts": {
  ...
  "build": "BUILD_ENV=${BUILD_ENV:-local} ionic-app-scripts build"
  ...
}
...
```

Then you can use it directly in an `environments.ts` module to properly set the API url based on the value of `BUILD_ENV` (`development` in Appflow & `local` locally).

```typescript
let apiUrl: string;

switch (process.env.BUILD_ENV) {
  case 'development':
    apiUrl = 'https://api.development.com';
    break;
  case 'local':
    apiUrl = 'http://localhost:8000';
    break;
  default:
    console.warn(`Unknown environment ${process.env.BUILD_ENV} specified.`)
}

export const environment = {
  apiUrl: apiUrl
};

```

</docs-tab> </docs-tabs>

Now your apps will automatically use a different API to fetch data locally vs in your development builds! 💪