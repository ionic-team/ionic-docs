# AndroidFullScreen 


This plugin enables developers to offer users a true full screen experience in their Cordova and PhoneGap apps for Android.
Using Android 4.0+, you can use true full screen in "lean mode", the way you see in apps like YouTube, expanding the app right to the edges of the screen, hiding the status and navigation bars until the user next interacts. This is ideally suited to video or cut-scene content.
In Android 4.4+, however, you can now enter true full screen, fully interactive immersive mode. In this mode, your app will remain in true full screen until you choose otherwise; users can swipe down from the top of the screen to temporarily display the system UI.

Repo: [https://github.com/mesmotronic/cordova-plugin-fullscreen](https://github.com/mesmotronic/cordova-plugin-fullscreen)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-fullscreen
$ npm install --save @ionic-native/android-full-screen
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android




### Usage


```typescript
import { AndroidFullScreen } from '@ionic-native/android-full-screen';

constructor(private androidFullScreen: AndroidFullScreen) { }

...

this.androidFullScreen.isImmersiveModeSupported()
  .then(() => console.log('Immersive mode supported'))
  .catch(err => console.log(error));

```




<p><br></p>

## Instance Members

### immersiveHeight

The height of the screen in immersive mode.

### immersiveMode

Hide system UI and keep it hidden (Android 4.4+ only).

### immersiveWidth

The width of the screen in immersive mode.

### isImmersiveModeSupported

Is immersive mode supported?

### isSupported

Is this plugin supported?

### leanMode

Hide system UI until user interacts.

### setSystemUiVisibility

Manually set the the system UI to a custom mode. This mirrors the Android method of the same name. (Android 4.4+ only).

<dl>
<dt><h4>visibility</h4><strong>Type: </strong><code>AndroidSystemUiFlags</code></dt>
<dd>See AndroidSystemUiFlags table below</dd>
</dl>

### showSystemUI

Show system UI.

### showUnderStatusBar

Extend your app underneath the status bar (Android 4.4+ only).

### showUnderSystemUI

Extend your app underneath the system UI (Android 4.4+ only).

<p><br></p>

