---
title: Identity Vault
template: enterprise-plugin
version: 4.0.1
minor: 4.0.X
otherVersions:
  - 2.0.X
  - 3.0.X
  - 3.1.X
  - 3.2.X
  - 3.3.X
  - 3.4.X
  - 3.5.X
  - 3.6.X
  - 4.0.X
  - 4.1.X
---

# Ionic Identity Vault

Ionic Identity Vault is an all-in-one frontend identity management system that combines security best practices and the latest in biometric authentication options available on iOS and Android.

The Vault manages secure user identity and session tokens, ensuring sensitive tokens are encrypted at rest, stored only in secure locations on the device, and unlocked only with biometric identity (TouchID/FaceID).

Without Ionic Identity Vault, Ionic developers have to resort to combining third party Cordova plugins, often resulting in insecure setups due to the lack of correct implementation of biometric and at-rest encryption strategies. [Learn more.](https://ionicframework.com/identity-vault)

<native-ent-install plugin-id="identity-vault" variables=""></native-ent-install>

Update the native project config files:

```xml
// iOS - Info.plist
<key>NSFaceIDUsageDescription</key>
<string>Use Face ID to authenticate yourself and login</string>

// Android - No additional changes needed
```

## Reference App

A complete [login/logout experience](https://github.com/ionic-team/cs-demo-iv) that includes biometrics (Face ID with passcode as a fallback), secure token storage, background data hiding, and session timeouts.

## Configuring the Vault

The `IonicIdentityVaultUser` class takes a generic session type which represents the type of the session you'll store in the vault. You can use the [DefaultSession](#defaultsession) or extend the class to create a custom session. In the constructor of your `Identity` service, the vault is configured by providing options to the `super()` call:

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

  onVaultLocked() {
    //Route to my login page
  }

  async onPasscodeRequest(isPasscodeSetRequest: boolean) {
    // Display a custom Passcode prompt and return the passcode as a string
    // or return undefined to use the build in native prompts. isPasscodeSetRequest
    // is true when attempting to set a new passcode on the vault, you can use
    // it to do something like prompt the user twice for the pin.
  }

}
```

## Automatically adding your token to requests

If you'd like to automatically add your authorization token from your identity service to every request, you can see a simple example at in our [demo repo](https://github.com/ionic-team/cs-demo-iv/blob/master/src/app/services/http-interceptors/auth-interceptor.ts).

## Upgrading to v4.0.0

If you have Identity Vault **<3.1.0**, please see [Upgrading from v3.0.0 to >=v3.1.0](https://ionicframework.com/docs/enterprise/identity-vault/3.6.X/identity-vault#upgrading-from-v3-0-0-to-v3-1-0) before following these upgrade instructions.

* Upgrade your app to use `cordova-android` 9.x (see the [9.0.0 milestone](https://github.com/apache/cordova-android/milestone/2) for progress) or Capacitor 2.x.
  * For Capacitor, please see the upgrade guide for [Android](https://capacitor.ionicframework.com/docs/android/updating) and [iOS](https://capacitor.ionicframework.com/docs/ios/updating).
* Install the new plugin version.

## API Documentation

You can find the API and interface documentation for everything below. The main classes to pay attention to are:

*   [IonicIdentityVaultUser](#identityvaultuser) - Subclass this when creating your identity service.
*   [DefaultSession](#defaultsession) - This is the generic type that represents your session. Extend this to implement a custom session.
*   [IdentityVault](#identityvault) - This is the lower level vault API. You can use this to implement advanced workflows including multi-tenant vaults.



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

---

## Enumerations

<a id="authmode"></a>

### AuthMode

**AuthMode**:

The type of authentication the vault should be configured to allow.

<a id="authmode.biometricandpasscode"></a>

#### BiometricAndPasscode

**BiometricAndPasscode**:

Both biometric and passcode authentication should be allowed

___

<a id="authmode.biometriconly"></a>

#### BiometricOnly

**BiometricOnly**:

Biometrics authentication should only be allowed

___

<a id="authmode.biometricorpasscode"></a>

#### BiometricOrPasscode

**BiometricOrPasscode**:

Use biometrics if it is available, otherwise use passcode

___

<a id="authmode.inmemoryonly"></a>

#### InMemoryOnly

**InMemoryOnly**:

Both biometric and passcode authentication should be disabled. With this setting all data in the vault will be cleared on lock or if the app is closed. Stored data is kept only in memory.

___

<a id="authmode.passcodeonly"></a>

#### PasscodeOnly

**PasscodeOnly**:

Passcode authentication should only be allowed

___

<a id="authmode.securestorage"></a>

#### SecureStorage

**SecureStorage**:

Both biometric and passcode authentication will be disabled but any stored values will persist and be stored securely at rest using the keychain and will be available without needing to authenticate via passcode or biometrics when the device is unlocked.

___

___

<a id="vaulterrorcodes"></a>

### VaultErrorCodes

**VaultErrorCodes**:

The meaning of the error code in the thrown [VaultError](#vaulterror)

<a id="vaulterrorcodes.authfailed"></a>

#### AuthFailed

**AuthFailed**:

User authentication failed.

___

<a id="vaulterrorcodes.biometricsnotenabled"></a>

#### BiometricsNotEnabled

**BiometricsNotEnabled**:

The operation failed because biometric authentication is not enabled. This can occur when biometrics is not supported by the device or when biometrics has not been configured for the device or vault.

___

<a id="vaulterrorcodes.invalidarguments"></a>

#### InvalidArguments

**InvalidArguments**:

The operation failed because the some of the vault provided arguments were invalid.

___

<a id="vaulterrorcodes.invalidauthmode"></a>

#### InvalidAuthMode

**InvalidAuthMode**:

The provided AuthMode is invalid. Should be one of [AuthMode](#authmode).

___

<a id="vaulterrorcodes.invalidatedcredential"></a>

#### InvalidatedCredential

**InvalidatedCredential**:

The credentials were invalidated. This can happen when a user changes biometrics or passcode.

___

<a id="vaulterrorcodes.keynotfound"></a>

#### KeyNotFound

**KeyNotFound**:

The key was not found. This can happen when a user changes biometrics or passcode.

___

<a id="vaulterrorcodes.mismatchedpasscode"></a>

#### MismatchedPasscode

**MismatchedPasscode**:

The user provided mismatched passcodes.

___

<a id="vaulterrorcodes.missingpasscode"></a>

#### MissingPasscode

**MissingPasscode**:

The operation requires passcode to be setup but it isn't set yet. Call [setPasscode](#identityvault.setpasscode) to set it.

___

<a id="vaulterrorcodes.passcodenotenabled"></a>

#### PasscodeNotEnabled

**PasscodeNotEnabled**:

The operation failed because the application tried to unlock the vault with passcode authentication, but the vault is not configured to allow passcode authentication.

___

<a id="vaulterrorcodes.securitynotavailable"></a>

#### SecurityNotAvailable

**SecurityNotAvailable**:

Biometric security is unavailable due to a passcode not being set up at the system level. In order to use biometric identification on the device a system level passcode must be set up by the user.

___

<a id="vaulterrorcodes.toomanyfailedattempts"></a>

#### TooManyFailedAttempts

**TooManyFailedAttempts**:

Too many failed authentication attempts so the vault was cleared an user will need to login again.

___

<a id="vaulterrorcodes.unknown"></a>

#### Unknown

**Unknown**:

An unknown error happened.

___

<a id="vaulterrorcodes.usercanceledinteraction"></a>

#### UserCanceledInteraction

**UserCanceledInteraction**:

The user cancelled the native authentication dialog.

___

<a id="vaulterrorcodes.vaultlocked"></a>

#### VaultLocked

**VaultLocked**:

The operation failed because the vault was locked.

___

<a id="vaulterrorcodes.vaultunavailable"></a>

#### VaultUnavailable

**VaultUnavailable**:

The operation failed because the vault was unavailable. The most likely cause of this error is that a vault has not been configured.

___

___

## Interfaces

<a id="defaultsession"></a>

### DefaultSession

**DefaultSession**:

The interface for the Default Session. Extend this interface to make a custom session

*__usage__*:
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

___

<a id="defaultsession.username"></a>

### username

**● username**: *`string`*

___

___

<a id="identityvault"></a>

### IdentityVault

**IdentityVault**:

The underlying vault API. You can gain direct access to the vault for more advanced usage by using the [IdentityVaultUser.getVault](#identityvaultuser.getvault) method.

<a id="identityvault.config"></a>

### `<Optional>` config

**● config**: *[PluginConfiguration](#pluginconfiguration)*

The current configuration of the vault will stay current as long as [unsubscribe](#identityvault.unsubscribe) is not called.

___

<a id="identityvault.clear"></a>

### clear

▸ **clear**(): `Promise`<`void`>

Clear all vault data including stored tokens, values, and passcodes. The vault will be empty and unlocked after this.

**Returns:** `Promise`<`void`>

___

<a id="identityvault.getbiometrictype"></a>

### getBiometricType

▸ **getBiometricType**(): `Promise`<[BiometricType](#biometrictype)>

Get the type of biometrics the device supports

**Returns:** `Promise`<[BiometricType](#biometrictype)> the type of biometrics the device supports

___

<a id="identityvault.getconfig"></a>

### getConfig

▸ **getConfig**(): `Promise`<[PluginConfiguration](#pluginconfiguration)>

Get the current configuration of the vault

**Returns:** `Promise`<[PluginConfiguration](#pluginconfiguration)> the configuration

___

<a id="identityvault.getkeys"></a>

### getKeys

▸ **getKeys**(): `Promise`<`string`[]>

Get all keys with stored values.

*__throws__*: [VaultError](#vaulterror) - if vault is locked

**Returns:** `Promise`<`string`[]> array with all keys

___

<a id="identityvault.gettoken"></a>

### getToken

▸ **getToken**(): `Promise`<`any`>

Get any data stored in the token slot. This is equivalent to calling [getValue("token")](#identityvault.getvalue).

*__throws__*: [VaultError](#vaulterror) - if vault is locked

**Returns:** `Promise`<`any`> token data

___

<a id="identityvault.getusername"></a>

### getUsername

▸ **getUsername**(): `Promise`<`string`>

Get the username associated with the vault

**Returns:** `Promise`<`string`> the username for the vault

___

<a id="identityvault.getvalue"></a>

### getValue

▸ **getValue**(key: *`string`*): `Promise`<`any`>

Get a value stored under the given key.

*__throws__*: [VaultError](#vaulterror) - if vault is locked

**Parameters:**

| Name | Type     | Description                       |
| ---- | -------- | --------------------------------- |
| key  | `string` | the key where the value is stored |

**Returns:** `Promise`<`any`> the value stored at the key

___

<a id="identityvault.isbiometricsavailable"></a>

### isBiometricsAvailable

▸ **isBiometricsAvailable**(): `Promise`<`boolean`>

Check whether or not biometrics is supported by the device and has been configured by the current user of the device

**Returns:** `Promise`<`boolean`> whether or not biometrics is available

___

<a id="identityvault.isbiometricsenabled"></a>

### isBiometricsEnabled

▸ **isBiometricsEnabled**(): `Promise`<`boolean`>

Check whether or not biometrics is enabled on the vault

**Returns:** `Promise`<`boolean`> whether or not biometrics is enabled

___

<a id="identityvault.isbiometricssupported"></a>

### isBiometricsSupported

▸ **isBiometricsSupported**(): `Promise`<`boolean`>

Check whether or not biometrics is supported by the device

**Returns:** `Promise`<`boolean`> whether or not biometrics is supported

___

<a id="identityvault.isinuse"></a>

### isInUse

▸ **isInUse**(): `Promise`<`boolean`>

Check whether the vault has any values stored in it.

**Returns:** `Promise`<`boolean`> whether the vault has stored values

___

<a id="identityvault.islocked"></a>

### isLocked

▸ **isLocked**(): `Promise`<`boolean`>

Check whether the vault is currently locked

**Returns:** `Promise`<`boolean`> whether the vault is locked

___

<a id="identityvault.islockedoutofbiometrics"></a>

### isLockedOutOfBiometrics

▸ **isLockedOutOfBiometrics**(): `Promise`<`boolean`>

Check whether the biometrics are locked on the device

**Returns:** `Promise`<`boolean`> whether biometrics are locked

___

<a id="identityvault.ispasscodeenabled"></a>

### isPasscodeEnabled

▸ **isPasscodeEnabled**(): `Promise`<`boolean`>

Check if passcode authentication is enabled for the vault

**Returns:** `Promise`<`boolean`> whether or not the passcode is enabled

___

<a id="identityvault.ispasscodesetupneeded"></a>

### isPasscodeSetupNeeded

▸ **isPasscodeSetupNeeded**(): `Promise`<`boolean`>

Check whether or not a passcode needs to be set for the vault using [setPasscode](#identityvault.setpasscode)

**Returns:** `Promise`<`boolean`> whether or not the passcode needs to be set

___

<a id="identityvault.issecurestoragemodeenabled"></a>

### isSecureStorageModeEnabled

▸ **isSecureStorageModeEnabled**(): `Promise`<`boolean`>

Check if [AuthMode.SecureStorage](#authmode.securestorage) is enabled for the vault

**Returns:** `Promise`<`boolean`> whether or not the secure storage mode is enabled

___

<a id="identityvault.lock"></a>

### lock

▸ **lock**(): `Promise`<`void`>

Lock the vault clearing the contents from memory and requiring biometrics or passcode to unlock

**Returns:** `Promise`<`void`>

___

<a id="identityvault.remainingattempts"></a>

### remainingAttempts

▸ **remainingAttempts**(): `Promise`<`number`>

Check how many remaining failed attempts are left until vault clears

**Returns:** `Promise`<`number`> the number of remaining attempts

___

<a id="identityvault.removevalue"></a>

### removeValue

▸ **removeValue**(key: *`string`*): `Promise`<`void`>

Removes data under the given key.

*__throws__*: [VaultError](#vaulterror) - if vault is locked, or if passcode is enabled but passcode has not been setup

**Parameters:**

| Name | Type     | Description                      |
| ---- | -------- | -------------------------------- |
| key  | `string` | the key to remove the value from |

**Returns:** `Promise`<`void`>

___

<a id="identityvault.setbiometricsenabled"></a>

### setBiometricsEnabled

▸ **setBiometricsEnabled**(isBiometricsEnabled: *`boolean`*): `Promise`<`void`>

Enable/Disable Biometric authentication for the vault

*__throws__*: [VaultError](#vaulterror) - if biometrics is unavailable or the vault is locked

**Parameters:**

| Name                | Type      | Description                                 |
| ------------------- | --------- | ------------------------------------------- |
| isBiometricsEnabled | `boolean` | whether or not biometrics should be enabled |

**Returns:** `Promise`<`void`>

___

<a id="identityvault.setpasscode"></a>

### setPasscode

▸ **setPasscode**(passcode?: *`string`*): `Promise`<`void`>

Set or Change the passcode for the vault

*__throws__*: [VaultError](#vaulterror) - if the vault is locked, passcode is disabled, user canceled pin prompt, or pin was mismatched

**Parameters:**

| Name                | Type     | Description                                                                         |
| ------------------- | -------- | ----------------------------------------------------------------------------------- |
| `Optional` passcode | `string` | The passcode to set. If left null a native dialog will prompt the user to enter it. |

**Returns:** `Promise`<`void`>

___

<a id="identityvault.setpasscodeenabled"></a>

### setPasscodeEnabled

▸ **setPasscodeEnabled**(isPasscodeEnabled: *`boolean`*): `Promise`<`void`>

Enable/Disable passcode authentication for the vault

*__throws__*: [VaultError](#vaulterror) - if the vault is locked

**Parameters:**

| Name              | Type      | Description                               |
| ----------------- | --------- | ----------------------------------------- |
| isPasscodeEnabled | `boolean` | whether or not passcode should be enabled |

**Returns:** `Promise`<`void`>

___

<a id="identityvault.setsecurestoragemodeenabled"></a>

### setSecureStorageModeEnabled

▸ **setSecureStorageModeEnabled**(isSecureStorageModeEnabled: *`boolean`*): `Promise`<`void`>

Enable/Disable secure storage mode for the vault. Setting [AuthMode.SecureStorage](#authmode.securestorage) automatically disables passcode and biometric authentication and allows for session values to be stored persistently and securely at rest using the keychain but allowing the user to access the data without authenticating as long as the device is unlocked.

*__throws__*: [VaultError](#vaulterror) - if the vault is locked

**Parameters:**

| Name                       | Type      | Description                                          |
| -------------------------- | --------- | ---------------------------------------------------- |
| isSecureStorageModeEnabled | `boolean` | whether or not secure storage mode should be enabled |

**Returns:** `Promise`<`void`>

___

<a id="identityvault.storetoken"></a>

### storeToken

▸ **storeToken**(token: *`any`*): `Promise`<`void`>

Store a value securely in the token slot. This is equivalent to calling [storeValue("token", token)](#identityvault.storevalue).

*__throws__*: [VaultError](#vaulterror) - if vault is locked, or if passcode is enabled but passcode has not been setup

**Parameters:**

| Name  | Type  | Description                          |
| ----- | ----- | ------------------------------------ |
| token | `any` | the value to store in the token slot |

**Returns:** `Promise`<`void`>

___

<a id="identityvault.storevalue"></a>

### storeValue

▸ **storeValue**(key: *`string`*, value: *`any`*): `Promise`<`void`>

Store data securely under the given key.

*__throws__*: [VaultError](#vaulterror) - if vault is locked, or if passcode is enabled but passcode has not been setup

**Parameters:**

| Name  | Type     | Description                      |
| ----- | -------- | -------------------------------- |
| key   | `string` | the key to store in the value in |
| value | `any`    | the value to store               |

**Returns:** `Promise`<`void`>

___

<a id="identityvault.unlock"></a>

### unlock

▸ **unlock**(usingPasscode?: *`boolean`*, passcode?: *`string`*): `Promise`<`void`>

Unlock the vault using either passcode or biometrics

*__throws__*: [VaultError](#vaulterror) - if the vault is locked, the unlock type wasn't enabled, user canceled pin prompt, or pin was mismatched

**Parameters:**

| Name                     | Type      | Description                                                                         |
| ------------------------ | --------- | ----------------------------------------------------------------------------------- |
| `Optional` usingPasscode | `boolean` | whether or not to use passcode to unlock the vault                                  |
| `Optional` passcode      | `string`  | The passcode to use. If left null a native dialog will prompt the user to enter it. |

**Returns:** `Promise`<`void`>

___

<a id="identityvault.unsubscribe"></a>

### unsubscribe

▸ **unsubscribe**(): `Promise`<`void`>

Unsubscribe the instance from events about the vault.

**Returns:** `Promise`<`void`>

___

___

<a id="identityvaultuser"></a>

### IdentityVaultUser

**IdentityVaultUser**:

The main class which you can extend in order to implement vault usage. @typeparam `T` must extend [DefaultSession](#defaultsession)

*__usage__*:
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

___

<a id="identityvaultuser.getbiometrictype"></a>

### getBiometricType

▸ **getBiometricType**(): `Promise`<[BiometricType](#biometrictype)>

Get the type of biometrics the device supports

**Returns:** `Promise`<[BiometricType](#biometrictype)> the type of biometrics the device supports

___

<a id="identityvaultuser.getplugin"></a>

### getPlugin

▸ **getPlugin**(): [IonicNativeAuthPlugin](#ionicnativeauthplugin)

Returns the underlying Plugin Implementation. This can be overriden in the sub class service to allow for a customer browser implementation. Note that when overriding this with a browser implementation you should use the storeValue/getValue functions with the key `session` to store & retrieve the session as described or by [DefaultSession](#defaultsession) or the interface that extends it.

*__usage__*:
 ```typescript
getPlugin(): IonicNativeAuthPlugin {
  if (this.platform.is('cordova')) {
    return super.getPlugin();
  }
  // MyCustomerBrowserImplementation must implement the IonicNativeAuthPlugin interface
  // make sure getValue('session') & storeValue('session') store & retrieve the session.
  return MyCustomBrowserImplementation();
}
```

**Returns:** [IonicNativeAuthPlugin](#ionicnativeauthplugin)

___

<a id="identityvaultuser.getsession"></a>

### getSession

▸ **getSession**(): `Promise`<`T` \| `undefined`>

▸ **getSession**(): `Promise`<`T` \| `undefined`>

The stored session data

**Returns:** `Promise`<`T` \| `undefined`>

Get the session from memory (without checking the vault for it)

**Returns:** `Promise`<`T` \| `undefined`>

___

<a id="identityvaultuser.getvault"></a>

### getVault

▸ **getVault**(): `Promise`<[IdentityVault](#identityvault)>

Get raw access to the underlying vault api

**Returns:** `Promise`<[IdentityVault](#identityvault)>

___

<a id="identityvaultuser.hasstoredsession"></a>

### hasStoredSession

▸ **hasStoredSession**(): `Promise`<`boolean`>

Check if there are any saved sessions in the vault

**Returns:** `Promise`<`boolean`>

___

<a id="identityvaultuser.isbiometricsavailable"></a>

### isBiometricsAvailable

▸ **isBiometricsAvailable**(): `Promise`<`boolean`>

Check whether or not biometrics is supported by the device and has been configured by the current user of the device

**Returns:** `Promise`<`boolean`> whether or not biometrics is available

___

<a id="identityvaultuser.isbiometricsenabled"></a>

### isBiometricsEnabled

▸ **isBiometricsEnabled**(): `Promise`<`boolean`>

Check whether or not biometrics is enabled on the vault

**Returns:** `Promise`<`boolean`> whether or not biometrics is enabled

___

<a id="identityvaultuser.isbiometricssupported"></a>

### isBiometricsSupported

▸ **isBiometricsSupported**(): `Promise`<`boolean`>

Check whether or not biometrics is supported by the device

**Returns:** `Promise`<`boolean`> whether or not biometrics is supported

___

<a id="identityvaultuser.ispasscodeenabled"></a>

### isPasscodeEnabled

▸ **isPasscodeEnabled**(): `Promise`<`boolean`>

Check if passcode authentication is enabled for the vault

**Returns:** `Promise`<`boolean`> whether or not the passcode is enabled

___

<a id="identityvaultuser.issecurestoragemodeenabled"></a>

### isSecureStorageModeEnabled

▸ **isSecureStorageModeEnabled**(): `Promise`<`boolean`>

Check if [AuthMode.SecureStorage](#authmode.securestorage) is enabled for the vault

**Returns:** `Promise`<`boolean`> whether or not the secure storage mode is enabled

___

<a id="identityvaultuser.lockout"></a>

### lockOut

▸ **lockOut**(): `Promise`<`void`>

Lock the user out without clearing their secure session information from the vault

**Returns:** `Promise`<`void`>

___

<a id="identityvaultuser.login"></a>

### login

▸ **login**(session: *`T`*, authMode?: *[AuthMode](#authmode)*): `Promise`<`void`>

Login a new session for the user. This method will clear the vault & any stored PIN for previously stored sessions.

**Parameters:**

| Name                | Type                  | Description          |
| ------------------- | --------------------- | -------------------- |
| session             | `T`                   | the session to store |
| `Optional` authMode | [AuthMode](#authmode) |                      |

**Returns:** `Promise`<`void`>

___

<a id="identityvaultuser.logout"></a>

### logout

▸ **logout**(): `Promise`<`void`>

Log the user out entirely, and forget any stored authentication tokens

**Returns:** `Promise`<`void`>

___

<a id="identityvaultuser.onconfigchange"></a>

### onConfigChange

▸ **onConfigChange**(state: *[VaultConfig](#vaultconfig)*): `any`

Called when there has been a configuration change in the vault

**Parameters:**

| Name  | Type                        |
| ----- | --------------------------- |
| state | [VaultConfig](#vaultconfig) |

**Returns:** `any`

___

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

___

<a id="identityvaultuser.onsessionrestoreerror"></a>

### onSessionRestoreError

▸ **onSessionRestoreError**(err: *[VaultError](#vaulterror)*): `any`

Called when the session fails to auto restore

**Parameters:**

| Name | Type                      | Description                                                         |
| ---- | ------------------------- | ------------------------------------------------------------------- |
| err  | [VaultError](#vaulterror) | The [VaultError](#vaulterror) or that occurred.<br><br> |

**Returns:** `any`

___

<a id="identityvaultuser.onsessionrestored"></a>

### onSessionRestored

▸ **onSessionRestored**(session: *`T`*): `any`

Called when the session object is restored.

**Parameters:**

| Name    | Type | Description                                                                                      |
| ------- | ---- | ------------------------------------------------------------------------------------------------ |
| session | `T`  | The [DefaultSession](#defaultsession) or user defined session that occurred.<br><br> |

**Returns:** `any`

___

<a id="identityvaultuser.onsetuperror"></a>

### onSetupError

▸ **onSetupError**(error: *[VaultError](#vaulterror)*): `any`

Called when there is an error during vault setup

**Parameters:**

| Name  | Type                      | Description                                                      |
| ----- | ------------------------- | ---------------------------------------------------------------- |
| error | [VaultError](#vaulterror) | The [VaultError](#vaulterror) that occurred.<br><br> |

**Returns:** `any`

___

<a id="identityvaultuser.onunlockonreadyerror"></a>

### onUnlockOnReadyError

▸ **onUnlockOnReadyError**(err: *[VaultError](#vaulterror)*): `any`

Called when the automatically unlocking the vault after it is ready fails.

**Parameters:**

| Name | Type                      | Description                                                         |
| ---- | ------------------------- | ------------------------------------------------------------------- |
| err  | [VaultError](#vaulterror) | The [VaultError](#vaulterror) or that occurred.<br><br> |

**Returns:** `any`

___

<a id="identityvaultuser.onvaultlocked"></a>

### onVaultLocked

▸ **onVaultLocked**(event: *[LockEvent](#lockevent)*): `any`

Called when the vault has been locked

**Parameters:**

| Name  | Type                    | Description                                           |
| ----- | ----------------------- | ----------------------------------------------------- |
| event | [LockEvent](#lockevent) | The data about the lock event [LockEvent](#lockevent) |

**Returns:** `any`

___

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

___

<a id="identityvaultuser.onvaultunlocked"></a>

### onVaultUnlocked

▸ **onVaultUnlocked**(state: *[VaultConfig](#vaultconfig)*): `any`

Called when the vault has been unlocked

**Parameters:**

| Name  | Type                        |
| ----- | --------------------------- |
| state | [VaultConfig](#vaultconfig) |

**Returns:** `any`

___

<a id="identityvaultuser.ready"></a>

### ready

▸ **ready**(): `Promise`<`void`>

Promise ensuring the user vault is ready to be accessed or denoting an error in setup;

**Returns:** `Promise`<`void`>
- A promise that resolves when the vault is succesfully configured and available.

___

<a id="identityvaultuser.restoresession"></a>

### restoreSession

▸ **restoreSession**(): `Promise`<`T` \| `undefined`>

Restore the session from the vault

**Returns:** `Promise`<`T` \| `undefined`>

___

<a id="identityvaultuser.savesession"></a>

### saveSession

▸ **saveSession**(session: *`T`*): `Promise`<`void`>

Store the session to the vault

**Parameters:**

| Name    | Type | Description          |
| ------- | ---- | -------------------- |
| session | `T`  | the session to store |

**Returns:** `Promise`<`void`>

___

<a id="identityvaultuser.setauthmode"></a>

### setAuthMode

▸ **setAuthMode**(authMode: *[AuthMode](#authmode)*): `Promise`<`void`>

Set the [AuthMode](#authmode) for the vault. The vault must be unlocked or this will throw an error.

*__throws__*: [VaultError](#vaulterror) - If the vault is locked or the mode is unavailale due to device hardware

**Parameters:**

| Name     | Type                  | Description                       |
| -------- | --------------------- | --------------------------------- |
| authMode | [AuthMode](#authmode) | The [AuthMode](#authmode) to use. |

**Returns:** `Promise`<`void`>

___

<a id="identityvaultuser.setbiometricsenabled"></a>

### setBiometricsEnabled

▸ **setBiometricsEnabled**(isBiometricsEnabled: *`boolean`*): `Promise`<`void`>

Enable/Disable Biometric authentication

*__throws__*: [VaultError](#vaulterror) - if biometrics is unavailable or the vault is locked

**Parameters:**

| Name                | Type      | Description                                 |
| ------------------- | --------- | ------------------------------------------- |
| isBiometricsEnabled | `boolean` | whether or not biometrics should be enabled |

**Returns:** `Promise`<`void`>

___

<a id="identityvaultuser.setpasscode"></a>

### setPasscode

▸ **setPasscode**(): `Promise`<`void`>

Set or change the passcode for the user This will call the [onPasscodeRequest](#identityvaultuser.onpasscoderequest) handler to allow for user defined passcode prompt. You can get more fine grain contol using the [IdentityVault](#identityvault) directly by calling [getVault](#identityvaultuser.getvault)

*__throws__*: [VaultError](#vaulterror) - if the vault is locked, passcode is disabled, user canceled pin prompt, or pin was mismatched

**Returns:** `Promise`<`void`>

___

<a id="identityvaultuser.setpasscodeenabled"></a>

### setPasscodeEnabled

▸ **setPasscodeEnabled**(isPasscodeEnabled: *`boolean`*): `Promise`<`void`>

Enable/Disable passcode authentication. This will cause [setPasscode](#identityvault.setpasscode) to fire if passcode setup is required causing the [onPasscodeRequest](#identityvaultuser.onpasscoderequest) handler to fire to allow for user defined passcode prompt. You can get more fine grain contol using the [IdentityVault](#identityvault) directly by calling [getVault](#identityvaultuser.getvault)

*__throws__*: [VaultError](#vaulterror) - if the vault is locked

**Parameters:**

| Name              | Type      | Description                               |
| ----------------- | --------- | ----------------------------------------- |
| isPasscodeEnabled | `boolean` | whether or not passcode should be enabled |

**Returns:** `Promise`<`void`>

___

<a id="identityvaultuser.unlock"></a>

### unlock

▸ **unlock**(authMode?: *[AuthMode](#authmode)*): `Promise`<`void`>

Unlock the user's vault using the AuthMode configured for the vault or the override passed in to the call. This will call the [onPasscodeRequest](#identityvaultuser.onpasscoderequest) handler if the specified [AuthMode](#authmode) allows for it to allow for user defined passcode prompt You can get more fine grain contol using the [IdentityVault](#identityvault) directly by calling [getVault](#identityvaultuser.getvault)

**Parameters:**

| Name                | Type                  |
| ------------------- | --------------------- |
| `Optional` authMode | [AuthMode](#authmode) |

**Returns:** `Promise`<`void`>

___

___

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

___

___

<a id="lockevent"></a>

### LockEvent

**LockEvent**:

The lock event passed to the [onVaultLocked](#identityvaultuser.onvaultlocked) handler.

<a id="lockevent.saved"></a>

### saved

**● saved**: *`boolean`*

If the data was persisted to the device before lock

___

<a id="lockevent.timeout"></a>

### timeout

**● timeout**: *`boolean`*

If the lock was due to a background timeout

___

___

<a id="pluginconfiguration"></a>

### PluginConfiguration

**PluginConfiguration**:

The configuration returned from [IonicNativeAuthPlugin](#ionicnativeauthplugin) when [getConfig](#identityvault.getconfig) is called.

<a id="pluginconfiguration.descriptor"></a>

### descriptor

**● descriptor**: *[VaultDescriptor](#vaultdescriptor)*

The values the uniquely identify the vault

___

<a id="pluginconfiguration.hidescreenonbackground"></a>

### hideScreenOnBackground

**● hideScreenOnBackground**: *`boolean`*

Obscures the app when backgrounded to avoid leaking sensitive information, such as financial statements or balances

___

<a id="pluginconfiguration.isbiometricsenabled"></a>

### isBiometricsEnabled

**● isBiometricsEnabled**: *`boolean`*

Whether biometric authentication is enabled for the vault

___

<a id="pluginconfiguration.ispasscodeenabled"></a>

### isPasscodeEnabled

**● isPasscodeEnabled**: *`boolean`*

Whether passcode authentication is enabled for the vault

___

<a id="pluginconfiguration.ispasscodesetupneeded"></a>

### isPasscodeSetupNeeded

**● isPasscodeSetupNeeded**: *`boolean`*

Whether a passcode needs to be set with [setPasscode](#identityvault.setpasscode)

___

<a id="pluginconfiguration.issecurestoragemodeenabled"></a>

### isSecureStorageModeEnabled

**● isSecureStorageModeEnabled**: *`boolean`*

Whether [AuthMode.SecureStorage](#authmode.securestorage) is enabled for the vault

___

<a id="pluginconfiguration.lockafter"></a>

### lockAfter

**● lockAfter**: *`number`*

The amount of number of milliseconds the app can be in the background for until the vault locks

___

___

<a id="pluginoptions"></a>

### PluginOptions

**PluginOptions**:

The options passed the the [IonicNativeAuthPlugin](#ionicnativeauthplugin) when creating a vault with [getVault](#identityvaultuser.getvault)

<a id="pluginoptions.allowsystempinfallback"></a>

### `<Optional>` allowSystemPinFallback

**● allowSystemPinFallback**: *`boolean`*

If biometric auth fails, allow system pin fallback.

Please note: when Android devices are set to allow system pin fallback, the behavior of the biometrics prompt changes. The OS biometric prompt will not report that biometrics failed nor that the user has been locked out of biometrics. It is only currently possible to know the user either canceled the authentication prompt, or was successful in verifying.

*__default__*: false

___

<a id="pluginoptions.androidpromptdescription"></a>

### `<Optional>` androidPromptDescription

**● androidPromptDescription**: *`string`*

The description text for the Android authentication prompt.

*__default__*: null

___

<a id="pluginoptions.androidpromptnegativebuttontext"></a>

### `<Optional>` androidPromptNegativeButtonText

**● androidPromptNegativeButtonText**: *`string`*

The cancel text for the Android authentication prompt.

*__default__*: "Cancel"

___

<a id="pluginoptions.androidpromptsubtitle"></a>

### `<Optional>` androidPromptSubtitle

**● androidPromptSubtitle**: *`string`*

The subtitle text for the Android authentication prompt.

*__default__*: null

___

<a id="pluginoptions.androidprompttitle"></a>

### `<Optional>` androidPromptTitle

**● androidPromptTitle**: *`string`*

The title text for the Android authentication prompt.

*__default__*: "Please Authenticate"

___

<a id="pluginoptions.hidescreenonbackground"></a>

### `<Optional>` hideScreenOnBackground

**● hideScreenOnBackground**: *`boolean`*

Obscures the app when backgrounded to avoid leaking sensitive information, such as financial statements or balances

___

<a id="pluginoptions.lockafter"></a>

### `<Optional>` lockAfter

**● lockAfter**: *`number`*

The amount of number of milliseconds the app can be in the background for until the vault locks

___

<a id="pluginoptions.shouldclearvaultaftertoomanyfailedattempts"></a>

### `<Optional>` shouldClearVaultAfterTooManyFailedAttempts

**● shouldClearVaultAfterTooManyFailedAttempts**: *`boolean`*

After too many failed authentication attempts, should the vault be cleared?

*__default__*: true

___

<a id="pluginoptions.username"></a>

### username

**● username**: *`string`*

The username for the vault you wish to access

___

<a id="pluginoptions.vaultid"></a>

### vaultId

**● vaultId**: *`string`*

The vaultId for the vault you wish to access

___

<a id="pluginoptions.onconfig"></a>

### `<Optional>` onConfig

▸ **onConfig**(event: *[PluginConfiguration](#pluginconfiguration)*): `any`

A handler that will receive events any time the vault is configuration is changed

**Parameters:**

| Name  | Type                                        |
| ----- | ------------------------------------------- |
| event | [PluginConfiguration](#pluginconfiguration) |

**Returns:** `any`

___

<a id="pluginoptions.onerror"></a>

### `<Optional>` onError

▸ **onError**(error: *[VaultError](#vaulterror)*): `any`

Called when there is an error during vault setup

**Parameters:**

| Name  | Type                      | Description                                                      |
| ----- | ------------------------- | ---------------------------------------------------------------- |
| error | [VaultError](#vaulterror) | The [VaultError](#vaulterror) that occurred.<br><br> |

**Returns:** `any`

___

<a id="pluginoptions.onlock"></a>

### `<Optional>` onLock

▸ **onLock**(event: *[LockEvent](#lockevent)*): `any`

A handler that will receive events any time the vault is locked

**Parameters:**

| Name  | Type                    |
| ----- | ----------------------- |
| event | [LockEvent](#lockevent) |

**Returns:** `any`

___

<a id="pluginoptions.onready"></a>

### `<Optional>` onReady

▸ **onReady**(vault: *[IdentityVault](#identityvault)*): `any`

Called when the vault is configured and available.

**Parameters:**

| Name  | Type                            | Description                                                       |
| ----- | ------------------------------- | ----------------------------------------------------------------- |
| vault | [IdentityVault](#identityvault) | The [IdentityVault](#identityvault) instance.<br><br> |

**Returns:** `any`

___

<a id="pluginoptions.onunlock"></a>

### `<Optional>` onUnlock

▸ **onUnlock**(event: *[PluginConfiguration](#pluginconfiguration)*): `any`

A handler that will receive events any time the vault is unlocked

**Parameters:**

| Name  | Type                                        |
| ----- | ------------------------------------------- |
| event | [PluginConfiguration](#pluginconfiguration) |

**Returns:** `any`

___

___

<a id="vaultconfig"></a>

### VaultConfig

**VaultConfig**:

The configuration file returned to event handlers such as [onConfigChange](#identityvaultuser.onconfigchange) and [onVaultReady](#identityvaultuser.onvaultready).

<a id="vaultconfig.allowsystempinfallback"></a>

### `<Optional>` allowSystemPinFallback

**● allowSystemPinFallback**: *`boolean`*

If biometric auth fails, allow system pin fallback.

*__default__*: false

___

<a id="vaultconfig.androidpromptdescription"></a>

### `<Optional>` androidPromptDescription

**● androidPromptDescription**: *`string`*

The description text for the Android authentication prompt.

*__default__*: null

___

<a id="vaultconfig.androidpromptnegativebuttontext"></a>

### `<Optional>` androidPromptNegativeButtonText

**● androidPromptNegativeButtonText**: *`string`*

The cancel text for the Android authentication prompt.

*__default__*: "Cancel"

___

<a id="vaultconfig.androidpromptsubtitle"></a>

### `<Optional>` androidPromptSubtitle

**● androidPromptSubtitle**: *`string`*

The subtitle text for the Android authentication prompt.

*__default__*: null

___

<a id="vaultconfig.androidprompttitle"></a>

### `<Optional>` androidPromptTitle

**● androidPromptTitle**: *`string`*

The title text for the Android authentication prompt.

*__default__*: "Please Authenticate"

___

<a id="vaultconfig.authmode"></a>

### `<Optional>` authMode

**● authMode**: *[AuthMode](#authmode)*

The [AuthMode](#authmode) to configure a new vault with. Note: This will only affect newly created vaults. Vaults with existing data and configuration will use there previous configuration. They can be change by unlocking and then chaning the AuthMode.

*__default__*: *   [BiometricAndPasscode](#authmode.biometricandpasscode)

___

<a id="vaultconfig.hidescreenonbackground"></a>

### `<Optional>` hideScreenOnBackground

**● hideScreenOnBackground**: *`boolean`*

Obscures the app when backgrounded to avoid leaking sensitive information, such as financial statements or balances

*__default__*: false

___

<a id="vaultconfig.ispasscodesetupneeded"></a>

### isPasscodeSetupNeeded

**● isPasscodeSetupNeeded**: *`boolean`*

Whether a passcode needs to be set with [setPasscode](#identityvault.setpasscode)

___

<a id="vaultconfig.lockafter"></a>

### `<Optional>` lockAfter

**● lockAfter**: *`number`*

The amount of number of milliseconds the app can be in the background for until the vault locks. A value of 0 means the vault won't lock in the background.

*__default__*: 0

___

<a id="vaultconfig.shouldclearvaultaftertoomanyfailedattempts"></a>

### `<Optional>` shouldClearVaultAfterTooManyFailedAttempts

**● shouldClearVaultAfterTooManyFailedAttempts**: *`boolean`*

After too many failed authentication attempts, should the vault be cleared?

*__default__*: true

___

___

<a id="vaultdescriptor"></a>

### VaultDescriptor

**VaultDescriptor**:

An interface that describes the vault. In [IdentityVaultUser](#identityvaultuser) this defaults to `_lastUser` & `default` you can optionally add this to the constructor to accomplish advanced use cases multi-tenant vaults.

<a id="vaultdescriptor.username"></a>

### username

**● username**: *`string`*

The username for the vault you wish to access

___

<a id="vaultdescriptor.vaultid"></a>

### vaultId

**● vaultId**: *`string`*

The vaultId for the vault you wish to access

___

___

<a id="vaulterror"></a>

### VaultError

**VaultError**:

An error that can be thrown by the plugin.

*__usage__*:
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

___

<a id="vaulterror.message"></a>

### message

**● message**: *`string`*

___

___

<a id="vaultoptions"></a>

### VaultOptions

**VaultOptions**:

The options passed in to initialize the vault.

<a id="vaultoptions.allowsystempinfallback"></a>

### `<Optional>` allowSystemPinFallback

**● allowSystemPinFallback**: *`boolean`*

If biometric auth fails, allow system pin fallback.

*__default__*: false

___

<a id="vaultoptions.androidpromptdescription"></a>

### `<Optional>` androidPromptDescription

**● androidPromptDescription**: *`string`*

The description text for the Android authentication prompt.

*__default__*: null

___

<a id="vaultoptions.androidpromptnegativebuttontext"></a>

### `<Optional>` androidPromptNegativeButtonText

**● androidPromptNegativeButtonText**: *`string`*

The cancel text for the Android authentication prompt.

*__default__*: "Cancel"

___

<a id="vaultoptions.androidpromptsubtitle"></a>

### `<Optional>` androidPromptSubtitle

**● androidPromptSubtitle**: *`string`*

The subtitle text for the Android authentication prompt.

*__default__*: null

___

<a id="vaultoptions.androidprompttitle"></a>

### `<Optional>` androidPromptTitle

**● androidPromptTitle**: *`string`*

The title text for the Android authentication prompt.

*__default__*: "Please Authenticate"

___

<a id="vaultoptions.authmode"></a>

### `<Optional>` authMode

**● authMode**: *[AuthMode](#authmode)*

The [AuthMode](#authmode) to configure a new vault with. Note: This will only affect newly created vaults. Vaults with existing data and configuration will use there previous configuration. They can be change by unlocking and then chaning the AuthMode.

*__default__*: *   [BiometricAndPasscode](#authmode.biometricandpasscode)

___

<a id="vaultoptions.hidescreenonbackground"></a>

### `<Optional>` hideScreenOnBackground

**● hideScreenOnBackground**: *`boolean`*

Obscures the app when backgrounded to avoid leaking sensitive information, such as financial statements or balances

*__default__*: false

___

<a id="vaultoptions.lockafter"></a>

### `<Optional>` lockAfter

**● lockAfter**: *`number`*

The amount of number of milliseconds the app can be in the background for until the vault locks. A value of 0 means the vault won't lock in the background.

*__default__*: 0

___

<a id="vaultoptions.restoresessiononready"></a>

### `<Optional>` restoreSessionOnReady

**● restoreSessionOnReady**: *`boolean`*

Whether or not to attempt to automatically restore the session when the vault is ready If [restoreSessionOnReady](#vaultoptions.restoresessiononready) and [unlockOnAccess](#vaultoptions.unlockonaccess) are both true the vault will be immediately unlocked & the session restored if onReady if the vault is in use.

*__default__*: false

___

<a id="vaultoptions.shouldclearvaultaftertoomanyfailedattempts"></a>

### `<Optional>` shouldClearVaultAfterTooManyFailedAttempts

**● shouldClearVaultAfterTooManyFailedAttempts**: *`boolean`*

After too many failed authentication attempts, should the vault be cleared?

*__default__*: true

___

<a id="vaultoptions.unlockonaccess"></a>

### `<Optional>` unlockOnAccess

**● unlockOnAccess**: *`boolean`*

Whether or not to attempt to automatically unlock the vault when a value is accessed. If [restoreSessionOnReady](#vaultoptions.restoresessiononready) and [unlockOnAccess](#vaultoptions.unlockonaccess) are both true the vault will be immediately unlocked & the session restored if onReady if the vault is in use.

*__default__*: false

___

<a id="vaultoptions.unlockonready"></a>

### `<Optional>` unlockOnReady

**● unlockOnReady**: *`boolean`*

Whether or not to attempt to automatically unlock the vault when the vault is ready

*__default__*: false

___

___

## Type aliases

<a id="biometrictype"></a>

### BiometricType

**Ƭ BiometricType**: *"touchID" \| "faceID" \| "none"*

The possible values returned by [getBiometricType](#identityvault.getbiometrictype)

___

## Change Log



### \[4.0.1\] (2020-04-17)


### Bug Fixes

* **android:** clear vault when there are too many failed bio unlock attempts
* **ios:** clear vault when there are too many failed bio unlock attempts
* allow install in cordova-android 9-dev



### \[4.0.0\] (2020-04-08)


### Bug Fixes

* **ios:** swift 4.2 compilation issue


### Features

* **android:** AndroidX upgrade, Android Face ID support


### BREAKING CHANGES

* **android:** AndroidX is now required in projects with IV v4.


### \[3.6.4\] (2020-05-13)


### Bug Fixes

* **android:** avoid KeyPermanentlyInvalidatedException problem on SDK 19 [SE-183]
* **ios:** swift 4.2 compilation issue



### \[3.6.3\] (2020-04-01)


### Bug Fixes

* **ios:** remove old vault upon reinstall



### \[3.6.2\] (2020-02-28)


### Bug Fixes

* **ios:** clear the vault on lock when using InMemoryOnly mode



### \[3.6.1\] (2020-02-05)


### Bug Fixes

* **Android, iOS:** fix an issue where if auto unlock or restore session fails the vault fails to fire the onVaultReady event



### \[3.6.0\] (2019-12-20)


### Features

* add getKeys to IdentityVault
* add removeValue to IdentityVault



### \[3.5.1\] (2019-12-18)


### Bug Fixes

* **android:** properly call onVaultLocked after lock
* **ios:** add screenProtectView on top window



### \[3.5.0\] (2019-11-27)


### Bug Fixes

* **Android:** Fix issue where vault would crash if Android device only supported FaceMatch
* **vault-user:** use the vault user methods to set the auth mode


### Features

* add isBiometricsSupported function



### \[3.4.8\] (2019-11-08)


### Bug Fixes

* **vault-user:** use the vault user methods to set the auth mode



### \[3.4.7\] (2019-09-09)


### Bug Fixes

* **Android:** Fix an issue where the vault would not be cleared when fingerprints were added or all fingerprints were removed on Android..



### \[3.4.6\] (2019-08-07)


### Bug Fixes

* **Android:** fix an issue where adding a fingerprint to device after the app was open would not refresh whether biometrics was available or not



### \[3.4.5\] (2019-07-27)


### Bug Fixes

* **Android, iOS:** getSession return type and default IonicIdentityVaultUser generic to DefaultSession



### \[3.4.4\] (2019-07-25)


### Bug Fixes

* **Android:** Fixes an issue on Android where getBiometricType would return none if Biometrics was not enabled even though the device had biometric hardware.



### \[3.4.3\] (2019-06-14)


### Bug Fixes

* **Android:** Fixed issue where when hideScreenInBackground feature was enabled screenshots would be disabled.



### \[3.4.2\] (2019-06-14)


### Bug Fixes

* **iOS:** Fixed an issue where the hide screen in background functionality was broken



### \[3.4.1\] (2019-06-06)


### Bug Fixes

* **Android:** fix issue where setBiometricsEnabled(false) would throw an error if biometrics was unavailable



### \[3.4.0\] (2019-06-06)


### Bug Fixes

* **iOS:** fix an issue where if a user removed fingerprints after authentication storing the session would return an error rather than default to passcode only mode
* **iOS:** Fix issue where `getBiometricType` would return `none` if TouchID or FaceID was present on device but the user was not enrolled.
* **iOS:** fix issue with getBiometricType and issue where lock event was triggered when lock was called in secure storage mode


### Features

* Added android side of Secure Storage Mode
* update Typescript/JS layer to support Secure Storage mode



### \[3.3.0\] (2019-05-10)


### Bug Fixes

* **Android, iOS:** make the setting of the auth mode fault tolerant


### Features

* **Android. iOS:** add Biometric or Passcode mode



### \[3.2.3\] (2019-04-29)


### Bug Fixes

* **Android:** fix bug in Android where FingerprintManager import was missing



### \[3.2.2\] (2019-04-29)


### Bug Fixes

* fix release configuration issue where xlmns:android was incorrectly add to manifest



### \[3.2.1\] (2019-04-27)


### Bug Fixes

* fix bug where plugin id was incorrect and didn't include scope



### \[3.2.0\] (2019-04-26)

### Features

- Added [getPlugin](#identityvaultuser.getplugin) method which can be overridden in advanced use cases to provide custom implementations for PWA compatibility etc.

### Bug Fixes

* **iOS:** Fixed a bug on iOS where when using the [hideScreenOnBackground](#vaultoptions.hidescreenonbackground) flag the splashscreen may temporarily flash during biometric prompts.
* **Android:** Fixed a bug on Android where [isBiometricsAvailable](#identityvaultuser.isbiometricsavailable) would return true is some cases if No fingerprints were enrolled or fingerprint hardware wasn't available.
* **Android, iOS:** Fixed a bug where [getSession](#identityvaultuser.getsession) may incorrectly return `undefined` due to failing to wait for the plugin to be ready before returning.

### \[3.1.0\] (2019-04-19)

### Features

* Added [login](#identityvaultuser.login) method which clears the vault and stores the session passed to it.

### \[3.0.0\] (2019-04-08)

### Features

* Added the ability to use [onPasscodeRequest](#identityvaultuser.onpasscoderequest) to use a custom pin prompt screen.
* Made [IdentityVaultUser](#identityvaultuser) a generic class to allow using the [DefaultSession](#defaultsession) or extending it to type and store the session object.
* Added support for advanced usages such as multi-tenant vaults by using the [IonicNativeAuthPlugin](#ionicnativeauthplugin.getvault) and [IdentityVault](#identityvault) APIs directly.
