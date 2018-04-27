# FTP 


This cordova plugin is created to use ftp (client) in web/js.


Repo: [https://github.com/xfally/cordova-plugin-ftp](https://github.com/xfally/cordova-plugin-ftp)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-ftp
$ npm install --save @ionic-native/ftp
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { FTP } from '@ionic-native/ftp';


constructor(private fTP: FTP) { }

...


this.fTP.connect('ftp_host', 'ftp_user', 'ftp_password')
  .then((res: any) => console.log('Login successful', res))
  .catch((error: any) => console.error(error));

```




<p><br></p>

## Instance Members

### cancel

Cancel all requests. Always success.

### connect

Connect to one ftp server.

<dl>
<dt><h4>hostname</h4><strong>Type: </strong><code>string</code></dt>
<dd>The ftp server url. Like ip without protocol prefix, e.g. "192.168.1.1".</dd><dt><h4>username</h4><strong>Type: </strong><code>string</code></dt>
<dd>The ftp login username. If it and `password` are all blank/undefined, the default username "anonymous" is used.</dd><dt><h4>password</h4><strong>Type: </strong><code>string</code></dt>
<dd>The ftp login password. If it and `username` are all blank/undefined, the default password "anonymous@" is used.</dd>
</dl>

### disconnect

Disconnect from ftp server.

### download

Download one remote file on the ftp server to local path.

<dl>
<dt><h4>localFile</h4><strong>Type: </strong><code>string</code></dt>
<dd>The file (with full path) you want to upload. e.g. "/local/path/to/localFile".</dd><dt><h4>remoteFile</h4><strong>Type: </strong><code>string</code></dt>
<dd>The file (with full path) you want to located on the ftp server. e.g. "/adf/123/newDir/remoteFile".</dd>
</dl>

### ls

List files (with info of `name`, `type`, `link`, `size`, `modifiedDate`) under one directory on the ftp server.
You can get one file's name using `fileList[x].name` (`x` is the location in array).

<dl>
<dt><h4>path</h4><strong>Type: </strong><code>string</code></dt>
<dd>The path on the ftp server. e.g. "/adf/123/".</dd>
</dl>

### mkdir

Create one directory on the ftp server.

<dl>
<dt><h4>path</h4><strong>Type: </strong><code>string</code></dt>
<dd>The path on the ftp server. e.g. "/adf/123/".</dd>
</dl>

### rm

Delete one file on the ftp server.

<dl>
<dt><h4>file</h4><strong>Type: </strong><code>string</code></dt>
<dd>The file (with full path) you want to delete. e.g. "/adf/123/newDir/myFile".</dd>
</dl>

### rmdir

Delete one directory on the ftp server.

<dl>
<dt><h4>path</h4><strong>Type: </strong><code>string</code></dt>
<dd>The file (with full path) you want to delete. e.g. "/adf/123/newDir/myFile".</dd>
</dl>

### upload

Upload one local file to the ftp server.

<dl>
<dt><h4>localFile</h4><strong>Type: </strong><code>string</code></dt>
<dd>The file (with full path) you want to upload. e.g. "/local/path/to/localFile".</dd><dt><h4>remoteFile</h4><strong>Type: </strong><code>string</code></dt>
<dd>The file (with full path) you want to located on the ftp server. e.g. "/adf/123/newDir/remoteFile".</dd>
</dl>

<p><br></p>

