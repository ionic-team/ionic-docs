# BluetoothSerial 

This plugin enables serial communication over Bluetooth. It was written for communicating between Android or iOS and an Arduino (not Android to Android or iOS to iOS).

Repo: [https://github.com/don/BluetoothSerial](https://github.com/don/BluetoothSerial)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-bluetooth-serial
$ npm install --save @ionic-native/bluetooth-serial
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS
* Windows Phone 8




### Usage


```typescript
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';

constructor(private bluetoothSerial: BluetoothSerial) { }


// Write a string
this.bluetoothSerial.write('hello world').then(success, failure);

// Array of int or bytes
this.bluetoothSerial.write([186, 220, 222]).then(success, failure);

// Typed Array
var data = new Uint8Array(4);
data[0] = 0x41;
data[1] = 0x42;
data[2] = 0x43;
data[3] = 0x44;
this.bluetoothSerial.write(data).then(success, failure);

// Array Buffer
this.bluetoothSerial.write(data.buffer).then(success, failure);
```




<p><br></p>

## Instance Members

### read

Reads data from the buffer

### available

Gets the number of bytes of data available

### readRSSI

Reads the RSSI from the connected peripheral

### connect

Connect to a Bluetooth device

<dl>
<dt><h4>macAddress_or_uuid</h4><strong>Type: </strong><code>string</code></dt>
<dd>Identifier of the remote device</dd>
</dl>

### clear

Clears data in buffer

### readUntil

Reads data from the buffer until it reaches a delimiter

<dl>
<dt><h4>delimiter</h4><strong>Type: </strong><code>string</code></dt>
<dd>string that you want to search until</dd>
</dl>

### discoverUnpaired

Discover unpaired devices

### connectInsecure

Connect insecurely to a Bluetooth device

<dl>
<dt><h4>macAddress</h4><strong>Type: </strong><code>string</code></dt>
<dd>Identifier of the remote device</dd>
</dl>

### disconnect

Disconnect from the connected device

### setDiscoverable

Makes the device discoverable by other devices

<dl>
<dt><h4>discoverableDuration</h4><strong>Type: </strong><code>number</code></dt>
<dd>Desired number of seconds device should be discoverable for
</dd>
</dl>

### list

Lists bonded devices

### isConnected

Reports the connection status

### enable

Enable Bluetooth on the device

### isEnabled

Reports if bluetooth is enabled

### setDeviceDiscoveredListener

Subscribe to be notified on Bluetooth device discovery. Discovery process must be initiated with the `discoverUnpaired` function.

### setName

Sets the human readable device name that is broadcasted to other devices

<dl>
<dt><h4>newName</h4><strong>Type: </strong><code>string</code></dt>
<dd>Desired name of device
</dd>
</dl>

### showBluetoothSettings

Show the Bluetooth settings on the device

### subscribe

Subscribe to be notified when data is received

<dl>
<dt><h4>delimiter</h4><strong>Type: </strong><code>string</code></dt>
<dd>the string you want to watch for</dd>
</dl>

### subscribeRawData

Subscribe to be notified when data is received

### write

Writes data to the serial port

<dl>
<dt><h4>data</h4><strong>Type: </strong><code>any</code></dt>
<dd>ArrayBuffer of data</dd>
</dl>

<p><br></p>

