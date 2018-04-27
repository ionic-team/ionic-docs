# MediaCapture 



Repo: [https://github.com/apache/cordova-plugin-media-capture](https://github.com/apache/cordova-plugin-media-capture)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-media-capture
$ npm install --save @ionic-native/media-capture
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
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';


constructor(private mediaCapture: MediaCapture) { }

...


let options: CaptureImageOptions = { limit: 3 }
this.mediaCapture.captureImage(options)
  .then(
    (data: MediaFile[]) => console.log(data),
    (err: CaptureError) => console.error(err)
  );

```



<p><br></p>

## Instance Members

### captureAudio

Start the audio recorder application and return information about captured audio clip files.

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>CaptureAudioOptions</code></dt>
<dd>See CaptureAudioOptions table below <span class="tag">optional</span></dd>
</dl>

### captureImage

Start the camera application and return information about captured image files.

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>CaptureImageOptions</code></dt>
<dd>See CaptureImageOptions table below <span class="tag">optional</span></dd>
</dl>

### captureVideo

Start the video recorder application and return information about captured video clip files.

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>CaptureVideoOptions</code></dt>
<dd>See CaptureVideoOptions table below <span class="tag">optional</span></dd>
</dl>

### onPendingCaptureError

is fired if the capture call is unsuccessful

### onPendingCaptureResult

is fired if the capture call is successful

### supportedAudioModes

The audio recording formats supported by the device.

### supportedImageModes

The recording image sizes and formats supported by the device.

### supportedVideoModes

The recording video resolutions and formats supported by the device.

<p><br></p>

## CaptureAudioOptions

<dl>
<dt><h4>duration</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Maximum duration of an audio sound clip, in seconds. This does not work on Android devices. <span class="tag">optional</span></dd><dt><h4>limit</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Maximum number of audio clips. Defaults to 1.
On iOS you can only record one file. <span class="tag">optional</span></dd>
</dl>

## CaptureError

<dl>
<dt><h4>code</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd>
</dl>

## CaptureImageOptions

<dl>
<dt><h4>limit</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Maximum number of images to capture. This limit is not supported on iOS, only one image will be taken per invocation. <span class="tag">optional</span></dd>
</dl>

## CaptureVideoOptions

<dl>
<dt><h4>duration</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Maximum duration per video clip. This will be ignored on BlackBerry. <span class="tag">optional</span></dd><dt><h4>limit</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Maximum number of video clips to record. This value is ignored on iOS, only one video clip can be taken per invocation. <span class="tag">optional</span></dd><dt><h4>quality</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Quality of the video. This parameter can only be used with Android. <span class="tag">optional</span></dd>
</dl>

## ConfigurationData

<dl>
<dt><h4>height</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The height of the image or video in pixels. The value is zero for sound clips.</dd><dt><h4>type</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The ASCII-encoded lowercase string representing the media type.</dd><dt><h4>width</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The width of the image or video in pixels. The value is zero for sound clips.</dd>
</dl>

## MediaFile

<dl>
<dt><h4>fullPath</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The full path of the file, including the name.</dd><dt><h4>lastModifiedDate</h4><strong>Type: </strong><code>reference</code></dt>
<dd>The date and time when the file was last modified.</dd><dt><h4>name</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The name of the file, without path information.</dd><dt><h4>size</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The size of the file, in bytes.</dd><dt><h4>type</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The file's mime type</dd>
</dl>

## MediaFileData

<dl>
<dt><h4>bitrate</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The average bitrate of the content. The value is zero for images.</dd><dt><h4>codecs</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The actual format of the audio and video content.</dd><dt><h4>duration</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The length of the video or sound clip in seconds. The value is zero for images.</dd><dt><h4>height</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The height of the image or video in pixels. The value is zero for audio clips.</dd><dt><h4>width</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The width of the image or video in pixels. The value is zero for audio clips.</dd>
</dl>

