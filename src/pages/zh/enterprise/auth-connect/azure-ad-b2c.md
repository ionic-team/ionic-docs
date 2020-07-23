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

Begin by creating a new Application under Manage -> App registrations -> New registration.

![Azure app: Register new](/docs/assets/img/native/azureb2c-register-app.png)

Give your app a new name, then select the Supported Account Types.

With that in hand, set the Redirect URI. Choose “Public client/native (mobile & desktop)” - we’ll add web support in a separate step. Then, fill in the text field value with your globally unique App Id, which is used both in the Azure configuration as well as the native mobile app’s configuration. Typically, this takes the form of `company-AppName` or reverse DNS style - `com.company.app`. Use the formula “uniqueId://page”.

After the app user signs into Azure AD, this tells Auth Connect which page to redirect to in your app. While any page can be used, in this example we’ll use the Login page, such as `com.company.app://login`. Click the register button to create the app.

#### Add Web Platform

With the app created, navigate to Manage -> Authentication. Click the “Add a Platform” button. Under Web applications, choose “single-page application.”

Under Redirect URIs, specify a web URL. In this example, for local testing, we’ll use `http://localhost:8100/` along with the name of your app's core login page (typically, `login`).

Next, under Logout URL, specify a web URL to redirect to once the user has logged out of your app. Again, for local testing, specify `https://localhost:8100/` along with the name of the logout page (typically `logout`).

Finally, under Implicit Grant, toggle “Access tokens.” Click the Configure button to save.

![Azure app: Configure single-page app](/docs/assets/img/native/azureb2c-spa.png)

Back on the Authentication page, look under the Single-page application settings. Click the “Add URI” button to add additional Redirect URIs, including those for other environments like staging or production. Click Save when ready.

![Azure app: Configure web redirect uris](/docs/assets/img/native/azureb2c-web-redirecturis.png)

#### Expose an API

Navigate to the “Expose an API” page. Click “Add a scope”, then for the Scope name, provide a value such as “user_impersonation.” For the display name and description fields, add details describing that this is for authenticating your users. Set the state to enabled then click the “Add scope” button.

#### Configure API Permissions

Next, we need to authorize our app so it can connect to Azure B2C and retrieve user profile information alongside login credentials. Navigate to the API Permissions page then click the “Add a permission” button. Under “Select an API”, choose “My APIs” then click the name of the B2C app we’re currently configuring. Next, select the “user_impersonation” permission (or whatever name you labeled it in the previous step) then click the “Add permissions” button.

Save the application, then click on the newly added permission row. Click the “Grant admin consent for [your organization name]” button then choose “Yes.”

Click on the “user_impersonation” permission row again to open the modal window, then click to copy the link that is displayed. Note this URL, because it will be used as part of Auth Connect’s “scopes” property later.

![Azure app: Get scopes link](/docs/assets/img/native/azureb2c-scopes-link.png)

#### Create User Flows (Policies)

