# NativeAudio 

Native Audio Playback

Repo: [https://github.com/floatinghotpot/cordova-plugin-nativeaudio](https://github.com/floatinghotpot/cordova-plugin-nativeaudio)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-nativeaudio
$ npm install --save @ionic-native/native-audio
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* Browser
* iOS




### Usage


```typescript
import { NativeAudio } from '@ionic-native/native-audio';

constructor(private nativeAudio: NativeAudio) { }

...

this.nativeAudio.preloadSimple('uniqueId1', 'path/to/file.mp3').then(onSuccess, onError);
this.nativeAudio.preloadComplex('uniqueId2', 'path/to/file2.mp3', 1, 1, 0).then(onSuccess, onError);

this.nativeAudio.play('uniqueId1').then(onSuccess, onError);

// can optionally pass a callback to be called when the file is done playing
this.nativeAudio.play('uniqueId1', () => console.log('uniqueId1 is done playing'));

this.nativeAudio.loop('uniqueId2').then(onSuccess, onError);

this.nativeAudio.setVolumeForComplexAsset('uniqueId2', 0.6).then(onSuccess,onError);

this.nativeAudio.stop('uniqueId1').then(onSuccess,onError);

this.nativeAudio.unload('uniqueId1').then(onSuccess,onError);

```




<p><br></p>

## Instance Members

### loop

Loops an audio asset infinitely, this only works for complex assets

<dl>
<dt><h4>id</h4><strong>Type: </strong><code>string</code></dt>
<dd>unique ID for the audio file</dd>
</dl>

### play

Plays an audio asset

<dl>
<dt><h4>id</h4><strong>Type: </strong><code>string</code></dt>
<dd>unique ID for the audio file</dd><dt><h4>completeCallback</h4><strong>Type: </strong><code>Function</code></dt>
<dd>See Function table below <span class="tag">optional</span></dd>
</dl>

### preloadComplex

Loads an audio file into memory. Optimized for background music / ambient sound. Uses highlevel native APIs with a larger footprint. (iOS: AVAudioPlayer). Can be stopped / looped and used with multiple voices. Can be faded in and out using the delay parameter.

<dl>
<dt><h4>id</h4><strong>Type: </strong><code>string</code></dt>
<dd>unique ID for the audio file</dd><dt><h4>assetPath</h4><strong>Type: </strong><code>string</code></dt>
<dd>the relative path or absolute URL (inluding http://) to the audio asset.</dd><dt><h4>volume</h4><strong>Type: </strong><code>number</code></dt>
<dd>the volume of the preloaded sound (0.1 to 1.0)</dd><dt><h4>voices</h4><strong>Type: </strong><code>number</code></dt>
<dd>the number of multichannel voices available</dd><dt><h4>delay</h4><strong>Type: </strong><code>number</code></dt>
<dd>undefined</dd>
</dl>

### preloadSimple

Loads an audio file into memory. Optimized for short clips / single shots (up to five seconds). Cannot be stopped / looped.

<dl>
<dt><h4>id</h4><strong>Type: </strong><code>string</code></dt>
<dd>unique ID for the audio file</dd><dt><h4>assetPath</h4><strong>Type: </strong><code>string</code></dt>
<dd>the relative path or absolute URL (inluding http://) to the audio asset.</dd>
</dl>

### setVolumeForComplexAsset

Changes the volume for preloaded complex assets.

<dl>
<dt><h4>id</h4><strong>Type: </strong><code>string</code></dt>
<dd>unique ID for the audio file</dd><dt><h4>volume</h4><strong>Type: </strong><code>number</code></dt>
<dd>the volume of the audio asset (0.1 to 1.0)</dd>
</dl>

### stop

Stops playing an audio

<dl>
<dt><h4>id</h4><strong>Type: </strong><code>string</code></dt>
<dd>unique ID for the audio file</dd>
</dl>

### unload

Unloads an audio file from memory

<dl>
<dt><h4>id</h4><strong>Type: </strong><code>string</code></dt>
<dd>unique ID for the audio file</dd>
</dl>

<p><br></p>

