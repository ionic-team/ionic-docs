---
title: Auth Connect
template: enterprise-plugin
version: 1.1.2
minor: 1.1.X
---

## Overview

The Auth Plugin handles logging in and/or registering a user with an authentication provider (such as Auth0, Azure AD, or AWS Cognito) using industry standard OAuth/OpenId Connect on iOS and Android, or on the web.

When used with the [Ionic Identity Vault](/docs/enterprise/identity-vault) plugin it provides a complete secure solution for authentication and storage of logged in credentials.

Auth Plugin also allows you app to support multiple authentication providers, or allow you to switch from one to another without having to develop a new solution.

## Configuring Auth Connect

To configure the Auth Connect plugin the hosting app should provide settings specific to how authentication provider is configured. This is done by passing in an instance of [IonicAuthOptions](#ionicauthoptions) to the [IIonicAuth](#iionicauth) class. The [IIonicAuth](#iionicauth) class is the main interface exposed by the Auth Connect plugin, and is expected to be subclassed for specific behaviors and/or events.

The default behavior for caching tokens in the plugin is not secure and should be replaced with something more robust, such as integrating it with the [Ionic Identity Vault](/docs/enterprise/identity-vault).

To access callbacks, and override behavior as needed, it is recommended to subclass the [IIonicAuth](#iionicauth) interface.

### Note for handling password reset cases from Azure AD with custom user flows/policies

When using custom user flows/policies with Azure AD password reset needs to be handled by a separate endpoint. To handle this:

1. when [Login](#iionicauth.login) is called if there is an error
2. if that error contains a `message` property that starts with the string `AADB2C90118` (this is an error message returned by Azure AD)
3. the app should call [Login](#iionicauth.login) with the location of the password reset endpoint

## Flow

1. Hosting app creates the Auth Plugin and passes in the [options](#ionicauthoptions)
2. [Login](#iionicauth.login) is called
3. The hosting app can wait on [IsAuthenticated](#iionicauth.isauthenticated) until it succeeds or fails.
4. On success the access token can be retrieved and used as needed and the [onLoginSuccess](#onloginsuccess) method will be called.
5. [IsAuthenticated](#iionicauth.isauthenticated) can be called again to refresh the access token as needed.

## Implicit/Web Flow Notes

The redirect URL for the auth service needs to be local path that the hosting app can navigate to, as the auth plugin needs to read the tokens from the redirect url. The auth service needs to support returning the authorization and id tokens back to the implicit path (for Azure this is under App registrations/Authentication in the 'Implicit Grants' section).

## Supported Providers

OAuth/OpenId Connect from the following providers:

* Cognito (AWS)
* Azure Active Directory v.2 (Microsoft)
* Auth0

## API Documentation

You can find the API and interface documentation for everything below. The main classes to pay attention to are:

* [IIonicAuth](#iionicauth)
* [IonicAuthOptions](#ionicauthoptions)
* [TokenStorageProvider](#tokenstorageprovider) (if [Ionic Identity Vault](/docs/enterprise/identity-vault) is not being used.)

## Index

### Interfaces

* [IHandlers](#ihandlers)
* [IIonicAuth](#iionicauth)
* [IonicAuthOptions](#ionicauthoptions)
* [TokenStorageProvider](#tokenstorageprovider)

### Variables

* [ready](#ready)

* * *

## Interfaces

<a id="ihandlers"></a>

### IHandlers

**IHandlers**:

<a id="ihandlers.onloginsuccess"></a>

### onLoginSuccess

▸ **onLoginSuccess**(result: *`AuthResult`*): `void`

**Parameters:**

| Name   | Type         |
| ------ | ------------ |
| result | `AuthResult` |


**Returns:** `void`

* * *

<a id="ihandlers.onlogout"></a>

### onLogout

▸ **onLogout**(): `void`

**Returns:** `void`

* * *

* * *

<a id="iionicauth"></a>

### IIonicAuth

**IIonicAuth**:

<a id="iionicauth.expire"></a>

### expire

▸ **expire**(): `Promise`<`void`>

expire the current access token, but keep the refresh token, useful for testing

**Returns:** `Promise`<`void`>

* * *

<a id="iionicauth.getaccesstoken"></a>

### getAccessToken

▸ **getAccessToken**(): `Promise`<`string` \| `undefined`>

get the access token, once logged in, for API calls

**Returns:** `Promise`<`string` \| `undefined`>

* * *

<a id="iionicauth.getauthresponse"></a>

### getAuthResponse

▸ **getAuthResponse**(): `Promise`<`any` \| `undefined`>

get the full original auth response

**Returns:** `Promise`<`any` \| `undefined`>

* * *

<a id="iionicauth.getidtoken"></a>

### getIdToken

▸ **getIdToken**(): `Promise`<`IDTokenType` \| `undefined`>

get the parsed id token, includes requested scope values

**Returns:** `Promise`<`IDTokenType` \| `undefined`>

* * *

<a id="iionicauth.handlecallback"></a>

### handleCallback

▸ **handleCallback**(url: *`string`*): `Promise`<`AuthResult`>

called by the hosting app when callbacks happen, these will be to the URL specified in the options for LogoutUrl and RedirectUri

**Parameters:**

| Name | Type     | Description            |
| ---- | -------- | ---------------------- |
| url  | `string` | callback url to handle |


**Returns:** `Promise`<`AuthResult`>

* * *

<a id="iionicauth.isauthenticated"></a>

### isAuthenticated

▸ **isAuthenticated**(): `Promise`<`boolean`>

check to see if the user is logged in, and refresh the token if needed

**Returns:** `Promise`<`boolean`>

* * *

<a id="iionicauth.login"></a>

### login

▸ **login**(overrideUrl?: *`undefined` \| `string`*): `Promise`<`void`>

Using configuration display the auth provider's login UI.

The overrideUrl parameter should only be used when the default discovery url needs to be overrode. (The known use case is with Azure AD custom user flows/policies.)

**Parameters:**

| Name                   | Type                     |
| ---------------------- | ------------------------ |
| `Optional` overrideUrl | `undefined` \| `string` |


**Returns:** `Promise`<`void`>

* * *

<a id="iionicauth.logout"></a>

### logout

▸ **logout**(): `Promise`<`void`>

log the user out

**Returns:** `Promise`<`void`>

* * *

<a id="iionicauth.onloginsuccess"></a>

### onLoginSuccess

▸ **onLoginSuccess**(response: *`any`*): `void`

Event handler which can be overriden to handle successful login events

**Parameters:**

| Name     | Type  |
| -------- | ----- |
| response | `any` |


**Returns:** `void`

* * *

<a id="iionicauth.onlogout"></a>

### onLogout

▸ **onLogout**(): `void`

Event handler which can be overriden to handle successful logout events

**Returns:** `void`

* * *

* * *

<a id="ionicauthoptions"></a>

### IonicAuthOptions

**IonicAuthOptions**:

Provided by the hosting app, this interface allows the hosting app to configure, and provide information needed to login, logout.

<a id="ionicauthoptions.androidtoolbarcolor"></a>

### `<Optional>` androidToolbarColor

**● androidToolbarColor**: *`undefined` \| `string`*

setting to allow the toolbar color of the android webview control to be set. Takes a string that can be parsed as a color by `android.graphics.Color.parseColor`

* * *

<a id="ionicauthoptions.audience"></a>

### `<Optional>` audience

**● audience**: *`undefined` \| `string`*

Provided audience (aud) value

* * *

<a id="ionicauthoptions.authconfig"></a>

### `<Optional>` authConfig

**● authConfig**: *"auth0" \| "azure" \| "cognito"*

The type of the Auth Server, currently only the following are supported:

* Auth0
* Azure Active Directory v2
* Cognito (AWS)

* * *

<a id="ionicauthoptions.clientid"></a>

### clientID

**● clientID**: *`string`*

Provided Application ID

* * *

<a id="ionicauthoptions.clientsecret"></a>

### `<Optional>` clientSecret

**● clientSecret**: *`undefined` \| `string`*

The client secret, optional only required for Cognito/Web

* * *

<a id="ionicauthoptions.discoveryurl"></a>

### `<Optional>` discoveryUrl

**● discoveryUrl**: *`undefined` \| `string`*

Location of the Auth Server's discovery endpoint, can be null for Azure

* * *

<a id="ionicauthoptions.ioswebview"></a>

### `<Optional>` iosWebView

**● iosWebView**: *"private" \| "shared"*

setting the option to `shared` allows for sharing a session between Safari and other applications for a true SSO experience between apps but on iOS 11 and higher it will prompt the user for permission to share the website data with the application. Using `private` avoids the prompt but the session will only be shared with Safari on iOS 10 or lower.

* * *

<a id="ionicauthoptions.loglevel"></a>

### `<Optional>` logLevel

**● logLevel**: *"DEBUG" \| "ERROR" \| "NONE"*

The log level for the module

* * *

<a id="ionicauthoptions.logouturl"></a>

### logoutUrl

**● logoutUrl**: *`string`*

Location that the hosting app expects logout callbacks to navigate to.

* * *

<a id="ionicauthoptions.platform"></a>

### `<Optional>` platform

**● platform**: *"web" \| "cordova" \| "capacitor"*

Are we hosted in cordova, web, capacitor

* * *

<a id="ionicauthoptions.redirecturi"></a>

### `<Optional>` redirectUri

**● redirectUri**: *`undefined` \| `string`*

Location that the hosting app expects callbacks to navigate to.

* * *

<a id="ionicauthoptions.scope"></a>

### `<Optional>` scope

**● scope**: *`undefined` \| `string`*

User details requested from the Authintication provider, each provider may support standard {e.g. openid, profile, email, etc.}, or cutom scopes.

* * *

<a id="ionicauthoptions.tokenstorageprovider"></a>

### `<Optional>` tokenStorageProvider

**● tokenStorageProvider**: *"localStorage" \| `IdentityVaultUser`<`any`> \| [TokenStorageProvider](#tokenstorageprovider)*

The type of storage to use for the tokens

* * *

* * *

<a id="tokenstorageprovider"></a>

### TokenStorageProvider

**TokenStorageProvider**:

This interface can be implemented by the hosting app, and set in the options it should be a wrapper around access to a secure storage solution if [Ionic Identity Vault](/docs/enterprise/identity-vault) is not being used.

<a id="tokenstorageprovider.clear"></a>

### `<Optional>` clear

**● clear**: *`undefined` \| `function`*

clear storage

* * *

<a id="tokenstorageprovider.getaccesstoken"></a>

### `<Optional>` getAccessToken

**● getAccessToken**: *`undefined` \| `function`*

get the saved access token

* * *

<a id="tokenstorageprovider.getauthresponse"></a>

### `<Optional>` getAuthResponse

**● getAuthResponse**: *`undefined` \| `function`*

get the full auth result

* * *

<a id="tokenstorageprovider.getidtoken"></a>

### `<Optional>` getIdToken

**● getIdToken**: *`undefined` \| `function`*

get the id token

* * *

<a id="tokenstorageprovider.getrefreshtoken"></a>

### `<Optional>` getRefreshToken

**● getRefreshToken**: *`undefined` \| `function`*

get the saved refresh token

* * *

<a id="tokenstorageprovider.setaccesstoken"></a>

### `<Optional>` setAccessToken

**● setAccessToken**: *`undefined` \| `function`*

save the access token

* * *

<a id="tokenstorageprovider.setauthresponse"></a>

### `<Optional>` setAuthResponse

**● setAuthResponse**: *`undefined` \| `function`*

save the full auth response

* * *

<a id="tokenstorageprovider.setidtoken"></a>

### `<Optional>` setIdToken

**● setIdToken**: *`undefined` \| `function`*

save the id token

* * *

<a id="tokenstorageprovider.setrefreshtoken"></a>

### `<Optional>` setRefreshToken

**● setRefreshToken**: *`undefined` \| `function`*

save the refresh token

* * *

* * *

## Variables

<a id="ready"></a>

### `<Const>` ready

**● ready**: *`Promise`<`Object`>* = new Promise(resolve => { document.addEventListener('deviceready', () => { resolve(); }); })

* * *

## Change Log

### \[1.1.2\] (2019-08-14)

### \[1.1.1\] (2019-07-29)

### Bug Fixes

* **Android, iOS:** fix incorrect package.json dependency 

### \[1.1.0\] (2019-07-29)

### Features

* **iOS, Android:** Remove extra plugin dependencies and unify flow across Android and all iOS webviews.