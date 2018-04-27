# ImageResizer 


Cordova Plugin For Image Resize


Repo: [https://github.com/JoschkaSchulz/cordova-plugin-image-resizer](https://github.com/JoschkaSchulz/cordova-plugin-image-resizer)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add info.protonet.imageresizer
$ npm install --save @ionic-native/image-resizer
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS
* Windows




### Usage


```typescript
import { ImageResizer, ImageResizerOptions } from '@ionic-native/image-resizer';

constructor(private imageResizer: ImageResizer) { }

...

let options = {
 uri: uri,
 folderName: 'Protonet',
 quality: 90,
 width: 1280,
 height: 1280
} as ImageResizerOptions;

this.imageResizer
  .resize(options)
  .then((filePath: string) => console.log('FilePath', filePath))
  .catch(e => console.log(e));

```



<p><br></p>

## Instance Members

### resize

undefined

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>ImageResizerOptions</code></dt>
<dd>See ImageResizerOptions table below</dd>
</dl>

<p><br></p>

## ImageResizerOptions

<dl>
<dt><h4>base64</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Whether or not to return a base64 encoded image string instead of the path to the resized image.
iOS only <span class="tag">optional</span></dd><dt><h4>fileName</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>A custom name for the file. Default name is a timestamp. You have to set this value on iOS <span class="tag">optional</span></dd><dt><h4>folderName</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The name of the folder the image should be put
(Android only) <span class="tag">optional</span></dd><dt><h4>height</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The height of the new image</dd><dt><h4>quality</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Quality given as Number for the quality of the new image
(Android and iOS only) <span class="tag">optional</span></dd><dt><h4>uri</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The URI for the image on the device to get scaled</dd><dt><h4>width</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The width of the new image</dd>
</dl>

