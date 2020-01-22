---
previousText: '自动化'
previousUrl: '/docs/appflow/automation/create'
nextText: 'Webhooks'
nextUrl: '/docs/appflow/automation/webhooks'
---

# 构建环境

## 简介

环境为您提供了一种自定义应用程序构建过程的方法，以便从相同的代码库为不同的环境生成不同版本的应用程序。 在npm运行期间运行的任何构建脚本都可以访问所有环境变量`npm run install`和`npm run build`构建部分。

有两种类型的环境变量可用:

* [Predefined Environments](#predefined-environments) (所有内置都可用)
* [Custom Environments](#custom-environments) (可选计划中可用)

## 预定义的环境

每次构建发生时,它是在一个安全的环境中,我们提供了一些预定义的变量是键/值对可用的环境,可通过使用[process.env.MY_VAR](https://nodejs.org/docs/latest-v8.x/api/process.html#process_process_env)语法NodeJS或通过<代码>美元`$MY_VAR` 代码语法标准shell脚本。 这些变量可以用于自定义构建和输出。

每个构建都提供了以下环境变量，可以在构建脚本中访问:

* `CI_APP_ID` **(string)：** Ionic 应用程序的独特ID。
* `CI_APP_NAME` **(string):** Ionic 应用程序的名称。
* `CI_AUTOMATED_BUILD` **(int):** 此构建是否由于自动化而发生 (`0` `false`, `1` `true`)。
* `CI_AUTOMATION_ID` **(可选 int)：** 创建此版本的自动化唯一ID。
* `CI_AUTOMATION_NAME` **(可选string)：** 创建此构建的自动化名称。
* `CI_GIT_COMIT_SHA` **(string)：** 用于运行构建的提交的SHA。
* `CI_GIT_COMIIT_MSG` **(string)：** 用于运行构建的提交的消息。
* `CI_GIT_REF` **(string):** 创建构建的git ref (即. `master`)。
* `CI_GIT_REF_TYPE` **(string)：** git ref 类型 (例如. `branch`)。

## 自定义环境

<blockquote>
  <p><b>注:</b>此功能仅适用于我们的<a href="/pricing">Growth plans</a>及以上。</p>
</blockquote>

除了 [预定义的环境](#predefined-environments)之外，在 [计划中用户访问自动化](/pricing) 将有权限创建自定义环境。 使用自定义环境，很容易创建和管理自定义密钥/值配对 以进一步自定义构建 Ionic Appflow。 常见的用例包括定制您的构建过程，以便构建staging &您的应用程序的QA版本，可以连接到不同的api，或者构建应用程序的不同的标记版本。 要开始使用自定义环境，请打开您希望使用的应用程序，并在侧栏中导航到**automation -> Environment**，然后单击右上角的**New Environment**。 你应该看到类似的内容：

![创建环境表单](/docs/assets/img/appflow/ss-environments-create.png)

可以注意到，有两种不同的环境变量部分可以使用：

* Secrets
* Variables

唯一的不同之处在于，secrets是隐藏的，并且在添加后从未显示在仪表板中，而variables总是可以读取的。

环境面板还列出了可用的自定义环境及其配置的键/值对和密钥。

![环境列表](/docs/assets/img/appflow/ss-environments-list.png)

## 使用方法

例如，您可以使用自定义的Shell脚本替换` package.json `中的` build `脚本。读取分支并触发自定义构建。

```json
// package.json中的自定义构建脚本
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
    

从`@ionic/app-scripts@3.2.0`开始，您还可以使用 [环境变量直接在您的源代码中](https://github.com/ionic-team/ionic-app-scripts#environments) 并且它们会在构建时被替换，以便您可以根据环境自定义代码。

<blockquote>
  <p><b>注意：</b>`@ionic/app-scripts` 仅用于Ionic Framework v3 应用程序。 上述内容不适用于其他版本。</p>
</blockquote>

例如:

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