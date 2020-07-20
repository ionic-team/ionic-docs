---
---

# 配置

## 文件

配置值存储在 JSON 文件中。 Ionic CLI 维护一个全局配置文件，通常位于 `~/.ionic/config.json`和工程配置文件，通常在项目的根目录为 `ionic.config.json`。

CLI 提供了从项目配置文件和全局CLI配置文件设置和打印配置值的命令。 查看 `ionic config --help` 或查看文档中 [`ionic config get`](/docs/cli/commands/config-get) 和 [`ionic config set `](/docs/cli/commands/config-set)来学习使用.

### 项目配置文件

每个Ionic项目都有一个项目配置文件，通常在项目的根目录上。 以下是一个有注释的`ionic.config.json` 文件。

```json
{
  // 易读的app名称.
  "name": "My App",

  // 项目类型，CLI使用该值来判断命令及命令选项是否可用，
  // 对于帮助文档应该输出什么，
  // web资源构建和开发服务器应该用什么。
  "type": "angular",

  // Ionic Appflow的App ID。
  "id": "abc123",

  // 面向集成比如Cordova 和Capacitor的配置对象。
  "integrations": {
    "cordova": {
      ...
    }
  },

  // Hook 配置--查看Hooks部分来了解详情。
  "hooks": {
    ...
  }
}
```

## 环境变量

CLI将会寻找以下环境变量：

