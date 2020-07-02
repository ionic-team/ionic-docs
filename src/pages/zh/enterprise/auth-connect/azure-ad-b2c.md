# Azure Active Directory B2C Configuration

> **Note:** The following demo app and configuration uses Azure AD 2.0 B2C. For Enterprise customers who need details on how to configure Auth Connect with Azure AD 1.0, please [contact us](https://ionic.zendesk.com/hc/en-us/requests/new).

## Demo App

1. 简单: 一个 [登录/注销体验](https://github.com/ionic-team/demo-authconnect-azureb2c) 在网页、iOS和Android上工作。 在[此短片](https://www.youtube.com/watch?v=v-LuS6aiRDo&feature=youtu.be)中观看实际操作。 要查看 Azure AD配置详细信息，请参阅 [这里](https://github.com/ionic-team/demo-authconnect-azureb2c/blob/master/completed/src/app/services/authentication.service.ts)的`身份验证服务`。

2. 高级: [演示使用认证连接](https://github.com/ionic-team/cs-demo-ac-iv)来执行 OAuth 登录和身份密码库，以便在浏览器、iOS和Android上存储由此产生的身份验证令牌。 要查看 Azure AD配置详细信息，请参阅 [这里](https://github.com/ionic-team/cs-demo-ac-iv/blob/master/src/app/services/authentication/authentication.service.ts)的`身份验证服务`。

## Configuration Details

### Azure Configuration

在将Auth Connect整合到您的Ionic应用程序之前，您将需要 Azure Active Directory (AD) 上架并运行。

> **Note:** For complete information on configuring Azure AD, consult the [official B2C documentation](https://docs.microsoft.com/en-us/azure/active-directory-b2c/tutorial-create-tenant) which includes tutorials on creating a B2C tenant, registering applications, and more.

#### Create an Azure AD B2C Tenant

如果您没有，[创建一个新的B2C账户](https://docs.microsoft.com/en-us/azure/active-directory-b2c/tutorial-create-tenant)。

#### Register an Application

登录[Azure Portal](https://portal.azure.com)然后导航到`Azure AD B2C`服务页面(找到它的最简单方式是搜索“b2c”， 然后选择 "Azure AD B2C".)

在管理下创建一个新应用程序 -> 应用程序 ->

![Azure 应用程序配置设置](/docs/assets/img/native/azure-app-settings.png)

给您的应用程序起一个新名称，然后为_Web App_和_允许隐式流_两者都选择`是`。 对于_Reply URL_，指定`http://localhost:8100/`以及您应用的核心登录页面的名称(通常是`登录`)。

接下来，将_原生客户端_切换为`是`。 注意显示的_重定向 URI_。

接下来选择您全局唯一的App Id，它既用于Azure配置，也用于Cordova/Capacitor。 典型的形式是`company-AppName`或逆向DNS风格 - `com.company.app`。

手动设置_自定义重定向 URI_。 在应用程序用户登录到 Azure AD之后，这个提示了验证连接哪个页面重定向到您的应用中。 使用公式“unieId://page”，例如`com.company.app://callback`。

填写以上所有详细信息后，点击创建按钮。

#### Create User Flows (Policies)

创建至少一个 [User Flow](https://docs.microsoft.com/en-us/azure/active-directory-b2c/tutorial-create-user-flows)，这是为您的应用定义整个验证体验的一系列页面。 至少创建一个 `注册并登录` 流程。 一旦用户流创建完毕，从用户流列表中选择它，然后单击"运行用户流"。 注意页面顶部的URL，用于配置Auth Connect`发现的 URL` 属性。 还考虑创建一个 `密码重置` 流程([详细信息在下面](#implementing-password-reset))。

Azure AD B2C现已准备好与Auth Connect使用。

### Install Auth Connect

运行以下命令来安装Auth Connect 插件。 对于`AUTH_URL_SCHEME`变量，使用全局唯一的App Id (例如：`com.company.app`)，您在上述配置Azure AD应用程序时做出了决定。

<native-ent-install plugin-id="auth" variables="--variable AUTH_URL_SCHEME=com.company.app"></native-ent-install>

### Configure Auth Connect

建议创建一个 `AuthenticationService` 类，封装Azure AD 和 Ionic Auth Connect的登录功能。

使用 `ionic generate` 命令生成此类：

<command-line> <command-prompt>ionic生成服务 services/authentication</command-prompt> </command-line>

扩展`IonicAuth`类，然后在`IonicAuthOptions`对象中配置所有Azure详细信息：

```typescript
import { IonicAuth, IonicAuthOptions } from '@ionic-enterprise/auth';

export class AuthenticationService extends IonicAuth {

constructor() {
    const azureConfig: IonicAuthOptions = {
        // The auth provider.
        authConfig: 'azure',
        // The platform which the app is running on
        platform: 'cordova',
        // client or application id for provider
        clientID: 'FILL_IN',
        // the discovery url for the provider
        // OpenID configuration
        discoveryUrl: 'FILL_IN',
        // the URI to redirect to after log in
        redirectUri: 'FILL_IN',
        // requested scopes from provider
        scope: 'FILL_IN',
        // the audience, if applicable
        audience: 'FILL_IN',
        // the URL to redirect to after log out
        logoutUrl: 'FILL_IN',
        // The type of iOS webview to use. 'shared' will use a webview that can
        // share session/cookies on iOS to provide SSO across multiple apps but
        // will cause a prompt for the user which asks them to confirm they want
        // to share site data with the app. 'private' uses a webview which will
        // not prompt the user but will not be able to share session/cookie data
        // either for true SSO across multiple apps.
        iosWebView: 'private',
        // required if running on the Web
        clientSecret: ''
    };

    super(azureConfig);
    }
}
```

其中一些`IonicAuthauths`值是独特的，必须根据您的 Azure AD应用程序的详细信息设置：

* `platform`: Use “cordova” or “capacitor” accordingly.
* `clientID`: Your app’s _Application ID_. Example: cebbb0be-d578-4bbd-9712-4b0fe05c06aa
* `redirectUri`: The URI to redirect to after the user has logged in. Use the same AUTH_URL_SCHEME variable value (App Id) from when the Auth Connect plugin was installed. Example: com.company.app://callback
* `logoutUrl`: The URI to redirect to after the user has logged out. Example: com.company.app://login?logout=true
* `audience`: Your custom API URL of choice, such as `https://api.myapp.com`.
* `scope`: Unlock access to protected resources, such as read/write permissions. `offline_access` is minimally required. Example: openid offline_access email picture profile

`discoveryUrl`可以通过导航到用户流量(策略) -> [选择用户流] -> 概览选项卡 -> 运行用户流按钮。 发现链接在首页上，看起来像以下格式：

`https://B2C-TENANT-NAME.b2clogin.com/B2C-TENANT-NAME.onmicrosoft.com/v2.0/.well known/openid-configuration?p=POLISe-NAME`

`B2C-TENANT-NAME`是你的用户名，而`POLYe-NAME`是先前创建的用户流名称。

### What's Next?

查看可用的[配置选项](/docs/enterprise/auth-connect#ionicauthoptions)的完整列表，并在认证连接工作流中实现[其他步骤](/docs/enterprise/auth-connect#workflow)。

## Implementing Password Reset

要实现密码重置功能，需要创建自定义用户流程。 导航到 `用户流量(策略)` 页面，然后点击“新用户流”按钮。 接下来，选择“密码重置”用户流类型。 作为`Application claims`部分的一部分，至少选择"电子邮件地址"。 创建用户流后，从用户流列表中选择它，然后单击"运行用户流"。 注意页面顶部的 URL - 用它作为密码重置的发现URL。

在您的应用范围内执行以下逻辑：

如果在 [Login](/docs/enterprise/auth-connect#iionicauth.login) 函数调用后出现错误，请检查`message` 属性。 如果开始于字符串`AADB2C90118` (Azure AD返回错误信息的一部分)， 然后再次调用 [Login](#iionicauth.login)，这一次指定了密码重置端点的位置。

```typescript
// Snippet example: Password reset
async login() {
    try {
        await super.login();
    }
    catch (error) {
        // Handle password reset (only applicable for Azure AD B2C)
        const message: string = error.message;
        if (message && message.startsWith('AADB2C90118')) {
            await super.login("DISCOVERY_URL_FOR_PASSWORD_RESET");
        } else {
            throw new Error(error.error);
        }
    }
}
```
