# SpinnerDialog 



Repo: [https://github.com/greybax/cordova-plugin-native-spinner](https://github.com/greybax/cordova-plugin-native-spinner)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-native-spinner
$ npm install --save @ionic-native/spinner-dialog
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS
* Windows Phone 8
* Windows




### Usage


```typescript
import { SpinnerDialog } from '@ionic-native/spinner-dialog';

constructor(private spinnerDialog: SpinnerDialog) { }

...

this.spinnerDialog.show();

this.spinnerDialog.hide();
```



<p><br></p>

## Instance Members

### hide

Hides the spinner dialog if visible

### show

Shows the spinner dialog

<dl>
<dt><h4>title</h4><strong>Type: </strong><code>string</code></dt>
<dd>Spinner title (shows on Android only) <span class="tag">optional</span></dd><dt><h4>message</h4><strong>Type: </strong><code>string</code></dt>
<dd>Spinner message <span class="tag">optional</span></dd><dt><h4>cancelCallback</h4><strong>Type: </strong><code>any</code></dt>
<dd>Set to true to set spinner not cancelable. Or provide a function to call when the user cancels the spinner. <span class="tag">optional</span></dd><dt><h4>iOSOptions</h4><strong>Type: </strong><code>SpinnerDialogIOSOptions</code></dt>
<dd>See SpinnerDialogIOSOptions table below <span class="tag">optional</span></dd>
</dl>

<p><br></p>

## SpinnerDialogIOSOptions

<dl>
<dt><h4>overlayOpacity</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Opacity of the overlay, between 0 (transparent) and 1 (opaque). Default: 0.35 <span class="tag">optional</span></dd><dt><h4>textColorBlue</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Blue component of the text color, between 0 and 1. Default: 1 <span class="tag">optional</span></dd><dt><h4>textColorGreen</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Green component of the text color, between 0 and 1. Default: 1 <span class="tag">optional</span></dd><dt><h4>textColorRed</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Red component of the text color, between 0 and 1. Default: 1 <span class="tag">optional</span></dd>
</dl>

