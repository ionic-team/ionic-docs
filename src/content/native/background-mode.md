# BackgroundMode 


Cordova plugin to prevent the app from going to sleep while in background.
Requires Cordova plugin: cordova-plugin-background-mode. For more info about plugin, visit: https://github.com/katzer/cordova-plugin-background-mode

Repo: [https://github.com/katzer/cordova-plugin-background-mode](https://github.com/katzer/cordova-plugin-background-mode)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-background-mode
$ npm install --save @ionic-native/background-mode
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* AmazonFire OS
* Android
* Browser
* iOS
* Windows




### Usage


```typescript
import { BackgroundMode } from '@ionic-native/background-mode';

constructor(private backgroundMode: BackgroundMode) { }

...

this.backgroundMode.enable();
```




<p><br></p>

## Instance Members

### isScreenOff

The method works async instead of isActive() or isEnabled().

### configure

Modify the displayed information.
Available only for Android platform.

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>BackgroundModeConfiguration</code></dt>
<dd>See BackgroundModeConfiguration table below <span class="tag">optional</span></dd>
</dl>

### moveToBackground

Android allows to programmatically move from foreground to background.

### disableWebViewOptimizations

Enable GPS-tracking in background (Android).

### disable

Disable the background mode.
Once the background mode has been disabled, the app will be paused when in background.

### enable

Enable the background mode.
Once called, prevents the app from being paused while in background.

### excludeFromTaskList

Exclude the app from the recent task list. Works on Android 5.0+.

### isActive

Can be used to get the information if the background mode is active.

### isEnabled

Checks if background mode is enabled or not.

### moveToForeground

Android allows to programmatically move from background to foreground.

### on

Listen for events that the plugin fires. Available events are `enable`, `disable`, `activate`, `deactivate` and `failure`.

<dl>
<dt><h4>event</h4><strong>Type: </strong><code>string</code></dt>
<dd>Event name</dd>
</dl>

### overrideBackButton

Override the back button on Android to go to background instead of closing the app.

### setDefaults

Override the default title, ticker and text.
Available only for Android platform.

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>BackgroundModeConfiguration</code></dt>
<dd>See BackgroundModeConfiguration table below <span class="tag">optional</span></dd>
</dl>

### unlock

Turn screen on and show app even locked

### wakeUp

Turn screen on

<p><br></p>

## BackgroundModeConfiguration

<dl>
<dt><h4>bigText</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Big text <span class="tag">optional</span></dd><dt><h4>color</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Set the background color of the notification circle <span class="tag">optional</span></dd><dt><h4>hidden</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>When set to false makes the notifications visible on lock screen (Android 5.0+) <span class="tag">optional</span></dd><dt><h4>icon</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>This will look for `<icon name>.png` in platforms/android/res/drawable|mipmap <span class="tag">optional</span></dd><dt><h4>resume</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>By default the app will come to foreground when tapping on the notification. If false, plugin won't come to foreground when tapped. <span class="tag">optional</span></dd><dt><h4>silent</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>if true plugin will not display a notification. Default is false. <span class="tag">optional</span></dd><dt><h4>text</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Description of background task <span class="tag">optional</span></dd><dt><h4>ticker</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The text that scrolls itself on statusbar <span class="tag">optional</span></dd><dt><h4>title</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Title of the background task <span class="tag">optional</span></dd>
</dl>

