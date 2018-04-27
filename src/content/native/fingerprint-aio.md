# FingerprintAIO 


Use simple fingerprint authentication on Android and iOS.
Requires Cordova plugin: cordova-plugin-fingerprint-aio. For more info about plugin, vist: https://github.com/NiklasMerz/cordova-plugin-fingerprint-aio


Repo: [https://github.com/NiklasMerz/cordova-plugin-fingerprint-aio](https://github.com/NiklasMerz/cordova-plugin-fingerprint-aio)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-fingerprint-aio
$ npm install --save @ionic-native/fingerprint-aio
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';

constructor(private faio: FingerprintAIO) { }

...

this.faio.show({
    clientId: 'Fingerprint-Demo',
    clientSecret: 'password', //Only necessary for Android
    disableBackup:true,  //Only for Android(optional)
    localizedFallbackTitle: 'Use Pin', //Only for iOS
    localizedReason: 'Please authenticate' //Only for iOS
})
.then((result: any) => console.log(result))
.catch((error: any) => console.log(error));

```



<p><br></p>

## Instance Members

### isAvailable

Check if fingerprint authentication is available

### show

Show authentication dialogue

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>FingerprintOptions</code></dt>
<dd>See FingerprintOptions table below</dd>
</dl>

<p><br></p>

## FingerprintOptions

<dl>
<dt><h4>clientId</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Key for platform keychain</dd><dt><h4>clientSecret</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Secret password. Only for android <span class="tag">optional</span></dd><dt><h4>disableBackup</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Disable 'use backup' option. Only for android (optional) <span class="tag">optional</span></dd><dt><h4>localizedFallbackTitle</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Title of fallback button. Only for iOS <span class="tag">optional</span></dd><dt><h4>localizedReason</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Description in authentication dialogue. Only for iOS <span class="tag">optional</span></dd>
</dl>

