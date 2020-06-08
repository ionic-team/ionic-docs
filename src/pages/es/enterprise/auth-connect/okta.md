# Okta Configuration

## Configuration Details

### Okta Configuration

Before integrating Auth Connect into your Ionic app, you’ll need to get Okta up and running.

> **Note:** For complete information on configuring Okta, consult the [official documentation](https://developer.okta.com/docs/guides/sign-into-spa/angular/before-you-begin/) which includes tutorials on creating users and applications.

We recommend following the guide for Single Page Applications. This will enable your application to use the PKCE authentication flow and will work for both browser and app authentication.

### Install Auth Connect

Run the following command to install the Auth Connect plugin. For the `AUTH_URL_SCHEME` variable, use the globally unique App Id (ex: `com.company.app`) you decided on when configuring the Azure AD app above.

<native-ent-install plugin-id="auth" variables="--variable AUTH_URL_SCHEME=com.company.app"></native-ent-install>

### Configure Auth Connect

It's recommended to create an `AuthenticationService` class that encapsulates Okta and Ionic Auth Connect’s login functionality.

Generate this class using the `ionic generate` command:

<command-line> <command-prompt>ionic generate service services/authentication</command-prompt> </command-line>

Extend the `IonicAuth` class, then configure all Okta details in the `IonicAuthOptions` object:

```typescript
import { IonicAuth, IonicAuthOptions } from '@ionic-enterprise/auth';

export class AuthenticationService extends IonicAuth {

constructor() {
  const oktaConfig: IonicAuthOptions = {
    // The auth provider.
    authConfig: 'okta',
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
    // Use the newer PKCE Authentication Flow
    webAuthFlow: 'PKCE'
    };

    super(oktaConfig);
  }
}
```

Some of these `IonicAuthOptions` values are unique, and must be set based on your Okta details:

* `platform`: Use “cordova” or “capacitor” accordingly.
* `clientID`: Your app’s Client ID, found under Applications -> [Your Application] -> General.
* `redirectUri`: The URI to redirect to after the user has logged in. Use the same AUTH_URL_SCHEME variable value (App Id) from when the Auth Connect plugin was installed. Example: com.company.app://callback. Find this under Applications -> [Your Application] -> General.
* `logoutUrl`: The URI to redirect to after the user has logged out. Example: com.company.app://login?logout=true. Find this under Applications -> [Your Application] -> General.

The `discoveryUrl` formula is:

https://ORGANIZATION_DOMAIN.okta.com/.well-known/openid-configuration

Where `ORGANIZATION_DOMAIN` is the domain you created when setting up your Okta account. You can find a reference to this under Applications -> [Your Application] -> Sign On -> OpenID Connect ID Token -> Issuer

### What's Next?

Check out the full list of [configuration options](/docs/enterprise/auth-connect#ionicauthoptions) available, then implement the [other steps](/docs/enterprise/auth-connect#workflow) in the Auth Connect workflow.