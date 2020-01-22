# AWS Cognito Configuration

## Configuration Details

### AWS Configuration

Before integrating Auth Connect into your Ionic app, you’ll need to get AWS Cognito up and running.

> **Note:** For complete information on configuring AWS Cognito, consult the [official documentation](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-getting-started.html) which includes tutorials on creating user and identity pools and more.

When creating a User Pool, be sure to add an app client. Additional Auth Connect-related configurations can be found under the App integration and Federation sections.

### Install Auth Connect

Run the following command to install the Auth Connect plugin. For the `AUTH_URL_SCHEME` variable, use the globally unique App Id (ex: `com.company.app`) you decided on when configuring the Azure AD app above.

<native-ent-install plugin-id="auth" variables="--variable AUTH_URL_SCHEME=com.company.app"></native-ent-install>

### Configure Auth Connect

It's recommended to create an `AuthenticationService` class that encapsulates AWS Cognito and Ionic Auth Connect’s login functionality.

Generate this class using the `ionic generate` command:

<command-line> <command-prompt>ionic generate service services/authentication</command-prompt> </command-line>

Extend the `IonicAuth` class, then configure all AWS Cognito details in the `IonicAuthOptions` object:

```typescript
import { IonicAuth, IonicAuthOptions } from '@ionic-enterprise/auth';

export class AuthenticationService extends IonicAuth {

constructor() {
  const cognitoConfig: IonicAuthOptions = {
    // The auth provider.
    authConfig: 'cognito',
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
    clientSecret: 'FILL_IN'
    };

    super(cognitoConfig);
  }
}
```

Some of these `IonicAuthOptions` values are unique, and must be set based on your Cognito details:

* `platform`: Use “cordova” or “capacitor” accordingly.
* `clientID`: Your app’s Client ID, found under [User Pool] -> General Settings -> App clients.
* `clientSecret`: Your apps' Client Secret, found under [User Pool] -> General Settings -> App clients.
* `redirectUri`: The URI to redirect to after the user has logged in. Use the same AUTH_URL_SCHEME variable value (App Id) from when the Auth Connect plugin was installed. Example: com.company.app://callback. Find this under [User Pool] -> App Integration -> App client settings.
* `logoutUrl`: The URI to redirect to after the user has logged out. Example: com.company.app://login?logout=true. Find this under [User Pool] -> App Integration -> App client settings.

The `discoveryUrl` formula is:

https://cognito-idp.REGION.amazonaws.com/USER-POOL-ID/.well-known.openid-configuration

Where `REGION` is the hosted AWS region (like "us-east-1) and `USER-POOL-ID` is the Pool Id (like "us-east-1_vdkald21"), found under [User Pool] -> General Settings.

### What's Next?

Check out the full list of [configuration options](/docs/enterprise/auth-connect#ionicauthoptions) available, then implement the [other steps](/docs/enterprise/auth-connect#workflow) in the Auth Connect workflow.