# Serial 


This plugin provides functions for working with Serial connections


Repo: [https://github.com/xseignard/cordovarduino](https://github.com/xseignard/cordovarduino)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordovarduino
$ npm install --save @ionic-native/serial
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* Ubuntu




### Usage


```typescript
import { Serial } from '@ionic-native/serial';

constructor(private serial: Serial) { }

...

this.serial.requestPermission().then(() => {
  this.serial.open({
    baudRate: 9800,
    dataBits: 4,
    stopBits: 1,
    parity: 0,
    dtr: true,
    rts: true,
    sleepOnPause: false
  }).then(() => {
    console.log('Serial connection opened');
  });
}).catch((error: any) => console.log(error));

```




<p><br></p>

## Instance Members

### close

Close the serial connection

### open

Open connection to a serial device

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>SerialOpenOptions</code></dt>
<dd>See SerialOpenOptions table below</dd>
</dl>

### read

Read from a serial connection

### registerReadCallback

Watch the incoming data from the serial connection. Clear the watch by unsubscribing from the observable

### requestPermission

Request permission to connect to a serial device

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>SerialPermissionOptions</code></dt>
<dd>See SerialPermissionOptions table below <span class="tag">optional</span></dd>
</dl>

### write

Write to a serial connection

<dl>
<dt><h4>data</h4><strong>Type: </strong><code>any</code></dt>
<dd>data to write to the serial connection</dd>
</dl>

### writeHex

Write hex to a serial connection

<dl>
<dt><h4>data</h4><strong>Type: </strong><code>any</code></dt>
<dd>data to write to the serial connection</dd>
</dl>

<p><br></p>

## SerialOpenOptions

<dl>
<dt><h4>baudRate</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>dataBits</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>dtr</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>parity</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>rts</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>sleepOnPause</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>stopBits</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd>
</dl>

## SerialPermissionOptions

<dl>
<dt><h4>driver</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>pid</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>vid</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd>
</dl>

