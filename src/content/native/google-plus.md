# GooglePlus 



Repo: [https://github.com/EddyVerbruggen/cordova-plugin-googleplus](https://github.com/EddyVerbruggen/cordova-plugin-googleplus)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">ionic cordova plugin add cordova-plugin-googleplus --variable REVERSED_CLIENT_ID=myreversedclientid
$ npm install --save @ionic-native/google-plus
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { GooglePlus } from '@ionic-native/google-plus';

constructor(private googlePlus: GooglePlus) { }

...

this.googlePlus.login({})
  .then(res => console.log(res))
  .catch(err => console.error(err));

```




<p><br></p>

## Instance Members

### disconnect

This will clear the OAuth2 token, forget which account was used to login, and disconnect that account from the app. This will require the user to allow the app access again next time they sign in. Be aware that this effect is not always instantaneous. It can take time to completely disconnect.

### getSigningCertificateFingerprint

This will retrieve the Android signing certificate fingerprint which is required in the Google Developer Console.

### login

The login function walks the user through the Google Auth process.

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>any</code></dt>
<dd>undefined <span class="tag">optional</span></dd>
</dl>

### logout

This will clear the OAuth2 token.

### trySilentLogin

You can call trySilentLogin to check if they're already signed in to the app and sign them in silently if they are.

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>any</code></dt>
<dd>undefined <span class="tag">optional</span></dd>
</dl>

<p><br></p>

