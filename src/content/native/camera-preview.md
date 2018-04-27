# CameraPreview 


Showing camera preview in HTML

Requires Cordova plugin: `https://github.com/cordova-plugin-camera-preview/cordova-plugin-camera-preview.git`. For more info, please see the [Cordova Camera Preview docs](https://github.com/cordova-plugin-camera-preview/cordova-plugin-camera-preview).


Repo: [https://github.com/cordova-plugin-camera-preview/cordova-plugin-camera-preview](https://github.com/cordova-plugin-camera-preview/cordova-plugin-camera-preview)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-camera-preview
$ npm install --save @ionic-native/camera-preview
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview';

constructor(private cameraPreview: CameraPreview) { }

...

// camera options (Size and location). In the following example, the preview uses the rear camera and display the preview in the back of the webview
const cameraPreviewOpts: CameraPreviewOptions = {
  x: 0,
  y: 0,
  width: window.screen.width,
  height: window.screen.height,
  camera: 'rear',
  tapPhoto: true,
  previewDrag: true,
  toBack: true,
  alpha: 1
}

// start camera
this.cameraPreview.startCamera(cameraPreviewOpts).then(
  (res) => {
    console.log(res)
  },
  (err) => {
    console.log(err)
  });

// Set the handler to run every time we take a picture
this.cameraPreview.setOnPictureTakenHandler().subscribe((result) => {
  console.log(result);
  // do something with the result
});


// picture options
const pictureOpts: CameraPreviewPictureOptions = {
  width: 1280,
  height: 1280,
  quality: 85
}

// take a picture
this.cameraPreview.takePicture(this.pictureOpts).then((imageData) => {
  this.picture = 'data:image/jpeg;base64,' + imageData;
}, (err) => {
  console.log(err);
  this.picture = 'assets/img/test.jpg';
});


// Switch camera
this.cameraPreview.switchCamera();

// set color effect to negative
this.cameraPreview.setColorEffect('negative');

// Stop the camera preview
this.cameraPreview.stopCamera();

```




<p><br></p>

## Instance Members

### setExposureMode

Set exposure mode

<dl>
<dt><h4>lock</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd>
</dl>

### FOCUS_MODE



### FLASH_MODE



### EXPOSURE_MODE



### COLOR_EFFECT



### CAMERA_DIRECTION



### setPreviewSize

Set the preview Size

<dl>
<dt><h4>dimensions</h4><strong>Type: </strong><code>CameraPreviewDimensions</code></dt>
<dd>See CameraPreviewDimensions table below <span class="tag">optional</span></dd>
</dl>

### getExposureCompensation

Get exposure compensation (Android)

### setZoom

Set the zoom (Android)

<dl>
<dt><h4>zoom</h4><strong>Type: </strong><code>number</code></dt>
<dd>null <span class="tag">optional</span></dd>
</dl>

### getMaxZoom

Get the maximum zoom (Android)

### getExposureMode

Get exposure mode

### getExposureModes

Get exposure modes

### getFlashMode

Get the current flash mode

### getFocusMode

Get focus mode

### getExposureCompensationRange

Get exposure compensation range (Android)

### switchCamera

Switch from the rear camera and front camera, if available.

### getSupportedFocusModes

Get supported focus modes

### getSupportedFlashModes

Get supported flash modes

### takePicture

Take the picture (base64)

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>CameraPreviewPictureOptions</code></dt>
<dd>See CameraPreviewPictureOptions table below <span class="tag">optional</span></dd>
</dl>

### setExposureCompensation

Set exposure compensation (Android)

<dl>
<dt><h4>exposureCompensation</h4><strong>Type: </strong><code>number</code></dt>
<dd>null <span class="tag">optional</span></dd>
</dl>

### getZoom

Get current zoom (Android)

### hide

Hide the camera preview box.

### onBackButton

Add a listener for the back event for the preview

### setColorEffect

Set camera color effect.

<dl>
<dt><h4>effect</h4><strong>Type: </strong><code>string</code></dt>
<dd>name : 'none' (iOS & Android), 'aqua' (Android), 'blackboard' (Android), 'mono' (iOS & Android), 'negative' (iOS & Android), 'posterize' (iOS & Android), 'sepia' (iOS & Android), 'solarize' (Android) or 'whiteboard' (Android)</dd>
</dl>

### getSupportedPictureSizes

Get supported picture sizes

### setFlashMode

Set the flash mode

<dl>
<dt><h4>flashMode</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd>
</dl>

### setFocusMode

Set the focus mode

<dl>
<dt><h4>focusMode</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd>
</dl>

### show

Show the camera preview box.

### startCamera

Starts the camera preview instance.

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>CameraPreviewOptions</code></dt>
<dd>See CameraPreviewOptions table below</dd>
</dl>

### stopCamera

Stops the camera preview instance. (iOS & Android)

### tapToFocus

Set specific focus point. Note, this assumes the camera is full-screen.

<dl>
<dt><h4>xPoint</h4><strong>Type: </strong><code>number</code></dt>
<dd>undefined</dd><dt><h4>yPoint</h4><strong>Type: </strong><code>number</code></dt>
<dd>undefined</dd>
</dl>

<p><br></p>

## CameraPreviewDimensions

<dl>
<dt><h4>height</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The height of the camera preview, default to window.screen.height <span class="tag">optional</span></dd><dt><h4>width</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The width of the camera preview, default to window.screen.width <span class="tag">optional</span></dd>
</dl>

## CameraPreviewOptions

<dl>
<dt><h4>alpha</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Alpha channel of the preview box, float, [0,1], default 1 <span class="tag">optional</span></dd><dt><h4>camera</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Choose the camera to use 'front' or 'rear', default 'front' <span class="tag">optional</span></dd><dt><h4>disableExifHeaderStripping</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>On Android disable automatic rotation of the image and stripping of Exit header. default false <span class="tag">optional</span></dd><dt><h4>height</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The height in pixels, default window.screen.height <span class="tag">optional</span></dd><dt><h4>previewDrag</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Preview box drag across the screen, default 'false' <span class="tag">optional</span></dd><dt><h4>tapPhoto</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Tap to take a photo, default true (picture quality by default : 85) <span class="tag">optional</span></dd><dt><h4>tapToFocus</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Tap to set specific focus point. Note, this assumes the camera is full-screen. default false <span class="tag">optional</span></dd><dt><h4>toBack</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Preview box to the back of the webview (true => back, false => front) , default false <span class="tag">optional</span></dd><dt><h4>width</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The width in pixels, default window.screen.width <span class="tag">optional</span></dd><dt><h4>x</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The left edge in pixels, default 0 <span class="tag">optional</span></dd><dt><h4>y</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The top edge in pixels, default 0 <span class="tag">optional</span></dd>
</dl>

## CameraPreviewPictureOptions

<dl>
<dt><h4>height</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The height in pixels, default 0 <span class="tag">optional</span></dd><dt><h4>quality</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The picture quality, 0 - 100, default 85 <span class="tag">optional</span></dd><dt><h4>width</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The width in pixels, default 0 <span class="tag">optional</span></dd>
</dl>

