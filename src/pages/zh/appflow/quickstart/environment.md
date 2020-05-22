---
title: '创建环境'
previousText: '创建自动化脚本'
previousUrl: '/docs/appflow/quickstart/automation'
nextText: '创建本地配置'
nextUrl: '/docs/appflow/quickstart/native-config'
---

<blockquote>
  <p><b>注意：</b> 此功能仅在我们 <a href="/pricing">增长计划</a> 及以上版本中可用。</p>
</blockquote>

[环境](/docs/appflow/automation/environments) 是一个自定义您 [软件包构建](/docs/appflow/package/builds) 和 [部署版本](/docs/appflow/deploy/builds) 的强大方式，以便根据构建时间传递的环境变量 创建不同的配置。 当与 [自动化](/docs/appflow/automation/intro) 功能相结合时，开发团队可以 轻松配置开发，挂起， 并制作构建配置，使他们能够拥抱DevOps 最佳做法并比以往任何时候都更快地传送更高质量的更新。

## 创建环境

创造一个环境， 只需转到Appflow 面板侧边栏中的 `自动 > 环境` 选项卡，然后 点击右上角的 `新环境` 按钮。

![新环境](/docs/assets/img/appflow/ss-new-environment.png)

然后你会看到一个表格，允许你创建两种类型的环境变量：

* **秘密** - 这些值被加密，仅在构建时才可用。 一旦您保存了秘密， *您将无法编辑或再次查看它*。
* **变量** - 这些值可在构建时间使用。 变量是可见和可编辑的。

让我们创建一个叫做“发展”的新环境。 在这个环境中，创建一个名为 `BUILD_ENV` 的变量，其值 `开发`。 此变量将使我们能够自定义我们的构建配置方式。

![新建环境表单](/docs/assets/img/appflow/gif-new-environment.gif)

## 将环境添加到自动化

为了充分利用你的发展环境自动化，你想要将环境添加到我们早些时候创建的自动化 中。

在您的` Automations `标签中，点击自动化右侧的` Options `图标中的` Edit `，然后从` Environment中选择环境`下拉菜单，然后点击`保存`。

![将环境添加到自动化](/docs/assets/img/appflow/gif-add-environment.gif)

## 示例：自定义构建脚本

让变量进入你的构建是一回事，但使用变量自定义你的构建配置 的方式同样重要。

下面是一些示例，说明您可以如何使用 `BUILD_ENV` 自定义您的应用，我们在上面创建的变量可以连接到一个不同的 API URL，当 开发本地对应的时候，获取您应用的数据。 你的 `开发` 环境。

<docs-tabs> <docs-tab tab="Ionic v4"> First, you can modify the `build` script in your `package.json` to either use the `BUILD_ENV` variable if it exists or to default it to `local` and then choose the configuration from the `angular.json` file that matches the value of `BUILD_ENV` (`development` in Appflow & `local` locally).

```json
...
"scripts":
...
  "build": "BUILD_ENV=${BUILD_ENV:-local} ng build--configuration=$BUILD_ENV"
...
}
...
```

下面是你的 `angular.json` 配置部分可能是什么样的。

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

这里是 `环境。ts` and `environment.development.ts` 文件可能是喜欢的。

```typescript
// src/environments/environments.development.ts
export const environment = volume
  apiUrl: 'https://api.development.com'
};

```

```typescript
// src/environments/environments.ts
export const environment = ~
  apiUrl: 'http://localhost:8000'
};

```

</docs-tab> <docs-tab tab="Ionic v3"> 首先，您可以修改` package.json `中的` build `脚本，以使用` BUILD_ENV `变量（如果存在）或默认为` local `。

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

现在，您的应用将自动使用不同的 API 来获取本地与开发版本中的数据！ 💪