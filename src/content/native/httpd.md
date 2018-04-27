# Httpd 


Embedded httpd for Cordova apps. Light weight HTTP server.

Repo: [https://github.com/floatinghotpot/cordova-httpd](https://github.com/floatinghotpot/cordova-httpd)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-httpd
$ npm install --save @ionic-native/httpd
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS
* macOS




### Usage


```typescript
import { Httpd, HttpdOptions } from '@ionic-native/httpd';

constructor(private httpd: Httpd) { }

...


let options: HttpdOptions = {
     www_root: 'httpd_root', // relative path to app's www directory
     port: 80,
     localhost_only: false
 }

this.httpd.startServer(options).subscribe((data) => {
 console.log('Server is live');
});

```



<p><br></p>

## Instance Members

### getLocalPath

Get the local path of the running webserver

### getUrl

Gets the URL of the running server

### startServer

Starts a web server.

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>HttpdOptions</code></dt>
<dd>See HttpdOptions table below <span class="tag">optional</span></dd>
</dl>

<p><br></p>

## HttpdOptions

<dl>
<dt><h4>localhost_only</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Setting this option to false will allow remote access to your web server (over any IP).
Default is false. <span class="tag">optional</span></dd><dt><h4>port</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The port number to use.
Default is 8888 <span class="tag">optional</span></dd><dt><h4>www_root</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The public root directory for your web server. This path is relative to your app's www directory.
Default is current directory. <span class="tag">optional</span></dd>
</dl>

