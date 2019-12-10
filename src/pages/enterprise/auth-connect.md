---
title: Auth Connect
template: enterprise-plugin
version: 1.3.3
minor: 1.3.X
---

Ionic Auth Connect handles logging in and/or registering a user with an authentication provider (such as Auth0, Azure AD, or AWS Cognito) using industry standard OAuth/OpenId Connect on iOS, Android, or on the web.

When used with [Ionic Identity Vault](/docs/enterprise/identity-vault), it provides a complete security solution for authentication and storage of logged-in credentials.

Auth Connect also allows your app to support multiple authentication providers. Should you need to change providers, easily switch between them without having to develop a new solution. [Learn more.](https://ionicframework.com/auth-connect)

<native-ent-install plugin-id="auth" variables="--variable AUTH_URL_SCHEME='mycustomscheme'"></native-ent-install>

Update the native project config files:
```xml
// Android - AndroidManifest.xml
<intent-filter>
    <data android:scheme="$AUTH_URL_SCHEME"/>
    <action android:name="android.intent.action.VIEW"/>
    <category android:name="android.intent.category.DEFAULT"/>
    <category android:name="android.intent.category.BROWSABLE"/>
</intent-filter>
<intent-filter>
    <action android:name="android.intent.action.SEND"/>
    <category android:name="android.intent.category.DEFAULT"/>
    <data android:mimeType="text/*"/>
</intent-filter>

// iOS - Info.plist (inside existing CFBundleURLTypes)
<dict>
    <key>CFBundleURLSchemes</key>
    <array>
        <string>$AUTH_URL_SCHEME</string>
    </array>
</dict>
```

## Reference App

A [complete login/logout experience](https://github.com/ionic-team/demo-authconnect-auth0) using Auth0. Simply swap the Auth0 configuration in the `IonicAuthOptions` object to switch to a different auth provider.

Configuring Auth Connect
------------------------

The hosting app configures Auth Connect with settings specific to each authentication provider. This is done by passing in an instance of [IonicAuthOptions](#ionicauthoptions) to the [IIonicAuth](#iionicauth) class. The [IIonicAuth](#iionicauth) class is the main interface exposed by the Auth Connect plugin, and is expected to be subclassed for specific behaviors and/or events.

The default behavior for caching tokens in the plugin is not secure and should be replaced with something more robust, such as integrating it with the [Ionic Identity Vault](/docs/enterprise/identity-vault).

To access callbacks, and override behavior as needed, it is recommended to subclass the [IIonicAuth](#iionicauth) interface.

Supported Providers
-------------------

Leveraging the OAuth/OpenId Connect protocols, Auth Connect supports:

* [Auth0](/docs/enterprise/auth-connect/auth0)
* Azure Active Directory (Microsoft)
    * v1.0
    * v2.0, including [Azure Active Directory B2C](/docs/enterprise/auth-connect/azure-ad-b2c)
* [Cognito](/docs/enterprise/auth-connect/aws-cognito) (AWS)

Workflow
----

The typical Auth Connect workflow consists of:

1. The hosting app instantiates the Auth Connect Plugin, passing in the [IonicAuthOptions](#ionicauthoptions) object. Configure it based on the chosen [auth provider](#supported-providers).
2. On app load, the hosting app calls [IsAuthenticated](#iionicauth.isauthenticated) to check if the user is logged in already.
2. If the user isn't logged in, redirect the app to a Login page and call the [Login](#iionicauth.login) method. Auth Connect loads the chosen auth provider's login page.
3. The app user enters their username and password and taps the provider's login button.
4. On success, Auth Connect automatically retrieves and stores the user's access token. The [onLoginSuccess](#onloginsuccess) method is fired, and the app can redirect to the desired protected homepage.
5. The [IsAuthenticated](#iionicauth.isauthenticated) method can be called at any point to refresh the access token.
6. Use [GetAccessToken](#getaccesstoken) to retrieve the access token if making any API requests to the auth provider.

Web Configuration Options
-----------------------

### Login UX Options

Login can occur either within the current tab/window or a separate pop-up window (the default). Here's a visual comparison:

<wistia-video video-id="zk3ys1615x"></wistia-video>

The current tab option is great for developers supporting IE11. Within the `IonicAuthOptions` configuration, set `implicit_login` to "CURRENT". Next, in the login page (or whichever page is navigated to after login - the `redirectUri` in the config options) implement:

```typescript  
async ngOnInit() {
  // If coming back after logging into the auth provider,
  // grab the token from the URL and pass it to Auth Connect
  if (window.location.hash) {
    // Pass it to Auth Connect
    await this.authentication.handleCallback(window.location.href);
    // Navigate to another page
    this.navController.navigateRoot('/tabs/home');
    }
}
```

### Testing Locally

To test an Ionic app using Auth Connect locally, configure `IonicAuthOptions` to use `http://localhost:8100/` as the base URL for properties such as `redirectUri` and `logoutUrl`. Then, run the `ionic serve` command.

Upgrade from v1.1.1 to >=v1.1.2
-------------------------------

**Important Note**

> If you're upgrading from version `1.1.1` to `>=1.1.2`, there are fewer dependencies required to install with the plugin. Simply run the commands below to upgrade. Imports and usage should remain identical.

NOTE: {your url scheme} is the app specific url schemes the plugin was installed with.

First, remove v1.1.1 of the plugin:

```shell
ionic cordova plugin rm @ionic-enterprise/auth --variable AUTH_URL_SCHEME={your url scheme}
```

You should make sure `@ionic-enterprise/auth` and `cordova-plugin-advanced-http` are completely removed from your package.json in all locations.

```javascript
...
  "dependencies": {
    ...
     // Make sure both these are gone from the dependencies
    "@ionic-enterprise/auth": "1.1.1",
    "cordova-plugin-advanced-http": "^2.0.9",
    ...
  }
  "cordova": {
    "plugins": {
      ...
      // Make sure both these are gone from the cordova plugins section as well
      "@ionic-enterprise/auth": {},
      "cordova-plugin-advanced-http": {}
      ...
    },
    ...
  }
...
```

It should now be safe to add >=v1.1.2 of the plugin:

```shell
ionic cordova plugin add @ionic-enterprise/auth@latest --variable AUTH_URL_SCHEME={your url scheme}
```

API Documentation
-----------------

You can find the API and interface documentation for everything below. The main classes to pay attention to are:

*   [IIonicAuth](#iionicauth)
*   [IonicAuthOptions](#ionicauthoptions)
*   [TokenStorageProvider](#tokenstorageprovider) (if [Ionic Identity Vault](/docs/enterprise/identity-vault) is not being used.)
#  Auth Connect

## Index

### Interfaces

* [IHandlers](#ihandlers)
* [IIonicAuth](#iionicauth)
* [IVConfig](#ivconfig)
* [IVUserInterface](#ivuserinterface)
* [IonicAuthOptions](#ionicauthoptions)
* [TokenStorageProvider](#tokenstorageprovider)
* [VaultInterface](#vaultinterface)

### Variables

* [ready](#ready)

---

## Interfaces

<a id="ihandlers"></a>

###  IHandlers

**IHandlers**: 

<a id="ihandlers.onloginsuccess"></a>

###  onLoginSuccess

▸ **onLoginSuccess**(result: *`AuthResult`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| result | `AuthResult` |

**Returns:** `void`

___
<a id="ihandlers.onlogout"></a>

###  onLogout

▸ **onLogout**(): `void`

**Returns:** `void`

___

___
<a id="iionicauth"></a>

###  IIonicAuth

**IIonicAuth**: 

<a id="iionicauth.additionalloginparameters"></a>

###  additionalLoginParameters

▸ **additionalLoginParameters**(parameters: *`object`*): `void`

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| parameters | `object` |  any additional parameters that should be added to the login request examples: \`login\_hint\`, \`domain\_hint\` |

**Returns:** `void`

___
<a id="iionicauth.expire"></a>

###  expire

▸ **expire**(): `Promise`<`void`>

expire the current access token, but keep the refresh token, useful for testing

**Returns:** `Promise`<`void`>

___
<a id="iionicauth.getaccesstoken"></a>

###  getAccessToken

▸ **getAccessToken**(tokenName?: *`undefined` \| `string`*, scopes?: *`undefined` \| `string`*): `Promise`<`string` \| `undefined`>

get the access token, once logged in, for API calls

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` tokenName | `undefined` \| `string` |
| `Optional` scopes | `undefined` \| `string` |

**Returns:** `Promise`<`string` \| `undefined`>

___
<a id="iionicauth.getauthresponse"></a>

###  getAuthResponse

▸ **getAuthResponse**(): `Promise`<`any` \| `undefined`>

get the full original auth response

**Returns:** `Promise`<`any` \| `undefined`>

___
<a id="iionicauth.getidtoken"></a>

###  getIdToken

▸ **getIdToken**(): `Promise`<`IDTokenType` \| `undefined`>

get the parsed id token, includes requested scope values

**Returns:** `Promise`<`IDTokenType` \| `undefined`>

___
<a id="iionicauth.handlecallback"></a>

###  handleCallback

▸ **handleCallback**(url: *`string`*): `Promise`<`AuthResult`>

called by the hosting app when callbacks happen, these will be to the URL specified in the options for LogoutUrl and RedirectUri

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| url | `string` |  callback url to handle |

**Returns:** `Promise`<`AuthResult`>

___
<a id="iionicauth.isauthenticated"></a>

###  isAuthenticated

▸ **isAuthenticated**(): `Promise`<`boolean`>

check to see if the user is logged in, and refresh the token if needed

**Returns:** `Promise`<`boolean`>

___
<a id="iionicauth.login"></a>

###  login

▸ **login**(overrideUrl?: *`undefined` \| `string`*): `Promise`<`void`>

Using configuration display the auth provider's login UI.

The overrideUrl parameter should only be used when the default discovery url needs to be overrode. (The known use case is with Azure AD custom user flows/policies.)

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` overrideUrl | `undefined` \| `string` |

**Returns:** `Promise`<`void`>

___
<a id="iionicauth.logout"></a>

###  logout

▸ **logout**(): `Promise`<`void`>

log the user out

**Returns:** `Promise`<`void`>

___
<a id="iionicauth.onloginsuccess"></a>

###  onLoginSuccess

▸ **onLoginSuccess**(response: *`any`*): `void`

Event handler which can be overridden to handle successful login events

**Parameters:**

| Name | Type |
| ------ | ------ |
| response | `any` |

**Returns:** `void`

___
<a id="iionicauth.onlogout"></a>

###  onLogout

▸ **onLogout**(): `void`

Event handler which can be overridden to handle successful logout events

**Returns:** `void`

___

___
<a id="ivconfig"></a>

###  IVConfig

**IVConfig**: 

<a id="ivconfig.ispasscodesetupneeded"></a>

###  isPasscodeSetupNeeded

**● isPasscodeSetupNeeded**: *`boolean`*

___

___
<a id="ivuserinterface"></a>

###  IVUserInterface

**IVUserInterface**: 

<a id="ivuserinterface.getvault"></a>

###  getVault

▸ **getVault**(): `Promise`<[VaultInterface](#vaultinterface)>

**Returns:** `Promise`<[VaultInterface](#vaultinterface)>

___
<a id="ivuserinterface.setpasscode"></a>

###  setPasscode

▸ **setPasscode**(): `Promise`<`void`>

**Returns:** `Promise`<`void`>

___

___
<a id="ionicauthoptions"></a>

###  IonicAuthOptions

**IonicAuthOptions**: 

Provided by the hosting app, this interface allows the hosting app to configure, and provide information needed to login, logout.

<a id="ionicauthoptions.androidtoolbarcolor"></a>

### `<Optional>` androidToolbarColor

**● androidToolbarColor**: *`undefined` \| `string`*

setting to allow the toolbar color of the android webview control to be set. Takes a string that can be parsed as a color by `android.graphics.Color.parseColor`

___
<a id="ionicauthoptions.audience"></a>

### `<Optional>` audience

**● audience**: *`undefined` \| `string`*

Provided audience (aud) value

___
<a id="ionicauthoptions.authconfig"></a>

### `<Optional>` authConfig

**● authConfig**: *"auth0" \| "azure" \| "cognito"*

The type of the Auth Server, currently only the following are supported:

*   Auth0
*   Azure Active Directory
*   Cognito (AWS)

___
<a id="ionicauthoptions.clientid"></a>

###  clientID

**● clientID**: *`string`*

Provided Application ID

___
<a id="ionicauthoptions.clientsecret"></a>

### `<Optional>` clientSecret

**● clientSecret**: *`undefined` \| `string`*

The client secret, optional only required for Cognito/Web

___
<a id="ionicauthoptions.discoveryurl"></a>

### `<Optional>` discoveryUrl

**● discoveryUrl**: *`undefined` \| `string`*

Location of the Auth Server's discovery endpoint, can be null for Azure

___
<a id="ionicauthoptions.implicitlogin"></a>

### `<Optional>` implicitLogin

**● implicitLogin**: *"CURRENT" \| "POPUP"*

for implicit login (aka web) should the auth window be opened in a new popup window/tab or the current windwow/tab defaults to: `POPUP` for `CURRENT` to work the app will need to call `IIonicAuth::handleCallback` when the auth service navigates to the url set in `redirect_url`

___
<a id="ionicauthoptions.ioswebview"></a>

### `<Optional>` iosWebView

**● iosWebView**: *"private" \| "shared"*

setting the option to `shared` allows for sharing a session between Safari and other applications for a true SSO experience between apps but on iOS 11 and higher it will prompt the user for permission to share the website data with the application. Using `private` avoids the prompt but the session will only be shared with Safari on iOS 10 or lower.

___
<a id="ionicauthoptions.loglevel"></a>

### `<Optional>` logLevel

**● logLevel**: *"DEBUG" \| "ERROR" \| "NONE"*

The log level for the module

___
<a id="ionicauthoptions.logouturl"></a>

###  logoutUrl

**● logoutUrl**: *`string`*

Location that the hosting app expects logout callbacks to navigate to.

___
<a id="ionicauthoptions.platform"></a>

### `<Optional>` platform

**● platform**: *"web" \| "cordova" \| "capacitor"*

Are we hosted in cordova, web, capacitor

___
<a id="ionicauthoptions.redirecturi"></a>

### `<Optional>` redirectUri

**● redirectUri**: *`undefined` \| `string`*

Location that the hosting app expects callbacks to navigate to.

___
<a id="ionicauthoptions.scope"></a>

### `<Optional>` scope

**● scope**: *`undefined` \| `string`*

User details requested from the Authentication provider, each provider may support standard {e.g. openid, profile, email, etc.}, or custom scopes.

___
<a id="ionicauthoptions.tokenstorageprovider"></a>

### `<Optional>` tokenStorageProvider

**● tokenStorageProvider**: *"localStorage" \| [TokenStorageProvider](#tokenstorageprovider) \| [IVUserInterface](#ivuserinterface)*

The type of storage to use for the tokens

___

___
<a id="tokenstorageprovider"></a>

###  TokenStorageProvider

**TokenStorageProvider**: 

This interface can be implemented by the hosting app, and set in the options it should be a wrapper around access to a secure storage solution if [Ionic Identity Vault](/docs/enterprise/identity-vault) is not being used.

<a id="tokenstorageprovider.clear"></a>

### `<Optional>` clear

**● clear**: *`undefined` \| `function`*

clear storage

___
<a id="tokenstorageprovider.getaccesstoken"></a>

### `<Optional>` getAccessToken

**● getAccessToken**: *`undefined` \| `function`*

get the saved access token

___
<a id="tokenstorageprovider.getauthresponse"></a>

### `<Optional>` getAuthResponse

**● getAuthResponse**: *`undefined` \| `function`*

get the full auth result

___
<a id="tokenstorageprovider.getidtoken"></a>

### `<Optional>` getIdToken

**● getIdToken**: *`undefined` \| `function`*

get the id token

___
<a id="tokenstorageprovider.getrefreshtoken"></a>

### `<Optional>` getRefreshToken

**● getRefreshToken**: *`undefined` \| `function`*

get the saved refresh token

___
<a id="tokenstorageprovider.setaccesstoken"></a>

### `<Optional>` setAccessToken

**● setAccessToken**: *`undefined` \| `function`*

save the access token

___
<a id="tokenstorageprovider.setauthresponse"></a>

### `<Optional>` setAuthResponse

**● setAuthResponse**: *`undefined` \| `function`*

save the full auth response

___
<a id="tokenstorageprovider.setidtoken"></a>

### `<Optional>` setIdToken

**● setIdToken**: *`undefined` \| `function`*

save the id token

___
<a id="tokenstorageprovider.setrefreshtoken"></a>

### `<Optional>` setRefreshToken

**● setRefreshToken**: *`undefined` \| `function`*

save the refresh token

___

___
<a id="vaultinterface"></a>

###  VaultInterface

**VaultInterface**: 

<a id="vaultinterface.clear"></a>

###  clear

▸ **clear**(): `Promise`<`void`>

**Returns:** `Promise`<`void`>

___
<a id="vaultinterface.getconfig"></a>

###  getConfig

▸ **getConfig**(): `Promise`<[IVConfig](#ivconfig)>

**Returns:** `Promise`<[IVConfig](#ivconfig)>

___
<a id="vaultinterface.getvalue"></a>

###  getValue

▸ **getValue**(name: *`string`*): `Promise`<`any`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `Promise`<`any`>

___
<a id="vaultinterface.storevalue"></a>

###  storeValue

▸ **storeValue**(name: *`string`*, value: *`any`*): `Promise`<`any`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| value | `any` |

**Returns:** `Promise`<`any`>

___

___

## Variables

<a id="ready"></a>

### `<Const>` ready

**● ready**: *`Promise`<`Object`>* =  new Promise(resolve => {
  document.addEventListener('deviceready', () => {
    resolve();
  });
})

___

## Change Log



### [1.3.3] (2019-11-08)


### Bug Fixes

* **ios:** rename AFNetworking symbols that conflic with advanced-http plugin 



### [1.3.2] (2019-11-01)



### [1.3.1] (2019-10-29)



### [1.3.0] (2019-10-09)


### Bug Fixes

* make sure interfaces are not snake cased, move some parameters off to method to make them more dynmaic, clean up some parameter checking to be more clear, make some dictionary combines clearer. 


### Features

* **ios,android,web:** changes for supporting implicit path (aka web) in window rather than in tabs. allow pass through of login_hint value for azure/auth0 and domain_hint for azure. fixes for param handling 



### [1.2.0] (2019-09-16)


### Bug Fixes

* **all:** remove unneeded plugin deps 
* **ios, web, android:** make sure the access token is valid before returning it 
* **web:** password reset error was being ignored and needed to check  (hash) not  (query params) for value 
* **Web:** Fix issue with IE 11 not working. 


### Features

* **ios,android,web:** support acquiring multiple tokens from an oauth source (especially azure ad), also fix some issues with refresh for the web path. The major change is that getToken now has two optional paramters, they both must be passed in or neither. The parameters are a  and id for the token bein acquired and  the specific scope for the token being acquired. 



### [1.1.4] (2019-08-28)



### [1.1.3] (2019-08-21)



### [1.1.2] (2019-08-14)



### [1.1.1] (2019-07-29)


### Bug Fixes

* **Android, iOS:** fix incorrect package.json dependency 



### [1.1.0] (2019-07-29)


### Features

* **iOS, Android:** Remove extra plugin dependencies and unify flow across Android and all iOS webviews.
