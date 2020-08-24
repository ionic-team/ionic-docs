---
previousText: '简介'
previousUrl: '/docs/appflow/deploy/intro'
nextText: 'Live Update Builds'
nextUrl: '/docs/appflow/deploy/builds'
---

# 使用实时更新

Ionic Appflow的实时更新功能使得在大多数业务逻辑上可以轻松地实时部署应用更新，而无需经过传统的应用商店提交流程， 界面和风格更改。

部署功能与Ionce Appflow 兼容，需要您的应用与 [连接到 git repo](/docs/appflow/quickstart/connect/) ，以便Appflow 访问您的源代码并部署新代码更新。

<blockquote>
  
<b>注意：</b> 实时更新功能仅适用于二进制的更改 (HTML, CSS, JS), 表示如果您依赖本机代码更新，您必须先重新提交到应用商店，然后才能使用在线更新。
</blockquote>

## 安装

为了使用IonAppflow的实时更新功能，您需要 [安装并配置 Appflow SDK](/docs/appflow/quickstart/installation).

## Turning off Updates for Local Development

Your code will get overwritten if the local app codebase points to the same channel as a deployed Live Update build. To avoid this situation, you can turn off live updates for local development. Be sure to turn it back on before committing to source control.

### Capacitor

In the `capacitor.config.json` file, set the following then run `npx cap sync`:

    "cordova": {
      "preferences": {
        "DisableDeploy": "true"
      }
    }
    

Alternatively, you can change the Channel name to one currently not in use using `ionic deploy configure --channel-name="NAME"` ([details here](https://ionicframework.com/docs/cli/commands/deploy-configure)). This make changes to the native project files directly (on Android, `android/app/src/main/res/xml/config.xml` and on iOS, `ios/App/App/config.xml`).

### Cordova

Set the [DisableDeploy](/docs/appflow/deploy/api#disabledeploy) preference to `true` in the `config.xml` file during local development. You can then set it back to `false` before building your binary for release by either manually setting it back or using the [native config feature](/docs/appflow/package/native-configs) if you're building your binaries with the [Package](/docs/appflow/package/intro) feature.

## Advanced Usage

Want to do something sweet, like allow users to subscribe to a special Beta Channel instead of the default Production one? Do some split testing? Customize the way updates are applied (like checking every 30 minutes, or on login/logout)? Check out our detailed [Live Update API Documentation](/docs/appflow/deploy/api)!