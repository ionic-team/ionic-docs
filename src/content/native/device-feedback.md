# DeviceFeedback 



Plugin that lets you provide haptic or acoustic feedback on Android devices.


Repo: [https://github.com/VVelda/device-feedback](https://github.com/VVelda/device-feedback)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-velda-devicefeedback
$ npm install --save @ionic-native/device-feedback
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android




### Usage


```typescript
import { DeviceFeedback } from '@ionic-native/device-feedback';

constructor(private deviceFeedback: DeviceFeedback) { }

...


this.deviceFeedback.acoustic();

this.deviceFeedback.haptic(0);

this.deviceFeedback.isFeedbackEnabled().then(feedback => {
    console.log(feedback);
    // {
    //   acoustic: true,
    //   haptic: true
    // }
  });

```



<p><br></p>

## Instance Members

### acoustic

Provide sound feedback to user, nevertheless respect user's settings and current active device profile as native feedback do.

### haptic

Provide vibrate feedback to user, nevertheless respect user's tactile feedback setting as native feedback do.

<dl>
<dt><h4>type</h4><strong>Type: </strong><code>number</code></dt>
<dd>Specify type of vibration feedback. 0 for long press, 1 for virtual key, or 3 for keyboard tap.
</dd>
</dl>

### isFeedbackEnabled

Check if haptic and acoustic feedback is enabled by user settings.

<p><br></p>

## DeviceFeedbackStatus

<dl>
<dt><h4>acoustic</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Acoustic Feedback</dd><dt><h4>haptic</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Haptic Feedback</dd>
</dl>

