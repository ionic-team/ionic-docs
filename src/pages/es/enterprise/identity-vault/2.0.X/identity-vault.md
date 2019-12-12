---
title: Identity Vault
version: 2.0.0
minor: 2.0.X
template: enterprise-plugin
otherVersions:
  - 2.0.X
  - 3.0.X
  - 3.1.X
  - 3.2.X
  - 3.3.X
  - 3.4.X
---

# Ionic Enterprise Identity Vault

The Ionic Enterprise Identity Vault ("the Vault") is a all-in-one frontend identity management system that uses security best practices and the latest in biometric authentication options available on iOS and Android.

The Vault manages secure user identity and session tokens, ensuring sensitive tokens are encrypted at rest, stored only in secure locations on the device, and unlocked only with biometric identity (TouchID/FaceID/fingerprint).

Without Ionic Enterprise Identity Vault, Ionic developers have to resort to combining third party Cordova plugins, often resulting in insecure setups due to the lack of correct implementation of biometric and at-rest encryption strategies.

## Overview <iframe src="https://fast.wistia.net/embed/iframe/1drqkhh5sb" title="Wistia video player" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="640" height="360" mark="crwd-mark"></iframe>

<script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>

### Implementation Video Walkthrough <iframe src="https://fast.wistia.net/embed/iframe/11kyjukz3u" title="Wistia video player" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="640" height="360" mark="crwd-mark"></iframe>

<script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>

#### Configuring the Vault

In the constructor of your `User` service, the vault is configured by providing options to the `super()` call:

```typescript
@Injectable()
export class User extends IonicIdentityVaultUser {
  constructor(public http: Http, public platform: Platform, public app: App) {
    super(platform, {
      // Whether to enable biometrics automatically when the user logs in
      enableBiometrics: true,
      // Lock the app if it is terminated and re-opened
      lockOnClose: false,
      // Lock the app after N milliseconds of inactivity
      lockAfter: 5000,
      // Obscure the app when the app is backgrounded (most apps will want
      // to set this to false unless sensitive financial data is being displayed)
      hideScreenOnBackground: true
    })
  }
}
```

