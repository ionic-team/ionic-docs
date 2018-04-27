# Zip 


A Cordova plugin to unzip files in Android and iOS.


Repo: [https://github.com/MobileChromeApps/cordova-plugin-zip](https://github.com/MobileChromeApps/cordova-plugin-zip)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-zip
$ npm install --save @ionic-native/zip
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { Zip } from '@ionic-native/zip';

constructor(private zip: Zip) { }

...

this.zip.unzip('path/to/source.zip', 'path/to/dest', (progress) => console.log('Unzipping, ' + Math.round((progress.loaded / progress.total) * 100) + '%'))
 .then((result) => {
   if(result === 0) console.log('SUCCESS');
   if(result === -1) console.log('FAILED');
 });

```




<p><br></p>

## Instance Members

### unzip

Extracts files from a ZIP archive

<dl>
<dt><h4>sourceZip</h4><strong>Type: </strong><code>string</code></dt>
<dd>Source ZIP file</dd><dt><h4>destUrl</h4><strong>Type: </strong><code>string</code></dt>
<dd>Destination folder</dd><dt><h4>onProgress</h4><strong>Type: </strong><code>Function</code></dt>
<dd>See Function table below <span class="tag">optional</span></dd>
</dl>

<p><br></p>

