---
title: Identity Vault
template: enterprise-plugin
version: 3.0.0
minor: 3.0.X
otherVersions:
  - 2.0.X
  - 3.0.X
  - 3.1.X
  - 3.2.X
  - 3.3.X
  - 3.4.X
---

# Ionic Identity Vault

The Ionic Identity Vault is an all-in-one frontend identity management system that uses security best practices and the latest in biometric authentication options available on iOS and Android.

The Vault manages secure user identity and session tokens, ensuring sensitive tokens are encrypted at rest, stored only in secure locations on the device, and unlocked only with biometric identity (TouchID/FaceID).

Without Ionic Identity Vault, Ionic developers have to resort to combining third party Cordova plugins, often resulting in insecure setups due to the lack of correct implementation of biometric and at-rest encryption strategies.

#### Configuring the Vault

The IonicIdentityVaultUser class takes a generic session type which represents the type of the session you'll store in teh vault. You can use the [DefaultSession](#defaultsession) or extend the class to create a custom session. In the constructor of your `User` service, the vault is configured by providing options to the `super()` call:

```typescript
interface MyCustomSession extends DefaultSession {
  // username & token are inherited
  email: string;
  age: number;
  nicknames: string[];
}

export class IdentityService extends IonicIdentityVaultUser<MyCustomSession> {

constructor(private http: HttpClient, private router: Router, platform: Platform) {
  super(platform, {
    authMode: AuthMode.BiometricAndPasscode, // Use biometrics auth with passcode fallback
    restoreSessionOnReady: false, // whether or not to immediately attempt to restore the session when the vault is ready
    unlockOnReady: false, // set true to auto prompt the user to unlock when vault is ready
    unlockOnAccess: true, // set to true to auto prompt the user to unlock on first read access
    lockAfter: 5000, // lock after 5 seconds in the background
    hideScreenOnBackground: true // when in app launcher mode hide the current screen and display the splashscreen
  });

  onVaultUnlocked(config: VaultConfig) {
    //Route to my home page
  }

  onVaultLocked(event: LockEvent) {
    //Route to my login page
  }

  async onPasscodeRequest(isSetupRequest: boolean) {
    // Display a custom Passcode prompt and return the passcode as a string
    // or return undefined to use the build in native prompts. isSetupRequest
    // is true when attempting to set a new passcode on the vault, you can use
    // it to do something like prompt the user twice for the pin.
  }

}
```

## Automatically adding your token to requests

If you'd like to automatically add your authorization token from your user service to every request, you can see a simple example at in our [demo repo](https://github.com/ionic-team/cs-demo-iv/blob/master/src/app/services/http-interceptors/auth-interceptor.ts).

## API Documentation

You can find the API and interface documentation for everything below. The main classes to pay attention to are:

