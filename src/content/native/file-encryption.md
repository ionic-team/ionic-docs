# FileEncryption 


Simple file encryption for Cordova.


Repo: [https://github.com/disusered/cordova-safe](https://github.com/disusered/cordova-safe)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-safe
$ npm install --save @ionic-native/file-encryption
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { FileEncryption } from '@ionic-native/file-encryption';


constructor(private fileEncryption: FileEncryption) { }

...

this.fileEncryption.decrypt('assets/json/topSecret.json', 'secretKey');

this.fileEncryption.encrypt('assets/json/topSecret.json', 'secretKey');

```




<p><br></p>

## Instance Members

### decrypt

Decrypt a file

<dl>
<dt><h4>file</h4><strong>Type: </strong><code>string</code></dt>
<dd>A string representing a local URI</dd><dt><h4>key</h4><strong>Type: </strong><code>string</code></dt>
<dd>A key for the crypto operations</dd>
</dl>

### encrypt

Encrypt a file

<dl>
<dt><h4>file</h4><strong>Type: </strong><code>string</code></dt>
<dd>A string representing a local URI</dd><dt><h4>key</h4><strong>Type: </strong><code>string</code></dt>
<dd>A key for the crypto operations</dd>
</dl>

<p><br></p>

