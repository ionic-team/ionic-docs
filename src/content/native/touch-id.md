# TouchID 


Scan the fingerprint of a user with the TouchID sensor.

Requires Cordova plugin: `cordova-plugin-touch-id`. For more info, please see the [TouchID plugin docs](https://github.com/EddyVerbruggen/cordova-plugin-touch-id).


Repo: [https://github.com/EddyVerbruggen/cordova-plugin-touch-id](https://github.com/EddyVerbruggen/cordova-plugin-touch-id)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-touch-id
$ npm install --save @ionic-native/touch-id
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* iOS




### Usage


```typescript
import { TouchID } from '@ionic-native/touch-id';

constructor(private touchId: TouchID) { }

...

this.touchId.isAvailable()
  .then(
    res => console.log('TouchID is available!'),
    err => console.error('TouchID is not available', err)
  );

this.touchId.verifyFingerprint('Scan your fingerprint please')
  .then(
    res => console.log('Ok', res),
    err => console.error('Error', err)
  );
```

### Error Codes

The plugin will reject for various reasons. Your app will most likely need to respond to the cases differently.

Here is a list of some of the error codes:

 -  `-1` - Fingerprint scan failed more than 3 times
 -  `-2` or `-128` - User tapped the 'Cancel' button
 -  `-3` - User tapped the 'Enter Passcode' or 'Enter Password' button
 -  `-4` - The scan was cancelled by the system (Home button for example)
 -  `-6` - TouchID is not Available
 -  `-8` - TouchID is locked out from too many tries




<p><br></p>

## Instance Members

### didFingerprintDatabaseChange

Checks if the fingerprint database changed.

### isAvailable

Checks Whether TouchID is available or not.

### verifyFingerprint

Show TouchID dialog and wait for a fingerprint scan. If user taps 'Enter Password' button, brings up standard system passcode screen.

<dl>
<dt><h4>message</h4><strong>Type: </strong><code>string</code></dt>
<dd>The message to display</dd>
</dl>

### verifyFingerprintWithCustomPasswordFallback

Show TouchID dialog and wait for a fingerprint scan. If user taps 'Enter Password' button, rejects with code '-3' (see above).

<dl>
<dt><h4>message</h4><strong>Type: </strong><code>string</code></dt>
<dd>The message to display</dd>
</dl>

### verifyFingerprintWithCustomPasswordFallbackAndEnterPasswordLabel

Show TouchID dialog with custom 'Enter Password' message and wait for a fingerprint scan. If user taps 'Enter Password' button, rejects with code '-3' (see above).

<dl>
<dt><h4>message</h4><strong>Type: </strong><code>string</code></dt>
<dd>The message to display</dd><dt><h4>enterPasswordLabel</h4><strong>Type: </strong><code>string</code></dt>
<dd>Custom text for the 'Enter Password' button</dd>
</dl>

<p><br></p>

