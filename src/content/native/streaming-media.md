# StreamingMedia 


This plugin allows you to stream audio and video in a fullscreen, native player on iOS and Android.


Repo: [https://github.com/nchutchind/cordova-plugin-streaming-media](https://github.com/nchutchind/cordova-plugin-streaming-media)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-streaming-media
$ npm install --save @ionic-native/streaming-media
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Amazon Fire OS
* Android
* iOS




### Usage


```typescript
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';

constructor(private streamingMedia: StreamingMedia) { }

let options: StreamingVideoOptions = {
  successCallback: () => { console.log('Video played') },
  errorCallback: (e) => { console.log('Error streaming') },
  orientation: 'landscape'
}

this.streamingMedia.playVideo('https://path/to/video/stream', options);

```



<p><br></p>

## Instance Members

### pauseAudio

Pauses streaming audio

### playAudio

Streams an audio

<dl>
<dt><h4>audioUrl</h4><strong>Type: </strong><code>string</code></dt>
<dd>The URL of the audio stream</dd><dt><h4>options</h4><strong>Type: </strong><code>StreamingAudioOptions</code></dt>
<dd>See StreamingAudioOptions table below <span class="tag">optional</span></dd>
</dl>

### playVideo

Streams a video

<dl>
<dt><h4>videoUrl</h4><strong>Type: </strong><code>string</code></dt>
<dd>The URL of the video</dd><dt><h4>options</h4><strong>Type: </strong><code>StreamingVideoOptions</code></dt>
<dd>See StreamingVideoOptions table below <span class="tag">optional</span></dd>
</dl>

### resumeAudio

Resumes streaming audio

### stopAudio

Stops streaming audio

<p><br></p>

## StreamingAudioOptions

<dl>
<dt><h4>bgColor</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>bgImage</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>bgImageScale</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>errorCallback</h4><strong>Type: </strong><code>reference</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>initFullscreen</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>successCallback</h4><strong>Type: </strong><code>reference</code></dt>
<dd>undefined <span class="tag">optional</span></dd>
</dl>

## StreamingVideoOptions

<dl>
<dt><h4>errorCallback</h4><strong>Type: </strong><code>reference</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>orientation</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>successCallback</h4><strong>Type: </strong><code>reference</code></dt>
<dd>undefined <span class="tag">optional</span></dd>
</dl>

