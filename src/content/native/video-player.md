# VideoPlayer 


A Cordova plugin that simply allows you to immediately play a video in fullscreen mode.

Requires Cordova plugin: `com.moust.cordova.videoplayer`. For more info, please see the [VideoPlayer plugin docs](https://github.com/moust/cordova-plugin-videoplayer).


Repo: [https://github.com/moust/cordova-plugin-videoplayer](https://github.com/moust/cordova-plugin-videoplayer)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add https://github.com/moust/cordova-plugin-videoplayer.git
$ npm install --save @ionic-native/video-player
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android




### Usage


```typescript
import { VideoPlayer } from '@ionic-native/video-player';

constructor(private videoPlayer: VideoPlayer) { }

...

// Playing a video.
this.videoPlayer.play('file:///android_asset/www/movie.mp4').then(() => {
 console.log('video completed');
}).catch(err => {
 console.log(err);
});

```



<p><br></p>

## Instance Members

### close

Stops the video playback immediatly.

### play

Plays the video from the passed url.

<dl>
<dt><h4>fileUrl</h4><strong>Type: </strong><code>string</code></dt>
<dd>File url to the video.</dd><dt><h4>options</h4><strong>Type: </strong><code>VideoOptions</code></dt>
<dd>See VideoOptions table below <span class="tag">optional</span></dd>
</dl>

<p><br></p>

## VideoOptions

<dl>
<dt><h4>scalingMode</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>There are two options for the scaling mode. SCALE_TO_FIT which is default and SCALE_TO_FIT_WITH_CROPPING.
These strings are the only ones which can be passed as option. <span class="tag">optional</span></dd><dt><h4>volume</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Set the initial volume of the video playback, where 0.0 is 0% volume and 1.0 is 100%.
For example: for a volume of 30% set the value to 0.3. <span class="tag">optional</span></dd>
</dl>

