# Toast 


This plugin allows you to show a native Toast (a little text popup) on iOS, Android and WP8. It's great for showing a non intrusive native notification which is guaranteed always in the viewport of the browser.

Requires Cordova plugin: `cordova-plugin-x-toast`. For more info, please see the [Toast plugin docs](https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin).


Repo: [https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin](https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-x-toast
$ npm install --save @ionic-native/toast
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* BlackBerry 10
* iOS
* Windows
* Windows Phone 8




### Usage


```typescript
import { Toast } from '@ionic-native/toast';

constructor(private toast: Toast) { }

...

this.toast.show(`I'm a toast`, '5000', 'center').subscribe(
  toast => {
    console.log(toast);
  }
);
```



<p><br></p>

## Instance Members

### hide

Manually hide any currently visible toast.

### show

Show a native toast for the given duration at the specified position.

<dl>
<dt><h4>message</h4><strong>Type: </strong><code>string</code></dt>
<dd>The message to display.</dd><dt><h4>duration</h4><strong>Type: </strong><code>string</code></dt>
<dd>Duration to show the toast, either 'short', 'long' or any number of milliseconds: '1500'.</dd><dt><h4>position</h4><strong>Type: </strong><code>string</code></dt>
<dd>Where to position the toast, either 'top', 'center', or 'bottom'.</dd>
</dl>

### showLongBottom

Shorthand for `show(message, 'long', 'bottom')`.

<dl>
<dt><h4>message</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd>
</dl>

### showLongCenter

Shorthand for `show(message, 'long', 'center')`.

<dl>
<dt><h4>message</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd>
</dl>

### showLongTop

Shorthand for `show(message, 'long', 'top')`.

<dl>
<dt><h4>message</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd>
</dl>

### showShortBottom

Shorthand for `show(message, 'short', 'bottom')`.

<dl>
<dt><h4>message</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd>
</dl>

### showShortCenter

Shorthand for `show(message, 'short', 'center')`.

<dl>
<dt><h4>message</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd>
</dl>

### showShortTop

Shorthand for `show(message, 'short', 'top')`.

<dl>
<dt><h4>message</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd>
</dl>

### showWithOptions

Show a native toast with the given options.

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>ToastOptions</code></dt>
<dd>See ToastOptions table below</dd>
</dl>

<p><br></p>

## ToastOptions

<dl>
<dt><h4>addPixelsY</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Add negative value to move it up a bit <span class="tag">optional</span></dd><dt><h4>data</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Pass JSON object to be sent back in success callback <span class="tag">optional</span></dd><dt><h4>duration</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Duration in ms to show <span class="tag">optional</span></dd><dt><h4>message</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Message to display <span class="tag">optional</span></dd><dt><h4>position</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Position <span class="tag">optional</span></dd><dt><h4>styling</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>Styling <span class="tag">optional</span></dd>
</dl>