* [IonicIdentityVaultUser](#identityvaultuser) - Subclass this when creating your identity service.
* [DefaultSession](#defaultsession) - This is the generic type that represents your session. Extend this to implement a custom session.
* [IdentityVault](#identityvault) - This is the lower level vault API. You can used this to implement advanced workflows including multi tenant vaults.

## Index

### Enumerations

* [AuthMode](#authmode)
* [VaultErrorCodes](#vaulterrorcodes)

### Interfaces

* [DefaultSession](#defaultsession)
* [IdentityVault](#identityvault)
* [IdentityVaultUser](#identityvaultuser)
* [IonicNativeAuthPlugin](#ionicnativeauthplugin)
* [LockEvent](#lockevent)
* [PluginConfiguration](#pluginconfiguration)
* [PluginOptions](#pluginoptions)
* [VaultConfig](#vaultconfig)
* [VaultDescriptor](#vaultdescriptor)
* [VaultError](#vaulterror)
* [VaultOptions](#vaultoptions)

### Type aliases

* [BiometricType](#biometrictype)

* * *

## Enumerations

<a id="authmode"></a>

### AuthMode

**AuthMode**:

The type of authentication the vault should be configured to allow.

<a id="authmode.biometricandpasscode"></a>

### BiometricAndPasscode

**BiometricAndPasscode**:

Both biometric and passcode authentication should be allowed

* * *

<a id="authmode.biometriconly"></a>

### BiometricOnly

**BiometricOnly**:

Biometrics authentication should only be allowed

* * *

<a id="authmode.inmemoryonly"></a>

### InMemoryOnly

**InMemoryOnly**:

Both biometric and passcode authentication should be disabled. With this setting all data in the vault will be cleared on lock or if the app is closed. Stored data is kept only in memory.

* * *

<a id="authmode.passcodeonly"></a>

### PasscodeOnly

**PasscodeOnly**:

Passcode authentication should only be allowed

* * *

* * *

<a id="vaulterrorcodes"></a>

### VaultErrorCodes

**VaultErrorCodes**:

The meaning of the error code in the thrown [VaultError](#vaulterror)

<a id="vaulterrorcodes.authfailed"></a>

### AuthFailed

**AuthFailed**:

User authentication failed

* * *

<a id="vaulterrorcodes.biometricsnotenabled"></a>

### BiometricsNotEnabled

**BiometricsNotEnabled**:

The operation failed because biometric authentication is not enabled

* * *

<a id="vaulterrorcodes.invalidarguments"></a>

### InvalidArguments

**InvalidArguments**:

The operation failed because the provided arguments were invalid

* * *

<a id="vaulterrorcodes.invalidauthmode"></a>

### InvalidAuthMode

**InvalidAuthMode**:

The AuthMode is invalid

* * *

<a id="vaulterrorcodes.invalidatedcredential"></a>

### InvalidatedCredential

**InvalidatedCredential**:

The credentials were invalidated. This can happen when a user changes biometrics or passcode.

* * *

<a id="vaulterrorcodes.keynotfound"></a>

### KeyNotFound

**KeyNotFound**:

The key was not found. This can happen when a user changes biometrics or passcode.

* * *

<a id="vaulterrorcodes.mismatchedpasscode"></a>

### MismatchedPasscode

**MismatchedPasscode**:

The user provided mismatched passcodes

* * *

<a id="vaulterrorcodes.missingpasscode"></a>

### MissingPasscode

**MissingPasscode**:

The operation requires passcode to be setup but it isn't set yet. Call [setPasscode](#identityvault.setpasscode) to set it.

* * *

<a id="vaulterrorcodes.passcodenotenabled"></a>

### PasscodeNotEnabled

**PasscodeNotEnabled**:

The operation failed because passcode authentication is not enabled

* * *

<a id="vaulterrorcodes.securitynotavailable"></a>

### SecurityNotAvailable

**SecurityNotAvailable**:

Biometric security is unavailable

* * *

<a id="vaulterrorcodes.toomanyfailedattempts"></a>

### TooManyFailedAttempts

**TooManyFailedAttempts**:

Too many failed authentication attempts so the vault was cleared an user will need to login again

* * *

<a id="vaulterrorcodes.unknown"></a>

### Unknown

**Unknown**:

An unknown error happened

* * *

<a id="vaulterrorcodes.usercanceledinteraction"></a>

### UserCanceledInteraction

**UserCanceledInteraction**:

The user cancelled the native authentication dialog

* * *

<a id="vaulterrorcodes.vaultlocked"></a>

### VaultLocked

**VaultLocked**:

The operation failed because the vault was locked

* * *

<a id="vaulterrorcodes.vaultunavailable"></a>

### VaultUnavailable

**VaultUnavailable**:

The operation failed because the vault was unavailable

* * *

* * *

## Interfaces

<a id="defaultsession"></a>

### DefaultSession

**DefaultSession**:

The interface for the Default Session. Extend this interface to make a custom session

***usage***:

```typescript
MyCustomSession extends DefaultSession {
  email: string;
  age: number;
  nicknames: string[];
}
```

<a id="defaultsession.token"></a>

### token

**● token**: *`string`*

* * *

<a id="defaultsession.username"></a>

### username

**● username**: *`string`*

* * *

* * *

<a id="identityvault"></a>

### IdentityVault

**IdentityVault**:

The underlying vault API. You can gain direct access to the vault for more advanced usage by using the [IdentityVaultUser.getVault](#identityvaultuser.getvault) method.

<a id="identityvault.config"></a>

### `<Optional>` config

**● config**: *[PluginConfiguration](#pluginconfiguration)*

The current configuration of the vault will stay current as long as [unsubscribe](#identityvault.unsubscribe) is not called.

* * *

<a id="identityvault.clear"></a>

### clear

▸ **clear**(): `Promise`<`void`>

Clear all vault data including stored tokens, values, and passcodes. The vault will be empty and unlocked after this.

**Returns:** `Promise`<`void`>

* * *

<a id="identityvault.getbiometrictype"></a>

### getBiometricType

▸ **getBiometricType**(): `Promise`<[BiometricType](#biometrictype)>

Get the type of biometrics the device supports

**Returns:** `Promise`<[BiometricType](#biometrictype)> the type of biometrics the device supports

* * *

<a id="identityvault.getconfig"></a>

### getConfig

▸ **getConfig**(): `Promise`<[PluginConfiguration](#pluginconfiguration)>

Get the current configuration of the vault

**Returns:** `Promise`<[PluginConfiguration](#pluginconfiguration)> the configuration

* * *

<a id="identityvault.gettoken"></a>

### getToken

▸ **getToken**(): `Promise`<`any`>

Get any data stored in the token slot. This is equivalent to calling [getValue("token")](#identityvault.getvalue).

***throws***: [VaultError](#vaulterror) - if vault is locked

**Returns:** `Promise`<`any`> token data

* * *

<a id="identityvault.getusername"></a>

### getUsername

▸ **getUsername**(): `Promise`<`string`>

Get the username associated with the vault

**Returns:** `Promise`<`string`> the username for the vault

* * *

<a id="identityvault.getvalue"></a>

### getValue

▸ **getValue**(key: *`string`*): `Promise`<`any`>

Get a value stored under the given key.

***throws***: [VaultError](#vaulterror) - if vault is locked

**Parameters:**

| Name | Type     | Description                       |
| ---- | -------- | --------------------------------- |
| key  | `string` | the key where the value is stored |


**Returns:** `Promise`<`any`> the value stored at the key

* * *

<a id="identityvault.isbiometricsavailable"></a>

### isBiometricsAvailable

▸ **isBiometricsAvailable**(): `Promise`<`boolean`>

Check whether or not biometrics is supported by the device and has been configured by the current user of the device

**Returns:** `Promise`<`boolean`> whether or not biometrics is available

* * *

<a id="identityvault.isbiometricsenabled"></a>

### isBiometricsEnabled

▸ **isBiometricsEnabled**(): `Promise`<`boolean`>

Check whether or not biometrics is enabled on the vault

**Returns:** `Promise`<`boolean`> whether or not biometrics is enabled

* * *

<a id="identityvault.isinuse"></a>

### isInUse

▸ **isInUse**(): `Promise`<`boolean`>

Check whether the vault has any values stored in it.

**Returns:** `Promise`<`boolean`> whether the vault has stored values

* * *

<a id="identityvault.islocked"></a>

### isLocked

▸ **isLocked**(): `Promise`<`boolean`>

Check whether the vault is currently locked

**Returns:** `Promise`<`boolean`> whether the vault is locked

* * *

<a id="identityvault.ispasscodeenabled"></a>

### isPasscodeEnabled

▸ **isPasscodeEnabled**(): `Promise`<`boolean`>

Check if passcode authentication is enabled for the vault

**Returns:** `Promise`<`boolean`> whether or not the passcode is enabled

* * *

<a id="identityvault.ispasscodesetupneeded"></a>

### isPasscodeSetupNeeded

▸ **isPasscodeSetupNeeded**(): `Promise`<`boolean`>

Check whether or not a passcode needs to be set for the vault using [setPasscode](#identityvault.setpasscode)

**Returns:** `Promise`<`boolean`> whether or not the passcode needs to be set

* * *

<a id="identityvault.lock"></a>

### lock

▸ **lock**(): `Promise`<`void`>

Lock the vault clearing the contents from memory and requiring biometrics or passcode to unlock

**Returns:** `Promise`<`void`>

* * *

<a id="identityvault.remainingattempts"></a>

### remainingAttempts

▸ **remainingAttempts**(): `Promise`<`number`>

Check how many remaining failed attempts are left until vault clears

**Returns:** `Promise`<`number`> the number of remaining attempts

* * *

<a id="identityvault.setbiometricsenabled"></a>

### setBiometricsEnabled

▸ **setBiometricsEnabled**(isBiometricsEnabled: *`boolean`*): `Promise`<`void`>

Enable/Disable Biometric authentication for the vault

***throws***: [VaultError](#vaulterror) - if biometrics is unavailable or the vault is locked

**Parameters:**

| Name                | Type      | Description                                 |
| ------------------- | --------- | ------------------------------------------- |
| isBiometricsEnabled | `boolean` | whether or not biometrics should be enabled |


**Returns:** `Promise`<`void`>

* * *

<a id="identityvault.setpasscode"></a>

### setPasscode

▸ **setPasscode**(passcode?: *`string`*): `Promise`<`void`>

Set or Change the passcode for the vault

***throws***: [VaultError](#vaulterror) - if the vault is locked, passcode is disabled, user canceled pin prompt, or pin was mismatched

**Parameters:**

| Name                | Type     | Description                                                                         |
| ------------------- | -------- | ----------------------------------------------------------------------------------- |
| `Optional` passcode | `string` | The passcode to set. If left null a native dialog will prompt the user to enter it. |


**Returns:** `Promise`<`void`>

* * *

<a id="identityvault.setpasscodeenabled"></a>

### setPasscodeEnabled

▸ **setPasscodeEnabled**(isPasscodeEnabled: *`boolean`*): `Promise`<`void`>

Enable/Disable passcode authentication for the vault

***throws***: [VaultError](#vaulterror) - if the vault is locked

**Parameters:**

| Name              | Type      | Description                               |
| ----------------- | --------- | ----------------------------------------- |
| isPasscodeEnabled | `boolean` | whether or not passcode should be enabled |


**Returns:** `Promise`<`void`>

* * *

<a id="identityvault.storetoken"></a>

### storeToken

▸ **storeToken**(token: *`any`*): `Promise`<`void`>

Store a value securely in the token slot. This is equivalent to calling [storeValue("token", token)](#identityvault.storevalue).

***throws***: [VaultError](#vaulterror) - if vault is locked, or if passcode is enabled but passcode has not been setup

**Parameters:**

| Name  | Type  | Description                          |
| ----- | ----- | ------------------------------------ |
| token | `any` | the value to store in the token slot |


**Returns:** `Promise`<`void`>

* * *

<a id="identityvault.storevalue"></a>

### storeValue

▸ **storeValue**(key: *`string`*, value: *`any`*): `Promise`<`void`>

Store data securely under the given key.

***throws***: [VaultError](#vaulterror) - if vault is locked, or if passcode is enabled but passcode has not been setup

**Parameters:**

| Name  | Type     | Description                      |
| ----- | -------- | -------------------------------- |
| key   | `string` | the key to store in the value in |
| value | `any`    | the value to store               |


**Returns:** `Promise`<`void`>

* * *

<a id="identityvault.unlock"></a>

### unlock

▸ **unlock**(usingPasscode?: *`boolean`*, passcode?: *`string`*): `Promise`<`void`>

Unlock the vault using either passcode or biometrics

***throws***: [VaultError](#vaulterror) - if the vault is locked, the unlock type wasn't enabled, user canceled pin prompt, or pin was mismatched

**Parameters:**

| Name                     | Type      | Description                                                                         |
| ------------------------ | --------- | ----------------------------------------------------------------------------------- |
| `Optional` usingPasscode | `boolean` | whether or not to use passcode to unlock the vault                                  |
| `Optional` passcode      | `string`  | The passcode to use. If left null a native dialog will prompt the user to enter it. |


**Returns:** `Promise`<`void`>

* * *

<a id="identityvault.unsubscribe"></a>

### unsubscribe

▸ **unsubscribe**(): `Promise`<`void`>

Unsubscribe the instance from events about the vault.

**Returns:** `Promise`<`void`>

* * *

* * *

<a id="identityvaultuser"></a>

### IdentityVaultUser

**IdentityVaultUser**:

The main class which you can extend in order to implement vault usage. @typeparam `T` must extend [DefaultSession](#defaultsession)

***usage***:

```typescript
interface MyCustomSession extends DefaultSession {
  // username & token are inherited
  email: string;
  age: number;
  nicknames: string[];
}

export class IdentityService extends IonicIdentityVaultUser<MyCustomSession> {

constructor(private http: HttpClient, private router: Router, platform: Platform) {
  super(platform, {
    authMode: AuthMode.BiometricAndPasscode,
    restoreSessionOnReady: false,
    unlockOnReady: false, // set true to auto prompt the user to unlock when vault is ready
    unlockOnAccess: true,
    lockAfter: 5000, // lock after 5 seconds in the background
    hideScreenOnBackground: true
  });

  onVaultUnlocked(config: VaultConfig) {
    //Route to my home page
  }

  onVaultLocked(event: LockEvent) {
    //Route to my login page
  }

}
```

<a id="identityvaultuser.getauthmode"></a>

### getAuthMode

▸ **getAuthMode**(): `Promise`<[AuthMode](#authmode)>

Get the [AuthMode](#authmode) for the vault.

**Returns:** `Promise`<[AuthMode](#authmode)>

* * *

<a id="identityvaultuser.getbiometrictype"></a>

### getBiometricType

▸ **getBiometricType**(): `Promise`<[BiometricType](#biometrictype)>

Get the type of biometrics the device supports

**Returns:** `Promise`<[BiometricType](#biometrictype)> the type of biometrics the device supports

* * *

<a id="identityvaultuser.getsession"></a>

### getSession

▸ **getSession**(): `Promise`<`T`>

▸ **getSession**(): `Promise`<`T` \| `undefined`>

The stored session data

**Returns:** `Promise`<`T`>

Get the session from memory (without checking the vault for it)

**Returns:** `Promise`<`T` \| `undefined`>

* * *

<a id="identityvaultuser.getvault"></a>

### getVault

▸ **getVault**(): `Promise`<[IdentityVault](#identityvault)>

Get raw access to the underlying vault api

**Returns:** `Promise`<[IdentityVault](#identityvault)>

* * *

<a id="identityvaultuser.hasstoredsession"></a>

### hasStoredSession

▸ **hasStoredSession**(): `Promise`<`boolean`>

Check if there are any saved sessions in the vault

**Returns:** `Promise`<`boolean`>

* * *

<a id="identityvaultuser.isbiometricsavailable"></a>

### isBiometricsAvailable

▸ **isBiometricsAvailable**(): `Promise`<`boolean`>

Check whether or not biometrics is supported by the device and has been configured by the current user of the device

**Returns:** `Promise`<`boolean`> whether or not biometrics is available

* * *

<a id="identityvaultuser.isbiometricsenabled"></a>

### isBiometricsEnabled

▸ **isBiometricsEnabled**(): `Promise`<`boolean`>

Check whether or not biometrics is enabled on the vault

**Returns:** `Promise`<`boolean`> whether or not biometrics is enabled

* * *

<a id="identityvaultuser.ispasscodeenabled"></a>

### isPasscodeEnabled

▸ **isPasscodeEnabled**(): `Promise`<`boolean`>

Check if passcode authentication is enabled for the vault

**Returns:** `Promise`<`boolean`> whether or not the passcode is enabled

* * *

<a id="identityvaultuser.lockout"></a>

### lockOut

▸ **lockOut**(): `Promise`<`void`>

Lock the user out without clearing their secure session information from the vault

**Returns:** `Promise`<`void`>

* * *

<a id="identityvaultuser.logout"></a>

### logout

▸ **logout**(): `Promise`<`void`>

Log the user out entirely, and forget any stored authentication tokens

**Returns:** `Promise`<`void`>

* * *

<a id="identityvaultuser.onconfigchange"></a>

### onConfigChange

▸ **onConfigChange**(state: *[VaultConfig](#vaultconfig)*): `any`

Called when there has been a configuration change in the vault

**Parameters:**

| Name  | Type                        |
| ----- | --------------------------- |
| state | [VaultConfig](#vaultconfig) |


**Returns:** `any`

* * *

<a id="identityvaultuser.onpasscoderequest"></a>

### onPasscodeRequest

▸ **onPasscodeRequest**(isPasscodeSetRequest: *`boolean`*): `Promise`<`string` \| `void`>

Called when attempting passcode unlock to allow for user defined passcode prompts.

**Parameters:**

| Name                 | Type      | Description                                           |
| -------------------- | --------- | ----------------------------------------------------- |
| isPasscodeSetRequest | `boolean` | Whether or not this is a request to set the passcode. |


**Returns:** `Promise`<`string` \| `void`>

- a string to use as the passcode of undefined to use native prompts

* * *

<a id="identityvaultuser.onsessionrestored"></a>

### onSessionRestored

▸ **onSessionRestored**(session: *`T`*): `any`

Called when the session object is restored.

**Parameters:**

| Name    | Type | Description                                                                  |
| ------- | ---- | ---------------------------------------------------------------------------- |
| session | `T`  | The [DefaultSession](#defaultsession) or user defined session that occurred. |


**Returns:** `any`

* * *

<a id="identityvaultuser.onsetuperror"></a>

### onSetupError

▸ **onSetupError**(error: *[VaultError](#vaulterror)*): `any`

Called when there is an error during vault setup

**Parameters:**

| Name  | Type                      | Description                                  |
| ----- | ------------------------- | -------------------------------------------- |
| error | [VaultError](#vaulterror) | The [VaultError](#vaulterror) that occurred. |


**Returns:** `any`

* * *

<a id="identityvaultuser.onvaultlocked"></a>

### onVaultLocked

▸ **onVaultLocked**(event: *[LockEvent](#lockevent)*): `any`

Called when the vault has been locked

**Parameters:**

| Name  | Type                    | Description                                           |
| ----- | ----------------------- | ----------------------------------------------------- |
| event | [LockEvent](#lockevent) | The data about the lock event [LockEvent](#lockevent) |


**Returns:** `any`

* * *

<a id="identityvaultuser.onvaultready"></a>

### onVaultReady

▸ **onVaultReady**(state: *[VaultConfig](#vaultconfig)*): `any`

Called when the vault is ready

**Parameters:**

| Name  | Type                        |
| ----- | --------------------------- |
| state | [VaultConfig](#vaultconfig) |


**Returns:** `any`

- A promise that resolves when the vault is successfully configured and available.

* * *

<a id="identityvaultuser.onvaultunlocked"></a>

### onVaultUnlocked

▸ **onVaultUnlocked**(state: *[VaultConfig](#vaultconfig)*): `any`

Called when the vault has been unlocked

**Parameters:**

| Name  | Type                        |
| ----- | --------------------------- |
| state | [VaultConfig](#vaultconfig) |


**Returns:** `any`

* * *

<a id="identityvaultuser.ready"></a>

### ready

▸ **ready**(): `Promise`<`void`>

Promise ensuring the user vault is ready to be accessed or denoting an error in setup;

**Returns:** `Promise`<`void`>

- A promise that resolves when the vault is succesfully configured and available.

* * *

<a id="identityvaultuser.restoresession"></a>

### restoreSession

▸ **restoreSession**(): `Promise`<`T` \| `undefined`>

Restore the session from the vault

**Returns:** `Promise`<`T` \| `undefined`>

* * *

<a id="identityvaultuser.savesession"></a>

### saveSession

▸ **saveSession**(session: *`T`*): `Promise`<`void`>

Store the session to the vault

**Parameters:**

| Name    | Type | Description          |
| ------- | ---- | -------------------- |
| session | `T`  | the session to store |


**Returns:** `Promise`<`void`>

* * *

<a id="identityvaultuser.setauthmode"></a>

### setAuthMode

▸ **setAuthMode**(authMode: *[AuthMode](#authmode)*): `Promise`<`void`>

Set the [AuthMode](#authmode) for the vault. The vault must be unlocked or this will throw an error.

***throws***: [VaultError](#vaulterror) - If the vault is locked or the mode is unavailale due to device hardware

**Parameters:**

| Name     | Type                  | Description                       |
| -------- | --------------------- | --------------------------------- |
| authMode | [AuthMode](#authmode) | The [AuthMode](#authmode) to use. |


**Returns:** `Promise`<`void`>

* * *

<a id="identityvaultuser.setbiometricsenabled"></a>

### setBiometricsEnabled

▸ **setBiometricsEnabled**(isBiometricsEnabled: *`boolean`*): `Promise`<`void`>

Enable/Disable Biometric authentication

***throws***: [VaultError](#vaulterror) - if biometrics is unavailable or the vault is locked

**Parameters:**

| Name                | Type      | Description                                 |
| ------------------- | --------- | ------------------------------------------- |
| isBiometricsEnabled | `boolean` | whether or not biometrics should be enabled |


**Returns:** `Promise`<`void`>

* * *

<a id="identityvaultuser.setpasscode"></a>

### setPasscode

▸ **setPasscode**(): `Promise`<`void`>

Set or change the passcode for the user This will call the [onPasscodeRequest](#identityvaultuser.onpasscoderequest) handler to allow for user defined passcode prompt. You can get more fine grain contol using the [IdentityVault](#identityvault) directly by calling [getVault](#identityvaultuser.getvault)

***throws***: [VaultError](#vaulterror) - if the vault is locked, passcode is disabled, user canceled pin prompt, or pin was mismatched

**Returns:** `Promise`<`void`>

* * *

<a id="identityvaultuser.setpasscodeenabled"></a>

### setPasscodeEnabled

▸ **setPasscodeEnabled**(isPasscodeEnabled: *`boolean`*): `Promise`<`void`>

Enable/Disable passcode authentication. This will cause [setPasscode](#identityvault.setpasscode) to fire if passcode setup is required causing the [onPasscodeRequest](#identityvaultuser.onpasscoderequest) handler to fire to allow for user defined passcode prompt. You can get more fine grain contol using the [IdentityVault](#identityvault) directly by calling [getVault](#identityvaultuser.getvault)

***throws***: [VaultError](#vaulterror) - if the vault is locked

**Parameters:**

| Name              | Type      | Description                               |
| ----------------- | --------- | ----------------------------------------- |
| isPasscodeEnabled | `boolean` | whether or not passcode should be enabled |


**Returns:** `Promise`<`void`>

* * *

<a id="identityvaultuser.unlock"></a>

### unlock

▸ **unlock**(authMode?: *[AuthMode](#authmode)*): `Promise`<`void`>

Unlock the user's vault using the AuthMode configured for the vault or the override passed in to the call. This will call the [onPasscodeRequest](#identityvaultuser.onpasscoderequest) handler if the specified [AuthMode](#authmode) allows for it to allow for user defined passcode prompt You can get more fine grain contol using the [IdentityVault](#identityvault) directly by calling [getVault](#identityvaultuser.getvault)

**Parameters:**

| Name                | Type                  |
| ------------------- | --------------------- |
| `Optional` authMode | [AuthMode](#authmode) |


**Returns:** `Promise`<`void`>

* * *

* * *

<a id="ionicnativeauthplugin"></a>

### IonicNativeAuthPlugin

**IonicNativeAuthPlugin**:

The native plugin

<a id="ionicnativeauthplugin.getvault"></a>

### getVault

▸ **getVault**(config: *[PluginOptions](#pluginoptions)*): [IdentityVault](#identityvault)

**Parameters:**

| Name   | Type                            |
| ------ | ------------------------------- |
| config | [PluginOptions](#pluginoptions) |


**Returns:** [IdentityVault](#identityvault)

* * *

* * *

<a id="lockevent"></a>

### LockEvent

**LockEvent**:

The lock event passed to the [onVaultLocked](#identityvaultuser.onvaultlocked) handler.

<a id="lockevent.saved"></a>

### saved

**● saved**: *`boolean`*

If the data was persisted to the device before lock

* * *

<a id="lockevent.timeout"></a>

### timeout

**● timeout**: *`boolean`*

If the lock was due to a background timeout

* * *

* * *

<a id="pluginconfiguration"></a>

### PluginConfiguration

**PluginConfiguration**:

The configuration returned from [IonicNativeAuthPlugin](#ionicnativeauthplugin) when [getConfig](#identityvault.getconfig) is called.

<a id="pluginconfiguration.descriptor"></a>

### descriptor

**● descriptor**: *[VaultDescriptor](#vaultdescriptor)*

The values the uniquely identify the vault

* * *

<a id="pluginconfiguration.hidescreenonbackground"></a>

### hideScreenOnBackground

**● hideScreenOnBackground**: *`boolean`*

Obscures the app when backgrounded to avoid leaking sensitive information, such as financial statements or balances

* * *

<a id="pluginconfiguration.isbiometricsenabled"></a>

### isBiometricsEnabled

**● isBiometricsEnabled**: *`boolean`*

Whether biometric authentication is enabled for the vault

* * *

<a id="pluginconfiguration.ispasscodeenabled"></a>

### isPasscodeEnabled

**● isPasscodeEnabled**: *`boolean`*

Whether passcode authentication is enabled for the vault

* * *

<a id="pluginconfiguration.ispasscodesetupneeded"></a>

### isPasscodeSetupNeeded

**● isPasscodeSetupNeeded**: *`boolean`*

Whether a passcode needs to be set with [setPasscode](#identityvault.setpasscode)

* * *

<a id="pluginconfiguration.lockafter"></a>

### lockAfter

**● lockAfter**: *`number`*

The amount of number of milliseconds the app can be in the background for until the vault locks

* * *

* * *

<a id="pluginoptions"></a>

### PluginOptions

**PluginOptions**:

The options passed the the [IonicNativeAuthPlugin](#ionicnativeauthplugin) when creating a vault with [getVault](#identityvaultuser.getvault)

<a id="pluginoptions.hidescreenonbackground"></a>

### `<Optional>` hideScreenOnBackground

**● hideScreenOnBackground**: *`boolean`*

Obscures the app when backgrounded to avoid leaking sensitive information, such as financial statements or balances

* * *

<a id="pluginoptions.lockafter"></a>

### `<Optional>` lockAfter

**● lockAfter**: *`number`*

The amount of number of milliseconds the app can be in the background for until the vault locks

* * *

<a id="pluginoptions.username"></a>

### username

**● username**: *`string`*

The username for the vault you wish to access

* * *

<a id="pluginoptions.vaultid"></a>

### vaultId

**● vaultId**: *`string`*

The vaultId for the vault you wish to access

* * *

<a id="pluginoptions.onconfig"></a>

### `<Optional>` onConfig

▸ **onConfig**(event: *[PluginConfiguration](#pluginconfiguration)*): `any`

A handler that will receive events any time the vault is configuration is changed

**Parameters:**

| Name  | Type                                        |
| ----- | ------------------------------------------- |
| event | [PluginConfiguration](#pluginconfiguration) |


**Returns:** `any`

* * *

<a id="pluginoptions.onerror"></a>

### `<Optional>` onError

▸ **onError**(error: *[VaultError](#vaulterror)*): `any`

Called when there is an error during vault setup

**Parameters:**

| Name  | Type                      | Description                                  |
| ----- | ------------------------- | -------------------------------------------- |
| error | [VaultError](#vaulterror) | The [VaultError](#vaulterror) that occurred. |


**Returns:** `any`

* * *

<a id="pluginoptions.onlock"></a>

### `<Optional>` onLock

▸ **onLock**(event: *[LockEvent](#lockevent)*): `any`

A handler that will receive events any time the vault is locked

**Parameters:**

| Name  | Type                    |
| ----- | ----------------------- |
| event | [LockEvent](#lockevent) |


**Returns:** `any`

* * *

<a id="pluginoptions.onready"></a>

### `<Optional>` onReady

▸ **onReady**(vault: *[IdentityVault](#identityvault)*): `any`

Called when the vault is configured and available.

**Parameters:**

| Name  | Type                            | Description                                   |
| ----- | ------------------------------- | --------------------------------------------- |
| vault | [IdentityVault](#identityvault) | The [IdentityVault](#identityvault) instance. |


**Returns:** `any`

* * *

<a id="pluginoptions.onunlock"></a>

### `<Optional>` onUnlock

▸ **onUnlock**(event: *[PluginConfiguration](#pluginconfiguration)*): `any`

A handler that will receive events any time the vault is unlocked

**Parameters:**

| Name  | Type                                        |
| ----- | ------------------------------------------- |
| event | [PluginConfiguration](#pluginconfiguration) |


**Returns:** `any`

* * *

* * *

<a id="vaultconfig"></a>

### VaultConfig

**VaultConfig**:

The configuration file returned to event handlers such as [onConfigChange](#identityvaultuser.onconfigchange) and [onVaultReady](#identityvaultuser.onvaultready).

<a id="vaultconfig.authmode"></a>

### `<Optional>` authMode

**● authMode**: *[AuthMode](#authmode)*

The [AuthMode](#authmode) to configure a new vault with. Note: This will only affect newly created vaults. Vaults with existing data and configuration will use there previous configuration. They can be change by unlocking and then chaning the AuthMode.

***default***: * [BiometricAndPasscode](#authmode.biometricandpasscode)

* * *

<a id="vaultconfig.hidescreenonbackground"></a>

### `<Optional>` hideScreenOnBackground

**● hideScreenOnBackground**: *`boolean`*

Obscures the app when backgrounded to avoid leaking sensitive information, such as financial statements or balances

***default***: false

* * *

<a id="vaultconfig.ispasscodesetupneeded"></a>

### isPasscodeSetupNeeded

**● isPasscodeSetupNeeded**: *`boolean`*

Whether a passcode needs to be set with [setPasscode](#identityvault.setpasscode)

* * *

<a id="vaultconfig.lockafter"></a>

### `<Optional>` lockAfter

**● lockAfter**: *`number`*

The amount of number of milliseconds the app can be in the background for until the vault locks. A value of 0 means the vault won't lock in the background.

***default***: 0

* * *

* * *

<a id="vaultdescriptor"></a>

### VaultDescriptor

**VaultDescriptor**:

An interface that describes the vault. In [IdentityVaultUser](#identityvaultuser) this defaults to `_lastUser` & `default` you can optionally add this to the constructor to accomplish advanced use cases multi-tenant vaults.

<a id="vaultdescriptor.username"></a>

### username

**● username**: *`string`*

The username for the vault you wish to access

* * *

<a id="vaultdescriptor.vaultid"></a>

### vaultId

**● vaultId**: *`string`*

The vaultId for the vault you wish to access

* * *

* * *

<a id="vaulterror"></a>

### VaultError

**VaultError**:

An error that can be thrown by the plugin.

***usage***:

```typescript
try {
 vault.unlock();
} catch(e) {
  switch (e.code) {
    case VaultErrorCodes.AuthFailed:
      alert('You failed to authenticate!');
      break;
    case VaultErrorCodes.UserCanceledInteraction:
      alert('You cancelled the face id prompt!');
      break;
    default:
      throw e;
  }
}
```

<a id="vaulterror.code"></a>

### code

**● code**: *[VaultErrorCodes](#vaulterrorcodes)*

* * *

<a id="vaulterror.message"></a>

### message

**● message**: *`string`*

* * *

* * *

<a id="vaultoptions"></a>

### VaultOptions

**VaultOptions**:

The options passed in to initialize the vault.

<a id="vaultoptions.authmode"></a>

### `<Optional>` authMode

**● authMode**: *[AuthMode](#authmode)*

The [AuthMode](#authmode) to configure a new vault with. Note: This will only affect newly created vaults. Vaults with existing data and configuration will use there previous configuration. They can be change by unlocking and then chaning the AuthMode.

***default***: * [BiometricAndPasscode](#authmode.biometricandpasscode)

* * *

<a id="vaultoptions.hidescreenonbackground"></a>

### `<Optional>` hideScreenOnBackground

**● hideScreenOnBackground**: *`boolean`*

Obscures the app when backgrounded to avoid leaking sensitive information, such as financial statements or balances

***default***: false

* * *

<a id="vaultoptions.lockafter"></a>

### `<Optional>` lockAfter

**● lockAfter**: *`number`*

The amount of number of milliseconds the app can be in the background for until the vault locks. A value of 0 means the vault won't lock in the background.

***default***: 0

* * *

<a id="vaultoptions.restoresessiononready"></a>

### `<Optional>` restoreSessionOnReady

**● restoreSessionOnReady**: *`boolean`*

Whether or not to attempt to automatically restore the session when the vault is ready If [restoreSessionOnReady](#vaultoptions.restoresessiononready) and [unlockOnAccess](#vaultoptions.unlockonaccess) are both true the vault will be immediately unlocked & the session restored if onReady if the vault is in use.

***default***: false

* * *

<a id="vaultoptions.unlockonaccess"></a>

### `<Optional>` unlockOnAccess

**● unlockOnAccess**: *`boolean`*

Whether or not to attempt to automatically unlock the vault when a value is accessed. If [restoreSessionOnReady](#vaultoptions.restoresessiononready) and [unlockOnAccess](#vaultoptions.unlockonaccess) are both true the vault will be immediately unlocked & the session restored if onReady if the vault is in use.

***default***: false

* * *

<a id="vaultoptions.unlockonready"></a>

### `<Optional>` unlockOnReady

**● unlockOnReady**: *`boolean`*

Whether or not to attempt to automatically unlock the vault when the vault is ready

***default***: false

* * *

* * *

## Type aliases

<a id="biometrictype"></a>

### BiometricType

**Ƭ BiometricType**: *"touchID" \| "faceID" \| "none"*

The possible values returned by [getBiometricType](#identityvault.getbiometrictype)

* * *