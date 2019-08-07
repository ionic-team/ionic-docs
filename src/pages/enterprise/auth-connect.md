---
title: Auth Connect
template: enterprise-plugin
version: 1.1.1
minor: 1.1.X
---

Overview
--------

The Auth Plugin is designed to handle logging in and/or registering a user using a given authtehnication provider using OAuth/OpenId Connect. Once the hosting app has all of the required information that is passed to the plugin and the plugin handles displaying the authtinication provider's login/registration UI and the providing back to the hosting app access to the tokens for access and refresh.

The hosting app has two things, in addition to the options, that it will provide to the plugin:

*   an implmentation of the [TokenStorageProvider](#tokenstorageprovider) for use in storing the tokens securely. One choice here would be to use the Ionic Enterprise Identity Vault
*   forward on callbacks to the urls used for [logoutUrl](#ionicauthoptions.logouturl) and [redirectUri](#ionicauthoptions.redirecturi) in the options. These are usually specified in the hosting app config to allow the authentication provider to callback to the app and should be forwarded on to [handleCallback](#ionicauth.handlecallback)

Flow
----

1.  Hosting app creates the Auth Plugin and passes in the [options](#ionicauthoptions)
2.  [Login](#ionicauth.login) or [Register](#ionicauth.register) are called to login/register a user using the authentication provider supplied in the options.
3.  The hosting app can wait on [IsAuthenticated](#ionicauth.isauthenticated) until it succeeds or fails.
4.  On success the access token can be retrieved and used as needed.
5.  [IsAuthenticated](#ionicauth.isauthenticated) can be called again to refresh the access token as needed.

Implicit/Web Flow Notes
-----------------------

The redirect URL for the auth service needs to be local path that the hosting app can naviate to, as the auth plugin needs to read the tokens from the redirect url. The auth service needs to support returning the authorization and id tokens back to the implict path (for Azure this is under App registrations/Authentication in the 'Implict Grants' section).

Supported Providers
-------------------

OAuth/OpenId Connect from the following providers:

*   Cognito (AWS)
*   Azure Active Directory v.2 (Micorosoft)
*   Auth0

## Index

### Interfaces

* [IHandlers](#ihandlers)
* [IIonicAuth](#iionicauth)
* [IonicAuthOptions](#ionicauthoptions)
* [TokenStorageProvider](#tokenstorageprovider)

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

<a id="iionicauth.expire"></a>

###  expire

▸ **expire**(): `Promise`<`void`>

expire the current access token, but keep the refresh token, useful for testing

**Returns:** `Promise`<`void`>

___
<a id="iionicauth.getaccesstoken"></a>

###  getAccessToken

▸ **getAccessToken**(): `Promise`<`string` \| `undefined`>

get the access token, once logged in, for API calls

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

▸ **login**(): `Promise`<`void`>

using configuration display the auth provider's login UI

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

Event handler which can be overriden to handle successful login events

**Parameters:**

| Name | Type |
| ------ | ------ |
| response | `any` |

**Returns:** `void`

___
<a id="iionicauth.onlogout"></a>

###  onLogout

▸ **onLogout**(): `void`

Event handler which can be overriden to handle successful logout events

**Returns:** `void`

___

___
<a id="ionicauthoptions"></a>

###  IonicAuthOptions

**IonicAuthOptions**: 

Provided by the hosting app, this interface allows the hosting app to configure, and provide information needed to login, logout.

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
*   Azure Active Directory v2
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

User details requested from the Authintication provider, each provider may support standard {e.g. openid, profile, email, etc.}, or cutom scopes.

___
<a id="ionicauthoptions.tokenstorageprovider"></a>

### `<Optional>` tokenStorageProvider

**● tokenStorageProvider**: *"localStorage" \| `IdentityVaultUser`<`any`> \| [TokenStorageProvider](#tokenstorageprovider)*

The type of storage to use for the tokens

___

___
<a id="tokenstorageprovider"></a>

###  TokenStorageProvider

**TokenStorageProvider**: 

This interface should be implemented by the hosting app, and set in the options it should be a wrapper around access to a secure storage solution, such as Ionic Enterprise Identity Vault

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



### [1.1.1] (2019-07-29)


### Bug Fixes

* **Android, iOS:** fix incorrect package.json dependency 



### [1.1.0] (2019-07-29)


### Features

* **iOS, Android:** Remove extra plugin dependencies and unify flow across Android and all iOS webviews.
