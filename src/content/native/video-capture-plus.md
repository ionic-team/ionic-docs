# VideoCapturePlus 


This plugin offers some useful extras on top of the default Media Capture Plugin capabilities:
- HD recording.
- Starting with the front camera.
- A custom overlay (currently iOS only).


Repo: [https://github.com/danielsogl/cordova-plugin-video-capture-plus](https://github.com/danielsogl/cordova-plugin-video-capture-plus)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-video-capture-plus
$ npm install --save @ionic-native/video-capture-plus
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { VideoCapturePlus, VideoCapturePlusOptions, MediaFile } from '@ionic-native/video-capture-plus';


constructor(private videoCapturePlus: VideoCapturePlus) { }

...

const options: VideoCapturePlusOptions = {
   limit: 1,
   highquality: true,
   portraitOverlay: 'assets/img/camera/overlay/portrait.png',
   landscapeOverlay: 'assets/img/camera/overlay/landscape.png'
}

this.videoCapturePlus.captureVideo(options).then(mediafile: MediaFile[] => console.log(mediafile), error => console.log('Something went wrong'));

```



<p><br></p>

## Instance Members

### captureVideo

Starts recordings

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>VideoCapturePlusOptions</code></dt>
<dd>See VideoCapturePlusOptions table below <span class="tag">optional</span></dd>
</dl>

<p><br></p>

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

## VideoCapturePlusOptions

<dl>
<dt><h4>duration</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Max duration in seconds, default 0, which is 'forever' <span class="tag">optional</span></dd><dt><h4>frontcamera</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Set to true to override the default backfacing camera setting.
You'll want to sniff the useragent/device and pass the best overlay based on that.. assuming iphone here <span class="tag">optional</span></dd><dt><h4>highquality</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Set to true to override the default low quality setting <span class="tag">optional</span></dd><dt><h4>landscapeOverlay</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd> not passing an overlay means no image is shown for the landscape orientation <span class="tag">optional</span></dd><dt><h4>limit</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The number of videos to record, default 1 (on iOS always 1) <span class="tag">optional</span></dd><dt><h4>overlayText</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>iOS only <span class="tag">optional</span></dd><dt><h4>portraitOverlay</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>put the png overlay in your assets folder <span class="tag">optional</span></dd>
</dl>

