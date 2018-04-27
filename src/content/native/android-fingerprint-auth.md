# AndroidFingerprintAuth 


This plugin will open a native dialog fragment prompting the user to authenticate using their fingerprint. If the device has a secure lockscreen (pattern, PIN, or password), the user may opt to authenticate using that method as a backup.

Repo: [https://github.com/mjwheatley/cordova-plugin-android-fingerprint-auth](https://github.com/mjwheatley/cordova-plugin-android-fingerprint-auth)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-android-fingerprint-auth
$ npm install --save @ionic-native/android-fingerprint-auth
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android




### Usage


```typescript
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth';

constructor(private androidFingerprintAuth: AndroidFingerprintAuth) { }

...


this.androidFingerprintAuth.isAvailable()
  .then((result)=> {
    if(result.isAvailable){
      // it is available

      this.androidFingerprintAuth.encrypt({ clientId: 'myAppName', username: 'myUsername', password: 'myPassword' })
        .then(result => {
           if (result.withFingerprint) {
               console.log('Successfully encrypted credentials.');
               console.log('Encrypted credentials: ' + result.token);
           } else if (result.withBackup) {
             console.log('Successfully authenticated with backup password!');
           } else console.log('Didn\'t authenticate!');
        })
        .catch(error => {
           if (error === this.androidFingerprintAuth.ERRORS.FINGERPRINT_CANCELLED) {
             console.log('Fingerprint authentication cancelled');
           } else console.error(error)
        });

    } else {
      // fingerprint auth isn't available
    }
  })
  .catch(error => console.error(error));
```



<p><br></p>

## Instance Members

### ERRORS



### decrypt

Opens a native dialog fragment to use the device hardware fingerprint scanner to authenticate against fingerprints registered for the device.

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>AFAAuthOptions</code></dt>
<dd>See AFAAuthOptions table below</dd>
</dl>

### delete

Delete the cipher used for encryption and decryption by username

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>AFADeleteOptions</code></dt>
<dd>See AFADeleteOptions table below</dd>
</dl>

### encrypt

Opens a native dialog fragment to use the device hardware fingerprint scanner to authenticate against fingerprints registered for the device.

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>AFAAuthOptions</code></dt>
<dd>See AFAAuthOptions table below</dd>
</dl>

### isAvailable

Check if service is available

<p><br></p>

## AFAAuthOptions

<dl>
<dt><h4>clientId</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Required
Used as the alias for your key in the Android Key Store.</dd><dt><h4>dialogHint</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Set the hint displayed by the fingerprint icon on the fingerprint authentication dialog. <span class="tag">optional</span></dd><dt><h4>dialogMessage</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Set the message of the fingerprint authentication dialog. <span class="tag">optional</span></dd><dt><h4>dialogTitle</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Set the title of the fingerprint authentication dialog. <span class="tag">optional</span></dd><dt><h4>disableBackup</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Set to true to remove the "USE BACKUP" button <span class="tag">optional</span></dd><dt><h4>locale</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Change the language. (en_US or es) <span class="tag">optional</span></dd><dt><h4>maxAttempts</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The device max is 5 attempts. Set this parameter if you want to allow fewer than 5 attempts. <span class="tag">optional</span></dd><dt><h4>password</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Used to create credential string for encrypted token <span class="tag">optional</span></dd><dt><h4>token</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Required for decrypt()
Encrypted user credentials to decrypt upon successful authentication. <span class="tag">optional</span></dd><dt><h4>userAuthRequired</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Require the user to authenticate with a fingerprint to authorize every use of the key.
New fingerprint enrollment will invalidate key and require backup authenticate to
re-enable the fingerprint authentication dialog. <span class="tag">optional</span></dd><dt><h4>username</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Used to create credential string for encrypted token and as alias to retrieve the cipher. <span class="tag">optional</span></dd>
</dl>

## AFAAvailableResponse

<dl>
<dt><h4>hasEnrolledFingerprints</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>isAvailable</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>isHardwareDetected</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd>
</dl>

## AFADecryptOptions

<dl>
<dt><h4>password</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>FingerprintAuth.CipherMode.DECRYPT
Decrypted password</dd><dt><h4>withBackup</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Authentication using backup credential activity</dd><dt><h4>withFingerprint</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Biometric authentication</dd>
</dl>

## AFADeleteOptions

<dl>
<dt><h4>clientId</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>username</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd>
</dl>

## AFAEncryptResponse

<dl>
<dt><h4>token</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>base64encoded string representation of user credentials</dd><dt><h4>withBackup</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Authentication using backup credential activity</dd><dt><h4>withFingerprint</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Biometric authentication</dd>
</dl>

