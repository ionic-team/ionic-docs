# BarcodeScanner 


The Barcode Scanner Plugin opens a camera view and automatically scans a barcode, returning the data back to you.

Requires Cordova plugin: `phonegap-plugin-barcodescanner`. For more info, please see the [BarcodeScanner plugin docs](https://github.com/phonegap/phonegap-plugin-barcodescanner).


Repo: [https://github.com/phonegap/phonegap-plugin-barcodescanner](https://github.com/phonegap/phonegap-plugin-barcodescanner)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add phonegap-plugin-barcodescanner
$ npm install --save @ionic-native/barcode-scanner
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* BlackBerry 10
* Browser
* iOS
* Windows




### Usage


```typescript
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

constructor(private barcodeScanner: BarcodeScanner) { }

...


this.barcodeScanner.scan().then(barcodeData => {
 console.log('Barcode data', barcodeData);
}).catch(err => {
	console.log('Error', err);
});
```



<p><br></p>

## Instance Members

### Encode



### encode

Encodes data into a barcode.
NOTE: not well supported on Android

<dl>
<dt><h4>type</h4><strong>Type: </strong><code>string</code></dt>
<dd>Type of encoding</dd><dt><h4>data</h4><strong>Type: </strong><code>any</code></dt>
<dd>Data to encode</dd>
</dl>

### scan

Open the barcode scanner.

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>BarcodeScannerOptions</code></dt>
<dd>See BarcodeScannerOptions table below <span class="tag">optional</span></dd>
</dl>

<p><br></p>

## BarcodeScanResult

<dl>
<dt><h4>cancelled</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>format</h4><strong>Type: </strong><code>union</code></dt>
<dd>undefined</dd><dt><h4>text</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd>
</dl>

## BarcodeScannerOptions

<dl>
<dt><h4>disableAnimations</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Disable animations. Supported on iOS only. <span class="tag">optional</span></dd><dt><h4>disableSuccessBeep</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Disable success beep. Supported on iOS only. <span class="tag">optional</span></dd><dt><h4>formats</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Formats separated by commas. Defaults to all formats except `PDF_417` and `RSS_EXPANDED`. <span class="tag">optional</span></dd><dt><h4>orientation</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Orientation. Supported on Android only. Can be set to `portrait` or `landscape`. Defaults to none so the user can rotate the phone and pick an orientation. <span class="tag">optional</span></dd><dt><h4>preferFrontCamera</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Prefer front camera. Supported on iOS and Android. <span class="tag">optional</span></dd><dt><h4>prompt</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Prompt text. Supported on Android only. <span class="tag">optional</span></dd><dt><h4>resultDisplayDuration</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Display scanned text for X ms. 0 suppresses it entirely, default 1500. Supported on Android only. <span class="tag">optional</span></dd><dt><h4>showFlipCameraButton</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Show flip camera button. Supported on iOS and Android. <span class="tag">optional</span></dd><dt><h4>showTorchButton</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Show torch button. Supported on iOS and Android. <span class="tag">optional</span></dd><dt><h4>torchOn</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Launch with the torch switched on (if available). Supported on Android only. <span class="tag">optional</span></dd>
</dl>

