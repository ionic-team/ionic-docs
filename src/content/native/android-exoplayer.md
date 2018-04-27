# AndroidExoplayer 


Cordova media player plugin using Google's ExoPlayer framework.

https://github.com/google/ExoPlayer


Repo: [https://github.com/frontyard/cordova-plugin-exoplayer](https://github.com/frontyard/cordova-plugin-exoplayer)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-exoplayer
$ npm install --save @ionic-native/android-exoplayer
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android




### Usage


```typescript
import { AndroidExoPlayer } from '@ionic-native/android-exoplayer';

constructor(private androidExoPlayer: AndroidExoPlayer) { }

...

this.androidExoPlayer.show({url: 'http://www.youtube.com/api/manifest/dash/id/bf5bb2419360daf1/source/youtube'});

```




<p><br></p>

## Instance Members

### seekTo

Jump to a particular position.

<dl>
<dt><h4>milliseconds</h4><strong>Type: </strong><code>number</code></dt>
<dd>Position in stream in milliseconds</dd>
</dl>

### close

Close and dispose of player, call before destroy.

### getState

Get the current player state.

### hideController

Hide the controller.

### playPause

Will pause if playing and play if paused

### seekBy

Jump to a particular time relative to the current position.

<dl>
<dt><h4>milliseconds</h4><strong>Type: </strong><code>number</code></dt>
<dd>Time in milliseconds</dd>
</dl>

### setController

Update the controller configuration.

<dl>
<dt><h4>controller</h4><strong>Type: </strong><code>AndroidExoPlayerControllerConfig</code></dt>
<dd>See AndroidExoPlayerControllerConfig table below</dd>
</dl>

### setStream

Switch stream without disposing of the player.

<dl>
<dt><h4>url</h4><strong>Type: </strong><code>string</code></dt>
<dd>The url of the new stream.</dd><dt><h4>controller</h4><strong>Type: </strong><code>AndroidExoPlayerControllerConfig</code></dt>
<dd>See AndroidExoPlayerControllerConfig table below</dd>
</dl>

### show

Show the player.

<dl>
<dt><h4>parameters</h4><strong>Type: </strong><code>AndroidExoPlayerParams</code></dt>
<dd>See AndroidExoPlayerParams table below</dd>
</dl>

### showController

Show the controller.

### stop

Stop playing.

<p><br></p>

## AndroidExoPlayerControllerConfig

<dl>
<dt><h4>controlIcons</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>Override the player control button icons. <span class="tag">optional</span></dd><dt><h4>hideDuration</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>If progress bar is visible Hide stream duration from it</dd><dt><h4>hidePosition</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>If progress bar is visible hide current position from it</dd><dt><h4>hideProgress</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Hide entire progress bar. <span class="tag">optional</span></dd><dt><h4>streamDescription</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>streamImage</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Image in the controller.</dd><dt><h4>streamTitle</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd>
</dl>

## AndroidExoPlayerParams

<dl>
<dt><h4>aspectRatio</h4><strong>Type: </strong><code>reference</code></dt>
<dd>Set the player aspect ratio. <span class="tag">optional</span></dd><dt><h4>audioOnly</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Only play audio in the backgroud, default is `false`.
If you pass in `audioOnly: true`, make sure to manually close the player on some event (like escape button) since the plugin won't be detecting keypresses when playing audio in the background. <span class="tag">optional</span></dd><dt><h4>autoPlay</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>When set to false stream will not automatically start. <span class="tag">optional</span></dd><dt><h4>connectTimeout</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>okhttp connect timeout in milliseconds (default is `0`) <span class="tag">optional</span></dd><dt><h4>controller</h4><strong>Type: </strong><code>reference</code></dt>
<dd>If this object is not present controller will not be visible. <span class="tag">optional</span></dd><dt><h4>forwardTime</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Amount of time in milliseconds to use when skipping forward, default is `1000`. <span class="tag">optional</span></dd><dt><h4>hideTimeout</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Hide controls after this many milliseconds, default is `5000`. <span class="tag">optional</span></dd><dt><h4>pingInterval</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>okhttp socket ping interval in milliseconds (default is `0` or disabled) <span class="tag">optional</span></dd><dt><h4>readTimeout</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>okhttp read timeout in milliseconds (default is `0`) <span class="tag">optional</span></dd><dt><h4>retryCount</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Number of times datasource will retry the stream before giving up (default is `3`) <span class="tag">optional</span></dd><dt><h4>rewindTime</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Amount of time in milliseconds to use when skipping backward, default is `1000`. <span class="tag">optional</span></dd><dt><h4>seekTo</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Start playback at this many milliseconds into video, default is `0`. <span class="tag">optional</span></dd><dt><h4>subtitleUrl</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Optional subtitle url to display over the video.
We currently support .srt and .vtt subtitle formats. Subtitles are not supported on all stream types, as ExoPlayer has requirement that both video and subtitle "must have the same number of periods, and must not have any dynamic windows", which means for simple mp4s it should work, but on more complex HLS/Dash setups it might not. <span class="tag">optional</span></dd><dt><h4>url</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Url of the video to play.</dd><dt><h4>userAgent</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Set the user agent. Default is `ExoPlayerPlugin` <span class="tag">optional</span></dd><dt><h4>writeTimeout</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>okhttp write timeout in milliseconds (default is `0`) <span class="tag">optional</span></dd>
</dl>

## AndroidExoplayerState

