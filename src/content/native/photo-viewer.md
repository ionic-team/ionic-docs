# PhotoViewer 

This plugin can display your image in full screen with the ability to pan, zoom, and share the image.

Repo: [https://github.com/sarriaroman/photoviewer](https://github.com/sarriaroman/photoviewer)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add com-sarriaroman-photoviewer
$ npm install --save @ionic-native/photo-viewer
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { PhotoViewer } from '@ionic-native/photo-viewer';

constructor(private photoViewer: PhotoViewer) { }

...

this.photoViewer.show('https://mysite.com/path/to/image.jpg');

this.photoViewer.show('https://mysite.com/path/to/image.jpg', 'My image title', {share: false});
```




<p><br></p>

## Instance Members

### show

Shows an image in full screen

<dl>
<dt><h4>url</h4><strong>Type: </strong><code>string</code></dt>
<dd>URL or path to image</dd><dt><h4>title</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>options</h4><strong>Type: </strong><code>PhotoViewerOptions</code></dt>
<dd>See PhotoViewerOptions table below <span class="tag">optional</span></dd>
</dl>

<p><br></p>

## PhotoViewerOptions

<dl>
<dt><h4>share</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Set to false to disable the share button (Android only). Default: true <span class="tag">optional</span></dd>
</dl>

