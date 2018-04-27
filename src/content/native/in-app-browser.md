# InAppBrowser 

Launches in app Browser

Repo: [https://github.com/apache/cordova-plugin-inappbrowser](https://github.com/apache/cordova-plugin-inappbrowser)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-inappbrowser
$ npm install --save @ionic-native/in-app-browser
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* AmazonFire OS
* Android
* Browser
* iOS
* macOS
* Windows




### Usage


```typescript
import { InAppBrowser } from '@ionic-native/in-app-browser';

constructor(private iab: InAppBrowser) { }


...


const browser = this.iab.create('https://ionicframework.com/');

browser.executeScript(...);

browser.insertCSS(...);
browser.on('loadstop').subscribe(event => {
   browser.insertCSS({ code: "body{color: red;" });
});

browser.close();

```



<p><br></p>

## Instance Members

### create

Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.

<dl>
<dt><h4>url</h4><strong>Type: </strong><code>string</code></dt>
<dd>The URL to load.</dd><dt><h4>target</h4><strong>Type: </strong><code>string</code></dt>
<dd>The target in which to load the URL, an optional parameter that defaults to _self. <span class="tag">optional</span></dd><dt><h4>options</h4></dt>
<dd>Options for the InAppBrowser. Optional, defaulting to: location=yes.
                The options string must not contain any blank space, and each feature's
                name/value pairs must be separated by a comma. Feature names are case insensitive. <span class="tag">optional</span></dd>
</dl>

<p><br></p>

## InAppBrowserEvent

<dl>
<dt><h4>AT_TARGET</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>BUBBLING_PHASE</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>CAPTURING_PHASE</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>Event</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>undefined</dd><dt><h4>bubbles</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>cancelBubble</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>cancelable</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>code</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>the error code, only in the case of loaderror.</dd><dt><h4>currentTarget</h4><strong>Type: </strong><code>reference</code></dt>
<dd>undefined</dd><dt><h4>defaultPrevented</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>eventPhase</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>isTrusted</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>message</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>the error message, only in the case of loaderror.</dd><dt><h4>returnValue</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>scoped</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>srcElement</h4><strong>Type: </strong><code>union</code></dt>
<dd>undefined</dd><dt><h4>target</h4><strong>Type: </strong><code>reference</code></dt>
<dd>undefined</dd><dt><h4>timeStamp</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>type</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>the eventname, either loadstart, loadstop, loaderror, or exit.</dd><dt><h4>url</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>the URL that was loaded.</dd>
</dl>

## InAppBrowserOptions

<dl>
<dt><h4>allowInlineMediaPlayback</h4><strong>Type: </strong><code>union</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>clearcache</h4><strong>Type: </strong><code>stringLiteral</code></dt>
<dd>Set to yes to have the browser's cookie cache cleared before the new window is opened. <span class="tag">optional</span></dd><dt><h4>clearsessioncache</h4><strong>Type: </strong><code>stringLiteral</code></dt>
<dd>Set to yes to have the session cookie cache cleared before the new window is opened. <span class="tag">optional</span></dd><dt><h4>closebuttoncaption</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>(iOS Only) Set to a string to use as the Done button's caption. Note that you need to localize this value yourself. <span class="tag">optional</span></dd><dt><h4>disallowoverscroll</h4><strong>Type: </strong><code>union</code></dt>
<dd>(iOS Only) Set to yes or no (default is no). Turns on/off the UIWebViewBounce property. <span class="tag">optional</span></dd><dt><h4>enableViewportScale</h4><strong>Type: </strong><code>union</code></dt>
<dd>(iOS Only)  Set to yes or no to prevent viewport scaling through a meta tag (defaults to no). <span class="tag">optional</span></dd><dt><h4>footer</h4><strong>Type: </strong><code>union</code></dt>
<dd>(Android Only) Set to yes to show a close button in the footer similar to the iOS Done button. The close button will appear the same as for the header hence use closebuttoncaption and closebuttoncolor to set its properties <span class="tag">optional</span></dd><dt><h4>footercolor</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>(Android Only) Set to a valid hex color string, for example #00ff00 or #CC00ff00 (#aarrggbb) , and it will change the footer color from default. Only has effect if user has footer set to yes <span class="tag">optional</span></dd><dt><h4>fullscreen</h4><strong>Type: </strong><code>stringLiteral</code></dt>
<dd>(Windows only) Set to yes to create the browser control without a border around it.
Please note that if location=no is also specified, there will be no control presented to user to close IAB window. <span class="tag">optional</span></dd><dt><h4>hardwareback</h4><strong>Type: </strong><code>union</code></dt>
<dd>Set to yes to use the hardware back button to navigate backwards through the InAppBrowser's history.
If there is no previous page, the InAppBrowser will close. The default value is yes, so you must set it to no if you want the back button to simply close the InAppBrowser. <span class="tag">optional</span></dd><dt><h4>hidden</h4><strong>Type: </strong><code>union</code></dt>
<dd>Set to yes to create the browser and load the page, but not show it. The loadstop event fires when loading is complete.
Omit or set to no (default) to have the browser open and load normally. <span class="tag">optional</span></dd><dt><h4>hidespinner</h4><strong>Type: </strong><code>union</code></dt>
<dd> (iOS Only) Set to yes or no to change the visibility of the loading indicator (defaults to no). <span class="tag">optional</span></dd><dt><h4>keyboardDisplayRequiresUserAction</h4><strong>Type: </strong><code>union</code></dt>
<dd>(iOS Only) Set to yes or no to open the keyboard when form elements receive focus via JavaScript's focus() call (defaults to yes). <span class="tag">optional</span></dd><dt><h4>location</h4><strong>Type: </strong><code>union</code></dt>
<dd>Set to yes or no to turn the InAppBrowser's location bar on or off. <span class="tag">optional</span></dd><dt><h4>mediaPlaybackRequiresUserAction</h4><strong>Type: </strong><code>union</code></dt>
<dd>Set to yes to prevent HTML5 audio or video from autoplaying (defaults to no). <span class="tag">optional</span></dd><dt><h4>presentationstyle</h4><strong>Type: </strong><code>union</code></dt>
<dd>(iOS Only) Set to pagesheet, formsheet or fullscreen to set the presentation style (defaults to fullscreen). <span class="tag">optional</span></dd><dt><h4>shouldPauseOnSuspend</h4><strong>Type: </strong><code>union</code></dt>
<dd>(Android Only) Set to yes to make InAppBrowser WebView to pause/resume with the app to stop background audio (this may be required to avoid Google Play issues) <span class="tag">optional</span></dd><dt><h4>suppressesIncrementalRendering</h4><strong>Type: </strong><code>union</code></dt>
<dd>(iOS Only) Set to yes or no to wait until all new view content is received before being rendered (defaults to no). <span class="tag">optional</span></dd><dt><h4>toolbar</h4><strong>Type: </strong><code>union</code></dt>
<dd>(iOS Only) Set to yes or no to turn the toolbar on or off for the InAppBrowser (defaults to yes) <span class="tag">optional</span></dd><dt><h4>toolbarposition</h4><strong>Type: </strong><code>union</code></dt>
<dd>(iOS Only) Set to top or bottom (default is bottom). Causes the toolbar to be at the top or bottom of the window. <span class="tag">optional</span></dd><dt><h4>transitionstyle</h4><strong>Type: </strong><code>union</code></dt>
<dd>(iOS Only) Set to fliphorizontal, crossdissolve or coververtical to set the transition style (defaults to coververtical). <span class="tag">optional</span></dd><dt><h4>zoom</h4><strong>Type: </strong><code>union</code></dt>
<dd>(Android Only) set to yes to show Android browser's zoom controls, set to no to hide them. Default value is yes. <span class="tag">optional</span></dd>
</dl>