Create at least one [User Flow](https://docs.microsoft.com/en-us/azure/active-directory-b2c/tutorial-create-user-flows), the series of pages that define the entire authentication experience for your app. At a minimum, create a `Sign up and sign in` flow. Once the User Flow has been created, select it from the User Flow list, then click "Run user flow" from the Overview tab. Note the URL at the top of the page, used to configure Auth Connect's `Discovery URL` property. Also consider creating a `Password reset` flow ([detailed below](#implementing-password-reset)).

Azure AD B2C is now ready to use with Auth Connect.

### Install Auth Connect

Run the following command to install the Auth Connect plugin. For the `AUTH_URL_SCHEME` variable, use the globally unique App Id (ex: `com.company.app`) you decided on when configuring the Azure AD app above.

<native-ent-install plugin-id="auth" variables="--variable AUTH_URL_SCHEME=com.company.app"></native-ent-install>

## Configure Auth Connect

It's recommended to create an `AuthenticationService` class that encapsulates Azure AD and Ionic Auth Connect’s login functionality.

Generate this class using the `ionic generate` command:

<command-line> <command-prompt>ionic generate service services/authentication</command-prompt> </command-line>

Extend the `IonicAuth` class, then configure all Azure AD details in the `IonicAuthOptions` object:

```typescript
import { IonicAuth, IonicAuthOptions } from '@ionic-enterprise/auth';

export class AuthenticationService extends IonicAuth {

constructor() {
    const azureConfig: IonicAuthOptions = {
        // The auth provider.
        authConfig: 'azure',
        // The platform which the app is running on
        platform: 'capacitor',
        // client or application id for provider
        clientID: 'FILL_IN',
        // the discovery url for the provider
        // OpenID configuration
        discoveryUrl: 'FILL_IN',
        // the URI to redirect to after log in
        redirectUri: 'FILL_IN',
        // requested scopes from provider
        scope: 'FILL_IN',
        // the URL to redirect to after log out
        logoutUrl: 'FILL_IN',
        // The type of iOS webview to use. 'shared' will use a webview that can
        // share session/cookies on iOS to provide SSO across multiple apps but
        // will cause a prompt for the user which asks them to confirm they want
        // to share site data with the app. 'private' uses a webview which will
        // not prompt the user but will not be able to share session/cookie data
        // either for true SSO across multiple apps.
        iosWebView: 'private'
    };

    super(azureConfig);
    }
}
```

Some of these `IonicAuthOptions` values are unique, and must be set based on your Azure AD app’s details:

* `platform`: Use “cordova” or “capacitor” accordingly.
* `clientID`: Your app’s _Application (client) ID_. Example: cebbb0be-d578-4bbd-9712-4b0fe05c06aa
* `redirectUri`: The URI to redirect to after the user has logged in. Use the same AUTH_URL_SCHEME variable value (App Id) from when the Auth Connect plugin was installed. Example: com.company.app://callback
* `logoutUrl`: The URI to redirect to after the user has logged out. Example: com.company.app://logout
* `scope`: Unlock access to protected resources, such as read/write permissions. Example: openid offline_access email picture profile

The `scope` property is used to unlock access to protected resources, such as read/write permissions. There’s a variety of attributes available; an example looks like: “openid offline_access email profile”.

In addition to the values above, add the Full Scope Value link created earlier to the `scope` property. To find it in the Azure AD B2C portal, navigate to the “Expose an API” page then click on the Scope you defined earlier. In the modal window, copy the link that appears under “Scope name.” All together, it will look similar to this:

```json
scope: 'openid offline_access email profile https://orgname.onmicrosoft.com/api/user_impersonation',
```

The `discoveryUrl` can be found by navigating to the main Azure AD B2C page -> Policies -> User Flows -> [Select User Flow] -> Overview tab -> Run user flow button. The discovery link is at the top page and will look like the following format:

`https://B2C-TENANT-NAME.b2clogin.com/B2C-TENANT-NAME.onmicrosoft.com/v2.0/.well-known/openid-configuration?p=POLICY-NAME`

Where `B2C-TENANT-NAME` is your tenant name and the `POLICY-NAME` is the name of the User Flow created earlier.

### What's Next?

Check out the full list of [configuration options](/docs/enterprise/auth-connect#ionicauthoptions) available, then implement the [other steps](/docs/enterprise/auth-connect#workflow) in the Auth Connect workflow.

## Implementing Password Reset

To implement password reset functionality, a custom User Flow needs to be created. Navigate to the `User flows (policies)` page, then click the "New user flow" button. Next, select the "Password reset" user flow type. As part of the `Application claims` section, choose "Email Addresses" at a minimum. After the user flow has been created, select it from the User Flow list, then click "Run user flow" from the Overview tab. Note the URL at the top of the page - use it as the discovery url for password reset.

Within your app, implement the following logic:

If an error is thrown after the [Login](/docs/enterprise/auth-connect#iionicauth.login) function is called, inspect the `message` property. If it starts with the string `AADB2C90118` (part of the error message returned by Azure AD), then call [Login](#iionicauth.login) again, this time specifying the location of the password reset endpoint.

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
