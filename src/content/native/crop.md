# Crop 

Crops images

Repo: [https://github.com/jeduan/cordova-plugin-crop](https://github.com/jeduan/cordova-plugin-crop)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-crop
$ npm install --save @ionic-native/crop
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { Crop } from '@ionic-native/crop';

constructor(private crop: Crop) { }

...

this.crop.crop('path/to/image.jpg', {quality: 75})
  .then(
    newImage => console.log('new image path is: ' + newImage),
    error => console.error('Error cropping image', error)
  );
```



<p><br></p>

## Instance Members

### crop

Crops an image

<dl>
<dt><h4>pathToImage</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd><dt><h4>options</h4><strong>Type: </strong><code>CropOptions</code></dt>
<dd>See CropOptions table below <span class="tag">optional</span></dd>
</dl>

<p><br></p>

## CropOptions

<dl>
<dt><h4>quality</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>targetHeight</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>targetWidth</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd>
</dl>

