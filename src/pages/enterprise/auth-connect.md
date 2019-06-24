---
title: Auth Connect
template: enterprise-plugin
version: 1.0.2
minor: 1.0.X
---

Ionic Auth Connect
==================

Auth Connect provides a simple, secure method of integrating with authentication providers to enable single sign-on (SSO) within your Ionic applications.

Using the OAuth and OpenID Connect authentication standards, Auth Connect provides all the infrastructure needed to set up login and token refresh in an Ionic app, along with sample configuration files for easily integrating with auth providers that use the above standards. The Auth Connect handles displaying the UI from the authentication provider, so neither your app or the Auth Connect plugin need to handle the information required to login.

The application you are adding authentication to (also known as the hosting app) will provide two articles of information to the Auth Connect plugin, in addition to any options you configure:

1. An implementation of the [TokenStorageProvider](#tokenstorageprovider) for use in storing the tokens securely. One choice here would be to use the Ionic Enterprise [Identity Vault](/docs/enterprise/identity-vault).
2. Forward on callbacks to the urls used for [logoutUrl](#ionicauthoptions.logouturl) and [redirectUri](#ionicauthoptions.redirecturi) in the options. These are usually specified in the hosting app config to allow the authentication provider to callback to the app and should be forwarded on to [handleCallback](#ionicauth.handlecallback).


Flow
----

1.  The hosting app passes in the [configuration options](#ionicauthoptions) to Auth Connect.
2.  [Login](#ionicauth.login) or [Register](#ionicauth.register) are called to login/register a user using the authentication provider supplied in the options.
3.  The hosting app can wait on [IsAuthenticated](#ionicauth.isauthenticated) until it succeeds or fails.
4.  On success, the access token can be retrieved and used as needed.
5.  [IsAuthenticated](#ionicauth.isauthenticated) can be called again to refresh the access token as needed.

Supported Providers
-------------------

OAuth/OpenId Connect from the following providers:

*   Cognito (AWS)
*   Azure Active Directory v.2 (Microsoft)
*   Auth0

\=======

## Index

### Classes

* [IonicAuth](#ionicauth)

### Interfaces

* [IonicAuthOptions](#ionicauthoptions)
* [TokenStorageProvider](#tokenstorageprovider)

---

## Classes

<a id="ionicauth"></a>

###  IonicAuth

**IonicAuth**: 

<a id="ionicauth.expire"></a>

###  expire

▸ **expire**(): `Promise`<`void`>

expire the current access token, but keep the refresh token, useful for testing

**Returns:** `Promise`<`void`>

___
<a id="ionicauth.getaccesstoken"></a>

###  getAccessToken

▸ **getAccessToken**(): `Promise`<`string` \| `undefined`>

get the access token, once logged in, for API calls

**Returns:** `Promise`<`string` \| `undefined`>

___
<a id="ionicauth.getidtoken"></a>

###  getIdToken

▸ **getIdToken**(): `Promise`<`any`>

get the parsed id token, includes requested scope values

**Returns:** `Promise`<`any`>

___
<a id="ionicauth.handlecallback"></a>

###  handleCallback

▸ **handleCallback**(url: *`string`*): `Promise`<`AuthResult`>

called by the hosting app when callbacks happen, these will be to the URL specified in the options for LogoutUrl and RedirectUri

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| url | `string` |  callback url to handle |

**Returns:** `Promise`<`AuthResult`>

___
<a id="ionicauth.isauthenticated"></a>

###  isAuthenticated

▸ **isAuthenticated**(): `Promise`<`boolean`>

check to see if the user is logged in, and refresh the token if needed

**Returns:** `Promise`<`boolean`>

___
<a id="ionicauth.login"></a>

###  login

▸ **login**(): `Promise`<`void`>

using configuration display the auth provider's login UI

**Returns:** `Promise`<`void`>

___
<a id="ionicauth.logout"></a>

###  logout

▸ **logout**(): `Promise`<`void`>

log the user out

**Returns:** `Promise`<`void`>

___
<a id="ionicauth.register"></a>

###  register

▸ **register**(): `Promise`<`void`>

using configuration display the auth provider's registration UI

**Returns:** `Promise`<`void`>

___

___

## Interfaces

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

**● authConfig**: *`undefined` \| `string`*

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
<a id="ionicauthoptions.discoveryurl"></a>

### `<Optional>` discoveryUrl

**● discoveryUrl**: *`undefined` \| `string`*

Location of the Auth Server's discovery endpoint, can be null for Azure

___
<a id="ionicauthoptions.logouturl"></a>

###  logoutUrl

**● logoutUrl**: *`string`*

Location that the hosting app expects logout callbacks to navigate to.

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

**● tokenStorageProvider**: *[TokenStorageProvider](#tokenstorageprovider)*

Token Storage Provider for secure storage of tokens.

___

___
<a id="tokenstorageprovider"></a>

###  TokenStorageProvider

**TokenStorageProvider**: 

This interface should be implemented by the hosting app, and set in the options it should be a wrapper around access to a secure storage solution, such as Ionic Enterprise Identity Vault

<a id="tokenstorageprovider.getaccesstoken"></a>

### `<Optional>` getAccessToken

**● getAccessToken**: *`undefined` \| `function`*

get the saved access token

___
<a id="tokenstorageprovider.getclientsecret"></a>

### `<Optional>` getClientSecret

**● getClientSecret**: *`undefined` \| `function`*

get the client secret, optional only required for Cognito

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
<a id="tokenstorageprovider.setclientsecret"></a>

### `<Optional>` setClientSecret

**● setClientSecret**: *`undefined` \| `function`*

save the client secret, this should be set by the app, optional only required for Cognito

___
<a id="tokenstorageprovider.setrefreshtoken"></a>

### `<Optional>` setRefreshToken

**● setRefreshToken**: *`undefined` \| `function`*

save the refresh token

___

___

## Change Log



## 1.0.2 (2019-06-17)



## 1.0.1 (2019-06-11)
