# Printer 

Prints documents or HTML rendered content

Repo: [https://github.com/katzer/cordova-plugin-printer](https://github.com/katzer/cordova-plugin-printer)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-printer
$ npm install --save @ionic-native/printer
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
import { Printer, PrintOptions } from '@ionic-native/printer';

constructor(private printer: Printer) { }

...

this.printer.isAvailable().then(onSuccess, onError);

let options: PrintOptions = {
     name: 'MyDocument',
     printerId: 'printer007',
     duplex: true,
     landscape: true,
     grayscale: true
   }

this.printer.print(content, options).then(onSuccess, onError);
```



<p><br></p>

## Instance Members

### check

Checks if the printer service is available (iOS) or if printer services are installed and enabled (Android).

### isAvailable

Checks whether the device is capable of printing (uses `check()` internally)

### pick

Displays a system interface allowing the user to select an available printer. To speak with a printer directly you need to know the network address by picking them before via `printer.pick`.

### print

Sends content to the printer.

<dl>
<dt><h4>content</h4></dt>
<dd>The content to print. Can be a URL or an HTML string. If a HTML DOM Object is provided, its innerHtml property value will be used.</dd><dt><h4>options</h4><strong>Type: </strong><code>PrintOptions</code></dt>
<dd>See PrintOptions table below <span class="tag">optional</span></dd>
</dl>

<p><br></p>

## PrintOptions

<dl>
<dt><h4>bounds</h4><strong>Type: </strong><code>union</code></dt>
<dd>The Size and position of the print view <span class="tag">optional</span></dd><dt><h4>duplex</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Specifies the duplex mode to use for the print job.
Either double-sided (duplex:true) or single-sided (duplex:false).
Double-sided by default.
Only supported on iOS <span class="tag">optional</span></dd><dt><h4>grayscale</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>If your application only prints black text, setting this property to true can result in better performance in many cases.
False by default. <span class="tag">optional</span></dd><dt><h4>landscape</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The orientation of the printed content, portrait or landscape
Portrait by default. <span class="tag">optional</span></dd><dt><h4>name</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The name of the print job and the document <span class="tag">optional</span></dd><dt><h4>printerId</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The network URL of the printer.
Only supported on iOS. <span class="tag">optional</span></dd>
</dl>

