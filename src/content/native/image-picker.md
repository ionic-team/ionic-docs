# ImagePicker 


Cordova Plugin For Multiple Image Selection

Requires Cordova plugin: `cordova-plugin-image-picker`.
For more info, please see the https://github.com/wymsee/cordova-imagePicker


Repo: [https://github.com/Telerik-Verified-Plugins/ImagePicker](https://github.com/Telerik-Verified-Plugins/ImagePicker)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">ionic cordova plugin add cordova-plugin-telerik-imagepicker --variable PHOTO_LIBRARY_USAGE_DESCRIPTION="your usage message"
$ npm install --save @ionic-native/image-picker
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { ImagePicker } from '@ionic-native/image-picker';


constructor(private imagePicker: ImagePicker) { }

...

this.imagePicker.getPictures(options).then((results) => {
  for (var i = 0; i < results.length; i++) {
      console.log('Image URI: ' + results[i]);
  }
}, (err) => { });

```



<p><br></p>

## Instance Members

### getPictures

Pick pictures from the library.

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>ImagePickerOptions</code></dt>
<dd>See ImagePickerOptions table below</dd>
</dl>

### hasReadPermission

Check if we have permission to read images

### requestReadPermission

Request permission to read images

<p><br></p>

## ImagePickerOptions

<dl>
<dt><h4>height</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Max height to allow images to be <span class="tag">optional</span></dd><dt><h4>maximumImagesCount</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>max images to be selected, defaults to 15. If this is set to 1, upon selection of a single image, the plugin will return it. (Android only) <span class="tag">optional</span></dd><dt><h4>outputType</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Output type, defaults to 0  (FILE_URI). <span class="tag">optional</span></dd><dt><h4>quality</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Quality of images, defaults to 100 <span class="tag">optional</span></dd><dt><h4>width</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Max width to allow images to be <span class="tag">optional</span></dd>
</dl>