(See more detailed explanations of the `super()` call [below](#superplatform-options).)

#### Modify login/signup methods

By default, the user service contains mock `login` and `signup` methods. You should modify those to call your login and signup API endpoints, respectively.

### User Lifecycle

Apps manage user sessions in a variety of ways. We have provided a typical authentication flow in the provided `demo`, which has traditional login forms and the ability for the user to enable biometric authentication in settings.

#### User service initialization

In the demo app, the user service is the first point of initialization for the user session. When the service is first loaded by Angular, it will query the vault for an unlocked token. An unlocked token is an in-memory token that indicates an active user session that is not locked out. For example, when using an app like Facebook, you can open and close the app repeatedly but still be logged in, this is considered "unlocked" in Vault terminology.

If the session is restored by the `User` service, then `onSessionRestored` will be called in your `User` service with the restored token, provided it extends `IonicIdentityVaultUser`. See the demo example in `user.ts`: [onSessionRestored()](https://github.com/ionic-team/enterprise-auth/blob/32bd512239eb0033887dd198406193c831f2fe02/demo/src/services/user.ts#L44)

Even for unlocked tokens, the vault is using security best practices, so you shouldn't store that token again yourself. The vault stores the token in a secure location so that it is encrypted *at rest*, only requiring biometric authentication if the vault is locked and the user locked out.

*Lock out*

Depending on your configuration, the Vault can become `locked`. For example, when using `lockAfter`, the vault will be locked after the app is inactive beyond the `lockAfter` threshold. When the vault is locked, the `User` service will have its `onVaultLocked()` method called. In this method, you should clear the session token, and navigate the user back to the login page. See the example in [onVaultLocked()](https://github.com/ionic-team/enterprise-auth/blob/32bd512239eb0033887dd198406193c831f2fe02/demo/src/services/user.ts#L29)

When the vault is locked, the session token is still stored in the vault, but now it is stored such that it *requires* biometric authentication to access. This is hardware-level security that cannot be bypassed even in jailbroken devices.

*Log out*

Logging a user out removes their session and clears any stored tokens in the Vault. This should be used when the user wants to completely log out from the app, for example to switch to a different user.

The `User` service provides a `logout()` method that *clears* the vault. This will also trigger the lock out event in `onVaultLocked()`, so your logic can remain the same.

## Automatically adding your token to requests

If you'd like to automatically add your authorization token from your user service to every request, you can follow along with the simple example at `demo/src/services/http-interceptor.ts`. <iframe src="https://fast.wistia.net/embed/iframe/ykv4h1dpiq" title="Wistia video player" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="640" height="360" mark="crwd-mark"></iframe>

<script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>

## Working with multiple authentication tokens

Identity Vault also supports using an `object` to store multiple tokens at once. This requires a few changes to your user service to make it use an object instead of a string. Please see `demo/src/services/user-multitoken.js` for an example.

Please note that this means `user.token` becomes an object with the tokens you stored, so any time you use `user.token` you'll also want to specify whick key such as `user.token.mainToken`. You may also need to modify `http-interceptor.ts` from above to include the right tokens. <iframe src="https://fast.wistia.net/embed/iframe/kz8oekyfxs" title="Wistia video player" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="640" height="360" mark="crwd-mark"></iframe>

<script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>

## Function & Callback Documentation

When extending a User service with `IonicIdentityVaultUser`, this modifies your user service and provides access to many methods both inside of your User class as well as other portions of your app. If you haven't already, you should extend `IonicIdentityVaultUser` and set up Identity Vault using the `super()` call from above.

Here are all of the functions available to you, as well as callbacks and how they work:

### Examples from `services/user.ts` in Demo project

#### `super(platform, options)`

This call should be made inside of your User classes constructor, please see the available options above.

```typescript
@Injectable()
export class User extends IonicIdentityVaultUser {
  constructor(public http: Http, public platform: Platform, public app: App) {
    super(platform, {
      // Whether to enable biometrics automatically when the user logs in
      enableBiometrics: true,
      // Lock the app if it is terminated and re-opened
      lockOnClose: false,
      // Lock the app after N milliseconds of inactivity
      lockAfter: 5000,
      // Obscure the app when the app is backgrounded (most apps will want
      // to set this to false unless sensitive financial data is being displayed)
      hideScreenOnBackground: true
    })
  }
}
```

`enableBiometrics` defaults Biometrics to be turned on automatically when a user is logged in.

`lockOnClose` requires the user to reauthenticate (with login or biometrics) in order to access their session token after completely closing the app on their device.

`lockAfter` specifies how long the app can be idle (in background) before the user is locked out of the vault and required to re-authenticate. Set to `0` to allow long lived sessions, appropriate for social network and non-financial apps.

`hideScreenOnBackground` obscures the app when backgrounded to avoid leaking sensitive information, such as financial statements or balances. Most non-financial apps should set this to `false`.

#### `onVaultLocked()`

`onVaultLocked()` is a callback that will be called whenever the Vault has become locked (requiring the user to reauthenticate by logging in or using Biometrics). In this callback you should clear the token from memory, and send the user back to your login page, or perform any other custom logic you'd like to.

```typescript
export class User extends IonicIdentityVaultUser {
  // ...

  onVaultLocked() {
    // Clear our in-memory token
    this.token = null;

    const nav = this.app.getRootNavs()[0];
    if (nav) {
      nav.setRoot(LoginPage);
    }

  }

}
```

#### `onSessionRestored()`

`onSessionRestored()` is a callback that will be called whenever the user has an unlocked token stored in the vault. This will be called when a user launches the app after some period of inactivity and their session is still active and the vault is not locked. This inactivity period can be configured using `lockAfter`.

Here you should also set the token in memory, and possibly also check to make sure that the token is still valid with your server.

```typescript
export class User extends IonicIdentityVaultUser {
  // ...

  onSessionRestored(token: string) {
    this.token = token;
  }

}
```

#### `saveSession(username/email, token)`

`saveSession()` can be called to save and secure your token whenever you get a new one, such as in your `login` or `signup` functions. This method is made available by extending `IonicIdentityVaultUser`.

```typescript
export class User extends IonicIdentityVaultUser {
  // ...

  login(email, password){
    // Make a request to your server that returns a token
    const fakeToken = 'token';
    this.saveSession(email, fakeToken);
  }

}
```

#### `getVault()`

`getVault` returns the Vault object asynchronously that you can then interact with in future calls.

Please see the following vault functions for examples:

#### `vault.clear()`

`vault.clear()` removes any stored tokens from the Identity Vault, this should be called on logout for instance.

```typescript
export class User extends IonicIdentityVaultUser {
  // ...

  async logout() {
    // Send a request to your server that invalidates the users session / token.
    const vault = await this.getVault();
    vault.clear();
  }

}
```

#### `vault.lock()`

`vault.lock()` locks the user out of their current session until they reauthenticate by logging in or with biometrics. This is effectively a "soft" logout, as the session/token may still be active on the server but the only way for the user to unlock the vault and use the app again is by providing biometric authentication.

```typescript
export class User extends IonicIdentityVaultUser {
  // ...

  async lockout() {
    // Send a request to your server that invalidates the users session / token.
    const vault = await this.getVault();
    vault.lock();
  }

}
```

### Examples from `pages/settings/settings.ts` in Demo project

#### Injecting your User into Pages

Whenever you'd like to use your User Service on another page, you'll have to inject it into that page, making it available to other functions.

```typescript
import { User } from '../../services/user';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public user: User) {
    // this.user is now a thing!
  }

}
```

#### `ready()`

`ready()` is a function that returns when the User object and Identity Vault have loaded and are ready to access the native functionality of the device. It should be used before attempting to use functions within a constructor or `ionViewDidEnter()` for instance.

```typescript
export class SettingsPage {

  async ionViewDidEnter() {
    await this.user.ready();
    // Now we can call user functions!
  }

}
```

#### `getBiometricType()`

`getBiometricType()` returns the type of Biometrics that is available on your users physical device. This can be used to update the UI to show the type in a settings page, for instance.

```typescript
export class SettingsPage {
  _biometricType: string = null;

  async ionViewDidEnter() {
    await this.user.ready();
    this._biometricType = this.user.getBiometricType();
  }

  getBiometricType() {
    // An example function that turns the returned biometric type into something
    // that looks nice for your UI.
    if (!this._biometricType) { return null; }

    switch (this._biometricType.toLowerCase()) {
      case 'touchid': return 'TouchID';
      case 'faceid': return 'FaceID';
      case 'fingerprint': return 'Fingerprint';
    }

    return '';
  }

}
```

#### `isBiometricsEnabled()`

`isBiometricsEnabled()` returns a boolean for whether or not Biometrics is indeed turned on for your user.

```typescript
export class SettingsPage {
  enableBiometrics: boolean = false;

  async ionViewDidEnter() {
    await this.user.ready();
    this.enableBiometrics = this.user.isBiometricsEnabled();
  }

}
```

#### `setBiometricsEnabled(boolean)`

`setBiometricsEnabled()` allows you to change whether or not Biometrics is currently turned on for the user. In this example, we've attached `enableBiometrics` as the `ngModel` on a Toggle input:

```typescript
export class SettingsPage {
  enableBiometrics: boolean = false;

  async ionViewDidEnter() {
    await this.user.ready();
    this.enableBiometrics = this.user.isBiometricsEnabled();
  }

  onEnableBiometricsChange() {
    this.user.setBiometricsEnabled(enableBiometrics);
  }

}
```

### Mocking for Testing

The Cordova plugin provided can be mocked to enable testing and in-browser development.

We have provided an example mock in `~/path/to/enterprise-auth/demo/src/services/auth-mock.ts`, copy it to your project and then, in your `User` service, override `getPlugin()` to return the mock:

```typescript
import { IonicIdentityVaultUser } from 'ionic-enterprise-identity-vault';
import { IonicNativeAuthMock } from './auth-mock';

@Injectable()
class MockUser extends IonicIdentityVaultUser {
  // ...
  getPlugin() {
    return IonicNativeAuthMock;
  }
  // ...
}
```