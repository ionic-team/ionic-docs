# Camera 


Take a photo or capture video.

Requires the Cordova plugin: `cordova-plugin-camera`. For more info, please see the [Cordova Camera Plugin Docs](https://github.com/apache/cordova-plugin-camera).


Repo: [https://github.com/apache/cordova-plugin-camera](https://github.com/apache/cordova-plugin-camera)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-camera
$ npm install --save @ionic-native/camera
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* Browser
* iOS
* Windows




### Usage


```typescript
import { Camera, CameraOptions } from '@ionic-native/camera';

constructor(private camera: Camera) { }

...


const options: CameraOptions = {
  quality: 100,
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
}

this.camera.getPicture(options).then((imageData) => {
 // imageData is either a base64 encoded string or a file URI
 // If it's base64:
 let base64Image = 'data:image/jpeg;base64,' + imageData;
}, (err) => {
 // Handle error
});
```



<p><br></p>

## Instance Members

### DestinationType

Constant for possible destination types

### Direction

Convenience constant

### EncodingType

Convenience constant

### MediaType

Convenience constant

### PictureSourceType

Convenience constant

### PopoverArrowDirection

Convenience constant

### cleanup

Remove intermediate image files that are kept in temporary storage after calling camera.getPicture.
Applies only when the value of Camera.sourceType equals Camera.PictureSourceType.CAMERA and the Camera.destinationType equals Camera.DestinationType.FILE_URI.

### getPicture

Take a picture or video, or load one from the library.

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>CameraOptions</code></dt>
<dd>See CameraOptions table below <span class="tag">optional</span></dd>
</dl>

<p><br></p>

## CameraOptions

<dl>
<dt><h4>allowEdit</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Allow simple editing of image before selection. <span class="tag">optional</span></dd><dt><h4>cameraDirection</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Choose the camera to use (front- or back-facing).
Defined in Camera.Direction. Default is BACK.
     BACK: 0
     FRONT: 1 <span class="tag">optional</span></dd><dt><h4>correctOrientation</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Rotate the image to correct for the orientation of the device during capture. <span class="tag">optional</span></dd><dt><h4>destinationType</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Choose the format of the return value.
Defined in Camera.DestinationType. Default is FILE_URI.
     DATA_URL : 0,   Return image as base64-encoded string,
     FILE_URI : 1,   Return image file URI,
     NATIVE_URI : 2  Return image native URI
         (e.g., assets-library:// on iOS or content:// on Android) <span class="tag">optional</span></dd><dt><h4>encodingType</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Choose the returned image file's encoding.
Defined in Camera.EncodingType. Default is JPEG
     JPEG : 0    Return JPEG encoded image
     PNG : 1     Return PNG encoded image <span class="tag">optional</span></dd><dt><h4>mediaType</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Set the type of media to select from. Only works when PictureSourceType
is PHOTOLIBRARY or SAVEDPHOTOALBUM. Defined in Camera.MediaType
     PICTURE: 0      allow selection of still pictures only. DEFAULT.
         Will return format specified via DestinationType
     VIDEO: 1        allow selection of video only, WILL ALWAYS RETURN FILE_URI
     ALLMEDIA : 2    allow selection from all media types <span class="tag">optional</span></dd><dt><h4>popoverOptions</h4><strong>Type: </strong><code>reference</code></dt>
<dd>iOS-only options that specify popover location in iPad. Defined in CameraPopoverOptions. <span class="tag">optional</span></dd><dt><h4>quality</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Picture quality in range 0-100. Default is 50 <span class="tag">optional</span></dd><dt><h4>saveToPhotoAlbum</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Save the image to the photo album on the device after capture. <span class="tag">optional</span></dd><dt><h4>sourceType</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Set the source of the picture.
Defined in Camera.PictureSourceType. Default is CAMERA.
     PHOTOLIBRARY : 0,
     CAMERA : 1,
     SAVEDPHOTOALBUM : 2 <span class="tag">optional</span></dd><dt><h4>targetHeight</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Height in pixels to scale image. Must be used with targetWidth.
Aspect ratio remains constant. <span class="tag">optional</span></dd><dt><h4>targetWidth</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Width in pixels to scale image. Must be used with targetHeight.
Aspect ratio remains constant. <span class="tag">optional</span></dd>
</dl>

## CameraPopoverOptions

<dl>
<dt><h4>arrowDir</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Direction the arrow on the popover should point. Defined in Camera.PopoverArrowDirection
Matches iOS UIPopoverArrowDirection constants.
     ARROW_UP : 1,
     ARROW_DOWN : 2,
     ARROW_LEFT : 4,
     ARROW_RIGHT : 8,
     ARROW_ANY : 15</dd><dt><h4>height</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>width</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>x</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>y</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd>
</dl>

