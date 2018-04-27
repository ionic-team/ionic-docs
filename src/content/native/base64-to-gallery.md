# Base64ToGallery 

This plugin allows you to save base64 data as a png image into the device

Repo: [https://github.com/Nexxa/cordova-base64-to-gallery](https://github.com/Nexxa/cordova-base64-to-gallery)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-base64-to-gallery
$ npm install --save @ionic-native/base64-to-gallery
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS
* Windows Phone 8




### Usage


```typescript
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';

constructor(private base64ToGallery: Base64ToGallery) { }


...


this.base64ToGallery.base64ToGallery(base64Data, { prefix: '_img' }).then(
  res => console.log('Saved image to gallery ', res),
  err => console.log('Error saving image to gallery ', err)
);
```



<p><br></p>

## Instance Members

### base64ToGallery

Converts a base64 string to an image file in the device gallery

<dl>
<dt><h4>data</h4><strong>Type: </strong><code>string</code></dt>
<dd>The actual base64 string that you want to save</dd><dt><h4>options</h4><strong>Type: </strong><code>Base64ToGalleryOptions</code></dt>
<dd>See Base64ToGalleryOptions table below <span class="tag">optional</span></dd>
</dl>

<p><br></p>

## Base64ToGalleryOptions

<dl>
<dt><h4>mediaScanner</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>On Android runs Media Scanner after file creation.
On iOS if true the file will be added to camera roll, otherwise will be saved to a library folder.</dd><dt><h4>prefix</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Saved file name prefix</dd>
</dl>

