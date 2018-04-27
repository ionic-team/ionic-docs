# KeychainTouchId 


A cordova plugin adding the iOS TouchID / Android fingerprint to your
app and allowing you to store a password securely in the device keychain.


Repo: [https://github.com/sjhoeksma/cordova-plugin-keychain-touch-id](https://github.com/sjhoeksma/cordova-plugin-keychain-touch-id)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-keychain-touch-id
$ npm install --save @ionic-native/keychain-touch-id
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { KeychainTouchId } from '@ionic-native/keychain-touch-id';


constructor(private keychainTouchId: KeychainTouchId) { }

...


this.keychainTouchId.isAvailable()
  .then((res: any) => console.log(res))
  .catch((error: any) => console.error(error));

```




<p><br></p>

## Instance Members

### delete

Deletes the password stored under given key from the keychain.

<dl>
<dt><h4>key</h4><strong>Type: </strong><code>string</code></dt>
<dd>the key you want to delete from keychain</dd>
</dl>

### has

Checks if there is a password stored within the keychain for the given key.

<dl>
<dt><h4>key</h4><strong>Type: </strong><code>string</code></dt>
<dd>the key you want to check from keychain</dd>
</dl>

### isAvailable

Check if Touch ID / Fingerprint is supported by the device

### save

Encrypts and Saves a password under the key in the device keychain, which can be retrieved after
successful authentication using fingerprint

<dl>
<dt><h4>key</h4><strong>Type: </strong><code>string</code></dt>
<dd>the key you want to store</dd><dt><h4>password</h4><strong>Type: </strong><code>string</code></dt>
<dd>the password you want to encrypt and store</dd>
</dl>

### setLocale

Sets the language of the fingerprint dialog

<dl>
<dt><h4>locale</h4><strong>Type: </strong><code>string</code></dt>
<dd>locale subtag from [this list](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry).
</dd>
</dl>

### verify

Opens the fingerprint dialog, for the given key, showing an additional message. Promise will resolve
with the password stored in keychain or will resolve an error code, where -1 indicated not available.

<dl>
<dt><h4>key</h4><strong>Type: </strong><code>string</code></dt>
<dd>the key you want to retrieve from keychain</dd><dt><h4>message</h4><strong>Type: </strong><code>string</code></dt>
<dd>a message to the user</dd>
</dl>

<p><br></p>

