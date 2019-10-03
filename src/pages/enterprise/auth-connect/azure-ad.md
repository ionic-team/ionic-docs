# Azure Active Directory Configuration

## Configuration Details

### Azure Configuration

Before integrating Auth Connect into your Ionic app, you’ll need to get Azure Active Directory (AD) up and running.

> Note: For complete information on configuring Azure AD, consult the [official B2C documentation](https://docs.microsoft.com/en-us/azure/active-directory-b2c/tutorial-create-tenant) which includes tutorials on creating a B2C tenant, registering applications, and more.

#### Create an Azure AD B2C Tenant

If you don't have one, [create a new B2C tenant](https://docs.microsoft.com/en-us/azure/active-directory-b2c/tutorial-create-tenant).

#### Register an Application

Sign into the [Azure Portal](https://portal.azure.com) then navigate to the `Azure AD B2C` service page (the easiest way to find it is to search for "b2c", then choose "Azure AD B2C".)

Begin by creating a new Application under Manage -> Applications -> Add. 

![Azure app configuration settings](/docs/assets/img/native/azure-app-settings.png)

Give your app a new name, then toggle `Yes` for both _Web App_ and _Allow implicit flow_. For _Reply URL_, specify `http://localhost:8100/` along with the name of your app's core login page (typically, `login`).

Next, toggle `Yes` for _Native client_. Note the _Redirect URIs_ that are displayed. 

Next, choose your globally unique App Id, which is used both in the Azure configuration as well as Cordova/Capacitor. Typically, this takes the form of `company-AppName` or reverse DNS style - `com.company.app`.

With that in hand, set the _Custom Redirect URI_. After the app user signs into Azure AD, this tells Auth Connect which page to redirect to in your app. Use the formula “uniqueId://page”, such as `com.company.app://callback`.

After filling in all details above, click the Create button. 

#### Create User Flows (Policies)

Create at least one [User Flow](https://docs.microsoft.com/en-us/azure/active-directory-b2c/tutorial-create-user-flows), the series of pages your users will interact with to sign up/sign into their account. Note the `Name` of the User Flow you create, as it's needed for configuring the Auth Connect `Discovery URL` property.

Azure AD is now ready to use with Auth Connect.

### Install Auth Connect

Run the following command to install the Auth Connect plugin. For the `AUTH_URL_SCHEME` variable, use the globally unique App Id (ex: `com.company.app`) you decided on when configuring the Azure AD app above.

<command-line>
<command-prompt>ionic cordova plugin add @ionic-enterprise/auth --variable AUTH_URL_SCHEME=com.company.app</command-prompt>
</command-line>

### Configure Auth Connect

It's recommended to create an `AuthenticationService` class that encapsulates Azure AD and Ionic Auth Connect’s login functionality.

Generate this class using the `ionic generate` command:

<command-line>
<command-prompt>ionic generate service services/authentication</command-prompt>
</command-line>

Extend the `IonicAuth` class, then configure all Azure AD details in the `IonicAuthOptions` object:

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

Some of these `IonicAuthOptions` values are unique, and must be set based on your Azure AD app’s details:

* `platform`: Use “cordova” or “capacitor” accordingly.
* `clientID`: Your app’s _Application ID_. Example: cebbb0be-d578-4bbd-9712-4b0fe05c06aa
* `redirectUri`: The URI to redirect to after the user has logged in. Use the same AUTH_URL_SCHEME variable value (App Id) from when the Auth Connect plugin was installed. Example: com.company.app://callback
* `logoutUrl`: The URI to redirect to after the user has logged out. Example: com.company.app://login?logout=true
* `audience`: Your custom API URL of choice, such as `https://api.myapp.com`.
* `scope`: Unlock access to protected resources, such as read/write permissions. Example: openid offline_access email picture profile

The `discoveryUrl` consists of the following format:

`https://B2C-TENANT-NAME.b2clogin.com/B2C-TENANT-NAME.onmicrosoft.com/v2.0/.well-known/openid-configuration?p=POLICY-NAME`

Replace `B2C-TENANT-NAME` with your tenant name and the `POLICY-NAME` with the name of the User Flow created earlier.

### What's Next?

Check out the full list of [configuration options](/docs/enterprise/auth-connect#ionicauthoptions) available, then implement the [other steps](/docs/enterprise/auth-connect#workflow) in the Auth Connect workflow.