# NFC 


The NFC plugin allows you to read and write NFC tags. You can also beam to, and receive from, other NFC enabled devices.

Use to
- read data from NFC tags
- write data to NFC tags
- send data to other NFC enabled devices
- receive data from NFC devices

This plugin uses NDEF (NFC Data Exchange Format) for maximum compatibilty between NFC devices, tag types, and operating systems.


Repo: [https://github.com/chariotsolutions/phonegap-nfc](https://github.com/chariotsolutions/phonegap-nfc)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add phonegap-nfc
$ npm install --save @ionic-native/nfc
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* BlackBerry 10
* Windows
* Windows Phone 8




### Usage


```typescript
import { NFC, Ndef } from '@ionic-native/nfc';

constructor(private nfc: NFC, private ndef: Ndef) { }

...

this.nfc.addNdefListener(() => {
  console.log('successfully attached ndef listener');
}, (err) => {
  console.log('error attaching ndef listener', err);
}).subscribe((event) => {
  console.log('received ndef message. the tag contains: ', event.tag);
  console.log('decoded tag id', this.nfc.bytesToHexString(event.tag.id));

  let message = this.ndef.textRecord('Hello world');
  this.nfc.share([message]).then(onSuccess).catch(onError);
});

```




<p><br></p>

## Instance Members

### erase

Erase a NDEF tag

### addMimeTypeListener

Registers an event listener for NDEF tags matching a specified MIME type.

<dl>
<dt><h4>mimeType</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd><dt><h4>onSuccess</h4><strong>Type: </strong><code>Function</code></dt>
<dd>See Function table below <span class="tag">optional</span></dd><dt><h4>onFailure</h4><strong>Type: </strong><code>Function</code></dt>
<dd>See Function table below <span class="tag">optional</span></dd>
</dl>

### handover

Send a file to another device via NFC handover.

<dl>
<dt><h4>uris</h4></dt>
<dd>A URI as a String, or an array of URIs.</dd>
</dl>

### addNdefListener

Registers an event listener for any NDEF tag.

<dl>
<dt><h4>onSuccess</h4><strong>Type: </strong><code>Function</code></dt>
<dd>See Function table below <span class="tag">optional</span></dd><dt><h4>onFailure</h4><strong>Type: </strong><code>Function</code></dt>
<dd>See Function table below <span class="tag">optional</span></dd>
</dl>

### addNdefFormatableListener

Registers an event listener for formatable NDEF tags.

<dl>
<dt><h4>onSuccess</h4><strong>Type: </strong><code>Function</code></dt>
<dd>See Function table below <span class="tag">optional</span></dd><dt><h4>onFailure</h4><strong>Type: </strong><code>Function</code></dt>
<dd>See Function table below <span class="tag">optional</span></dd>
</dl>

### share

Shares an NDEF Message(array of ndef records) via peer-to-peer.

<dl>
<dt><h4>message</h4></dt>
<dd>An array of NDEF Records.</dd>
</dl>

### bytesToHexString

Convert byte array to hex string

<dl>
<dt><h4>bytes</h4></dt>
<dd>undefined</dd>
</dl>

### addTagDiscoveredListener

Registers an event listener for tags matching any tag type.

<dl>
<dt><h4>onSuccess</h4><strong>Type: </strong><code>Function</code></dt>
<dd>See Function table below <span class="tag">optional</span></dd><dt><h4>onFailure</h4><strong>Type: </strong><code>Function</code></dt>
<dd>See Function table below <span class="tag">optional</span></dd>
</dl>

### beginSession

Starts the NFCNDEFReaderSession allowing iOS to scan NFC tags.

<dl>
<dt><h4>onSuccess</h4><strong>Type: </strong><code>Function</code></dt>
<dd>See Function table below <span class="tag">optional</span></dd><dt><h4>onFailure</h4><strong>Type: </strong><code>Function</code></dt>
<dd>See Function table below <span class="tag">optional</span></dd>
</dl>

### bytesToString

Convert byte array to string

<dl>
<dt><h4>bytes</h4></dt>
<dd>undefined</dd>
</dl>

### enabled

Check if NFC is available and enabled on this device.

### makeReadyOnly

Makes a NFC tag read only. **Warning** this is permanent.

### showSettings

Opens the device's NFC settings.

### stopHandover

Stop sharing NDEF data via NFC handover.

### stringToBytes

Convert string to byte array.

<dl>
<dt><h4>str</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd>
</dl>

### unshare

Stop sharing NDEF data via peer-to-peer.

### write

Writes an NdefMessage(array of ndef records) to a NFC tag.

<dl>
<dt><h4>message</h4></dt>
<dd>undefined</dd>
</dl>

<p><br></p>

## NdefEvent

<dl>
<dt><h4>tag</h4><strong>Type: </strong><code>reference</code></dt>
<dd>undefined</dd>
</dl>

## NdefRecord

<dl>
<dt><h4>id</h4><strong>Type: </strong><code>any[]</code></dt>
<dd>undefined</dd><dt><h4>payload</h4><strong>Type: </strong><code>number[]</code></dt>
<dd>undefined</dd><dt><h4>tnf</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>type</h4><strong>Type: </strong><code>number[]</code></dt>
<dd>undefined</dd>
</dl>

## NdefTag

<dl>
<dt><h4>canMakeReadOnly</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>id</h4><strong>Type: </strong><code>number[]</code></dt>
<dd>undefined</dd><dt><h4>isWriteable</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>maxSize</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>ndefMessage</h4><strong>Type: </strong><code>NdefRecord[]</code></dt>
<dd>undefined</dd><dt><h4>techTypes</h4><strong>Type: </strong><code>string[]</code></dt>
<dd>undefined</dd><dt><h4>type</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd>
</dl>

