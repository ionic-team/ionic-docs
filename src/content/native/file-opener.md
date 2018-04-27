# FileOpener 


This plugin will open a file on your device file system with its default application.


Repo: [https://github.com/pwlin/cordova-plugin-file-opener2](https://github.com/pwlin/cordova-plugin-file-opener2)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-file-opener2
$ npm install --save @ionic-native/file-opener
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS
* Windows
* Windows Phone 8




### Usage


```typescript
import { FileOpener } from '@ionic-native/file-opener';

constructor(private fileOpener: FileOpener) { }

...

this.fileOpener.open('path/to/file.pdf', 'application/pdf')
  .then(() => console.log('File is opened'))
  .catch(e => console.log('Error opening file', e));

```




<p><br></p>

## Instance Members

### appIsInstalled

Check if an app is already installed

<dl>
<dt><h4>packageId</h4><strong>Type: </strong><code>string</code></dt>
<dd>Package ID</dd>
</dl>

### open

Open an file

<dl>
<dt><h4>filePath</h4><strong>Type: </strong><code>string</code></dt>
<dd>File Path</dd><dt><h4>fileMIMEType</h4><strong>Type: </strong><code>string</code></dt>
<dd>File MIME Type</dd>
</dl>

### uninstall

Uninstalls a package

<dl>
<dt><h4>packageId</h4><strong>Type: </strong><code>string</code></dt>
<dd>Package ID</dd>
</dl>

<p><br></p>

