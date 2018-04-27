# MusicControls 


Music controls for Cordova applications.
Display a 'media' notification with play/pause, previous, next buttons, allowing the user to control the play.
Handle also headset event (plug, unplug, headset button).


Repo: [https://github.com/homerours/cordova-music-controls-plugin](https://github.com/homerours/cordova-music-controls-plugin)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-music-controls
$ npm install --save @ionic-native/music-controls
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS
* Windows




### Usage


```typescript
import { MusicControls } from '@ionic-native/music-controls';

constructor(private musicControls: MusicControls) { }

...

this.musicControls.create({
  track       : 'Time is Running Out',        // optional, default : ''
  artist      : 'Muse',                       // optional, default : ''
  cover       : 'albums/absolution.jpg',      // optional, default : nothing
  // cover can be a local path (use fullpath 'file:///storage/emulated/...', or only 'my_image.jpg' if my_image.jpg is in the www folder of your app)
  //           or a remote url ('http://...', 'https://...', 'ftp://...')
  isPlaying   : true,                         // optional, default : true
  dismissable : true,                         // optional, default : false

  // hide previous/next/close buttons:
  hasPrev   : false,      // show previous button, optional, default: true
  hasNext   : false,      // show next button, optional, default: true
  hasClose  : true,       // show close button, optional, default: false

// iOS only, optional
  album       : 'Absolution',     // optional, default: ''
  duration : 60, // optional, default: 0
  elapsed : 10, // optional, default: 0
  hasSkipForward : true,  // show skip forward button, optional, default: false
  hasSkipBackward : true, // show skip backward button, optional, default: false
  skipForwardInterval: 15, // display number for skip forward, optional, default: 0
  skipBackwardInterval: 15, // display number for skip backward, optional, default: 0
  hasScrubbing: false, // enable scrubbing from control center and lockscreen progress bar, optional

  // Android only, optional
  // text displayed in the status bar when the notification (and the ticker) are updated, optional
  ticker    : 'Now playing "Time is Running Out"',
  // All icons default to their built-in android equivalents
  // The supplied drawable name, e.g. 'media_play', is the name of a drawable found under 'android/res/drawable*' folders
  playIcon: 'media_play',
  pauseIcon: 'media_pause',
  prevIcon: 'media_prev',
  nextIcon: 'media_next',
  closeIcon: 'media_close',
  notificationIcon: 'notification'
 });

 this.musicControls.subscribe().subscribe(action => {

   function events(action) {
     const message = JSON.parse(action).message;
     	switch(message) {
     		case 'music-controls-next':
     			// Do something
     			break;
     		case 'music-controls-previous':
     			// Do something
     			break;
     		case 'music-controls-pause':
     			// Do something
     			break;
     		case 'music-controls-play':
     			// Do something
     			break;
     		case 'music-controls-destroy':
     			// Do something
     			break;

         // External controls (iOS only)
         case 'music-controls-toggle-play-pause' :
     			// Do something
     			break;
         case 'music-controls-seek-to':
           const seekToInSeconds = JSON.parse(action).position;
           this.musicControls.updateElapsed({
             elapsed: seekToInSeconds,
             isPlaying: true
           });
           // Do something
           break;
         case 'music-controls-skip-forward':
           // Do something
           break;
         case 'music-controls-skip-backward':
           // Do something
           break;

     		// Headset events (Android only)
     		// All media button events are listed below
     		case 'music-controls-media-button' :
     			// Do something
     			break;
     		case 'music-controls-headset-unplugged':
     			// Do something
     			break;
     		case 'music-controls-headset-plugged':
     			// Do something
     			break;
     		default:
     			break;
     	}
     }

 this.musicControls.listen(); // activates the observable above

 this.musicControls.updateIsPlaying(true);


```



<p><br></p>

## Instance Members

### create

Create the media controls

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>MusicControlsOptions</code></dt>
<dd>See MusicControlsOptions table below</dd>
</dl>

### destroy

Destroy the media controller

### listen

Start listening for events, this enables the Observable from the subscribe method

### subscribe

Subscribe to the events of the media controller

### updateDismissable

Toggle dismissable:

<dl>
<dt><h4>dismissable</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>
</dd>
</dl>

### updateElapsed

Update elapsed time, optionally toggle play/pause:

<dl>
<dt><h4>args</h4></dt>
<dd>
</dd>
</dl>

### updateIsPlaying

Toggle play/pause:

<dl>
<dt><h4>isPlaying</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>
</dd>
</dl>

<p><br></p>

## MusicControlsOptions

<dl>
<dt><h4>album</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>artist</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>closeIcon</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>cover</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>dismissable</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>duration</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>elapsed</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>hasClose</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>hasNext</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>hasPrev</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>hasScrubbing</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>hasSkipBackward</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>hasSkipForward</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>isPlaying</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>nextIcon</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>notificationIcon</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>pauseIcon</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>playIcon</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>prevIcon</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>skipBackwardInterval</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>skipForwardInterval</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>ticker</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>track</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd>
</dl>

