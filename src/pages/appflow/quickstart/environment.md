---
title: 'Create an Environment'
previousText: 'Create an Automation'
previousUrl: '/docs/appflow/quickstart/automation'
nextText: 'Create a Native Configuration'
nextUrl: '/docs/appflow/quickstart/native-config'
---

<blockquote>
  <p><b>Note:</b>This feature is only available on our <a href="/pricing">Growth plans</a> and above.</p>
</blockquote>

[Environments](/docs/appflow/automation/environments) are a powerful way to customize your [package builds](/docs/appflow/package/builds)
and [deploy builds](/docs/appflow/deploy/builds) in order create different configurations based on the environment variables
passed in at build time. When combined with the [automations](/docs/appflow/automation/intro) features development teams can
easily configure development, staging, and production build configurations allowing them to embrace DevOps
best practices and ship better quality updates faster than ever.

## Create an Environment

To create an environment simply go to the `Automate > Environments` tab in the sidebar of dashboard and
click the `New Environment` button in the top right.

![New Environment](/docs/assets/img/appflow/ss-new-environment.png)

You'll then see a form to create two types of environment variables:
* <b>Secrets</b> - These values are encypted and are only available at build time. Once you save the secret you will be unable to edit or see it again.
* <b>Variables</b> - These values and available at build time and are visible & editable.

![New Environment Form](/docs/assets/img/appflow/gif-new-environment.gif)

## Add the Environment to an Automation
To take full advantage of automating your development environment you'll want to add the enviroment to the automation
we created earlier. Click the `Edit` from the options icon on the right of the automation and select the environment from
the dropdown and click save.

![Add Environment to Automation](/docs/assets/img/appflow/gif-add-environment.gif)

## Customizing the Build Script
Getting the variable into your builds is one thing but using them to customize the way you build is actually
configured is just as important. Here are examples of you might customize your app using the `BUILD_ENV`
variable we created above in order to connect to a different API url to fetch the data for your app when
developing locally vs. in your `development` environment.


<docs-tabs tabs="Ionic v4, Ionic v3">
<div slot="Ionicv4">
First you can modify the <b>build</b> script in you <b>package.json</b> to either use the <b>BUILD_ENV</b> variable if it
exists or to default it to <b>local</b> and then choose the configuration from the <b>angular.json</b> file that matches the value
of <b>BUILD_ENV</b> (<b>development</b> in Appflow & <b>local</b> locally.

```json
...
"scripts": {
  ...
  "build": "BUILD_ENV=${BUILD_ENV:-local} ng build --configuration=$BUILD_ENV"
  ...
}
...
```

Here's what your <b>angular.json</b> configurations section might look like.

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
  "local" {}, // leave this blank to use the default src/environments/environment.ts file
  ...
}

```

Here's what the environment.ts and environment.development.ts files might look like.

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

</div>
<div slot="Ionicv3">
First you can modify the <b>build</b> script in you <b>package.json</b> to either use the <b>BUILD_ENV</b> variable if it
exists or to default it to <b>local</b>

```json
...
"scripts": {
  ...
  "build": "BUILD_ENV=${BUILD_ENV:-local} ionic-app-scripts build"
  ...
}
...
```

Then you can use it directly in an <b>environments.ts</b> module to properly
set the API url based on the value of <b>BUILD_ENV</b> (<b>development</b> in Appflow & <b>local</b> locally.

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

</div>
</docs-tabs>

Now your apps should automatically use a different API to fetch data locally vs in your development builds! 💪
