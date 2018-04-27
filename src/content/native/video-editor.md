# VideoEditor 

Edit videos using native device APIs


Repo: [https://github.com/jbavari/cordova-plugin-video-editor](https://github.com/jbavari/cordova-plugin-video-editor)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-video-editor
$ npm install --save @ionic-native/video-editor
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS
* Windows
* Windows Phone 8




### Usage


```typescript
import { VideoEditor } from '@ionic-native/video-editor';

constructor(private videoEditor: VideoEditor) { }

...

this.videoEditor.transcodeVideo({
  fileUri: '/path/to/input.mov',
  outputFileName: 'output.mp4',
  outputFileType: VideoEditor.OutputFileType.MPEG4
})
.then((fileUri: string) => console.log('video transcode success', fileUri))
.catch((error: any) => console.log('video transcode error', error));

```



<p><br></p>

## Instance Members

### OptimizeForNetworkUse



### OutputFileType



### createThumbnail

Create a JPEG thumbnail from a video

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>CreateThumbnailOptions</code></dt>
<dd>See CreateThumbnailOptions table below</dd>
</dl>

### getVideoInfo

Get info on a video (width, height, orientation, duration, size, & bitrate)

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>GetVideoInfoOptions</code></dt>
<dd>See GetVideoInfoOptions table below</dd>
</dl>

### transcodeVideo

Transcode a video

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>TranscodeOptions</code></dt>
<dd>See TranscodeOptions table below</dd>
</dl>

### trim

Trim a video

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>TrimOptions</code></dt>
<dd>See TrimOptions table below</dd>
</dl>

<p><br></p>

## CreateThumbnailOptions

<dl>
<dt><h4>atTime</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Location in the video to create the thumbnail (in seconds) <span class="tag">optional</span></dd><dt><h4>fileUri</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The path to the video on the device</dd><dt><h4>height</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Height of the thumbnail. <span class="tag">optional</span></dd><dt><h4>outputFileName</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The file name for the JPEG image</dd><dt><h4>quality</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Quality of the thumbnail (between 1 and 100). <span class="tag">optional</span></dd><dt><h4>width</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Width of the thumbnail. <span class="tag">optional</span></dd>
</dl>

## GetVideoInfoOptions

<dl>
<dt><h4>fileUri</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The path to the video on the device.</dd>
</dl>

## TranscodeOptions

<dl>
<dt><h4>audioBitrate</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Sample rate for the audio. iOS only. Defaults to 128 kilobits (128000). <span class="tag">optional</span></dd><dt><h4>audioChannels</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Number of audio channels. iOS only. Defaults to 2. <span class="tag">optional</span></dd><dt><h4>audioSampleRate</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Sample rate for the audio. iOS only. Defaults to 44100 <span class="tag">optional</span></dd><dt><h4>deleteInputFile</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Delete the original video. Android only. Defaults to false <span class="tag">optional</span></dd><dt><h4>fileUri</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The path to the video on the device.</dd><dt><h4>fps</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Frames per second of the result. Android only. Defaults to 24. <span class="tag">optional</span></dd><dt><h4>height</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Height of the result <span class="tag">optional</span></dd><dt><h4>maintainAspectRatio</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>iOS only. Defaults to true <span class="tag">optional</span></dd><dt><h4>optimizeForNetworkUse</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Should the video be processed with quailty or speed in mind. iOS only <span class="tag">optional</span></dd><dt><h4>outputFileName</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The file name for the transcoded video</dd><dt><h4>outputFileType</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Instructions on how to encode the video. Android is always mp4 <span class="tag">optional</span></dd><dt><h4>progress</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>Not supported in windows, progress on the transcode. info will be a number from 0 to 100 <span class="tag">optional</span></dd><dt><h4>saveToLibrary</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Save the new video the library. Not supported in windows. Defaults to true <span class="tag">optional</span></dd><dt><h4>videoBitrate</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Bitrate in bits. Defaults to 1 megabit (1000000). <span class="tag">optional</span></dd><dt><h4>width</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Width of the result <span class="tag">optional</span></dd>
</dl>

## TrimOptions

<dl>
<dt><h4>fileUri</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Path to input video.</dd><dt><h4>outputFileName</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Output file name</dd><dt><h4>progress</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>Progress on transcode. info will be a number from 0 to 100 <span class="tag">optional</span></dd><dt><h4>trimEnd</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Time to end trimming in seconds</dd><dt><h4>trimStart</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Time to start trimming in seconds</dd>
</dl>

## VideoInfo

<dl>
<dt><h4>bitrate</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Bitrate of the video in bits per second.</dd><dt><h4>duration</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Duration of the video in seconds.</dd><dt><h4>height</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Height of the video in pixels.</dd><dt><h4>orientation</h4><strong>Type: </strong><code>union</code></dt>
<dd>Orientation of the video. Will be either portrait or landscape.</dd><dt><h4>size</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Size of the video in bytes.</dd><dt><h4>width</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Width of the video in pixels.</dd>
</dl>