* ` IONIC_CONFIG_DIRECTORY`：全局CLI配置目录，缺省是`~/.ionic`。
* `IONIC_HTTP_PROXY`: 设置一个URL来代理所有CLI请求。 查看 [使用代理](./using-a-proxy)。
* `IONIC_TOKEN`: 自动认证 [Ionic Appflow](https://ionicframework.com/appflow)。

## 参数

CLI参数是可以修改CLI行为的全局选项，

* `--help`：与运行命令相反，会显示命令帮助页。
* `--verbos`：显示所有日志信息用于调试。
* `--quiet`：只展示` WARN`和` ERROR`级日志信息。
* `--no-interactive`：关闭交互提示和花哨的输出。 如果被检测到是CI或者非 TTY终端，则CLI会自动切换为非交互式。
* `--确认`: 打开确认提示的自动确认。 注意: CLI在做潜在风险的事情之前会有提示。 自动确认可能会产生意外结果。

## 钩子

CLI在特定事件发生时运行脚本，比如构建之前和之后。 要绑定钩子进入CLI，下面的[npm scripts](https://docs.npmjs.com/misc/scripts)可以在`package.json`中使用：

* `ionic:serve:before`：在dev server启动之前执行
* `ionic:serve:after`: 在dev server中断后执行
* `ionic:build:before`: 在web资源构建开始之前执行
* `ionic:build:after`：web资源构建完成执行
* `ionic:capacitor:run:before` ：capacitor开启之前在capacitor中执行
* `ionic:capacitor:run:after` ：capacitor开启之后在capacitor中执行

Capacitor钩子是在 `ionic:sery` and `ionic:build` 钩子之后执行的。 它们只能在使用 `ionic capacitor build` or `ionic capacitor run` 时执行。 当任何一个钩子使用 shell 脚本时，几个环境变量会被设置为包含上下文信息。

下面的示例展示了在 `ionic:capacititor:run:before` and `ionic:capacity:build:before` 钩子中设定的环境变量.

```shell
IONIC_CLI_HOOK_CTX_NAME=capacitor:build:before
IONIC_CLI_HOOK_CTX_BUILD_CORDOVA_ASSETS=true
IONIC_CLI_HOOK_CTX_BUILD_ENGINE=browser
IONIC_CLI_HOOK_CTX_BUILD_PROJECT=app
IONIC_CLI_HOOK_CTX_BUILD_TYPE=angular
IONIC_CLI_HOOK_CTX_BUILD_VERBOSE=false
IONIC_CLI_HOOK_CTX_CAPACITOR_APP_ID=io.ionic.starter
IONIC_CLI_HOOK_CTX_CAPACITOR_APP_NAME=ionic-starter-app
IONIC_CLI_HOOK_CTX_CAPACITOR_VERBOSE=false
```

钩子也可以在`ionic.config.json`中设定。 在项目中定义一个 `个钩子` 对象 其中每个键都是钩子的名称 (不含 `ionic：` 前缀)， 每个值是一个到 JavaScript 文件的路径或者路径或者路径数组。

在下面的例子中, 文件在`ionic:build:before` 钩子中被导入和运行.

```json
"hooks": {
  "build:before": "./scripts/build-before.js"
},
```

JavaScript 钩子文件应该到处一个唯一的函数, 这个函数在钩子执行时只有一个参数 (`ctx`) 。

该参数是提供钩子文件上下文，它随钩子的不同和调用方式的不同而不同。

`./scripts/build-before.js`:

```javascript
module.exports = function(ctx) {
  console.log(ctx);
};
```

## 多页项目

<small><em>CLI 6.2.0及以上可用</em></small>

Ionic CLI支持多应用配置，它设计多个Ionic apps和单一仓库中的代码共享或者 [monorepo](/docs/reference/glossary#monorepo)。

> 这些文档提供了Ionic CLI多应用功能的预览，但不深入每个框架的详细信息。
> 
> 如果你正在用Angular，请看 [这篇文章](https://github.com/ionic-team/ionic-cli/wiki/Angular-Monorepo)中的例子。

### 步骤

1. 创建一个目录，初始化一个monorepo (见 [项目结构](#project-structure)查看完整详情)。
2. 初始化monorepo作为一个Ionic多应用项目。 这将会创建一个多应用 `ionic.config.json` 文件。 详情请查阅 [配置文件](#config-file)。

    ```shell
    $ ionic init --multi-app
    ```

1. 用 `ionic start` 创建应用或者 `ionic init` 初始化一个已经存在的应用 (详情查看 [Adding an App](#adding-an-app))。

### 项目结构

对于一个多应用项目，项目结构是灵活的。 唯一的要求是`ionic.config.json` 文件需要位于仓库的根目录下。

Below is an example setup, where apps in the `apps/` directory are separated from the shared code in the `lib/` directory. Notice the root `ionic.config.json` file and the monorepo's `package.json` file.

<file-tree> <file-tree-directory name="apps"> <file-tree-directory name="myApp" collapsed></file-tree-directory> <file-tree-directory name="myOtherApp" collapsed></file-tree-directory> </file-tree-directory> <file-tree-directory name="lib" collapsed></file-tree-directory> <file-tree-file name="ionic.config.json"></file-tree-file> <file-tree-file name="package.json"></file-tree-file> </file-tree>

### Config File

In a multi-app project, apps share a single `ionic.config.json` file at the root of the repository instead of each app having their own. The multi-app config file contains the configuration for each app by nesting configuration objects in a `projects` object. A default app can be specified using `defaultProject`.

Below is an example file, which corresponds to the file structure above.

```json
{
  "defaultProject": "myApp",
  "projects": {
    "myApp": {
      "name": "My App",
      "integrations": {},
      "type": "angular",
      "root": "apps/myApp"
    },
    "myOtherApp": {
      "name": "My Other App",
      "integrations": {},
      "type": "angular",
      "root": "apps/myOtherApp"
    }
  }
}
```

When a multi-app project is detected, the Ionic CLI will operate under the context of an app configured in the root `ionic.config.json`. Project selection criteria is as follows:

1. If the global CLI option `--project` is specified, the project is looked up by key in the `projects` object. For example, `--project=myApp` will select the `myApp` project.
2. If the CLI detects it is being run within a project path, configured with the `root` key, it will select the matched project. For example, using the CLI within the `apps/myOtherApp/src` directory will select the `myOtherApp` project.
3. If a `defaultProject` is specified in `ionic.config.json`, it will select the specified project when the above criteria is not met.

### Adding an App

Apps can be registered in a multi-app project either by using `ionic start` to create new apps or `ionic init` to initialize existing apps.

#### Using `ionic start`

If a multi-app project is detected during `ionic start`, the CLI will add the app configuration to the root `ionic.config.json` file instead of creating a project-specific one.

Dependency installation can be skipped using `--no-deps` if dependencies are hoisted to the root of the monorepo.

```shell
$ cd apps/
$ ionic start "My New App" --no-deps
```

#### Using `ionic init`

If an app was created in a way other than `ionic start`, for example by using a prebuilt template, use `ionic init` to register the existing app with the multi-app project.

> Make sure the app doesn't have an existing `ionic.config.json`.

```shell
$ cd apps/existing-app/
$ ionic init
```

## Advanced Configuration

### Overriding the Build

Normally, the CLI runs a hard-coded set of commands based on the project type. For example, the standard web asset build for Angular projects is `ng run app:build`. The web asset build can be overridden and `ionic build` can continue to be used by utilizing the `ionic:build` [npm script](https://docs.npmjs.com/misc/scripts). Similarly, the dev server can be overridden by using the `ionic:serve` npm script.

Pay close attention to the flags supplied to the script by the Ionic CLI. Irregularities may occur if options are not respected, especially for livereload on devices.

### Command Options

Command options can be expressed with environment variables. They are normally set with `--opt=value` syntax. The naming of these environment variables follows a pattern: start with `IONIC_CMDOPTS_`, add the command name (replacing any spaces with underscores), add the option name (replacing any hyphens with underscores), and then uppercase everything. Boolean flags (command-line options that don't take a value) can be set to `1` or `0`. Strip the `--no-` prefix in boolean flags, if it exists (`--no-open` in ionic serve can be expressed with `IONIC_CMDOPTS_SERVE_OPEN=0`, for example).

For example, the command options in `ionic cordova run ios -lc --livereload-port=1234 --host=0.0.0.0` can also be expressed with this series of environment variables:

```shell
$ export IONIC_CMDOPTS_CORDOVA_RUN_LIVERELOAD=1
$ export IONIC_CMDOPTS_CORDOVA_RUN_CONSOLELOGS=1
$ export IONIC_CMDOPTS_CORDOVA_RUN_LIVERELOAD_PORT=1234
$ export IONIC_CMDOPTS_CORDOVA_RUN_HOST=0.0.0.0
```

If these variables are set in the environment, `ionic cordova build ios` will use new defaults for its options.

### Telemetry

The CLI sends usage data to Ionic to create a better experience. To disable this functionality, run `ionic config set -g telemetry false`.