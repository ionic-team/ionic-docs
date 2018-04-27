# MobileAccessibility 


This plugin exposes information on the status of various accessibility features of mobile operating systems, including, for example, whether a screen reader is running, invert colors is enabled, and the preferred scaling for text.
It also allows an application to send a string to be spoken by the screen reader, or a command to stop the screen reader from speaking.


Repo: [https://github.com/phonegap/phonegap-mobile-accessibility](https://github.com/phonegap/phonegap-mobile-accessibility)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add phonegap-plugin-mobile-accessibility
$ npm install --save @ionic-native/mobile-accessibility
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android Fire OS
* Android
* iOS
* Windows




### Usage


```typescript
import { MobileAccessibility } from 'ionic-native';


constructor(private mobileAccessibility: MobileAccessibility) { }

...

if(this.mobileAccessibility.isScreenReaderRunningCallback();

```




<p><br></p>

## Instance Members

### isScreenReaderRunning

Makes an asynchronous call to native MobileAccessibility to determine if a screen reader is running.

### MobileAccessibilityNotifications



### isSpeakScreenEnabled

undefined

### isBoldTextEnabled

undefined

### getTextZoom

* @returns {Promise<number>} Returns the result

### isSwitchControlRunning

undefined

### isDarkerSystemColorsEnabled

undefined

### isChromeVoxActive

On Android, this method returns true if ChromeVox is active and properly initialized with access to the text to speech API in the WebView.
If TalkBack is running but ChromeVox is not active, this method is useful to alert the user of a potential problem.

### isClosedCaptioningEnabled

undefined

### isTouchExplorationEnabled

undefined

### isMonoAudioEnabled

undefined

### isGrayscaleEnabled

undefined

### isInvertColorsEnabled

undefined

### isGuidedAccessEnabled

undefined

### postNotification

Posts a notification with a string for the screen reader to announce if it is running.

<dl>
<dt><h4>mobileAccessibilityNotification</h4><strong>Type: </strong><code>any</code></dt>
<dd>undefined</dd><dt><h4>value</h4><strong>Type: </strong><code>string</code></dt>
<dd>A string to be announced by a screen reader.</dd>
</dl>

### isSpeakSelectionEnabled

undefined

### isReduceTransparencyEnabled

undefined

### isReduceMotionEnabled

undefined

### isTalkBackRunning

An Android/Amazon Fire OS-specific proxy for the MobileAccessibility.isScreenReaderRunning method.

### isVoiceOverRunning

An iOS-specific proxy for the MobileAccessibility.isScreenReaderRunning method

### setTextZoom

undefined

<dl>
<dt><h4>textZoom</h4><strong>Type: </strong><code>number</code></dt>
<dd>A percentage value by which text in the WebView should be scaled.
</dd>
</dl>

### speak

Speaks a given string through the screenreader. On Android, if ChromeVox is active, it will use the specified queueMode and properties.

<dl>
<dt><h4>value</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd><dt><h4>queueMode</h4><strong>Type: </strong><code>number</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>properties</h4><strong>Type: </strong><code>any</code></dt>
<dd>
 <span class="tag">optional</span></dd>
</dl>

### stop

Stops speech.

### updateTextZoom

undefined

### usePreferredTextZoom

A Boolean value which specifies whether to use the preferred text zoom of a default percent value of 100.

<dl>
<dt><h4>value</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>Returns the result
</dd>
</dl>

<p><br></p>

