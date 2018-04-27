# ZBar 


The ZBar Scanner Plugin allows you to scan 2d barcodes.

Requires Cordova plugin: `cordova-plugin-cszbar`. For more info, please see the [zBar plugin docs](https://github.com/tjwoon/csZBar).


Repo: [https://github.com/tjwoon/csZBar](https://github.com/tjwoon/csZBar)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-cszbar
$ npm install --save @ionic-native/zbar
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { ZBar, ZBarOptions } from '@ionic-native/zbar';

constructor(private zbar: ZBar) { }

...

let options: ZBarOptions = {
      flash: 'off',
      drawSight: false
    }

this.zbar.scan(options)
   .then(result => {
      console.log(result); // Scanned code
   })
   .catch(error => {
      console.log(error); // Error message
   });

```




<p><br></p>

## Instance Members

### scan

Open the scanner

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>ZBarOptions</code></dt>
<dd>See ZBarOptions table below</dd>
</dl>

<p><br></p>

## ZBarOptions

<dl>
<dt><h4>camera</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>A string defining the active camera when opening the scanner.
Possible values: "front", "back"
Default: "back" <span class="tag">optional</span></dd><dt><h4>drawSight</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>A boolean to show or hide a line in the center of the scanner.
Default: true <span class="tag">optional</span></dd><dt><h4>flash</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>A string defining the state of the flash.
Possible values: "on", "off", "auto"
Default: "auto" <span class="tag">optional</span></dd><dt><h4>text_instructions</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>A string representing the instruction text (Android only).
Default: "Please point your camera at the QR code." <span class="tag">optional</span></dd><dt><h4>text_title</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>A string representing the title text (Android only).
Default: "Scan QR Code" <span class="tag">optional</span></dd>
</dl>

